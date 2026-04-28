import { AnimatedSection } from "@/components/AnimatedSection";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function BlogPreview() {
  const posts = [
    {
      title: "The Impact of Premium Linens on Guest Satisfaction",
      date: "Oct 12, 2025",
      category: "Hospitality Insights",
      image: "https://images.unsplash.com/photo-1542314831-c6a4d140b641?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      excerpt: "Discover why top-tier hotels are upgrading their thread counts to secure better reviews and loyal customers.",
    },
    {
      title: "Eco-Friendly Laundering: Our Green Initiative",
      date: "Sep 28, 2025",
      category: "Sustainability",
      image: "https://images.unsplash.com/photo-1601630138350-13a8637cfcb3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      excerpt: "Learn about the advanced water-filtration and eco-friendly chemicals we use to minimize our environmental footprint.",
    },
    {
      title: "Choosing the Right Tablecloths for Fine Dining",
      date: "Sep 05, 2025",
      category: "Restaurant Tips",
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      excerpt: "From color theory to fabric weights, an essential guide for restaurant managers looking to elevate their dining room.",
    },
  ];

  return (
    <section id="blog" className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-7xl">
        <AnimatedSection className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-xl">
            <h2 className="text-sm font-bold text-deep-navy tracking-widest uppercase mb-3">Insights & News</h2>
            <h3 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
              Latest From The Industry
            </h3>
          </div>
          <Link href="/blog" className="hidden md:inline-flex items-center text-sm font-bold text-deep-navy hover:text-gray-900 transition-colors group">
            View All Articles
            <ArrowRight className="ml-2 w-4 h-4 transform group-hover:-rotate-45 transition-transform" />
          </Link>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <AnimatedSection key={index} delay={index * 0.2}>
              <div className="group cursor-pointer">
                <div className="relative h-64 w-full rounded-2xl overflow-hidden mb-6">
                  <div 
                    className="absolute inset-0 bg-cover bg-center transform group-hover:scale-105 transition-transform duration-700"
                    style={{ backgroundImage: `url('${post.image}')` }}
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500" />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-xs font-bold text-deep-navy rounded-full shadow-sm">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="flex items-center text-sm text-gray-400 mb-3 space-x-4">
                  <span>{post.date}</span>
                </div>
                <h4 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-deep-navy transition-colors line-clamp-2">
                  {post.title}
                </h4>
                <p className="text-gray-600 font-light leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
        
        <div className="mt-12 text-center md:hidden">
          <Link href="/blog" className="inline-flex items-center text-sm font-bold text-deep-navy hover:text-gray-900 transition-colors group">
            View All Articles
            <ArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
