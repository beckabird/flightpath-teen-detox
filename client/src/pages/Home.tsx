/**
 * KARLE KREATIVES — Flightpath Teen Detox Brand Proposal
 * A proposal site, not the client's live site.
 * Presents: brand concept, deliverables, three engagement paths, pricing, and approval CTA.
 * Type: Instrument Serif (display) · Bricolage Grotesque (UI) · Hanken Grotesk (body)
 * Palette: Sunrise coral/tangerine/gold on twilight ink + warm paper
 */

import { useState } from "react";
import { Check, ChevronDown, ArrowRight } from "lucide-react";

// ─── Delta Mark ───────────────────────────────────────────────────────────────
function Delta({ size = 28, style }: { size?: number; style?: React.CSSProperties }) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none" aria-hidden="true" style={style}>
      <defs>
        <linearGradient id="pTL" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FFD36B" />
          <stop offset="100%" stopColor="#FF8A4C" />
        </linearGradient>
        <linearGradient id="pTR" x1="1" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FFB259" />
          <stop offset="100%" stopColor="#E0561F" />
        </linearGradient>
        <linearGradient id="pBL" x1="0" y1="1" x2="1" y2="0">
          <stop offset="0%" stopColor="#C2421F" />
          <stop offset="100%" stopColor="#E0561F" />
        </linearGradient>
        <linearGradient id="pBR" x1="1" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor="#8B2A0F" />
          <stop offset="100%" stopColor="#C2421F" />
        </linearGradient>
      </defs>
      <polygon points="40,6 6,68 40,50" fill="url(#pTL)" />
      <polygon points="40,6 74,68 40,50" fill="url(#pTR)" />
      <polygon points="40,50 6,68 26,74" fill="url(#pBL)" />
      <polygon points="40,50 74,68 54,74" fill="url(#pBR)" />
      <line x1="40" y1="6" x2="40" y2="50" stroke="#FFC65C" strokeWidth="1.2" opacity="0.55" />
    </svg>
  );
}

// ─── Eyebrow ──────────────────────────────────────────────────────────────────
function Eyebrow({ children, light = false, gold = false }: { children: React.ReactNode; light?: boolean; gold?: boolean }) {
  return (
    <p
      style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontSize: "0.65rem", letterSpacing: "0.24em" }}
      className={`font-semibold uppercase ${light ? "text-[#2FB6A6]" : gold ? "text-[#FFD36B]" : "text-[#2FB6A6]"}`}
    >
      {children}
    </p>
  );
}

// ─── Section Divider ─────────────────────────────────────────────────────────
function Divider() {
  return <div className="h-px w-12 bg-gradient-to-r from-[#FF8A4C] to-transparent my-5" />;
}

// ─── 1. Cover / Hero ─────────────────────────────────────────────────────────
function Cover() {
  return (
    <section className="bg-[#142028] min-h-screen flex flex-col relative overflow-hidden">
      {/* Top bar */}
      <div className="border-b border-white/[0.07] px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <Delta size={22} />
          <span style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }} className="text-white/80 text-sm font-bold tracking-tight">
            Karle <span className="text-[#FF8A4C]">Kreatives</span>
          </span>
        </div>
        <div className="flex items-center gap-6">
          <span style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }} className="text-white/25 text-xs tracking-widest uppercase">Brand Proposal</span>
          <span style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }} className="text-white/25 text-xs">Prepared for Flightpath Teen Detox</span>
        </div>
      </div>

      {/* Hero content */}
      <div className="flex-1 flex items-center">
        <div className="max-w-6xl mx-auto px-8 w-full grid md:grid-cols-2 gap-16 items-center py-20">
          <div>
            <Eyebrow>Brand Identity + Proposal</Eyebrow>
            <div className="mt-4 mb-6">
              <h1
                style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontSize: "clamp(3rem, 6vw, 5.5rem)", lineHeight: 1.06, letterSpacing: "-0.02em" }}
                className="text-[#FCFBF8]"
              >
                Flightpath<br />
                <em style={{ color: "#FFD36B" }}>Teen Detox.</em>
              </h1>
            </div>
            <p style={{ fontFamily: "'Hanken Grotesk', sans-serif" }} className="text-white/50 text-base leading-relaxed max-w-md mb-8">
              A complete brand foundation and a phased plan to launch it — visual identity, voice, and the marketing structure to carry it from opening day to a program at scale.
            </p>
            <div className="flex flex-wrap gap-3 text-xs" style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}>
              <div className="flex items-center gap-2 text-white/40">
                <span className="text-[#2FB6A6]">Karla &amp; Tyler</span>
                <span className="text-white/15">·</span>
                <span>Karle Kreatives</span>
              </div>
            </div>
          </div>

          {/* Brand preview card */}
          <div className="relative">
            <div
              className="absolute inset-0 rounded-3xl"
              style={{ background: "radial-gradient(ellipse at 60% 40%, rgba(224,86,31,0.18) 0%, transparent 65%)" }}
              aria-hidden="true"
            />
            <div className="relative bg-[#1B2A33] border border-white/[0.08] rounded-3xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <Delta size={40} />
                <div>
                  <p style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }} className="text-[#FCFBF8] font-bold text-lg tracking-tight">Flightpath</p>
                  <p style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }} className="text-[#FF8A4C] text-xs font-semibold tracking-widest uppercase">Teen Detox</p>
                </div>
              </div>
              <p style={{ fontFamily: "'Instrument Serif', serif" }} className="text-[#FCFBF8] text-xl italic leading-snug mb-5">
                "Recovery as a <span style={{ color: "#FF8A4C" }}>flight path</span> — a departure, a climb, and a safe place to land."
              </p>
              <div className="flex gap-2 flex-wrap">
                {["Safe", "Hopeful", "Grounded", "Human"].map((p) => (
                  <span key={p} style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }} className="text-[0.65rem] font-semibold tracking-widest uppercase text-white/40 border border-white/10 rounded-full px-3 py-1">{p}</span>
                ))}
              </div>
              {/* Color swatches */}
              <div className="flex gap-1.5 mt-5">
                {["#FF8A4C","#FFD36B","#E0561F","#C2421F","#142028","#1B2A33","#FCFBF8","#F4F0E7"].map((c) => (
                  <div key={c} className="w-7 h-7 rounded-full border border-white/10 flex-shrink-0" style={{ background: c }} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="flex flex-col items-center gap-1.5 pb-8 animate-bounce" aria-hidden="true">
        <span style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }} className="text-white/20 text-[0.6rem] tracking-widest uppercase">Scroll to explore</span>
        <ChevronDown size={14} className="text-white/20" />
      </div>
    </section>
  );
}

// ─── 2. Inside This Document (nav) ───────────────────────────────────────────
function InsideDoc() {
  const sections = ["The Brand", "Logo", "Color", "Type", "Voice", "Applications", "Engagement", "Investment"];
  return (
    <div className="bg-[#FCFBF8] border-b border-[#EAE5DB] py-3 overflow-x-auto">
      <div className="max-w-6xl mx-auto px-8 flex items-center gap-1">
        <span style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }} className="text-[#23292D]/30 text-[0.65rem] font-semibold tracking-widest uppercase mr-3 flex-shrink-0">Inside this document</span>
        {sections.map((s, i) => (
          <span key={s} className="flex items-center gap-1 flex-shrink-0">
            <a href={`#section-${s.toLowerCase().replace(/\s+/g, "-")}`} style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }} className="text-[#23292D]/50 hover:text-[#E0561F] text-[0.72rem] font-medium tracking-wide transition-colors no-underline">{s}</a>
            {i < sections.length - 1 && <span className="text-[#EAE5DB] mx-1">·</span>}
          </span>
        ))}
      </div>
    </div>
  );
}

// ─── 3. The Brand Concept ─────────────────────────────────────────────────────
function TheBrand() {
  const pillars = [
    { name: "Safe", desc: "Medical safety is non-negotiable. Every protocol is designed to minimize risk and maximize comfort during withdrawal." },
    { name: "Hopeful", desc: "We speak about the future with teens, not just the present crisis. Recovery has a destination — we help them see it." },
    { name: "Grounded", desc: "No promises we can't keep. Honest, evidence-informed care from day one." },
    { name: "Human", desc: "Behind every chart is a teenager with a story. Our staff are trained to see the person, not just the presenting problem." },
  ];
  return (
    <section id="section-the-brand" className="bg-[#F4F0E7] py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-8">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <Eyebrow>The Brand</Eyebrow>
            <Divider />
            <h2
              style={{ fontFamily: "'Instrument Serif', serif", fontSize: "clamp(2.2rem, 4vw, 3.4rem)", lineHeight: 1.1, letterSpacing: "-0.02em" }}
              className="text-[#142028] mb-6"
            >
              Recovery as a <em style={{ color: "#E0561F" }}>flight path</em> — a departure, a climb, and a safe place to land.
            </h2>
            <p style={{ fontFamily: "'Hanken Grotesk', sans-serif" }} className="text-[#23292D]/60 text-base leading-relaxed mb-4">
              Flightpath leans into the idea that recovery isn't a fall from grace — it's a journey with a destination. For an adolescent, it positions a new kind of power: the teen isn't just a passenger. They're learning to navigate.
            </p>
            <p style={{ fontFamily: "'Hanken Grotesk', sans-serif" }} className="text-[#23292D]/60 text-base leading-relaxed">
              This identity is sophisticated but never clinical — an ascending delta wing, warm sunrise colors, and an editorial voice that reads more trustworthy than clinical, human enough for families.
            </p>
          </div>
          <div className="bg-[#142028] rounded-2xl p-7">
            <p style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }} className="text-[#2FB6A6] text-[0.65rem] font-bold tracking-[0.2em] uppercase mb-5">Brand Pillars</p>
            <div className="flex flex-col gap-0">
              {pillars.map((p, i) => (
                <div key={p.name} className={`py-4 ${i < pillars.length - 1 ? "border-b border-white/[0.06]" : ""}`}>
                  <p style={{ fontFamily: "'Instrument Serif', serif" }} className="text-[#FCFBF8] text-lg mb-1">{p.name}</p>
                  <p style={{ fontFamily: "'Hanken Grotesk', sans-serif" }} className="text-white/40 text-sm leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── 4. Logo ──────────────────────────────────────────────────────────────────
function LogoSection() {
  return (
    <section id="section-logo" className="bg-[#FCFBF8] py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-8">
        <Eyebrow>Logo Design</Eyebrow>
        <Divider />
        <h2 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "clamp(2rem, 3.5vw, 3rem)", lineHeight: 1.1, letterSpacing: "-0.02em" }} className="text-[#142028] mb-12">
          The mark. The lockup. The system.
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {/* Primary lockup — dark */}
          <div className="col-span-2 bg-[#142028] rounded-2xl p-10 flex flex-col items-center justify-center gap-4">
            <div className="flex items-center gap-3">
              <Delta size={48} />
              <div>
                <p style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }} className="text-[#FCFBF8] font-bold text-2xl tracking-tight">Flightpath</p>
                <p style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }} className="text-[#FF8A4C] text-xs font-semibold tracking-[0.2em] uppercase">Teen Detox</p>
              </div>
            </div>
            <p style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }} className="text-white/25 text-[0.65rem] tracking-widest uppercase">Primary — Dark</p>
          </div>
          {/* Primary lockup — light */}
          <div className="col-span-2 bg-[#F4F0E7] rounded-2xl p-10 flex flex-col items-center justify-center gap-4 border border-[#EAE5DB]">
            <div className="flex items-center gap-3">
              <Delta size={48} />
              <div>
                <p style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }} className="text-[#142028] font-bold text-2xl tracking-tight">Flightpath</p>
                <p style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }} className="text-[#E0561F] text-xs font-semibold tracking-[0.2em] uppercase">Teen Detox</p>
              </div>
            </div>
            <p style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }} className="text-[#23292D]/25 text-[0.65rem] tracking-widest uppercase">Primary — Light</p>
          </div>
          {/* Icon only — dark */}
          <div className="bg-[#1B2A33] rounded-2xl p-8 flex flex-col items-center justify-center gap-3">
            <Delta size={52} />
            <p style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }} className="text-white/25 text-[0.65rem] tracking-widest uppercase">Icon</p>
          </div>
          {/* Icon — sunrise bg */}
          <div className="rounded-2xl p-8 flex flex-col items-center justify-center gap-3" style={{ background: "linear-gradient(135deg, #E0561F, #FF8A4C, #FFD36B)" }}>
            <Delta size={52} />
            <p style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }} className="text-[#142028]/40 text-[0.65rem] tracking-widest uppercase">Sunrise</p>
          </div>
          {/* Reversed white */}
          <div className="bg-[#E0561F] rounded-2xl p-8 flex flex-col items-center justify-center gap-3">
            <svg width="52" height="52" viewBox="0 0 80 80" fill="none" aria-hidden="true">
              <polygon points="40,6 6,68 40,50 74,68" fill="rgba(255,255,255,0.9)" />
              <polygon points="40,50 6,68 26,74" fill="rgba(255,255,255,0.5)" />
              <polygon points="40,50 74,68 54,74" fill="rgba(255,255,255,0.65)" />
            </svg>
            <p style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }} className="text-white/40 text-[0.65rem] tracking-widest uppercase">Reversed</p>
          </div>
          {/* 3-color label */}
          <div className="bg-[#FCFBF8] border border-[#EAE5DB] rounded-2xl p-8 flex flex-col items-center justify-center gap-3">
            <div className="flex items-center gap-1.5">
              <Delta size={20} />
              <span style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }} className="text-[#142028] font-bold text-sm">Flightpath</span>
            </div>
            <p style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }} className="text-[#23292D]/25 text-[0.65rem] tracking-widest uppercase">3-Color Label</p>
          </div>
        </div>
        <p style={{ fontFamily: "'Hanken Grotesk', sans-serif" }} className="text-[#23292D]/40 text-sm mt-6 leading-relaxed max-w-2xl">
          Clear space equal to the width of the delta mark on all sides. Minimum display size 24px. The faceted delta references both the aviation delta wing and the mathematical symbol for change — appropriate for a program built around transformation.
        </p>
      </div>
    </section>
  );
}

// ─── 5. Color ─────────────────────────────────────────────────────────────────
function ColorSection() {
  const palette = [
    { name: "Tangerine", hex: "#FF8A4C", role: "Primary brand" },
    { name: "Sand", hex: "#FFD36B", role: "Accent / Gold" },
    { name: "Coral", hex: "#E0561F", role: "CTA / Emphasis" },
    { name: "Ember", hex: "#C2421F", role: "Deep accent" },
    { name: "Twilight", hex: "#142028", role: "Primary dark" },
    { name: "Slate", hex: "#1B2A33", role: "Secondary dark" },
    { name: "Paper", hex: "#FCFBF8", role: "Light base" },
    { name: "Cream", hex: "#F4F0E7", role: "Warm background" },
  ];
  return (
    <section id="section-color" className="bg-[#142028] py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-8">
        <Eyebrow light>Color</Eyebrow>
        <Divider />
        <h2 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "clamp(2rem, 3.5vw, 3rem)", lineHeight: 1.1, letterSpacing: "-0.02em" }} className="text-[#FCFBF8] mb-4">
          A sunrise palette. Warm structure and a deep twilight base.
        </h2>
        <p style={{ fontFamily: "'Hanken Grotesk', sans-serif" }} className="text-white/45 text-base leading-relaxed mb-10 max-w-xl">
          The signature gradient turns ember into gold — the light of a runway at sunrise. For a teen, it doesn't look clinical. For a parent, it looks trustworthy.
        </p>
        {/* Gradient bar */}
        <div className="h-14 rounded-xl mb-8" style={{ background: "linear-gradient(90deg, #C2421F 0%, #E0561F 20%, #FF8A4C 45%, #FFB259 65%, #FFD36B 100%)" }} />
        <div className="grid grid-cols-4 md:grid-cols-8 gap-3">
          {palette.map((c) => (
            <div key={c.name}>
              <div className="h-16 rounded-xl mb-2 border border-white/[0.07]" style={{ background: c.hex }} />
              <p style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }} className="text-[#FCFBF8] text-xs font-semibold">{c.name}</p>
              <p style={{ fontFamily: "'Hanken Grotesk', sans-serif" }} className="text-white/30 text-[0.65rem]">{c.hex}</p>
              <p style={{ fontFamily: "'Hanken Grotesk', sans-serif" }} className="text-white/25 text-[0.6rem]">{c.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── 6. Typography ────────────────────────────────────────────────────────────
function TypeSection() {
  return (
    <section id="section-type" className="bg-[#FCFBF8] py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-8">
        <Eyebrow>Typography</Eyebrow>
        <Divider />
        <h2 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "clamp(2rem, 3.5vw, 3rem)", lineHeight: 1.1, letterSpacing: "-0.02em" }} className="text-[#142028] mb-12">
          Three voices. One system.
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-[#F4F0E7] rounded-2xl p-7 border border-[#EAE5DB]">
            <p style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }} className="text-[#2FB6A6] text-[0.65rem] font-bold tracking-widest uppercase mb-4">Display</p>
            <p style={{ fontFamily: "'Instrument Serif', serif", fontSize: "3.5rem", lineHeight: 1 }} className="text-[#142028] mb-4">Aa</p>
            <p style={{ fontFamily: "'Instrument Serif', serif" }} className="text-[#142028] text-lg mb-3">Flightpath</p>
            <p style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }} className="text-[#23292D]/50 text-xs font-semibold">Instrument Serif</p>
            <p style={{ fontFamily: "'Hanken Grotesk', sans-serif" }} className="text-[#23292D]/35 text-xs mt-1">Headlines, hero text, pull quotes</p>
          </div>
          <div className="bg-[#F4F0E7] rounded-2xl p-7 border border-[#EAE5DB]">
            <p style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }} className="text-[#2FB6A6] text-[0.65rem] font-bold tracking-widest uppercase mb-4">UI / Eyebrows</p>
            <p style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontSize: "3.5rem", lineHeight: 1, fontWeight: 700 }} className="text-[#142028] mb-4">Aa</p>
            <p style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }} className="text-[#142028] text-lg font-bold mb-3">Flightpath</p>
            <p style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }} className="text-[#23292D]/50 text-xs font-semibold">Bricolage Grotesque</p>
            <p style={{ fontFamily: "'Hanken Grotesk', sans-serif" }} className="text-[#23292D]/35 text-xs mt-1">Labels, buttons, navigation, eyebrows</p>
          </div>
          <div className="bg-[#F4F0E7] rounded-2xl p-7 border border-[#EAE5DB]">
            <p style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }} className="text-[#2FB6A6] text-[0.65rem] font-bold tracking-widest uppercase mb-4">Body</p>
            <p style={{ fontFamily: "'Hanken Grotesk', sans-serif", fontSize: "3.5rem", lineHeight: 1, fontWeight: 400 }} className="text-[#142028] mb-4">Aa</p>
            <p style={{ fontFamily: "'Hanken Grotesk', sans-serif" }} className="text-[#142028] text-lg mb-3">Flightpath</p>
            <p style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }} className="text-[#23292D]/50 text-xs font-semibold">Hanken Grotesk</p>
            <p style={{ fontFamily: "'Hanken Grotesk', sans-serif" }} className="text-[#23292D]/35 text-xs mt-1">Body copy, descriptions, legal</p>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── 7. Voice & Messaging ─────────────────────────────────────────────────────
function VoiceSection() {
  const examples = [
    { label: "Hero headline", text: "A safe place to land." },
    { label: "Subhead", text: "Medically supervised adolescent detox and stabilization. Genuinely human care for teens and the families who love them." },
    { label: "For families", text: "The hardest part is the call. We'll take it from there." },
    { label: "Admissions CTA", text: "Today recovery has a starting point. This is a good one." },
  ];
  return (
    <section id="section-voice" className="bg-[#1B2A33] py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-8">
        <Eyebrow light>Voice &amp; Messaging</Eyebrow>
        <Divider />
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "clamp(2rem, 3.5vw, 3rem)", lineHeight: 1.1, letterSpacing: "-0.02em" }} className="text-[#FCFBF8] mb-5">
              Warm, plain-spoken, and <em style={{ color: "#FF8A4C" }}>outcome-first.</em>
            </h2>
            <p style={{ fontFamily: "'Hanken Grotesk', sans-serif" }} className="text-white/50 text-base leading-relaxed mb-4">
              We speak to the parent who is scared and the teen who is exhausted, and the clinician who needs to trust us. No jargon. No false hope. No language that overstates outcomes.
            </p>
            <p style={{ fontFamily: "'Hanken Grotesk', sans-serif" }} className="text-white/50 text-base leading-relaxed">
              Lead with more than the teen. Lead with the family. Sentences that feel like a hand on the shoulder, not a brochure. Confident without being clinical. Structured without being cold.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            {examples.map((e) => (
              <div key={e.label} className="bg-[#142028] rounded-xl p-5 border border-white/[0.06]">
                <p style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }} className="text-[#2FB6A6] text-[0.62rem] font-bold tracking-widest uppercase mb-2">{e.label}</p>
                <p style={{ fontFamily: "'Instrument Serif', serif" }} className="text-[#FCFBF8] text-base italic leading-snug">"{e.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── 8. Applications ─────────────────────────────────────────────────────────
function Applications() {
  return (
    <section id="section-applications" className="bg-[#F4F0E7] py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-8">
        <Eyebrow>Applications</Eyebrow>
        <Divider />
        <h2 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "clamp(2rem, 3.5vw, 3rem)", lineHeight: 1.1, letterSpacing: "-0.02em" }} className="text-[#142028] mb-12">
          How the brand lives in the world.
        </h2>
        <div className="grid md:grid-cols-3 gap-5">
          {/* Website preview */}
          <div className="md:col-span-2 bg-[#142028] rounded-2xl overflow-hidden border border-white/[0.07]">
            <div className="bg-[#0F1A22] px-4 py-2.5 flex items-center gap-2 border-b border-white/[0.06]">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
              </div>
              <div className="flex-1 bg-white/[0.06] rounded-full px-3 py-0.5 mx-2">
                <span style={{ fontFamily: "'Hanken Grotesk', sans-serif" }} className="text-white/20 text-[0.6rem]">flightpathteendetox.com</span>
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-2">
                  <Delta size={18} />
                  <span style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }} className="text-white text-xs font-bold">Flightpath <span className="text-[#FF8A4C]">Teen Detox</span></span>
                </div>
                <div className="rounded-full px-3 py-1 text-[0.6rem] font-bold" style={{ background: "linear-gradient(90deg, #E0561F, #FF8A4C, #FFD36B)", color: "#142028", fontFamily: "'Bricolage Grotesque', sans-serif" }}>Verify your benefits</div>
              </div>
              <p style={{ fontFamily: "'Instrument Serif', serif", fontSize: "1.8rem", lineHeight: 1.1 }} className="text-[#FCFBF8] mb-2">A safe place<br />to <em style={{ color: "#FFD36B" }}>land.</em></p>
              <p style={{ fontFamily: "'Hanken Grotesk', sans-serif" }} className="text-white/40 text-xs leading-relaxed mb-4">Medically supervised adolescent detox and stabilization. Genuinely human care.</p>
              <div className="flex gap-2">
                <div className="rounded-full px-3 py-1.5 text-[0.65rem] font-bold" style={{ background: "linear-gradient(90deg, #E0561F, #FF8A4C)", color: "#142028", fontFamily: "'Bricolage Grotesque', sans-serif" }}>Talk to our team</div>
                <div className="rounded-full px-3 py-1.5 text-[0.65rem] font-semibold border border-white/20 text-white/60" style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}>How it works</div>
              </div>
            </div>
          </div>
          {/* Icon / badge */}
          <div className="flex flex-col gap-4">
            <div className="bg-[#142028] rounded-2xl p-6 flex flex-col items-center justify-center gap-3 flex-1">
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center" style={{ background: "linear-gradient(135deg, #E0561F, #FF8A4C, #FFD36B)" }}>
                <Delta size={36} />
              </div>
              <p style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }} className="text-white/30 text-[0.65rem] tracking-widest uppercase">App Icon / Favicon</p>
            </div>
            <div className="bg-[#E0561F] rounded-2xl p-6 flex flex-col items-center justify-center gap-2">
              <svg width="36" height="36" viewBox="0 0 80 80" fill="none" aria-hidden="true">
                <polygon points="40,6 6,68 40,50 74,68" fill="rgba(255,255,255,0.9)" />
                <polygon points="40,50 6,68 26,74" fill="rgba(255,255,255,0.5)" />
                <polygon points="40,50 74,68 54,74" fill="rgba(255,255,255,0.65)" />
              </svg>
              <p style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }} className="text-white/50 text-[0.65rem] tracking-widest uppercase">Reversed / Coral</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── 9. Engagement Paths ─────────────────────────────────────────────────────
function Engagement() {
  return (
    <section id="section-engagement" className="bg-[#142028] py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-8">
        <Eyebrow gold>Engagement</Eyebrow>
        <Divider />
        <h2 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "clamp(2rem, 3.5vw, 3rem)", lineHeight: 1.1, letterSpacing: "-0.02em" }} className="text-[#FCFBF8] mb-4">
          A full-stack marketing engagement — not a monthly retainer.
        </h2>
        <p style={{ fontFamily: "'Hanken Grotesk', sans-serif" }} className="text-white/45 text-base leading-relaxed mb-12 max-w-2xl">
          Direction: brand strategy, brand creation, and hands-on execution, structured to start here and scale into a full-time role as the program grows.
        </p>
        {/* Three phases */}
        <div className="grid md:grid-cols-3 gap-1 mb-12">
          {[
            { num: "Phase 1", label: "Departure", sub: "Brand Buildout", desc: "Identity to launch. One-time engagement to build the full brand foundation and get the program to market." },
            { num: "Phase 2", label: "Climb", sub: "Contract Retainer", desc: "Monthly marketing, social, SEO, and outreach. Ongoing execution structured to grow census." },
            { num: "Phase 3", label: "Cruise", sub: "Part-Time Role", desc: "Embedded Director of Marketing with benefits. Strategy to systems, full ownership of the marketing function." },
          ].map((p, i) => (
            <div key={p.num} className={`p-6 ${i === 0 ? "rounded-l-2xl" : i === 2 ? "rounded-r-2xl" : ""} ${i === 1 ? "bg-[#1B2A33]" : "bg-[#1B2A33]/60"} border border-white/[0.06]`}>
              <div className="w-10 h-10 rounded-full flex items-center justify-center mb-4" style={{ background: "linear-gradient(135deg, #E0561F, #FF8A4C, #FFD36B)" }}>
                <span style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }} className="text-[#142028] text-xs font-extrabold">{i + 1}</span>
              </div>
              <p style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }} className="text-[#2FB6A6] text-[0.65rem] font-bold tracking-widest uppercase mb-1">{p.num} · {p.label}</p>
              <p style={{ fontFamily: "'Instrument Serif', serif" }} className="text-[#FCFBF8] text-xl mb-3">{p.sub}</p>
              <p style={{ fontFamily: "'Hanken Grotesk', sans-serif" }} className="text-white/40 text-sm leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── 10. Investment / Pricing ─────────────────────────────────────────────────
function Investment() {
  const phase1Deliverables = [
    ["Brand strategy", "Name, messaging, guidelines"],
    ["Website", "Design + development"],
    ["Logo + visual system", "Full asset suite"],
    ["Messaging", "Voice, copy framework"],
    ["Digital presence", "Google setup, email signature templates"],
    ["Marketing strategy", "Launch plan"],
    ["Reporting", "Baseline analytics setup"],
  ];
  const phase2Deliverables = [
    ["Content creation", "Monthly content calendar"],
    ["Ads management", "Paid social + search"],
    ["Social media management", "SEO, Google Business"],
    ["Monthly outreach", "Campaigns, teen plan"],
    ["Monthly SEO reporting", "Rankings + traffic"],
  ];
  const phase3Deliverables = [
    ["Director of Marketing title", "With benefits"],
    ["Ongoing strategy", "Systems to scale"],
    ["Social media management", "SEO, Google Business"],
    ["Monthly outreach campaigns", "Teen plan"],
    ["Monthly SEO reporting", "Full analytics"],
  ];

  return (
    <section id="section-investment" className="bg-[#FCFBF8] py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-8">
        <Eyebrow>Investment</Eyebrow>
        <Divider />
        <h2 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "clamp(2rem, 3.5vw, 3rem)", lineHeight: 1.1, letterSpacing: "-0.02em" }} className="text-[#142028] mb-4">
          All three reflect a <em style={{ color: "#E0561F" }}>below-rate discount</em> for the mission.
        </h2>
        <p style={{ fontFamily: "'Hanken Grotesk', sans-serif" }} className="text-[#23292D]/55 text-base leading-relaxed mb-12 max-w-2xl">
          Standard rates for three-piece brand buildouts range from $8,000–$12,000. This is mission-driven pricing. An intentional decision to build something that matters at a rate that makes it possible.
        </p>

        <div className="grid md:grid-cols-3 gap-5">
          {/* Phase 1 */}
          <div className="bg-[#142028] rounded-2xl overflow-hidden">
            <div className="p-6 border-b border-white/[0.07]">
              <p style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }} className="text-[#2FB6A6] text-[0.65rem] font-bold tracking-widest uppercase mb-2">Phase 1 · Departure</p>
              <p style={{ fontFamily: "'Instrument Serif', serif" }} className="text-[#FCFBF8] text-xl mb-1">Brand Buildout</p>
              <div className="flex items-baseline gap-1 mt-3">
                <span style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }} className="text-[#FFD36B] text-4xl font-extrabold">$5,000</span>
                <span style={{ fontFamily: "'Hanken Grotesk', sans-serif" }} className="text-white/30 text-sm">one-time</span>
              </div>
              <p style={{ fontFamily: "'Hanken Grotesk', sans-serif" }} className="text-white/35 text-xs mt-1">50% on approval · 50% on delivery</p>
            </div>
            <div className="p-6">
              <div className="flex flex-col gap-2.5">
                {phase1Deliverables.map(([item, sub]) => (
                  <div key={item} className="flex items-start gap-2.5">
                    <div className="w-4 h-4 rounded-full bg-[#2FB6A6]/20 border border-[#2FB6A6]/40 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check size={8} className="text-[#2FB6A6]" />
                    </div>
                    <div>
                      <p style={{ fontFamily: "'Hanken Grotesk', sans-serif" }} className="text-white/80 text-sm font-medium">{item}</p>
                      <p style={{ fontFamily: "'Hanken Grotesk', sans-serif" }} className="text-white/30 text-xs">{sub}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Phase 2 */}
          <div className="bg-[#1B2A33] rounded-2xl overflow-hidden border-2 border-[#FF8A4C]/40 relative">
            <div className="absolute top-4 right-4">
              <span style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }} className="text-[0.6rem] font-bold tracking-widest uppercase bg-[#FF8A4C]/20 text-[#FF8A4C] border border-[#FF8A4C]/30 rounded-full px-2.5 py-0.5">Recommended</span>
            </div>
            <div className="p-6 border-b border-white/[0.07]">
              <p style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }} className="text-[#2FB6A6] text-[0.65rem] font-bold tracking-widest uppercase mb-2">Phase 2 · Climb</p>
              <p style={{ fontFamily: "'Instrument Serif', serif" }} className="text-[#FCFBF8] text-xl mb-1">Contract Retainer</p>
              <div className="flex items-baseline gap-1 mt-3">
                <span style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }} className="text-[#FFD36B] text-4xl font-extrabold">$3.5–5K</span>
                <span style={{ fontFamily: "'Hanken Grotesk', sans-serif" }} className="text-white/30 text-sm">/mo</span>
              </div>
              <p style={{ fontFamily: "'Hanken Grotesk', sans-serif" }} className="text-white/35 text-xs mt-1">After Phase 1 · 3-month minimum</p>
            </div>
            <div className="p-6">
              <div className="flex flex-col gap-2.5">
                {phase2Deliverables.map(([item, sub]) => (
                  <div key={item} className="flex items-start gap-2.5">
                    <div className="w-4 h-4 rounded-full bg-[#2FB6A6]/20 border border-[#2FB6A6]/40 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check size={8} className="text-[#2FB6A6]" />
                    </div>
                    <div>
                      <p style={{ fontFamily: "'Hanken Grotesk', sans-serif" }} className="text-white/80 text-sm font-medium">{item}</p>
                      <p style={{ fontFamily: "'Hanken Grotesk', sans-serif" }} className="text-white/30 text-xs">{sub}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Phase 3 */}
          <div className="bg-[#142028] rounded-2xl overflow-hidden">
            <div className="p-6 border-b border-white/[0.07]">
              <p style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }} className="text-[#2FB6A6] text-[0.65rem] font-bold tracking-widest uppercase mb-2">Phase 3 · Cruise</p>
              <p style={{ fontFamily: "'Instrument Serif', serif" }} className="text-[#FCFBF8] text-xl mb-1">Part-Time Role</p>
              <div className="flex items-baseline gap-1 mt-3">
                <span style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }} className="text-[#FFD36B] text-4xl font-extrabold">$90–115K</span>
                <span style={{ fontFamily: "'Hanken Grotesk', sans-serif" }} className="text-white/30 text-sm">/yr</span>
              </div>
              <p style={{ fontFamily: "'Hanken Grotesk', sans-serif" }} className="text-white/35 text-xs mt-1">Director of Marketing · with benefits</p>
            </div>
            <div className="p-6">
              <div className="flex flex-col gap-2.5">
                {phase3Deliverables.map(([item, sub]) => (
                  <div key={item} className="flex items-start gap-2.5">
                    <div className="w-4 h-4 rounded-full bg-[#2FB6A6]/20 border border-[#2FB6A6]/40 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check size={8} className="text-[#2FB6A6]" />
                    </div>
                    <div>
                      <p style={{ fontFamily: "'Hanken Grotesk', sans-serif" }} className="text-white/80 text-sm font-medium">{item}</p>
                      <p style={{ fontFamily: "'Hanken Grotesk', sans-serif" }} className="text-white/30 text-xs">{sub}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── 11. Approval / Close ─────────────────────────────────────────────────────
function Approval() {
  const [name, setName] = useState("");
  const [approved, setApproved] = useState(false);

  return (
    <section
      id="section-approval"
      className="relative py-20 md:py-28 overflow-hidden"
      style={{ background: "linear-gradient(135deg, #1B2A33 0%, #142028 60%, #0F1A22 100%)" }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at 30% 60%, rgba(224,86,31,0.12) 0%, transparent 60%)" }}
        aria-hidden="true"
      />
      <div className="max-w-6xl mx-auto px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <Eyebrow gold>Next Steps</Eyebrow>
            <Divider />
            <h2 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "clamp(2.2rem, 4vw, 3.5rem)", lineHeight: 1.1, letterSpacing: "-0.02em" }} className="text-[#FCFBF8] mb-5">
              Let's give it a <em style={{ color: "#FF8A4C" }}>place to land.</em>
            </h2>
            <p style={{ fontFamily: "'Hanken Grotesk', sans-serif" }} className="text-white/50 text-base leading-relaxed mb-6">
              An approval is the permission — verbal, written, or by signature — both parties confirm the scope, pricing, and terms outlined here. A formal contract follows.
            </p>
            <div className="flex items-center gap-3 mt-8">
              <Delta size={22} />
              <span style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }} className="text-white/40 text-sm font-bold">Karle <span className="text-[#FF8A4C]">Kreatives</span></span>
            </div>
          </div>

          <div className="bg-[#1B2A33] border border-white/[0.08] rounded-2xl p-7">
            {!approved ? (
              <>
                <p style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }} className="text-[#2FB6A6] text-[0.65rem] font-bold tracking-widest uppercase mb-5">Approvals</p>
                <div className="flex flex-col gap-4 mb-6">
                  <div>
                    <label style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }} className="text-white/35 text-xs font-semibold tracking-widest uppercase block mb-1.5">Client Name / Signature</label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Type your full name"
                      className="w-full bg-[#142028] border border-white/[0.1] rounded-xl px-4 py-3 text-[#FCFBF8] placeholder-white/20 text-sm focus:outline-none focus:border-[#FF8A4C]/50 transition-colors"
                      style={{ fontFamily: "'Hanken Grotesk', sans-serif" }}
                    />
                  </div>
                  <div>
                    <label style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }} className="text-white/35 text-xs font-semibold tracking-widest uppercase block mb-1.5">Approved Project</label>
                    <div className="bg-[#142028] border border-white/[0.07] rounded-xl px-4 py-3">
                      <p style={{ fontFamily: "'Hanken Grotesk', sans-serif" }} className="text-white/50 text-sm">Flightpath Teen Detox — Phase 1 Brand Buildout</p>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => { if (name.trim()) setApproved(true); }}
                  style={{ background: "linear-gradient(90deg, #E0561F, #FF8A4C, #FFD36B)", fontFamily: "'Bricolage Grotesque', sans-serif" }}
                  className="w-full text-[#142028] text-sm font-bold tracking-wide py-3.5 rounded-full flex items-center justify-center gap-2 hover:opacity-90 active:scale-[0.97] transition-all disabled:opacity-40"
                  disabled={!name.trim()}
                >
                  Approve &amp; Start Phase 1
                  <ArrowRight size={14} />
                </button>
                <p style={{ fontFamily: "'Hanken Grotesk', sans-serif" }} className="text-white/20 text-xs mt-3 text-center leading-relaxed">
                  Typing your name constitutes a digital signature confirming agreement to the scope and pricing outlined in this proposal. A formal contract will follow.
                </p>
              </>
            ) : (
              <div className="text-center py-6">
                <div className="w-14 h-14 rounded-full bg-[#2FB6A6]/20 border border-[#2FB6A6]/40 flex items-center justify-center mx-auto mb-4">
                  <Check size={24} className="text-[#2FB6A6]" />
                </div>
                <p style={{ fontFamily: "'Instrument Serif', serif" }} className="text-[#FCFBF8] text-2xl mb-2">Cleared for takeoff.</p>
                <p style={{ fontFamily: "'Hanken Grotesk', sans-serif" }} className="text-white/45 text-sm leading-relaxed mb-1">Approved by <span className="text-white/70">{name}</span></p>
                <p style={{ fontFamily: "'Hanken Grotesk', sans-serif" }} className="text-white/30 text-xs">Karle Kreatives will follow up with a formal contract within 24 hours.</p>
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
    <footer className="bg-[#0F1A22] border-t border-white/[0.05] py-6">
      <div className="max-w-6xl mx-auto px-8 flex flex-col md:flex-row items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <Delta size={16} />
          <span style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }} className="text-white/30 text-xs font-bold">Karle <span className="text-[#FF8A4C]/50">Kreatives</span></span>
        </div>
        <p style={{ fontFamily: "'Hanken Grotesk', sans-serif" }} className="text-white/15 text-xs text-center">
          Confidential proposal prepared for Flightpath Teen Detox · © 2026 Karle Kreatives · Not for distribution
        </p>
        <p style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }} className="text-white/15 text-xs">HDG 015</p>
      </div>
    </footer>
  );
}

// ─── Main Export ──────────────────────────────────────────────────────────────
export default function Home() {
  return (
    <div className="min-h-screen">
      <Cover />
      <InsideDoc />
      <TheBrand />
      <LogoSection />
      <ColorSection />
      <TypeSection />
      <VoiceSection />
      <Applications />
      <Engagement />
      <Investment />
      <Approval />
      <Footer />
    </div>
  );
}
