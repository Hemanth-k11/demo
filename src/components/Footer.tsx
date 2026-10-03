import { Link } from "react-router-dom";
import { MapPin, Phone, Mail } from "lucide-react";

const productLinks = [
  "Rice Mill Machines",
  "Grain Dryers",
  "Paddy Separators",
  "Flour Mill Machines",
  "Oil Expellers",
  "Grain Dryer",
];

const serviceLinks = [
  "Installation & Setup",
  "Annual Maintenance",
  "Spare Parts Supply",
  "On-site Repair",
  "Operator Training",
  "Custom Fabrication",
];

export default function Footer() {
  return (
    <footer className="bg-dark-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">A</span>
              </div>
              <span className="text-xl font-bold text-white">
                Agro<span className="text-primary-400">Mach</span>
              </span>
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed mb-4">
              Leading manufacturer of precision agro-processing machinery since 1998. Built with
              Indian steel, engineered for Indian farmers.
            </p>
            <div className="flex gap-3">
              {["facebook", "twitter", "instagram", "linkedin"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-9 h-9 rounded-full bg-dark-700 flex items-center justify-center text-gray-400 hover:bg-primary-600 hover:text-white transition-colors"
                  aria-label={social}
                >
                  <span className="text-xs font-bold uppercase">
                    {social[0]}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Products
            </h3>
            <ul className="space-y-2.5">
              {productLinks.map((item) => (
                <li key={item}>
                  <Link
                    to="/products"
                    className="text-sm text-gray-400 hover:text-primary-400 transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Services
            </h3>
            <ul className="space-y-2.5">
              {serviceLinks.map((item) => (
                <li key={item}>
                  <Link
                    to="/services"
                    className="text-sm text-gray-400 hover:text-primary-400 transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex gap-3 text-sm">
                <MapPin className="w-5 h-5 text-primary-500 shrink-0 mt-0.5" />
                <span className="text-gray-400">
                  Plot No. 45, Industrial Area Phase II,
                  <br />
                  Ludhiana, Punjab — 141003
                </span>
              </li>
              <li className="flex gap-3 text-sm">
                <Phone className="w-5 h-5 text-primary-500 shrink-0" />
                <span className="text-gray-400">+91 98765 43210</span>
              </li>
              <li className="flex gap-3 text-sm">
                <Mail className="w-5 h-5 text-primary-500 shrink-0" />
                <span className="text-gray-400">info@agromach.in</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-dark-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <p className="text-xs text-gray-500 text-center">
            © 2024 AgroMach Industries. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
