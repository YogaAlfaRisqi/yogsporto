import { useState } from "react";
import { ChevronDown, Menu, X, Moon, Sun } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <header className={`${darkMode ? "bg-gray-950 text-white" : "bg-white text-gray-900 "} shadow-md`}>
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <div className="text-2xl font-extrabold tracking-wide font-cursive">
          <span className="text-gray-950:text-white">PortoShow</span>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-6 items-center">
          <a href="#" className="hover:text-pink-500 transition">Home</a>
          <a href="#" className="hover:text-pink-500 transition">About Us</a>
          <a href="#" className="hover:text-pink-500 transition">Service</a>
          <a href="#" className="hover:text-pink-500 transition">Portofolio</a>
          <a href="#" className="hover:text-pink-500 transition">Contact Us</a>
        </nav>

        <div className="flex items-center gap-3">
          {/* Theme Toggle */}
          <button onClick={toggleDarkMode} className="text-gray-950:text-white">
            {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>

          {/* CTA Button */}
          <a
            href="#contact"
            className="hidden md:inline-block px-5 py-2 rounded-md text-white font-semibold bg-gradient-to-r from-pink-600 via-red-500 to-purple-600 hover:opacity-90 transition"
          >
            Hire Me !
          </a>

          {/* Mobile Hamburger */}
          <button onClick={toggleMenu} className="md:hidden text-white">
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {menuOpen && (
        <div className="md:hidden bg-gray-950 text-white px-6 py-4 space-y-4">
          <a href="#" className="block hover:text-pink-500">Home</a>
          <a href="#" className="block hover:text-pink-500">About Us</a>
          <a href="#" className="block hover:text-pink-500">Service</a>
          <a href="#" className="block hover:text-pink-500">Portofolio</a>
          <a href="#" className="block hover:text-pink-500">Contact Us</a>
          <a
            href="#contact"
            className="inline-block px-5 py-2 rounded-md text-white font-semibold bg-gradient-to-r from-pink-600 via-red-500 to-purple-600 hover:opacity-90 transition"
          >
            Hire Me !
          </a>
        </div>
      )}
    </header>
  );
}
