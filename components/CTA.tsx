import { Button } from "@/components/ui/button"

export default function CTA() {
  return (
    <section className="bg-gradient-to-r from-[#00572B] via-[#00572B] to-[#004620] text-white py-20 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-40 h-40 bg-[#FFBB00] rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-[#FFBB00] rounded-full blur-3xl"></div>
      </div>
      <div className="max-w-3xl mx-auto text-center px-4 space-y-6 relative z-10">
        <h3 className="text-4xl md:text-5xl font-bold text-balance">Ready to Experience Premium Groceries?</h3>
        <div className="w-32 h-1 bg-[#FFBB00] mx-auto"></div>
        <p className="text-lg text-gray-100">
          Join thousands of satisfied customers who trust Abeysinghe Rice Center & Super for quality and reliability
        </p>
        <Button size="lg" className="bg-white hover:bg-[#FFBB00] text-[#00572B] font-semibold">
          Get in Touch
        </Button>
      </div>
    </section>
  )
}
