import { Link } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle,
  Clock,
  Users,
  Star,
  Phone,
  Wrench,
  Settings,
  Package,
  Truck,
  GraduationCap,
  Hammer,
  MessageSquare,
  FileText,
  Headphones,
} from "lucide-react";
import FloatingParticles from "../components/FloatingParticles";
import AnimatedSection from "../components/AnimatedSection";
import { useInView } from "../hooks/useInView";
import { useCountUp } from "../hooks/useCountUp";

/* ═══════════ DATA ═══════════ */

const services = [
  {
    icon: <Settings className="w-6 h-6" />,
    tag: "Installation & Commissioning",
    title: "Installation & Commissioning",
    desc: "Our certified engineers handle the complete installation and commissioning of your machines on your site. We ensure optimal placement, alignment, electrical connections, and a thorough full run-in before handover.",
    features: ["Site assessment & machine placement planning", "Complete electrical wiring and motor setup", "Calibration and test run with actual material", "Operator training session post-installation", "Commissioning certificate provided"],
    image: null, reverse: false,
  },
  {
    icon: <Wrench className="w-6 h-6" />,
    tag: "Annual Maintenance Contracts",
    title: "Annual Maintenance Contracts",
    desc: "Our AMC plans keep your machines running at peak performance. Choose from Basic, Standard, or Comprehensive plan. All plans include scheduled inspections, lubrication service, and priority breakdown support.",
    features: ["Bi-annual preventive maintenance sessions", "Lubrication, cleaning & tightening service", "Motor part inspection & early replacement", "24 hr emergency breakdown response", "Monthly health check report"],
    image: null, reverse: true,
    pricing: [
      { label: "Basic AMC", price: "₹5,000/yr" },
      { label: "Standard AMC", price: "₹12,000/yr" },
      { label: "Comprehensive AMC", price: "₹25,000/yr" },
    ],
  },
  {
    icon: <Package className="w-6 h-6" />,
    tag: "Genuine Spare Parts Supply",
    title: "Genuine Spare Parts Supply",
    desc: "We stock over 500 SKUs of genuine spare parts for all AgroMach machines. Parts are dispatched within 24 hours. We also supply consumables parts like rubber rollers, screens, bearings, and belts for older models.",
    features: ["500+ SKUs spare parts in stock", "Same day dispatch for orders before 2 PM", "Free delivery for orders above ₹5,000", "Bulk discounts for AMC clients"],
    image: "/images/machine-2.jpg", reverse: false,
  },
  {
    icon: <Truck className="w-6 h-6" />,
    tag: "On-Site Repair Services",
    title: "On-Site Repair Services",
    desc: "Breakdowns happen. Our 50+ field engineers are strategically located across 18 states to ensure your site gets serviced within 48 hours for most regions with repair completion within the same visit.",
    features: ["Nationwide network of service engineers", "48-hour on-site arrival guarantee", "Diagnostic tools carried on every visit", "Field and repair station activities unified", "Parts repair 30-day warranty on every job"],
    image: "/images/machine-4.jpg", reverse: true,
  },
  {
    icon: <GraduationCap className="w-6 h-6" />,
    tag: "Operator Training Programs",
    title: "Operator Training Programs",
    desc: "Properly trained operators reduce breakdowns, improve output quality, and extend machine life. We offer cross-training at the time of installation and structured group training sessions at our Ludhiana facility.",
    features: ["Hands-on training with actual machines", "Safety protocols and emergency procedures", "Maintenance best practices for operators", "Training manual provided post completion", "Certification upon request for graduates"],
    image: null, reverse: false,
  },
  {
    icon: <Hammer className="w-6 h-6" />,
    tag: "Custom Fabrication & Modification",
    title: "Custom Fabrication & Modification",
    desc: "Every processing operation is different. Our R&D and fabrication team can customize machine specifications, dimensions, motor types, and frame designs to match your specific site conditions and output targets.",
    features: ["Custom capacity from 10 kg/hr to 5 ton/hr", "Modular upgrades: multi-screen drums, rollers, etc.", "Size-customized enclosures: frames and silos available", "3 phases to single phase conversions", "Export-grade quality for international clients"],
    image: null, reverse: true,
  },
];

const processSteps = [
  { icon: <MessageSquare className="w-7 h-7" />, title: "Initial Consultation", desc: "Call or email us to help us better understand your requirements, site, capacity, and budget." },
  { icon: <FileText className="w-7 h-7" />, title: "Proposal & Quotation", desc: "We create a customized proposal with machine specifications, timelines, and transparent pricing within 48 hours." },
  { icon: <Truck className="w-7 h-7" />, title: "Delivery & Installation", desc: "Machines are delivered and professionally installed by our engineers. Full test run and operator training included." },
  { icon: <Headphones className="w-7 h-7" />, title: "Ongoing Support", desc: "From spare parts to AMC, training and more — we support your operation from year-one through future upgrades." },
];

const heroStats = [
  { value: 48, suffix: " hrs", label: "Max response time" },
  { value: 50, suffix: "+", label: "Field engineers" },
  { value: 18, suffix: "", label: "States covered" },
  { value: 4.9, suffix: "/5", label: "Service rating", isDecimal: true },
];

/* ── Stat Counter for Service Hero (teal accent) ── */
function ServiceStat({ value, suffix, label, isDecimal }: { value: number; suffix: string; label: string; isDecimal?: boolean }) {
  const { ref, isVisible } = useInView(0.3);
  const intValue = isDecimal ? Math.floor(value * 10) : value;
  const count = useCountUp(intValue, isVisible, 1800);
  const display = isDecimal ? (count / 10).toFixed(1) : count;

  const icons: Record<string, React.ReactNode> = {
    "Max response time": <Clock className="w-5 h-5" />,
    "Field engineers": <Users className="w-5 h-5" />,
    "States covered": <Wrench className="w-5 h-5" />,
    "Service rating": <Star className="w-5 h-5" />,
  };

  return (
    <div
      ref={ref}
      className="bg-slate-800/80 backdrop-blur-sm border border-slate-700/60 rounded-xl p-5 text-center hover:border-service-500/40 transition-all group"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(16px)",
        transition: "opacity 0.5s ease, transform 0.5s ease, border-color 0.3s ease",
      }}
    >
      <div className="inline-flex items-center justify-center w-9 h-9 bg-service-900/60 rounded-lg text-service-400 mb-2 group-hover:bg-service-800/80 transition-colors">
        {icons[label] || <Clock className="w-5 h-5" />}
      </div>
      <p className="text-2xl font-bold text-white">{display}{suffix}</p>
      <p className="text-xs text-gray-400 mt-1">{label}</p>
    </div>
  );
}

/* ═══════════ COMPONENT ═══════════ */

export default function ServicesPage() {
  return (
    <div className="overflow-x-hidden">

      {/* ╔══════════════════════════════════════════════════════════╗
          ║  HERO — cool slate/teal gradient + grid pattern         ║
          ║  Floating teal particles for technical feel             ║
          ╚══════════════════════════════════════════════════════════╝ */}
      <section className="relative min-h-[88vh] flex items-center overflow-hidden" style={{ background: "linear-gradient(135deg, #0f1729 0%, #134e4a 50%, #0f1729 100%)" }}>
        {/* BG image */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-15"
          style={{ backgroundImage: "url('/images/service-hero.jpg')" }}
        />
        {/* Technical grid overlay */}
        <div className="absolute inset-0 grid-pattern opacity-60" />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-850/40 to-slate-850/90" />

        {/* Floating teal particles */}
        <FloatingParticles count={16} variant="service" />

        {/* Decorative tech elements */}
        <div className="absolute top-20 right-20 w-64 h-64 border border-service-500/10 rounded-full hidden lg:block" />
        <div className="absolute top-28 right-28 w-48 h-48 border border-service-400/8 rounded-full hidden lg:block" />
        <div className="absolute bottom-20 left-10 w-32 h-32 border border-service-600/10 rounded-full hidden lg:block" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 w-full">
          {/* Breadcrumb */}
          <div className="text-sm text-gray-400 mb-4">
            <Link to="/" className="hover:text-service-400 transition-colors">Home</Link>
            <span className="mx-2 text-gray-600">›</span>
            <span className="text-gray-300">Services</span>
          </div>

          {/* Tag */}
          <div
            className="inline-flex items-center gap-2 bg-service-900/40 border border-service-600/30 rounded-full px-4 py-1.5 mb-8 backdrop-blur-sm animate-hero-slide"
            style={{ animationDelay: "0.1s", opacity: 0 }}
          >
            <span className="w-2 h-2 bg-service-400 rounded-full animate-pulse" />
            <span className="text-xs text-service-300 font-medium">Complete Post-sale Support</span>
          </div>

          <h1
            className="text-4xl md:text-5xl lg:text-[3.5rem] font-extrabold text-white leading-[1.1] mb-6 max-w-2xl animate-hero-slide"
            style={{ animationDelay: "0.25s", opacity: 0 }}
          >
            End-to-End Services for{" "}
            <span className="relative inline-block">
              <span className="italic text-service-400">Every</span>
              <span className="absolute -bottom-1 left-0 w-full h-1 bg-service-500/40 rounded-full" />
            </span>{" "}
            Machine
          </h1>

          <p
            className="text-gray-300 text-lg leading-relaxed mb-8 max-w-2xl animate-hero-slide"
            style={{ animationDelay: "0.4s", opacity: 0 }}
          >
            From installation and training to annual maintenance and spare parts — AgroMach
            supports you at every stage of your machine's life with a nationwide network of
            certified engineers.
          </p>

          <div
            className="flex flex-wrap gap-4 mb-12 animate-hero-slide"
            style={{ animationDelay: "0.55s", opacity: 0 }}
          >
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 bg-service-600 text-white px-7 py-3.5 rounded-xl font-semibold hover:bg-service-500 transition-all hover:shadow-lg hover:shadow-service-600/25"
            >
              Book a Service
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <a
              href="tel:+919876543210"
              className="inline-flex items-center gap-2 border border-gray-500/50 text-white px-7 py-3.5 rounded-xl font-semibold hover:border-service-400 hover:text-service-300 transition-all backdrop-blur-sm"
            >
              <Phone className="w-4 h-4" /> Call: +91 98765 43210
            </a>
          </div>

          {/* Stats row */}
          <div
            className="grid grid-cols-2 md:grid-cols-4 gap-4 animate-hero-slide"
            style={{ animationDelay: "0.7s", opacity: 0 }}
          >
            {heroStats.map((s) => (
              <ServiceStat key={s.label} {...s} />
            ))}
          </div>
        </div>
      </section>

      {/* ╔══════════════════════════════════════════════════════════╗
          ║  SERVICE PORTFOLIO — alternating rows with glow cards   ║
          ╚══════════════════════════════════════════════════════════╝ */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <span className="inline-block text-xs font-semibold text-service-600 bg-service-50 px-3.5 py-1.5 rounded-full uppercase tracking-wider mb-3 border border-service-100">
              Service Portfolio
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              Comprehensive Service Portfolio
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Every service is designed around minimizing downtime and maximizing productivity for your agro-processing operations.
            </p>
          </AnimatedSection>

          <div className="space-y-24">
            {services.map((s, idx) => (
              <div key={s.title} className={`grid lg:grid-cols-2 gap-14 items-start ${s.reverse ? "lg:flex-row-reverse" : ""}`}>
                {/* Text side */}
                <AnimatedSection direction={s.reverse ? "right" : "left"} className={s.reverse ? "lg:order-2" : ""}>
                  <div className="inline-flex items-center gap-2.5 mb-4">
                    <div className="w-9 h-9 bg-service-50 rounded-lg flex items-center justify-center text-service-600 border border-service-100">
                      {s.icon}
                    </div>
                    <span className="text-xs font-semibold text-service-600 uppercase tracking-wider">{s.tag}</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">{s.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">{s.desc}</p>
                  <ul className="space-y-3 mb-7">
                    {s.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-service-500 shrink-0 mt-0.5" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  {s.pricing && (
                    <div className="grid grid-cols-3 gap-3 mb-7">
                      {s.pricing.map((p) => (
                        <div key={p.label} className="service-glow-card bg-gray-50 rounded-xl p-4 text-center border border-gray-100">
                          <p className="text-xs text-gray-500 mb-1">{p.label}</p>
                          <p className="text-lg font-bold text-service-600">{p.price}</p>
                        </div>
                      ))}
                    </div>
                  )}
                  <Link to="/contact" className="group inline-flex items-center gap-2 text-service-600 font-semibold hover:text-service-700 transition-colors">
                    Inquire About This Service
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </AnimatedSection>

                {/* Image side */}
                <AnimatedSection direction={s.reverse ? "left" : "right"} delay={150} className={s.reverse ? "lg:order-1" : ""}>
                  <div className="service-glow-card rounded-2xl overflow-hidden shadow-xl border border-gray-100">
                    <img
                      src={s.image ?? (idx % 2 === 0 ? "/images/machine-3.jpg" : "/images/machine-5.jpg")}
                      alt={s.title}
                      className="w-full h-72 lg:h-80 object-cover hover:scale-[1.03] transition-transform duration-700"
                      loading="lazy"
                    />
                  </div>
                </AnimatedSection>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ╔══════════════════════════════════════════════════════════╗
          ║  PROCESS — teal step cards with connector pulses        ║
          ╚══════════════════════════════════════════════════════════╝ */}
      <section className="bg-gradient-to-br from-gray-50 to-service-50/30 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-14">
            <span className="inline-block text-xs font-semibold text-service-600 bg-service-50 px-3.5 py-1.5 rounded-full uppercase tracking-wider mb-3 border border-service-100">
              How It Works
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Our Service Process</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Simple, transparent, and designed around your convenience.
            </p>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-7">
            {processSteps.map((step, i) => (
              <AnimatedSection key={step.title} delay={i * 120} direction="up">
                <div className={`service-glow-card bg-white rounded-2xl border border-gray-100 p-7 text-center hover:shadow-xl transition-all relative ${i < 3 ? "service-connector" : ""}`}>
                  {/* Step number with pulse */}
                  <div className="absolute -top-4 left-7">
                    <div className="service-pulse-ring w-8 h-8 bg-service-600 text-white text-xs font-bold rounded-full flex items-center justify-center shadow-lg shadow-service-600/30">
                      {i + 1}
                    </div>
                  </div>

                  <div className="w-16 h-16 bg-service-50 rounded-2xl flex items-center justify-center text-service-600 mx-auto mb-5 border border-service-100 group-hover:bg-service-100 transition-colors">
                    {step.icon}
                  </div>
                  <h3 className="text-base font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{step.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ╔══════════════════════════════════════════════════════════╗
          ║  BOOKING FORM — dark slate with teal accents            ║
          ╚══════════════════════════════════════════════════════════╝ */}
      <section className="relative py-20 overflow-hidden" style={{ background: "linear-gradient(160deg, #0f1729 0%, #115e59 100%)" }}>
        {/* Grid pattern */}
        <div className="absolute inset-0 grid-pattern opacity-40" />
        {/* Radial glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-service-600/8 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="bg-slate-800/70 backdrop-blur-md border border-slate-700/50 rounded-3xl p-8 md:p-12 shadow-2xl">
              <div className="text-center mb-10">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">Book a Service or Get a Quote</h2>
                <p className="text-gray-400">Fill in the form below and our service team will reach out within 48 hours.</p>
              </div>
              <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                <div className="grid sm:grid-cols-2 gap-4">
                  <input type="text" placeholder="Full Name *" className="w-full bg-slate-750/50 border border-slate-700/60 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-service-500 focus:border-transparent transition-shadow backdrop-blur-sm" />
                  <input type="tel" placeholder="Phone Number *" className="w-full bg-slate-750/50 border border-slate-700/60 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-service-500 focus:border-transparent transition-shadow backdrop-blur-sm" />
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <input type="email" placeholder="Email Address" className="w-full bg-slate-750/50 border border-slate-700/60 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-service-500 focus:border-transparent transition-shadow backdrop-blur-sm" />
                  <input type="text" placeholder="Machine Model" className="w-full bg-slate-750/50 border border-slate-700/60 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-service-500 focus:border-transparent transition-shadow backdrop-blur-sm" />
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <select className="w-full bg-slate-750/50 border border-slate-700/60 rounded-xl px-4 py-3 text-sm text-gray-400 focus:outline-none focus:ring-2 focus:ring-service-500 focus:border-transparent transition-shadow backdrop-blur-sm">
                    <option>Select service type</option>
                    <option>Installation</option>
                    <option>AMC</option>
                    <option>Repair</option>
                    <option>Training</option>
                    <option>Custom Fabrication</option>
                  </select>
                  <input type="text" placeholder="Location / State" className="w-full bg-slate-750/50 border border-slate-700/60 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-service-500 focus:border-transparent transition-shadow backdrop-blur-sm" />
                </div>
                <textarea rows={3} placeholder="Describe the issue / requirement" className="w-full bg-slate-750/50 border border-slate-700/60 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-service-500 focus:border-transparent resize-none transition-shadow backdrop-blur-sm" />
                <button type="submit" className="w-full bg-service-600 text-white py-3.5 rounded-xl font-semibold hover:bg-service-500 transition-all hover:shadow-lg hover:shadow-service-600/25 flex items-center justify-center gap-2">
                  Submit Service Request <ArrowRight className="w-4 h-4" />
                </button>
                <p className="text-xs text-gray-500 text-center">
                  Or call us at{" "}
                  <a href="tel:+919876543210" className="text-service-400 hover:text-service-300 transition-colors">+91 98765 43210</a>{" "}
                  (Mon – Sat, 9 AM – 6 PM)
                </p>
              </form>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ╔══════════════════════════════════════════════════════════╗
          ║  CTA — teal gradient (distinct from Home's green)       ║
          ╚══════════════════════════════════════════════════════════╝ */}
      <section className="relative bg-gradient-to-r from-service-800 via-service-700 to-service-900 py-20 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-service-500/10 rounded-full -translate-y-1/2 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-56 h-56 bg-service-400/8 rounded-full translate-y-1/3 blur-2xl pointer-events-none" />

        <AnimatedSection className="relative max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Looking for a New Machine Instead?
          </h2>
          <p className="text-service-100 mb-10 max-w-xl mx-auto text-lg">
            Explore our full range of rice mills, grain cleaners, and agro-processing machinery.
          </p>
          <Link to="/products" className="group inline-flex items-center gap-2 bg-white text-service-700 px-8 py-3.5 rounded-xl font-semibold hover:bg-service-50 transition-all shadow-lg shadow-service-900/30">
            Browse Products
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </AnimatedSection>
      </section>
    </div>
  );
}
