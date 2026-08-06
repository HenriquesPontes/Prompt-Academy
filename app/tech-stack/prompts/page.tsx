"use client";

import { useState, useEffect } from "react";
import { CheckCircle2, ArrowRight, Brain, Milestone, TerminalSquare, GitPullRequest, Code2, Layers, CheckSquare, Sparkles } from "lucide-react";
import Link from "next/link";

const SECTIONS = [
  { id: "mindset", title: "Phase 0: Mindset Shift" },
  { id: "beginner", title: "Phase 1: Beginner" },
  { id: "novice", title: "Phase 2: Novice" },
  { id: "intermediate", title: "Phase 3: Intermediate" },
  { id: "advanced", title: "Phase 4: Advanced" },
  { id: "pro", title: "Phase 5: Pro" },
  { id: "checklist", title: "Quality Checklist" },
];

export default function PromptsGuidePage() {
  const [activeSection, setActiveSection] = useState("mindset");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150;
      
      for (const section of SECTIONS) {
        const element = document.getElementById(section.id);
        if (element && element.offsetTop <= scrollPosition && (element.offsetTop + element.offsetHeight) > scrollPosition) {
          setActiveSection(section.id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 100,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="min-h-screen bg-paper text-ink selection:bg-selection font-sans">
      {/* Header */}
      <header className="absolute top-0 left-0 right-0 h-16 z-50 flex items-center px-10 justify-between">
        <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
          <span className="font-serif font-medium text-xl tracking-wide text-ink">Skribe</span>
        </Link>
        <Link href="/tech-stack" className="text-sm font-medium text-chrome-text hover:text-ink transition-colors flex items-center gap-2">
           <ArrowRight className="w-4 h-4 rotate-180" /> Back to Beginner's Guide
        </Link>
      </header>

      <main className="max-w-7xl mx-auto pt-32 pb-32 px-6 flex flex-col lg:flex-row gap-12 relative z-10">
        
        {/* Sticky Sidebar */}
        <aside className="hidden lg:block w-64 shrink-0">
          <div className="sticky top-32">
            <h3 className="text-xs uppercase tracking-widest text-chrome-text-soft font-bold mb-6">Table of Contents</h3>
            <nav className="space-y-3">
              {SECTIONS.map((s) => (
                <button
                  key={s.id}
                  onClick={() => scrollTo(s.id)}
                  className={`block text-left text-sm transition-colors ${activeSection === s.id ? 'text-accent font-medium' : 'text-chrome-text hover:text-ink'}`}
                >
                  {s.title}
                </button>
              ))}
            </nav>
          </div>
        </aside>

        {/* Main Content */}
        <div className="flex-1 max-w-3xl space-y-32">
          
          {/* Hero Intro */}
          <div className="space-y-6 border-b border-hairline pb-16">
            <h1 className="text-5xl font-serif text-ink leading-tight">
              Creating High-Quality Prompts to Build a Website
            </h1>
            <p className="text-xl text-chrome-text-soft font-serif italic border-l-4 border-accent pl-6 py-2">
              "A phase-by-phase guide to prompting an AI coding assistant (like Claude) so you go from 'just get something on screen' to shipping a polished, production-ready site."
            </p>
          </div>

          {/* Phase 0 */}
          <section id="mindset" className="scroll-mt-32 space-y-6">
            <h2 className="text-3xl font-serif text-ink border-b border-hairline pb-4 flex items-center gap-3">
              <Brain className="w-8 h-8 text-accent" /> Phase 0: Mindset Shift
            </h2>
            <div className="bg-chrome-bg/50 border border-hairline rounded-xl p-8">
              <p className="text-lg leading-relaxed text-chrome-text mb-6">
                Before writing any prompt, understand this: <strong className="text-ink">a prompt is a spec, not a wish.</strong> The more precisely you describe the <em>what</em>, <em>why</em>, and <em>constraints</em>, the less the AI has to guess — and guessing is where bad output comes from.
              </p>
              <p className="text-chrome-text-soft mb-4">Beginners write prompts like requests. Pros write prompts like briefs.</p>
              
              <div className="space-y-4 font-mono text-sm">
                <div className="bg-paper border border-hairline p-4 rounded-lg shadow-sm">
                  <div className="text-xs font-bold text-chrome-text-soft uppercase mb-2">Beginner</div>
                  "Make me a website for my bakery."
                </div>
                <div className="bg-accent/5 border border-accent/20 p-4 rounded-lg shadow-sm">
                  <div className="text-xs font-bold text-accent uppercase mb-2">Pro</div>
                  "Build a single-page site for a small artisan bakery. Sections: hero, about, product menu (grid, 6 items with price + image placeholder), location/hours, contact form. Warm, rustic aesthetic — cream/brown palette. Mobile-first. Use semantic HTML, no framework needed."
                </div>
              </div>
            </div>
          </section>

          {/* Phase 1 */}
          <section id="beginner" className="scroll-mt-32 space-y-6">
            <h2 className="text-3xl font-serif text-ink border-b border-hairline pb-4 flex items-center gap-3">
              <Milestone className="w-8 h-8 text-accent" /> Phase 1: Beginner
            </h2>
            <p className="text-lg font-medium text-ink bg-chrome-bg inline-block px-3 py-1 rounded-full">
              Goal: Learn the anatomy of a basic prompt and get a working first draft.
            </p>
            
            <h3 className="font-bold text-lg mt-8">The 4 ingredients every beginner prompt needs</h3>
            <ol className="list-decimal pl-5 space-y-2 text-chrome-text">
              <li><strong className="text-ink">What</strong> you're building (a landing page, a portfolio, a shop)</li>
              <li><strong className="text-ink">Who</strong> it's for (audience/purpose)</li>
              <li><strong className="text-ink">What sections/features</strong> it needs</li>
              <li><strong className="text-ink">Any hard constraints</strong> (language, platform, must include X)</li>
            </ol>

            <h3 className="font-bold text-lg mt-8">Beginner prompt template</h3>
            <div className="bg-ink text-paper rounded-xl p-6 font-mono text-sm shadow-xl">
              Build a [type of site] for [purpose/audience].<br />
              It should include: [list sections/features].<br />
              Tech: [plain HTML/CSS/JS, or a framework if you know one].
            </div>

            <div className="bg-warning/10 border border-warning/30 p-6 rounded-xl mt-8">
              <h4 className="font-bold text-warning mb-2">Common beginner mistake</h4>
              <p className="text-ink-soft text-sm">
                Vague adjectives with no specifics ("make it modern and cool"). Modern <em>how</em>? Cool <em>compared to what</em>? Always pair a style word with a concrete reference or detail.
              </p>
            </div>
          </section>

          {/* Phase 2 */}
          <section id="novice" className="scroll-mt-32 space-y-6">
            <h2 className="text-3xl font-serif text-ink border-b border-hairline pb-4 flex items-center gap-3">
              <TerminalSquare className="w-8 h-8 text-accent" /> Phase 2: Novice
            </h2>
            <p className="text-lg font-medium text-ink bg-chrome-bg inline-block px-3 py-1 rounded-full">
              Goal: Stop treating this as one prompt = one final product. Learn to build in passes.
            </p>
            
            <h3 className="font-bold text-lg mt-8">Break the build into stages</h3>
            <div className="flex flex-wrap gap-2 text-sm text-chrome-text">
              <span className="px-3 py-1 border border-hairline rounded-full">1. Skeleton</span>
              <ArrowRight className="w-4 h-4 my-auto text-chrome-text-soft" />
              <span className="px-3 py-1 border border-hairline rounded-full">2. Content</span>
              <ArrowRight className="w-4 h-4 my-auto text-chrome-text-soft" />
              <span className="px-3 py-1 border border-hairline rounded-full">3. Styling</span>
              <ArrowRight className="w-4 h-4 my-auto text-chrome-text-soft" />
              <span className="px-3 py-1 border border-hairline rounded-full">4. Interactivity</span>
              <ArrowRight className="w-4 h-4 my-auto text-chrome-text-soft" />
              <span className="px-3 py-1 border border-hairline rounded-full">5. Polish</span>
            </div>

            <h3 className="font-bold text-lg mt-8">Iteration prompts (the pro habit)</h3>
            <p className="text-chrome-text text-sm mb-4">Instead of re-explaining the whole project every time, reference what exists:</p>
            <div className="space-y-4 font-mono text-sm">
              <div className="bg-paper border border-hairline p-4 rounded-lg shadow-sm">
                "On the hero section we just built, increase the heading size, center it vertically, and add a subtle fade-in animation on load."
              </div>
              <div className="bg-paper border border-hairline p-4 rounded-lg shadow-sm">
                "Keep everything the same but change the color scheme to a dark navy + gold palette instead of blue + white."
              </div>
            </div>

            <h3 className="font-bold text-lg mt-8">Introduce constraints that prevent chaos</h3>
            <ul className="list-disc pl-5 space-y-2 text-chrome-text">
              <li>"Don't use any external libraries yet."</li>
              <li>"Keep all code in a single HTML file for now."</li>
              <li>"Comment the CSS so I can find sections easily."</li>
            </ul>
          </section>

          {/* Phase 3 */}
          <section id="intermediate" className="scroll-mt-32 space-y-6">
            <h2 className="text-3xl font-serif text-ink border-b border-hairline pb-4 flex items-center gap-3">
              <GitPullRequest className="w-8 h-8 text-accent" /> Phase 3: Intermediate
            </h2>
            <p className="text-lg font-medium text-ink bg-chrome-bg inline-block px-3 py-1 rounded-full">
              Goal: Prompt for systems, not just pages — start specifying architecture, data, and behavior.
            </p>

            <div className="grid md:grid-cols-2 gap-4 mt-8">
              <div className="bg-paper border border-hairline p-5 rounded-xl">
                <h4 className="font-bold text-ink mb-2">User flows</h4>
                <p className="text-sm text-chrome-text-soft">"When a user clicks 'Add to Cart,' show a toast notification and update the cart count in the nav."</p>
              </div>
              <div className="bg-paper border border-hairline p-5 rounded-xl">
                <h4 className="font-bold text-ink mb-2">State/data</h4>
                <p className="text-sm text-chrome-text-soft">"Store form submissions in local state for now; we'll wire up a backend later."</p>
              </div>
              <div className="bg-paper border border-hairline p-5 rounded-xl">
                <h4 className="font-bold text-ink mb-2">Edge cases</h4>
                <p className="text-sm text-chrome-text-soft">"If the email field is invalid, show inline validation — don't let the form submit."</p>
              </div>
              <div className="bg-paper border border-hairline p-5 rounded-xl">
                <h4 className="font-bold text-ink mb-2">Component thinking</h4>
                <p className="text-sm text-chrome-text-soft">"Break this into a `Header`, `ProductCard`, and `Footer` component."</p>
              </div>
            </div>

            <h3 className="font-bold text-lg mt-8">Intermediate prompt template</h3>
            <div className="bg-ink text-paper rounded-xl p-6 font-mono text-sm shadow-xl">
              Build [feature] with the following behavior:<br />
              - [trigger] → [result]<br />
              - Handle these edge cases: [list]<br />
              - Data should be structured as: [shape/example]<br />
              - Reuse [existing component/section] where possible
            </div>

            <h3 className="font-bold text-lg mt-8">Start giving feedback like a reviewer</h3>
            <ul className="space-y-4">
              <li className="flex gap-4 items-start border border-hairline p-4 rounded-lg bg-chrome-bg/30">
                <span className="text-xs font-bold text-chrome-text-soft uppercase shrink-0 mt-0.5 w-24">Beginner</span>
                <span className="text-ink-soft">"It looks bad."</span>
              </li>
              <li className="flex gap-4 items-start border border-accent/20 p-4 rounded-lg bg-accent/5">
                <span className="text-xs font-bold text-accent uppercase shrink-0 mt-0.5 w-24">Intermediate</span>
                <span className="text-ink-soft">"The spacing between cards is inconsistent — set a fixed gap of 24px and align them to a 3-column grid on desktop, 1-column on mobile."</span>
              </li>
            </ul>
          </section>

          {/* Phase 4 */}
          <section id="advanced" className="scroll-mt-32 space-y-6">
            <h2 className="text-3xl font-serif text-ink border-b border-hairline pb-4 flex items-center gap-3">
              <Code2 className="w-8 h-8 text-accent" /> Phase 4: Advanced
            </h2>
            <p className="text-lg font-medium text-ink bg-chrome-bg inline-block px-3 py-1 rounded-full">
              Goal: Prompt as if you're briefing a senior engineer — think about scale, structure, and maintainability.
            </p>

            <h3 className="font-bold text-lg mt-8">Specify architecture up front</h3>
            <div className="bg-ink text-paper rounded-xl p-6 font-mono text-sm shadow-xl">
              Set up the project with:<br />
              - [Framework, e.g. Next.js / vanilla + Vite]<br />
              - Folder structure: /components, /pages, /styles, /lib<br />
              - A shared design system (colors, spacing, typography as CSS variables or a theme file)<br />
              - Accessibility: semantic HTML, ARIA labels where needed, keyboard nav
            </div>

            <h3 className="font-bold text-lg mt-8">Prompt for non-functional requirements</h3>
            <div className="grid gap-4">
              <div className="border-l-2 border-ink pl-4">
                <strong className="text-ink">Performance:</strong> <span className="text-chrome-text-soft">"Lazy-load images below the fold."</span>
              </div>
              <div className="border-l-2 border-ink pl-4">
                <strong className="text-ink">SEO:</strong> <span className="text-chrome-text-soft">"Add meta tags, Open Graph tags, and a sitemap."</span>
              </div>
              <div className="border-l-2 border-ink pl-4">
                <strong className="text-ink">Accessibility:</strong> <span className="text-chrome-text-soft">"Ensure all interactive elements are keyboard-navigable and have visible focus states."</span>
              </div>
              <div className="border-l-2 border-ink pl-4">
                <strong className="text-ink">Maintainability:</strong> <span className="text-chrome-text-soft">"Extract repeated styles into reusable classes/utilities."</span>
              </div>
            </div>

            <h3 className="font-bold text-lg mt-8">Ask the AI to explain trade-offs (A pro move)</h3>
            <div className="bg-paper border border-hairline rounded-xl p-6 font-mono text-sm shadow-sm">
              "Before implementing, briefly explain 2 approaches for [feature] and the trade-offs, then implement the one you recommend."
            </div>

            <h3 className="font-bold text-lg mt-8">Use constraint-driven prompting to control scope</h3>
            <div className="bg-paper border border-hairline rounded-xl p-6 font-mono text-sm shadow-sm">
              "Only modify the files related to [feature]. Do not touch [other files/sections]. Explain what you changed and why."
            </div>
          </section>

          {/* Phase 5 */}
          <section id="pro" className="scroll-mt-32 space-y-6">
            <h2 className="text-3xl font-serif text-ink border-b border-hairline pb-4 flex items-center gap-3">
              <Layers className="w-8 h-8 text-accent" /> Phase 5: Pro
            </h2>
            <p className="text-lg font-medium text-ink bg-chrome-bg inline-block px-3 py-1 rounded-full">
              Goal: Treat the AI like a collaborator across an entire project lifecycle, not a one-shot generator.
            </p>

            <h3 className="font-bold text-lg mt-8">Keep a living spec document</h3>
            <p className="text-chrome-text mb-4">Maintain a short doc (even just a running note) with project goals, design decisions, tech stack, and open questions. Feed relevant chunks of it into prompts so the AI stays consistent:</p>
            <div className="bg-ink text-paper rounded-xl p-6 font-mono text-sm shadow-xl">
              "Context: this is a bakery e-commerce site. Design system uses cream (#F5EFE6), brown (#6B4226), and a serif display font for headings. We're using vanilla HTML/CSS/JS, no frameworks, per project convention. Now build the checkout page following the same visual language."
            </div>

            <h3 className="font-bold text-lg mt-8">Use role + task + format prompting</h3>
            <div className="bg-paper border border-hairline rounded-xl p-6 font-mono text-sm shadow-sm">
              "Act as a senior frontend engineer reviewing this code for accessibility and performance issues. List problems ranked by severity, then fix the top 3."
            </div>

            <h3 className="font-bold text-lg mt-8">Test-driven / verification prompting</h3>
            <div className="bg-paper border border-hairline rounded-xl p-6 font-mono text-sm shadow-sm">
              "After building [feature], write a short checklist of things to manually test (mobile view, form validation, empty states) and verify each one against the code."
            </div>

            <h3 className="font-bold text-lg mt-8">Debug like a pro</h3>
            <p className="text-chrome-text mb-4">Don't just say "it's broken." Give what you expected, what actually happened, relevant output, and what you already tried.</p>
            <div className="bg-paper border border-hairline rounded-xl p-6 font-mono text-sm shadow-sm">
              "Expected: clicking submit shows a success message.<br/>
               Actual: nothing happens, no console error.<br/>
               I checked the event listener is attached. Here's the relevant code: [paste]. What's wrong?"
            </div>

            <h3 className="font-bold text-lg mt-8">Ship-readiness prompt</h3>
            <div className="bg-paper border border-hairline rounded-xl p-6 font-mono text-sm shadow-sm">
              "Review the whole site for launch readiness: broken links, missing alt text, unresponsive breakpoints, console errors, and inconsistent spacing/typography. List issues by page."
            </div>
          </section>

          {/* Checklist & Summary */}
          <section id="checklist" className="scroll-mt-32 space-y-12">
            <div>
              <h2 className="text-3xl font-serif text-ink border-b border-hairline pb-4 flex items-center gap-3">
                <CheckSquare className="w-8 h-8 text-accent" /> Prompt Quality Checklist
              </h2>
              <p className="text-chrome-text mt-6 mb-4">Before sending a prompt, check it has:</p>
              <ul className="space-y-4">
                {[
                  { title: "Goal", desc: "What should exist after this prompt runs" },
                  { title: "Context", desc: "What already exists, what not to touch" },
                  { title: "Constraints", desc: "Tech stack, scope, style rules" },
                  { title: "Success criteria", desc: "How you'll judge if it's right" },
                  { title: "Specific adjectives", desc: "Use '2px solid border' instead of 'make it pop'" }
                ].map((item, i) => (
                  <li key={i} className="flex gap-4 items-start">
                    <CheckCircle2 className="w-6 h-6 text-accent shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-ink">{item.title}</strong>
                      <span className="text-chrome-text-soft text-sm">{item.desc}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-chrome-bg/50 border border-hairline rounded-xl p-8">
              <h3 className="font-bold text-lg mb-6 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-warning" /> Progression Summary
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-left">
                  <thead>
                    <tr className="border-b border-hairline">
                      <th className="py-3 px-4 font-bold text-ink">Phase</th>
                      <th className="py-3 px-4 font-bold text-ink">Focus</th>
                      <th className="py-3 px-4 font-bold text-ink">Prompt Style</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-hairline/50">
                      <td className="py-3 px-4 font-medium text-ink">1. Beginner</td>
                      <td className="py-3 px-4 text-chrome-text">Get something visible</td>
                      <td className="py-3 px-4 text-chrome-text-soft">Simple request with sections listed</td>
                    </tr>
                    <tr className="border-b border-hairline/50">
                      <td className="py-3 px-4 font-medium text-ink">2. Novice</td>
                      <td className="py-3 px-4 text-chrome-text">Iterate in passes</td>
                      <td className="py-3 px-4 text-chrome-text-soft">Layered prompts, referencing prior output</td>
                    </tr>
                    <tr className="border-b border-hairline/50">
                      <td className="py-3 px-4 font-medium text-ink">3. Intermediate</td>
                      <td className="py-3 px-4 text-chrome-text">Behavior & data</td>
                      <td className="py-3 px-4 text-chrome-text-soft">User flows, edge cases, component thinking</td>
                    </tr>
                    <tr className="border-b border-hairline/50">
                      <td className="py-3 px-4 font-medium text-ink">4. Advanced</td>
                      <td className="py-3 px-4 text-chrome-text">Architecture & quality</td>
                      <td className="py-3 px-4 text-chrome-text-soft">Non-functional requirements, trade-off analysis</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-medium text-ink">5. Pro</td>
                      <td className="py-3 px-4 text-chrome-text">Full lifecycle</td>
                      <td className="py-3 px-4 text-chrome-text-soft">Living spec, role prompting, test/debug/ship prompts</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="mt-6 text-sm italic text-chrome-text-soft border-l-2 border-accent/50 pl-4">
                Practice by rebuilding the <strong>same</strong> site once per phase — you'll feel the difference in both the prompt and the output quality.
              </p>
            </div>
          </section>

        </div>
      </main>
    </div>
  );
}
