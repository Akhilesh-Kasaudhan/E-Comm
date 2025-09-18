import React from "react";
import productsData from "../data/products.json";
import { useProducts } from "../hooks/useProducts";
import Sidebar from "../components/Sidebar";
import ProductCard from "../components/ProductCard";
import Pagination from "../components/Pagination";

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

  return (
    <div className="container w-full px-4 flex gap-6 py-8 mt-8">
      {/* Sidebar with filters */}
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
      />

      {/* Main Section */}
      <main className="flex-1">
        {/* Hero Section */}
        <div className="h-88 bg-[#40bfff] w-full flex justify-between gap-4">
          <div className="flex-1 flex flex-col justify-center text-white px-8 max-w-[400px]">
            <h2 className="text-2xl font-bold">Adidas Men Running Sneakers</h2>
            <p className="mt-2 text-sm opacity-80">
              Performance and Design. Taken right to the edge.
            </p>
            <span className="mt-4 text-md font-semibold hover:border-b-2 hover:border-b-white cursor-pointer w-max">
              SHOP NOW
            </span>
          </div>
          <div className="flex-1 flex items-center justify-center min-h[221px] min-w-[442px] ">
            <img
              src="/hero.png"
              alt="hero"
              className="max-h-56 object-contain -rotate-y-180  "
            />
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-4 mt-6">
          {visibleProducts.map((p) => (
            <ProductCard key={p.id} product={p} highlightColor={color} />
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
