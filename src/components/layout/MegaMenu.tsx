"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const megaMenuCategories = [
  {
    name: "Dining Room",
    href: "/services/dining-room",
    items: ["Premium Tablecloths", "Elegant Napkins", "Custom Overlays"],
  },
  {
    name: "Back of House",
    href: "/services/back-of-house",
    items: ["Kitchen Towels", "Aprons", "Floor Mats"],
  },
  {
    name: "Uniforms",
    href: "/services/uniforms",
    items: ["Chef Coats", "Waitstaff Attire", "Housekeeping"],
  },
];

export function MegaMenu() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDesktopCategory, setActiveDesktopCategory] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [mobileMenuOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 w-full z-40 transition-all duration-300 ease-in-out border-b",
          isScrolled || activeDesktopCategory 
            ? "bg-white/95 backdrop-blur-md shadow-sm border-slate-200 py-4"
            : "bg-transparent border-transparent py-6"
        )}
      >
        <div className="container mx-auto px-6 lg:px-12 max-w-7xl flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            aria-label="7C's Linen Service Home"
            onClick={() => setMobileMenuOpen(false)}
            className="text-2xl font-bold tracking-tighter text-slate-900 flex items-center relative z-50"
          >
            7C&apos;s <span className="text-emerald-500 font-medium ml-1">Linen</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-8" aria-label="Main Desktop Navigation">
            <Link href="/" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">
              Home
            </Link>
            
            <div 
              className="relative"
              onMouseEnter={() => setActiveDesktopCategory("services")}
              onMouseLeave={() => setActiveDesktopCategory(null)}
            >
              <button 
                className="flex items-center text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors py-2"
                aria-haspopup="true"
                aria-expanded={activeDesktopCategory === "services"}
              >
                Services <ChevronDown className={cn("ml-1 w-4 h-4 transition-transform", activeDesktopCategory === "services" ? "rotate-180" : "")} />
              </button>
            </div>

            <Link href="/blog" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">
              Authority Guides
            </Link>

            <Link
              href="/quote"
              className="ml-4 pl-8 border-l border-slate-200 flex items-center"
            >
              <span className="px-6 py-2.5 rounded text-sm font-semibold transition-all shadow-sm bg-slate-900 text-white hover:bg-slate-800 hover:shadow-md">
                Request a Quote
              </span>
            </Link>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2 relative z-50 text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500 rounded-md"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Desktop Mega Menu Dropdown */}
        <AnimatePresence>
          {activeDesktopCategory === "services" && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full left-0 w-full bg-white border-b border-slate-200 shadow-xl hidden lg:block"
              onMouseEnter={() => setActiveDesktopCategory("services")}
              onMouseLeave={() => setActiveDesktopCategory(null)}
            >
              <div className="container mx-auto px-6 lg:px-12 py-10 max-w-7xl grid grid-cols-4 gap-8">
                <div className="col-span-1 pr-8 border-r border-slate-100">
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">Our Capabilities</h3>
                  <p className="text-sm font-light text-slate-500 mb-6 leading-relaxed">
                    Explore our specialized textile solutions engineered for high-traffic hospitality and culinary environments.
                  </p>
                  <Link href="/services" className="text-emerald-500 text-sm font-semibold flex items-center hover:text-emerald-600 transition-colors">
                    View All Services <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
                
                {megaMenuCategories.map((cat, idx) => (
                  <div key={idx} className="col-span-1">
                    <Link href={cat.href} className="text-lg font-bold text-slate-900 mb-4 block hover:text-emerald-500 transition-colors">
                      {cat.name}
                    </Link>
                    <ul className="space-y-3">
                      {cat.items.map((item, i) => (
                        <li key={i}>
                          <span className="text-sm text-slate-600">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Mobile Hamburger Stack Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-30 bg-white/60 backdrop-blur-xl lg:hidden flex flex-col pt-24 px-6 pb-6 overflow-y-auto"
            aria-modal="true"
            role="dialog"
          >
            <nav aria-label="Mobile Navigation" className="flex flex-col space-y-8 mt-8">
              <Link href="/" onClick={() => setMobileMenuOpen(false)} className="text-3xl font-bold tracking-tight text-slate-900">
                Home
              </Link>
              
              <div className="space-y-4">
                <span className="text-sm font-bold text-slate-400 uppercase tracking-widest pl-1">Services</span>
                {megaMenuCategories.map((cat, idx) => (
                  <Link 
                    key={idx}
                    href={cat.href} 
                    onClick={() => setMobileMenuOpen(false)} 
                    className="block text-2xl font-medium text-slate-800 hover:text-emerald-500 transition-colors pl-4 border-l-2 border-slate-200"
                  >
                    {cat.name}
                  </Link>
                ))}
              </div>

              <Link href="/blog" onClick={() => setMobileMenuOpen(false)} className="text-3xl font-bold tracking-tight text-slate-900">
                Authority Guides
              </Link>

              <div className="mt-8 pt-8 border-t border-slate-200">
                <Link
                  href="/quote"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block w-full text-center px-6 py-4 bg-slate-900 text-white font-semibold text-lg hover:bg-slate-800 transition-colors"
                >
                  Request a Quote
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
