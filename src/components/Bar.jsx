import { Menu, Grid3x3, XCircle } from "lucide-react";

export default function Bar({
  totalCount,
  sort,
  setSort,
  view,
  setView,
  clearFilters,
}) {
  return (
    <div className="flex justify-between items-center bg-[#f6f7f8] px-2 sm:gap-4 sm:px-4 py-2 mt-4 ">
      <p className="text-sm text-gray-600">{totalCount} Items</p>

      <div className="flex items-center sm:gap-2">
        <label htmlFor="sort" className="text-sm text-gray-500 hidden sm:block">
          Sort By:
        </label>
        <select
          id="sort"
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          className="border-2 border-gray-200 bg-white rounded sm:px-2 py-1 text-sm outline-none text-black"
        >
          <option value="hot">Hot</option>
          <option value="popular">Popular</option>
          <option value="name_asc">Name (A–Z)</option>
          <option value="name_desc">Name (Z–A)</option>
          <option value="priceLowToHigh">Price: Low to High</option>
          <option value="priceHighToLow">Price: High to Low</option>
        </select>
      </div>

      <div className="flex items-center ">
        <button
          onClick={clearFilters}
          className="flex items-center gap-1 px-2 py-1 text-xs font-medium text-red-500 border border-red-300 rounded hover:bg-red-50"
        >
          <XCircle size={16} /> Clear All
        </button>

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
