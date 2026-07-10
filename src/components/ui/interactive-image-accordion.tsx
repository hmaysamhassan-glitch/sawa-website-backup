"use client";

import { useState } from "react";
import { GrowPanel, NewsletterPanel, LaunchPanel } from "./TabShowcase";

// Expanding accordion that reuses the animated showcase panels from the
// previous design (live counter, open-rate dot grid, revenue ticker)
// instead of background images.
const ITEMS = [
  { key: "Grow", label: "Grow your list", Panel: GrowPanel },
  { key: "Newsletter", label: "Run your newsletter", Panel: NewsletterPanel },
  { key: "Launch", label: "Launch your products", Panel: LaunchPanel },
] as const;

const PANEL_W = 420; // expanded width on desktop
const STRIP_W = 56; // collapsed width on desktop
const BOX_H = 540; // fixed height so switching panels never shifts the layout

export function InteractiveImageAccordion() {
  const [active, setActive] = useState(0);

  return (
    <>
      {/* ── Desktop: horizontal hover accordion ── */}
      <div
        className="hidden md:flex flex-row items-stretch justify-center gap-3"
        style={{ height: BOX_H }}
      >
        {ITEMS.map((it, i) => {
          const isActive = i === active;
          const Panel = it.Panel;
          return (
            <div
              key={it.key}
              onMouseEnter={() => setActive(i)}
              className="relative h-full rounded-[18px] overflow-hidden cursor-pointer transition-[width] duration-700 ease-in-out"
              style={{ width: isActive ? PANEL_W : STRIP_W }}
            >
              {/* Collapsed strip — black with a vertical label */}
              <div
                className="absolute inset-0 flex items-end justify-center bg-[#0A0A0A] transition-opacity duration-300"
                style={{ opacity: isActive ? 0 : 1, pointerEvents: isActive ? "none" : "auto" }}
              >
                <span className="mb-24 rotate-90 whitespace-nowrap text-white text-base font-semibold tracking-tight">
                  {it.label}
                </span>
              </div>

              {/* Expanded panel — rendered at full width so it never squishes */}
              <div
                className="absolute inset-0 transition-opacity duration-500"
                style={{ width: PANEL_W, opacity: isActive ? 1 : 0 }}
              >
                <Panel active={isActive} />
              </div>
            </div>
          );
        })}
      </div>

      {/* ── Mobile: vertical tap accordion ── */}
      <div className="flex md:hidden flex-col gap-3">
        {ITEMS.map((it, i) => {
          const isActive = i === active;
          const Panel = it.Panel;
          return (
            <div
              key={it.key}
              className="rounded-2xl overflow-hidden"
              style={{ border: "1px solid rgba(0,0,0,0.09)" }}
            >
              <button
                onClick={() => setActive(i)}
                className="w-full flex items-center justify-between px-4 py-3.5 bg-[#0A0A0A] text-white text-sm font-semibold"
              >
                <span>{it.label}</span>
                <span className="text-lg leading-none">{isActive ? "–" : "+"}</span>
              </button>
              {isActive && (
                <div className="p-2 bg-white">
                  <Panel active={isActive} />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </>
  );
}
