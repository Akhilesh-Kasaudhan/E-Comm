import React from "react";
import Badge from "./Badge";
import Rating from "./Rating";

export default function ProductCard({ product, highlightColor }) {
  const {
    name,
    price,
    discountPrice,
    discountPercent,
    ratingValue,
    ratingCount,
    isHot,
    imageUrl,
    colors = [],
  } = product;

  // Pick highlight only if product actually supports the color
  const bgColor =
    highlightColor && colors.includes(highlightColor)
      ? highlightColor
      : "#F6F7F8";

  return (
    <div className="relative border rounded p-4 shadow-sm bg-[#F6F7F8] hover:shadow-lg transition">
      {isHot && <Badge text="HOT" />}
      <div
        className="w-full h-40 flex items-center justify-center rounded"
        style={{ background: bgColor }}
      >
        <img src={imageUrl} alt={name} className="max-h-32 object-contain" />
      </div>
      <h3 className="mt-4 font-semibold">{name}</h3>
      <Rating value={ratingValue} count={ratingCount} />
      <div className="mt-2">
        <span className="text-blue-600 font-bold mr-2">
          ${discountPrice.toFixed(2)}
        </span>
        <span className="line-through text-gray-400">${price.toFixed(2)}</span>
        <span className="ml-2 text-red-500">{discountPercent}% off</span>
      </div>
    </div>
  );
}
