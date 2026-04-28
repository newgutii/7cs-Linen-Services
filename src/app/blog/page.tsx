import { AnimatedSection } from "@/components/AnimatedSection";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Authority Guides",
  description: "Industry insights and definitive guides on linen rental, commercial kitchen laundry, and hospitality standards in South Florida.",
};

export default function BlogIndex() {
  const guides = [
    {
      title: "The Five-Star Standard in Linen Rental South Florida",
      slug: "five-star-standards",
      category: "Hospitality Management",
      excerpt: "Discover the critical metrics that separate acceptable linens from truly exceptional 'invisible standard' textiles in South Florida's competitive hospitality market.",
    },
    {
      title: "Mastering Commercial Kitchen Laundry Protocols",
      slug: "commercial-kitchen-laundry",
      category: "Operational Efficiency",
      excerpt: "A deep dive into the specialized wash formulas, heat extraction, and sanitary guidelines required for a flawless back-of-house operation.",
    },
    {
      title: "Elevating Your Brand with Chef Coat Service Miami",
      slug: "chef-coat-service-miami",
      category: "Brand Image",
      excerpt: "Why the appearance of your executive chefs and kitchen brigade directly correlates to diner perception and how to perfect it in Miami.",
    },
  ];

  return (
    <div className="bg-slate-50 min-h-[80vh] py-32 px-6">
      <div className="container mx-auto max-w-5xl">
        <AnimatedSection className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight mb-6">
            Authority <span className="text-emerald-500">Guides</span>
          </h1>
          <p className="text-xl text-slate-600 font-light max-w-3xl mx-auto leading-relaxed">
            Unrivaled insights for general managers, executive chefs, and procurement directors striving for perfection.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {guides.map((guide, idx) => (
            <AnimatedSection key={guide.slug} delay={idx * 0.15}>
              <Link href={`/blog/${guide.slug}`} className="group block h-full bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-2xl hover:border-emerald-200 transition-all duration-300">
                <span className="inline-block px-3 py-1 bg-emerald-50 text-emerald-700 text-xs font-bold uppercase tracking-widest rounded-full mb-6">
                  {guide.category}
                </span>
                <h2 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-emerald-600 transition-colors">
                  {guide.title}
                </h2>
                <p className="text-slate-600 font-light leading-relaxed mb-8">
                  {guide.excerpt}
                </p>
                <span className="inline-flex items-center text-sm font-semibold text-slate-900 group-hover:text-emerald-600 mt-auto transition-colors">
                  Read Full Guide <ArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </div>
  );
}
