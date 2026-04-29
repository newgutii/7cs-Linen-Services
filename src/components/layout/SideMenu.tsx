"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import { usePathname } from "next/navigation";

const navigation = [
  { name: "Restaurant Linens", href: "/services/restaurant-linens" },
  { name: "Kitchen Apparel", href: "/services/kitchen-apparel" },
  { name: "Facility Services", href: "/services/facility-services" },
  { name: "Authority Guides", href: "/blog" },
];

export function SideMenu() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    // Close mobile menu on route change
    setMobileMenuOpen(false);
  }, [pathname]);

  // Lock scroll on mobile menu open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [mobileMenuOpen]);

  return (
    <>
      {/* Mobile Toggle Button */}
      <button 
        onClick={() => setMobileMenuOpen(true)}
        className="md:hidden fixed top-6 right-6 z-50 p-3 bg-[#FDFCF0] text-[#050505] rounded-full shadow-2xl focus:outline-none"
        aria-label="Open Menu"
      >
        <Menu className="w-6 h-6" />
      </button>

      {/* Persistent Desktop Sidebar */}
      <aside className="hidden md:flex flex-col w-[300px] fixed inset-y-0 left-0 z-40 bg-[#050505] border-r border-white/10 p-12 overflow-y-auto">
        <Link href="/" className="mb-20 group block">
          <img 
            src="/7CsLogo.png" 
            alt="7C's Linen Services" 
            className="w-48 h-auto object-contain brightness-0 invert opacity-90 group-hover:opacity-100 transition-opacity duration-500"
          />
        </Link>

        <nav className="flex flex-col space-y-6 flex-grow" aria-label="Sidebar Navigation">
          <span className="text-[10px] uppercase tracking-[0.3em] text-white/40 font-bold mb-4">Core Services</span>
          {navigation.map((item) => {
            const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`);
            return (
              <Link 
                key={item.name} 
                href={item.href}
                className={`text-lg font-medium transition-all duration-300 flex items-center group uppercase tracking-wider ${isActive ? 'text-[#FDFCF0]' : 'text-white/50 hover:text-[#FDFCF0]'}`}
              >
                {isActive && <motion.span layoutId="indicator" className="w-2 h-2 bg-[#FDFCF0] rounded-full mr-4" />}
                {!isActive && <span className="w-2 h-2 mr-4 opacity-0 group-hover:opacity-100 transition-opacity bg-white/20 rounded-full" />}
                {item.name}
              </Link>
            )
          })}
        </nav>

        <div className="mt-auto pt-12">
          <Link href="/quote" className="w-full flex items-center justify-between px-6 py-4 bg-[#FDFCF0] text-[#050505] font-bold uppercase tracking-widest text-sm hover:bg-white transition-colors group">
            Get Quote
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          <div className="mt-8 text-xs text-white/30 font-light space-y-2">
            <p>954.788.3166</p>
            <p>Pompano Beach, FL</p>
          </div>
        </div>
      </aside>

      {/* Mobile Kinetic Full-Screen Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, clipPath: "circle(0% at 100% 0%)" }}
            animate={{ opacity: 1, clipPath: "circle(150% at 100% 0%)" }}
            exit={{ opacity: 0, clipPath: "circle(0% at 100% 0%)" }}
            transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
            className="md:hidden fixed inset-0 z-50 bg-[#FDFCF0] flex flex-col p-8"
          >
            <div className="flex justify-between items-center mb-16">
              <Link href="/" onClick={() => setMobileMenuOpen(false)} className="flex items-center">
                <img 
                  src="/7CsLogo.png" 
                  alt="7C's Linen Services" 
                  className="w-32 h-auto object-contain"
                />
              </Link>
              <button 
                onClick={() => setMobileMenuOpen(false)}
                className="p-3 bg-[#050505] text-[#FDFCF0] rounded-full focus:outline-none"
                aria-label="Close Menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <nav className="flex flex-col space-y-8 mt-12" aria-label="Mobile Navigation">
              {navigation.map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + (i * 0.1), duration: 0.5, ease: "easeOut" }}
                >
                  <Link 
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-4xl sm:text-5xl font-black uppercase tracking-tighter text-[#050505] hover:text-black/60 transition-colors"
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="pt-12"
              >
                <Link 
                  href="/quote" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="inline-flex items-center text-xl font-bold uppercase tracking-widest text-[#050505] border-b-2 border-[#050505] pb-2"
                >
                  Request Proposal <ArrowRight className="ml-4 w-6 h-6" />
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
