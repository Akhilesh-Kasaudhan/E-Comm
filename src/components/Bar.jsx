import React from "react";
import { Menu, Grid3x3 } from "lucide-react";

export default function Bar({ totalCount, sort, setSort, view, setView }) {
  return (
    <div className="flex justify-between items-center bg-[#f6f7f8] px-4 py-2 mt-4">
      {/* Left: Total Items */}
      <p className="text-sm text-gray-600">{totalCount} Items</p>

      {/* Middle: Sort By */}
      <div className="flex items-center gap-2">
        <label htmlFor="sort" className="text-sm text-gray-500">
          Sort By:
        </label>
        <select
          id="sort"
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          className="border-2 border-gray-200 bg-white rounded px-2 py-1 text-sm outline-none text-black"
        >
          <option value="hot">Hot</option>
          <option value="popular">Popular</option>
          <option value="name_asc">Name (A–Z)</option>
          <option value="name_desc">Name (Z–A)</option>
          <option value="priceLowToHigh">Price: Low to High</option>
          <option value="priceHighToLow">Price: High to Low</option>
        </select>
      </div>

      {/* Right: View Toggle */}
      <div className="flex gap-2">
        <div
          onClick={() => setView("grid")}
          className={`cursor-pointer text-sm ${
            view === "grid"
              ? "text-[#0b74de]"
              : "text-gray-500 hover:bg-gray-100"
          }`}
        >
          <Grid3x3 size={28} />
        </div>
        <div
          onClick={() => setView("list")}
          className={`cursor-pointer text-sm ${
            view === "list"
              ? "text-[#0b74de]"
              : "text-gray-500 hover:bg-gray-100"
          }`}
        >
          <Menu size={28} />
        </div>
      </div>
    </div>
  );
}
