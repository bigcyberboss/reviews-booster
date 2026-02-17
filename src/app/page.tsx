import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Value } from "@/components/Value";
import { Pricing } from "@/components/Pricing";
import { Advantages } from "@/components/Advantages";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <hr className="section-divider" />
        <Value />
        <hr className="section-divider" />
        <Pricing />
        <hr className="section-divider" />
        <Advantages />
        <hr className="section-divider" />
        <Contact />
      </main>
      <Footer />
      <ThemeSwitcher />
    </>
  );
}
