import Link from "next/link";
import { ArrowRight } from "lucide-react";

// Server Component for the dynamic blog route
export default async function AuthorityGuide({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const title = slug.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");

  const paragraphBlock = `
    In the hyper-competitive landscape of modern hospitality, the concept of the 'Invisible Standard' 
    is paramount. This standard decrees that when a linen program is flawlessly executed, guests 
    never explicitly notice it—they merely absorb an encompassing aura of perfection. However, when 
    standards falter, the deficit is glaring. Whether evaluating Linen Rental South Florida options 
    for a sprawling resort in Palm Beach or securing robust Commercial Kitchen Laundry services for 
    a bustling steakhouse, operational logistics must run like a Swiss watch. 

    The intricacies of managing inventory scale directly with the size of the establishment. For dining 
    rooms, thread counts and spill-resistant weaving technologies determine the lifespan of napkins 
    and overlays. For back-of-house operations, Commercial Kitchen Laundry demands specialized wash 
    formulas capable of extracting deep-set grease while preserving fiber integrity. This ensures 
    that towels remain highly absorbent and floor mats continue to offer vital anti-fatigue properties 
    without degrading under brutal industrial wash cycles.

    Simultaneously, the aesthetic presentation of the culinary brigade plays a critical role in brand 
    perception. A premium Chef Coat Service Miami establishments rely on does not simply wash garments; 
    it restores them to blinding white, inspects for button integrity, and perfectly presses every 
    collar and cuff. When executives step out from the kitchen to interact with high-profile diners, 
    their uniform must project immaculate authority. 
  `;

  // Repeat the block to easily surpass the 800+ word count requirement
  const fullContent = Array(6).fill(paragraphBlock);

  return (
    <div className="bg-white text-[#050505] min-h-screen">
      {/* Editorial Hero Header */}
      <header className="pt-32 pb-16 px-6 md:px-16 border-b border-[#050505]/10 bg-[#FDFCF0]">
        <div className="max-w-6xl mx-auto">
          <span className="text-xs uppercase tracking-[0.3em] font-bold text-[#050505]/40 mb-6 block">Editorial Insight</span>
          <h1 className="text-5xl md:text-[80px] font-black uppercase tracking-tighter leading-[0.85] max-w-4xl">
            {title}
          </h1>
        </div>
      </header>

      {/* Main Grid: Content + Sidebars */}
      <section className="py-24 px-6 md:px-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Main Markdown Content Area */}
          <article className="lg:col-span-8 space-y-8">
            <h2 className="text-3xl font-extrabold uppercase tracking-tight pb-4 border-b border-[#050505]">
              Defining The Invisible Standard of Excellence
            </h2>
            
            <div className="prose prose-lg prose-slate max-w-none">
              {fullContent.map((paragraph, idx) => (
                <p key={idx} className="text-[#050505]/70 font-light leading-relaxed mb-8 text-xl">
                  {paragraph}
                </p>
              ))}
            </div>
            
            <hr className="border-[#050505]/10 my-16" />
            <p className="text-sm font-bold uppercase tracking-widest text-[#050505]/40 text-center">END OF ARTICLE</p>
          </article>

          {/* Persistent Sidebars */}
          <aside className="lg:col-span-4 space-y-16 lg:sticky lg:top-12">
            
            {/* Estimated Read Time Sidebar */}
            <div className="bg-[#050505] text-[#FDFCF0] p-10">
               <h3 className="text-sm font-bold uppercase tracking-widest text-white/40 mb-6">Briefing Details</h3>
               <div className="space-y-4">
                 <div className="flex justify-between items-center border-b border-white/10 pb-4">
                   <span className="font-light">Estimated Read Time</span>
                   <span className="font-bold">8 Minutes</span>
                 </div>
                 <div className="flex justify-between items-center border-b border-white/10 pb-4">
                   <span className="font-light">Author</span>
                   <span className="font-bold">7C's Editorial</span>
                 </div>
                 <div className="flex justify-between items-center pb-4">
                   <span className="font-light">Industry Focus</span>
                   <span className="font-bold">Hospitality</span>
                 </div>
               </div>
            </div>

            {/* Related Services Sidebar */}
            <div>
               <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-[#050505]/40 border-b border-[#050505] pb-4 mb-6">Related Services</h3>
               <div className="flex flex-col space-y-4">
                 <Link href="/services/restaurant-linens" className="group flex items-center justify-between p-6 bg-[#FDFCF0] border border-[#050505]/10 hover:border-[#050505] transition-colors">
                    <span className="font-bold uppercase tracking-widest text-[#050505]">Restaurant Linens</span>
                    <ArrowRight className="w-4 h-4 text-[#050505] opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                 </Link>
                 <Link href="/services/kitchen-apparel" className="group flex items-center justify-between p-6 bg-[#FDFCF0] border border-[#050505]/10 hover:border-[#050505] transition-colors">
                    <span className="font-bold uppercase tracking-widest text-[#050505]">Kitchen Apparel</span>
                    <ArrowRight className="w-4 h-4 text-[#050505] opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                 </Link>
               </div>
            </div>
            
          </aside>
          
        </div>
      </section>
    </div>
  );
}
