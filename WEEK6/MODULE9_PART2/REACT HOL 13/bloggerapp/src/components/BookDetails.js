import React from 'react';

// ─────────────────────────────────────────────────────────────────────────────
// BookDetails Component
// Demonstrates TWO conditional rendering techniques:
//   1. Element Variables  – building JSX and storing it in a variable (bookdet)
//   2. Ternary Operator   – inline condition ? trueJSX : falseJSX
// ─────────────────────────────────────────────────────────────────────────────

function BookDetails(props) {
  // ── Technique 1: Element Variable ─────────────────────────────────────────
  // We build the JSX once and store it in a variable, then embed {bookdet}
  // in the return statement.  This keeps the render logic clean.
  const bookdet = (
    <ul>
      {props.books.map((book) => (
        <div key={book.id}>
          {/* ── Technique 2: Ternary Operator ───────────────────────────────
               Show the book name in green if price > 600, else in default black.
               This is a classic inline ternary for per-item conditional styling. */}
          <h3 style={{ color: book.price > 600 ? '#2e7d32' : '#111' }}>
            {book.bname}
          </h3>
          <h4>{book.price}</h4>
        </div>
      ))}
    </ul>
  );

  return (
    <div>
      {/* Embed the element variable */}
      {bookdet}
    </div>
  );
}

export default BookDetails;
