import React from "react";
import Badge from "./Badge";
import Rating from "./Rating";

export default function ProductCard({ product, highlightColor, view }) {
  const {
    name,
    price,
    discountPrice,
    discountPercent,
    ratingValue,
    isHot,
    imageUrl,
    colors = [],
  } = product;

  const bgColor =
    highlightColor && colors.includes(highlightColor)
      ? highlightColor
      : "#F6F7F8";

  if (view === "list") {
    return (
      <div className="relative  shadow-sm bg-white hover:shadow-lg transition flex gap-4 p-4 items-center">
        {isHot && <Badge text="HOT" />}

        <div
          className="w-40 h-40 flex items-center justify-center rounded"
          style={{ background: bgColor }}
        >
          <img src={imageUrl} alt={name} className="max-h-36 object-contain" />
        </div>

        <div className="flex flex-col flex-1">
          <h3 className="font-semibold text-black text-lg">{name}</h3>
          <Rating value={ratingValue} />
          <div className="mt-2">
            <span className="text-[#40BFFF] font-bold mr-2">
              ${discountPrice.toFixed(2)}
            </span>
            <span className="line-through text-gray-300">
              ${price.toFixed(2)}
            </span>
            <span className="ml-2 text-[#fb7181]">{discountPercent}% off</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative  md:min-h-[389px] md:min-w-[350px] shadow-sm bg-white hover:shadow-lg transition">
      {isHot && <Badge text="HOT" />}
      <div
        className="w-full max-w-[350px] h-72 flex items-center justify-center rounded"
        style={{ background: bgColor }}
      >
        <img src={imageUrl} alt={name} className="max-h-42 object-contain" />
      </div>
      <h3 className="mt-4 font-semibold text-center text-black">{name}</h3>
      <Rating value={ratingValue} />
      <div className="mt-2 text-center">
        <span className="text-[#40BFFF] font-bold mr-2">
          ${discountPrice.toFixed(2)}
        </span>
        <span className="line-through text-gray-300">${price.toFixed(2)}</span>
        <span className="ml-2 text-[#fb7181]">{discountPercent}% off</span>
      </div>
    </div>
  );
}
