"use client"

import Header from "@/components/Header"
import Hero from "@/components/Hero"
import WhyChooseUs from "@/components/WhyChooseUs"
import Promotions from "@/components/Promotions"
import Specialties from "@/components/Specialties"
import CTA from "@/components/CTA"
import GetInTouch from "@/components/GetInTouch"
import Footer from "@/components/Footer"

export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <WhyChooseUs />
      <Promotions />
      <Specialties />
      <CTA />
      <GetInTouch />
      <Footer />
    </div>
  )
}
