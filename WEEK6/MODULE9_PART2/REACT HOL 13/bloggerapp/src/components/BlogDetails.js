import React from 'react';

// ─────────────────────────────────────────────────────────────────────────────
// BlogDetails Component
// Demonstrates TWO conditional rendering techniques:
//   1. if / else Statement  – assigns different JSX to `content` variable
//   2. Logical && Operator  – renders only when condition is truthy
// ─────────────────────────────────────────────────────────────────────────────

function BlogDetails(props) {
  return (
    <div>
      {props.blogs.map((blog) => {
        // ── Technique 3: if / else Statement ────────────────────────────────
        // Decide what to render for the author section using a plain if/else.
        // The chosen JSX is stored in the `content` element variable.
        let content;
        if (blog.published) {
          content = (
            <p className="blog-author">
              <strong>{blog.author}</strong>
            </p>
          );
        } else {
          content = (
            <p className="blog-draft">
              <em>Draft – not published</em>
            </p>
          );
        }

        return (
          <div key={blog.id} className="blog-item">
            <h3>{blog.title}</h3>

            {/* Embed the if/else element variable */}
            {content}

            {/* ── Technique 4: Logical && Operator ──────────────────────────
                 Only render the description paragraph when the blog is published.
                 If `blog.published` is false the expression short-circuits to false
                 and React renders nothing. */}
            {blog.published && <p className="blog-desc">{blog.description}</p>}
          </div>
        );
      })}
    </div>
  );
}

export default BlogDetails;
