import { Facebook, Instagram, Twitter, Youtube } from "lucide-react"
import { Link } from "react-router-dom"


function Footer() {
    return (
        <footer className="bg-[#0a0a0a] text-white py-6 border-t border-gray-800 mt-16">
          <div className="w-[90%] max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-sm">
            <div className="flex flex-wrap justify-center md:justify-start gap-4 md:gap-6 text-gray-400">
              <span> {new Date().getFullYear()} Bazooka Restaurant</span>
              <span>|</span>
              <button  className="hover:text-orange-400 transition cursor-pointer">Privacy Policy</button>
              <span>|</span>
              <butto className="hover:text-orange-400 transition cursor-pointer">Terms & Conditions</butto>
              <span>|</span>
              <Link to="/contact" className="hover:text-orange-400 transition">Contact</Link>
              <span>|</span>
              <Link to="/about" className="hover:text-orange-400 transition">Our Story</Link>
            </div>

            <div className="flex gap-4">
              <a href="#" className="hover:text-orange-400 transition" aria-label="Facebook">
                <Facebook size={18} />
              </a>
              <a href="#" className="hover:text-orange-400 transition" aria-label="YouTube">
                <Youtube size={18} />
              </a>
              <a href="#" className="hover:text-orange-400 transition" aria-label="Instagram">
                <Instagram size={18} />
              </a>
              <a href="#" className="hover:text-orange-400 transition" aria-label="Twitter">
                <Twitter size={18} />
              </a>
            </div>
          </div>
        </footer>
    )
}

export default Footer