"use client";
import SawaNav from "@/components/layout/SawaNav";
import SawaFooter from "@/components/layout/SawaFooter";
import { BG } from "./ArticleAtoms";

export default function ArticleShell({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ background: BG, minHeight: "100vh" }}>
      <SawaNav />
      <main style={{ paddingTop: "clamp(88px,12vh,120px)" }}>
        {children}
      </main>
      <SawaFooter />
    </div>
  );
}
