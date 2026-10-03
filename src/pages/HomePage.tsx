import { Link } from "react-router-dom";
import {
  ArrowRight,
  Shield,
  Zap,
  Leaf,
  Heart,
  Award,
  CheckCircle,
  Star,
  Users,
  Truck,
  Clock,
  Phone,
  MapPin,
} from "lucide-react";
import FloatingParticles from "../components/FloatingParticles";
import AnimatedSection from "../components/AnimatedSection";
import AnimatedCounter from "../components/AnimatedCounter";

/* ═══════════ DATA ═══════════ */

const stats = [
  { icon: <Clock className="w-6 h-6" />, value: 25, suffix: "+", label: "Years of Service" },
  { icon: <Users className="w-6 h-6" />, value: 5000, suffix: "+", label: "Farmers Empowered" },
  { icon: <Truck className="w-6 h-6" />, value: 18, label: "States Across India" },
  { icon: <Star className="w-6 h-6" />, value: 99, suffix: "%", label: "Satisfaction Rate" },
];

const benefits = [
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Built to Last",
    desc: "Every AgroMach machine is engineered for harsh farming conditions. Our equipment endures extreme heat, dust, and continuous operation — so you can too.",
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "30% Less Power",
    desc: "Smart motor design and efficient transmission systems mean significantly lower electricity bills compared to conventional machinery.",
  },
  {
    icon: <Heart className="w-8 h-8" />,
    title: "Fair Pricing",
    desc: "We believe world-class technology should be accessible to every farmer, not just large agribusinesses. Our pricing reflects that commitment.",
  },
  {
    icon: <Leaf className="w-8 h-8" />,
    title: "Green Manufacturing",
    desc: "Recyclable materials, energy-efficient processes, and minimal waste — we take our environmental responsibility seriously.",
  },
];

const testimonials = [
  {
    text: "We've been using AgroMach rice mills for five years now. The build quality is exceptional — we run them 12 hours daily and maintenance costs are minimal.",
    name: "Rajesh Kumar",
    location: "Ludhiana, Punjab",
    role: "Rice Mill Owner",
    stars: 5,
  },
  {
    text: "What impressed me most was the after-sales support. When we needed a part replaced, their engineer was on-site within 36 hours. That's unheard of in this industry.",
    name: "Priya Sharma",
    location: "Lucknow, UP",
    role: "FPO Coordinator",
    stars: 5,
  },
  {
    text: "The ROI on our grain processing line was achieved in just 14 months. AgroMach helped us understand our capacity needs and recommended exactly the right setup.",
    name: "Mohan Reddy",
    location: "Warangal, Telangana",
    role: "Agri-Entrepreneur",
    stars: 5,
  },
];

const certifications = [
  { label: "ISO 9001:2015", desc: "Quality Management" },
  { label: "MSME", desc: "Registered Enterprise" },
  { label: "Make in India", desc: "Government Initiative" },
  { label: "BIS Approved", desc: "Bureau of Indian Standards" },
];

/* ═══════════ COMPONENT ═══════════ */

export default function HomePage() {
  return (
    <div className="overflow-x-hidden">

      {/* ╔══════════════════════════════════════════════════════════╗
          ║  HERO — Brand storytelling focus                        ║
          ║  Emotional connection with farmers                      ║
          ╚══════════════════════════════════════════════════════════╝ */}
      <section className="relative bg-dark-900 min-h-[95vh] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed opacity-20"
          style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-dark-900 via-primary-950/80 to-dark-900/60" />
        <FloatingParticles count={20} variant="home" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 w-full">
          <div className="max-w-3xl">
            {/* Trust badge */}
            <div
              className="inline-flex items-center gap-2.5 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-8 backdrop-blur-sm animate-hero-slide"
              style={{ animationDelay: "0.1s", opacity: 0 }}
            >
              <span className="w-2 h-2 bg-primary-400 rounded-full animate-pulse" />
              <span className="text-sm text-primary-300 font-medium">
                Trusted by 5,000+ farmers since 1998
              </span>
            </div>

            {/* Main headline — emotional and mission-driven */}
            <h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] font-extrabold text-white leading-[1.08] mb-8 animate-hero-slide"
              style={{ animationDelay: "0.25s", opacity: 0 }}
            >
              Indian Farmers Deserve
              <br />
              <span className="relative inline-block">
                <span className="text-primary-400 italic">World-Class</span>
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none">
                  <path d="M2 8C30 2 80 1 200 8" stroke="#4ade80" strokeWidth="3" strokeLinecap="round" />
                </svg>
              </span>
              {" "}Machinery
            </h1>

            <p
              className="text-gray-300 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl animate-hero-slide"
              style={{ animationDelay: "0.4s", opacity: 0 }}
            >
              We believe every farmer — whether running a small village mill or a large commercial
              operation — deserves access to machinery that's built to the same standards as any
              modern industrial facility.
            </p>

            <div
              className="flex flex-wrap gap-4 mb-10 animate-hero-slide"
              style={{ animationDelay: "0.55s", opacity: 0 }}
            >
              <Link
                to="/products"
                className="group inline-flex items-center gap-2.5 bg-primary-600 text-white px-8 py-4 rounded-xl font-semibold text-base hover:bg-primary-500 transition-all hover:shadow-xl hover:shadow-primary-600/20"
              >
                Explore Our Machines
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <a
                href="tel:+919876543210"
                className="inline-flex items-center gap-2.5 border border-white/20 text-white px-8 py-4 rounded-xl font-semibold text-base hover:border-primary-400 hover:text-primary-300 transition-all backdrop-blur-sm"
              >
                <Phone className="w-5 h-5" /> Speak to an Expert
              </a>
            </div>

            {/* Certification badges */}
            <div
              className="flex flex-wrap gap-4 animate-hero-slide"
              style={{ animationDelay: "0.7s", opacity: 0 }}
            >
              {certifications.map((c) => (
                <div
                  key={c.label}
                  className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-lg px-3 py-2"
                >
                  <CheckCircle className="w-4 h-4 text-primary-400" />
                  <div>
                    <p className="text-xs font-semibold text-white">{c.label}</p>
                    <p className="text-[10px] text-gray-400">{c.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center">
            <div className="w-1.5 h-3 bg-white/40 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </section>

      {/* ╔══════════════════════════════════════════════════════════╗
          ║  STATS — Animated counters                               ║
          ╚══════════════════════════════════════════════════════════╝ */}
      <section className="bg-white py-16 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s) => (
              <AnimatedCounter
                key={s.label}
                end={s.value}
                suffix={s.suffix || ""}
                label={s.label}
                icon={s.icon}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ╔══════════════════════════════════════════════════════════╗
          ║  BENEFITS — Why choose us (emotional + rational)        ║
          ╚══════════════════════════════════════════════════════════╝ */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <span className="inline-block text-xs font-semibold text-primary-600 bg-primary-50 px-3.5 py-1.5 rounded-full uppercase tracking-wider mb-4">
              Our Promise
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-5">
              Why 5,000+ Farmers Choose AgroMach
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg">
              It's not just about the machines. It's about building a partnership that helps your
              business thrive, season after season.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((b, idx) => (
              <AnimatedSection key={b.title} delay={idx * 120} direction="up">
                <div className="bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-xl hover:shadow-primary-100/40 hover:border-primary-200 transition-all group h-full">
                  <div className="w-16 h-16 bg-primary-50 rounded-2xl flex items-center justify-center text-primary-600 mb-6 group-hover:bg-primary-600 group-hover:text-white transition-all">
                    {b.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{b.title}</h3>
                  <p className="text-gray-500 leading-relaxed">{b.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ╔══════════════════════════════════════════════════════════╗
          ║  STORY — Company narrative with image                   ║
          ╚══════════════════════════════════════════════════════════╝ */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="left">
              <span className="inline-block text-xs font-semibold text-primary-600 bg-primary-50 px-3.5 py-1.5 rounded-full uppercase tracking-wider mb-4">
                Our Story
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                From a Small Workshop in Ludhiana to 18 States Across India
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6 text-lg">
                In 1998, Harpreet Singh Bains started AgroMach with five engineers and a clear
                mission: bridge the gap between what Indian farmers needed and what they could
                actually afford.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8 text-lg">
                Today, we operate from a 40,000 sq. ft. manufacturing facility with a team of 200+
                employees. But our core belief remains unchanged — quality machinery should be
                accessible to every farmer, regardless of their scale.
              </p>
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                    <span className="text-lg font-bold text-primary-700">HB</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Harpreet Singh Bains</p>
                    <p className="text-sm text-gray-500">Founder & Managing Director</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={200}>
              <div className="relative">
                <div className="rounded-3xl overflow-hidden shadow-2xl shadow-primary-200/30">
                  <img
                    src="/images/about-agriculture.jpg"
                    alt="AgroMach manufacturing facility"
                    className="w-full h-[420px] object-cover"
                    loading="lazy"
                  />
                </div>
                {/* Floating stat card */}
                <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-6 animate-badge-float">
                  <p className="text-3xl font-bold text-primary-600">25+</p>
                  <p className="text-sm text-gray-500">Years of Excellence</p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ╔══════════════════════════════════════════════════════════╗
          ║  TESTIMONIALS — Social proof section                     ║
          ╚══════════════════════════════════════════════════════════╝ */}
      <section className="bg-gradient-to-b from-primary-50 to-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <span className="inline-block text-xs font-semibold text-primary-600 bg-white px-3.5 py-1.5 rounded-full uppercase tracking-wider mb-4 shadow-sm">
              Real Feedback
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-5">
              What Our Customers Say
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg">
              Don't just take our word for it. Here's what farmers and agri-entrepreneurs across
              India have to say about their AgroMach experience.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, idx) => (
              <AnimatedSection key={t.name} delay={idx * 150} direction="up">
                <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-xl hover:shadow-primary-100/30 transition-all h-full flex flex-col">
                  <div className="flex gap-1 mb-5">
                    {Array.from({ length: t.stars }).map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-600 leading-relaxed mb-6 italic flex-1 text-lg">
                    &ldquo;{t.text}&rdquo;
                  </p>
                  <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
                    <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                      <span className="text-base font-bold text-primary-700">
                        {t.name.split(" ").map((n) => n[0]).join("")}
                      </span>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">{t.name}</p>
                      <p className="text-sm text-gray-500">{t.role}</p>
                      <p className="text-xs text-gray-400">{t.location}</p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════╗
          ║  CTA — Warm invitation to connect                       ║
          ╚══════════════════════════════════════════════════════════╝ */}
      <section className="relative bg-dark-900 py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900/80 via-dark-900 to-primary-950/80" />
        <FloatingParticles count={12} variant="home" />

        <AnimatedSection className="relative max-w-4xl mx-auto px-4 text-center">
          <Award className="w-12 h-12 text-primary-400 mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Processing Operation?
          </h2>
          <p className="text-primary-100 mb-10 max-w-xl mx-auto text-lg leading-relaxed">
            Let's discuss your needs. Our product specialists will help you find the right machine
            for your capacity, budget, and location.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2.5 bg-primary-600 text-white px-8 py-4 rounded-xl font-semibold text-base hover:bg-primary-500 transition-all hover:shadow-xl hover:shadow-primary-600/25"
            >
              Get a Free Quote
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              to="/products"
              className="inline-flex items-center gap-2.5 border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold text-base hover:border-white hover:bg-white/5 transition-all"
            >
              Browse Products
            </Link>
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-8 text-sm text-gray-400">
            <span className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-primary-400" /> +91 98765 43210
            </span>
            <span className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-primary-400" /> Ludhiana, Punjab
            </span>
          </div>
        </AnimatedSection>
      </section>
    </div>
  );
}
