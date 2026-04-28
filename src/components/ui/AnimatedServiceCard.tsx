"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  href: string;
  imageUrl: string;
  index: number;
}

// A simple solid grey blurDataURL for the requested BlurHash placeholder effect
const blurHashBase64 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO+ip1sAAAAASUVORK5CYII=";

export function AnimatedServiceCard({ title, description, href, imageUrl, index }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: Math.min(index * 0.15, 0.5), ease: "easeOut" }}
      className="group flex flex-col bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 will-change-transform"
    >
      <div className="relative h-64 w-full overflow-hidden bg-slate-100">
        <Image 
          src={imageUrl} 
          alt={`Service representation for ${title}`}
          fill
          placeholder="blur"
          blurDataURL={blurHashBase64}
          className="object-cover transform group-hover:scale-105 transition-transform duration-700"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-slate-900/5 group-hover:bg-transparent transition-colors duration-500" />
      </div>
      <div className="p-8 flex flex-col flex-grow">
        <h3 className="text-2xl font-bold text-slate-900 mb-3">{title}</h3>
        <p className="text-slate-600 font-light leading-relaxed mb-8 flex-grow">
          {description}
        </p>
        <Link 
          href={href} 
          className="inline-flex items-center text-sm font-semibold text-emerald-600 hover:text-emerald-700 focus:text-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 rounded p-1 -m-1 mt-auto transition-colors w-max"
        >
          Explore Solutions
          <ArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </motion.div>
  );
}
