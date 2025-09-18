import React from "react";

export default function Rating({ value }) {
  return (
    <div className="flex items-center justify-center gap-1 text-sm text-gray-600">
      {Array.from({ length: 5 }, (_, i) => (
        <span
          key={i}
          className={i < value ? "text-[#ffc600]" : "text-[#c1c8ce]"}
        >
          ★
        </span>
      ))}
    </div>
  );
}
