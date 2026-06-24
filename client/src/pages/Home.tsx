/**
 * WAYPOINT Teen Recovery — Home Page
 * Design: Cockpit at Golden Hour
 * Colors: Stratosphere Navy (#0A1628), Horizon Orange (#E8622A), Instrument Gold (#C9A84C), Cloud White (#F8F6F0)
 * Fonts: Barlow Condensed (display), DM Sans (body), Space Mono (technical)
 * Core metaphor: A waypoint is a set of coordinates pilots navigate toward.
 *   Recovery is navigation — each milestone is a waypoint on the route to your destination.
 */

import { useState, useEffect } from "react";
import { Phone, ChevronDown, Menu, X, ArrowRight, Shield, Award, Clock, CheckCircle, ChevronRight } from "lucide-react";

// ─── Navigation ───────────────────────────────────────────────────────────────
function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#0A1628]/95 backdrop-blur-xl shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between h-16 md:h-20">
        <a href="/" className="flex items-center gap-3">
          <img
            src="/manus-storage/waypoint_logo_primary_15c9c13c.png"
            alt="Waypoint Teen Recovery"
            className="h-10 md:h-12 w-auto brightness-0 invert"
          />
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {[
            { label: "Programs", href: "#programs" },
            { label: "Flight Syllabus", href: "#syllabus" },
            { label: "For Families", href: "#families" },
            { label: "About", href: "#about" },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="font-body text-sm font-medium text-white/80 hover:text-[#E8622A] transition-colors duration-200 tracking-wide"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a
            href="tel:+18669693686"
            className="flex items-center gap-2 font-technical text-xs text-white/70 hover:text-white transition-colors"
          >
            <Phone size={14} />
            866-969-3686
          </a>
          <a
            href="#contact"
            className="btn-beacon bg-[#E8622A] text-white font-display font-bold text-sm tracking-widest uppercase px-5 py-2.5 rounded hover:bg-[#d4561f] transition-colors duration-200"
          >
            Talk to a Navigator
          </a>
        </div>

        <button
          className="md:hidden text-white p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-[#0A1628]/98 backdrop-blur-xl border-t border-white/10">
          <div className="container py-6 flex flex-col gap-4">
            {[
              { label: "Programs", href: "#programs" },
              { label: "Flight Syllabus", href: "#syllabus" },
              { label: "For Families", href: "#families" },
              { label: "About", href: "#about" },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="font-body text-base font-medium text-white/80 hover:text-[#E8622A] transition-colors py-2 border-b border-white/10"
              >
                {item.label}
              </a>
            ))}
            <a
              href="tel:+18669693686"
              className="flex items-center gap-2 font-technical text-sm text-white/70 mt-2"
            >
              <Phone size={14} />
              866-969-3686
            </a>
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="btn-beacon bg-[#E8622A] text-white font-display font-bold text-sm tracking-widest uppercase px-5 py-3 rounded text-center mt-2"
            >
              Talk to a Navigator
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

// ─── ATIS Ticker ──────────────────────────────────────────────────────────────
function AtisTicker() {
  const msg = "WAYPOINT · TEEN RECOVERY · ORANGE COUNTY, CA · ADMISSIONS OPEN 24/7 · CONFIDENTIAL · NO JUDGMENT · NO PRESSURE · INSURANCE ACCEPTED · TEEN PROGRAM AGES 13–17 · LICENSED CLINICIANS · CALL 866-969-3686 · NEXT WAYPOINT AHEAD · ";
  const doubled = msg + msg;
  return (
    <div className="bg-[#E8622A] overflow-hidden py-2">
      <div className="ticker-track flex whitespace-nowrap">
        <span className="font-technical text-xs text-white tracking-widest">{doubled}</span>
      </div>
    </div>
  );
}

// ─── Hero Section ─────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/manus-storage/solo_hero_bg_3eb63abf.png')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0A1628]/90 via-[#0A1628]/60 to-[#0A1628]/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628]/60 via-transparent to-[#0A1628]/30" />

      <div className="relative z-10 container pt-24 pb-16">
        <div className="max-w-2xl">
          <div className="flex items-center gap-2 mb-6">
            <div className="h-px w-8 bg-[#E8622A]" />
            <span className="font-technical text-xs text-[#E8622A] tracking-[0.2em] uppercase">
              Orange County · Santa Ana, CA
            </span>
          </div>

          <h1 className="font-display font-black text-white leading-none mb-4">
            <span className="block text-6xl md:text-8xl lg:text-9xl tracking-tight">EVERY STEP</span>
            <span className="block text-6xl md:text-8xl lg:text-9xl tracking-tight">IS A</span>
            <span className="block text-5xl md:text-7xl lg:text-8xl tracking-tight text-[#E8622A]">
              WAYPOINT.
            </span>
          </h1>

          <div className="my-6 h-px w-64 bg-gradient-to-r from-[#E8622A] to-transparent" />

          <p className="font-body text-lg md:text-xl text-white/80 leading-relaxed mb-8 max-w-lg">
            Teen detox and residential recovery in Orange County, designed for ages 13–17.
            You don't need to see the whole route. You just need the next waypoint.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <a
              href="#contact"
              className="btn-beacon bg-[#E8622A] text-white font-display font-bold text-base tracking-widest uppercase px-8 py-4 rounded hover:bg-[#d4561f] transition-colors duration-200 text-center"
            >
              Set Your First Waypoint
            </a>
            <a
              href="#syllabus"
              className="border-2 border-white/40 text-white font-display font-bold text-base tracking-widest uppercase px-8 py-4 rounded hover:border-white hover:bg-white/10 transition-all duration-200 text-center"
            >
              View Flight Plan
            </a>
          </div>

          <div className="flex flex-wrap gap-4">
            {[
              { icon: <Shield size={14} />, text: "State Licensed · DHCS" },
              { icon: <Award size={14} />, text: "Joint Commission Accredited" },
              { icon: <Clock size={14} />, text: "Admissions Open 24/7" },
            ].map((badge) => (
              <div key={badge.text} className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5">
                <span className="text-[#E8622A]">{badge.icon}</span>
                <span className="font-technical text-xs text-white/80 tracking-wide">{badge.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="font-technical text-xs text-white/40 tracking-widest">SCROLL</span>
        <ChevronDown size={16} className="text-white/40" />
      </div>
    </section>
  );
}

// ─── Pre-Flight Briefing Bar ───────────────────────────────────────────────────
function PreFlightBriefing() {
  const stats = [
    { code: "WPT-001", label: "Ages Served", value: "13–17" },
    { code: "WPT-002", label: "Clinical Monitoring", value: "24/7" },
    { code: "WPT-003", label: "Program Phases", value: "3" },
    { code: "WPT-004", label: "Insurance Networks", value: "4+" },
  ];

  return (
    <section className="bg-[#0A1628] border-y border-[#E8622A]/30">
      <div className="container py-6">
        <div className="flex items-center gap-3 mb-4">
          <span className="font-technical text-xs text-[#E8622A] tracking-[0.2em] uppercase">Pre-Flight Briefing</span>
          <div className="h-px flex-1 bg-[#E8622A]/20" />
          <span className="font-technical text-xs text-white/30">SYS · OK</span>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div key={stat.code} className="border-l-2 border-[#E8622A]/40 pl-4">
              <div className="font-technical text-xs text-[#E8622A]/60 tracking-widest mb-1">{stat.code}</div>
              <div className="font-display font-black text-3xl text-white leading-none mb-1">{stat.value}</div>
              <div className="font-body text-xs text-white/50 tracking-wide">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── The Concept Section ──────────────────────────────────────────────────────
function TheConcept() {
  return (
    <section id="about" className="bg-[#F8F6F0] py-20 md:py-32">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="h-px w-8 bg-[#E8622A]" />
              <span className="font-technical text-xs text-[#E8622A] tracking-[0.2em] uppercase">The Waypoint Concept</span>
            </div>
            <h2 className="font-display font-black text-5xl md:text-6xl text-[#0A1628] leading-none mb-6">
              YOU DON'T NEED<br />
              <span className="text-[#E8622A]">THE WHOLE ROUTE.</span><br />
              JUST THE NEXT<br />WAYPOINT.
            </h2>
            <div className="h-px w-32 bg-gradient-to-r from-[#E8622A] to-transparent mb-6" />
            <p className="font-body text-base text-[#0A1628]/70 leading-relaxed mb-4">
              In aviation, a waypoint is a set of coordinates that marks a specific point along a flight route. Pilots don't need to see their final destination to begin. They just need the next waypoint — and the one after that, and the one after that. The route reveals itself one coordinate at a time.
            </p>
            <p className="font-body text-base text-[#0A1628]/70 leading-relaxed mb-8">
              At Waypoint Teen Recovery, we don't ask teens to picture the whole journey. We give them the next coordinate. Detox is a waypoint. Residential treatment is a waypoint. Aftercare is a waypoint. Each one brings them closer to the life they're navigating toward.
            </p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#E8622A] flex items-center justify-center flex-shrink-0">
                <span className="font-technical text-xs text-white font-bold">WPT</span>
              </div>
              <p className="font-body text-sm text-[#0A1628]/60 italic">
                "You don't need to see the whole route. You just need the next waypoint."
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -top-4 -left-4 w-full h-full border-2 border-[#E8622A]/20 rounded-lg" />
            <img
              src="/manus-storage/waypoint_wings_cert_94d5ed07.png"
              alt="Waypoint Reached — Waypoint Teen Recovery"
              className="relative z-10 w-full rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Flight Syllabus (Programs) ───────────────────────────────────────────────
function FlightSyllabus() {
  const phases = [
    {
      leg: "WPT 01",
      phase: "Ground School",
      subtitle: "Medical Detox & Stabilization",
      duration: "Typical: 5–10 Days",
      status: "FIRST WAYPOINT",
      description:
        "Before any navigator can chart a course, the aircraft needs to be airworthy. Ground School is where we stabilize the body, manage withdrawal safely with 24/7 clinical oversight, and prepare the mind for what comes next. The first waypoint is simply: arrive safely.",
      details: [
        "24/7 medical monitoring",
        "Comfort-focused withdrawal management",
        "Private room, meals, and rest",
        "Initial clinical assessment",
        "Family notification guidance",
      ],
    },
    {
      leg: "WPT 02",
      phase: "Dual Instruction",
      subtitle: "Residential Treatment",
      duration: "Typical: 30–90 Days",
      status: "EN ROUTE",
      description:
        "In dual instruction, a trained navigator is beside you as you learn to read your own instruments — emotions, triggers, thought patterns. You practice navigating turbulence with support before you face it alone. Each therapy session is a waypoint. Each breakthrough is a coordinate reached.",
      details: [
        "Individual and group therapy",
        "Adolescent-specific programming",
        "Academic support coordination",
        "Family therapy sessions",
        "Life skills and coping tools",
      ],
    },
    {
      leg: "WPT 03",
      phase: "The Final Leg",
      subtitle: "Aftercare Planning",
      duration: "Begins During Residential",
      status: "DESTINATION AHEAD",
      description:
        "Your aftercare plan is built with you during residential treatment — not handed to you at discharge. You leave with a full route map, not just a goodbye. The final waypoint isn't the end of the journey. It's the beginning of flying your own route.",
      details: [
        "Personalized aftercare roadmap",
        "Sober living coordination",
        "School re-entry planning",
        "Ongoing therapy referrals",
        "Alumni check-in program",
      ],
    },
  ];

  const [activePhase, setActivePhase] = useState(0);

  return (
    <section id="syllabus" className="bg-[#0A1628] py-20 md:py-32">
      <div className="container">
        <div className="flex items-center gap-3 mb-4">
          <div className="h-px w-8 bg-[#E8622A]" />
          <span className="font-technical text-xs text-[#E8622A] tracking-[0.2em] uppercase">Flight Syllabus</span>
        </div>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
          <h2 className="font-display font-black text-5xl md:text-6xl text-white leading-none">
            YOUR ROUTE TO<br />
            <span className="text-[#E8622A]">RECOVERY</span>
          </h2>
          <p className="font-body text-sm text-white/50 max-w-xs leading-relaxed">
            Three waypoints, one destination. Each one builds on the last. Your route is built with your clinical team.
          </p>
        </div>

        <div className="flex gap-2 mb-8 border-b border-white/10 pb-0">
          {phases.map((phase, i) => (
            <button
              key={i}
              onClick={() => setActivePhase(i)}
              className={`font-technical text-xs tracking-widest uppercase px-4 py-3 border-b-2 transition-all duration-200 ${
                activePhase === i
                  ? "border-[#E8622A] text-[#E8622A]"
                  : "border-transparent text-white/40 hover:text-white/70"
              }`}
            >
              {phase.leg}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-16">
          <div className="flight-card bg-white/5 border border-white/10 rounded-xl p-8">
            <div className="flex items-start justify-between mb-6">
              <div>
                <div className="font-technical text-xs text-[#E8622A] tracking-widest mb-2">
                  {phases[activePhase].status}
                </div>
                <h3 className="font-display font-black text-4xl text-white leading-none mb-1">
                  {phases[activePhase].phase}
                </h3>
                <p className="font-body text-sm text-white/50">{phases[activePhase].subtitle}</p>
              </div>
              <div className="bg-[#E8622A]/10 border border-[#E8622A]/30 rounded-lg px-3 py-2 text-right">
                <div className="font-technical text-xs text-[#E8622A]/70 tracking-wide">DURATION</div>
                <div className="font-technical text-xs text-white/60">{phases[activePhase].duration}</div>
              </div>
            </div>
            <div className="h-px bg-gradient-to-r from-[#E8622A]/40 to-transparent mb-6" />
            <p className="font-body text-base text-white/70 leading-relaxed">
              {phases[activePhase].description}
            </p>
          </div>

          <div>
            <div className="font-technical text-xs text-white/30 tracking-widest uppercase mb-4">
              What's Included
            </div>
            <div className="flex flex-col gap-3">
              {phases[activePhase].details.map((detail, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-lg px-4 py-3"
                >
                  <CheckCircle size={16} className="text-[#E8622A] flex-shrink-0" />
                  <span className="font-body text-sm text-white/70">{detail}</span>
                </div>
              ))}
            </div>

            <div className="flex gap-3 mt-8">
              <button
                onClick={() => setActivePhase(Math.max(0, activePhase - 1))}
                disabled={activePhase === 0}
                className="flex items-center gap-2 font-technical text-xs text-white/40 hover:text-white/80 disabled:opacity-20 transition-colors tracking-widest uppercase"
              >
                ← Prev Waypoint
              </button>
              <div className="flex-1" />
              <button
                onClick={() => setActivePhase(Math.min(phases.length - 1, activePhase + 1))}
                disabled={activePhase === phases.length - 1}
                className="flex items-center gap-2 font-technical text-xs text-white/40 hover:text-white/80 disabled:opacity-20 transition-colors tracking-widest uppercase"
              >
                Next Waypoint →
              </button>
            </div>
          </div>
        </div>

        <div className="mt-16 border border-white/10 rounded-xl p-6 bg-white/[0.02]">
          <div className="font-technical text-xs text-white/30 tracking-widest uppercase mb-4">Route Overview · Form WPT-001</div>
          <div className="flex flex-col md:flex-row gap-4">
            {phases.map((phase, i) => (
              <div key={i} className="flex-1 flex items-center gap-4">
                <div className="flex flex-col items-center">
                  <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center font-technical text-xs font-bold ${
                    i === activePhase ? "border-[#E8622A] text-[#E8622A] bg-[#E8622A]/10" : "border-white/20 text-white/30"
                  }`}>
                    {String(i + 1).padStart(2, "0")}
                  </div>
                </div>
                <div>
                  <div className="font-technical text-xs text-white/30 tracking-wide">{phase.status}</div>
                  <div className="font-display font-bold text-sm text-white/70">{phase.phase}</div>
                </div>
                {i < phases.length - 1 && (
                  <div className="hidden md:flex flex-1 items-center">
                    <div className="h-px flex-1 border-t border-dashed border-white/10" />
                    <ChevronRight size={12} className="text-white/20" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Programs Section ─────────────────────────────────────────────────────────
function Programs() {
  const programs = [
    {
      title: "Teen Medical Detox",
      code: "WPT-DX",
      description: "Medically supervised withdrawal management for adolescents ages 13–17. Safe, comfortable, and clinically monitored around the clock.",
      icon: "🩺",
    },
    {
      title: "Residential Treatment",
      code: "WPT-RT",
      description: "Structured daily programming with individual therapy, group sessions, family work, and academic support in a home-like setting.",
      icon: "🏠",
    },
    {
      title: "Dual Diagnosis Care",
      code: "WPT-DD",
      description: "Co-occurring mental health conditions treated alongside substance use. Anxiety, depression, trauma — we navigate the whole route.",
      icon: "🧠",
    },
    {
      title: "Family Navigation",
      code: "WPT-FM",
      description: "Recovery doesn't happen in isolation. Family therapy, parent coaching, and sibling support are built into every route.",
      icon: "👨‍👩‍👧",
    },
  ];

  return (
    <section id="programs" className="bg-[#F8F6F0] py-20 md:py-32">
      <div className="container">
        <div className="flex items-center gap-3 mb-4">
          <div className="h-px w-8 bg-[#E8622A]" />
          <span className="font-technical text-xs text-[#E8622A] tracking-[0.2em] uppercase">Programs</span>
        </div>
        <h2 className="font-display font-black text-5xl md:text-6xl text-[#0A1628] leading-none mb-12">
          CARE FOR EVERY<br />
          <span className="text-[#E8622A]">LEG OF THE ROUTE</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {programs.map((prog) => (
            <div key={prog.code} className="flight-card bg-white border border-[#0A1628]/10 rounded-xl p-8 shadow-sm">
              <div className="flex items-start justify-between mb-4">
                <span className="text-3xl">{prog.icon}</span>
                <span className="font-technical text-xs text-[#E8622A]/60 tracking-widest">{prog.code}</span>
              </div>
              <h3 className="font-display font-bold text-2xl text-[#0A1628] mb-3">{prog.title}</h3>
              <div className="h-px w-12 bg-[#E8622A] mb-4" />
              <p className="font-body text-sm text-[#0A1628]/60 leading-relaxed">{prog.description}</p>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 font-technical text-xs text-[#E8622A] tracking-widest uppercase mt-6 hover:gap-3 transition-all duration-200"
              >
                Learn More <ArrowRight size={12} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── For Families Section ─────────────────────────────────────────────────────
function ForFamilies() {
  return (
    <section id="families" className="bg-[#0A1628] py-20 md:py-32">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-[#E8622A]" />
              <span className="font-technical text-xs text-[#E8622A] tracking-[0.2em] uppercase">For Families</span>
            </div>
            <h2 className="font-display font-black text-5xl md:text-6xl text-white leading-none mb-6">
              GROUND CONTROL<br />
              <span className="text-[#E8622A]">IS ALWAYS</span><br />
              LISTENING.
            </h2>
            <div className="h-px w-32 bg-gradient-to-r from-[#E8622A] to-transparent mb-6" />
            <p className="font-body text-base text-white/70 leading-relaxed mb-4">
              Watching your teen struggle is one of the hardest things a parent can face. You don't need to have the right words. You don't need to know the whole route. You just need to make the call.
            </p>
            <p className="font-body text-base text-white/70 leading-relaxed mb-8">
              Our navigators can help you understand what treatment looks like for teens, whether insurance may help, and what the next waypoint could be. No pressure. No judgment. Just clear next steps.
            </p>

            <div className="flex flex-col gap-4 mb-8">
              {[
                "Confidential conversation with a trained navigator",
                "Insurance verification assistance",
                "Family therapy included in all programs",
                "Parent coaching and sibling support",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#E8622A]/20 border border-[#E8622A]/40 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle size={10} className="text-[#E8622A]" />
                  </div>
                  <span className="font-body text-sm text-white/60">{item}</span>
                </div>
              ))}
            </div>

            <a
              href="#contact"
              className="inline-flex items-center gap-3 bg-[#E8622A] text-white font-display font-bold text-sm tracking-widest uppercase px-8 py-4 rounded hover:bg-[#d4561f] transition-colors duration-200"
            >
              Start Here <ArrowRight size={16} />
            </a>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-xl p-8">
            <div className="font-technical text-xs text-[#E8622A] tracking-widest uppercase mb-6">Navigation Checkpoint</div>
            <p className="font-body text-sm text-white/50 mb-8">When you call, here is what to expect. No pressure, no judgment.</p>
            <div className="flex flex-col gap-4">
              {[
                { num: "01", title: "Confidential Contact", desc: "A trained navigator answers your questions." },
                { num: "02", title: "Situation Review", desc: "They listen and help you understand the situation." },
                { num: "03", title: "Program Briefing", desc: "They explain teen detox and residential options." },
                { num: "04", title: "Insurance Verification", desc: "They help verify your teen's coverage." },
                { num: "05", title: "Next Waypoint", desc: "They explain possible next steps, without pressure." },
              ].map((step) => (
                <div key={step.num} className="flex items-start gap-4 pb-4 border-b border-white/5 last:border-0">
                  <div className="font-technical text-xs text-[#E8622A]/60 tracking-widest w-6 flex-shrink-0 mt-0.5">{step.num}</div>
                  <div>
                    <div className="font-display font-bold text-sm text-white mb-0.5">{step.title}</div>
                    <div className="font-body text-xs text-white/40">{step.desc}</div>
                  </div>
                  <div className="ml-auto">
                    <span className="font-technical text-xs text-green-400/70 tracking-widest">CLEAR</span>
                  </div>
                </div>
              ))}
            </div>
            <a
              href="tel:+18669693686"
              className="flex items-center justify-center gap-2 mt-8 border border-[#E8622A]/40 text-[#E8622A] font-technical text-xs tracking-widest uppercase px-6 py-3 rounded hover:bg-[#E8622A]/10 transition-colors duration-200"
            >
              <Phone size={14} />
              Call 866-969-3686
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Insurance Section ────────────────────────────────────────────────────────
function Insurance() {
  return (
    <section className="bg-[#F8F6F0] py-16 md:py-24">
      <div className="container">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-[#E8622A]" />
              <span className="font-technical text-xs text-[#E8622A] tracking-[0.2em] uppercase">Insurance Access</span>
            </div>
            <h2 className="font-display font-black text-4xl md:text-5xl text-[#0A1628] leading-none mb-4">
              THE ROUTE MAY BE<br />
              <span className="text-[#E8622A]">MORE ACCESSIBLE</span><br />
              THAN YOU THINK.
            </h2>
            <p className="font-body text-base text-[#0A1628]/60 leading-relaxed mb-6">
              Waypoint Teen Recovery works with major insurance carriers. Your benefits may cover a significant portion of teen detox and residential treatment. Verifying is the simplest first waypoint.
            </p>
            <div className="flex flex-wrap gap-3">
              {["Anthem Blue Cross", "Blue Shield of California", "MHN", "TRICARE"].map((ins) => (
                <span key={ins} className="font-technical text-xs text-[#0A1628]/60 tracking-wide border border-[#0A1628]/20 rounded-full px-4 py-1.5 bg-white">
                  {ins}
                </span>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <a
              href="#contact"
              className="btn-beacon bg-[#E8622A] text-white font-display font-bold text-sm tracking-widest uppercase px-6 py-4 rounded text-center hover:bg-[#d4561f] transition-colors"
            >
              Verify Insurance Benefits
            </a>
            <a
              href="tel:+18669693686"
              className="border-2 border-[#0A1628]/20 text-[#0A1628] font-display font-bold text-sm tracking-widest uppercase px-6 py-4 rounded text-center hover:border-[#0A1628] transition-colors"
            >
              Ask About Self-Pay
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── FAQ Section ──────────────────────────────────────────────────────────────
function FAQ() {
  const [open, setOpen] = useState<number | null>(null);
  const faqs = [
    {
      q: "What ages does Waypoint Teen Recovery serve?",
      a: "Waypoint is designed specifically for adolescents ages 13 through 17. Our programming, therapy modalities, and environment are built around the unique developmental needs of teenagers.",
    },
    {
      q: "How is Waypoint different from adult programs?",
      a: "Waypoint is a completely separate, adolescent-only program. While The Runway Recovery guides adults through a structured flight plan, Waypoint uses the navigation metaphor differently — every milestone in recovery is a waypoint on the teen's own route. The clinical team, programming, and environment are all designed specifically for teens.",
    },
    {
      q: "What happens during teen medical detox?",
      a: "Medical detox at Waypoint is supervised by licensed clinicians and board-certified addiction medicine physicians. Your teen will have a private room, 24/7 monitoring, comfort medications as appropriate, and meals. The goal is safe, dignified stabilization — the first waypoint on the route.",
    },
    {
      q: "Can parents be involved in treatment?",
      a: "Absolutely. Family involvement is a core part of every route at Waypoint. Family therapy sessions, parent coaching, and sibling support are built into residential treatment. We believe recovery is a family navigation.",
    },
    {
      q: "Does insurance cover teen detox and residential treatment?",
      a: "Waypoint works with Anthem Blue Cross, Blue Shield of California, MHN, and TRICARE. Many families find that insurance covers a significant portion of care. Call our navigators or use our verification form to understand your specific benefits.",
    },
    {
      q: "What does a typical day look like for a teen at Waypoint?",
      a: "Days at Waypoint are structured but not rigid. Mornings begin with wellness activities, followed by individual and group therapy sessions, academic support, and skills-building activities. Evenings include reflection time, peer connection, and rest. The schedule is designed to build the routines teens will carry into their own route.",
    },
  ];

  return (
    <section className="bg-[#0A1628] py-20 md:py-32">
      <div className="container max-w-3xl">
        <div className="flex items-center gap-3 mb-4">
          <div className="h-px w-8 bg-[#E8622A]" />
          <span className="font-technical text-xs text-[#E8622A] tracking-[0.2em] uppercase">Common Questions</span>
        </div>
        <h2 className="font-display font-black text-5xl md:text-6xl text-white leading-none mb-12">
          PRE-FLIGHT<br />
          <span className="text-[#E8622A]">BRIEFING</span>
        </h2>
        <div className="flex flex-col gap-3">
          {faqs.map((faq, i) => (
            <div key={i} className="border border-white/10 rounded-xl overflow-hidden">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left hover:bg-white/5 transition-colors"
              >
                <span className="font-body text-base font-medium text-white/80">{faq.q}</span>
                <ChevronDown
                  size={16}
                  className={`text-[#E8622A] flex-shrink-0 transition-transform duration-200 ${open === i ? "rotate-180" : ""}`}
                />
              </button>
              {open === i && (
                <div className="px-6 pb-5 border-t border-white/5">
                  <p className="font-body text-sm text-white/50 leading-relaxed pt-4">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Contact / CTA Section ────────────────────────────────────────────────────
function ContactCTA() {
  const [name, setName] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="bg-[#F8F6F0] py-20 md:py-32">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-[#E8622A]" />
              <span className="font-technical text-xs text-[#E8622A] tracking-[0.2em] uppercase">Ready to Begin</span>
            </div>
            <h2 className="font-display font-black text-5xl md:text-6xl text-[#0A1628] leading-none mb-6">
              GROUND CONTROL<br />
              <span className="text-[#E8622A]">TO YOU.</span>
            </h2>
            <div className="h-px w-32 bg-gradient-to-r from-[#E8622A] to-transparent mb-6" />
            <p className="font-body text-base text-[#0A1628]/70 leading-relaxed mb-8">
              Whether you're a teen ready to set your first waypoint, or a parent watching from the ground — our navigators are standing by. One confidential call can change the direction of everything.
            </p>
            <div className="flex flex-col gap-4">
              <a href="tel:+18669693686" className="flex items-center gap-3 group">
                <div className="w-12 h-12 rounded-full bg-[#E8622A] flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Phone size={18} className="text-white" />
                </div>
                <div>
                  <div className="font-technical text-xs text-[#0A1628]/40 tracking-widest uppercase">Call Admissions</div>
                  <div className="font-display font-bold text-xl text-[#0A1628]">866-969-3686</div>
                </div>
              </a>
            </div>

            <div className="mt-10 p-6 bg-[#0A1628]/5 border border-[#0A1628]/10 rounded-xl">
              <div className="font-technical text-xs text-[#0A1628]/40 tracking-widest uppercase mb-2">A note about privacy</div>
              <p className="font-body text-xs text-[#0A1628]/50 leading-relaxed">
                All calls and inquiries are completely confidential. We will never share your information without your explicit consent. No judgment. No pressure. Just clear next steps.
              </p>
            </div>
          </div>

          <div className="bg-[#0A1628] rounded-xl p-8">
            <div className="font-technical text-xs text-[#E8622A] tracking-widest uppercase mb-2">Navigation Check-In</div>
            <h3 className="font-display font-bold text-2xl text-white mb-2">Set Your First Waypoint</h3>
            <p className="font-body text-sm text-white/50 mb-8">
              Not a commitment. Just a first coordinate. Put a name on it and come back when you're ready to begin. You hold the route.
            </p>

            {!submitted ? (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div>
                  <label className="font-technical text-xs text-white/40 tracking-widest uppercase block mb-2">
                    Navigator Name
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="First name (or a loved one's)"
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 font-body text-sm text-white placeholder-white/20 focus:outline-none focus:border-[#E8622A]/50 transition-colors"
                  />
                </div>
                <button
                  type="submit"
                  className="btn-beacon bg-[#E8622A] text-white font-display font-bold text-sm tracking-widest uppercase px-6 py-4 rounded hover:bg-[#d4561f] transition-colors"
                >
                  Set Waypoint
                </button>
                <p className="font-technical text-xs text-white/20 text-center tracking-wide">
                  Nothing is sent anywhere. Generated here on your device.
                </p>
              </form>
            ) : (
              <div className="border-2 border-[#C9A84C]/40 rounded-xl p-6 bg-[#C9A84C]/5 text-center">
                <img
                  src="/manus-storage/waypoint_wings_cert_94d5ed07.png"
                  alt="Waypoint Reached"
                  className="w-full rounded-lg mb-4 opacity-90"
                />
                <div className="font-display font-black text-2xl text-white mb-1">
                  {name || "NAVIGATOR"} — WAYPOINT SET
                </div>
                <div className="font-technical text-xs text-[#C9A84C] tracking-widest uppercase mb-4">
                  First Coordinate Locked · Waypoint Teen Recovery
                </div>
                <p className="font-body text-xs text-white/40 leading-relaxed">
                  Come back when you're ready to begin Ground School. We'll be here.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setName(""); }}
                  className="mt-4 font-technical text-xs text-white/30 hover:text-white/60 tracking-widest uppercase transition-colors"
                >
                  Reset
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer className="bg-[#0A1628] border-t border-white/10">
      <AtisTicker />
      <div className="container py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-10">
          <div className="md:col-span-2">
            <img
              src="/manus-storage/waypoint_logo_primary_15c9c13c.png"
              alt="Waypoint Teen Recovery"
              className="h-12 w-auto mb-4 brightness-0 invert"
            />
            <p className="font-body text-sm text-white/40 leading-relaxed max-w-xs">
              Teen detox and residential recovery in Orange County, CA. Designed for ages 13–17. Every step of recovery is a waypoint on the route to your life.
            </p>
            <div className="flex gap-3 mt-6">
              <span className="font-technical text-xs text-white/20 tracking-wide">Licensed · DHCS</span>
              <span className="text-white/10">·</span>
              <span className="font-technical text-xs text-white/20 tracking-wide">Joint Commission Accredited</span>
            </div>
          </div>

          <div>
            <div className="font-technical text-xs text-[#E8622A] tracking-widest uppercase mb-4">Programs</div>
            <div className="flex flex-col gap-2">
              {["Teen Medical Detox", "Residential Treatment", "Dual Diagnosis", "Family Navigation", "Aftercare Planning"].map((item) => (
                <a key={item} href="#programs" className="font-body text-sm text-white/40 hover:text-white/70 transition-colors">
                  {item}
                </a>
              ))}
            </div>
          </div>

          <div>
            <div className="font-technical text-xs text-[#E8622A] tracking-widest uppercase mb-4">Support</div>
            <div className="flex flex-col gap-2">
              {["For Families", "Insurance & Cost", "Flight Syllabus", "About Waypoint", "Contact"].map((item) => (
                <a key={item} href="#families" className="font-body text-sm text-white/40 hover:text-white/70 transition-colors">
                  {item}
                </a>
              ))}
            </div>
            <div className="mt-6">
              <div className="font-technical text-xs text-white/20 tracking-widest uppercase mb-2">Adult Program</div>
              <a
                href="https://therunwayrecovery.lovable.app"
                target="_blank"
                rel="noopener noreferrer"
                className="font-body text-xs text-white/30 hover:text-[#E8622A] transition-colors"
              >
                The Runway Recovery →
              </a>
              <p className="font-technical text-xs text-white/15 mt-1 leading-relaxed">
                Adult detox &amp; residential program by the same owner. Separate program.
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="font-technical text-xs text-white/20 leading-relaxed max-w-2xl">
            Licensed by the State of California Department of Health Care Services (DHCS). Accredited by The Joint Commission. Waypoint Teen Recovery is a specialized adolescent program in Orange County, CA.
          </p>
          <p className="font-technical text-xs text-white/20 flex-shrink-0">
            © 2026 Waypoint Teen Recovery
          </p>
        </div>

        <p className="font-body text-xs text-white/15 mt-4 leading-relaxed">
          This website is for general information and does not provide medical advice or guarantee treatment outcomes or insurance coverage. Please speak with our admissions team about your specific situation.
        </p>
      </div>
    </footer>
  );
}

// ─── Main Export ──────────────────────────────────────────────────────────────
export default function Home() {
  return (
    <div className="min-h-screen">
      <Nav />
      <Hero />
      <AtisTicker />
      <PreFlightBriefing />
      <TheConcept />
      <FlightSyllabus />
      <Programs />
      <ForFamilies />
      <Insurance />
      <FAQ />
      <ContactCTA />
      <Footer />
    </div>
  );
}
