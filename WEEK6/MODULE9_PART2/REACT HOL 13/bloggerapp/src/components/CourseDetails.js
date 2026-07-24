import React from 'react';

// ─────────────────────────────────────────────────────────────────────────────
// CourseDetails Component
// Demonstrates THREE conditional rendering techniques:
//   1. Switch / Case Statement – selects a label based on course name
//   2. IIFE (Immediately Invoked Function Expression) – complex inline logic
//   3. Preventing Render / Null Return – returns null to hide inactive courses
// ─────────────────────────────────────────────────────────────────────────────

// ── Technique 7: Null / Preventing Render ─────────────────────────────────
// This inner component simply returns null when a course is not active,
// effectively hiding it from the DOM entirely.
function CourseItem({ course }) {
  if (!course.active) return null; // <-- prevents rendering this item

  // ── Technique 5: Switch / Case Statement ──────────────────────────────────
  // Select a badge label based on the course name.
  let badge;
  switch (course.cname) {
    case 'Angular':
      badge = '🔴 Framework';
      break;
    case 'React':
      badge = '⚛️ Library';
      break;
    case 'Vue':
      badge = '🟢 Framework';
      break;
    default:
      badge = '📘 Course';
  }

  return (
    <div className="course-item">
      <h3>{course.cname}</h3>
      <p>{course.date}</p>
      {/* Display the switch-selected badge */}
      <span className="course-badge">{badge}</span>
    </div>
  );
}

function CourseDetails(props) {
  // ── Technique 6: IIFE (Immediately Invoked Function Expression) ───────────
  // An IIFE runs inline inside JSX, allowing multi-statement logic
  // (e.g., calculating counts) that would be impossible with a simple ternary.
  const coursedet = (
    <div>
      {/* IIFE: compute a summary header and render it together with the list */}
      {(() => {
        const activeCount = props.courses.filter((c) => c.active).length;
        const total = props.courses.length;
        return (
          <p className="course-summary">
            Showing <strong>{activeCount}</strong> of {total} courses
          </p>
        );
      })()}

      {/* Render each course through the null-returning CourseItem component */}
      {props.courses.map((course) => (
        <CourseItem key={course.id} course={course} />
      ))}
    </div>
  );

  return <div>{coursedet}</div>;
}

export default CourseDetails;
