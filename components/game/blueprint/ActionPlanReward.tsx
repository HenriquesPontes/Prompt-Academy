"use client";
import { motion } from "framer-motion";
import { Hammer, Copy, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import { BookingButton } from "@/components/ui/BookingButton";

export function ActionPlanReward() {
  const [copied, setCopied] = useState<number | null>(null);

  const steps = [
    {
      title: "Step 1: The Foundation",
      desc: "Prompt for the skeleton without worrying about colors or fonts yet.",
      prompt: "Act as a senior frontend developer. I am starting a brand new Next.js project. Task: Build the structural layout for a personal portfolio landing page (Hero, About, Projects grid, Footer). Constraints: Use plain semantic HTML and basic Tailwind classes for layout only (flex, grid). Do NOT apply colors, typography, or styling yet. Format: Just provide the `page.tsx` file."
    },
    {
      title: "Step 2: The Content",
      desc: "Fill in the blanks with actual data.",
      prompt: "Continuing with the portfolio skeleton, add placeholder content. Replace the hero text with a headline about a 'Creative Developer'. Add 3 placeholder projects to the grid with titles and descriptions. Success criteria: The page should still have no styling, but all structural text should be present."
    },
    {
      title: "Step 3: The Aesthetic",
      desc: "Apply design tokens and style.",
      prompt: "Context: We have a structural portfolio page. Task: Apply a minimalist design system. Use cream (`bg-[#F5EFE6]`) for the background, dark ink (`text-[#1A1A1A]`) for text. Use a serif font for headings and sans-serif for body. Make the project grid items look like cards with subtle borders. Constraints: Do not change the underlying HTML structure or content, just add Tailwind classes."
    },
    {
      title: "Step 4: The Polish",
      desc: "Make it responsive and accessible.",
      prompt: "Review the current portfolio page code. Task: Ensure it is fully responsive and accessible. Add standard ARIA labels, ensure contrast is accessible, and make sure the grid collapses to 1 column on mobile screens. Explain what you changed and why."
    },
    {
      title: "Step 5: The Iteration",
      desc: "Use the router to fix or tweak things.",
      prompt: "This part is broken: when I view it on a small screen, the Hero text is too large and overflows. Explain what's causing it, then fix it. Don't change anything else on the page."
    }
  ];

  const copyToClipboard = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopied(index);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="bg-chrome-bg border-2 border-dashed border-success text-ink rounded-xl p-8 shadow-sm mt-12 relative overflow-hidden"
    >
      <div className="absolute top-12 right-12 opacity-5 pointer-events-none rotate-12">
        <div className="text-6xl md:text-8xl font-bold font-mono text-success border-8 border-success p-6 rounded-xl">
          APPROVED
        </div>
      </div>

      <div className="relative z-10">
        <h2 className="text-3xl font-serif mb-4 flex items-center gap-3 text-success">
          <CheckCircle2 className="w-8 h-8" />
          You Are Ready to Build
        </h2>
        <p className="font-mono text-ink-soft mb-10 max-w-2xl leading-relaxed">
          You've mastered the blueprint mindset. Instead of a certificate, here is your first action plan. 
          Use this exact 5-step prompt sequence to build your first website right now. Copy them one by one into your AI assistant.
        </p>

        <div className="space-y-6">
          {steps.map((step, idx) => (
            <div key={idx} className="bg-paper text-ink rounded-lg p-6 border-l-4 border-dashed border-success relative shadow-sm">
              <h3 className="font-bold font-serif text-lg mb-1">{step.title}</h3>
              <p className="font-mono text-xs text-chrome-text-soft mb-4">{step.desc}</p>
              
              <div className="bg-chrome-bg rounded-md p-4 relative group">
                <code className="font-mono text-sm leading-relaxed block pr-12">
                  {step.prompt}
                </code>
                <button
                  onClick={() => copyToClipboard(step.prompt, idx)}
                  className="absolute top-4 right-4 p-2 bg-paper border border-hairline rounded-md text-ink-soft hover:text-ink hover:border-ink/30 transition-all shadow-sm"
                  title="Copy to clipboard"
                >
                  {copied === idx ? <CheckCircle2 className="w-4 h-4 text-success" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center gap-6">
          <p className="font-mono text-ink-soft text-center">
            Open your editor, start a new chat, and paste Step 1.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Link
              href="/"
              className="bg-success text-chrome-bg px-8 py-4 rounded-lg font-mono font-bold hover:bg-success/90 transition-all shadow-sm uppercase tracking-wider text-center"
            >
              Complete Academy & Return
            </Link>
            <BookingButton className="bg-chrome-bg border border-hairline text-ink px-8 py-4 rounded-lg font-mono font-bold hover:bg-paper transition-all shadow-sm uppercase tracking-wider text-center flex items-center justify-center gap-2" />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
