import { Award, ShoppingCart, MapPin } from "lucide-react"

const reasons = [
  {
    icon: Award,
    title: "Premium Quality",
    description: "Carefully selected products sourced from trusted suppliers for guaranteed quality",
  },
  {
    icon: ShoppingCart,
    title: "Best Prices",
    description: "Competitive pricing without compromising on quality. Regular discounts and offers",
  },
  {
    icon: MapPin,
    title: "Community Trust",
    description: "Serving our community for decades with integrity, reliability, and exceptional service",
  },
]

export default function WhyChooseUs() {
  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h3 className="text-3xl font-bold text-center mb-12 text-[#00572B]">Why Choose Us</h3>
        <div className="grid md:grid-cols-3 gap-8">
          {reasons.map((reason, i) => {
            const Icon = reason.icon
            return (
              <div key={i} className="bg-white rounded-xl p-8 border-4 border-[#00572B] hover:shadow-2xl transition">
                <div className="w-12 h-12 bg-[#00572B] rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-semibold text-lg text-[#00572B] mb-2">{reason.title}</h4>
                <p className="text-gray-600">{reason.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
