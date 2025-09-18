import React from "react";

export default function Rating({ value, count }) {
  return (
    <div className="flex items-center gap-1 text-sm text-gray-600">
      {Array.from({ length: 5 }, (_, i) => (
        <span
          key={i}
          className={i < value ? "text-yellow-400" : "text-gray-300"}
        >
          ★
        </span>
      ))}
      <span>({count})</span>
    </div>
  );
}
