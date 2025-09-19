import React, { useState } from "react";
import { ShoppingCart, Menu, X } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full h-14 bg-white shadow-md flex items-center justify-between px-6 z-50">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <img
          src="/logo.png"
          alt="logo"
          className="h-10 object-contain cursor-pointer"
        />
      </div>

      {/* Desktop Nav Links */}
      <ul className="hidden lg:flex items-center gap-12 text-black text-lg font-semibold">
        <li className="text-blue-500 cursor-pointer">HOME</li>
        <li className="cursor-pointer">BAG</li>
        <li className="cursor-pointer">SNEAKERS</li>
        <li className="cursor-pointer">BELT</li>
        <li className="cursor-pointer">CONTACT</li>
      </ul>

      {/* Desktop Cart */}
      <div className="hidden lg:flex items-center gap-4 text-lg">
        <span className="text-black">
          <ShoppingCart />
        </span>
        <span className="text-black">items</span>
        <span className="text-gray-400 text-base">$0.00</span>
      </div>

      {/* Hamburger Button (mobile/tablet only) */}
      <button
        className="lg:hidden p-2 text-black"
        onClick={() => setMenuOpen(true)}
      >
        <Menu size={28} />
      </button>

      {/* Mobile Drawer Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Drawer Header */}
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-lg font-bold text-black">Menu</h2>
          <button onClick={() => setMenuOpen(false)}>
            <X size={26} />
          </button>
        </div>

        {/* Drawer Links */}
        <ul className="flex flex-col gap-6 p-6 text-black text-lg font-semibold">
          <li className="text-blue-500 cursor-pointer">HOME</li>
          <li className="cursor-pointer">BAG</li>
          <li className="cursor-pointer">SNEAKERS</li>
          <li className="cursor-pointer">BELT</li>
          <li className="cursor-pointer">CONTACT</li>
        </ul>

        {/* Drawer Cart */}
        <div className="flex items-center gap-4 p-6 border-t text-lg">
          <span className="text-black">
            <ShoppingCart />
          </span>
          <span className="text-black">items</span>
          <span className="text-gray-400 text-base">$0.00</span>
        </div>
      </div>

      {/* Overlay when drawer is open */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-40"
          onClick={() => setMenuOpen(false)}
        />
      )}
    </nav>
  );
};

export default Navbar;
