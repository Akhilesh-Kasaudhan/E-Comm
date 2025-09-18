import React from "react";

export default function FilterPanel({
  totalCount,
  sort,
  setSort,
  color,
  setColor,
  categories,
  selectedCategory,
  onSelectCategory,
  priceRange,
  setPriceRange,
}) {
  const [min, max] = priceRange;

  return (
    <div className="mt-6">
      {/* Sorting */}
      <div className="flex justify-between items-center mb-4">
        <span className="text-sm text-gray-600">
          {totalCount} products found
        </span>
        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          className="border p-2 rounded"
        >
          <option value="name_asc">Name (A–Z)</option>
          <option value="name_desc">Name (Z–A)</option>
          <option value="price_asc">Price (Low–High)</option>
          <option value="price_desc">Price (High–Low)</option>
          <option value="popularity_desc">Popularity</option>
        </select>
      </div>

      {/* Price Range */}
      <div className="mb-6">
        <h5 className="font-semibold mb-2">Price Range</h5>
        <div className="flex gap-2 items-center">
          <input
            type="number"
            value={min}
            min="0"
            max={max}
            onChange={(e) => setPriceRange([Number(e.target.value), max])}
            className="w-20 border rounded px-2 py-1"
          />
          <span>–</span>
          <input
            type="number"
            value={max}
            min={min}
            max="9999"
            onChange={(e) => setPriceRange([min, Number(e.target.value)])}
            className="w-20 border rounded px-2 py-1"
          />
        </div>
        <div className="flex gap-2 mt-2 items-center">
          <input
            type="range"
            min="0"
            max="9999"
            step="10"
            value={min}
            onChange={(e) => setPriceRange([Number(e.target.value), max])}
            className="w-full"
          />
          <input
            type="range"
            min="0"
            max="9999"
            step="10"
            value={max}
            onChange={(e) => setPriceRange([min, Number(e.target.value)])}
            className="w-full"
          />
        </div>
        <span className="text-sm text-gray-600">
          ${min} – ${max}
        </span>
      </div>

      {/* Color Filter */}
      <div className="mb-6">
        <h5 className="font-semibold mb-2">Color</h5>
        <div className="flex gap-2">
          {["black", "blue", "grey", "white", "brown"].map((c) => (
            <button
              key={c}
              aria-label={c}
              onClick={() => setColor(color === c ? null : c)}
              className={`w-6 h-6 rounded-full border ${
                color === c ? "ring-2 ring-offset-2" : ""
              }`}
              style={{ background: c }}
            />
          ))}
        </div>
      </div>

      {/* Category Filter */}
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
