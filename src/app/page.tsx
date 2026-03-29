"use client";

import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import TechStack from "@/components/TechStack";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const CursorGlow = dynamic(() => import("@/components/CursorGlow"), { ssr: false });
import Hero from "@/components/Hero";

function SectionRule() {
  return <hr className="glow-line" />;
}

export default function Home() {
  return (
    <>
      <CursorGlow />
      <Navbar />
      <main>
        <Hero />

        <SectionRule />
        <Services />

        <SectionRule />
        <Projects />

        <SectionRule />
        <TechStack />

        <SectionRule />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
