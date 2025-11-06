import { MapPin, Phone, Mail } from "lucide-react"
import ContactForm from "./ContactForm"

export default function GetInTouch() {
  return (
    <section id="contact" className="max-w-7xl mx-auto px-4 py-16 md:py-20">
      <div className="grid md:grid-cols-3 gap-12">
        {/* Contact Info */}
        <div className="space-y-4">
          <h3 className="text-3xl font-bold text-[#00572B] mb-8">Get In Touch</h3>
          <div className="flex gap-4">
            <div className="w-10 h-10 bg-[#00572B] rounded-lg flex items-center justify-center flex-shrink-0">
              <MapPin className="w-5 h-5 text-white" />
            </div>
            <div>
              <h4 className="font-semibold text-[#00572B]">Location</h4>
              <p className="text-gray-600">Visit us at our store for a complete shopping experience</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="w-10 h-10 bg-[#00572B] rounded-lg flex items-center justify-center flex-shrink-0">
              <Phone className="w-5 h-5 text-white" />
            </div>
            <div>
              <h4 className="font-semibold text-[#00572B]">Phone</h4>
              <p className="text-gray-600">Contact us for orders and inquiries</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="w-10 h-10 bg-[#00572B] rounded-lg flex items-center justify-center flex-shrink-0">
              <Mail className="w-5 h-5 text-white" />
            </div>
            <div>
              <h4 className="font-semibold text-[#00572B]">Email</h4>
              <p className="text-gray-600">Send us your feedback and suggestions</p>
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="md:col-span-2">
          <ContactForm />
        </div>
      </div>
    </section>
  )
}
