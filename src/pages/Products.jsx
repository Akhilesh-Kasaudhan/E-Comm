import React, { useState, useEffect } from "react";
import productsData from "../data/products.json";
import { useProducts } from "../hooks/useProducts";
import Sidebar from "../components/Sidebar";
import ProductCard from "../components/ProductCard";
import Pagination from "../components/Pagination";
import Bar from "../components/Bar";
import { ArrowRight } from "lucide-react";

export default function Products() {
  const {
    visibleProducts,
    totalPages,
    currentPage,
    setPage,
    sort,
    setSort,
    color,
    setColor,
    category,
    setCategory,
    totalCount,
    priceRange,
    setPriceRange,
  } = useProducts(productsData, 6);

  const [view, setView] = useState("grid");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    if (sidebarOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [sidebarOpen]);

  const clearFilters = () => {
    setCategory(null);
    setColor(null);
    setPriceRange([0, 5299]);
    setSort("name_asc");
    setPage(1);
  };

  return (
    <div className="container w-full px-4 flex flex-col lg:flex-row gap-12 py-8 mt-8 mb-0 relative overflow-x-hidden">
      {/* Sidebar */}
      <div
        className={`fixed lg:static top-0 left-0 h-full lg:h-auto w-72 lg:w-72 bg-white z-40 shadow-lg lg:shadow-none overflow-y-auto transform transition-transform duration-300
  ${sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}`}
      >
        <Sidebar
          categories={["Bags", "Belts", "Sneakers"]}
          selectedCategory={category}
          onSelectCategory={setCategory}
          totalCount={totalCount}
          sort={sort}
          setSort={setSort}
          color={color}
          setColor={setColor}
          priceRange={priceRange}
          setPriceRange={setPriceRange}
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
        />
      </div>

      {/* Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/30 lg:hidden z-30"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Floating Arrow Button (mobile/tablet only) */}
      {!sidebarOpen && (
        <button
          onClick={() => setSidebarOpen(true)}
          className="fixed top-1/2 left-2 z-50 p-2 rounded-full bg-[#40bfff] text-white shadow-md lg:hidden"
        >
          <ArrowRight size={22} />
        </button>
      )}

      {/* Main Section */}
      <main className="flex-1">
        {/* Hero Section */}
        <div className="h-88 bg-[#40bfff] w-full flex flex-col md:flex-row justify-between gap-4">
          <div className="flex-1 flex flex-col justify-center text-white px-6 md:px-8 max-w-full md:max-w-[400px]">
            <h2 className="text-xl md:text-2xl font-bold">
              Adidas Men Running Sneakers
            </h2>
            <p className="mt-2 text-sm opacity-80">
              Performance and Design. Taken right to the edge.
            </p>
            <span className="mt-4 text-md font-semibold hover:border-b-2 hover:border-b-white cursor-pointer w-max">
              SHOP NOW
            </span>
          </div>

          {/* Image (hidden on mobile) */}
          <div className="hidden md:flex flex-1 items-center justify-center">
            <img
              src="/hero.png"
              alt="hero"
              className="max-h-40 md:max-h-56 object-contain -rotate-y-180"
            />
          </div>
        </div>

        {/* Bar Section */}
        <Bar
          totalCount={totalCount}
          sort={sort}
          setSort={setSort}
          view={view}
          setView={setView}
          clearFilters={clearFilters}
        />

        {/* Product Grid/List */}
        <div
          className={`mt-4 gap-6 sm:gap-4 w-full ${
            view === "grid"
              ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
              : "flex flex-col"
          }`}
        >
          {visibleProducts.map((p) => (
            <ProductCard
              key={p.id}
              product={p}
              highlightColor={color}
              view={view}
            />
          ))}
        </div>

        {/* Pagination */}
        <Pagination
          totalPages={totalPages}
          currentPage={currentPage}
          setPage={setPage}
        />
      </main>
    </div>
  );
}
