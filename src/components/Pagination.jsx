import React from "react";

export default function Pagination({ totalPages, currentPage, setPage }) {
  return (
    <div className="mt-8 h-14 flex justify-center bg-gray-200 ">
      <div className="flex items-center gap-1 sm:gap-2">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => {
          const isCurrentPage = page === currentPage;

          return (
            <span
              key={page}
              onClick={() => setPage(page)}
              className={`
                w-16 h-full text-sm text-center py-4 px-4 font-medium  
                ${
                  isCurrentPage
                    ? "bg-[#40BFFF] text-white  "
                    : "text-black bg-transparent  cursor-pointer"
                }
              `}
            >
              {page}
            </span>
          );
        })}
      </div>
    </div>
  );
}
