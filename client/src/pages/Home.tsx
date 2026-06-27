/**
 * FLIGHTPATH TEEN — Brand Concept Prototype
 *
 * This site presents the proposed brand vision, service model, and design
 * direction for Flightpath Teen. It is intended for stakeholders, founders,
 * operators, and strategic partners reviewing the concept.
 *
 * Design system: Twilight navy + sunrise coral/gold palette.
 * Type: Instrument Serif (display) / Bricolage Grotesque (UI) / Hanken Grotesk (body).
 * No admissions language. No agency pitch framing. No hard-sell CTAs.
 *
 * Sections:
 *  0. Nav
 *  1. Hero
 *  2. The Problem
 *  3. The Concept
 *  4. Brand System
 *  5. The Experience (proposed website model)
 *  6. The Audience
 *  7. Content Direction (social examples)
 *  8. Why It Works
 *  9. Footer
 */

import { useState, useEffect, useRef } from "react";
import { ArrowRight, ChevronDown } from "lucide-react";
import { motion, MotionConfig, type Variants } from "framer-motion";

// ─── Motion primitives ──────────────────────────────────────────────────────
const EASE = [0.23, 1, 0.32, 1] as const;

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 36 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
};

const staggerParent: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const VIEWPORT = { once: true, margin: "-70px" } as const;

// ─── Asset URLs ───────────────────────────────────────────────────────────────
const HERO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663488423210/SUVBoqZCLc2b3z93g2JT8w/fp_concept_hero-XoePf4pgXpujv7aREh4jNP.webp";

// Real brand assets
const MARK_DIM    = "/manus-storage/mark-dimensional-sunrise_b2715a6f.png";
const MARK_WHITE  = "/manus-storage/mark-white_06b1e798.png";
const MARK_TWILIGHT = "/manus-storage/mark-twilight_90ce8a22.png";
const MARK_TANGERINE = "/manus-storage/mark-flat-tangerine_3975cc7b.png";
const MARK_CORAL  = "/manus-storage/mark-flat-coral_e9e3f1f5.png";
const LOCKUP_DARK  = "/manus-storage/lockup-horizontal-dark-text_a1fd4083.webp";
const LOCKUP_LIGHT = "/manus-storage/lockup-horizontal-light-text_adf4120e.webp";
const LOCKUP_STACKED_DARK  = "/manus-storage/lockup-stacked-dark-text_69a5ec39.png";
const LOCKUP_STACKED_LIGHT = "/manus-storage/lockup-stacked-light-text_b52603be.png";

// ─── Design tokens ────────────────────────────────────────────────────────────
const C = {
  ink:       "#142028",
  slate:     "#1B2A33",
  deep:      "#0F1A22",
  coral:     "#E0561F",
  tangerine: "#FF8A4C",
  gold:      "#FFD36B",
  teal:      "#2FB6A6",
  paper:     "#FCFBF8",
  cream:     "#F4F0E7",
  border:    "rgba(255,255,255,0.07)",
};

const F = {
  serif: "'Instrument Serif', Georgia, serif",
  ui:    "'Bricolage Grotesque', sans-serif",
  body:  "'Hanken Grotesk', sans-serif",
};

// ─── Shared primitives ────────────────────────────────────────────────────────
function Mark({ size = 28, variant = "dim" }: { size?: number; variant?: "dim" | "white" | "twilight" | "tangerine" | "coral" }) {
  const src =
    variant === "white"     ? MARK_WHITE :
    variant === "twilight"  ? MARK_TWILIGHT :
    variant === "tangerine" ? MARK_TANGERINE :
    variant === "coral"     ? MARK_CORAL :
    MARK_DIM;
  return <img src={src} alt="" aria-hidden="true" style={{ width: size, height: size, objectFit: "contain", flexShrink: 0 }} />;
}

function Tag({ children, light }: { children: React.ReactNode; light?: boolean }) {
  const ref = useRef<HTMLParagraphElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setInView(true); obs.disconnect(); } },
      { threshold: 0.6 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return (
    <p ref={ref}
      className={`uppercase fp-label-underline${inView ? " fp-in-view" : ""}`}
      style={{ fontFamily: F.ui, fontSize: "0.65rem", letterSpacing: "0.22em", color: light ? C.teal : C.teal, fontWeight: 700 }}>
      {children}
    </p>
  );
}

function Rule() {
  return <div style={{ height: 1, width: 48, background: `linear-gradient(90deg,${C.tangerine},transparent)`, margin: "18px 0" }} />;
}

function H2({ children, light }: { children: React.ReactNode; light?: boolean }) {
  return (
    <motion.h2
      initial={{ opacity: 0, y: 44 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={VIEWPORT}
      transition={{ duration: 0.75, ease: EASE }}
      style={{ fontFamily: F.serif, fontSize: "clamp(2rem,3.5vw,3rem)", lineHeight: 1.1, letterSpacing: "-0.02em", color: light ? C.paper : C.ink }}>
      {children}
    </motion.h2>
  );
}

function Body({ children, muted, light }: { children: React.ReactNode; muted?: boolean; light?: boolean }) {
  return (
    <p style={{ fontFamily: F.body, fontSize: "1rem", lineHeight: 1.75, color: light ? "rgba(252,251,248,0.55)" : muted ? "rgba(35,41,45,0.5)" : C.ink }}>
      {children}
    </p>
  );
}

// ─── 0. Nav ───────────────────────────────────────────────────────────────────
const NAV_LINKS = [
  { id: "problem",    label: "The Problem" },
  { id: "concept",    label: "The Concept" },
  { id: "brand",      label: "Brand" },
  { id: "experience", label: "Experience" },
  { id: "audience",   label: "Audience" },
  { id: "content",    label: "Content" },
  { id: "why",        label: "Why It Works" },
];

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const fn = () => {
      setScrolled(window.scrollY > 80);
      for (let i = NAV_LINKS.length - 1; i >= 0; i--) {
        const el = document.getElementById(NAV_LINKS[i].id);
        if (el && el.getBoundingClientRect().top <= 90) { setActive(NAV_LINKS[i].id); break; }
      }
    };
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const go = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    setMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{ background: scrolled ? "rgba(20,32,40,0.97)" : "transparent", backdropFilter: scrolled ? "blur(14px)" : "none", borderBottom: scrolled ? `1px solid ${C.border}` : "none" }}>
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img src={LOCKUP_LIGHT} alt="Flightpath Teen"
            style={{ height: 52, width: "auto", objectFit: "contain", display: "block", background: "transparent", border: "none", outline: "none", boxShadow: "none" }} />
        </div>
        <div className="hidden md:flex items-center gap-0.5">
          {NAV_LINKS.map((l) => (
            <button key={l.id} onClick={() => go(l.id)}
              style={{ fontFamily: F.ui, fontSize: "0.72rem", fontWeight: 500, letterSpacing: "0.04em", color: active === l.id ? C.tangerine : "rgba(252,251,248,0.45)", padding: "4px 10px", borderRadius: 6, transition: "color 0.2s" }}
              className="fp-nav-link hover:text-white">
              {l.label}
            </button>
          ))}
        </div>
        <button onClick={() => go("why")}
          style={{ fontFamily: F.ui, fontSize: "0.72rem", fontWeight: 700, background: `linear-gradient(90deg,${C.coral},${C.tangerine})`, color: C.ink, padding: "8px 18px", borderRadius: 999, letterSpacing: "0.04em" }}
          className="fp-btn-glow fp-pulse-glow hidden md:flex items-center gap-1.5 active:scale-95">
          View the Concept <ArrowRight size={12} />
        </button>
        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden flex flex-col gap-1 p-2">
          {[0,1,2].map(i => <span key={i} style={{ display: "block", width: 20, height: 1.5, background: C.paper, borderRadius: 2 }} />)}
        </button>
      </div>
      {menuOpen && (
        <div style={{ background: C.slate, borderTop: `1px solid ${C.border}` }} className="md:hidden px-6 py-4 flex flex-col gap-3">
          {NAV_LINKS.map((l) => (
            <button key={l.id} onClick={() => go(l.id)}
              style={{ fontFamily: F.ui, fontSize: "0.85rem", color: active === l.id ? C.tangerine : "rgba(252,251,248,0.6)", textAlign: "left" }}>
              {l.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}

// ─── 1. Hero ──────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-end overflow-hidden">
      <div className="absolute inset-0">
        <img src={HERO_IMG} alt="" className="fp-kenburns w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(15,26,34,0.5) 0%, rgba(15,26,34,0.35) 30%, rgba(15,26,34,0.82) 65%, #0F1A22 100%)" }} />
        <div className="fp-vignette" />
      </div>

      {/* Giant mark watermark right side */}
      <div className="absolute inset-0 flex items-center justify-end overflow-hidden pointer-events-none" style={{ zIndex: 1 }}>
        <img src={MARK_DIM} alt="" className="fp-float" style={{ width: "min(68vw, 660px)", opacity: 0.15, transform: "translateX(12%) translateY(-8%)", objectFit: "contain" }} />
      </div>

      <div className="relative w-full" style={{ zIndex: 10 }}>
        <div className="max-w-7xl mx-auto px-6 pb-2 pt-36">
          <div className="flex items-center gap-3 mb-6">
            <span style={{ fontFamily: F.ui, fontSize: "0.65rem", letterSpacing: "0.22em", color: C.teal, fontWeight: 700 }} className="uppercase">Brand Concept</span>
            <span style={{ width: 1, height: 12, background: "rgba(252,251,248,0.15)" }} />
            <span style={{ fontFamily: F.ui, fontSize: "0.65rem", letterSpacing: "0.22em", color: "rgba(252,251,248,0.28)", fontWeight: 600 }} className="uppercase">Orange County, CA</span>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-6 mb-4">
            <motion.img src={MARK_DIM} alt=""
              initial={{ opacity: 0, scale: 0.8, rotate: -6 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, ease: EASE, delay: 0.1 }}
              style={{ width: "clamp(64px,9vw,110px)", objectFit: "contain", flexShrink: 0 }} />
            <div>
              <motion.p
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: EASE, delay: 0.2 }}
                style={{ fontFamily: F.ui, fontSize: "clamp(0.6rem,1vw,0.75rem)", letterSpacing: "0.35em", color: C.tangerine, fontWeight: 700, marginBottom: 4 }} className="uppercase">Flightpath Teen</motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 34, filter: "blur(6px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.85, ease: EASE, delay: 0.3 }}
                style={{ fontFamily: F.serif, fontSize: "clamp(4.5rem,11vw,10rem)", lineHeight: 0.92, letterSpacing: "-0.03em", color: C.paper, margin: 0 }}>
                Flight<em style={{ color: C.gold, fontStyle: "italic" }}>path.</em>
              </motion.h1>
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.6 }}
            style={{ width: 64, height: 3, background: `linear-gradient(90deg,${C.coral},${C.tangerine})`, borderRadius: 2, marginBottom: 20, marginLeft: "calc(clamp(64px,9vw,110px) + 1.5rem)", transformOrigin: "left center" }} />
          <div style={{ marginLeft: "calc(clamp(64px,9vw,110px) + 1.5rem)" }}>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, ease: EASE, delay: 0.75 }}
              style={{ fontFamily: F.body, fontSize: "clamp(0.95rem,1.5vw,1.15rem)", lineHeight: 1.75, color: "rgba(252,251,248,0.5)", maxWidth: 520, marginBottom: 28 }}>
              A proposed brand and program concept for adolescent behavioral health in Orange County. Built for the teen who needs a charted course, not a clinical corridor.
            </motion.p>
            <motion.div className="flex flex-wrap gap-3 pb-20"
              initial="hidden" animate="visible"
              variants={{ visible: { transition: { staggerChildren: 0.12, delayChildren: 0.95 } } }}>
              <motion.button onClick={() => document.getElementById("concept")?.scrollIntoView({ behavior: "smooth" })}
                variants={fadeUp}
                style={{ fontFamily: F.ui, fontSize: "0.8rem", fontWeight: 700, background: `linear-gradient(90deg,${C.coral},${C.tangerine})`, color: C.paper, padding: "13px 26px", borderRadius: 999 }}
                className="fp-btn-glow flex items-center gap-2 active:scale-95">
                Explore the Concept <ArrowRight size={14} />
              </motion.button>
              <motion.button onClick={() => document.getElementById("brand")?.scrollIntoView({ behavior: "smooth" })}
                variants={fadeUp}
                style={{ fontFamily: F.ui, fontSize: "0.8rem", fontWeight: 600, border: `1px solid rgba(252,251,248,0.18)`, color: "rgba(252,251,248,0.65)", padding: "13px 26px", borderRadius: 999, background: "transparent" }}
                className="fp-btn-ghost hover:border-white/40 hover:text-white">
                View the Brand System
              </motion.button>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 animate-bounce" style={{ zIndex: 10 }}>
        <ChevronDown size={16} style={{ color: "rgba(252,251,248,0.25)" }} />
      </div>
    </section>
  );
}

// ─── 2. The Problem ───────────────────────────────────────────────────────────
function TheProblem() {
  const stats = [
    { num: "1 in 8", label: "U.S. teens", sub: "meet criteria for a substance use disorder" },
    { num: "90%", label: "Go untreated", sub: "never receive any form of clinical care" },
    { num: "0", label: "Dedicated programs", sub: "adolescent-specific medical detox in Orange County" },
    { num: "13–17", label: "The gap years", sub: "adult programs are not built for this age group" },
  ];

  return (
    <section id="problem" style={{ background: C.ink }} className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <Tag light>The Problem</Tag>
            <Rule />
            <H2 light>Orange County treats adults.<br />Nobody built this for teens.</H2>
            <div className="mt-8 space-y-5">
              <Body light>
                Adolescent substance use is a distinct clinical challenge. Teen physiology, brain development, family dynamics, and social context are categorically different from adult presentations. Yet the available treatment landscape in Orange County offers almost no dedicated adolescent options.
              </Body>
              <Body light>
                Families are left choosing between adult programs that were never designed for a 15-year-old, or waiting lists for out-of-county facilities. The gap is real, documented, and largely unaddressed.
              </Body>
              <Body light>
                Flightpath Teen is proposed as the answer to that gap. A program designed from the ground up for adolescents, with clinical protocols, family integration, and a brand identity that speaks to both the teen in crisis and the parent making the hardest call of their life.
              </Body>
            </div>
          </div>
          <motion.div className="grid grid-cols-2 gap-4 md:pt-12"
            initial="hidden" whileInView="visible" viewport={VIEWPORT} variants={staggerParent}>
            {stats.map((s) => (
              <motion.div key={s.num} variants={fadeUp} whileHover={{ y: -6 }}
                className="fp-lift-dark"
                style={{ background: C.slate, border: `1px solid ${C.border}`, borderRadius: 16, padding: 24 }}>
                <p style={{ fontFamily: F.ui, fontSize: "2rem", fontWeight: 800, color: C.gold, lineHeight: 1 }}>{s.num}</p>
                <p style={{ fontFamily: F.ui, fontSize: "0.75rem", fontWeight: 700, color: C.paper, marginTop: 6 }}>{s.label}</p>
                <p style={{ fontFamily: F.body, fontSize: "0.72rem", color: "rgba(252,251,248,0.35)", marginTop: 2, lineHeight: 1.5 }}>{s.sub}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ─── 3. The Concept ───────────────────────────────────────────────────────────
function TheConcept() {
  const pillars = [
    {
      num: "01",
      title: "The Name",
      body: "A flight path is not a fall. It is a charted course. A departure, a climb, and a safe place to land. For a teenager, that reframe matters. Recovery is not punishment. It is navigation.",
      color: C.coral,
    },
    {
      num: "02",
      title: "The Model",
      body: "Three proposed phases: Ground School (medical stabilization), The Climb (residential treatment), and Cruise Altitude (aftercare and reintegration). Each phase has a defined clinical purpose and a clear transition point.",
      color: C.tangerine,
    },
    {
      num: "03",
      title: "The Positioning",
      body: "Not a rehab. Not a hospital. Not a boot camp. Flightpath Teen is positioned as a clinically rigorous, emotionally intelligent adolescent program that treats the teen as a capable person, not a problem to be managed.",
      color: C.gold,
    },
    {
      num: "04",
      title: "The Differentiator",
      body: "Adolescent-specific from day one. Clinical staff trained in teen development. Family integration built into the program model, not added as an afterthought. A brand that a teenager would not be ashamed to be associated with.",
      color: C.teal,
    },
  ];

  return (
    <section id="concept" style={{ background: C.cream }} className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <Tag>The Concept</Tag>
        <Rule />
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <H2>A program built around<br />a single idea.</H2>
          <p style={{ fontFamily: F.body, fontSize: "0.95rem", color: "rgba(35,41,45,0.5)", maxWidth: 340, lineHeight: 1.7 }}>
            Recovery reframed as navigation. Every element of the brand, the program, and the patient experience flows from this core premise.
          </p>
        </div>

        {/* Big concept statement */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT}
          transition={{ duration: 0.75, ease: EASE }}
          style={{ background: C.ink, borderRadius: 24, padding: "56px 48px", marginBottom: 24, position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", right: "-4%", top: "50%", transform: "translateY(-50%)", opacity: 0.08 }}>
            <img src={MARK_DIM} alt="" style={{ width: 480, objectFit: "contain" }} />
          </div>
          <div style={{ position: "relative", zIndex: 2, maxWidth: 700 }}>
            <p style={{ fontFamily: F.ui, fontSize: "0.65rem", letterSpacing: "0.22em", color: C.teal, fontWeight: 700, marginBottom: 20 }} className="uppercase">Core Premise</p>
            <blockquote style={{ fontFamily: F.serif, fontSize: "clamp(1.6rem,3vw,2.4rem)", lineHeight: 1.2, color: C.paper, fontStyle: "italic", margin: 0 }}>
              "Recovery is not a fall from grace. It is a flight path. A charted course with a departure, a climb, and a safe place to land."
            </blockquote>
            <div style={{ width: 48, height: 2, background: `linear-gradient(90deg,${C.coral},${C.tangerine})`, borderRadius: 2, marginTop: 24 }} />
          </div>
        </motion.div>

        <motion.div className="grid md:grid-cols-2 gap-5"
          initial="hidden" whileInView="visible" viewport={VIEWPORT} variants={staggerParent}>
          {pillars.map((p) => (
            <motion.div key={p.num} variants={fadeUp} whileHover={{ y: -8 }}
              className="fp-lift"
              style={{ background: C.paper, border: `1px solid #EAE5DB`, borderRadius: 20, padding: 32 }}>
              <div className="flex items-center gap-3 mb-4">
                <span style={{ fontFamily: F.ui, fontSize: "0.65rem", fontWeight: 800, letterSpacing: "0.2em", color: p.color }} className="uppercase">{p.num}</span>
                <div style={{ flex: 1, height: 1, background: `${p.color}30` }} />
              </div>
              <h3 style={{ fontFamily: F.serif, fontSize: "1.5rem", color: C.ink, marginBottom: 12 }}>{p.title}</h3>
              <p style={{ fontFamily: F.body, fontSize: "0.9rem", color: "rgba(35,41,45,0.6)", lineHeight: 1.75 }}>{p.body}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ─── 4. Brand System ──────────────────────────────────────────────────────────
function BrandSystem() {
  const [tab, setTab] = useState<"logo"|"color"|"type"|"voice">("logo");

  const tabs: { id: "logo"|"color"|"type"|"voice"; label: string }[] = [
    { id: "logo",  label: "Logo" },
    { id: "color", label: "Color" },
    { id: "type",  label: "Typography" },
    { id: "voice", label: "Voice" },
  ];

  const palette = [
    { name: "Tangerine", hex: "#FF8A4C", role: "Primary" },
    { name: "Gold",      hex: "#FFD36B", role: "Accent" },
    { name: "Coral",     hex: "#E0561F", role: "Action" },
    { name: "Ember",     hex: "#C2421F", role: "Deep" },
    { name: "Twilight",  hex: "#142028", role: "Dark base" },
    { name: "Slate",     hex: "#1B2A33", role: "Secondary" },
    { name: "Paper",     hex: "#FCFBF8", role: "Light" },
    { name: "Cream",     hex: "#F4F0E7", role: "Warm bg" },
  ];

  const voices = [
    { label: "Opening statement",  text: "A safe place to land." },
    { label: "For families",       text: "The hardest part is the call. We take it from there." },
    { label: "Program philosophy", text: "Medically supervised adolescent care. Genuinely human. Built for teens, not adapted from adult programs." },
    { label: "Brand promise",      text: "Every step forward is a waypoint. We chart the course together." },
    { label: "Tone note",          text: "Warm, not clinical. Plain-spoken, not promotional. Outcome-first, not fear-based." },
  ];

  return (
    <section id="brand" style={{ background: C.cream }} className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <Tag>Brand System</Tag>
        <Rule />
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
          <H2>The complete visual identity.</H2>
          <div className="flex gap-1 p-1 rounded-xl" style={{ background: C.ink }}>
            {tabs.map((t) => (
              <button key={t.id} onClick={() => setTab(t.id)}
                style={{ fontFamily: F.ui, fontSize: "0.72rem", fontWeight: 700, padding: "7px 16px", borderRadius: 10, transition: "all 0.2s",
                  background: tab === t.id ? `linear-gradient(90deg,${C.coral},${C.tangerine})` : "transparent",
                  color: tab === t.id ? C.ink : "rgba(252,251,248,0.4)" }}>
                {t.label}
              </button>
            ))}
          </div>
        </div>

        {tab === "logo" && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="col-span-2 rounded-2xl p-10 flex flex-col items-center justify-center gap-4" style={{ background: C.ink }}>
              <img src={LOCKUP_STACKED_LIGHT} alt="Flightpath Teen lockup light" style={{ height: 120, objectFit: "contain" }} />
              <p style={{ fontFamily: F.ui, color: "rgba(252,251,248,0.2)", fontSize: "0.62rem", letterSpacing: "0.2em" }}>PRIMARY — DARK BG</p>
            </div>
            <div className="col-span-2 rounded-2xl p-10 flex flex-col items-center justify-center gap-4" style={{ background: C.paper, border: `1px solid #EAE5DB` }}>
              <img src={LOCKUP_STACKED_DARK} alt="Flightpath Teen lockup dark" style={{ height: 120, objectFit: "contain" }} />
              <p style={{ fontFamily: F.ui, color: "rgba(35,41,45,0.2)", fontSize: "0.62rem", letterSpacing: "0.2em" }}>PRIMARY — LIGHT BG</p>
            </div>
            <div className="rounded-2xl p-8 flex flex-col items-center justify-center gap-3" style={{ background: C.slate }}>
              <Mark size={56} variant="white" />
              <p style={{ fontFamily: F.ui, color: "rgba(252,251,248,0.25)", fontSize: "0.62rem", letterSpacing: "0.2em" }}>ICON MARK</p>
            </div>
            <div className="rounded-2xl p-8 flex flex-col items-center justify-center gap-3" style={{ background: `linear-gradient(135deg,${C.coral},${C.tangerine},${C.gold})` }}>
              <Mark size={56} variant="dim" />
              <p style={{ fontFamily: F.ui, color: "rgba(20,32,40,0.4)", fontSize: "0.62rem", letterSpacing: "0.2em" }}>SUNRISE</p>
            </div>
            <div className="rounded-2xl p-8 flex flex-col items-center justify-center gap-3" style={{ background: C.coral }}>
              <Mark size={56} variant="white" />
              <p style={{ fontFamily: F.ui, color: "rgba(255,255,255,0.4)", fontSize: "0.62rem", letterSpacing: "0.2em" }}>REVERSED</p>
            </div>
            <div className="rounded-2xl p-8 flex flex-col items-center justify-center gap-3" style={{ background: C.paper, border: `1px solid #EAE5DB` }}>
              <img src={LOCKUP_DARK} alt="Flightpath horizontal lockup" style={{ height: 36, objectFit: "contain" }} />
              <p style={{ fontFamily: F.ui, color: "rgba(35,41,45,0.2)", fontSize: "0.62rem", letterSpacing: "0.2em" }}>HORIZONTAL</p>
            </div>
          </div>
        )}

        {tab === "color" && (
          <div>
            <div className="h-16 rounded-2xl mb-8" style={{ background: `linear-gradient(90deg,#C2421F 0%,${C.coral} 20%,${C.tangerine} 45%,#FFB259 65%,${C.gold} 100%)` }} />
            <div className="grid grid-cols-4 md:grid-cols-8 gap-3">
              {palette.map((c) => (
                <div key={c.name}>
                  <div className="h-20 rounded-xl mb-2" style={{ background: c.hex, border: `1px solid rgba(0,0,0,0.06)` }} />
                  <p style={{ fontFamily: F.ui, fontSize: "0.72rem", fontWeight: 700, color: C.ink }}>{c.name}</p>
                  <p style={{ fontFamily: F.body, fontSize: "0.65rem", color: "rgba(35,41,45,0.45)" }}>{c.hex}</p>
                  <p style={{ fontFamily: F.body, fontSize: "0.6rem", color: "rgba(35,41,45,0.3)" }}>{c.role}</p>
                </div>
              ))}
            </div>
            <div style={{ marginTop: 32, background: C.ink, borderRadius: 20, padding: 28 }}>
              <p style={{ fontFamily: F.ui, fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.2em", color: C.teal, marginBottom: 12 }} className="uppercase">Color Philosophy</p>
              <p style={{ fontFamily: F.body, fontSize: "0.9rem", color: "rgba(252,251,248,0.55)", lineHeight: 1.75, maxWidth: 640 }}>
                The palette is built around the moment a plane breaks through cloud cover at sunrise. Deep twilight navy grounds the brand in calm authority. The warm spectrum from coral through tangerine to gold represents the horizon: the direction the program is always pointing toward. It is aspirational without being naive.
              </p>
            </div>
          </div>
        )}

        {tab === "type" && (
          <div className="grid md:grid-cols-3 gap-5">
            {[
              { role: "Display", font: F.serif, name: "Instrument Serif", usage: "Headlines, hero text, pull quotes", weight: 400, sample: "A safe place to land." },
              { role: "UI + Labels", font: F.ui, name: "Bricolage Grotesque", usage: "Buttons, nav, eyebrows, tags", weight: 700, sample: "FLIGHTPATH TEEN" },
              { role: "Body", font: F.body, name: "Hanken Grotesk", usage: "Body copy, descriptions, captions", weight: 400, sample: "Adolescent-specific care." },
            ].map((t) => (
              <div key={t.name} style={{ background: C.paper, border: `1px solid #EAE5DB`, borderRadius: 16, padding: 28 }}>
                <p style={{ fontFamily: F.ui, fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.2em", color: C.teal }} className="uppercase mb-4">{t.role}</p>
                <p style={{ fontFamily: t.font, fontSize: "3.5rem", lineHeight: 1, fontWeight: t.weight, color: C.ink }} className="mb-3">Aa</p>
                <p style={{ fontFamily: t.font, fontWeight: t.weight, fontSize: "1rem", color: C.ink, lineHeight: 1.5 }} className="mb-4">{t.sample}</p>
                <p style={{ fontFamily: F.ui, fontSize: "0.72rem", fontWeight: 700, color: "rgba(35,41,45,0.5)" }}>{t.name}</p>
                <p style={{ fontFamily: F.body, fontSize: "0.7rem", color: "rgba(35,41,45,0.35)", marginTop: 4 }}>{t.usage}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "voice" && (
          <div className="grid md:grid-cols-2 gap-5">
            <div style={{ background: C.ink, borderRadius: 16, padding: 28 }}>
              <p style={{ fontFamily: F.ui, fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.2em", color: C.teal }} className="uppercase mb-4">Voice Principles</p>
              {[
                ["Warm, not clinical",    "A hand on the shoulder, not a brochure."],
                ["Plain-spoken",          "No jargon. No false hope. No language that overstates outcomes."],
                ["Outcome-first",         "Lead with where they are going, not where they have been."],
                ["Family-aware",          "The brand speaks to the parent as much as the teen."],
                ["Honest about the work", "Recovery is hard. The brand does not pretend otherwise."],
              ].map(([h, b]) => (
                <div key={h} style={{ borderBottom: `1px solid ${C.border}`, paddingBottom: 14, marginBottom: 14 }}>
                  <p style={{ fontFamily: F.ui, fontSize: "0.8rem", fontWeight: 700, color: C.paper }}>{h}</p>
                  <p style={{ fontFamily: F.body, fontSize: "0.8rem", color: "rgba(252,251,248,0.4)", marginTop: 3 }}>{b}</p>
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-4">
              {voices.map((v) => (
                <div key={v.label} style={{ background: C.paper, border: `1px solid #EAE5DB`, borderRadius: 14, padding: 20 }}>
                  <p style={{ fontFamily: F.ui, fontSize: "0.62rem", fontWeight: 700, letterSpacing: "0.2em", color: C.teal }} className="uppercase mb-2">{v.label}</p>
                  <p style={{ fontFamily: F.serif, fontSize: "1rem", fontStyle: "italic", color: C.ink, lineHeight: 1.6 }}>"{v.text}"</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

// ─── 5. The Experience ────────────────────────────────────────────────────────
function TheExperience() {
  const phases = [
    {
      num: "01", name: "Ground School", color: C.coral,
      sub: "Medical Stabilization",
      desc: "The proposed first phase focuses on medically supervised stabilization. Safe, comfortable, and clinically appropriate for adolescent physiology. The teen arrives in crisis. They leave this phase stable, oriented, and ready to work.",
      details: ["24/7 medical supervision", "Adolescent-specific withdrawal protocols", "Family notification and orientation", "Initial psychiatric evaluation", "Comfort-first environment"],
    },
    {
      num: "02", name: "The Climb", color: C.tangerine,
      sub: "Residential Treatment",
      desc: "The residential phase is where the actual work happens. Individual therapy, group sessions, family systems work, and academic support. The teen is not isolated from their life. They are learning to navigate it.",
      details: ["Individual and group therapy", "Family systems sessions", "Academic continuity support", "Dual diagnosis assessment", "Life skills and coping framework"],
    },
    {
      num: "03", name: "Cruise Altitude", color: C.gold,
      sub: "Aftercare and Reintegration",
      desc: "The final phase is the transition back. Structured step-down, outpatient support, and a continuing care plan that does not disappear when the teen walks out the door. The flightpath does not end at discharge.",
      details: ["Step-down outpatient programming", "Continuing care planning", "School reintegration support", "Alumni peer connection", "Family aftercare resources"],
    },
  ];

  return (
    <section id="experience" style={{ background: C.ink }} className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <Tag light>The Proposed Experience</Tag>
        <Rule />
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-14">
          <H2 light>Three phases.<br />One continuous arc.</H2>
          <p style={{ fontFamily: F.body, fontSize: "0.9rem", color: "rgba(252,251,248,0.35)", maxWidth: 300, lineHeight: 1.7 }}>
            The program model is designed as a single connected journey, not three separate programs.
          </p>
        </div>
        <motion.div className="grid md:grid-cols-3 gap-5"
          initial="hidden" whileInView="visible" viewport={VIEWPORT} variants={staggerParent}>
          {phases.map((p) => (
            <motion.div key={p.num} variants={fadeUp} whileHover={{ y: -8 }}
              className="fp-lift-dark"
              style={{ background: C.slate, border: `1px solid ${C.border}`, borderRadius: 20, overflow: "hidden" }}>
              <div style={{ padding: "24px 24px 20px", borderBottom: `1px solid ${C.border}` }}>
                <div className="flex items-center justify-between mb-3">
                  <span style={{ fontFamily: F.ui, fontSize: "0.62rem", fontWeight: 700, letterSpacing: "0.2em", color: p.color }} className="uppercase">Phase {p.num}</span>
                  <span style={{ fontFamily: F.ui, fontSize: "0.62rem", color: "rgba(252,251,248,0.3)", background: "rgba(255,255,255,0.05)", padding: "3px 10px", borderRadius: 999 }}>{p.sub}</span>
                </div>
                <p style={{ fontFamily: F.serif, fontSize: "1.5rem", color: C.paper, marginBottom: 4 }}>{p.name}</p>
                <div style={{ width: 32, height: 2, background: p.color, borderRadius: 2, marginTop: 10 }} />
              </div>
              <div style={{ padding: 24 }}>
                <p style={{ fontFamily: F.body, fontSize: "0.85rem", color: "rgba(252,251,248,0.5)", lineHeight: 1.75, marginBottom: 20 }}>{p.desc}</p>
                {p.details.map((d) => (
                  <div key={d} className="flex items-start gap-2.5 mb-2.5">
                    <div style={{ width: 5, height: 5, borderRadius: "50%", background: p.color, marginTop: 7, flexShrink: 0 }} />
                    <p style={{ fontFamily: F.body, fontSize: "0.8rem", color: "rgba(252,251,248,0.55)", lineHeight: 1.5 }}>{d}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Website model */}
        <div style={{ marginTop: 24, background: C.deep, border: `1px solid ${C.border}`, borderRadius: 20, padding: 32 }}>
          <p style={{ fontFamily: F.ui, fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.2em", color: C.teal, marginBottom: 16 }} className="uppercase">Proposed Website Architecture</p>
          <div className="grid md:grid-cols-4 gap-3">
            {[
              { page: "Home", note: "Vision, program overview, family orientation" },
              { page: "The Program", note: "Three-phase model, clinical approach, philosophy" },
              { page: "For Families", note: "How to start, what to expect, support resources" },
              { page: "About", note: "Clinical team, facility, organizational values" },
              { page: "Teen Detox", note: "Phase 01 detail, safety, comfort-first approach" },
              { page: "Dual Diagnosis", note: "Co-occurring mental health and substance use" },
              { page: "Resources", note: "Educational content for parents and teens" },
              { page: "Contact", note: "Reach the program, no hard-sell admissions funnel" },
            ].map((p) => (
              <div key={p.page} style={{ background: "rgba(255,255,255,0.04)", border: `1px solid ${C.border}`, borderRadius: 12, padding: 16 }}>
                <p style={{ fontFamily: F.ui, fontSize: "0.8rem", fontWeight: 700, color: C.paper, marginBottom: 4 }}>{p.page}</p>
                <p style={{ fontFamily: F.body, fontSize: "0.72rem", color: "rgba(252,251,248,0.35)", lineHeight: 1.5 }}>{p.note}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── 6. The Audience ──────────────────────────────────────────────────────────
function TheAudience() {
  const segments = [
    {
      label: "The Teen",
      age: "Ages 13–17",
      color: C.coral,
      desc: "A teenager who has reached a point where outpatient support is not enough. They may be resistant, scared, or both. The brand needs to speak to them without condescension, without shame, and without the clinical coldness that makes teens disengage.",
      needs: ["To feel like a person, not a patient", "A program that does not feel like punishment", "Peers who understand their experience", "A path forward that feels real"],
    },
    {
      label: "The Parent",
      age: "Ages 35–55",
      color: C.tangerine,
      desc: "A parent who has been watching their child struggle, probably for longer than they want to admit. They are exhausted, scared, and often carrying significant guilt. They need clarity, credibility, and a program they can trust with their child.",
      needs: ["Immediate clarity on what the program is", "Clinical credibility without jargon", "Family involvement, not exclusion", "A team that communicates with them"],
    },
    {
      label: "The Referral Partner",
      age: "Therapists, Schools, Pediatricians",
      color: C.gold,
      desc: "A clinician or school counselor who sees adolescents in distress and has nowhere to send them locally. They need a program they can refer to with confidence, a clear intake process, and direct clinical communication.",
      needs: ["A trusted local adolescent option", "HIPAA-compliant referral process", "Direct clinical communication", "Consistent follow-up and updates"],
    },
  ];

  return (
    <section id="audience" style={{ background: C.cream }} className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <Tag>The Audience</Tag>
        <Rule />
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-14">
          <H2>Three audiences.<br />One brand that serves all of them.</H2>
          <p style={{ fontFamily: F.body, fontSize: "0.9rem", color: "rgba(35,41,45,0.45)", maxWidth: 320, lineHeight: 1.7 }}>
            The brand must work for a teenager, a parent, and a clinician simultaneously. That is a difficult balance. This is how the concept approaches it.
          </p>
        </div>
        <motion.div className="grid md:grid-cols-3 gap-5"
          initial="hidden" whileInView="visible" viewport={VIEWPORT} variants={staggerParent}>
          {segments.map((s) => (
            <motion.div key={s.label} variants={fadeUp} whileHover={{ y: -8 }}
              className="fp-lift"
              style={{ background: C.paper, border: `1px solid #EAE5DB`, borderRadius: 20, overflow: "hidden" }}>
              <div style={{ padding: "24px 24px 20px", borderBottom: `1px solid #EAE5DB` }}>
                <div style={{ width: 32, height: 3, background: s.color, borderRadius: 2, marginBottom: 14 }} />
                <p style={{ fontFamily: F.ui, fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.2em", color: "rgba(35,41,45,0.4)", marginBottom: 4 }} className="uppercase">{s.age}</p>
                <h3 style={{ fontFamily: F.serif, fontSize: "1.5rem", color: C.ink }}>{s.label}</h3>
              </div>
              <div style={{ padding: 24 }}>
                <p style={{ fontFamily: F.body, fontSize: "0.85rem", color: "rgba(35,41,45,0.6)", lineHeight: 1.75, marginBottom: 20 }}>{s.desc}</p>
                <p style={{ fontFamily: F.ui, fontSize: "0.62rem", fontWeight: 700, letterSpacing: "0.18em", color: s.color, marginBottom: 10 }} className="uppercase">What they need</p>
                {s.needs.map((n) => (
                  <div key={n} className="flex items-start gap-2.5 mb-2">
                    <div style={{ width: 5, height: 5, borderRadius: "50%", background: s.color, marginTop: 7, flexShrink: 0 }} />
                    <p style={{ fontFamily: F.body, fontSize: "0.8rem", color: "rgba(35,41,45,0.55)", lineHeight: 1.5 }}>{n}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ─── 7. Content Direction ─────────────────────────────────────────────────────
function IGHeader({ platform = "Instagram" }: { platform?: string }) {
  return (
    <div className="flex items-center gap-2.5 px-4 py-3" style={{ borderBottom: `1px solid #EAE5DB` }}>
      <div style={{ width: 32, height: 32, borderRadius: "50%", background: `linear-gradient(135deg,${C.coral},${C.tangerine})`, display: "flex", alignItems: "center", justifyContent: "center" }}>
        <Mark size={18} variant="white" />
      </div>
      <div>
        <p style={{ fontFamily: F.ui, fontSize: "0.75rem", fontWeight: 700, color: C.ink }}>flightpathteen</p>
        <p style={{ fontFamily: F.body, fontSize: "0.65rem", color: "rgba(35,41,45,0.4)" }}>{platform} · Orange County, CA</p>
      </div>
    </div>
  );
}

function IGCaption({ label, labelColor, text }: { label: string; labelColor: string; text: string }) {
  return (
    <div style={{ padding: "14px 16px 18px" }}>
      <span style={{ fontFamily: F.ui, fontSize: "0.6rem", fontWeight: 700, letterSpacing: "0.15em", background: `${labelColor}15`, color: labelColor, border: `1px solid ${labelColor}30`, padding: "2px 8px", borderRadius: 999, display: "inline-block", marginBottom: 8 }} className="uppercase">{label}</span>
      <p style={{ fontFamily: F.body, fontSize: "0.78rem", color: "rgba(35,41,45,0.65)", lineHeight: 1.6, whiteSpace: "pre-line" }}>{text}</p>
    </div>
  );
}

function ContentDirection() {
  return (
    <section id="content" style={{ background: C.ink }} className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <Tag light>Content Direction</Tag>
        <Rule />
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-14">
          <H2 light>What the brand looks like<br />in the world.</H2>
          <p style={{ fontFamily: F.body, fontSize: "0.9rem", color: "rgba(252,251,248,0.35)", maxWidth: 320, lineHeight: 1.7 }}>
            These are proposed content examples showing how the brand voice and visual identity would translate to social media.
          </p>
        </div>

        {/* ROW 1: Wide brand awareness + vertical Reel */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-5">

          {/* POST 1 — Wide brand awareness */}
          <div style={{ background: C.paper, border: `1px solid #2A3A45`, borderRadius: 20, overflow: "hidden" }} className="md:col-span-2">
            <IGHeader />
            <div style={{ position: "relative", background: `linear-gradient(135deg,${C.deep} 0%,${C.slate} 40%,#1B3040 100%)`, aspectRatio: "2/1", overflow: "hidden" }}>
              <div style={{ position: "absolute", right: "-4%", top: "50%", transform: "translateY(-50%)", opacity: 0.22 }}>
                <img src={MARK_DIM} alt="" style={{ width: 340, objectFit: "contain" }} />
              </div>
              <div style={{ position: "relative", zIndex: 2, padding: "36px 40px", height: "100%", display: "flex", flexDirection: "column", justifyContent: "flex-end" }}>
                <p style={{ fontFamily: F.ui, fontSize: "0.58rem", letterSpacing: "0.2em", color: C.teal, fontWeight: 700, marginBottom: 10, textTransform: "uppercase" }}>Brand Awareness</p>
                <h3 style={{ fontFamily: F.serif, fontSize: "clamp(1.6rem,3.5vw,2.4rem)", lineHeight: 1.05, color: C.paper, marginBottom: 10 }}>A safe place<br />to land.</h3>
                <div style={{ width: 32, height: 2, background: C.coral, borderRadius: 2, marginBottom: 12 }} />
                <p style={{ fontFamily: F.body, fontSize: "0.8rem", color: "rgba(252,251,248,0.5)", lineHeight: 1.5, maxWidth: 280 }}>Medically supervised teen detox. Orange County.</p>
                <div style={{ marginTop: 24 }}>
                  <img src={LOCKUP_LIGHT} alt="Flightpath" style={{ height: 22, objectFit: "contain", opacity: 0.9 }} />
                </div>
              </div>
            </div>
            <IGCaption label="Brand Awareness" labelColor={C.teal} text={"Recovery is not a fall from grace.\n\nIt is a flight path. A departure, a climb, and a safe place to land.\n\n#FlightpathTeen #TeenRecovery #OrangeCounty"} />
          </div>

          {/* POST 2 — Vertical Reel */}
          <div style={{ background: C.paper, border: `1px solid #2A3A45`, borderRadius: 20, overflow: "hidden" }}>
            <IGHeader platform="Reels" />
            <div style={{ position: "relative", background: `linear-gradient(180deg,${C.deep} 0%,${C.coral} 65%,${C.gold} 100%)`, aspectRatio: "9/16", overflow: "hidden", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: 24 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ fontFamily: F.ui, fontSize: "0.58rem", fontWeight: 700, letterSpacing: "0.15em", color: "rgba(252,251,248,0.5)", textTransform: "uppercase" }}>Reel</span>
                <div style={{ width: 28, height: 28, borderRadius: "50%", background: "rgba(255,255,255,0.15)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <Mark size={16} variant="white" />
                </div>
              </div>
              <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flex: 1 }}>
                <Mark size={120} variant="white" />
              </div>
              <div>
                <h3 style={{ fontFamily: F.serif, fontSize: "1.9rem", lineHeight: 1.05, color: C.paper, marginBottom: 8 }}>Your teen<br /><em style={{ color: C.ink }}>deserves</em><br />this.</h3>
                <div style={{ width: 28, height: 2, background: "rgba(20,32,40,0.5)", borderRadius: 2, marginBottom: 10 }} />
                <p style={{ fontFamily: F.body, fontSize: "0.75rem", color: "rgba(20,32,40,0.7)", lineHeight: 1.5 }}>A program built for them, not adapted from adults.</p>
                <div style={{ marginTop: 16 }}>
                  <img src={LOCKUP_DARK} alt="Flightpath" style={{ height: 18, objectFit: "contain", opacity: 0.85 }} />
                </div>
              </div>
            </div>
            <IGCaption label="Reels" labelColor={C.coral} text={"For the parents up at 3am.\n\nYou are not alone. The path forward exists.\n\n#FlightpathTeen #ForFamilies #TeenDetox"} />
          </div>
        </div>

        {/* ROW 2: Three square posts */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-5">

          {/* POST 3 — Education */}
          <div style={{ background: C.paper, border: `1px solid #2A3A45`, borderRadius: 20, overflow: "hidden" }}>
            <IGHeader />
            <div style={{ position: "relative", background: `linear-gradient(145deg,${C.coral} 0%,${C.tangerine} 100%)`, aspectRatio: "1/1", overflow: "hidden" }}>
              <div style={{ position: "absolute", right: "-10%", bottom: "-10%", opacity: 0.3 }}>
                <Mark size={220} variant="white" />
              </div>
              <div style={{ position: "relative", zIndex: 2, padding: 28, height: "100%", display: "flex", flexDirection: "column", justifyContent: "flex-end" }}>
                <p style={{ fontFamily: F.ui, fontSize: "0.58rem", letterSpacing: "0.2em", color: "rgba(20,32,40,0.6)", fontWeight: 700, marginBottom: 8, textTransform: "uppercase" }}>Did you know</p>
                <h3 style={{ fontFamily: F.serif, fontSize: "1.65rem", lineHeight: 1.05, color: C.ink, marginBottom: 12 }}>Teen withdrawal needs its own protocol.</h3>
                <div style={{ width: 28, height: 2, background: "rgba(20,32,40,0.4)", borderRadius: 2, marginBottom: 10 }} />
                <p style={{ fontFamily: F.body, fontSize: "0.78rem", color: "rgba(20,32,40,0.65)", lineHeight: 1.5 }}>Adolescent physiology is different. So is the approach.</p>
                <div style={{ marginTop: 20 }}>
                  <img src={LOCKUP_DARK} alt="Flightpath" style={{ height: 18, objectFit: "contain", opacity: 0.75 }} />
                </div>
              </div>
            </div>
            <IGCaption label="Education" labelColor={C.tangerine} text={"Withdrawal looks different for every teenager.\n\nFlightpath Teen uses individualized protocols, not a one-size approach. 24/7 medical supervision. Comfort-first care.\n\n#FlightpathTeen #AdolescentDetox"} />
          </div>

          {/* POST 4 — Quote */}
          <div style={{ background: C.paper, border: `1px solid #2A3A45`, borderRadius: 20, overflow: "hidden" }}>
            <IGHeader />
            <div style={{ position: "relative", background: `linear-gradient(160deg,#142028 0%,#1B3040 60%,#0F1A22 100%)`, aspectRatio: "1/1", overflow: "hidden" }}>
              <div style={{ position: "absolute", inset: 0, backgroundImage: `linear-gradient(rgba(255,255,255,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.03) 1px,transparent 1px)`, backgroundSize: "40px 40px" }} />
              <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", opacity: 0.06 }}>
                <Mark size={240} variant="white" />
              </div>
              <div style={{ position: "relative", zIndex: 2, padding: 28, height: "100%", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                <div style={{ width: 28, height: 2, background: C.gold, borderRadius: 2, marginBottom: 18 }} />
                <h3 style={{ fontFamily: F.serif, fontSize: "1.7rem", lineHeight: 1.1, color: C.paper, marginBottom: 16, fontStyle: "italic" }}>"Every step forward is a waypoint."</h3>
                <p style={{ fontFamily: F.body, fontSize: "0.78rem", color: "rgba(252,251,248,0.45)", lineHeight: 1.5 }}>Recovery is navigation, not punishment.</p>
                <div style={{ marginTop: 28 }}>
                  <img src={LOCKUP_LIGHT} alt="Flightpath" style={{ height: 18, objectFit: "contain", opacity: 0.7 }} />
                </div>
              </div>
            </div>
            <IGCaption label="Brand Voice" labelColor={C.gold} text={"Recovery is not a destination. It is a direction.\n\nEvery step forward is a waypoint on the path.\n\n#FlightpathTeen #TeenRecovery #OrangeCounty"} />
          </div>

          {/* POST 5 — Stats */}
          <div style={{ background: C.paper, border: `1px solid #2A3A45`, borderRadius: 20, overflow: "hidden" }}>
            <IGHeader />
            <div style={{ position: "relative", background: C.slate, aspectRatio: "1/1", overflow: "hidden" }}>
              <div style={{ position: "absolute", top: 0, right: 0, width: "60%", height: "100%", background: `linear-gradient(135deg,${C.teal}22,${C.teal}08)`, borderLeft: `1px solid ${C.teal}20` }} />
              <div style={{ position: "absolute", bottom: "-8%", right: "-8%", opacity: 0.15 }}>
                <Mark size={200} variant="white" />
              </div>
              <div style={{ position: "relative", zIndex: 2, padding: 28, height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                <p style={{ fontFamily: F.ui, fontSize: "0.58rem", letterSpacing: "0.2em", color: C.teal, fontWeight: 700, textTransform: "uppercase" }}>The Model</p>
                <div>
                  {[
                    { num: "3", label: "Phases, one arc" },
                    { num: "13–17", label: "Age-specific care" },
                    { num: "OC", label: "Orange County" },
                  ].map((s) => (
                    <div key={s.num} style={{ borderTop: `1px solid rgba(255,255,255,0.07)`, paddingTop: 12, marginTop: 12 }}>
                      <p style={{ fontFamily: F.ui, fontSize: "1.6rem", fontWeight: 800, color: C.gold, lineHeight: 1 }}>{s.num}</p>
                      <p style={{ fontFamily: F.body, fontSize: "0.72rem", color: "rgba(252,251,248,0.45)", marginTop: 2 }}>{s.label}</p>
                    </div>
                  ))}
                </div>
                <img src={LOCKUP_LIGHT} alt="Flightpath" style={{ height: 18, objectFit: "contain", opacity: 0.7 }} />
              </div>
            </div>
            <IGCaption label="Program" labelColor={C.teal} text={"Orange County's proposed dedicated adolescent program.\n\nBuilt for teens. Family-integrated from day one.\n\n#FlightpathTeen #OrangeCounty #TeenDetox"} />
          </div>
        </div>

        {/* ROW 3: LinkedIn wide + family post */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* POST 6 — LinkedIn referral */}
          <div style={{ background: C.paper, border: `1px solid #2A3A45`, borderRadius: 20, overflow: "hidden" }} className="md:col-span-2">
            <IGHeader platform="LinkedIn" />
            <div style={{ position: "relative", background: `linear-gradient(135deg,#0F1A22 0%,#142028 50%,#1B2A33 100%)`, aspectRatio: "2/1", overflow: "hidden" }}>
              <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: 4, background: `linear-gradient(180deg,${C.coral},${C.gold})` }} />
              <div style={{ position: "absolute", right: "-5%", top: "50%", transform: "translateY(-50%)", opacity: 0.12 }}>
                <img src={MARK_DIM} alt="" style={{ width: 320, objectFit: "contain" }} />
              </div>
              <div style={{ position: "relative", zIndex: 2, padding: "36px 44px", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                <p style={{ fontFamily: F.ui, fontSize: "0.6rem", letterSpacing: "0.2em", color: C.teal, fontWeight: 700, marginBottom: 12, textTransform: "uppercase" }}>For Clinicians and Referral Partners</p>
                <h3 style={{ fontFamily: F.serif, fontSize: "clamp(1.4rem,3vw,2.2rem)", lineHeight: 1.1, color: C.paper, marginBottom: 14 }}>Your adolescent patients need a dedicated program. <em style={{ color: C.gold }}>This is the concept.</em></h3>
                <div style={{ width: 36, height: 2, background: C.coral, borderRadius: 2, marginBottom: 14 }} />
                <p style={{ fontFamily: F.body, fontSize: "0.82rem", color: "rgba(252,251,248,0.5)", lineHeight: 1.6, maxWidth: 420 }}>Flightpath Teen is proposed as Orange County's first adolescent-specific program. Direct clinical communication. Family-integrated care. A referral partner you can trust.</p>
                <div style={{ marginTop: 24 }}>
                  <img src={LOCKUP_LIGHT} alt="Flightpath" style={{ height: 20, objectFit: "contain", opacity: 0.85 }} />
                </div>
              </div>
            </div>
            <IGCaption label="Referral Partners" labelColor={C.teal} text={"Therapists, pediatricians, school counselors: the adolescent referral gap in Orange County is real.\n\nFlightpath Teen is designed to fill it.\n\n#FlightpathTeen #AdolescentCare #ReferralPartners"} />
          </div>

          {/* POST 7 — Family */}
          <div style={{ background: C.paper, border: `1px solid #2A3A45`, borderRadius: 20, overflow: "hidden" }}>
            <IGHeader />
            <div style={{ position: "relative", background: `linear-gradient(145deg,#1B2A33 0%,#142028 100%)`, aspectRatio: "1/1", overflow: "hidden" }}>
              <div style={{ position: "absolute", right: "-12%", top: "-12%", opacity: 0.7 }}>
                <Mark size={200} variant="tangerine" />
              </div>
              <div style={{ position: "relative", zIndex: 2, padding: 28, height: "100%", display: "flex", flexDirection: "column", justifyContent: "flex-end" }}>
                <p style={{ fontFamily: F.ui, fontSize: "0.58rem", letterSpacing: "0.2em", color: C.tangerine, fontWeight: 700, marginBottom: 8, textTransform: "uppercase" }}>For Families</p>
                <h3 style={{ fontFamily: F.serif, fontSize: "1.65rem", lineHeight: 1.05, color: C.paper, marginBottom: 12 }}>The hardest part<br /><em style={{ color: C.gold }}>is the call.</em></h3>
                <div style={{ width: 28, height: 2, background: C.coral, borderRadius: 2, marginBottom: 12 }} />
                <p style={{ fontFamily: F.body, fontSize: "0.78rem", color: "rgba(252,251,248,0.5)", lineHeight: 1.5 }}>We take it from there.</p>
                <div style={{ marginTop: 20 }}>
                  <img src={LOCKUP_LIGHT} alt="Flightpath" style={{ height: 18, objectFit: "contain", opacity: 0.8 }} />
                </div>
              </div>
            </div>
            <IGCaption label="Family" labelColor={C.tangerine} text={"You have been carrying this for a long time.\n\nThe path forward exists. Flightpath Teen is designed to help your family find it.\n\n#FlightpathTeen #ForFamilies"} />
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── 8. Why It Works ──────────────────────────────────────────────────────────
function WhyItWorks() {
  const reasons = [
    {
      num: "01",
      title: "The market gap is real and documented.",
      body: "Orange County has a large, affluent population with high rates of adolescent substance use and almost no dedicated adolescent detox or residential options. The demand exists. The supply does not.",
      color: C.coral,
    },
    {
      num: "02",
      title: "The brand positioning is differentiated.",
      body: "Most teen treatment brands either look like adult rehab programs with smaller fonts, or they overcorrect into a youth-marketing aesthetic that feels condescending. Flightpath Teen occupies a distinct middle ground: premium, calm, and genuinely adolescent-aware.",
      color: C.tangerine,
    },
    {
      num: "03",
      title: "The aviation metaphor does real work.",
      body: "The flight path concept is not decorative. It reframes the entire recovery narrative. Navigation instead of failure. A charted course instead of a fall. This reframe matters clinically, emotionally, and in how families talk about the program.",
      color: C.gold,
    },
    {
      num: "04",
      title: "The brand works for all three audiences.",
      body: "The visual identity is premium enough to satisfy a skeptical parent, calm enough to not alienate a resistant teenager, and credible enough to earn a referral from a clinical professional. That three-way balance is rare in this category.",
      color: C.teal,
    },
    {
      num: "05",
      title: "The program model is clinically grounded.",
      body: "The three-phase structure reflects evidence-based adolescent treatment sequencing. Ground School, The Climb, and Cruise Altitude are not just brand language. They map to real clinical phases: stabilization, treatment, and reintegration.",
      color: C.coral,
    },
    {
      num: "06",
      title: "The concept is presentation-ready.",
      body: "This site is designed to answer the question a stakeholder, investor, or partner would ask: what is this, who is it for, and why would it work? The answer is here, in the brand, in the model, and in the content direction.",
      color: C.tangerine,
    },
  ];

  return (
    <section id="why" style={{ background: C.cream }} className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <Tag>Why It Works</Tag>
        <Rule />
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-14">
          <H2>Six reasons this concept<br />is worth building.</H2>
          <p style={{ fontFamily: F.body, fontSize: "0.9rem", color: "rgba(35,41,45,0.45)", maxWidth: 320, lineHeight: 1.7 }}>
            This section is written for the stakeholder, founder, or partner reviewing the concept for the first time.
          </p>
        </div>
        <motion.div className="grid md:grid-cols-2 gap-5 mb-16"
          initial="hidden" whileInView="visible" viewport={VIEWPORT} variants={staggerParent}>
          {reasons.map((r) => (
            <motion.div key={r.num} variants={fadeUp} whileHover={{ y: -8 }}
              className="fp-lift"
              style={{ background: C.paper, border: `1px solid #EAE5DB`, borderRadius: 20, padding: 32 }}>
              <div className="flex items-center gap-3 mb-4">
                <span style={{ fontFamily: F.ui, fontSize: "0.65rem", fontWeight: 800, letterSpacing: "0.2em", color: r.color }} className="uppercase">{r.num}</span>
                <div style={{ flex: 1, height: 1, background: `${r.color}30` }} />
              </div>
              <h3 style={{ fontFamily: F.serif, fontSize: "1.3rem", color: C.ink, marginBottom: 12, lineHeight: 1.25 }}>{r.title}</h3>
              <p style={{ fontFamily: F.body, fontSize: "0.88rem", color: "rgba(35,41,45,0.6)", lineHeight: 1.75 }}>{r.body}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Closing statement */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, ease: EASE }}
          style={{ background: C.ink, borderRadius: 24, padding: "56px 48px", position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", right: "-4%", top: "50%", transform: "translateY(-50%)", opacity: 0.07 }}>
            <img src={MARK_DIM} alt="" style={{ width: 520, objectFit: "contain" }} />
          </div>
          <div style={{ position: "relative", zIndex: 2 }}>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <Tag light>The Direction</Tag>
                <Rule />
                <H2 light>This is the concept.<br /><em style={{ color: C.gold }}>This is the direction.</em></H2>
                <div className="mt-6 space-y-4">
                  <Body light>
                    Flightpath Teen is proposed as a premium, clinically grounded adolescent program for Orange County. The brand is built. The model is defined. The audience is identified. The market gap is real.
                  </Body>
                  <Body light>
                    This site exists to show what the program would look like, how it would feel, and why it would work. The next step is yours.
                  </Body>
                </div>
                <div className="flex flex-wrap gap-3 mt-8">
                  <button onClick={() => document.getElementById("concept")?.scrollIntoView({ behavior: "smooth" })}
                    style={{ fontFamily: F.ui, fontSize: "0.8rem", fontWeight: 700, background: `linear-gradient(90deg,${C.coral},${C.tangerine})`, color: C.paper, padding: "13px 26px", borderRadius: 999 }}
                    className="fp-btn-glow flex items-center gap-2 active:scale-95">
                    Review the Concept <ArrowRight size={14} />
                  </button>
                  <button onClick={() => document.getElementById("brand")?.scrollIntoView({ behavior: "smooth" })}
                    style={{ fontFamily: F.ui, fontSize: "0.8rem", fontWeight: 600, border: `1px solid rgba(252,251,248,0.18)`, color: "rgba(252,251,248,0.65)", padding: "13px 26px", borderRadius: 999, background: "transparent" }}
                    className="fp-btn-ghost hover:border-white/40 hover:text-white">
                    View the Brand System
                  </button>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                {[
                  { label: "Market gap", value: "Documented. No dedicated adolescent detox in Orange County." },
                  { label: "Brand system", value: "Complete. Logo, color, typography, voice, and content direction." },
                  { label: "Program model", value: "Defined. Three phases mapped to clinical sequencing." },
                  { label: "Audience strategy", value: "Three-way. Teen, parent, and referral partner simultaneously." },
                  { label: "Content direction", value: "Demonstrated. Seven post examples across four platforms." },
                ].map((item) => (
                  <div key={item.label} style={{ borderBottom: `1px solid ${C.border}`, paddingBottom: 14 }}>
                    <p style={{ fontFamily: F.ui, fontSize: "0.72rem", fontWeight: 700, color: C.tangerine, marginBottom: 3 }}>{item.label}</p>
                    <p style={{ fontFamily: F.body, fontSize: "0.82rem", color: "rgba(252,251,248,0.5)", lineHeight: 1.5 }}>{item.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ─── 9. Footer ────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer style={{ background: C.deep, borderTop: `1px solid ${C.border}` }} className="py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <img src={LOCKUP_LIGHT} alt="Flightpath Teen" style={{ height: 36, objectFit: "contain", marginBottom: 10 }} />
            <p style={{ fontFamily: F.body, fontSize: "0.78rem", color: "rgba(252,251,248,0.3)", maxWidth: 320, lineHeight: 1.6 }}>
              A proposed brand and program concept for adolescent behavioral health in Orange County, California. This site is a concept prototype, not a live clinical program.
            </p>
          </div>
          <div className="flex flex-col gap-2 text-right">
            <p style={{ fontFamily: F.ui, fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.2em", color: "rgba(252,251,248,0.2)" }} className="uppercase">Concept by</p>
            <div className="flex items-center gap-2 justify-end">
              <Mark size={16} variant="tangerine" />
              <span style={{ fontFamily: F.ui, fontSize: "0.85rem", fontWeight: 700, color: "rgba(252,251,248,0.4)" }}>Karle <span style={{ color: C.tangerine }}>Kreatives</span></span>
            </div>
            <p style={{ fontFamily: F.body, fontSize: "0.72rem", color: "rgba(252,251,248,0.2)" }}>Orange County, CA</p>
          </div>
        </div>
        <div style={{ borderTop: `1px solid ${C.border}`, marginTop: 32, paddingTop: 20 }} className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p style={{ fontFamily: F.body, fontSize: "0.72rem", color: "rgba(252,251,248,0.2)" }}>
            This is a brand concept prototype. All program descriptions are proposed, not operational.
          </p>
          <p style={{ fontFamily: F.body, fontSize: "0.72rem", color: "rgba(252,251,248,0.15)" }}>
            Flightpath Teen · Brand Concept · 2026
          </p>
        </div>
      </div>
    </footer>
  );
}

// ─── Root ─────────────────────────────────────────────────────────────────────
export default function Home() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen">
        <Nav />
        <Hero />
        <TheProblem />
        <TheConcept />
        <BrandSystem />
        <TheExperience />
        <TheAudience />
        <ContentDirection />
        <WhyItWorks />
        <Footer />
      </div>
    </MotionConfig>
  );
}
