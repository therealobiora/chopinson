"use client";
import Link from "next/link";
import { useState } from "react";
import { useRef } from "react";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { VscCloseAll } from "react-icons/vsc";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const headerRef = useRef(null);

  return (
    <div className="container mx-auto max-w-[95%] px-2 sm:px-6 lg:px-8 py-2 sm:py-3">
      <div className="flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <img
            src="/images/cbarlogo.png"
            alt="Taste & Events Logo"
            className="h-10 sm:h-10 md:h-14 w-auto"
          />
        </Link>
        <nav className="hidden md:flex space-x-2 sm:space-x-4 lg:space-x-6">
          <Link
            href="#home"
            className="hover:text-green transition-colors px-2 py-1 sm:px-3 sm:py-1.5"
          >
            Home
          </Link>
          <Link
            href="#restaurant"
            className="hover:text-green transition-colors px-2 py-1 sm:px-3 sm:py-1.5"
          >
            Restaurant
          </Link>
          <Link
            href="#events"
            className="hover:text-green transition-colors px-2 py-1 sm:px-3 sm:py-1.5"
          >
            Events
          </Link>
          <Link
            href="#contact"
            className="hover:text-green transition-colors px-2 py-1 sm:px-3 sm:py-1.5"
          >
            Contact
          </Link>
          <Link
            href="#about"
            className="hover:text-green transition-colors px-2 py-1 sm:px-3 sm:py-1.5"
          >
            About
          </Link>
        </nav>

        <div className="hidden h-[40px] w-[100px] md:flex items-center justify-center bg-[#ea8f2b] rounded-md transition-colors hover:bg-gray-600">
          <Link href="#contact" className="font-semibold text-sm text-white">
            Book Now
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-600 focus:outline-none p-1 sm:p-2"
          >
            {isMenuOpen ? (
              <VscCloseAll className="h-7 w-7" />
            ) : (
              <HiOutlineMenuAlt3 className="h-7 w-7" />
            )}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <nav className="md:hidden bg-white absolute top-14 left-0 w-[96%] bg-black p-4 space-y-2 z-30">
          <Link
            href="#home"
            className="block text-gray-600 hover:text-green transition-colors px-2 py-1 sm:px-3 sm:py-1.5"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            href="#restaurant"
            className="block text-gray-600 hover:text-green transition-colors px-2 py-1 sm:px-3 sm:py-1.5"
            onClick={() => setIsMenuOpen(false)}
          >
            Restaurant
          </Link>
          <Link
            href="#events"
            className="block text-gray-600 hover:text-green transition-colors px-2 py-1 sm:px-3 sm:py-1.5"
            onClick={() => setIsMenuOpen(false)}
          >
            Events
          </Link>
          <Link
            href="#contact"
            className="block text-gray-600 hover:text-green transition-colors px-2 py-1 sm:px-3 sm:py-1.5"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </Link>
          <Link
            href="#about"
            className="block text-gray-600 hover:text-green transition-colors px-2 py-1 sm:px-3 sm:py-1.5"
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </Link>
          <Link
            href="#restaurant"
            className="block text-gray-600 hover:text-green transition-colors px-2 py-1 sm:px-3 sm:py-1.5"
            onClick={() => setIsMenuOpen(false)}
          >
            Meals
          </Link>
          <Link
            href="#restaurant"
            className="block text-gray-600 hover:text-green transition-colors px-2 py-1 sm:px-3 sm:py-1.5"
            onClick={() => setIsMenuOpen(false)}
          >
            Catering
          </Link>
          <Link
            href="#restaurant"
            className="block text-gray-600 hover:text-green transition-colors px-2 py-1 sm:px-3 sm:py-1.5"
            onClick={() => setIsMenuOpen(false)}
          >
            Meeting Halls
          </Link>
        </nav>
      )}
    </div>
  );
};

export default Header;
