import React from "react";
import FilterPanel from "./FilterPanel";

export default function Sidebar({
  categories,
  selectedCategory,
  onSelectCategory,
  totalCount,
  sort,
  setSort,
  color,
  setColor,
  priceRange,
  setPriceRange,
}) {
  return (
    <aside className="w-[355px] h-full p-4 hidden md:block border-r bg-white">
      {/* Hot Deals (Static Section) */}
      <div>
        <h4 className="font-semibold mb-4">Hot Deals</h4>
        <ul className="space-y-2 text-gray-700">
          <li>Nike (2)</li>
          <li className="text-blue-500">Airmax (48)</li>
          <li>Nike (14)</li>
          <li>Adidas (15)</li>
          <li>Vans (23)</li>
          <li>All Stars (1)</li>
          <li>Adidas (95)</li>
        </ul>
      </div>

      {/* Filters */}
      <FilterPanel
        totalCount={totalCount}
        sort={sort}
        setSort={setSort}
        color={color}
        setColor={setColor}
        categories={categories}
        selectedCategory={selectedCategory}
        onSelectCategory={onSelectCategory}
        priceRange={priceRange}
        setPriceRange={setPriceRange}
      />
    </aside>
  );
}
