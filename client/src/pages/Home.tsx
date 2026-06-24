/**
 * FLIGHTPATH TEEN DETOX — Home Page
 * Design: Sunrise over Twilight Sky
 * Colors: Tangerine #FF8A4C · Coral #E0561F · Ember #C2421F · Ink #142028 · Teal #2FB6A6 · Paper #FCFBF8
 * Type: Instrument Serif (display) · Bricolage Grotesque (UI/eyebrows) · Hanken Grotesk (body)
 * Metaphor: Recovery as a guided flight path — departure, climb, destination.
 */

import { useState, useEffect, useRef } from "react";
import { Phone, Menu, X, ChevronDown, ArrowRight, CheckCircle } from "lucide-react";

// ─── Delta Mark SVG (dimensional faceted) ─────────────────────────────────────
function DeltaMark({ size = 32, className = "", style }: { size?: number; className?: string; style?: React.CSSProperties }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 80 80"
      fill="none"
      aria-hidden="true"
      className={className}
      style={style}
    >
      <defs>
        <linearGradient id="dTL" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FFD36B" />
          <stop offset="100%" stopColor="#FF8A4C" />
        </linearGradient>
        <linearGradient id="dTR" x1="1" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FFB259" />
          <stop offset="100%" stopColor="#E0561F" />
        </linearGradient>
        <linearGradient id="dBL" x1="0" y1="1" x2="1" y2="0">
          <stop offset="0%" stopColor="#C2421F" />
          <stop offset="100%" stopColor="#E0561F" />
        </linearGradient>
        <linearGradient id="dBR" x1="1" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor="#8B2A0F" />
          <stop offset="100%" stopColor="#C2421F" />
        </linearGradient>
      </defs>
      <polygon points="40,6 6,68 40,50" fill="url(#dTL)" />
      <polygon points="40,6 74,68 40,50" fill="url(#dTR)" />
      <polygon points="40,50 6,68 26,74" fill="url(#dBL)" />
      <polygon points="40,50 74,68 54,74" fill="url(#dBR)" />
      <line x1="40" y1="6" x2="40" y2="50" stroke="#FFC65C" strokeWidth="1.2" opacity="0.55" />
    </svg>
  );
}

// Flat silhouette for footer/favicon
function DeltaFlat({ size = 22, opacity = 0.6 }: { size?: number; opacity?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none" aria-hidden="true">
      <polygon points="40,6 6,72 40,54 74,72" fill={`rgba(255,138,76,${opacity})`} />
    </svg>
  );
}

// ─── Eyebrow Bar ──────────────────────────────────────────────────────────────
function EyebrowBar() {
  return (
    <div className="bg-[#142028] border-b border-white/5 py-1.5 text-center">
      <span
        style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontSize: "0.62rem", letterSpacing: "0.22em" }}
        className="text-white/35 uppercase font-semibold tracking-widest"
      >
        Orange County, CA
        <span className="text-[#2FB6A6] mx-2">·</span>
        Adolescent Detox
        <span className="text-[#2FB6A6] mx-2">·</span>
        24/7 Admissions
        <span className="text-[#2FB6A6] mx-2">·</span>
        HDG 015
      </span>
    </div>
  );
}

// ─── Navigation ───────────────────────────────────────────────────────────────
function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { label: "The Program", href: "#program" },
    { label: "Our Approach", href: "#approach" },
    { label: "Admissions", href: "#admissions" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#142028]/96 backdrop-blur-xl shadow-lg" : "bg-[#142028]/90 backdrop-blur-md"
      } border-b border-white/[0.07]`}
    >
      <div className="container flex items-center justify-between h-16">
        <a href="/" className="flex items-center gap-2.5 no-underline">
          <DeltaMark size={30} />
          <span
            style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
            className="text-[#FCFBF8] font-bold text-[1.05rem] tracking-tight"
          >
            Flightpath <span className="text-[#FF8A4C]">Teen Detox</span>
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map((l) => (
            <a
              key={l.label}
              href={l.href}
              style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
              className="text-white/60 hover:text-white text-[0.8rem] font-medium tracking-wide transition-colors no-underline"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a
            href="tel:+18009999999"
            style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
            className="text-white/35 hover:text-white text-xs tracking-wider transition-colors no-underline"
          >
            800-999-9999
          </a>
          <a
            href="#contact"
            className="btn-sunrise text-sm"
          >
            Verify your benefits
          </a>
        </div>

        <button
          className="md:hidden text-white p-1.5"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-[#142028] border-t border-white/[0.07]">
          <div className="container py-5 flex flex-col gap-1">
            {navLinks.map((l) => (
              <a
                key={l.label}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
                className="text-white/65 hover:text-[#FF8A4C] text-[0.9rem] font-medium py-2.5 border-b border-white/[0.06] transition-colors no-underline"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="btn-sunrise justify-center mt-3"
            >
              Verify your benefits
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

// ─── Hero ─────────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section
      id="hero"
      className="relative bg-[#142028] min-h-[92vh] flex items-center overflow-hidden py-24"
    >
      {/* Coral glow */}
      <div
        className="absolute right-[-5%] top-[10%] w-[55%] h-[80%] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at 70% 40%, rgba(224,86,31,0.2) 0%, rgba(255,138,76,0.07) 45%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="container relative z-10">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text */}
          <div>
            <p className="eyebrow-label mb-5">Orange County, California · Ages 13–17</p>
            <h1
              className="display-serif text-[#FCFBF8] mb-5"
              style={{ fontSize: "clamp(2.8rem, 6vw, 5.5rem)" }}
            >
              A safe place<br />
              to <em style={{ color: "#FFD36B" }}>land.</em>
            </h1>
            <p
              style={{ fontFamily: "'Hanken Grotesk', sans-serif" }}
              className="text-white/60 text-[1.05rem] leading-relaxed mb-8 max-w-md font-light"
            >
              Medically supervised adolescent detox and stabilization. Genuinely human care for teens and the families who love them.
            </p>
            <div className="flex flex-wrap gap-3 mb-6">
              <a href="#contact" className="btn-sunrise">Talk to our team</a>
              <a
                href="#program"
                style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
                className="inline-flex items-center gap-2 text-white/70 hover:text-white border border-white/25 hover:border-white/50 rounded-full px-6 py-3 text-sm font-semibold tracking-wide transition-all no-underline"
              >
                How it works
              </a>
            </div>
            <p
              style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
              className="text-white/25 text-xs tracking-widest"
            >
              24/7 ADMISSIONS:{" "}
              <a href="tel:+18009999999" className="text-white/40 hover:text-[#FF8A4C] transition-colors no-underline">
                800-999-9999
              </a>
            </p>
          </div>

          {/* Delta mark with compass ring */}
          <div className="flex items-center justify-center relative" aria-hidden="true">
            {/* Compass ring */}
            <div
              className="absolute rounded-full border border-white/[0.06]"
              style={{ width: 300, height: 300 }}
            />
            <div
              className="absolute rounded-full border border-dashed border-white/[0.04]"
              style={{ width: 268, height: 268 }}
            />
            {/* Cardinal marks */}
            <svg className="absolute" width="300" height="300" viewBox="0 0 300 300">
              <g stroke="rgba(255,255,255,0.08)" strokeWidth="1">
                <line x1="150" y1="6" x2="150" y2="18" />
                <line x1="150" y1="282" x2="150" y2="294" />
                <line x1="6" y1="150" x2="18" y2="150" />
                <line x1="282" y1="150" x2="294" y2="150" />
              </g>
              <g fill="rgba(255,255,255,0.1)" fontFamily="'Bricolage Grotesque', sans-serif" fontSize="8" fontWeight="600" letterSpacing="0.1em" textAnchor="middle">
                <text x="150" y="5">N</text>
                <text x="150" y="300">S</text>
                <text x="4" y="154">W</text>
                <text x="296" y="154">E</text>
              </g>
              <text x="150" y="280" fill="rgba(255,138,76,0.45)" fontFamily="'Bricolage Grotesque', sans-serif" fontSize="7" fontWeight="700" letterSpacing="0.2em" textAnchor="middle">HDG 015</text>
            </svg>
            {/* Delta */}
            <DeltaMark
              size={160}
              className="relative z-10"
              style={{ filter: "drop-shadow(0 8px 40px rgba(224,86,31,0.35)) drop-shadow(0 2px 8px rgba(255,138,76,0.2))" } as React.CSSProperties}
            />
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 animate-bounce" aria-hidden="true">
        <span style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }} className="text-white/25 text-[0.6rem] tracking-widest uppercase">Scroll</span>
        <ChevronDown size={14} className="text-white/25" />
      </div>
    </section>
  );
}

// ─── Reassurance Strip ────────────────────────────────────────────────────────
function ReassuranceStrip() {
  const items = [
    "Medically supervised",
    "Licensed clinicians",
    "Family-centered care",
    "Most insurance accepted",
  ];
  return (
    <div className="bg-[#FCFBF8] border-b border-[#EAE5DB] py-4">
      <div className="container">
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          {items.map((item, i) => (
            <div key={item} className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-[#2FB6A6] flex items-center justify-center flex-shrink-0">
                <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                  <polyline points="1.5,4 3.2,5.8 6.5,2" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <span style={{ fontFamily: "'Hanken Grotesk', sans-serif" }} className="text-[#23292D] text-sm font-medium">
                {item}
              </span>
              {i < items.length - 1 && <span className="text-[#EAE5DB] ml-3 hidden sm:inline">·</span>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── The Program ──────────────────────────────────────────────────────────────
function TheProgram() {
  const cards = [
    {
      phase: "Phase 01 · Departure",
      title: "Assessment & Intake",
      body: "From the moment you arrive, a clinical team is ready. A licensed clinician conducts a comprehensive assessment — medical, psychological, and social — so your teen's care is built around them, not a template. No waiting rooms. No judgment. Just a warm, structured welcome.",
    },
    {
      phase: "Phase 02 · Climb",
      title: "Medically Supervised Detox",
      body: "Withdrawal is managed safely, with 24/7 nursing oversight and physician-directed comfort care. Your teen is never alone in this process. The goal is a stable, dignified transition — not just getting through it, but arriving on the other side ready for what comes next.",
    },
    {
      phase: "Phase 03 · Cruise",
      title: "Stabilization & Transition",
      body: "Detox is a beginning, not an end. Before discharge, the clinical team works with your family to build a clear transition plan. Your teen leaves with a flightpath, not just a goodbye.",
    },
  ];

  return (
    <section id="program" className="bg-[#F4F0E7] py-20 md:py-28">
      <div className="container">
        <div className="mb-12">
          <p className="eyebrow-label mb-3">The Program</p>
          <h2
            className="display-serif text-[#142028]"
            style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)" }}
          >
            What a stay at Flightpath<br />
            actually <em style={{ color: "#E0561F" }}>looks like.</em>
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {cards.map((card) => (
            <div
              key={card.phase}
              className="bg-[#FCFBF8] border border-[#EAE5DB] rounded-2xl p-7 hover:-translate-y-1 hover:shadow-xl transition-all duration-200"
            >
              <p
                style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
                className="text-[#2FB6A6] text-[0.65rem] font-bold tracking-[0.2em] uppercase mb-3"
              >
                {card.phase}
              </p>
              <h3
                className="display-serif text-[#142028] text-xl mb-3"
              >
                {card.title}
              </h3>
              <div className="h-px w-10 bg-gradient-to-r from-[#FF8A4C] to-transparent mb-4" />
              <p style={{ fontFamily: "'Hanken Grotesk', sans-serif" }} className="text-[#23292D]/65 text-sm leading-relaxed">
                {card.body}
              </p>
              <div className="mt-5 w-7 h-7 rounded-full flex items-center justify-center" style={{ background: "linear-gradient(90deg, #E0561F, #FF8A4C, #FFD36B)" }}>
                <ArrowRight size={12} color="#142028" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Our Approach ─────────────────────────────────────────────────────────────
function OurApproach() {
  const pillars = [
    { num: "01", name: "Safe", desc: "Medical safety is non-negotiable. Every protocol is designed to minimize risk and maximize comfort during withdrawal." },
    { num: "02", name: "Hopeful", desc: "We speak about the future with teens, not just the present crisis. Recovery has a destination — we help them see it." },
    { num: "03", name: "Grounded", desc: "No promises we can't keep. Honest, evidence-informed care from day one." },
    { num: "04", name: "Human", desc: "Behind every chart is a teenager with a story. Our staff are trained to see the person, not just the presenting problem." },
  ];

  return (
    <section id="approach" className="bg-[#142028] py-20 md:py-28 relative overflow-hidden">
      <div
        className="absolute left-[-10%] bottom-[-10%] w-1/2 h-3/5 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at 30% 70%, rgba(224,86,31,0.1) 0%, transparent 65%)" }}
        aria-hidden="true"
      />
      <div className="container relative z-10">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-start">
          <div>
            <p className="eyebrow-label mb-4">Our Approach</p>
            <h2
              className="display-serif text-[#FCFBF8] mb-6"
              style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)" }}
            >
              Safety and dignity<br />
              are not <em style={{ color: "#FFD36B" }}>optional.</em>
            </h2>
            <p style={{ fontFamily: "'Hanken Grotesk', sans-serif" }} className="text-white/55 text-base leading-relaxed mb-4">
              Teenagers in crisis are not small adults. They need a clinical environment that meets them where they are — one that takes their experience seriously, respects their developing autonomy, and treats the family as a partner, not a problem to manage.
            </p>
            <p style={{ fontFamily: "'Hanken Grotesk', sans-serif" }} className="text-white/55 text-base leading-relaxed">
              At Flightpath, we believe the first experience of treatment shapes everything that comes after. If a teen feels safe, seen, and respected during detox, they are more likely to engage with the recovery work ahead.
            </p>
          </div>
          <div>
            <p className="eyebrow-label mb-5">Four Pillars</p>
            <div className="flex flex-col">
              {pillars.map((p) => (
                <div key={p.num} className="flex items-start gap-4 py-4 border-b border-white/[0.06] last:border-0">
                  <span style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }} className="text-[#2FB6A6] text-[0.65rem] font-bold tracking-widest w-6 flex-shrink-0 mt-0.5">{p.num}</span>
                  <div>
                    <p className="display-serif text-[#FCFBF8] text-lg mb-1">{p.name}</p>
                    <p style={{ fontFamily: "'Hanken Grotesk', sans-serif" }} className="text-white/40 text-sm leading-relaxed">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Environment ──────────────────────────────────────────────────────────────
function Environment() {
  const placeholders = [
    { label: "Common Area", caption: "The common area", desc: "Designed to feel like a home, not a facility.", wide: true },
    { label: "Private Room", caption: "Private rooms", desc: "Every teen has their own space. Rest is part of the treatment.", wide: false },
    { label: "Outdoor Space", caption: "Outdoor areas", desc: "Southern California's light and air are part of the healing environment.", wide: false },
    { label: "Clinical Space", caption: "Clinical spaces", desc: "Therapy and medical rooms designed to feel safe, not sterile.", wide: false },
  ];

  return (
    <section id="environment" className="bg-[#FCFBF8] py-20 md:py-28">
      <div className="container">
        <div className="mb-10">
          <p className="eyebrow-label mb-3">A Day on the Unit</p>
          <h2 className="display-serif text-[#142028]" style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)" }}>
            Warm. Calm. <em style={{ color: "#E0561F" }}>Intentional.</em>
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {placeholders.map((p, i) => (
            <div key={p.label} className={`${p.wide ? "col-span-2" : ""}`}>
              <div
                className="rounded-xl bg-[#EAE5DB] flex items-center justify-center"
                style={{ aspectRatio: p.wide ? "16/9" : "4/3" }}
              >
                <div className="flex flex-col items-center gap-2 text-center p-4">
                  <div className="w-9 h-9 rounded-full bg-[#2FB6A6]/15 border border-[#2FB6A6]/30 flex items-center justify-center">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2FB6A6" strokeWidth="1.5">
                      <rect x="3" y="3" width="18" height="18" rx="2" />
                      <circle cx="8.5" cy="8.5" r="1.5" />
                      <path d="M21 15l-5-5L5 21" />
                    </svg>
                  </div>
                  <p style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }} className="text-[#23292D]/40 text-[0.65rem] font-semibold tracking-widest uppercase">{p.label}</p>
                  <p style={{ fontFamily: "'Hanken Grotesk', sans-serif" }} className="text-[#23292D]/25 text-[0.65rem]">Real photography needed</p>
                </div>
              </div>
              <div className="pt-2.5">
                <p style={{ fontFamily: "'Hanken Grotesk', sans-serif" }} className="text-[#23292D] text-sm font-semibold mb-0.5">{p.caption}</p>
                <p style={{ fontFamily: "'Hanken Grotesk', sans-serif" }} className="text-[#23292D]/45 text-xs leading-relaxed">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── For Families / Referrers ─────────────────────────────────────────────────
function Audiences() {
  const [tab, setTab] = useState<"families" | "referrers">("families");

  return (
    <section id="audiences" className="bg-[#F4F0E7] py-20 md:py-28">
      <div className="container">
        <div className="mb-10">
          <p className="eyebrow-label mb-3">Who We Serve</p>
          <h2 className="display-serif text-[#142028]" style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)" }}>
            For families.<br />
            For <em style={{ color: "#E0561F" }}>clinicians.</em>
          </h2>
        </div>

        <div className="flex gap-0 border-b-2 border-[#EAE5DB] mb-10">
          {(["families", "referrers"] as const).map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
              className={`text-[0.8rem] font-semibold tracking-widest uppercase px-5 py-3 border-b-[2.5px] -mb-[2px] transition-all ${
                tab === t
                  ? "border-[#E0561F] text-[#E0561F]"
                  : "border-transparent text-[#23292D]/35 hover:text-[#23292D]"
              }`}
            >
              {t === "families" ? "For Families" : "For Clinicians & Referrers"}
            </button>
          ))}
        </div>

        {tab === "families" ? (
          <div className="grid md:grid-cols-2 gap-10 lg:gap-16">
            <div>
              <h3 className="display-serif text-[#142028] mb-4" style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)" }}>
                The hardest part<br />is the <em style={{ color: "#E0561F" }}>call.</em>
              </h3>
              <p style={{ fontFamily: "'Hanken Grotesk', sans-serif" }} className="text-[#23292D]/60 text-base leading-relaxed mb-4">
                You've probably been watching this for a while. Wondering if it's serious enough. You're not overreacting. And you don't need to have it figured out before you call us.
              </p>
              <p style={{ fontFamily: "'Hanken Grotesk', sans-serif" }} className="text-[#23292D]/60 text-base leading-relaxed mb-6">
                Our admissions team is trained to listen first. They'll help you understand what your teen is experiencing and what the next step looks like — without pressure and without judgment.
              </p>
              <ul className="flex flex-col gap-3">
                {["Confidential conversation, any time of day or night", "Insurance verification assistance at no cost", "Family therapy included in all levels of care", "Parent coaching and sibling support available"].map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#2FB6A6] flex-shrink-0 mt-2" />
                    <span style={{ fontFamily: "'Hanken Grotesk', sans-serif" }} className="text-sm text-[#23292D]/65">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-[#FCFBF8] border border-[#EAE5DB] rounded-2xl p-7">
              <h4 className="display-serif text-[#142028] text-xl mb-3">We'll take it from here.</h4>
              <p style={{ fontFamily: "'Hanken Grotesk', sans-serif" }} className="text-[#23292D]/50 text-sm leading-relaxed mb-5">
                One call is all it takes to start. Our team will walk you through everything — no commitment required, no pressure to decide on the spot.
              </p>
              <a href="tel:+18009999999" style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }} className="block text-[#142028] text-2xl font-bold mb-4 no-underline hover:text-[#E0561F] transition-colors">
                800-999-9999
              </a>
              <a href="#contact" className="btn-sunrise">Verify your benefits</a>
            </div>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-10 lg:gap-16">
            <div>
              <h3 className="display-serif text-[#142028] mb-4" style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)" }}>
                A detox partner<br />you can <em style={{ color: "#E0561F" }}>trust.</em>
              </h3>
              <p style={{ fontFamily: "'Hanken Grotesk', sans-serif" }} className="text-[#23292D]/60 text-base leading-relaxed mb-4">
                Flightpath Teen Detox is designed to serve as a reliable, clinically rigorous first step for adolescents you're referring into the continuum of care. We communicate clearly, coordinate actively, and return your patients stabilized and ready for the next level.
              </p>
              <ul className="flex flex-col gap-3">
                {["Direct clinical liaison for referring providers", "Discharge summaries and transition coordination", "Dual diagnosis capability — co-occurring mental health", "Accepts most major insurance including Medi-Cal", "Same-day intake available for urgent referrals"].map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#2FB6A6] flex-shrink-0 mt-2" />
                    <span style={{ fontFamily: "'Hanken Grotesk', sans-serif" }} className="text-sm text-[#23292D]/65">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-[#FCFBF8] border border-[#EAE5DB] rounded-2xl p-7">
              <h4 className="display-serif text-[#142028] text-xl mb-3">Referral line.</h4>
              <p style={{ fontFamily: "'Hanken Grotesk', sans-serif" }} className="text-[#23292D]/50 text-sm leading-relaxed mb-5">
                Our clinical team is available for direct consultation. For urgent referrals, call the admissions line directly.
              </p>
              <a href="tel:+18009999999" style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }} className="block text-[#142028] text-2xl font-bold mb-4 no-underline hover:text-[#E0561F] transition-colors">
                800-999-9999
              </a>
              <a href="#contact" className="btn-sunrise">Send a referral</a>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

// ─── Admissions Flight Plan ───────────────────────────────────────────────────
function AdmissionsFlightPlan() {
  const steps = [
    { num: "01", label: "Departure", title: "Call", desc: "One confidential call to our admissions team. No commitment, no pressure. Just a conversation about what your teen needs." },
    { num: "02", label: "Climb", title: "Verify Benefits", desc: "We handle insurance verification for you. Most families are surprised by how much is covered. We'll explain what to expect before anything is decided." },
    { num: "03", label: "Cruise", title: "Same-Day Intake", desc: "When you're ready, intake can happen the same day. Every recovery has a starting point. This is a good one." },
  ];

  return (
    <section id="admissions" className="bg-[#142028] py-20 md:py-28 relative overflow-hidden">
      <div
        className="absolute right-0 top-0 w-2/5 h-full pointer-events-none"
        style={{ background: "radial-gradient(ellipse at 80% 30%, rgba(255,138,76,0.09) 0%, transparent 65%)" }}
        aria-hidden="true"
      />
      <div className="container relative z-10">
        <div className="mb-12">
          <p className="eyebrow-label" style={{ color: "#FFD36B" }}>Admissions</p>
          <h2 className="display-serif text-[#FCFBF8] mt-3" style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)" }}>
            Three steps.<br />
            One clear <em style={{ color: "#FFD36B" }}>flightpath.</em>
          </h2>
        </div>

        <div className="relative">
          {/* Dashed connecting line */}
          <div className="hidden md:block absolute top-7 left-14 right-14 h-px border-t-2 border-dashed border-[#FF8A4C]/25 z-0" />
          <div className="grid md:grid-cols-3 gap-8 relative z-10">
            {steps.map((step) => (
              <div key={step.num} className="flex flex-col items-center text-center md:items-center">
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center mb-4 flex-shrink-0"
                  style={{ background: "linear-gradient(135deg, #E0561F, #FF8A4C, #FFD36B)" }}
                >
                  <span style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }} className="text-[#142028] text-sm font-extrabold">{step.num}</span>
                </div>
                <p style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }} className="text-[#2FB6A6] text-[0.65rem] font-bold tracking-[0.2em] uppercase mb-1.5">{step.label}</p>
                <h3 className="display-serif text-[#FCFBF8] text-xl mb-2">{step.title}</h3>
                <p style={{ fontFamily: "'Hanken Grotesk', sans-serif" }} className="text-white/40 text-sm leading-relaxed max-w-[200px]">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Testimonial ──────────────────────────────────────────────────────────────
function Testimonial() {
  return (
    <section className="bg-[#1B2A33] py-20 md:py-28 text-center relative overflow-hidden">
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3/5 h-4/5 pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(255,138,76,0.06) 0%, transparent 65%)" }}
        aria-hidden="true"
      />
      <div className="container max-w-2xl relative z-10">
        <div
          className="text-[#FF8A4C]/35 mb-4 leading-none select-none"
          style={{ fontFamily: "'Instrument Serif', serif", fontSize: "5rem" }}
          aria-hidden="true"
        >
          "
        </div>
        <blockquote>
          <p
            className="display-serif text-[#FCFBF8] italic leading-snug mb-6"
            style={{ fontSize: "clamp(1.4rem, 3vw, 2.1rem)" }}
          >
            "I didn't know what to expect. I just knew I needed my kid to be{" "}
            <em style={{ fontStyle: "normal", color: "#FFD36B" }}>safe.</em>{" "}
            Flightpath was the first place that made me feel like we were going to be okay."
          </p>
          <footer
            style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
            className="text-white/30 text-xs font-semibold tracking-[0.15em] uppercase"
          >
            {/* LEGAL REVIEW: Replace with real attributed testimonial or remove per compliance */}
            Parent of a former patient · Orange County, CA
          </footer>
        </blockquote>
      </div>
    </section>
  );
}

// ─── Final CTA Band ───────────────────────────────────────────────────────────
function CTABand() {
  return (
    <section
      id="contact"
      style={{ background: "linear-gradient(90deg, #E0561F 0%, #FF8A4C 50%, #FFD36B 100%)" }}
      className="py-20 md:py-24"
    >
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <h2
              className="display-serif text-[#142028] mb-4"
              style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)" }}
            >
              The hardest part<br />
              is the <em>call.</em>
            </h2>
            <p style={{ fontFamily: "'Hanken Grotesk', sans-serif" }} className="text-[#142028]/60 text-base leading-relaxed mb-6">
              We'll take it from there. Confidential, no-pressure conversation with a trained admissions navigator. Available 24 hours a day.
            </p>
            <a
              href="tel:+18009999999"
              style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
              className="text-[#142028] text-3xl font-extrabold no-underline hover:opacity-75 transition-opacity tracking-tight"
            >
              800-999-9999
            </a>
          </div>
          <div>
            <form
              className="flex flex-col gap-3"
              onSubmit={(e) => e.preventDefault()}
              aria-label="Verify your benefits"
            >
              <input
                type="text"
                placeholder="Your name"
                className="bg-[#142028]/10 border border-[#142028]/15 rounded-xl px-4 py-3 text-[#142028] placeholder-[#142028]/35 text-sm focus:outline-none focus:border-[#142028]/35 transition-colors"
                style={{ fontFamily: "'Hanken Grotesk', sans-serif" }}
              />
              <input
                type="tel"
                placeholder="Best phone number"
                className="bg-[#142028]/10 border border-[#142028]/15 rounded-xl px-4 py-3 text-[#142028] placeholder-[#142028]/35 text-sm focus:outline-none focus:border-[#142028]/35 transition-colors"
                style={{ fontFamily: "'Hanken Grotesk', sans-serif" }}
              />
              <textarea
                placeholder="Brief message (optional)"
                rows={3}
                className="bg-[#142028]/10 border border-[#142028]/15 rounded-xl px-4 py-3 text-[#142028] placeholder-[#142028]/35 text-sm focus:outline-none focus:border-[#142028]/35 transition-colors resize-none"
                style={{ fontFamily: "'Hanken Grotesk', sans-serif" }}
              />
              <button
                type="submit"
                style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
                className="bg-[#142028] text-[#FCFBF8] text-sm font-bold tracking-wide px-6 py-3 rounded-full self-start hover:opacity-85 active:scale-[0.97] transition-all"
              >
                Verify your benefits
              </button>
              <p style={{ fontFamily: "'Hanken Grotesk', sans-serif" }} className="text-[#142028]/40 text-xs leading-relaxed">
                {/* LEGAL REVIEW: Confirm HIPAA-compliant form handling before launch */}
                By submitting, you consent to a confidential callback from our admissions team. We do not sell or share your information.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── ATIS Ticker ──────────────────────────────────────────────────────────────
function AtisTicker() {
  const msg = "FLIGHTPATH TEEN DETOX · ORANGE COUNTY, CA · ADOLESCENT DETOX & STABILIZATION · AGES 13–17 · 24/7 ADMISSIONS · LICENSED · MOST INSURANCE ACCEPTED · A SAFE PLACE TO LAND · ";
  return (
    <div className="bg-[#E0561F] overflow-hidden py-2">
      <div className="ticker-track flex whitespace-nowrap">
        <span
          style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
          className="text-white/80 text-[0.62rem] font-semibold tracking-[0.18em]"
        >
          {msg + msg}
        </span>
      </div>
    </div>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer className="bg-[#142028] border-t border-white/[0.06]">
      <AtisTicker />
      <div className="container py-10">
        <div className="flex flex-col md:flex-row items-start justify-between gap-8 mb-8">
          <div>
            <a href="/" className="flex items-center gap-2 no-underline mb-3">
              <DeltaFlat size={20} opacity={0.55} />
              <span style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }} className="text-[#FCFBF8] font-bold text-base">
                Flightpath <span className="text-[#FF8A4C]">Teen Detox</span>
              </span>
            </a>
            <p style={{ fontFamily: "'Hanken Grotesk', sans-serif" }} className="text-white/35 text-sm leading-relaxed max-w-xs">
              Medically supervised adolescent detox and stabilization in Orange County, California. Ages 13–17.
            </p>
          </div>
          <nav className="flex flex-wrap gap-x-6 gap-y-2">
            {["The Program", "Our Approach", "Environment", "For Families", "Admissions", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
                className="text-white/35 hover:text-white text-xs font-medium tracking-wide transition-colors no-underline"
              >
                {item}
              </a>
            ))}
          </nav>
        </div>
        <div className="border-t border-white/[0.06] pt-6 flex flex-col md:flex-row items-start justify-between gap-4">
          <p style={{ fontFamily: "'Hanken Grotesk', sans-serif" }} className="text-white/20 text-xs leading-relaxed max-w-xl">
            {/* LEGAL REVIEW: Insert real license number, address, and accreditation details */}
            Licensed by the California Department of Health Care Services (DHCS). License #[PLACEHOLDER]. This website is for informational purposes only and does not constitute medical advice or guarantee treatment outcomes. All calls are confidential.
          </p>
          <div className="text-right flex-shrink-0">
            <p style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }} className="text-white/20 text-xs font-semibold tracking-wide">
              SAMHSA Helpline:{" "}
              <a href="tel:+18006624357" className="text-[#2FB6A6] no-underline hover:underline">
                1-800-662-4357
              </a>
            </p>
            <p style={{ fontFamily: "'Hanken Grotesk', sans-serif" }} className="text-white/15 text-xs mt-1">
              © 2026 Flightpath Teen Detox
            </p>
            <p style={{ fontFamily: "'Hanken Grotesk', sans-serif" }} className="text-white/15 text-[0.65rem] mt-1">
              Adult program:{" "}
              <a href="https://therunwayrecovery.lovable.app" target="_blank" rel="noopener noreferrer" className="hover:text-white/30 transition-colors no-underline">
                The Runway Recovery
              </a>
              {" "}· Same owner, separate program.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

// ─── Main Export ──────────────────────────────────────────────────────────────
export default function Home() {
  return (
    <div className="min-h-screen">
      <EyebrowBar />
      <Nav />
      <Hero />
      <ReassuranceStrip />
      <TheProgram />
      <OurApproach />
      <Environment />
      <Audiences />
      <AdmissionsFlightPlan />
      <Testimonial />
      <CTABand />
      <Footer />
    </div>
  );
}
