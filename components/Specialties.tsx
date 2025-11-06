import Image from 'next/image'; // Corrected import from 'next/images' to 'next/image'

const specialties = [
  { name: "Premium Rice", query: "sri-lankan-rice-basmati-varieties", img: "/images/rice.png" },
  { name: "Fresh Produce", query: "fresh-vegetables-tomatoes-cabbage-carrots-sri-lankan", img: "/images/produce.png" },
  { name: "Dairy & Eggs", query: "dairy-milk-cheese-eggs-yogurt", img: "/images/dairy.png" },
  { name: "Pantry Essentials", query: "pantry-spices-flour-sugar-oil-Sri-Lankan", img: "/images/pantry.png" },
  { name: "Stationaries", query: "notebooks-pens-pencils-books-stationary-items", img: "/images/pen.png" },
  { name: "Kitchen Appliances", query: "kitchen-appliances-cookware-utensils-pots-pans", img: "/images/ceramic.jpg" },
  { name: "Cosmetics", query: "beauty-cosmetics-skincare-personal-care-products", img: "/images/cosm.png" },
  { name: "House Decors", query: "household-decorating-itmes", img: "/images/decor.jpg" },
];

export default function Specialties() {
  return (
    <section id="products" className="max-w-7xl mx-auto px-4 py-16 md:py-20">
      <div className="text-center mb-12">
        <h3 className="text-3xl font-bold text-[#00572B] mb-4">Our Specialties</h3>
        <div className="w-32 h-1 bg-[#FFBB00] mx-auto mb-6"></div>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Discover our wide range of carefully curated products for your family needs
        </p>
      </div>
      <div className="grid md:grid-cols-4 gap-6">
        {specialties.map((product, i) => (
          <div
            key={i}
            className="bg-yellow-50 rounded-xl p-6 border-3 border-[#00572B] hover:border-[#FFBB00] hover:bg-yellow-100 transition cursor-pointer group"
          >
            <div className="aspect-square bg-gray-50 rounded-lg mb-4 flex items-center justify-center group-hover:bg-gray-300 transition overflow-hidden">
              <Image
                src={product.img} // Corrected the image source
                alt={product.name}
                width={200} // Added width for next/image
                height={200} // Added height for next/image
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <h4 className="font-semibold text-lg text-[#00572B]">{product.name}</h4>
            <p className="text-sm text-gray-600 mt-2">Explore our collection</p>
          </div>
        ))}
      </div>
    </section>
  );
}