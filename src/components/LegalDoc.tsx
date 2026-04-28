"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

type LegalDocProps = {
  title: string;
  effectiveDate: string;
  lastUpdated: string;
  children: ReactNode;
};

export function LegalDoc({ title, effectiveDate, lastUpdated, children }: LegalDocProps) {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-24 pb-16">
        <article className="max-w-3xl mx-auto px-6">
          <header className="mb-12">
            <h1 className="font-heading text-4xl sm:text-5xl text-text-primary mb-3">
              {title}
            </h1>
            <p className="text-sm text-text-muted">
              Effective date: {effectiveDate} &nbsp;|&nbsp; Last updated: {lastUpdated}
            </p>
          </header>

          <div className="legal-prose">{children}</div>

          <div className="mt-16 pt-8 border-t border-border">
            <Link href="/" className="ghost-btn">
              &larr; Back to home
            </Link>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
