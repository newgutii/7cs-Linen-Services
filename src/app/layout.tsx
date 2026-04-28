import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SideMenu } from "@/components/layout/SideMenu";

const inter = Inter({ 
  subsets: ["latin"], 
  variable: "--font-inter",
  display: "swap" 
});

export const metadata: Metadata = {
  title: {
    template: "%s | 7C's Linen Service",
    default: "7C's Linen Service | Industrial Culinary Linens",
  },
  description: "Precision-tailored industrial apparel and linens engineered for the heat of the modern culinary kitchen.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} antialiased scroll-smooth`}>
      <body className="font-sans min-h-screen flex flex-col md:flex-row bg-[#050505] text-[#FDFCF0] overflow-x-hidden selection:bg-[#FDFCF0] selection:text-[#050505]">
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:p-4 focus:bg-[#FDFCF0] focus:text-[#050505]">
          Skip to main content
        </a>
        
        {/* Persistent Side-Bar Menu Desktop / Full-Screen Overlay Mobile */}
        <SideMenu />
        
        {/* Main Content Area (offset by the sidebar width on desktop) */}
        <main id="main-content" className="flex-grow w-full md:pl-[300px] relative z-0 flex flex-col min-h-screen">
          {children}
        </main>

      </body>
    </html>
  );
}
