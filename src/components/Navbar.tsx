import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Products", path: "/products" },
  { label: "Services", path: "/services" },
  { label: "About Us", path: "/about" },
  { label: "Contact Us", path: "/contact" },
];

/**
 * Adaptive Navbar that shifts accent color based on current page.
 * - Home / Products / About → green primary accent
 * - Services → teal service accent
 *
 * Adds glass-morphism background on scroll for performance-friendly blur.
 */
export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isServicePage = location.pathname === "/services";

  /* Scroll listener – passive for zero scroll-jank */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const accentBg = isServicePage ? "bg-service-600" : "bg-primary-600";
  const accentBgHover = isServicePage ? "hover:bg-service-700" : "hover:bg-primary-700";
  const accentText = isServicePage ? "text-service-600" : "text-primary-600";
  const accentIcon = isServicePage ? "text-service-600" : "text-primary-600";

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-lg shadow-md"
          : "bg-white shadow-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className={`w-8 h-8 ${accentBg} rounded-lg flex items-center justify-center transition-colors`}>
              <span className="text-white font-bold text-sm">A</span>
            </div>
            <span className="text-xl font-bold text-gray-900">
              Agro<span className={`${accentText} transition-colors`}>Mach</span>
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors relative group/link ${
                  location.pathname === link.path
                    ? accentText
                    : `text-gray-700 hover:${accentText}`
                }`}
              >
                {link.label}
                {/* Active underline indicator */}
                {location.pathname === link.path && (
                  <span
                    className={`absolute -bottom-1 left-0 w-full h-0.5 rounded-full ${
                      isServicePage ? "bg-service-500" : "bg-primary-500"
                    }`}
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Right Section */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="tel:+919876543210"
              className="flex items-center gap-2 text-sm text-gray-700 font-medium"
            >
              <Phone className={`w-4 h-4 ${accentIcon}`} />
              +91 98765 43210
            </a>
            <Link
              to="/contact"
              className={`${accentBg} text-white px-5 py-2 rounded-lg text-sm font-semibold ${accentBgHover} transition-colors`}
            >
              Get a Dealer
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-lg border-t animate-fade-in">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileOpen(false)}
                className={`block text-sm font-medium py-2 ${
                  location.pathname === link.path ? accentText : "text-gray-700"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="tel:+919876543210"
              className="flex items-center gap-2 text-sm text-gray-700 font-medium py-2"
            >
              <Phone className={`w-4 h-4 ${accentIcon}`} />
              +91 98765 43210
            </a>
            <Link
              to="/contact"
              onClick={() => setMobileOpen(false)}
              className={`block ${accentBg} text-white px-5 py-2.5 rounded-lg text-sm font-semibold text-center ${accentBgHover} transition-colors`}
            >
              Get a Dealer
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
