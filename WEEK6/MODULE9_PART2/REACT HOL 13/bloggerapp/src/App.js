import React from 'react';
import './App.css';
import BookDetails from './components/BookDetails';
import BlogDetails from './components/BlogDetails';
import CourseDetails from './components/CourseDetails';
import { books, blogs, courses } from './data';

// ─────────────────────────────────────────────────────────────────────────────
// App – Root component
// Renders three columns side-by-side (matching the assignment screenshot):
//   Left   → Course Details  (className="mystyle1")
//   Centre → Book Details    (className="st2")
//   Right  → Blog Details    (className="v1")
// ─────────────────────────────────────────────────────────────────────────────

function App() {
  return (
    <div className="app-wrapper">
      <h1 className="app-title">Blogger App</h1>
      <p className="app-subtitle">
        React Conditional Rendering – 7 techniques demonstrated
      </p>

      {/* ── Legend ──────────────────────────────────────────────────────── */}
      <div className="legend">
        <span className="legend-item"><span>1</span> Element Variables</span>
        <span className="legend-item"><span>2</span> Ternary Operator</span>
        <span className="legend-item"><span>3</span> if / else Statement</span>
        <span className="legend-item"><span>4</span> Logical &amp;&amp; Operator</span>
        <span className="legend-item"><span>5</span> Switch / Case</span>
        <span className="legend-item"><span>6</span> IIFE</span>
        <span className="legend-item"><span>7</span> Null Return</span>
      </div>

      {/* ── Three-column layout ──────────────────────────────────────────── */}
      <div className="columns-wrapper">

        {/* Column 1 – Course Details (className="mystyle1") */}
        <div className="mystyle1">
          <h1> Course Details</h1>
          <CourseDetails courses={courses} />
        </div>

        {/* Column 2 – Book Details (className="st2") */}
        <div className="st2">
          <h1> Book Details</h1>
          <BookDetails books={books} />
        </div>

        {/* Column 3 – Blog Details (className="v1") */}
        <div className="v1">
          <h1> Blog Details</h1>
          <BlogDetails blogs={blogs} />
        </div>

      </div>

      {/* ── Technique Summary Cards ──────────────────────────────────────── */}
      <div className="techniques-section">
        <h2>🎯 Conditional Rendering Techniques Used</h2>
        <div className="techniques-grid">
          <div className="technique-card">
            <div className="tc-number">Technique 1</div>
            <div className="tc-name">Element Variables</div>
            <div className="tc-where">BookDetails → const bookdet = (&lt;ul&gt;…&lt;/ul&gt;)</div>
          </div>
          <div className="technique-card">
            <div className="tc-number">Technique 2</div>
            <div className="tc-name">Ternary Operator</div>
            <div className="tc-where">BookDetails → price &gt; 600 ? green : black</div>
          </div>
          <div className="technique-card">
            <div className="tc-number">Technique 3</div>
            <div className="tc-name">if / else Statement</div>
            <div className="tc-where">BlogDetails → if (published) &#123; content = … &#125;</div>
          </div>
          <div className="technique-card">
            <div className="tc-number">Technique 4</div>
            <div className="tc-name">Logical &amp;&amp; Operator</div>
            <div className="tc-where">BlogDetails → blog.published &amp;&amp; &lt;p&gt;…&lt;/p&gt;</div>
          </div>
          <div className="technique-card">
            <div className="tc-number">Technique 5</div>
            <div className="tc-name">Switch / Case</div>
            <div className="tc-where">CourseDetails → switch(cname) to pick badge</div>
          </div>
          <div className="technique-card">
            <div className="tc-number">Technique 6</div>
            <div className="tc-name">IIFE</div>
            <div className="tc-where">CourseDetails → &#123;(()=&gt; &#123; … &#125;)()&#125;</div>
          </div>
          <div className="technique-card">
            <div className="tc-number">Technique 7</div>
            <div className="tc-name">Null Return</div>
            <div className="tc-where">CourseItem → if (!active) return null</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
