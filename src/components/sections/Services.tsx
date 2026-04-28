"use client";

import { AnimatedSection } from "@/components/AnimatedSection";
import { motion } from "framer-motion";
import { BedDouble, Utensils, Sparkles, ArrowRight } from "lucide-react";
import Link from "next/link";

const serviceData = [
  {
    icon: <BedDouble className="w-10 h-10" />,
    title: "Hotels & Resorts",
    description: "Premium quality bed sheets, towels, and bathmats designed for five-star comfort and unparalleled durability.",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    icon: <Utensils className="w-10 h-10" />,
    title: "Restaurants & Catering",
    description: "Crisp, elegant tablecloths, napkins, and chef uniforms that elevate your dining room's visual appeal.",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    icon: <Sparkles className="w-10 h-10" />,
    title: "Spas & Airbnbs",
    description: "Luxurious plush towels and pristine linens tailored for intimate, relaxing luxury experiences.",
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  }
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-soft-gray relative overflow-hidden">
      {/* Decorative background shapes */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white rounded-full mix-blend-multiply filter blur-3xl opacity-50 translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-50/50 rounded-full mix-blend-multiply filter blur-3xl opacity-70 -translate-x-1/2 translate-y-1/2" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-sm font-bold text-deep-navy tracking-widest uppercase mb-3">Our Core Services</h2>
          <h3 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
            Tailored Solutions For Every Industry
          </h3>
          <p className="mt-6 text-lg text-gray-600 font-light">
            We provide specialized linen programs, recognizing that each segment of the hospitality sector demands unique attention to detail, quality, and cadence.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {serviceData.map((service, index) => (
            <AnimatedSection key={index} delay={index * 0.2}>
              <motion.div 
                whileHover={{ y: -10 }}
                className="group h-full bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col"
              >
                <div className="h-48 relative overflow-hidden">
                  <div 
                    className="absolute inset-0 bg-cover bg-center transform group-hover:scale-110 transition-transform duration-700"
                    style={{ backgroundImage: `url('${service.image}')` }}
                  />
                  <div className="absolute inset-0 bg-deep-navy/30 group-hover:bg-transparent transition-colors duration-500" />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-3 rounded-full text-deep-navy">
                    {service.icon}
                  </div>
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <h4 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-deep-navy transition-colors">
                    {service.title}
                  </h4>
                  <p className="text-gray-600 font-light leading-relaxed mb-6 flex-grow">
                    {service.description}
                  </p>
                  <Link 
                    href="#quote" 
                    className="inline-flex items-center text-sm font-semibold text-deep-navy hover:text-black mt-auto"
                  >
                    Discuss your needs
                    <ArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-2 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
