"use client";

import { Phone } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function Header() {
  const router = useRouter();

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      return;
    }
    router.push(`/#${id}`);
  };

  return (
    <header className="sticky top-0 z-50 w-full">
      <div className="bg-white bg-opacity-90 backdrop-blur-md px-6 py-2.5"> {/* Reduced padding: px-8 → px-6, py-4 → py-2.5 */}
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo + Title */}
          <div className="flex items-center gap-2"> {/* Reduced gap-3 → gap-2 */}
            <Image
              src="/abeysinghe-logo.png"
              alt="Abeysinghe Rice Center & Super"
              width={60}     // Reduced from 80
              height={60}
              className="h-auto"
            />
            <div className="leading-tight"> {/* Tighten line spacing */}
              <h1 className="font-bold text-[#00572B] text-sm"> {/* Reduced text-base → text-sm */}
                Abeysinghe Rice Center
              </h1>
              <p className="font-bold text-[#FFBB00] text-xs"> {/* Smaller subtitle */}
                & Abeysinghe Super Center
              </p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex gap-6 text-xs"> {/* Reduced gap-8 → gap-6, smaller text */}
            <button
              onClick={() => scrollTo("hero")}
              className="font-bold text-[#00572B] hover:text-[#FFBB00] transition"
            >
              Home
            </button>
            <button
              onClick={() => scrollTo("about")}
              className="font-bold text-[#00572B] hover:text-[#FFBB00] transition"
            >
              About
            </button>
            <a
              href="#products"
              className="font-bold text-[#00572B] hover:text-[#FFBB00] transition"
            >
              Products
            </a>
            <a
              href="#contact"
              className="font-bold text-[#00572B] hover:text-[#FFBB00] transition"
            >
              Contact
            </a>
          </nav>

          {/* WhatsApp Button */}
          <a
            href="https://wa.me/94716003410"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <Button className="bg-white hover:bg-gray-100 text-[#00572B] font-semibold rounded-full flex items-center gap-1.5 border-2 border-[#00572B] text-xs px-3 py-1.5"> {/* Smaller button */}
              <Phone className="w-3.5 h-3.5" />
              Contact Us
            </Button>
          </a>
        </div>
      </div>
    </header>
  );
}