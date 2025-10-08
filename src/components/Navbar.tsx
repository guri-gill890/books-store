import { useState } from "react";
import { ShoppingCart, Heart, LogIn, User, Search } from "lucide-react";

const Navbar = () => {
   
  const navLinks = [
    { name: "Home", href: "#" },
    { name: "Categories", href: "#", dropdown: true },
    { name: "Brands", href: "#" },
    { name: "Best Sellers", href: "#" },
    { name: "Pages", href: "#", dropdown: true },
  ];

  return (
    <header className="w-full">
      {/* Top Info Bar */}
      <div className="bg-black text-white text-sm text-center py-1">
        FREE SHIPPING & RETURN · MONEY BACK GUARANTEE · ONLINE SUPPORT 24/7
      </div>

      {/* Middle Navbar */}
      <div className="flex items-center justify-between py-4 px-6 bg-white">
        {/* Left Icons */}
        <div className="flex gap-5">
          <ShoppingCart className="w-5 h-5 cursor-pointer" />
          <Heart className="w-5 h-5 cursor-pointer" />
          <LogIn className="w-5 h-5 cursor-pointer" />
        </div>

        {/* Center Logo */}
        <h1 className="text-2xl font-serif tracking-widest">
          BOOK <span className="text-red-600">SHOP</span>
        </h1>

        {/* Right Options */}
        
      </div>

      {/* Bottom Nav Menu */}
      <nav className="bg-red-600 text-white">
        <ul className="flex justify-center gap-8 py-3">
          {navLinks.map((link, index) => (
            <li key={index} className="relative group">
              <a
                href={link.href}
                className="hover:text-gray-200 transition-colors"
              >
                {link.name}
              </a>
              {link.dropdown && <span className="ml-1">▾</span>}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
