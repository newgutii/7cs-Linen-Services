import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Restaurant Linens",
  description: "High-quality fine dining linens designed to provide an elegant and refined look with a focus on the 'right fit'.",
};

export default function RestaurantLinensPage() {
  const tableSizes = ["42x42", "52x52", "62x62", "72x72", "85x85", "52x72", "52x114", "90x156", "108” Round", "120” Round", "132” Round"];
  const napkinColors = [
    "White", "Navy Blue", "Sandalwood", "Lavender", "Ivory", "Light Blue", "Brown", "Purple", "Black", "Royal Blue", 
    "Gold", "Seafoam", "Forest Green", "Burgundy", "Yellow", "Dusty Rose", "Red", "Charcoal Grey", "Pink", "Burnt Orange"
  ];
  
  return (
    <>
      {/* Hero Section: Midnight Shadow -> Ivory text */}
      <section className="bg-[#050505] text-[#FDFCF0] pt-40 pb-32 px-6 md:px-16 overflow-hidden">
        <div className="max-w-6xl mx-auto relative flex flex-col md:flex-row gap-20 items-end">
          <div className="md:w-1/2 relative z-10 w-full ml-0 md:-ml-8">
            <h1 className="text-6xl md:text-[100px] font-black uppercase tracking-tighter leading-[0.85] mb-8">
              Dining<br />Linens
            </h1>
            <p className="text-2xl font-light text-white/50 border-l-2 border-white/20 pl-6 leading-relaxed">
              High-quality fine dining textiles tailored for an elegant and refined look, focusing intimately on the exact right fit.
            </p>
          </div>
          <div className="md:w-1/2">
             <div className="aspect-[4/3] bg-white/5 w-full relative">
               <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=1000')] bg-cover bg-center grayscale opacity-80 mix-blend-luminosity" />
             </div>
          </div>
        </div>
      </section>

      {/* Main Content: Clean White -> Midnight Shadow text */}
      <section className="bg-white text-[#050505] py-32 px-6 md:px-16 min-h-screen">
        <div className="max-w-6xl mx-auto space-y-32">
          
          {/* Table Linens Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div>
              <h2 className="text-4xl font-extrabold uppercase tracking-tight mb-6">Tablecloths & Overlays</h2>
              <p className="text-lg text-[#050505]/60 leading-relaxed mb-10">
                Precision-cut cloths providing the foundation for world-class dining rooms. Available in classic <span className="font-bold text-black">White, Ivory, and Black</span>.
              </p>
              <h3 className="text-lg font-bold tracking-widest uppercase mb-6 text-[#050505]/40 border-b border-[#050505]/10 pb-2">Available Dimensions</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-4 gap-x-8">
                {tableSizes.map(size => (
                  <div key={size} className="flex items-center text-[#050505]/80 font-medium">
                    <Check className="w-4 h-4 mr-2 text-black/20" /> {size}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="border-t border-[#050505]/10" />

          {/* Napkins Collection */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
             <div>
               <h2 className="text-4xl font-extrabold uppercase tracking-tight mb-6 mt-16 lg:mt-0">Napkins Collection</h2>
               
               <div className="space-y-12 mt-12">
                 {/* Standard 20x20 */}
                 <div>
                   <h3 className="text-xl font-bold mb-4">Standard (20x20) Palette</h3>
                   <div className="flex flex-wrap gap-2">
                     {napkinColors.map(color => (
                       <span key={color} className="px-3 py-1 bg-[#050505]/5 text-xs uppercase tracking-widest font-bold text-[#050505]/70 border border-[#050505]/10">
                         {color}
                       </span>
                     ))}
                   </div>
                 </div>

                 {/* Advanced */}
                 <div>
                   <h3 className="text-xl font-bold mb-4">Reverse Bistro (18x22)</h3>
                   <p className="text-[#050505]/60 mb-3">Engineered for steakhouse and high-turnover settings. 6 Available Colors:</p>
                   <p className="font-medium text-[#050505]">Black, Burgundy, Charcoal, Royal Blue, Grey, Navy Blue</p>
                 </div>

                 {/* Satin Band */}
                 <div>
                   <h3 className="text-xl font-bold mb-4">The Classic (21x21)</h3>
                   <p className="font-medium text-[#050505]">White Satin Band</p>
                 </div>
               </div>
             </div>
             
             <div className="bg-[#FDFCF0] p-12 lg:p-16 flex flex-col justify-center border border-[#050505]/10 mt-16 lg:mt-0">
                <h3 className="text-3xl font-black uppercase mb-6">Custom Needs?</h3>
                <p className="text-lg text-[#050505]/60 mb-10 leading-relaxed">
                  We process specialized custom napkins upon request, ensuring your brand's unique specifications are perfectly executed every service.
                </p>
                <Link href="/quote" className="group inline-flex items-center space-x-4 pb-2 border-b-2 border-[#050505] text-[#050505] hover:opacity-70 transition-opacity w-max">
                  <span className="font-bold uppercase tracking-widest">Request Proposal</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
             </div>
          </div>

        </div>
      </section>
    </>
  );
}
