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
    <div className="space-y-6 p-4 bg-white rounded shadow-sm">
      {/* Price Range */}
      <div>
        <h5 className="font-semibold mb-2 uppercase text-sm">Prices</h5>
        <p className="text-sm text-gray-600 mb-1">
          Range:{" "}
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
          renderTrack={({ props, children }) => (
            <div
              {...props}
              className="h-2 w-full rounded bg-gray-200"
              style={{ ...props.style }}
            >
              {children}
            </div>
          )}
          renderThumb={({ props }) => (
            <div
              {...props}
              className="w-4 h-4 bg-blue-500 rounded-full shadow cursor-pointer"
            />
          )}
        />
      </div>

      <div>
        <h5 className="font-semibold mb-2 uppercase text-sm">Color</h5>
        <div className="flex gap-3">
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

      <div>
        <h5 className="font-semibold mb-2">Categories</h5>
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => onSelectCategory(selectedCategory === c ? null : c)}
            className={`block w-full text-left py-2 ${
              selectedCategory === c
                ? "font-bold text-blue-600"
                : "text-gray-700"
            }`}
          >
            {c}
          </button>
        ))}
      </div>
    </div>
  );
}
