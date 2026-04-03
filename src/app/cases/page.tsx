"use client";

import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function CasesPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden">
        <div className="grid-bg" />
        <div className="aurora">
          <div className="aurora-blob" />
          <div className="aurora-blob" />
          <div className="aurora-blob" />
        </div>

        <div className="relative z-10 max-w-3xl mx-auto px-6 py-24 flex flex-col items-center text-center gap-10">
          <h1
            className="font-heading text-4xl sm:text-5xl lg:text-6xl leading-[1.1]"
            style={{ textWrap: "balance" } as React.CSSProperties}
          >
            Our Cases Are Empty.{" "}
            <span className="gradient-text">That&apos;s the Point.</span>
          </h1>

          <p className="text-text-secondary text-lg sm:text-xl max-w-xl leading-relaxed">
            Our work is invisible by design. Your competitors will never find us in your backyard.
          </p>

          {/* Confidentiality illustration */}
          <div className="relative my-4">
            <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-3xl flex items-center justify-center border border-border bg-bg-surface/60 backdrop-blur-sm relative"
              style={{ boxShadow: "0 0 60px var(--glow-soft)" }}>
              {/* Lock */}
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--accent-glow)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="sm:w-14 sm:h-14">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                <circle cx="12" cy="16" r="1" fill="var(--accent-glow)" />
              </svg>
              {/* Eye with slash — floating */}
              <div className="absolute -top-3 -right-3 w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-bg-surface border border-border flex items-center justify-center"
                style={{ animation: "float-gentle 4s ease-in-out infinite", boxShadow: "0 0 20px var(--glow-soft)" }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--text-secondary)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="sm:w-6 sm:h-6">
                  <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94" />
                  <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19" />
                  <line x1="1" y1="1" x2="23" y2="23" />
                </svg>
              </div>
              {/* Shield — floating */}
              <div className="absolute -bottom-3 -left-3 w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-bg-surface border border-border flex items-center justify-center"
                style={{ animation: "float-gentle 5s ease-in-out infinite 1s", boxShadow: "0 0 20px var(--glow-soft)" }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--success)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="sm:w-5 sm:h-5">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  <polyline points="9 12 11 14 15 10" />
                </svg>
              </div>
            </div>
          </div>

          <p className="text-text-primary text-xl sm:text-2xl font-heading">
            Want to become an invisible case?
          </p>

          <a
            href="/#contacts"
            onClick={(e) => {
              e.preventDefault();
              const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
              window.location.href = `${basePath}/#contacts`;
            }}
            className="glow-btn text-lg !py-4 !px-10"
          >
            Work With Us
          </a>
        </div>
      </main>
      <Footer />
    </>
  );
}
