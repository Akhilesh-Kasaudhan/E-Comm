import React from "react";
import { ShoppingCart } from "lucide-react";

const Navbar = () => {
  return (
    <div className="min-w-full h-14 bg-white shadow-md flex items-center justify-center gap-42 px-8 py-2 absolute top-0 left-0 z-10">
      <div className="flex-1 flex items-center gap-2 w-42 h-12">
        <img
          src="/logo.png"
          alt="logo"
          className="object-center  object-cover  text-[#22262A]  font-extrabold"
        />
      </div>
      <div className="flex-1 flex items-center gap-4 min-w-[800px] pl-42 ">
        <ul className="flex items-center gap-12 text-black text-lg font-semibold list-none ">
          <li className="text-blue-500">HOME</li>
          <li>BAG</li>
          <li>SNEAERS</li>
          <li>BELT</li>
          <li>CONTACT</li>
        </ul>
      </div>
      <div className="flex-1 flex items-center justify-center gap-4 text-lg">
        <span className="text-black">
          {" "}
          <ShoppingCart />
        </span>
        <span className="text-black ">items</span>
        <span className="text-gray-300 text-base ">$0.00</span>
      </div>
    </div>
  );
};

export default Navbar;
