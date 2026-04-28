import { AnimatedSection } from "@/components/AnimatedSection";
import { CheckCircle2 } from "lucide-react";

export function AboutUs() {
  const highlights = [
    "Over two decades of industry expertise",
    "Serving premium restaurants and country clubs",
    "Reliable and responsive 7-days-a-week support",
    "Eco-friendly commercial laundering processes",
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column: Image Area */}
          <AnimatedSection delay={0.1}>
            <div className="relative">
              <div className="absolute -inset-4 bg-gray-100 rounded-[2rem] transform -rotate-2 z-0"></div>
              <div 
                className="relative z-10 rounded-3xl overflow-hidden aspect-[4/5] shadow-2xl"
                style={{
                  backgroundImage: "url('https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80')",
                  backgroundSize: "cover",
                  backgroundPosition: "center"
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-deep-navy/80 to-transparent flex flex-col justify-end p-8">
                  <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl w-max">
                    <p className="text-4xl font-bold text-white mb-1">21+</p>
                    <p className="text-gray-200 text-sm font-medium tracking-wide uppercase">Years of Excellence</p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Right Column: Text Content */}
          <AnimatedSection delay={0.3} className="space-y-8">
            <div>
              <h2 className="text-sm font-bold text-deep-navy tracking-widest uppercase mb-3">Our Story</h2>
              <h3 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight">
                South Florida’s Trusted <br/>
                <span className="text-deep-navy">Linen Partner</span>
              </h3>
            </div>
            <p className="text-lg text-gray-600 leading-relaxed font-light">
              Since 2004, 7C’s Linen Service has dedicated itself to setting the standard for premium linen rental services. From high-end hospitality venues to exclusive senior living communities, we partner with our clients to ensure their establishments look impeccable.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed font-light">
              We provide the highest quality linen products and on-time deliveries. We take pride in building programs tailored specifically to your business needs.
            </p>
            
            <ul className="space-y-4 pt-4">
              {highlights.map((item, idx) => (
                <li key={idx} className="flex items-start">
                  <CheckCircle2 className="w-6 h-6 text-deep-navy flex-shrink-0 mt-0.5 mr-3" />
                  <span className="text-gray-700 font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
