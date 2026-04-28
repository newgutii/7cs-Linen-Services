import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-deep-navy text-soft-gray pt-16 pb-8 border-t border-white/10">
      <div className="container mx-auto px-6 max-w-7xl grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
        {/* Brand & Story */}
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-white tracking-tighter">
            7C&apos;s <span className="font-normal text-gray-300">Linen</span>
          </h3>
          <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
            South Florida’s established leader in premium linen rental services since 2004. 
            Providing 21 years of excellence to restaurants, country clubs, and the hospitality elite.
          </p>
        </div>

        {/* Quick Links */}
        <div className="space-y-4">
          <h4 className="text-lg font-semibold text-white">Quick Links</h4>
          <ul className="space-y-2">
            <li><Link href="/" className="text-gray-400 hover:text-white transition-colors text-sm">Home</Link></li>
            <li><Link href="#about" className="text-gray-400 hover:text-white transition-colors text-sm">About Us</Link></li>
            <li><Link href="#services" className="text-gray-400 hover:text-white transition-colors text-sm">Services</Link></li>
            <li><Link href="#blog" className="text-gray-400 hover:text-white transition-colors text-sm">Blog & Insights</Link></li>
            <li><Link href="#quote" className="text-gray-400 hover:text-white transition-colors text-sm">Request a Quote</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="space-y-4">
          <h4 className="text-lg font-semibold text-white">Contact Us</h4>
          <ul className="space-y-4">
            <li className="flex items-start space-x-3">
              <MapPin className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" />
              <span className="text-gray-400 text-sm">657 Southwest 9th Terrace<br />Pompano Beach, Florida 33069</span>
            </li>
            <li className="flex items-center space-x-3">
              <Phone className="w-5 h-5 text-gray-400 flex-shrink-0" />
              <div className="flex flex-col text-sm text-gray-400">
                <a href="tel:9547883166" className="hover:text-white transition-colors">954-788-3166</a>
                <a href="tel:5615770417" className="hover:text-white transition-colors">561-577-0417</a>
              </div>
            </li>
            <li className="flex items-center space-x-3">
              <Mail className="w-5 h-5 text-gray-400 flex-shrink-0" />
              <a href="mailto:sevencslinen@gmail.com" className="text-gray-400 text-sm hover:text-white transition-colors">
                sevencslinen@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="container mx-auto px-6 max-w-7xl pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between">
        <p className="text-xs text-gray-500">
          © {new Date().getFullYear()} 7C’s Linen Service. All rights reserved.
        </p>
        <p className="text-xs text-gray-500 mt-2 md:mt-0">
          Designed for Hospitality Elite.
        </p>
      </div>
    </footer>
  );
}
