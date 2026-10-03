import { Link } from "react-router-dom";
import {
  ArrowRight,
  Shield,
  Zap,
  Users,
  Leaf,
  Heart,
  Award,
  CheckCircle,
  Clock,
  Truck,
  MapPin,

} from "lucide-react";

/* ── Core Values ── */
const coreValues = [
  { icon: <Shield className="w-8 h-8" />, title: "Integrity", desc: "We stand behind every machine we build. Honest pricing, transparent processes, and warranties that we actually honour." },
  { icon: <Zap className="w-8 h-8" />, title: "Innovation", desc: "Continuous R&D investment ensures our machinery stays ahead of industry demands — more efficient, more reliable, smarter." },
  { icon: <Users className="w-8 h-8" />, title: "Farmer First", desc: "Every product decision is made with the farmer's livelihood in mind. Affordability and reliability are never compromised." },
  { icon: <Leaf className="w-8 h-8" />, title: "Sustainability", desc: "We're committed to reducing energy footprint using recyclable materials and energy-efficient processes to reduce our environmental impact." },
  { icon: <Heart className="w-8 h-8" />, title: "Community", desc: "Active investment in the communities we serve — from skill training programs to local dealer partnerships." },
  { icon: <Award className="w-8 h-8" />, title: "Excellence", desc: "Our ISO 9001:2015 certified manufacturing process ensures every machine meets the highest quality standards." },
];

/* ── Milestones ── */
const milestones = [
  { year: "1998", title: "Foundation", desc: "AgroMach Industries founded in Ludhiana, India to empower Indian farmers through affordable processing machinery." },
  { year: "2003", title: "First 100 Machines", desc: "Crossed the milestone of 100 machines delivered, establishing a strong foothold in Punjab and Haryana markets." },
  { year: "2008", title: "National Expansion", desc: "Opened regional service centers across India — growing our service network to 8 states." },
  { year: "2013", title: "ISO Certification", desc: "Achieved ISO 9001:2015 certification, formalizing our quality management system and manufacturing standards." },
  { year: "2018", title: "1,000+ Installations", desc: "Crossed 1,000 installations across India. Commissioned AMC program for commercial clients." },
  { year: "2023", title: "Pan-India Reach", desc: "Expanded to all 18 states, deployed 50+ field engineers and launched no-cost operator training programs." },
];

/* ── Team ── */
const team = [
  { initials: "HB", name: "Harpreet Singh Bains", role: "Founder & Managing Director", desc: "25+ years in agro machinery. Pioneered affordable rice mill designs for small and midsize farmers.", color: "bg-primary-600" },
  { initials: "AK", name: "Amandeep Kaur", role: "Head of Engineering & R&D", desc: "Mechanical engineer with a decade of innovation in grain processing systems and energy optimization.", color: "bg-red-500" },
  { initials: "VN", name: "Vikram Nair", role: "National Sales Director", desc: "Built the pan-India distribution network from ground up. Manages relationships with 200+ dealers.", color: "bg-yellow-500" },
  { initials: "PS", name: "Priya Sharma", role: "Head of After-Sales Service", desc: "Leads a team of 50+ field engineers nationwide. Champions of the 48-hour response guarantee.", color: "bg-purple-500" },
];

/* ── Stats ── */
const stats = [
  { icon: <Clock className="w-6 h-6" />, value: "25+", label: "Years of Excellence" },
  { icon: <Truck className="w-6 h-6" />, value: "5,000+", label: "Machines Delivered" },
  { icon: <Shield className="w-6 h-6" />, value: "18", label: "States Covered" },
  { icon: <Award className="w-6 h-6" />, value: "99%", label: "Customer Satisfaction" },
];

export default function AboutPage() {
  return (
    <div>
      {/* ═══════════════════════ HERO ═══════════════════════ */}
      <section className="relative bg-dark-900 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-25" style={{ backgroundImage: "url('/images/hero-bg.jpg')" }} />
        <div className="absolute inset-0 bg-gradient-to-r from-dark-900 via-dark-900/90 to-dark-900/60" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="text-sm text-gray-400 mb-4">
            <Link to="/" className="hover:text-primary-400">Home</Link>
            <span className="mx-2">›</span>
            <span className="text-gray-300">About Us</span>
          </div>
          <div className="inline-flex items-center gap-2 bg-primary-900/50 border border-primary-700/50 rounded-full px-4 py-1.5 mb-6">
            <span className="text-xs text-primary-300 font-medium">Our Story Since 1998</span>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
                Empowering Farmers with{" "}
                <span className="text-primary-400">World-Class Machinery</span>
              </h1>
              <p className="text-gray-300 text-lg leading-relaxed mb-8 max-w-xl">
                AgroMach Industries was born from a simple belief: Indian farmers deserve the same quality of machinery as any modern industrial facility — at a price that makes sense for their scale of operations.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/contact" className="inline-flex items-center gap-2 bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors">
                  Get In Touch <ArrowRight className="w-4 h-4" />
                </Link>
                <Link to="/services" className="inline-flex items-center gap-2 border border-gray-500 text-white px-6 py-3 rounded-lg font-semibold hover:border-primary-500 transition-colors">
                  Explore Services
                </Link>
              </div>
            </div>

            <div className="hidden lg:block">
              <div className="grid grid-cols-2 gap-4">
                {stats.map((s) => (
                  <div key={s.label} className="bg-dark-800 border border-dark-600 rounded-xl p-5 text-center">
                    <div className="inline-flex items-center justify-center w-10 h-10 bg-primary-900/50 rounded-lg text-primary-400 mb-2">
                      {s.icon}
                    </div>
                    <p className="text-2xl font-bold text-white">{s.value}</p>
                    <p className="text-xs text-gray-400 mt-1">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════ ABOUT AGRICULTURE ═══════════════════════ */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img src="/images/about-agriculture.jpg" alt="Agriculture" className="w-full h-80 lg:h-[420px] object-cover" />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white rounded-xl shadow-lg p-3 flex items-center gap-3">
                <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center">
                  <Award className="w-5 h-5 text-yellow-600" />
                </div>
                <div>
                  <p className="text-xs text-gray-500">Industry Award</p>
                  <p className="text-sm font-semibold text-gray-900">Best Agro Manufacturer 2024</p>
                </div>
              </div>
            </div>
            <div>
              <span className="inline-block text-xs font-semibold text-primary-600 bg-primary-50 px-3 py-1 rounded-full uppercase tracking-wider mb-3">
                Our Story
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Agriculture</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                AgroMach Industries was founded in 1998 by Harpreet Singh Bains in Ludhiana, Punjab — the heartland of Indian agriculture. Starting from a modest workshop with five engineers, we set out to solve a fundamental problem: the gap between the machinery farmers needed and what they could actually afford.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Over 25 years, we have grown into a nationally recognized manufacturer with a workforce of 200+ employees, a 40,000 sq. ft. manufacturing plant, and a nationwide distribution and service network spanning 18 states.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Every machine we build is field-tested before it reaches our customers. We collaborate directly with farmer cooperatives, FPOs, and agri-entrepreneurs to understand real-world challenges — and engineer solutions that work on the ground, not just on paper.
              </p>
              <div className="flex flex-wrap gap-4">
                <span className="inline-flex items-center gap-2 text-sm text-primary-700 font-medium">
                  <CheckCircle className="w-4 h-4" /> ISO 9001:2015
                </span>
                <span className="inline-flex items-center gap-2 text-sm text-primary-700 font-medium">
                  <CheckCircle className="w-4 h-4" /> MSME Registered
                </span>
                <span className="inline-flex items-center gap-2 text-sm text-primary-700 font-medium">
                  <CheckCircle className="w-4 h-4" /> Make in India
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════ CORE VALUES ═══════════════════════ */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block text-xs font-semibold text-primary-600 bg-primary-50 px-3 py-1 rounded-full uppercase tracking-wider mb-3">
              What We Stand For
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Our Core Values</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              These principles guide every decision we make — from how we design our machines to how we support our customers long after delivery.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreValues.map((v) => (
              <div key={v.title} className="bg-white rounded-xl border border-gray-100 p-6 hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 bg-primary-50 rounded-xl flex items-center justify-center text-primary-600 mb-4">
                  {v.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{v.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════ MILESTONES ═══════════════════════ */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block text-xs font-semibold text-primary-600 bg-primary-50 px-3 py-1 rounded-full uppercase tracking-wider mb-3">
              Our Journey
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">25 Years of Milestones</h2>
            <p className="text-gray-500 max-w-2xl mx-auto mt-3">
              From a single workshop in Ludhiana to a pan-India manufacturing powerhouse.
            </p>
          </div>

          <div className="relative max-w-3xl mx-auto">
            {/* Vertical line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-400 to-primary-700 transform -translate-x-1/2 hidden md:block" />

            <div className="space-y-12">
              {milestones.map((m, i) => (
                <div key={m.year} className={`relative flex items-start gap-8 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className={`flex-1 ${i % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <div className={`bg-white rounded-xl border border-gray-100 p-5 shadow-sm ${i % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}>
                      <span className="inline-block text-xs font-bold text-primary-600 bg-primary-50 px-2 py-0.5 rounded-full mb-2">{m.year}</span>
                      <h3 className="text-lg font-bold text-gray-900 mb-1">{m.title}</h3>
                      <p className="text-sm text-gray-500 leading-relaxed">{m.desc}</p>
                    </div>
                  </div>
                  {/* Center dot */}
                  <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary-500 rounded-full border-4 border-white shadow z-10 top-6" />
                  <div className="flex-1 hidden md:block" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════ TEAM ═══════════════════════ */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block text-xs font-semibold text-primary-600 bg-primary-50 px-3 py-1 rounded-full uppercase tracking-wider mb-3">
              Leadership Team
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">The People Behind AgroMach</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              A team of experienced engineers, business leaders, and agro-industry specialists committed to making Indian agriculture more productive.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((t) => (
              <div key={t.name} className="bg-white rounded-xl border border-gray-100 p-6 text-center hover:shadow-lg transition-shadow">
                <div className={`w-16 h-16 ${t.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <span className="text-xl font-bold text-white">{t.initials}</span>
                </div>
                <h3 className="text-base font-bold text-gray-900">{t.name}</h3>
                <p className="text-sm text-primary-600 font-medium mb-3">{t.role}</p>
                <p className="text-xs text-gray-500 leading-relaxed">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════ SERVING FARMERS ═══════════════════════ */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="inline-block text-xs font-semibold text-primary-600 bg-primary-50 px-3 py-1 rounded-full uppercase tracking-wider mb-3">
            Pan India Presence
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Serving Farmers in <span className="text-primary-600">18 States</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mb-10">
            From the wheat belts of Punjab to the paddy fields of West Bengal and the millets of Rajasthan — our machines and engineers are present across India's most productive agricultural regions.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary-50 rounded-lg flex items-center justify-center">
                <MapPin className="w-5 h-5 text-primary-600" />
              </div>
              <div>
                <p className="text-lg font-bold text-gray-900">18 States</p>
                <p className="text-xs text-gray-500">Active presence</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary-50 rounded-lg flex items-center justify-center">
                <Users className="w-5 h-5 text-primary-600" />
              </div>
              <div>
                <p className="text-lg font-bold text-gray-900">50+ Engineers</p>
                <p className="text-xs text-gray-500">Field engineers</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary-50 rounded-lg flex items-center justify-center">
                <Truck className="w-5 h-5 text-primary-600" />
              </div>
              <div>
                <p className="text-lg font-bold text-gray-900">200+ Dealers</p>
                <p className="text-xs text-gray-500">Authorized dealers</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary-50 rounded-lg flex items-center justify-center">
                <Clock className="w-5 h-5 text-primary-600" />
              </div>
              <div>
                <p className="text-lg font-bold text-gray-900">48 hr Response</p>
                <p className="text-xs text-gray-500">Service guarantee</p>
              </div>
            </div>
          </div>
          <div className="bg-primary-50 rounded-xl p-6 border border-primary-100">
            <div className="flex flex-col md:flex-row md:items-center gap-4">
              <div className="flex-1">
                <h3 className="font-bold text-gray-900 mb-1">Our Mission</h3>
                <p className="text-sm text-gray-600">
                  "To make industrial-grade agro-processing accessible to every Indian farmer, co-operative, and agro-entrepreneur — regardless of size or geography."
                </p>
              </div>
              <Link to="/contact" className="inline-flex items-center gap-2 text-primary-600 font-semibold text-sm whitespace-nowrap hover:text-primary-700">
                Find a Dealer Near You <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════ CTA ═══════════════════════ */}
      <section className="bg-dark-900 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Work with AgroMach?
          </h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">
            Speak to our product experts and find the right machinery for your operation. We respond within 24 hours.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="inline-flex items-center gap-2 bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors">
              Contact Us Today <ArrowRight className="w-4 h-4" />
            </Link>
            <Link to="/services" className="inline-flex items-center gap-2 border border-gray-600 text-white px-6 py-3 rounded-lg font-semibold hover:border-primary-500 transition-colors">
              View Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
