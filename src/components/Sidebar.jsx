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
    <aside className=" w-64 md:min-w-[355px] h-full p-4 hidden md:block border-r bg-white">
      {/* Hot Deals (Static Section) */}
      <div className="bg-[#f6f7f8]   border-4 border-black py-4 px-2">
        <h3 className=" mb-8 text-xl text-black ">Hot Deals</h3>
        <ul className="space-y-2 text-gray-700 flex flex-col gap-4">
          <li className="flex justify-between items-center">
            <span>Nike</span> <span>34</span>
          </li>
          <li className="text-[#33A0ff] flex justify-between items-center">
            <span>Airmax</span> <span>48</span>
          </li>
          <li className="flex justify-between items-center">
            <span>Addidas</span> <span>14</span>
          </li>
          <li className="flex justify-between items-center">
            <span>New Balance</span> <span>23</span>
          </li>
          <li className="flex justify-between items-center">
            <span>Vans</span> <span>2</span>
          </li>
          <li className="flex justify-between items-center">
            <span>All Stars</span> <span>10</span>
          </li>
          <li className="flex justify-between items-center">
            <span>Puma</span> <span>38</span>
          </li>
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
