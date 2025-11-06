"use client"

import { Phone } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full">
      <div className="bg-white bg-opacity-90 backdrop-blur-md px-8 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image
              src="/abeysinghe-logo.png"
              alt="Abeysinghe Rice Center & Super"
              width={40}
              height={40}
              className="h-auto"
            />
            <div>
              <h1 className="font-bold text-[#00572B] text-base">Abeysinghe Rice Center</h1>
              <p className="text-xs text-[#FFBB00]">& Abeysinghe Super Center</p>
            </div>
          </div>
          <nav className="hidden md:flex gap-8">
            <a href="#home" className="text-sm font-bold text-[#00572B] hover:text-[#FFBB00] transition">
              Home
            </a>
            <a href="#about" className="text-sm font-bold text-[#00572B] hover:text-[#FFBB00] transition">
              About
            </a>
            <a href="#products" className="text-sm font-bold text-[#00572B] hover:text-[#FFBB00] transition">
              Products
            </a>
            <a href="#contact" className="text-sm font-bold text-[#00572B] hover:text-[#FFBB00] transition">
              Contact
            </a>
          </nav>
          <Button className="bg-white hover:bg-gray-100 text-[#00572B] font-semibold rounded-full flex items-center gap-2 border-2 border-[#00572B]">
            <Phone className="w-4 h-4" />
            Contact Us
          </Button>
        </div>
      </div>
    </header>
  )
}
