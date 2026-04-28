import { LogoMarquee } from "@/components/ui/LogoMarquee";
import Link from "next/link";
import { ArrowRight, ArrowDownRight } from "lucide-react";

export default function Home() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="min-h-screen flex flex-col justify-center px-6 md:px-16 pt-32 pb-24 relative overflow-hidden">
        {/* Asymmetrical Grid Lines Backdrop */}
        <div className="absolute inset-0 pointer-events-none border-l border-white/5 left-[10%]" />
        <div className="absolute inset-0 pointer-events-none border-l border-white/5 left-[45%]" />
        <div className="absolute inset-0 pointer-events-none border-l border-white/5 left-[80%]" />

        <div className="relative z-10 w-full mx-auto max-w-[1400px]">
          
          {/* 120px Overlapping Asymmetrical Headings */}
          <div className="relative mb-8 z-10">
            <h1 className="heading-xl text-[#FDFCF0] relative z-20">
              THE INVISIBLE
            </h1>
            <h1 
              className="heading-xl absolute top-16 md:top-24 left-10 md:left-48 z-0 opacity-40 mix-blend-overlay"
              style={{ WebkitTextStroke: '2px rgba(253,252,240,0.4)', WebkitTextFillColor: 'transparent' }}
            >
              STANDARD
            </h1>
            <h1 className="heading-xl text-[#FDFCF0] mt-12 md:mt-20 ml-5 md:ml-32 relative z-30">
              OF EXCELLENCE.
            </h1>
          </div>

          <div className="ml-5 md:ml-64 relative mt-16 md:mt-24">
            <p className="text-xl md:text-2xl max-w-xl text-white/50 font-light leading-relaxed border-l-2 pl-6 border-white/20">
              Precision-tailored industrial apparel and immaculate linens engineered for the punishing heat and exact standards of the modern culinary kitchen.
            </p>

            <div className="mt-16 w-max">
              <Link href="/services/restaurant-linens" className="group flex items-center space-x-8 text-[#FDFCF0] pb-3 border-b border-white/20 hover:border-[#FDFCF0] transition-all">
                <span className="text-base uppercase tracking-[0.3em] font-bold">Initiate Service</span>
                <div className="p-4 rounded-full bg-white/5 group-hover:bg-[#FDFCF0] group-hover:text-[#050505] transition-colors duration-500">
                   <ArrowDownRight className="w-5 h-5 transition-transform group-hover:rotate-[-45deg]" />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* INFINITE LOOP MARQUEE */}
      <LogoMarquee />

      {/* SECONDARY EDITORIAL GRID */}
      <section className="py-32 md:py-48 px-6 md:px-16">
          <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row gap-24 items-start relative">
             
             {/* Large Editorial Image Block */}
             <div className="w-full lg:w-1/2 relative">
                <h2 className="text-6xl md:text-8xl font-bold uppercase tracking-tighter leading-none mb-10 text-[#FDFCF0] relative z-10">
                  Relentless<br/>Perfection
                </h2>
                <div className="w-full aspect-[3/4] bg-[#111111] relative overflow-hidden border border-white/10 group">
                   <div 
                     className="absolute inset-0 bg-cover bg-center opacity-30 grayscale mix-blend-luminosity group-hover:opacity-80 group-hover:grayscale-0 transition-all duration-[1.5s]" 
                     style={{ backgroundImage: "url('https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?q=80&w=1200')" }}
                   />
                </div>
             </div>
             
             {/* Text and Links */}
             <div className="w-full lg:w-1/2 lg:pt-64 space-y-16">
                <p className="text-2xl md:text-3xl font-light text-white/60 leading-relaxed md:leading-loose">
                   When the front of house is fully seated, there is no margin for error. Our logistics and textile management act as an <span className="text-[#FDFCF0] font-medium">invisible extension</span> of your culinary brigade.
                </p>
                <div className="flex flex-col border-t border-white/10">
                   <Link href="/services/restaurant-linens" className="flex border-b border-white/10 py-8 justify-between items-center group cursor-pointer hover:bg-white/5 px-6 -mx-6 transition-colors">
                      <h3 className="text-2xl uppercase tracking-[0.1em] font-bold text-white/50 group-hover:text-[#FDFCF0] transition-colors">Restaurant Linens</h3>
                      <ArrowRight className="w-6 h-6 text-white/30 group-hover:text-[#FDFCF0] transition-colors" />
                   </Link>
                   <Link href="/services/kitchen-apparel" className="flex border-b border-white/10 py-8 justify-between items-center group cursor-pointer hover:bg-white/5 px-6 -mx-6 transition-colors">
                      <h3 className="text-2xl uppercase tracking-[0.1em] font-bold text-white/50 group-hover:text-[#FDFCF0] transition-colors">Kitchen Apparel</h3>
                      <ArrowRight className="w-6 h-6 text-white/30 group-hover:text-[#FDFCF0] transition-colors" />
                   </Link>
                   <Link href="/services/facility-services" className="flex border-b border-white/10 py-8 justify-between items-center group cursor-pointer hover:bg-white/5 px-6 -mx-6 transition-colors">
                      <h3 className="text-2xl uppercase tracking-[0.1em] font-bold text-white/50 group-hover:text-[#FDFCF0] transition-colors">Facility Services</h3>
                      <ArrowRight className="w-6 h-6 text-white/30 group-hover:text-[#FDFCF0] transition-colors" />
                   </Link>
                </div>
             </div>
          </div>
      </section>
    </>
  );
}
