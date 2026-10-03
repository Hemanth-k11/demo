import { Link } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle,
  Zap,
  Truck,
  Shield,
  Settings,
  Gauge,
  Award,
  Phone,
  Filter,
  Grid3X3,
  List,
  ChevronRight,
} from "lucide-react";
import { useState } from "react";
import AnimatedSection from "../components/AnimatedSection";

/* ═══════════ PRODUCT DATA ═══════════ */

type ProductCategory = "all" | "rice" | "flour" | "cleaning";

interface Product {
  id: number;
  name: string;
  category: ProductCategory;
  image: string;
  capacity: string;
  power: string;
  weight: string;
  warranty: string;
  features: string[];
  badge?: string;
  badgeColor?: string;
  price?: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "Mini Rice Mill Machine",
    category: "rice",
    image: "/images/machine-1.jpg",
    capacity: "150-200 kg/hr",
    power: "2 HP Single Phase",
    weight: "120 kg",
    warranty: "2 Years",
    features: ["Compact design", "Low grain breakage", "Easy maintenance", "Portable"],
    badge: "Best Seller",
    badgeColor: "bg-amber-500",
  },
  {
    id: 2,
    name: "Commercial Rice Mill Set",
    category: "rice",
    image: "/images/machine-2.jpg",
    capacity: "400-500 kg/hr",
    power: "10 HP Three Phase",
    weight: "450 kg",
    warranty: "2 Years",
    features: ["Auto temperature control", "Multi-stage processing", "Steel body", "High throughput"],
    badge: "Popular",
    badgeColor: "bg-blue-500",
  },
  {
    id: 3,
    name: "Paddy Processing Line",
    category: "rice",
    image: "/images/machine-3.jpg",
    capacity: "600+ kg/hr",
    power: "20 HP Three Phase",
    weight: "1,200 kg",
    warranty: "2 Years",
    features: ["Complete automation", "End-to-end processing", "Conveyor integrated", "Custom capacity"],
    badge: "Industrial",
    badgeColor: "bg-red-500",
  },
  {
    id: 4,
    name: "Heavy Roller Mill",
    category: "flour",
    image: "/images/machine-4.jpg",
    capacity: "200-300 kg/hr",
    power: "5 HP Single/Three Phase",
    weight: "280 kg",
    warranty: "2 Years",
    features: ["High-torque motor", "Stainless steel rollers", "Adjustable gap", "Continuous operation"],
    badge: "New",
    badgeColor: "bg-green-500",
  },
  {
    id: 5,
    name: "Vibro Grain Separator",
    category: "cleaning",
    image: "/images/machine-5.jpg",
    capacity: "500 kg/hr",
    power: "3 HP Three Phase",
    weight: "350 kg",
    warranty: "2 Years",
    features: ["Multi-layer screening", "95% efficiency", "Easy screen swap", "Low vibration"],
  },
  {
    id: 6,
    name: "Grain Cleaning & Sorting",
    category: "cleaning",
    image: "/images/machine-6.jpg",
    capacity: "1-2 ton/hr",
    power: "5 HP Three Phase",
    weight: "500 kg",
    warranty: "2 Years",
    features: ["3-tier screening", "Blower assisted", "Dust collector", "Compact frame"],
    badge: "Popular",
    badgeColor: "bg-blue-500",
  },
];

const categories: { key: ProductCategory; label: string; count: number }[] = [
  { key: "all", label: "All Products", count: products.length },
  { key: "rice", label: "Rice Processing", count: products.filter((p) => p.category === "rice").length },
  { key: "flour", label: "Flour Milling", count: products.filter((p) => p.category === "flour").length },
  { key: "cleaning", label: "Cleaning & Sorting", count: products.filter((p) => p.category === "cleaning").length },
];

/* ═══════════ COMPONENT ═══════════ */

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState<ProductCategory>("all");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const filteredProducts =
    activeCategory === "all" ? products : products.filter((p) => p.category === activeCategory);

  return (
    <div className="overflow-x-hidden bg-gray-50 min-h-screen">

      {/* ╔══════════════════════════════════════════════════════════╗
          ║  HERO — Product-focused, clean & professional           ║
          ╚══════════════════════════════════════════════════════════╝ */}
      <section className="relative bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-6">
            <Link to="/" className="hover:text-gray-900 transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 inline mx-1" />
            <span className="text-gray-900 font-medium">Products</span>
          </nav>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 text-xs font-semibold px-3 py-1.5 rounded-full mb-6">
                <Grid3X3 className="w-3.5 h-3.5" />
                Product Catalog
              </span>
              <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-5">
                Machinery That Works
                <br />
                <span className="text-gray-400">As Hard As You Do</span>
              </h1>
              <p className="text-gray-500 text-lg leading-relaxed mb-8 max-w-lg">
                Browse our complete range of rice mills, grain cleaners, and agro-processing equipment.
                Every machine is built in India, tested rigorously, and backed by our 2-year warranty.
              </p>

              {/* Quick stats */}
              <div className="flex flex-wrap gap-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-50 rounded-lg flex items-center justify-center">
                    <Shield className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">2-Year Warranty</p>
                    <p className="text-xs text-gray-500">On all machines</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                    <Truck className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">Pan-India Delivery</p>
                    <p className="text-xs text-gray-500">18 states</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-amber-50 rounded-lg flex items-center justify-center">
                    <Zap className="w-5 h-5 text-amber-600" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">Energy Efficient</p>
                    <p className="text-xs text-gray-500">30% less power</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Featured product hero image */}
            <div className="hidden lg:flex justify-center">
              <div className="relative">
                <div className="bg-gray-50 rounded-3xl p-8">
                  <img
                    src="/images/machine-1.jpg"
                    alt="Featured product"
                    className="w-full h-72 object-cover rounded-2xl"
                  />
                </div>
                {/* Floating badges */}
                <div className="absolute -top-3 -right-3 bg-green-500 text-white text-xs font-bold px-3 py-1.5 rounded-lg shadow-lg">
                  ISO 9001:2015
                </div>
                <div className="absolute -bottom-3 -left-3 bg-white rounded-xl shadow-lg p-3 flex items-center gap-2">
                  <Award className="w-5 h-5 text-amber-500" />
                  <span className="text-sm font-semibold text-gray-900">Best Seller</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ╔══════════════════════════════════════════════════════════╗
            CATEGORY FILTER + VIEW TOGGLE                          ║
          ╚══════════════════════════════════════════════════════════╝ */}
      <section className="sticky top-16 z-40 bg-white/90 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-4 gap-4 overflow-x-auto">
            {/* Category tabs */}
            <div className="flex items-center gap-2">
              <Filter className="w-4 h-4 text-gray-400 mr-2" />
              {categories.map((cat) => (
                <button
                  key={cat.key}
                  onClick={() => setActiveCategory(cat.key)}
                  className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all ${
                    activeCategory === cat.key
                      ? "bg-gray-900 text-white shadow-sm"
                      : "text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  {cat.label}
                  <span className={`text-xs ${activeCategory === cat.key ? "text-gray-300" : "text-gray-400"}`}>
                    ({cat.count})
                  </span>
                </button>
              ))}
            </div>

            {/* View toggle */}
            <div className="hidden sm:flex items-center gap-1 bg-gray-100 rounded-lg p-1">
              <button
                onClick={() => setViewMode("grid")}
                className={`p-2 rounded-md transition-all ${
                  viewMode === "grid" ? "bg-white shadow-sm text-gray-900" : "text-gray-400 hover:text-gray-600"
                }`}
              >
                <Grid3X3 className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`p-2 rounded-md transition-all ${
                  viewMode === "list" ? "bg-white shadow-sm text-gray-900" : "text-gray-400 hover:text-gray-600"
                }`}
              >
                <List className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ╔══════════════════════════════════════════════════════════╗
          ║  PRODUCT GRID / LIST                                    ║
          ╚══════════════════════════════════════════════════════════╝ */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {viewMode === "grid" ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product, idx) => (
                <AnimatedSection key={product.id} delay={idx * 100} direction="up">
                  <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden group hover:shadow-xl hover:shadow-gray-200/50 hover:border-gray-200 transition-all h-full flex flex-col">
                    {/* Image */}
                    <div className="relative h-56 overflow-hidden bg-gray-50">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      {product.badge && (
                        <span className={`absolute top-4 left-4 ${product.badgeColor} text-white text-xs font-bold px-3 py-1 rounded-lg`}>
                          {product.badge}
                        </span>
                      )}
                    </div>

                    {/* Content */}
                    <div className="p-6 flex-1 flex flex-col">
                      <h3 className="text-lg font-bold text-gray-900 mb-3">{product.name}</h3>

                      {/* Specifications */}
                      <div className="grid grid-cols-2 gap-3 mb-4">
                        <div className="bg-gray-50 rounded-lg p-2.5">
                          <p className="text-[10px] text-gray-400 uppercase tracking-wider">Capacity</p>
                          <p className="text-sm font-semibold text-gray-900">{product.capacity}</p>
                        </div>
                        <div className="bg-gray-50 rounded-lg p-2.5">
                          <p className="text-[10px] text-gray-400 uppercase tracking-wider">Power</p>
                          <p className="text-sm font-semibold text-gray-900">{product.power}</p>
                        </div>
                        <div className="bg-gray-50 rounded-lg p-2.5">
                          <p className="text-[10px] text-gray-400 uppercase tracking-wider">Weight</p>
                          <p className="text-sm font-semibold text-gray-900">{product.weight}</p>
                        </div>
                        <div className="bg-gray-50 rounded-lg p-2.5">
                          <p className="text-[10px] text-gray-400 uppercase tracking-wider">Warranty</p>
                          <p className="text-sm font-semibold text-gray-900">{product.warranty}</p>
                        </div>
                      </div>

                      {/* Features */}
                      <div className="flex flex-wrap gap-2 mb-5">
                        {product.features.slice(0, 3).map((f) => (
                          <span key={f} className="inline-flex items-center gap-1 text-xs text-gray-600 bg-gray-50 px-2.5 py-1 rounded-full border border-gray-100">
                            <CheckCircle className="w-3 h-3 text-green-500" />
                            {f}
                          </span>
                        ))}
                        {product.features.length > 3 && (
                          <span className="text-xs text-gray-400 bg-gray-50 px-2.5 py-1 rounded-full">
                            +{product.features.length - 3} more
                          </span>
                        )}
                      </div>

                      {/* Actions */}
                      <div className="flex gap-3 mt-auto pt-4 border-t border-gray-100">
                        <Link
                          to="/contact"
                          className="flex-1 text-center bg-gray-900 text-white py-2.5 rounded-xl text-sm font-semibold hover:bg-gray-800 transition-colors"
                        >
                          Get Quote
                        </Link>
                        <button className="flex-1 text-center border border-gray-200 text-gray-700 py-2.5 rounded-xl text-sm font-medium hover:border-gray-400 transition-colors">
                          View Details
                        </button>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          ) : (
            /* List view */
            <div className="space-y-4">
              {filteredProducts.map((product, idx) => (
                <AnimatedSection key={product.id} delay={idx * 80}>
                  <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden group hover:shadow-lg hover:border-gray-200 transition-all flex flex-col sm:flex-row">
                    {/* Image */}
                    <div className="relative w-full sm:w-72 h-48 sm:h-auto overflow-hidden bg-gray-50 shrink-0">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      {product.badge && (
                        <span className={`absolute top-3 left-3 ${product.badgeColor} text-white text-xs font-bold px-3 py-1 rounded-lg`}>
                          {product.badge}
                        </span>
                      )}
                    </div>

                    {/* Content */}
                    <div className="p-6 flex-1 flex flex-col justify-center">
                      <div className="flex flex-wrap items-start justify-between gap-4 mb-3">
                        <h3 className="text-xl font-bold text-gray-900">{product.name}</h3>
                      </div>

                      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
                        <div>
                          <p className="text-[10px] text-gray-400 uppercase tracking-wider">Capacity</p>
                          <p className="text-sm font-semibold text-gray-900">{product.capacity}</p>
                        </div>
                        <div>
                          <p className="text-[10px] text-gray-400 uppercase tracking-wider">Power</p>
                          <p className="text-sm font-semibold text-gray-900">{product.power}</p>
                        </div>
                        <div>
                          <p className="text-[10px] text-gray-400 uppercase tracking-wider">Weight</p>
                          <p className="text-sm font-semibold text-gray-900">{product.weight}</p>
                        </div>
                        <div>
                          <p className="text-[10px] text-gray-400 uppercase tracking-wider">Warranty</p>
                          <p className="text-sm font-semibold text-gray-900">{product.warranty}</p>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {product.features.map((f) => (
                          <span key={f} className="inline-flex items-center gap-1 text-xs text-gray-600 bg-gray-50 px-2.5 py-1 rounded-full border border-gray-100">
                            <CheckCircle className="w-3 h-3 text-green-500" />
                            {f}
                          </span>
                        ))}
                      </div>

                      <div className="flex gap-3">
                        <Link to="/contact" className="bg-gray-900 text-white px-6 py-2.5 rounded-xl text-sm font-semibold hover:bg-gray-800 transition-colors">
                          Get Quote
                        </Link>
                        <button className="border border-gray-200 text-gray-700 px-6 py-2.5 rounded-xl text-sm font-medium hover:border-gray-400 transition-colors">
                          View Details
                        </button>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ╔══════════════════════════════════════════════════════════╗
            WHY AGROMACH — Product-focused value props             ║
          ╚══════════════════════════════════════════════════════════╝ */}
      <section className="bg-white py-20 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-14">
            <span className="inline-flex items-center gap-2 bg-green-50 text-green-700 text-xs font-semibold px-3 py-1.5 rounded-full mb-4">
              <Settings className="w-3.5 h-3.5" />
              Engineering Excellence
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-5">
              Every Machine, Built to Perform
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg">
              Our engineering standards don't just meet industry benchmarks — they set them.
              Here's what makes AgroMach different.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Gauge className="w-8 h-8" />,
                title: "Precision Engineering",
                desc: "CNC-machined components ensure consistent quality. Every bearing, roller, and motor is sourced from certified suppliers.",
                color: "bg-blue-50 text-blue-600",
              },
              {
                icon: <Shield className="w-8 h-8" />,
                title: "Rigorous Testing",
                desc: "Each machine undergoes 48 hours of continuous load testing before dispatch. We test so you don't have to worry.",
                color: "bg-green-50 text-green-600",
              },
              {
                icon: <Truck className="w-8 h-8" />,
                title: "Turnkey Installation",
                desc: "Our engineers handle everything — from site preparation to final calibration. You focus on farming, we handle the rest.",
                color: "bg-amber-50 text-amber-600",
              },
            ].map((item, idx) => (
              <AnimatedSection key={item.title} delay={idx * 120} direction="up">
                <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:shadow-lg transition-all">
                  <div className={`w-14 h-14 ${item.color} rounded-xl flex items-center justify-center mb-5`}>
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-500 leading-relaxed">{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ╔══════════════════════════════════════════════════════════╗
          ║  CTA — Product-specific call to action                  ║
          ╚══════════════════════════════════════════════════════════╝ */}
      <section className="bg-gray-900 py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">
              Can't Find What You're Looking For?
            </h2>
            <p className="text-gray-400 text-lg mb-10 max-w-xl mx-auto">
              We offer custom fabrication and modifications. Tell us your requirements,
              and our R&D team will design a solution tailored to your operation.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2.5 bg-white text-gray-900 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all"
              >
                Request Custom Solution
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <a
                href="tel:+919876543210"
                className="inline-flex items-center gap-2.5 border border-gray-600 text-white px-8 py-4 rounded-xl font-semibold hover:border-gray-400 transition-all"
              >
                <Phone className="w-5 h-5" /> Call Our Team
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
