import { Facebook, Instagram, MessageCircle } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t-4 border-[#00572B] bg-[#00572B] py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="space-y-3">
            <h4 className="font-bold text-[#FFBB00] text-lg">Location</h4>
            <p className="text-white text-sm leading-relaxed">
              123 Main Street
              <br />
              Colombo, Sri Lanka
              <br />
              Central Shopping District
            </p>
          </div>
          <div className="space-y-3">
            <h4 className="font-bold text-[#FFBB00] text-lg">Contact Us</h4>
            <div className="text-white text-sm space-y-2">
              <p>
                <span className="font-semibold">Phone:</span>
                <br />
                +94 (0) 11 234 5678
              </p>
              <p>
                <span className="font-semibold">Mobile:</span>
                <br />
                +94 71 234 5678
              </p>
              <p>
                <span className="font-semibold">Email:</span>
                <br />
                info@abeysinghe.lk
              </p>
            </div>
          </div>
          <div className="space-y-3">
            <h4 className="font-bold text-[#FFBB00] text-lg">Hours</h4>
            <div className="text-white text-sm space-y-1">
              <p>Monday - Friday: 7:00 AM - 9:00 PM</p>
              <p>Saturday: 7:00 AM - 10:00 PM</p>
              <p>Sunday: 8:00 AM - 8:00 PM</p>
            </div>
          </div>
          <div className="space-y-3">
            <h4 className="font-bold text-[#FFBB00] text-lg">Follow Us</h4>
            <div className="flex gap-4">
              <a href="#" className="hover:opacity-80 transition">
                <Facebook className="w-6 h-6 text-white" />
              </a>
              <a href="#" className="hover:opacity-80 transition">
                <Instagram className="w-6 h-6 text-white" />
              </a>
              <a href="#" className="hover:opacity-80 transition">
                <MessageCircle className="w-6 h-6 text-white" />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-yellow-600 pt-6 text-center text-white text-sm">
          <p>&copy; 2025 Abeysinghe Rice Center & Super. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
