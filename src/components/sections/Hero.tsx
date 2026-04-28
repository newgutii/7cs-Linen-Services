import { AnimatedSection } from "@/components/AnimatedSection";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image Placeholder */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')" }}
      >
        <div className="absolute inset-0 bg-deep-navy/60 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-b from-deep-navy/80 via-transparent to-deep-navy/90" />
      </div>

      <AnimatedSection className="relative z-10 text-center px-6 max-w-4xl mx-auto mt-20">
        <span className="inline-block py-1 px-3 rounded-full bg-white/10 border border-white/20 text-white/90 text-sm font-medium tracking-wider mb-6 backdrop-blur-sm">
          PREMIUM LINEN SERVICES IN SOUTH FLORIDA
        </span>
        <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight leading-tight mb-8">
          Elevating <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">Hospitality</span><br />
          To The Elite Standard
        </h1>
        <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
          From hotel-quality bed linens to restaurant-grade tablecloths and uniforms. 
          Reliable delivery, flexible plans, and eco-friendly solutions since 2004.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="#quote"
            className="w-full sm:w-auto px-8 py-4 bg-white text-deep-navy rounded-full font-semibold hover:bg-gray-100 hover:scale-105 transition-all flex items-center justify-center shadow-lg"
          >
            Request a Quote
          </Link>
          <Link
            href="#services"
            className="w-full sm:w-auto px-8 py-4 bg-transparent border border-white text-white rounded-full font-semibold hover:bg-white/10 transition-all flex items-center justify-center group"
          >
            View Services
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </AnimatedSection>
    </section>
  );
}
