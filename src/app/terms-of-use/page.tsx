"use client";

import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function TermsOfUsePage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen flex items-center justify-center pt-16">
        <div className="max-w-3xl mx-auto px-6 py-24 text-center">
          <span className="text-5xl mb-6 block">📄</span>
          <h1 className="font-heading text-4xl sm:text-5xl text-text-primary mb-4">
            Terms of Use
          </h1>
          <p className="text-text-secondary text-lg mb-8">
            Oops! This page is under construction. Check back soon.
          </p>
          <Link href="/" className="ghost-btn">
            Back to home
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
