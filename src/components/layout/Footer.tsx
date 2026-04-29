import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-20 border-t border-slate-800">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand Col */}
          <div className="md:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <img 
                src="/7CsLogo.png" 
                alt="7C's Linen Services" 
                className="w-32 h-auto object-contain brightness-0 invert"
              />
            </Link>
            <p className="text-slate-400 font-light text-sm leading-relaxed mb-6">
              The Invisible Standard of Excellence for South Florida's Hospitality & Culinary industries.
            </p>
            <Link href="/quote" className="text-emerald-400 hover:text-emerald-300 text-sm font-semibold flex items-center transition-colors">
              Get an Estimate <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </div>

          {/* Solutions Col */}
          <div>
            <h4 className="text-sm font-bold tracking-widest text-slate-500 uppercase mb-5">Solutions</h4>
            <ul className="space-y-3">
              <li><Link href="/services/dining-room" className="text-sm text-slate-300 hover:text-white transition-colors focus:ring-2 focus:ring-emerald-500 rounded outline-none w-max">Dining Room</Link></li>
              <li><Link href="/services/back-of-house" className="text-sm text-slate-300 hover:text-white transition-colors focus:ring-2 focus:ring-emerald-500 rounded outline-none w-max">Back of House</Link></li>
              <li><Link href="/services/uniforms" className="text-sm text-slate-300 hover:text-white transition-colors focus:ring-2 focus:ring-emerald-500 rounded outline-none w-max">Uniforms</Link></li>
            </ul>
          </div>

          {/* Authority Col */}
          <div>
            <h4 className="text-sm font-bold tracking-widest text-slate-500 uppercase mb-5">Insights</h4>
            <ul className="space-y-3">
              <li><Link href="/blog" className="text-sm text-slate-300 hover:text-white transition-colors focus:ring-2 focus:ring-emerald-500 rounded outline-none w-max">Authority Guides</Link></li>
              <li><Link href="/blog/case-studies" className="text-sm text-slate-300 hover:text-white transition-colors focus:ring-2 focus:ring-emerald-500 rounded outline-none w-max">Case Studies</Link></li>
              <li><Link href="/blog/sustainability" className="text-sm text-slate-300 hover:text-white transition-colors focus:ring-2 focus:ring-emerald-500 rounded outline-none w-max">Sustainability</Link></li>
            </ul>
          </div>

          {/* Contact Col */}
          <div>
            <h4 className="text-sm font-bold tracking-widest text-slate-500 uppercase mb-5">Contact</h4>
            <ul className="space-y-3 text-sm text-slate-300 font-light">
              <li className="leading-relaxed">
                657 Southwest 9th Terrace<br />
                Pompano Beach, FL 33069
              </li>
              <li className="pt-2">
                <a href="tel:9547883166" className="hover:text-emerald-400 transition-colors focus:ring-2 focus:ring-emerald-500 rounded outline-none p-1 -m-1 block w-max">954.788.3166</a>
              </li>
              <li>
                <a href="mailto:sevencslinen@gmail.com" className="hover:text-emerald-400 transition-colors focus:ring-2 focus:ring-emerald-500 rounded outline-none p-1 -m-1 block w-max">sevencslinen@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between text-xs text-slate-500">
          <p>© {new Date().getFullYear()} 7C’s Linen Service. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
