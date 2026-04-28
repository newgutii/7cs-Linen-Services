"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Blog", href: "#blog" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 ease-in-out border-b border-transparent",
        isScrolled
          ? "bg-white/80 backdrop-blur-md shadow-sm border-gray-100 py-4"
          : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-6 max-w-7xl flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className={cn(
            "text-2xl font-bold tracking-tighter transition-colors",
            isScrolled ? "text-deep-navy" : "text-white"
          )}
        >
          7C&apos;s <span className="text-primary font-normal">Linen</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                isScrolled ? "text-gray-600 hover:text-deep-navy" : "text-gray-200 hover:text-white"
              )}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="#quote"
            className={cn(
              "px-6 py-2.5 rounded-full text-sm font-semibold transition-all transform hover:scale-105",
              isScrolled
                ? "bg-deep-navy text-white hover:bg-deep-navy/90"
                : "bg-white text-deep-navy hover:bg-gray-100"
            )}
          >
            Inquire Now
          </Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? (
            <X className={cn("w-6 h-6", isScrolled ? "text-deep-navy" : "text-white")} />
          ) : (
            <Menu className={cn("w-6 h-6", isScrolled ? "text-deep-navy" : "text-white")} />
          )}
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t border-gray-100 py-4 px-6 flex flex-col space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-gray-800 font-medium text-lg hover:text-deep-navy"
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="#quote"
            onClick={() => setMobileMenuOpen(false)}
            className="mt-4 px-6 py-3 bg-deep-navy text-white text-center rounded-lg font-semibold"
          >
            Inquire Now
          </Link>
        </div>
      )}
    </header>
  );
}
