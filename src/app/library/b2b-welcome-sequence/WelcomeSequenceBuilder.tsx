"use client";
import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { INK, DIM, MID, STEEL, NAVY, POWDER, WHITE, BORDER, ease } from "@/components/library/ArticleAtoms";

type SubscribeFor = "leadMagnet" | "newsletter" | "demo";
type Considered = "quick" | "considered" | "long";
type NextStep = "call" | "trial" | "reply";

const SUBSCRIBE_OPTS: { id: SubscribeFor; label: string }[] = [
  { id: "leadMagnet", label: "A specific resource (guide, template, report)" },
  { id: "newsletter", label: "The newsletter itself" },
  { id: "demo", label: "A demo or trial request" },
];
const CONSIDERED_OPTS: { id: Considered; label: string }[] = [
  { id: "quick", label: "Quick, low-cost decision" },
  { id: "considered", label: "Considered, mid-size decision" },
  { id: "long", label: "Long, multi-stakeholder decision" },
];
const NEXTSTEP_OPTS: { id: NextStep; label: string }[] = [
  { id: "call", label: "Book a call" },
  { id: "trial", label: "Start a trial" },
  { id: "reply", label: "Reply and talk to someone" },
];

const SUBSCRIBE_TEXT: Record<SubscribeFor, string> = {
  leadMagnet: "Deliver the exact resource promised, immediately, with no extra steps to get it.",
  newsletter: "Confirm the subscription and set expectations for what they'll get and how often.",
  demo: "Confirm what happens next, who they'll hear from, and roughly when.",
};
const NEXTSTEP_TEXT: Record<NextStep, string> = {
  call: "One specific, low-friction ask: book a 15-minute call.",
  trial: "One specific, low-friction ask: start the trial, with the first step named.",
  reply: "One specific, low-friction ask: reply with their situation so a real person can respond.",
};

function buildSequence(subscribeFor: SubscribeFor, considered: Considered, nextStep: NextStep) {
  const emails = [
    { day: "Day 0", job: "Confirm + set expectations", detail: SUBSCRIBE_TEXT[subscribeFor] },
    { day: "Day 2", job: "Prove value fast", detail: "One genuinely useful, specific piece of value, not a generic overview." },
  ];
  if (considered !== "quick") {
    emails.push({ day: "Day 5", job: "Build credibility", detail: "A specific result or case, named and concrete, not a vague trust claim." });
  }
  if (considered === "long") {
    emails.push({ day: "Day 9", job: "Address the objection", detail: "Name the real hesitation directly instead of waiting for them to raise it." });
  }
  emails.push({
    day: considered === "long" ? "Day 12" : considered === "considered" ? "Day 8" : "Day 4",
    job: "Ask for the next step",
    detail: NEXTSTEP_TEXT[nextStep],
  });
  return emails;
}

function RadioGroup<T extends string>({
  label, options, value, onChange,
}: { label: string; options: { id: T; label: string }[]; value: T; onChange: (v: T) => void }) {
  return (
    <div style={{ marginBottom: 20 }}>
      <div style={{
        fontFamily: "var(--font-geist-mono),monospace", fontSize: 10.5, letterSpacing: "0.08em",
        textTransform: "uppercase", color: STEEL, marginBottom: 10,
      }}>{label}</div>
      <div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
        {options.map((o) => (
          <button
            key={o.id}
            type="button"
            onClick={() => onChange(o.id)}
            style={{
              display: "flex", alignItems: "center", gap: 10, textAlign: "left",
              padding: "10px 14px", borderRadius: 9, cursor: "pointer",
              border: `1.5px solid ${value === o.id ? STEEL : BORDER}`,
              background: value === o.id ? "rgba(49,112,142,0.07)" : WHITE,
              fontFamily: "var(--font-geist),sans-serif", fontSize: 13.5,
              color: value === o.id ? INK : DIM, fontWeight: value === o.id ? 600 : 400,
              transition: "all 0.16s ease",
            }}
          >
            <span style={{
              width: 14, height: 14, borderRadius: "50%", flexShrink: 0,
              border: `1.5px solid ${value === o.id ? STEEL : BORDER}`,
              display: "flex", alignItems: "center", justifyContent: "center",
            }}>
              {value === o.id && <span style={{ width: 7, height: 7, borderRadius: "50%", background: STEEL }} />}
            </span>
            {o.label}
          </button>
        ))}
      </div>
    </div>
  );
}

export default function WelcomeSequenceBuilder() {
  const [subscribeFor, setSubscribeFor] = useState<SubscribeFor>("leadMagnet");
  const [considered, setConsidered] = useState<Considered>("considered");
  const [nextStep, setNextStep] = useState<NextStep>("call");

  const sequence = useMemo(() => buildSequence(subscribeFor, considered, nextStep), [subscribeFor, considered, nextStep]);

  return (
    <div style={{ margin: "28px 0 40px" }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "clamp(16px,2.5vw,28px)", marginBottom: 8 }} className="wsb-grid">
        <RadioGroup label="What did they subscribe for?" options={SUBSCRIBE_OPTS} value={subscribeFor} onChange={setSubscribeFor} />
        <RadioGroup label="How considered is the purchase?" options={CONSIDERED_OPTS} value={considered} onChange={setConsidered} />
        <RadioGroup label="What's the eventual next step?" options={NEXTSTEP_OPTS} value={nextStep} onChange={setNextStep} />
      </div>

      <div style={{
        background: NAVY, borderRadius: 16, padding: "clamp(22px,3vw,30px)", overflowX: "auto",
      }}>
        <div style={{
          fontFamily: "var(--font-geist-mono),monospace", fontSize: 9.5, letterSpacing: "0.1em",
          textTransform: "uppercase", color: "rgba(143,193,227,0.65)", marginBottom: 16,
        }}>Your starting sequence, {sequence.length} emails</div>

        <AnimatePresence mode="wait">
          <motion.div
            key={sequence.map((e) => e.job).join("|")}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.28, ease }}
            style={{ display: "flex", gap: 12, minWidth: 560 }}
          >
            {sequence.map((email, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", flex: 1 }}>
                <div style={{
                  background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)",
                  borderRadius: 12, padding: "16px 14px", flex: 1, minWidth: 120,
                }}>
                  <div style={{
                    fontFamily: "var(--font-geist-mono),monospace", fontSize: 9.5, letterSpacing: "0.06em",
                    color: POWDER, marginBottom: 8,
                  }}>{email.day}</div>
                  <div style={{
                    fontFamily: "var(--font-inter),sans-serif", fontSize: 14, fontWeight: 700,
                    color: WHITE, marginBottom: 6, lineHeight: 1.25,
                  }}>{email.job}</div>
                  <div style={{
                    fontFamily: "var(--font-geist),sans-serif", fontSize: 12, lineHeight: 1.5,
                    color: "rgba(234,244,251,0.72)",
                  }}>{email.detail}</div>
                </div>
                {i < sequence.length - 1 && (
                  <div style={{ flexShrink: 0, width: 18, height: 1, background: "rgba(255,255,255,0.2)" }} />
                )}
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      <style>{`
        @media (max-width: 760px) {
          .wsb-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
