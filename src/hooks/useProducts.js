import { useState, useMemo, useEffect } from "react";

export function useProducts(allProducts, pageSize = 12) {
  const urlParams = new URLSearchParams(window.location.search);

  const [page, setPage] = useState(Number(urlParams.get("page") || 1));
  const [sort, setSort] = useState(urlParams.get("sort") || "name_asc");
  const [color, setColor] = useState(urlParams.get("color") || null);
  const [category, setCategory] = useState(urlParams.get("category") || null);

  const minFromUrl = Number(urlParams.get("minPrice")) || 0;
  const maxFromUrl =
    Number(urlParams.get("maxPrice")) ||
    Math.max(...allProducts.map((p) => p.discountPrice || p.price));

  const [priceRange, setPriceRange] = useState([minFromUrl, maxFromUrl]);

  const updateURL = (params) => {
    const next = new URLSearchParams(window.location.search);
    Object.entries(params).forEach(([k, v]) => {
      if (!v || (Array.isArray(v) && v.length === 0)) {
        next.delete(k);
      } else if (Array.isArray(v)) {
        next.set("minPrice", v[0]);
        next.set("maxPrice", v[1]);
      } else {
        next.set(k, v);
      }
    });
    window.history.pushState({}, "", "?" + next.toString());
  };

  useEffect(() => {
    updateURL({ page, sort, color, category, priceRange });
  }, [page, sort, color, category, priceRange]);

  const filtered = useMemo(() => {
    let res = [...allProducts];

    if (category) res = res.filter((p) => p.category === category);

    if (color) res = res.filter((p) => p.colors.includes(color));

    if (priceRange && priceRange.length === 2) {
      res = res.filter(
        (p) =>
          (p.discountPrice || p.price) >= priceRange[0] &&
          (p.discountPrice || p.price) <= priceRange[1]
      );
    }

    switch (sort) {
      case "hot":
        res.sort((a, b) => (b.isHot === true) - (a.isHot === true));
        break;

      case "popular":
        res.sort((a, b) => b.ratingValue - a.ratingValue);
        break;

      case "name_asc":
        res.sort((a, b) => a.name.localeCompare(b.name));
        break;

      case "name_desc":
        res.sort((a, b) => b.name.localeCompare(a.name));
        break;

      case "priceLowToHigh":
        res.sort(
          (a, b) => (a.discountPrice || a.price) - (b.discountPrice || b.price)
        );
        break;

      case "priceHighToLow":
        res.sort(
          (a, b) => (b.discountPrice || b.price) - (a.discountPrice || a.price)
        );
        break;

      default:
        break;
    }

    return res;
  }, [allProducts, category, color, priceRange, sort]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize));
  const visibleProducts = filtered.slice(
    (page - 1) * pageSize,
    page * pageSize
  );

  return {
    visibleProducts,
    totalPages,
    currentPage: page,
    setPage,
    sort,
    setSort,
    color,
    setColor,
    category,
    setCategory,
    priceRange,
    setPriceRange,
    totalCount: filtered.length,
  };
}
