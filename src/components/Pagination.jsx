import React from "react";

export default function Pagination({ totalPages, currentPage, setPage }) {
  return (
    <div className="mt-6 flex justify-center gap-2">
      <button
        disabled={currentPage === 1}
        onClick={() => setPage(currentPage - 1)}
      >
        Prev
      </button>
      {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
        <button
          key={p}
          onClick={() => setPage(p)}
          className={p === currentPage ? "font-bold underline" : ""}
        >
          {p}
        </button>
      ))}
      <button
        disabled={currentPage === totalPages}
        onClick={() => setPage(currentPage + 1)}
      >
        Next
      </button>
    </div>
  );
}
