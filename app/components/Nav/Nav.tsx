"use client";

import { useState } from "react";
import Link from "next/link";
import { GiLotusFlower } from "react-icons/gi";
import { HiMenu, HiX } from "react-icons/hi";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const Nav = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Logo / Brand */}
      <Link href="/" className="flex items-center gap-2 group">
        <GiLotusFlower className="text-3xl text-rose-400 group-hover:text-rose-500 transition-colors" />
        <span className="text-lg font-semibold tracking-wide text-gray-800">
          Caterina Giordo
        </span>
      </Link>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center gap-8">
        {navLinks.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            className="text-sm font-medium text-gray-600 hover:text-rose-500 transition-colors"
          >
            {link.label}
          </Link>
        ))}
        <Link
          href="/classes"
          className="ml-2 px-4 py-2 text-sm font-medium text-white bg-rose-400 rounded-full hover:bg-rose-500 transition-colors"
        >
          Classes
        </Link>
      </nav>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden p-2 text-gray-600 hover:text-rose-500 transition-colors cursor-pointer"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
      >
        {mobileMenuOpen ? (
          <HiX className="text-2xl" />
        ) : (
          <HiMenu className="text-2xl" />
        )}
      </button>

      {/* Mobile Navigation */}
      <nav
        className={`md:hidden absolute top-16 left-0 w-full border-t border-gray-100 bg-white shadow-sm overflow-hidden transition-all duration-300 ease-in-out ${
          mobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 border-t-0"
        }`}
      >
        <div className="px-4 py-4 space-y-3">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="block text-sm font-medium text-gray-600 hover:text-rose-500 transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/classes"
            className="block mt-3 text-center px-4 py-2 text-sm font-medium text-white bg-rose-400 rounded-full hover:bg-rose-500 transition-colors"
          >
            Classes
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Nav;
