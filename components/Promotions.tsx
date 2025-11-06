import { Tag } from "lucide-react"

const promotions = [
  {
    title: "Rice Collection Sale",
    description: "Get 20% off on all premium rice varieties",
    image: "/images/rice.png",
    date: "Valid until: 15th November",
  },
  {
    title: "Dairy Discounts",
    description: "Buy 2 get 1 free on selected Dairy products",
    image: "/images/dairy.png",
    date: "Valid until: 30th November",
  },
  {
    title: "Loyalty Rewards",
    description: "Earn points on every purchase",
    image: "images/card.png",
    date: "Ongoing program",
  },
]

export default function Promotions() {
  return (
    <section className="bg-white py-12 md:py-16 border-t-4 border-b-4 border-[#FFBB00]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center gap-4 mb-8">
          <Tag className="w-8 h-8 text-[#00572B]" />
          <h3 className="text-2xl md:text-3xl font-bold text-[#00572B]">Active Promotions</h3>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {promotions.map((promo, i) => (
            <div key={i} className="bg-white rounded-xl p-6 border-4 border-[#FFBB00] hover:shadow-xl transition">
              <div className="w-full h-32 bg-gray-20 rounded-lg mb-4 overflow-hidden">
                <img src={promo.image || "/placeholder.svg"} alt={promo.title} className="w-full h-full object-cover" />
              </div>
              <h4 className="font-bold text-lg text-[#00572B] mb-2">{promo.title}</h4>
              <p className="text-red-600 font-semibold text-sm mb-3">{promo.description}</p>
              <p className="text-[#00572B] font-semibold">{promo.date}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
