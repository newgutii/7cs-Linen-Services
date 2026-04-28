import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Chef's Standard | Kitchen Apparel",
  description: "Precision-tailored industrial apparel engineered for the heat of the modern culinary kitchen.",
};

export default function KitchenApparelPage() {
  return (
    <>
      {/* Hero Section: Midnight Shadow -> Ivory text */}
      <section className="bg-[#050505] text-[#FDFCF0] pt-40 pb-32 px-6 md:px-16 overflow-hidden">
        <div className="max-w-6xl mx-auto relative flex flex-col md:flex-row gap-20 items-end">
          <div className="md:w-1/2 relative z-20 w-full ml-0 md:-ml-12">
            <h1 className="text-[80px] md:text-[120px] font-black uppercase tracking-tighter leading-[0.85] mb-6 whitespace-nowrap md:whitespace-normal">
              THE<br />CHEF'S<br />
              <span className="text-white/30 hidden md:inline">STANDARD.</span>
            </h1>
            <p className="text-xl md:text-2xl font-light text-white/50 border-l-2 border-emerald-500/50 pl-6 leading-relaxed mt-10 max-w-lg">
              Precision-tailored industrial apparel engineered for the heat of the modern culinary kitchen.
            </p>
          </div>
          
          <div className="md:w-1/2 absolute md:relative top-0 right-[-10%] md:right-0 opacity-20 md:opacity-100 z-10 w-full h-full md:h-auto pointer-events-none md:pointer-events-auto">
             <div className="aspect-[3/4] md:aspect-square bg-[#111111] md:w-full relative shadow-2xl">
               <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581299894007-aaa50297cf16?q=80&w=1000')] bg-cover bg-center grayscale mix-blend-luminosity opacity-80" />
               <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent md:hidden" />
             </div>
          </div>
        </div>
      </section>

      {/* Main Content: Clean White -> Midnight Shadow text */}
      <section className="bg-white text-[#050505] py-32 px-6 md:px-16">
        <div className="max-w-4xl mx-auto space-y-32">
          
          {/* Section 1: Executive Chef Coats & Cook Shirts */}
          <div>
             <h2 className="text-4xl md:text-5xl font-extrabold uppercase tracking-tight mb-8">Executive Jackets & Shirts</h2>
             <p className="text-xl text-[#050505]/60 leading-relaxed font-light">
               The cornerstone of our Direct Sale & Lease Uniform Program. Showcasing classic white and professional black coats built with highly breathable, industrial-grade textiles. Engineered specifically to withstand punishing line temperatures while maintaining an immaculate executive silhouette.
             </p>
          </div>

          {/* Section 2: Durability & Pants */}
          <div className="flex flex-col md:flex-row gap-12 items-start">
             <div className="md:w-1/3">
                 <span className="text-xs uppercase tracking-[0.3em] font-bold text-[#050505]/40 pb-2 border-b border-[#050505]/10 block">Bottoms</span>
             </div>
             <div className="md:w-2/3">
                 <h3 className="text-3xl font-black mb-6">Uncompromising Durability</h3>
                 <p className="text-lg text-[#050505]/60 leading-relaxed">
                   High-performance cook pants designed with moisture-wicking properties and reinforced stitching. We guarantee ultimate mobility and longevity, ensuring your brigade remains comfortable during rigorous 12-hour shifts.
                 </p>
             </div>
          </div>

          {/* Section 3: Protective Layering */}
          <div className="flex flex-col md:flex-row gap-12 items-start">
             <div className="md:w-1/3">
                 <span className="text-xs uppercase tracking-[0.3em] font-bold text-[#050505]/40 pb-2 border-b border-[#050505]/10 block">Aprons</span>
             </div>
             <div className="md:w-2/3">
                 <h3 className="text-3xl font-black mb-6">Protective Layering</h3>
                 <p className="text-lg text-[#050505]/60 leading-relaxed">
                   Specific emphasis on heavy-duty Back-of-House (BOH) Aprons and adjustable Bib Aprons. Designed with tactical pocket placement and maximal stain resistance for raw prep protection.
                 </p>
             </div>
          </div>

          {/* Section 4: Embroidery */}
          <div className="bg-[#FDFCF0] p-12 md:p-20 border border-[#050505]/10 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#050505]/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2 group-hover:bg-[#050505]/10 transition-colors duration-[2s]" />
             <h3 className="text-4xl font-black uppercase mb-6 relative z-10">Custom Branding Identity</h3>
             <p className="text-xl text-[#050505]/60 leading-relaxed mb-10 relative z-10 max-w-2xl">
               Leverage our complete in-house embroidery services. We permanently brand executive chef names and custom restaurant logos onto your apparel to enforce a highly professional standard across all properties.
             </p>
             <Link href="/quote" className="relative z-10 inline-flex items-center space-x-4 pb-2 border-b-2 border-[#050505] text-[#050505] hover:opacity-70 transition-opacity font-bold uppercase tracking-widest text-sm">
               <span>Inquire About Uniforms</span>
               <ArrowRight className="w-5 h-5" />
             </Link>
          </div>

          {/* Section 5: The Loop */}
          <div className="border-t border-[#050505]/10 pt-20">
             <h2 className="text-3xl font-black uppercase mb-8">The "Invisible Standard" Lifecycle</h2>
             <p className="text-lg text-[#050505]/60 leading-relaxed font-light">
               We manage the complicated logistics so your team doesn't have to. A rigorous system of weekly pickups, specialized industrial wash extraction, precision pressing, and guaranteed 7-day-per-week delivery loop ensures absolutely zero downtime for your culinary staff.
             </p>
          </div>

        </div>
      </section>
    </>
  );
}
