// components/About.tsx
"use client";

import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Title */}
        <h2 className="text-4xl font-bold text-[#00572B] text-center mb-12">
          Our Story
        </h2>

        {/* Two-column layout */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image – replace with your own */}
          <div className="order-2 md:order-1">
          <Image
                src="/images/shop.jpg" // Correct path to the image in the public directory
                alt="Abeysinghe shop interior"
                width={500}
                height={100}
                className="rounded-lg shadow-lg w-full h-auto object-cover"
                />
         </div>

          {/* Text content */}
          <div className="order-1 md:order-2 space-y-8 text-gray-700">
            <p className="text-2xl leading-relaxed">
              Founded in <strong>1985</strong> by Mr. S. Abeysinghe in the heart of Matara, 
              <strong> Abeysinghe Rice Center</strong> started as a modest family-run rice mill 
              supplying the finest local varieties to neighboring villages.
            </p>

            <p className="text-2xl leading-relaxed">
              Over the decades we grew into a full-fledged <em>Super Center</em>, 
              offering fresh produce, spices, household goods, and everything you need 
              while keeping the quality that earned us the trust of generations.
            </p>

            <p className="text-2xl leading-relaxed">
              Today, with a dedicated team of over 30 staff and a modern 12,000 sq-ft store, 
              we continue the same passion: delivering premium products at honest prices, 
              straight from farm to your table.
            </p>
            </div>
          </div>
        </div>
      
    </section>
  );
}