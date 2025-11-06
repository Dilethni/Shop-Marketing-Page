// components/Hero.tsx
"use client";

import { Button } from "@/components/ui/button";

export default function Hero() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="max-w-7xl mx-auto px-4 pt-8 md:pt-12 pb-12 md:pb-16 flex flex-col md:flex-row items-center gap-12">
      <div className="flex-1 space-y-6">
        <div className="space-y-3">
          <p className="text-sm font-semibold text-[#00572B]">Welcome to</p>
          <h2 className="text-5xl md:text-6xl font-bold text-balance text-[#00572B]">Abeysinghe Super Center</h2>
          <div className="w-24 h-1 bg-[#FFBB00]"></div>
          <p className="text-xl text-gray-700">Best, from us — straight to your heart</p>
        </div>
        <p className="text-gray-600 leading-relaxed max-w-lg">
          At Abeysinghe Rice Center & Super, we pride ourselves on delivering the finest quality groceries to your
          doorstep. From premium rice varieties to fresh produce and household essentials, we have everything you need.
        </p>
        <div className="flex gap-4 pt-4">
          <Button
            size="lg"
            onClick={() => scrollTo("products")}
            className="bg-[#00572B] hover:bg-[#004620] text-white font-semibold"
          >
            Explore Products
          </Button>
          <Button
            size="lg"
            onClick={() => scrollTo("contact")}
            className="border-2 border-[#FFBB00] text-[#00572B] hover:bg-yellow-50 font-semibold"
          >
            Learn More
          </Button>
        </div>
      </div>
      <div className="flex-1">
        <div className="relative aspect-square bg-gradient-to-br from-[#00572B] to-[#004620] rounded-2xl flex items-center justify-center overflow-hidden group cursor-pointer">
          <img
            src="/supermarket-aisle.png"
            alt="Abeysinghe Super Center - Fresh produce and grocery aisles"
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
          />

          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#00572B]/40 via-transparent to-transparent group-hover:from-[#00572B]/20 transition-all duration-500" />

          {/* Corner accent */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#FFBB00] opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-full blur-3xl" />
        </div>
      </div>
    </section>
  );
}