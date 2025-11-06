import { Facebook, Instagram, MessageCircle,Phone } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t-4 border-[#00572B] bg-[#00572B] py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="space-y-3">
            <h4 className="font-bold text-[#FFBB00] text-lg">Location</h4>
            <p className="text-white text-sm leading-relaxed">
            <p className="text-white text-bold leading-relaxed"> <strong>Abeysinghe Rice Center</strong>
              <br />
              48,Rahula rd
              <br />
              Matara, Sri Lanka
            </p>
            </p>
              <br/>
              
            <p className="text-white text-bold leading-relaxed"> <strong>Abeysinghe Super Center</strong>
              <br />  
            <p className="text-white text-sm leading-relaxed">
              44,Hakmana rd
              <br />
              Matara, Sri Lanka
            </p>
            </p>
          </div>
          <div className="space-y-3">
            <h4 className="font-bold text-[#FFBB00] text-lg">Contact Us</h4>
            <div className="text-white text-sm space-y-2">
              <p>
                <span className="font-semibold">Land:</span>
                <br />
                +94 (0) 41 212 1676
               
              </p>
              <p>
                <span className="font-semibold">Mobile:</span>
                <br />
                +94 71 600 3410
                <br/>
                +94 76 120 7424
              </p>
              <p>
                <span className="font-semibold">Email:</span>
                <br />
                ascmatara@gmail.com
              </p>
            </div>
          </div>
          <div className="space-y-3">
            <h4 className="font-bold text-[#FFBB00] text-lg">Hours</h4>
            <div className="text-white text-sm space-y-1">
              <p>Monday - Saturday: 8:00 AM - 8:00 PM</p>
              <p>Sunday: 8:00 AM - 2:00 PM</p>
            </div>
          </div>
          <div className="space-y-3">
            <h4 className="font-bold text-[#FFBB00] text-lg">Follow Us</h4>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/profile.php?id=61574939009994" className="hover:opacity-80 transition">
                <Facebook className="w-6 h-6 text-white" />
              </a>
              <a href="#" className="hover:opacity-80 transition">
                <Instagram className="w-6 h-6 text-white" />
              </a>
              <a href="#" className="hover:opacity-80 transition">
                <MessageCircle className="w-6 h-6 text-white" />
              </a>
              <a
                href="https://wa.me/94716003410"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition"
              >
                <Phone className="w-6 h-6 text-white" />
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
