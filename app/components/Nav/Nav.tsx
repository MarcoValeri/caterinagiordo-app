"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { HiMenu, HiX } from "react-icons/hi";
import logo from "../../assets/images/caterina-giordo-logo.png";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const Nav = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      {/* Logo / Brand */}
      <Link href="/" className="flex items-center gap-2 group">
        <Image
          src={logo}
          alt="Caterina Giordo"
          width={40}
          height={40}
          className="rounded-full"
        />
        <span className="text-lg font-semibold tracking-wide text-gray-800">
          Caterina Giordo
        </span>
      </Link>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center gap-8">
        {navLinks.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.label}
              href={link.href}
              className={`text-sm font-medium transition-colors ${
                isActive
                  ? "text-rose-500 border-b-2 border-rose-400 pb-0.5"
                  : "text-gray-600 hover:text-rose-500"
              }`}
            >
              {link.label}
            </Link>
          );
        })}
        <Link
          href="/classes"
          className={`ml-2 px-4 py-2 text-sm font-medium rounded-full transition-colors ${
            pathname === "/classes"
              ? "text-rose-500 bg-rose-100"
              : "text-white bg-rose-400 hover:bg-rose-500"
          }`}
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
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.label}
                href={link.href}
                className={`block text-sm font-medium transition-colors ${
                  isActive
                    ? "text-rose-500"
                    : "text-gray-600 hover:text-rose-500"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            href="/classes"
            className={`block mt-3 text-center px-4 py-2 text-sm font-medium rounded-full transition-colors ${
              pathname === "/classes"
                ? "text-rose-500 bg-rose-100"
                : "text-white bg-rose-400 hover:bg-rose-500"
            }`}
          >
            Classes
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Nav;
