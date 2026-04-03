"use client";

import { useState } from "react";

function NavbarMockup({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full rounded-xl bg-bg-surface/80 backdrop-blur-xl border border-border overflow-hidden">
      <div className="h-12 px-4 flex items-center justify-between gap-4 whitespace-nowrap">
        {children}
        <div className="flex items-center gap-4 shrink-0">
          <span className="text-[10px] text-text-muted hidden sm:inline">Pricing</span>
          <span className="text-[10px] text-text-muted hidden sm:inline">Cases</span>
          <span className="text-white/90 px-2.5 py-1 rounded-md text-[9px] font-semibold shrink-0"
            style={{ background: "linear-gradient(135deg, var(--gradient-from), var(--gradient-via))" }}>
            Get Started
          </span>
        </div>
      </div>
    </div>
  );
}

export default function LogoPreview() {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-bg p-6 sm:p-12">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-text-muted text-xs uppercase tracking-[0.3em] mb-3">Review Boosters</p>
          <h1 className="font-heading text-4xl sm:text-5xl text-text-primary mb-4">
            Logo Variants
          </h1>
          <p className="text-text-secondary">Pick one, we&apos;ll implement it everywhere</p>
        </div>

        <div className="grid sm:grid-cols-2 gap-8">

          {/* ──── VARIANT 1: Overlapping Serif ──── */}
          <button
            onClick={() => setSelected(1)}
            className={`glass-card p-8 flex flex-col gap-8 text-left transition-all cursor-pointer ${
              selected === 1 ? "!border-accent shadow-[0_0_40px_var(--glow-soft)]" : ""
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="text-[10px] text-text-muted uppercase tracking-[0.25em] font-semibold">01</span>
              {selected === 1 && <span className="text-[10px] text-accent uppercase tracking-widest font-semibold">Selected</span>}
            </div>

            <div className="flex items-center justify-center py-8">
              <div className="flex items-center gap-3">
                <span className="relative text-5xl font-heading">
                  <span className="text-text-primary">R</span>
                  <span className="gradient-text -ml-2">B</span>
                </span>
                <div className="flex flex-col">
                  <span className="text-sm font-semibold text-text-primary tracking-wide leading-none">Review</span>
                  <span className="text-sm font-semibold gradient-text tracking-wide leading-none">Boosters</span>
                </div>
              </div>
            </div>

            <NavbarMockup>
              <div className="flex items-center gap-1.5 shrink-0">
                <span className="relative text-base font-heading whitespace-nowrap">
                  <span className="text-text-primary">R</span>
                  <span className="gradient-text -ml-0.5">B</span>
                </span>
                <span className="text-[10px] font-semibold text-text-primary/80 whitespace-nowrap">Review Boosters</span>
              </div>
            </NavbarMockup>

            <p className="text-text-muted text-xs">Overlapping serif — R and B merge together, subtle depth. Two-line wordmark.</p>
          </button>

          {/* ──── VARIANT 2: Glowing Orb ──── */}
          <button
            onClick={() => setSelected(2)}
            className={`glass-card p-8 flex flex-col gap-8 text-left transition-all cursor-pointer ${
              selected === 2 ? "!border-accent shadow-[0_0_40px_var(--glow-soft)]" : ""
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="text-[10px] text-text-muted uppercase tracking-[0.25em] font-semibold">02</span>
              {selected === 2 && <span className="text-[10px] text-accent uppercase tracking-widest font-semibold">Selected</span>}
            </div>

            <div className="flex items-center justify-center py-8">
              <div className="flex items-center gap-4">
                <div className="relative w-16 h-16 flex items-center justify-center">
                  <div className="absolute inset-0 rounded-2xl opacity-40"
                    style={{
                      background: "radial-gradient(circle at 30% 30%, var(--accent-glow), var(--accent) 50%, transparent 70%)",
                      filter: "blur(8px)",
                    }}
                  />
                  <div className="relative w-14 h-14 rounded-2xl flex items-center justify-center border border-white/10"
                    style={{ background: "linear-gradient(135deg, rgba(99,102,241,0.2), rgba(139,92,246,0.15))" }}>
                    <span className="text-2xl font-heading text-white tracking-tight">RB</span>
                  </div>
                </div>
                <span className="text-lg font-semibold text-text-primary tracking-wide">Review Boosters</span>
              </div>
            </div>

            <NavbarMockup>
              <div className="flex items-center gap-2 shrink-0">
                <div className="relative w-7 h-7 flex items-center justify-center shrink-0">
                  <div className="absolute inset-0 rounded-md opacity-30"
                    style={{
                      background: "radial-gradient(circle, var(--accent-glow), transparent 70%)",
                      filter: "blur(3px)",
                    }}
                  />
                  <div className="relative w-6 h-6 rounded-md flex items-center justify-center border border-white/10"
                    style={{ background: "linear-gradient(135deg, rgba(99,102,241,0.25), rgba(139,92,246,0.15))" }}>
                    <span className="text-[9px] font-heading text-white">RB</span>
                  </div>
                </div>
                <span className="text-[10px] font-semibold text-text-primary/80 whitespace-nowrap">Review Boosters</span>
              </div>
            </NavbarMockup>

            <p className="text-text-muted text-xs">Glowing container — subtle glow leaks out, matches aurora vibe of the site.</p>
          </button>

          {/* ──── VARIANT 3: Star Monogram ──── */}
          <button
            onClick={() => setSelected(3)}
            className={`glass-card p-8 flex flex-col gap-8 text-left transition-all cursor-pointer ${
              selected === 3 ? "!border-accent shadow-[0_0_40px_var(--glow-soft)]" : ""
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="text-[10px] text-text-muted uppercase tracking-[0.25em] font-semibold">03</span>
              {selected === 3 && <span className="text-[10px] text-accent uppercase tracking-widest font-semibold">Selected</span>}
            </div>

            <div className="flex items-center justify-center py-8">
              <div className="flex items-center gap-4">
                <div className="relative">
                  <span className="text-5xl font-heading gradient-text tracking-tight">RB</span>
                  <svg className="absolute -top-1 -right-2" width="14" height="14" viewBox="0 0 24 24" fill="var(--star)">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                </div>
                <div className="h-8 w-px bg-border" />
                <span className="text-lg font-semibold text-text-primary">Review Boosters</span>
              </div>
            </div>

            <NavbarMockup>
              <div className="flex items-center gap-1.5 shrink-0">
                <div className="relative">
                  <span className="text-base font-heading gradient-text">RB</span>
                  <svg className="absolute -top-0.5 -right-1" width="6" height="6" viewBox="0 0 24 24" fill="var(--star)">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                </div>
                <div className="h-3 w-px bg-border" />
                <span className="text-[10px] font-semibold text-text-primary/80 whitespace-nowrap">Review Boosters</span>
              </div>
            </NavbarMockup>

            <p className="text-text-muted text-xs">Star accent — tiny gold star sells the reviews angle. Divider separates mark from wordmark.</p>
          </button>

          {/* ──── VARIANT 4: Animated Border Badge ──── */}
          <button
            onClick={() => setSelected(4)}
            className={`glass-card p-8 flex flex-col gap-8 text-left transition-all cursor-pointer ${
              selected === 4 ? "!border-accent shadow-[0_0_40px_var(--glow-soft)]" : ""
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="text-[10px] text-text-muted uppercase tracking-[0.25em] font-semibold">04</span>
              {selected === 4 && <span className="text-[10px] text-accent uppercase tracking-widest font-semibold">Selected</span>}
            </div>

            <div className="flex items-center justify-center py-8">
              <div className="flex items-center gap-4">
                <div className="gradient-border rounded-xl !p-0">
                  <div className="w-14 h-14 flex items-center justify-center bg-bg-surface rounded-[10px]">
                    <span className="text-2xl font-heading text-text-primary tracking-tight">RB</span>
                  </div>
                </div>
                <div>
                  <span className="text-lg font-semibold text-text-primary block leading-tight">Review</span>
                  <span className="text-lg font-semibold text-text-secondary block leading-tight">Boosters</span>
                </div>
              </div>
            </div>

            <NavbarMockup>
              <div className="flex items-center gap-2 shrink-0">
                <div className="gradient-border rounded-md !p-0 !border shrink-0">
                  <div className="w-6 h-6 flex items-center justify-center bg-bg-surface rounded-[5px]">
                    <span className="text-[9px] font-heading text-text-primary">RB</span>
                  </div>
                </div>
                <span className="text-[10px] font-semibold text-text-primary/80 whitespace-nowrap">Review Boosters</span>
              </div>
            </NavbarMockup>

            <p className="text-text-muted text-xs">Animated border — spinning gradient border matches the pricing card style. Consistent brand element.</p>
          </button>
        </div>

        <div className="mt-12 text-center">
          <p className="text-text-muted text-sm">
            {selected
              ? `Variant ${selected} selected — send screenshot to approve`
              : "Click a card to select"}
          </p>
        </div>
      </div>
    </div>
  );
}
