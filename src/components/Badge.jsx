import React from "react";

export default function Badge({ text }) {
  return (
    <span className="absolute top-2 left-2 bg-[#FF4858] text-white text-xs px-2 py-1 rounded">
      {text}
    </span>
  );
}
