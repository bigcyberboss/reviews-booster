"use client";

import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function CasesPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen flex items-center justify-center pt-16">
        <div className="max-w-3xl mx-auto px-6 py-24 text-center">
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl mb-6">
            Cases
          </h1>
          <p className="text-text-secondary text-lg mb-8">
            Our case studies are coming soon
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
