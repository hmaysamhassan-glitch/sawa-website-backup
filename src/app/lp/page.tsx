"use client";

import { useEffect } from "react";
import { getCalApi } from "@calcom/embed-react";
import SawaNav from "@/components/layout/SawaNav";
import SawaHero from "@/components/sections/SawaHero";
import SystemTabs from "@/components/sections/SystemTabs";
import OurSolution from "@/components/sections/OurSolution";
import OperatingModel from "@/components/sections/OperatingModel";
import LibraryPreview from "@/components/sections/LibraryPreview";
import SawaFAQ from "@/components/sections/SawaFAQ";
import FinalCTA from "@/components/sections/FinalCTA";
import SawaFooter from "@/components/layout/SawaFooter";

export default function HomePage() {
  useEffect(() => {
    (async () => {
      const cal = await getCalApi({ namespace: "book-a-call" });
      cal("ui", {
        theme: "light",
        cssVarsPerTheme: { light: { "cal-brand": "#0A0A0A" }, dark: { "cal-brand": "#0A0A0A" } },
        layout: "month_view",
        hideEventTypeDetails: false,
      });
    })();
  }, []);

  return (
    <div style={{ background: "#FAFAF8", minHeight: "100vh" }}>
      <SawaNav />
      <main id="main">
        {/* 1. HERO — unchanged */}
        <SawaHero />

        {/* 2. WE SOLVE THREE THINGS — Grow / Engage / Convert, brief */}
        <SystemTabs />

        {/* 3. OUR SOLUTION — Fletch-style deliverables */}
        <OurSolution />

        {/* 4. HOW WE WORK */}
        <OperatingModel />

        {/* LIBRARY — blog / resource preview */}
        <LibraryPreview />

        {/* 5. FAQ — unchanged */}
        <SawaFAQ />

        {/* 6. FINAL CTA — unchanged */}
        <FinalCTA />
      </main>
      <SawaFooter />
    </div>
  );
}
