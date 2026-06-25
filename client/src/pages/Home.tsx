/**
 * FLIGHTPATH TEEN DETOX — Brand + Marketing Proposal
 * Presented by Karle Kreatives
 *
 * This site IS the brand. The client experiences Flightpath's visual identity
 * while reading the proposal for building it. Every section uses Flightpath's
 * own design language: twilight navy, sunrise coral/gold, Instrument Serif,
 * Bricolage Grotesque, Hanken Grotesk, delta mark.
 *
 * Sections:
 *  0. Nav (sticky, Flightpath-branded)
 *  1. Hero (full-bleed OC aerial, Flightpath headline)
 *  2. The Mission (why this brand exists)
 *  3. Brand Identity Breakdown (logo, color, type, voice)
 *  4. Project Plan (phased timeline with deliverables)
 *  5. Website Plan (page structure + features)
 *  6. Social Media Strategy (platforms, cadence, pillars)
 *  7. Content Examples (real posts, captions, stories)
 *  8. Paid Ads Strategy
 *  9. Investment / Pricing (interactive tier selector)
 * 10. Approval (name + canvas signature)
 * 11. Footer
 */

import { useState, useEffect, useRef, useCallback } from "react";
import { Check, ArrowRight, Pen, RotateCcw, ChevronDown, Instagram, Globe, Search, Target, Calendar, BarChart2, Megaphone } from "lucide-react";

// ─── Asset URLs ───────────────────────────────────────────────────────────────
const HERO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663488423210/SUVBoqZCLc2b3z93g2JT8w/fp_hero_proposal-gD3yAcc2CauK4R25MehWdE.webp";
const SOCIAL_1 = "https://d2xsxph8kpxj0f.cloudfront.net/310519663488423210/SUVBoqZCLc2b3z93g2JT8w/fp_social_1-9wzdcbsHnCWmCXYhidpLv7.webp";
const SOCIAL_2 = "https://d2xsxph8kpxj0f.cloudfront.net/310519663488423210/SUVBoqZCLc2b3z93g2JT8w/fp_social_2-jv5qezLBqwg4vBuDJ7KSbe.webp";
const SOCIAL_3 = "https://d2xsxph8kpxj0f.cloudfront.net/310519663488423210/SUVBoqZCLc2b3z93g2JT8w/fp_social_3-CUKPfrGwxZ4xxdutxduNJL.webp";

// Real brand assets
const MARK_DIM = "/manus-storage/mark-dimensional-sunrise_b2715a6f.png";
const MARK_WHITE = "/manus-storage/mark-white_06b1e798.png";
const MARK_TWILIGHT = "/manus-storage/mark-twilight_90ce8a22.png";
const MARK_TANGERINE = "/manus-storage/mark-flat-tangerine_3975cc7b.png";
const LOCKUP_DARK = "/manus-storage/lockup-horizontal-dark-text_a1fd4083.webp";
const LOCKUP_LIGHT = "/manus-storage/lockup-horizontal-light-text_adf4120e.webp";
const LOCKUP_STACKED_DARK = "/manus-storage/lockup-stacked-dark-text_69a5ec39.png";
const LOCKUP_STACKED_LIGHT = "/manus-storage/lockup-stacked-light-text_b52603be.png";

// ─── Design tokens ────────────────────────────────────────────────────────────
const C = {
  ink: "#142028",
  slate: "#1B2A33",
  deep: "#0F1A22",
  coral: "#E0561F",
  tangerine: "#FF8A4C",
  gold: "#FFD36B",
  teal: "#2FB6A6",
  paper: "#FCFBF8",
  cream: "#F4F0E7",
  border: "rgba(255,255,255,0.07)",
};

// ─── Fonts ────────────────────────────────────────────────────────────────────
const F = {
  serif: "'Instrument Serif', Georgia, serif",
  ui: "'Bricolage Grotesque', sans-serif",
  body: "'Hanken Grotesk', sans-serif",
};

// ─── Mark component (uses real brand asset) ───────────────────────────────────
function Mark({ size = 28, variant = "dim" }: { size?: number; variant?: "dim" | "white" | "twilight" | "tangerine" }) {
  const src = variant === "white" ? MARK_WHITE : variant === "twilight" ? MARK_TWILIGHT : variant === "tangerine" ? MARK_TANGERINE : MARK_DIM;
  return <img src={src} alt="" aria-hidden="true" style={{ width: size, height: size, objectFit: "contain", flexShrink: 0 }} />;
}

// ─── Shared primitives ────────────────────────────────────────────────────────
function Tag({ children, light }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p style={{ fontFamily: F.ui, fontSize: "0.65rem", letterSpacing: "0.22em", color: light ? C.teal : C.teal }}
      className="font-bold uppercase">
      {children}
    </p>
  );
}

function Rule() {
  return <div style={{ height: 1, width: 48, background: `linear-gradient(90deg, ${C.tangerine}, transparent)`, margin: "18px 0" }} />;
}

function H2({ children, light }: { children: React.ReactNode; light?: boolean }) {
  return (
    <h2 style={{ fontFamily: F.serif, fontSize: "clamp(2rem,3.5vw,3rem)", lineHeight: 1.1, letterSpacing: "-0.02em", color: light ? C.paper : C.ink }}>
      {children}
    </h2>
  );
}

function Body({ children, muted, light }: { children: React.ReactNode; muted?: boolean; light?: boolean }) {
  return (
    <p style={{ fontFamily: F.body, fontSize: "1rem", lineHeight: 1.7, color: light ? "rgba(252,251,248,0.55)" : muted ? "rgba(35,41,45,0.55)" : C.ink }}>
      {children}
    </p>
  );
}

// ─── 0. Sticky Nav ────────────────────────────────────────────────────────────
const NAV_LINKS = [
  { id: "mission", label: "Mission" },
  { id: "brand", label: "Brand" },
  { id: "project-plan", label: "Project Plan" },
  { id: "website", label: "Website" },
  { id: "social", label: "Social" },
  { id: "content", label: "Content" },
  { id: "ads", label: "Ads" },
  { id: "investment", label: "Investment" },
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
      <div className="max-w-7xl mx-auto px-6 py-3.5 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img src={LOCKUP_LIGHT} alt="Flightpath Teen Detox" style={{ height: 28, objectFit: "contain" }} />
        </div>
        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-0.5">
          {NAV_LINKS.map((l) => (
            <button key={l.id} onClick={() => go(l.id)}
              style={{ fontFamily: F.ui, fontSize: "0.72rem", fontWeight: 500, letterSpacing: "0.04em", color: active === l.id ? C.tangerine : "rgba(252,251,248,0.45)", padding: "4px 10px", borderRadius: 6, transition: "color 0.15s" }}
              className="hover:text-white">
              {l.label}
            </button>
          ))}
        </div>
        <button onClick={() => go("investment")}
          style={{ fontFamily: F.ui, fontSize: "0.72rem", fontWeight: 700, background: `linear-gradient(90deg,${C.coral},${C.tangerine})`, color: C.ink, padding: "8px 18px", borderRadius: 999, letterSpacing: "0.04em" }}
          className="hidden md:flex items-center gap-1.5 hover:opacity-90 active:scale-95 transition-all">
          View Pricing <ArrowRight size={12} />
        </button>
        {/* Mobile hamburger */}
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
        <img src={HERO_IMG} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(20,32,40,0.3) 0%, rgba(20,32,40,0.5) 40%, rgba(20,32,40,0.92) 80%, #142028 100%)" }} />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-6 pb-20 pt-40 w-full">
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 mb-5">
            <span style={{ fontFamily: F.ui, fontSize: "0.65rem", letterSpacing: "0.22em", color: C.teal, fontWeight: 700 }} className="uppercase">Brand + Marketing Proposal</span>
            <span style={{ color: C.border }}>·</span>
            <span style={{ fontFamily: F.ui, fontSize: "0.65rem", letterSpacing: "0.22em", color: "rgba(252,251,248,0.3)", fontWeight: 600 }} className="uppercase">Prepared by Karle Kreatives</span>
          </div>
          <h1 style={{ fontFamily: F.serif, fontSize: "clamp(3.2rem,7vw,6rem)", lineHeight: 1.0, letterSpacing: "-0.025em", color: C.paper }}>
            A safe place<br />to <em style={{ color: C.gold }}>land.</em>
          </h1>
          <p style={{ fontFamily: F.body, fontSize: "1.15rem", lineHeight: 1.7, color: "rgba(252,251,248,0.6)", maxWidth: 520, marginTop: 20 }}>
            This document is the brand. Everything you're reading, the type, the colors, the voice, the layout, is the Flightpath Teen Detox identity, built and ready to deploy.
          </p>
          <div className="flex flex-wrap gap-3 mt-8">
            <button onClick={() => document.getElementById("project-plan")?.scrollIntoView({ behavior: "smooth" })}
              style={{ fontFamily: F.ui, fontSize: "0.8rem", fontWeight: 700, background: `linear-gradient(90deg,${C.coral},${C.tangerine},${C.gold})`, color: C.ink, padding: "12px 24px", borderRadius: 999 }}
              className="flex items-center gap-2 hover:opacity-90 active:scale-95 transition-all">
              View the Project Plan <ArrowRight size={14} />
            </button>
            <button onClick={() => document.getElementById("investment")?.scrollIntoView({ behavior: "smooth" })}
              style={{ fontFamily: F.ui, fontSize: "0.8rem", fontWeight: 600, border: `1px solid rgba(252,251,248,0.2)`, color: "rgba(252,251,248,0.7)", padding: "12px 24px", borderRadius: 999, background: "transparent" }}
              className="hover:border-white/40 hover:text-white transition-all">
              Skip to Pricing
            </button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 animate-bounce z-10">
        <ChevronDown size={16} style={{ color: "rgba(252,251,248,0.25)" }} />
      </div>
    </section>
  );
}

// ─── 2. Mission ───────────────────────────────────────────────────────────────
function Mission() {
  return (
    <section id="mission" style={{ background: C.ink }} className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <Tag>The Mission</Tag>
            <Rule />
              <H2 light>Recovery as a flight path, not a fall from grace.</H2>
            <div className="mt-6 space-y-4">
              <Body light>
                Orange County has no shortage of adult treatment. It has almost no dedicated adolescent medical detox. Flightpath fills that gap. A program built specifically for teens, with clinical protocols, family systems, and a brand that speaks to both the 16-year-old in crisis and the parent who just made the hardest call of their life.
              </Body>
              <Body light>
                The name is intentional. A flight path is not a fall. It is a charted course: a departure, a climb, and a safe place to land. For a teenager, that reframe matters. Recovery is not punishment. It is navigation.
              </Body>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { num: "13–17", label: "Target age range", sub: "Adolescent-specific care" },
              { num: "OC", label: "Orange County", sub: "Underserved market" },
              { num: "24/7", label: "Medical supervision", sub: "Comfort-first protocols" },
              { num: "100%", label: "Family-integrated", sub: "Parents are part of the plan" },
            ].map((s) => (
              <div key={s.num} style={{ background: C.slate, border: `1px solid ${C.border}`, borderRadius: 16, padding: 24 }}>
                <p style={{ fontFamily: F.ui, fontSize: "2rem", fontWeight: 800, color: C.gold, lineHeight: 1 }}>{s.num}</p>
                <p style={{ fontFamily: F.ui, fontSize: "0.75rem", fontWeight: 700, color: C.paper, marginTop: 6 }}>{s.label}</p>
                <p style={{ fontFamily: F.body, fontSize: "0.72rem", color: "rgba(252,251,248,0.35)", marginTop: 2 }}>{s.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── 3. Brand Identity ────────────────────────────────────────────────────────
function Brand() {
  const [tab, setTab] = useState<"logo"|"color"|"type"|"voice">("logo");

  const tabs: { id: "logo"|"color"|"type"|"voice"; label: string }[] = [
    { id: "logo", label: "Logo" },
    { id: "color", label: "Color" },
    { id: "type", label: "Typography" },
    { id: "voice", label: "Voice" },
  ];

  const palette = [
    { name: "Tangerine", hex: "#FF8A4C", role: "Primary" },
    { name: "Gold", hex: "#FFD36B", role: "Accent" },
    { name: "Coral", hex: "#E0561F", role: "CTA" },
    { name: "Ember", hex: "#C2421F", role: "Deep" },
    { name: "Twilight", hex: "#142028", role: "Dark base" },
    { name: "Slate", hex: "#1B2A33", role: "Secondary" },
    { name: "Paper", hex: "#FCFBF8", role: "Light" },
    { name: "Cream", hex: "#F4F0E7", role: "Warm bg" },
  ];

  const voices = [
    { label: "Hero headline", text: "A safe place to land." },
    { label: "For families", text: "The hardest part is the call. We'll take it from there." },
    { label: "Admissions CTA", text: "Today recovery has a starting point. This is it." },
    { label: "About the program", text: "Medically supervised adolescent detox and stabilization. Genuinely human care for teens and the families who love them." },
    { label: "Instagram caption", text: "Recovery isn't a destination. It's a direction. Every step forward is a waypoint on the path. #FlightpathTeenDetox #TeenRecovery #OrangeCounty" },
  ];

  return (
    <section id="brand" style={{ background: C.cream }} className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <Tag>Brand Identity</Tag>
        <Rule />
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
          <H2>The complete visual system.</H2>
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
              <img src={LOCKUP_STACKED_LIGHT} alt="Flightpath Teen Detox lockup light" style={{ height: 120, objectFit: "contain" }} />
              <p style={{ fontFamily: F.ui, color: "rgba(252,251,248,0.2)", fontSize: "0.62rem", letterSpacing: "0.2em" }}>PRIMARY — DARK</p>
            </div>
            <div className="col-span-2 rounded-2xl p-10 flex flex-col items-center justify-center gap-4" style={{ background: C.paper, border: `1px solid #EAE5DB` }}>
              <img src={LOCKUP_STACKED_DARK} alt="Flightpath Teen Detox lockup dark" style={{ height: 120, objectFit: "contain" }} />
              <p style={{ fontFamily: F.ui, color: "rgba(35,41,45,0.2)", fontSize: "0.62rem", letterSpacing: "0.2em" }}>PRIMARY — LIGHT</p>
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
          </div>
        )}

        {tab === "type" && (
          <div className="grid md:grid-cols-3 gap-5">
            {[
              { role: "Display", font: F.serif, name: "Instrument Serif", usage: "Headlines, hero text, pull quotes", weight: 400 },
              { role: "UI + Labels", font: F.ui, name: "Bricolage Grotesque", usage: "Buttons, nav, eyebrows, tags", weight: 700 },
              { role: "Body", font: F.body, name: "Hanken Grotesk", usage: "Body copy, descriptions, captions", weight: 400 },
            ].map((t) => (
              <div key={t.name} style={{ background: C.paper, border: `1px solid #EAE5DB`, borderRadius: 16, padding: 28 }}>
                <p style={{ fontFamily: F.ui, fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.2em", color: C.teal }} className="uppercase mb-4">{t.role}</p>
                <p style={{ fontFamily: t.font, fontSize: "3.5rem", lineHeight: 1, fontWeight: t.weight, color: C.ink }} className="mb-3">Aa</p>
                <p style={{ fontFamily: t.font, fontWeight: t.weight, fontSize: "1.2rem", color: C.ink }} className="mb-3">Flightpath</p>
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
                ["Warm, not clinical", "We sound like a hand on the shoulder, not a brochure."],
                ["Plain-spoken", "No jargon. No false hope. No language that overstates outcomes."],
                ["Outcome-first", "Lead with where they're going, not where they've been."],
                ["Family-aware", "We speak to the parent as much as the teen."],
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
                  <p style={{ fontFamily: F.serif, fontSize: "1rem", fontStyle: "italic", color: C.ink, lineHeight: 1.5 }}>"{v.text}"</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

// ─── 4. Project Plan ──────────────────────────────────────────────────────────
function ProjectPlan() {
  const phases = [
    {
      num: "01", phase: "Departure", weeks: "Weeks 1–3", color: C.coral,
      title: "Brand Foundation",
      deliverables: [
        "Brand strategy document (positioning, audience, competitive landscape)",
        "Name finalization + trademark screening",
        "Logo system (primary, icon, reversed, compact)",
        "Full color palette + typography system",
        "Brand voice guide + messaging framework",
        "Brand guidelines PDF (print-ready)",
      ],
    },
    {
      num: "02", phase: "Climb", weeks: "Weeks 4–7", color: C.tangerine,
      title: "Digital Presence",
      deliverables: [
        "Website design + development (5–7 pages)",
        "Google Business Profile setup + optimization",
        "Google Analytics 4 + Search Console configuration",
        "Email signature templates",
        "Social media profile setup (Instagram, Facebook, LinkedIn)",
        "HIPAA-compliant contact form + admissions flow",
      ],
    },
    {
      num: "03", phase: "Cruise", weeks: "Weeks 8–10", color: C.gold,
      title: "Launch + Marketing",
      deliverables: [
        "30-day content calendar (social + blog)",
        "Launch campaign (organic + paid)",
        "Referral outreach kit (for therapists, schools, pediatricians)",
        "Google Ads setup (branded + non-branded)",
        "Meta Ads setup (awareness + retargeting)",
        "Baseline analytics report + 90-day roadmap",
      ],
    },
  ];

  return (
    <section id="project-plan" style={{ background: C.ink }} className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <Tag>Project Plan</Tag>
        <Rule />
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
          <H2 light>10-week launch plan. Three phases.</H2>
          <p style={{ fontFamily: F.body, fontSize: "0.85rem", color: "rgba(252,251,248,0.35)", maxWidth: 280 }}>
            From signed proposal to live program, fully branded and market-ready.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {phases.map((p) => (
            <div key={p.num} style={{ background: C.slate, border: `1px solid ${C.border}`, borderRadius: 20, overflow: "hidden" }}>
              <div style={{ borderBottom: `1px solid ${C.border}`, padding: "20px 24px" }}>
                <div className="flex items-center justify-between mb-3">
                  <span style={{ fontFamily: F.ui, fontSize: "0.62rem", fontWeight: 700, letterSpacing: "0.2em", color: p.color }} className="uppercase">Phase {p.num} {p.phase}</span>
                  <span style={{ fontFamily: F.ui, fontSize: "0.62rem", color: "rgba(252,251,248,0.3)", background: "rgba(255,255,255,0.05)", padding: "3px 10px", borderRadius: 999 }}>{p.weeks}</span>
                </div>
                <p style={{ fontFamily: F.serif, fontSize: "1.4rem", color: C.paper }}>{p.title}</p>
              </div>
              <div style={{ padding: "20px 24px" }}>
                {p.deliverables.map((d) => (
                  <div key={d} className="flex items-start gap-2.5 mb-3">
                    <div style={{ width: 16, height: 16, borderRadius: "50%", background: `${p.color}22`, border: `1px solid ${p.color}55`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 2 }}>
                      <Check size={8} style={{ color: p.color }} />
                    </div>
                    <p style={{ fontFamily: F.body, fontSize: "0.82rem", color: "rgba(252,251,248,0.65)", lineHeight: 1.5 }}>{d}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── 5. Website Plan ──────────────────────────────────────────────────────────
function WebsitePlan() {
  const pages = [
    { name: "Home", path: "/", desc: "Hero with OC aerial, program overview, trust signals, insurance CTA", priority: "Launch" },
    { name: "About", path: "/about", desc: "Our story, clinical philosophy, team bios, facility photos", priority: "Launch" },
    { name: "Teen Medical Detox", path: "/detox", desc: "What it is, what to expect, safety protocols, comfort-first approach", priority: "Launch" },
    { name: "For Families", path: "/families", desc: "What parents need to know, how to start, FAQ, support resources", priority: "Launch" },
    { name: "Admissions", path: "/admissions", desc: "Insurance verification form, intake checklist, what to bring", priority: "Launch" },
    { name: "Blog / Resources", path: "/resources", desc: "SEO-driven educational content for parents and teens", priority: "Phase 2" },
    { name: "Dual Diagnosis", path: "/dual-diagnosis", desc: "Co-occurring mental health + substance use in adolescents", priority: "Phase 2" },
    { name: "Contact", path: "/contact", desc: "24/7 admissions line, map, HIPAA-compliant contact form", priority: "Launch" },
  ];

  const features = [
    "HIPAA-compliant contact + admissions forms",
    "Insurance verification widget",
    "24/7 admissions phone number (click-to-call mobile)",
    "Google Analytics 4 + conversion tracking",
    "Live chat integration (optional)",
    "SEO-optimized page structure + schema markup",
    "Mobile-first responsive design",
    "Page speed optimized (Core Web Vitals)",
  ];

  return (
    <section id="website" style={{ background: C.cream }} className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <Tag>Website Plan</Tag>
        <Rule />
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
          <H2>Built to convert. Designed to trust.</H2>
          <p style={{ fontFamily: F.body, fontSize: "0.85rem", color: "rgba(35,41,45,0.45)", maxWidth: 280 }}>
            5–7 pages at launch. Structured for SEO and admissions from day one.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-5 mb-10">
          {pages.map((p) => (
            <div key={p.name} style={{ background: C.paper, border: `1px solid #EAE5DB`, borderRadius: 14, padding: 20 }}>
              <div className="flex items-center justify-between mb-2">
                <p style={{ fontFamily: F.ui, fontSize: "0.85rem", fontWeight: 700, color: C.ink }}>{p.name}</p>
                <span style={{ fontFamily: F.ui, fontSize: "0.6rem", fontWeight: 700, letterSpacing: "0.15em",
                  background: p.priority === "Launch" ? `${C.coral}18` : `${C.teal}18`,
                  color: p.priority === "Launch" ? C.coral : C.teal,
                  border: `1px solid ${p.priority === "Launch" ? C.coral : C.teal}33`,
                  padding: "2px 8px", borderRadius: 999 }} className="uppercase">{p.priority}</span>
              </div>
              <p style={{ fontFamily: F.body, fontSize: "0.72rem", color: "rgba(35,41,45,0.4)", marginBottom: 6 }}>{p.path}</p>
              <p style={{ fontFamily: F.body, fontSize: "0.8rem", color: "rgba(35,41,45,0.6)", lineHeight: 1.5 }}>{p.desc}</p>
            </div>
          ))}
        </div>
        <div style={{ background: C.ink, borderRadius: 20, padding: 32 }}>
          <p style={{ fontFamily: F.ui, fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.2em", color: C.teal }} className="uppercase mb-5">Technical Features</p>
          <div className="grid md:grid-cols-2 gap-3">
            {features.map((f) => (
              <div key={f} className="flex items-center gap-2.5">
                <div style={{ width: 16, height: 16, borderRadius: "50%", background: `${C.teal}22`, border: `1px solid ${C.teal}55`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <Check size={8} style={{ color: C.teal }} />
                </div>
                <p style={{ fontFamily: F.body, fontSize: "0.82rem", color: "rgba(252,251,248,0.65)" }}>{f}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── 6. Social Media Strategy ─────────────────────────────────────────────────
function SocialStrategy() {
  const platforms = [
    { icon: <Instagram size={20} />, name: "Instagram", handle: "@flightpathteendetox", freq: "5x/week", audience: "Parents 35–55, teens 16–19", focus: "Brand awareness, trust-building, education" },
    { icon: <Globe size={20} />, name: "Facebook", handle: "Flightpath Teen Detox", freq: "3x/week", audience: "Parents 35–60, referral partners", focus: "Community, family resources, event sharing" },
    { icon: <Search size={20} />, name: "Google Business", handle: "Flightpath Teen Detox", freq: "Weekly updates", audience: "Active searchers, local", focus: "Reviews, Q&A, admissions hours, photos" },
    { icon: <Target size={20} />, name: "LinkedIn", handle: "Flightpath Teen Detox", freq: "2x/week", audience: "Therapists, pediatricians, schools", focus: "Referral relationships, clinical credibility" },
  ];

  const pillars = [
    { name: "Education", pct: 35, color: C.tangerine, desc: "What is teen detox? Signs of withdrawal. How to talk to your teen about treatment." },
    { name: "Hope", pct: 25, color: C.gold, desc: "Recovery stories (with consent), milestone moments, staff spotlights." },
    { name: "Trust", pct: 20, color: C.teal, desc: "Behind-the-scenes facility, clinical team introductions, safety protocols." },
    { name: "Action", pct: 20, color: C.coral, desc: "Insurance verification, admissions CTAs, 24/7 line reminders." },
  ];

  return (
    <section id="social" style={{ background: C.ink }} className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <Tag>Social Media Strategy</Tag>
        <Rule />
        <H2 light>Four platforms. One consistent voice.</H2>
        <p style={{ fontFamily: F.body, fontSize: "1rem", color: "rgba(252,251,248,0.5)", maxWidth: 560, marginTop: 12, marginBottom: 40, lineHeight: 1.7 }}>
          Social media for a teen detox isn't about virality. It's about being findable, credible, and human when a parent searches at 2am.
        </p>
        <div className="grid md:grid-cols-2 gap-5 mb-12">
          {platforms.map((p) => (
            <div key={p.name} style={{ background: C.slate, border: `1px solid ${C.border}`, borderRadius: 16, padding: 24 }}>
              <div className="flex items-center gap-3 mb-4">
                <div style={{ width: 40, height: 40, borderRadius: 10, background: `linear-gradient(135deg,${C.coral},${C.tangerine})`, display: "flex", alignItems: "center", justifyContent: "center", color: C.ink }}>
                  {p.icon}
                </div>
                <div>
                  <p style={{ fontFamily: F.ui, fontSize: "0.9rem", fontWeight: 700, color: C.paper }}>{p.name}</p>
                  <p style={{ fontFamily: F.body, fontSize: "0.72rem", color: "rgba(252,251,248,0.35)" }}>{p.handle}</p>
                </div>
                <span style={{ marginLeft: "auto", fontFamily: F.ui, fontSize: "0.65rem", fontWeight: 700, color: C.gold, background: `${C.gold}15`, border: `1px solid ${C.gold}30`, padding: "3px 10px", borderRadius: 999 }}>{p.freq}</span>
              </div>
              <p style={{ fontFamily: F.body, fontSize: "0.78rem", color: "rgba(252,251,248,0.4)", marginBottom: 6 }}>Audience: {p.audience}</p>
              <p style={{ fontFamily: F.body, fontSize: "0.82rem", color: "rgba(252,251,248,0.6)", lineHeight: 1.5 }}>{p.focus}</p>
            </div>
          ))}
        </div>
        <div style={{ background: C.slate, border: `1px solid ${C.border}`, borderRadius: 20, padding: 32 }}>
          <p style={{ fontFamily: F.ui, fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.2em", color: C.teal }} className="uppercase mb-6">Content Pillars</p>
          <div className="grid md:grid-cols-4 gap-5">
            {pillars.map((p) => (
              <div key={p.name}>
                <div className="flex items-center justify-between mb-2">
                  <p style={{ fontFamily: F.ui, fontSize: "0.8rem", fontWeight: 700, color: C.paper }}>{p.name}</p>
                  <p style={{ fontFamily: F.ui, fontSize: "0.8rem", fontWeight: 800, color: p.color }}>{p.pct}%</p>
                </div>
                <div style={{ height: 4, background: "rgba(255,255,255,0.08)", borderRadius: 2, marginBottom: 10 }}>
                  <div style={{ height: "100%", width: `${p.pct * 2.5}%`, background: p.color, borderRadius: 2 }} />
                </div>
                <p style={{ fontFamily: F.body, fontSize: "0.75rem", color: "rgba(252,251,248,0.4)", lineHeight: 1.5 }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── 7. Content Examples ──────────────────────────────────────────────────────
function ContentExamples() {
  const posts = [
    {
      type: "Brand Awareness",
      typeColor: C.teal,
      headline: "A safe place\nto land.",
      sub: "Medically supervised\nteen detox, Orange County.",
      caption: "Recovery isn't a fall from grace.\n\nIt's a flight path. A departure, a climb, and a safe place to land.\n\nFlightpath Teen Detox is Orange County's dedicated adolescent medical detox, built specifically for teens.\n\n#FlightpathTeenDetox #TeenRecovery #OrangeCounty",
      bg: `linear-gradient(135deg, ${C.ink} 0%, ${C.slate} 100%)`,
      accentMark: "dim",
    },
    {
      type: "For Families",
      typeColor: C.gold,
      headline: "The hardest\npart is\nthe call.",
      sub: "We're here 24/7.\nNo judgment. Just answers.",
      caption: "You don't need to have it figured out. You just need to make the call.\n\nOur admissions team is available around the clock for families who need answers right now.\n\n#FlightpathTeenDetox #ForFamilies #TeenDetox",
      bg: `linear-gradient(135deg, #0F1A22 0%, #1B2A33 100%)`,
      accentMark: "white",
    },
    {
      type: "Education",
      typeColor: C.tangerine,
      headline: "What teen\ndetox\nactually\nlooks like.",
      sub: "24/7 medical supervision.\nIndividualized protocols.",
      caption: "Withdrawal looks different for every teenager. That's why Flightpath uses individualized protocols, not a one-size approach.\n\n24/7 medical supervision. Comfort-focused care. Family communication throughout.\n\n#FlightpathTeenDetox #TeenRecovery #AdolescentDetox",
      bg: `linear-gradient(135deg, ${C.coral} 0%, ${C.tangerine} 100%)`,
      accentMark: "white",
    },
    {
      type: "Hope",
      typeColor: C.gold,
      headline: "Every step\nforward is\na waypoint.",
      sub: "Recovery is navigation,\nnot punishment.",
      caption: "Recovery isn't a destination. It's a direction.\n\nEvery step forward is a waypoint on the path. We chart the course together.\n\n#FlightpathTeenDetox #TeenRecovery #OrangeCounty #AdolescentCare",
      bg: `linear-gradient(160deg, #142028 0%, #1B3040 60%, #0F1A22 100%)`,
      accentMark: "dim",
    },
    {
      type: "Action",
      typeColor: C.coral,
      headline: "Insurance\nverified\nin minutes.",
      sub: "Most major plans accepted.\nLink in bio.",
      caption: "Don't let insurance questions stop you from making the call.\n\nOur team verifies benefits quickly so families can focus on what matters: getting their teen the help they need.\n\n#FlightpathTeenDetox #TeenDetox #InsuranceCovered",
      bg: `linear-gradient(135deg, ${C.slate} 0%, ${C.ink} 100%)`,
      accentMark: "tangerine",
    },
  ];

  return (
    <section id="content" style={{ background: C.cream }} className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <Tag>Content Examples</Tag>
        <Rule />
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
          <H2>Real posts. Real voice. Ready to publish.</H2>
          <p style={{ fontFamily: F.body, fontSize: "0.85rem", color: "rgba(35,41,45,0.45)", maxWidth: 280 }}>
            Sample deliverables from Month 1 of the retainer.
          </p>
        </div>
        {/* 5 post cards in a masonry-style grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {posts.map((p, i) => (
            <div key={p.type + i}
              style={{ background: C.paper, border: `1px solid #EAE5DB`, borderRadius: 20, overflow: "hidden",
                gridColumn: i === 0 ? "span 2" : "span 1",
              }}
              className={i === 0 ? "md:col-span-2" : ""}
            >
              {/* IG header */}
              <div style={{ padding: "10px 14px", borderBottom: `1px solid #EAE5DB`, display: "flex", alignItems: "center", gap: 10 }}>
                <div style={{ width: 30, height: 30, borderRadius: "50%", background: `linear-gradient(135deg,${C.coral},${C.gold})`, display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden", padding: 3 }}>
                  <Mark size={18} variant="white" />
                </div>
                <div>
                  <p style={{ fontFamily: F.ui, fontSize: "0.73rem", fontWeight: 700, color: C.ink }}>flightpathteendetox</p>
                  <p style={{ fontFamily: F.body, fontSize: "0.62rem", color: "rgba(35,41,45,0.4)" }}>Orange County, CA</p>
                </div>
              </div>
              {/* Post image rendered in-browser */}
              <div style={{ position: "relative", background: p.bg, aspectRatio: i === 0 ? "2/1" : "1/1", overflow: "hidden", display: "flex", alignItems: "flex-end" }}>
                {/* Large mark watermark right side */}
                <div style={{ position: "absolute", right: i === 0 ? "-2%" : "-8%", top: "50%", transform: "translateY(-50%)", opacity: 0.9 }}>
                  <Mark size={i === 0 ? 260 : 200} variant={p.accentMark as "dim" | "white" | "twilight" | "tangerine"} />
                </div>
                {/* Text content */}
                <div style={{ position: "relative", zIndex: 2, padding: i === 0 ? "40px 44px" : "28px 28px", width: "100%" }}>
                  <h3 style={{
                    fontFamily: F.serif,
                    fontSize: i === 0 ? "clamp(2rem,4vw,3rem)" : "1.55rem",
                    lineHeight: 1.05,
                    letterSpacing: "-0.02em",
                    color: "#FCFBF8",
                    whiteSpace: "pre-line",
                    marginBottom: 16,
                  }}>{p.headline}</h3>
                  {/* Coral rule */}
                  <div style={{ width: 32, height: 2, background: C.coral, marginBottom: 14, borderRadius: 2 }} />
                  <p style={{ fontFamily: F.body, fontSize: i === 0 ? "0.9rem" : "0.78rem", color: C.tangerine, lineHeight: 1.5, whiteSpace: "pre-line" }}>{p.sub}</p>
                  {/* Lockup bottom */}
                  <div style={{ marginTop: i === 0 ? 36 : 24 }}>
                    <img src={LOCKUP_LIGHT} alt="Flightpath Teen Detox" style={{ height: i === 0 ? 22 : 18, objectFit: "contain", opacity: 0.9 }} />
                  </div>
                </div>
              </div>
              {/* Caption */}
              <div style={{ padding: "14px 16px" }}>
                <span style={{ fontFamily: F.ui, fontSize: "0.58rem", fontWeight: 700, letterSpacing: "0.15em", color: p.typeColor, background: `${p.typeColor}15`, border: `1px solid ${p.typeColor}30`, padding: "2px 8px", borderRadius: 999 }} className="uppercase">{p.type}</span>
                <p style={{ fontFamily: F.body, fontSize: "0.76rem", color: "rgba(35,41,45,0.6)", lineHeight: 1.65, marginTop: 9, whiteSpace: "pre-line" }}>{p.caption}</p>
              </div>
            </div>
          ))}
        </div>
        {/* Monthly calendar preview */}
        <div style={{ background: C.ink, borderRadius: 20, padding: 32, marginTop: 24 }}>
          <div className="flex items-center justify-between mb-6">
            <p style={{ fontFamily: F.ui, fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.2em", color: C.teal }} className="uppercase">Sample Monthly Content Calendar</p>
            <div className="flex items-center gap-2">
              {[["Education", C.tangerine], ["Hope", C.gold], ["Trust", C.teal], ["Action", C.coral]].map(([l, c]) => (
                <span key={l as string} style={{ fontFamily: F.ui, fontSize: "0.6rem", fontWeight: 700, color: c as string, background: `${c as string}18`, border: `1px solid ${c as string}30`, padding: "2px 8px", borderRadius: 999 }}>{l as string}</span>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-7 gap-2">
            {["Mon","Tue","Wed","Thu","Fri","Sat","Sun"].map(d => (
              <p key={d} style={{ fontFamily: F.ui, fontSize: "0.62rem", fontWeight: 700, color: "rgba(252,251,248,0.25)", textAlign: "center" }}>{d}</p>
            ))}
            {[
              { day: 1, type: "Education", post: "What is teen detox?" },
              { day: 2, type: null, post: null },
              { day: 3, type: "Hope", post: "Staff spotlight" },
              { day: 4, type: "Trust", post: "Facility tour" },
              { day: 5, type: "Action", post: "Verify benefits" },
              { day: 6, type: null, post: null },
              { day: 7, type: null, post: null },
              { day: 8, type: "Education", post: "Signs of withdrawal" },
              { day: 9, type: "Action", post: "24/7 admissions" },
              { day: 10, type: null, post: null },
              { day: 11, type: "Hope", post: "Recovery milestone" },
              { day: 12, type: "Trust", post: "Meet the team" },
              { day: 13, type: "Education", post: "Talking to your teen" },
              { day: 14, type: null, post: null },
            ].map((item, i) => {
              const colorMap: Record<string, string> = { Education: C.tangerine, Hope: C.gold, Trust: C.teal, Action: C.coral };
              return (
                <div key={i} style={{ background: item.type ? `${colorMap[item.type]}15` : "rgba(255,255,255,0.03)", border: `1px solid ${item.type ? colorMap[item.type] + "30" : C.border}`, borderRadius: 10, padding: "8px 6px", minHeight: 64 }}>
                  <p style={{ fontFamily: F.ui, fontSize: "0.65rem", fontWeight: 700, color: item.type ? colorMap[item.type] : "rgba(252,251,248,0.15)" }}>{item.day}</p>
                  {item.post && <p style={{ fontFamily: F.body, fontSize: "0.6rem", color: "rgba(252,251,248,0.5)", marginTop: 3, lineHeight: 1.3 }}>{item.post}</p>}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── 8. Paid Ads ──────────────────────────────────────────────────────────────
function PaidAds() {
  const campaigns = [
    {
      platform: "Google Search",
      icon: <Search size={18} />,
      budget: "$800–1,200/mo",
      targeting: "High-intent keywords: 'teen detox Orange County', 'adolescent detox near me', 'teen drug treatment OC'",
      format: "Text ads + call extensions",
      goal: "Direct admissions inquiries",
    },
    {
      platform: "Meta (Facebook + Instagram)",
      icon: <Instagram size={18} />,
      budget: "$600–900/mo",
      targeting: "Parents 30–55 in OC/LA, interests: parenting teens, mental health, addiction recovery",
      format: "Awareness video + retargeting carousel",
      goal: "Brand awareness + website traffic",
    },
    {
      platform: "Google Display + YouTube",
      icon: <Megaphone size={18} />,
      budget: "$400–600/mo",
      targeting: "Retargeting website visitors + lookalike audiences from admissions inquiries",
      format: "Display banners + 15-sec pre-roll",
      goal: "Retargeting + top-of-funnel",
    },
  ];

  return (
    <section id="ads" style={{ background: C.ink }} className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <Tag>Paid Advertising</Tag>
        <Rule />
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
          <H2 light>Be findable when it matters most.</H2>
          <p style={{ fontFamily: F.body, fontSize: "0.85rem", color: "rgba(252,251,248,0.35)", maxWidth: 280 }}>
            Included in the retainer. Managed monthly with performance reporting.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-5 mb-10">
          {campaigns.map((c) => (
            <div key={c.platform} style={{ background: C.slate, border: `1px solid ${C.border}`, borderRadius: 18, padding: 24 }}>
              <div className="flex items-center gap-3 mb-5">
                <div style={{ width: 40, height: 40, borderRadius: 10, background: `linear-gradient(135deg,${C.coral},${C.tangerine})`, display: "flex", alignItems: "center", justifyContent: "center", color: C.ink }}>
                  {c.icon}
                </div>
                <div>
                  <p style={{ fontFamily: F.ui, fontSize: "0.85rem", fontWeight: 700, color: C.paper }}>{c.platform}</p>
                  <p style={{ fontFamily: F.ui, fontSize: "0.7rem", fontWeight: 700, color: C.gold }}>{c.budget}</p>
                </div>
              </div>
              {[["Targeting", c.targeting], ["Format", c.format], ["Goal", c.goal]].map(([l, v]) => (
                <div key={l} style={{ borderTop: `1px solid ${C.border}`, paddingTop: 12, marginTop: 12 }}>
                  <p style={{ fontFamily: F.ui, fontSize: "0.62rem", fontWeight: 700, letterSpacing: "0.15em", color: C.teal }} className="uppercase mb-1">{l}</p>
                  <p style={{ fontFamily: F.body, fontSize: "0.8rem", color: "rgba(252,251,248,0.55)", lineHeight: 1.5 }}>{v}</p>
                </div>
              ))}
            </div>
          ))}
        </div>
        <div style={{ background: C.slate, border: `1px solid ${C.border}`, borderRadius: 18, padding: 28 }}>
          <div className="flex items-center gap-3 mb-4">
            <BarChart2 size={18} style={{ color: C.teal }} />
            <p style={{ fontFamily: F.ui, fontSize: "0.75rem", fontWeight: 700, color: C.paper }}>Monthly Reporting Includes</p>
          </div>
          <div className="grid md:grid-cols-3 gap-3">
            {["Impressions + reach by platform","Click-through rates + cost per click","Admissions inquiry volume + source attribution","Keyword ranking report (organic + paid)","Social engagement rate + follower growth","Monthly recommendations + budget adjustments"].map((r) => (
              <div key={r} className="flex items-start gap-2">
                <Check size={12} style={{ color: C.teal, marginTop: 3, flexShrink: 0 }} />
                <p style={{ fontFamily: F.body, fontSize: "0.78rem", color: "rgba(252,251,248,0.55)" }}>{r}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── 9. Investment ────────────────────────────────────────────────────────────
const TIERS = [
  {
    id: "phase1", phase: "Phase 1 · Departure", name: "Brand Buildout", price: "$5,000", unit: "one-time",
    note: "50% on approval, 50% on delivery", recommended: false,
    deliverables: [
      ["Brand strategy + positioning","Audience, competitive landscape"],
      ["Logo system","Primary, icon, reversed, compact"],
      ["Color + typography system","Full brand guidelines PDF"],
      ["Website (5–7 pages)","Design + development"],
      ["Messaging framework","Voice guide + copy"],
      ["Digital presence setup","Google, social profiles"],
      ["Launch marketing plan","30-day roadmap"],
    ],
  },
  {
    id: "phase2", phase: "Phase 2 · Climb", name: "Contract Retainer", price: "$3.5–5K", unit: "/mo",
    note: "After Phase 1, 3-month minimum", recommended: true,
    deliverables: [
      ["Monthly content calendar","Social + blog"],
      ["Social media management","IG, FB, LinkedIn, Google"],
      ["Paid ads management","Google + Meta"],
      ["SEO + Google Business","Rankings + local visibility"],
      ["Monthly performance report","Data + recommendations"],
    ],
  },
  {
    id: "phase3", phase: "Phase 3 · Cruise", name: "Part-Time Role", price: "$90–115K", unit: "/yr",
    note: "Director of Marketing, with benefits", recommended: false,
    deliverables: [
      ["Director of Marketing title","With benefits"],
      ["Full marketing ownership","Strategy to execution"],
      ["All retainer deliverables","Ongoing"],
      ["Census growth strategy","Referral + paid + organic"],
      ["Quarterly board reporting","KPIs + growth metrics"],
    ],
  },
];

function Investment({ onSelect }: { onSelect: (t: typeof TIERS[0]) => void }) {
  const [selected, setSelected] = useState("phase1");

  const pick = (t: typeof TIERS[0]) => { setSelected(t.id); onSelect(t); };

  return (
    <section id="investment" style={{ background: C.cream }} className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <Tag>Investment</Tag>
        <Rule />
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-4">
          <H2>Below-rate pricing for the mission.</H2>
          <p style={{ fontFamily: F.body, fontSize: "0.85rem", color: "rgba(35,41,45,0.45)", maxWidth: 300 }}>
            Standard brand buildouts run $8 to 12K. This is mission-driven pricing. Select a tier and it carries into the approval form below.
          </p>
        </div>
        <p style={{ fontFamily: F.ui, fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.15em", color: C.teal, display: "flex", alignItems: "center", gap: 8, marginBottom: 32 }}>
          <span style={{ width: 6, height: 6, borderRadius: "50%", background: C.teal, display: "inline-block", animation: "pulse 2s infinite" }} />
          SELECT A TIER TO APPROVE
        </p>
        <div className="grid md:grid-cols-3 gap-5">
          {TIERS.map((t) => {
            const sel = selected === t.id;
            return (
              <button key={t.id} onClick={() => pick(t)} className="text-left transition-all duration-200 focus:outline-none"
                style={{ background: C.ink, borderRadius: 20, overflow: "hidden", border: sel ? `2px solid ${C.tangerine}` : t.recommended ? `2px solid rgba(255,138,76,0.2)` : `2px solid transparent`, boxShadow: sel ? `0 0 0 4px rgba(255,138,76,0.1)` : "none", transform: sel ? "translateY(-4px)" : "none" }}>
                {t.recommended && (
                  <div style={{ padding: "12px 24px 0", display: "flex", justifyContent: "flex-end" }}>
                    <span style={{ fontFamily: F.ui, fontSize: "0.6rem", fontWeight: 700, letterSpacing: "0.15em", background: `${C.tangerine}20`, color: C.tangerine, border: `1px solid ${C.tangerine}30`, padding: "2px 10px", borderRadius: 999 }} className="uppercase">Recommended</span>
                  </div>
                )}
                <div style={{ padding: `${t.recommended ? "8px" : "24px"} 24px 20px`, borderBottom: `1px solid ${C.border}` }}>
                  <p style={{ fontFamily: F.ui, fontSize: "0.62rem", fontWeight: 700, letterSpacing: "0.2em", color: C.teal }} className="uppercase mb-2">{t.phase}</p>
                  <p style={{ fontFamily: F.serif, fontSize: "1.3rem", color: C.paper, marginBottom: 8 }}>{t.name}</p>
                  <div className="flex items-baseline gap-1">
                    <span style={{ fontFamily: F.ui, fontSize: "2.4rem", fontWeight: 800, color: C.gold }}>{t.price}</span>
                    <span style={{ fontFamily: F.body, fontSize: "0.85rem", color: "rgba(252,251,248,0.3)" }}>{t.unit}</span>
                  </div>
                  <p style={{ fontFamily: F.body, fontSize: "0.72rem", color: "rgba(252,251,248,0.3)", marginTop: 4 }}>{t.note}</p>
                </div>
                <div style={{ padding: 24 }}>
                  {t.deliverables.map(([item, sub]) => (
                    <div key={item} className="flex items-start gap-2.5 mb-3">
                      <div style={{ width: 16, height: 16, borderRadius: "50%", background: sel ? `${C.tangerine}20` : `${C.teal}20`, border: `1px solid ${sel ? C.tangerine : C.teal}50`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 2 }}>
                        <Check size={8} style={{ color: sel ? C.tangerine : C.teal }} />
                      </div>
                      <div>
                        <p style={{ fontFamily: F.body, fontSize: "0.82rem", fontWeight: 600, color: "rgba(252,251,248,0.8)" }}>{item}</p>
                        <p style={{ fontFamily: F.body, fontSize: "0.72rem", color: "rgba(252,251,248,0.3)" }}>{sub}</p>
                      </div>
                    </div>
                  ))}
                  <div style={{ marginTop: 16, borderRadius: 999, padding: "8px 0", textAlign: "center", fontFamily: F.ui, fontSize: "0.72rem", fontWeight: 700, background: sel ? `linear-gradient(90deg,${C.coral},${C.tangerine})` : "rgba(255,255,255,0.05)", color: sel ? C.ink : "rgba(252,251,248,0.25)" }}>
                    {sel ? "Selected, scroll to approve" : "Click to select"}
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ─── 10. Signature Pad ────────────────────────────────────────────────────────
function SigPad({ onSign }: { onSign: (d: string | null) => void }) {
  const ref = useRef<HTMLCanvasElement>(null);
  const drawing = useRef(false);
  const last = useRef<{ x: number; y: number } | null>(null);
  const [has, setHas] = useState(false);

  const pos = (e: React.MouseEvent | React.TouchEvent, c: HTMLCanvasElement) => {
    const r = c.getBoundingClientRect();
    const sx = c.width / r.width, sy = c.height / r.height;
    if ("touches" in e) return { x: (e.touches[0].clientX - r.left) * sx, y: (e.touches[0].clientY - r.top) * sy };
    return { x: (e.clientX - r.left) * sx, y: (e.clientY - r.top) * sy };
  };

  const start = useCallback((e: React.MouseEvent | React.TouchEvent) => {
    e.preventDefault(); drawing.current = true; last.current = pos(e, ref.current!);
  }, []);

  const move = useCallback((e: React.MouseEvent | React.TouchEvent) => {
    if (!drawing.current || !ref.current) return; e.preventDefault();
    const ctx = ref.current.getContext("2d")!;
    const p = pos(e, ref.current);
    ctx.beginPath(); ctx.moveTo(last.current!.x, last.current!.y); ctx.lineTo(p.x, p.y);
    ctx.strokeStyle = C.tangerine; ctx.lineWidth = 2.5; ctx.lineCap = "round"; ctx.lineJoin = "round"; ctx.stroke();
    last.current = p; setHas(true); onSign(ref.current.toDataURL());
  }, [onSign]);

  const stop = useCallback(() => { drawing.current = false; last.current = null; }, []);

  const clear = () => {
    const c = ref.current; if (!c) return;
    c.getContext("2d")!.clearRect(0, 0, c.width, c.height);
    setHas(false); onSign(null);
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-1.5">
        <label style={{ fontFamily: F.ui, fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.2em", color: "rgba(252,251,248,0.35)", display: "flex", alignItems: "center", gap: 6 }} className="uppercase">
          <Pen size={10} style={{ color: C.tangerine }} /> Draw your signature
        </label>
        {has && (
          <button onClick={clear} style={{ fontFamily: F.ui, fontSize: "0.65rem", color: "rgba(252,251,248,0.3)", display: "flex", alignItems: "center", gap: 4 }} className="hover:text-white/60 transition-colors">
            <RotateCcw size={10} /> Clear
          </button>
        )}
      </div>
      <div style={{ position: "relative", borderRadius: 12, overflow: "hidden", border: `1px solid rgba(255,255,255,0.1)`, background: C.ink, touchAction: "none" }}>
        {!has && (
          <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", pointerEvents: "none" }}>
            <p style={{ fontFamily: F.serif, fontSize: "1.1rem", fontStyle: "italic", color: "rgba(252,251,248,0.12)" }}>Sign here</p>
          </div>
        )}
        <canvas ref={ref} width={600} height={110} className="w-full cursor-crosshair block" style={{ height: 90 }}
          onMouseDown={start} onMouseMove={move} onMouseUp={stop} onMouseLeave={stop}
          onTouchStart={start} onTouchMove={move} onTouchEnd={stop} />
        <div style={{ position: "absolute", bottom: 16, left: 24, right: 24, height: 1, background: "rgba(255,255,255,0.06)" }} />
      </div>
    </div>
  );
}

// ─── 11. Approval ─────────────────────────────────────────────────────────────
function Approval({ tier }: { tier: typeof TIERS[0] }) {
  const [name, setName] = useState("");
  const [sig, setSig] = useState<string | null>(null);
  const [done, setDone] = useState(false);
  const ok = name.trim().length > 0 && sig !== null;

  return (
    <section id="approval" style={{ background: `linear-gradient(135deg,${C.slate} 0%,${C.ink} 60%,${C.deep} 100%)` }} className="py-24 md:py-32 relative overflow-hidden">
      <div style={{ position: "absolute", inset: 0, background: `radial-gradient(ellipse at 30% 60%,rgba(224,86,31,0.1) 0%,transparent 60%)`, pointerEvents: "none" }} />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <Tag>Next Steps</Tag>
            <Rule />
            <H2 light>Let's give it a <em style={{ color: C.tangerine }}>place to land.</em></H2>
            <div className="mt-6 space-y-4">
              <Body light>
                Select your tier above, print your name, draw your signature, and click approve. A formal contract follows within 24 hours. Phase 1 kicks off the following Monday.
              </Body>
            </div>
            <div style={{ marginTop: 32, background: C.slate, border: `1px solid ${C.border}`, borderRadius: 16, padding: 20 }}>
              <p style={{ fontFamily: F.ui, fontSize: "0.62rem", fontWeight: 700, letterSpacing: "0.2em", color: C.teal }} className="uppercase mb-3">What happens after approval</p>
              {[
                ["Within 24 hours", "Formal contract sent for e-signature"],
                ["Monday after signing", "Kickoff call — 60 min strategy session"],
                ["Week 1", "Brand discovery + competitive research"],
                ["Week 3", "Logo + brand system delivered for review"],
                ["Week 7", "Website live + social profiles launched"],
                ["Week 10", "Launch campaign live, reporting begins"],
              ].map(([t, d]) => (
                <div key={t} className="flex items-start gap-3 mb-3">
                  <div style={{ width: 6, height: 6, borderRadius: "50%", background: C.tangerine, marginTop: 6, flexShrink: 0 }} />
                  <div>
                    <p style={{ fontFamily: F.ui, fontSize: "0.75rem", fontWeight: 700, color: C.paper }}>{t}</p>
                    <p style={{ fontFamily: F.body, fontSize: "0.72rem", color: "rgba(252,251,248,0.4)" }}>{d}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex items-center gap-2.5 mt-8">
              <Mark size={20} variant="tangerine" />
              <span style={{ fontFamily: F.ui, fontSize: "0.8rem", fontWeight: 700, color: "rgba(252,251,248,0.4)" }}>Karle <span style={{ color: C.tangerine }}>Kreatives</span></span>
            </div>
          </div>

          <div style={{ background: C.slate, border: `1px solid ${C.border}`, borderRadius: 24, padding: 32 }}>
            {!done ? (
              <>
                <p style={{ fontFamily: F.ui, fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.2em", color: C.teal }} className="uppercase mb-6">Approval Form</p>
                <div className="flex flex-col gap-5 mb-6">
                  {/* Selected tier */}
                  <div>
                    <label style={{ fontFamily: F.ui, fontSize: "0.62rem", fontWeight: 700, letterSpacing: "0.2em", color: "rgba(252,251,248,0.3)", display: "block", marginBottom: 6 }} className="uppercase">Selected Tier</label>
                    <div style={{ background: C.ink, border: `1px solid ${C.tangerine}40`, borderRadius: 12, padding: "12px 16px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                      <div>
                        <p style={{ fontFamily: F.body, fontSize: "0.85rem", fontWeight: 600, color: "rgba(252,251,248,0.8)" }}>{tier.name}</p>
                        <p style={{ fontFamily: F.ui, fontSize: "0.72rem", fontWeight: 700, color: C.tangerine }}>{tier.price}{tier.unit}</p>
                      </div>
                      <Check size={14} style={{ color: C.tangerine }} />
                    </div>
                  </div>
                  {/* Name */}
                  <div>
                    <label style={{ fontFamily: F.ui, fontSize: "0.62rem", fontWeight: 700, letterSpacing: "0.2em", color: "rgba(252,251,248,0.3)", display: "block", marginBottom: 6 }} className="uppercase">Print your full name</label>
                    <input type="text" value={name} onChange={e => setName(e.target.value)} placeholder="Full legal name"
                      style={{ width: "100%", background: C.ink, border: `1px solid rgba(255,255,255,0.1)`, borderRadius: 12, padding: "12px 16px", color: C.paper, fontFamily: F.body, fontSize: "0.9rem", outline: "none" }}
                      onFocus={e => (e.target.style.borderColor = `${C.tangerine}60`)}
                      onBlur={e => (e.target.style.borderColor = "rgba(255,255,255,0.1)")} />
                  </div>
                  {/* Signature */}
                  <SigPad onSign={setSig} />
                </div>
                <button onClick={() => { if (ok) setDone(true); }} disabled={!ok}
                  style={{ width: "100%", background: ok ? `linear-gradient(90deg,${C.coral},${C.tangerine},${C.gold})` : "rgba(255,255,255,0.06)", fontFamily: F.ui, fontSize: "0.82rem", fontWeight: 700, letterSpacing: "0.04em", color: ok ? C.ink : "rgba(252,251,248,0.2)", padding: "14px 0", borderRadius: 999, display: "flex", alignItems: "center", justifyContent: "center", gap: 8, transition: "all 0.2s", cursor: ok ? "pointer" : "not-allowed" }}>
                  Approve &amp; Start {tier.phase.split("·")[0].trim()}
                  <ArrowRight size={14} />
                </button>
                <p style={{ fontFamily: F.body, fontSize: "0.72rem", color: "rgba(252,251,248,0.2)", textAlign: "center", marginTop: 12, lineHeight: 1.6 }}>
                  Your printed name and drawn signature constitute a digital approval confirming agreement to the scope and pricing outlined in this proposal. A formal contract will follow.
                </p>
              </>
            ) : (
              <div style={{ textAlign: "center", padding: "24px 0" }}>
                <div style={{ width: 56, height: 56, borderRadius: "50%", background: `${C.teal}20`, border: `1px solid ${C.teal}50`, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 16px" }}>
                  <Check size={24} style={{ color: C.teal }} />
                </div>
                <p style={{ fontFamily: F.serif, fontSize: "1.8rem", color: C.paper, marginBottom: 8 }}>Cleared for takeoff.</p>
                <p style={{ fontFamily: F.body, fontSize: "0.9rem", color: "rgba(252,251,248,0.5)", marginBottom: 4 }}>Approved by <span style={{ color: "rgba(252,251,248,0.8)" }}>{name}</span></p>
                <p style={{ fontFamily: F.ui, fontSize: "0.75rem", fontWeight: 700, color: C.tangerine, marginBottom: 12 }}>{tier.name} at {tier.price}{tier.unit}</p>
                <p style={{ fontFamily: F.body, fontSize: "0.78rem", color: "rgba(252,251,248,0.3)" }}>Karle Kreatives will follow up with a formal contract within 24 hours.</p>
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
    <footer style={{ background: C.deep, borderTop: `1px solid ${C.border}` }} className="py-8">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <Mark size={16} variant="tangerine" />
          <span style={{ fontFamily: F.ui, fontSize: "0.8rem", fontWeight: 700, color: "rgba(252,251,248,0.3)" }}>Karle <span style={{ color: `${C.tangerine}70` }}>Kreatives</span></span>
        </div>
        <p style={{ fontFamily: F.body, fontSize: "0.72rem", color: "rgba(252,251,248,0.15)", textAlign: "center" }}>
          Confidential proposal prepared for Flightpath Teen Detox. 2026 Karle Kreatives. Not for distribution.
        </p>
        <p style={{ fontFamily: F.ui, fontSize: "0.72rem", color: "rgba(252,251,248,0.15)" }}>HDG 015</p>
      </div>
    </footer>
  );
}

// ─── Root ─────────────────────────────────────────────────────────────────────
export default function Home() {
  const [tier, setTier] = useState(TIERS[0]);
  return (
    <div className="min-h-screen">
      <Nav />
      <Hero />
      <Mission />
      <Brand />
      <ProjectPlan />
      <WebsitePlan />
      <SocialStrategy />
      <ContentExamples />
      <PaidAds />
      <Investment onSelect={setTier} />
      <Approval tier={tier} />
      <Footer />
    </div>
  );
}
