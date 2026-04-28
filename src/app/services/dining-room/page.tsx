import { AnimatedSection } from "@/components/AnimatedSection";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dining Room Linens",
  description: "Premium tablecloths and elegant napkins designed to elevate the visual appeal of Michelin-starred restaurants.",
};

export default function DiningRoomPage() {
  const offerings = [
    "Custom Overlays & Table Runners",
    "Signature High-Thread Count Napkins",
    "Spill-Resistant Tablecloths",
    "Dedicated Delivery & Pressing",
  ];

  return (
    <div className="bg-white">
      {/* Service Hero */}
      <section className="bg-slate-900 text-white py-32 px-6">
        <div className="container mx-auto max-w-5xl text-center">
          <AnimatedSection>
            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-6 mt-16">
              Dining Room <span className="text-emerald-500">Textiles</span>
            </h1>
            <p className="text-xl text-slate-400 font-light max-w-3xl mx-auto leading-relaxed">
              The tactile experience of your dining room is just as important as the culinary one. We provide crisp, elegant linens designed for fine dining.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 px-6">
        <div className="container mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <AnimatedSection>
            <div className="aspect-square bg-slate-100 rounded-3xl overflow-hidden relative shadow-sm">
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80')" }}
              />
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2} className="space-y-8">
            <h2 className="text-4xl font-bold text-slate-900 tracking-tight">Set The Stage for Excellence</h2>
            <p className="text-lg text-slate-600 font-light leading-relaxed">
              Our premium dining room collection is meticulously engineered to absorb sound, protect tables, and provide an unmistakable feel of luxury to your guests. From classic stark whites to muted neutrals, we curate lines that complement your interior design.
            </p>
            <ul className="space-y-4 pt-4">
              {offerings.map((item, idx) => (
                <li key={idx} className="flex items-center text-slate-700 font-medium">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 mr-3" /> {item}
                </li>
              ))}
            </ul>
            <div className="pt-8">
              <Link href="/quote" className="inline-flex items-center px-8 py-4 bg-emerald-500 text-white rounded font-semibold hover:bg-emerald-600 transition-colors shadow-lg shadow-emerald-500/20">
                Discuss Your Dining Room Needs <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
