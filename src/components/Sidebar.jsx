import React from "react";
import FilterPanel from "./FilterPanel";
import { X, Menu } from "lucide-react";

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
  sidebarOpen,
  setSidebarOpen,
}) {
  return (
    <aside
      className={`h-full lg:h-auto w-76 md:min-w-[330px] bg-white flex flex-col`}
    >
      {/* Header (only mobile) */}
      <div className="flex items-center justify-between px-4 py-3 border-b lg:hidden">
        <h2 className="font-semibold text-lg">Filters</h2>
        <button onClick={() => setSidebarOpen(!sidebarOpen)}>
          {sidebarOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Content scrollable on mobile */}
      <div className="flex-1 overflow-y-auto lg:overflow-visible">
        {/* Hot Deals */}
        <div className="bg-[#f6f7f8] py-6 px-4">
          <h3 className="mb-6 text-xl text-black">Hot Deals</h3>
          <ul className="space-y-4 text-gray-700 text-sm md:text-base">
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
            <li className="flex justify-between items-center">
              <span>The North Face</span> <span>24</span>
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
      </div>
    </aside>
  );
}
