"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { useLang } from "@/components/LangContext";

export default function CasesPage() {
  const { t } = useLang();

  return (
    <>
      <Navbar />
      <main className="min-h-screen flex items-center justify-center pt-16">
        <div className="max-w-3xl mx-auto px-6 py-24 text-center">
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl mb-6">
            {t.nav.cases}
          </h1>
          <p className="text-text-secondary text-lg mb-8">
            {t.cases?.comingSoon ?? "Coming soon"}
          </p>
          <a href="/" className="ghost-btn">
            {t.cases?.backHome ?? "Back to home"}
          </a>
        </div>
      </main>
      <Footer />
    </>
  );
}
