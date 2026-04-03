"use client";

export default function LogoPreview() {
  return (
    <div className="min-h-screen bg-bg flex flex-col items-center justify-center gap-16 p-8">
      <h1 className="font-heading text-3xl text-text-primary">
        Logo Variants — Pick one
      </h1>

      <div className="grid sm:grid-cols-2 gap-12 max-w-4xl w-full">
        {/* Variant 1: Gradient text, clean */}
        <div className="glass-card p-8 flex flex-col items-center gap-6">
          <span className="text-xs text-text-muted uppercase tracking-widest">Variant 1 — Gradient Clean</span>
          <div className="flex items-center gap-3">
            <span className="text-4xl font-heading gradient-text tracking-tight">RB</span>
            <span className="text-lg font-semibold text-text-primary">Review Boosters</span>
          </div>
          <div className="h-16 flex items-center px-6 rounded-xl bg-bg-surface border border-border w-full justify-center">
            <div className="flex items-center gap-2">
              <span className="text-xl font-heading gradient-text">RB</span>
              <span className="text-sm font-semibold text-text-primary opacity-80">Review Boosters</span>
            </div>
          </div>
        </div>

        {/* Variant 2: Boxed badge */}
        <div className="glass-card p-8 flex flex-col items-center gap-6">
          <span className="text-xs text-text-muted uppercase tracking-widest">Variant 2 — Badge</span>
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-accent/15 border border-accent/30 text-2xl font-heading gradient-text">RB</span>
            <span className="text-lg font-semibold text-text-primary">Review Boosters</span>
          </div>
          <div className="h-16 flex items-center px-6 rounded-xl bg-bg-surface border border-border w-full justify-center">
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-accent/15 border border-accent/30 text-sm font-heading gradient-text">RB</span>
              <span className="text-sm font-semibold text-text-primary opacity-80">Review Boosters</span>
            </div>
          </div>
        </div>

        {/* Variant 3: Dot separator, monospace vibe */}
        <div className="glass-card p-8 flex flex-col items-center gap-6">
          <span className="text-xs text-text-muted uppercase tracking-widest">Variant 3 — Dot Separator</span>
          <div className="flex items-center gap-0">
            <span className="text-4xl font-heading text-text-primary tracking-tight">R</span>
            <span className="text-4xl font-heading text-accent">.</span>
            <span className="text-4xl font-heading text-text-primary tracking-tight">B</span>
            <span className="ml-3 text-lg font-semibold text-text-secondary">Review Boosters</span>
          </div>
          <div className="h-16 flex items-center px-6 rounded-xl bg-bg-surface border border-border w-full justify-center">
            <div className="flex items-center gap-0">
              <span className="text-xl font-heading text-text-primary">R</span>
              <span className="text-xl font-heading text-accent">.</span>
              <span className="text-xl font-heading text-text-primary">B</span>
              <span className="ml-2 text-sm font-semibold text-text-primary opacity-80">Review Boosters</span>
            </div>
          </div>
        </div>

        {/* Variant 4: Slash divider, modern SaaS */}
        <div className="glass-card p-8 flex flex-col items-center gap-6">
          <span className="text-xs text-text-muted uppercase tracking-widest">Variant 4 — Slash Modern</span>
          <div className="flex items-center gap-1">
            <span className="text-4xl font-heading gradient-text">R</span>
            <span className="text-4xl font-heading text-border">/</span>
            <span className="text-4xl font-heading gradient-text">B</span>
            <span className="ml-3 text-lg font-semibold text-text-secondary">Review Boosters</span>
          </div>
          <div className="h-16 flex items-center px-6 rounded-xl bg-bg-surface border border-border w-full justify-center">
            <div className="flex items-center gap-0.5">
              <span className="text-xl font-heading gradient-text">R</span>
              <span className="text-xl font-heading text-border">/</span>
              <span className="text-xl font-heading gradient-text">B</span>
              <span className="ml-2 text-sm font-semibold text-text-primary opacity-80">Review Boosters</span>
            </div>
          </div>
        </div>
      </div>

      <p className="text-text-muted text-sm">Each card shows the logo large + how it looks in the navbar</p>
    </div>
  );
}
