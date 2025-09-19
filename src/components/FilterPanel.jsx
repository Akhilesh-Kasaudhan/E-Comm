import React from "react";
import { Range } from "react-range";

export default function FilterPanel({
  priceRange,
  setPriceRange,
  color,
  setColor,
  categories,
  selectedCategory,
  onSelectCategory,
}) {
  const [min, max] = priceRange;

  return (
    <div className="space-y-8 mt-8  bg-white ">
      {/* Price Range */}
      <div className="flex flex-col justify-center gap-6 min-h-[190px]  bg-[#f6f7f8] px-4 py-2 ">
        <h3 className=" mb-2 uppercase text-xl text-black">Prices</h3>
        <p className="text-sm text-gray-600 mb-1 justify-between flex">
          <span>Ranger: </span>{" "}
          <span className="font-medium">
            ${min} – ${max}
          </span>
        </p>
        <Range
          step={10}
          min={0}
          max={5299}
          values={priceRange}
          onChange={(values) => setPriceRange(values)}
          renderTrack={({ props, children }) => {
            const { key, ...rest } = props;
            return (
              <div
                key={key}
                {...rest}
                className="h-2 w-full rounded bg-gray-200"
              >
                {children}
              </div>
            );
          }}
          renderThumb={({ props }) => {
            const { key, ...rest } = props;
            return (
              <div
                key={key}
                {...rest}
                className="w-4 h-4 bg-blue-500 rounded-full shadow cursor-pointer"
              />
            );
          }}
        />
      </div>

      <div className=" bg-[#f6f7f8] px-4 py-2 min-h-[145px] flex flex-col justify-center gap-4">
        <h3 className="text-black mb-2 uppercase text-xl">Color</h3>
        <div className="flex gap-4 justify-center">
          {["blue", "brown", "black", "grey", "green"].map((c) => (
            <span
              key={c}
              aria-label={c}
              onClick={() => setColor(color === c ? null : c)}
              className={`w-6 h-6 rounded-full border-2 ${
                color === c ? "ring-2 ring-offset-2 ring-blue-500" : ""
              }`}
              style={{ background: c }}
            />
          ))}
        </div>
      </div>

      <div className=" bg-[#f6f7f8] px-4 py-2 min-h-[250px] flex flex-col justify-center gap-4">
        <h3 className=" mb-2 text-xl text-black">Categories</h3>
        {categories.map((c) => (
          <div
            key={c}
            onClick={() => onSelectCategory(selectedCategory === c ? null : c)}
            className={`block w-full text-left p-4 cursor-pointer space-y-4   ${
              selectedCategory === c
                ? "font-bold text-blue-600"
                : "text-gray-700"
            }`}
          >
            {c}
          </div>
        ))}
      </div>

      <div className=" bg-[#f6f7f8] px-4 py-2 min-h-[60px] flex items-center justify-center cursor-pointer">
        <span className="text-xl text-black text-center">MORE</span>
      </div>
    </div>
  );
}
