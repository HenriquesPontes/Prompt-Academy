"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { BookOpen, Code, Terminal, Bot, Server, Shield, Layers, Layout, Map, Wrench, Search, FileCode, CheckCircle2, AlertTriangle, ArrowRight, LucideIcon } from "lucide-react";
import Link from "next/link";
import { BookingButton } from "@/components/ui/BookingButton";

const SECTIONS = [
  { id: "what-is", title: "1. What is Vibe Coding?" },
  { id: "anatomy", title: "2. Anatomy of a Website" },
  { id: "markdown", title: "3. What is Markdown?" },
  { id: "accounts", title: "4. Developer Toolbelt" },
  { id: "ai-tools", title: "5. Robot Employees" },
  { id: "tech-stack", title: "6. The Tech Stack" },
  { id: "jargon", title: "7. Key Terms" },
  { id: "workflow", title: "8. The Workflow" },
  { id: "rules", title: "9. Golden Rules" },
  { id: "stuck", title: "10. Getting Stuck" },
];

export default function TechStackGuidePage() {
  const [activeSection, setActiveSection] = useState("what-is");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150; // offset
      
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
        <BookingButton className="text-sm font-medium bg-accent text-paper px-4 py-2 rounded-full hover:bg-accent-deep-green transition-colors flex items-center gap-2 shadow-sm" />
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
            <div className="mt-12 pt-8 border-t border-hairline">
              <Link href="/tech-stack/prompts" className="flex items-center gap-2 text-sm font-bold text-accent hover:text-ink transition-colors group">
                High-Quality Prompts Guide <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <div className="flex-1 max-w-3xl space-y-32">
          
          {/* Hero Intro */}
          <div className="space-y-6 border-b border-hairline pb-16">
            <h1 className="text-5xl font-serif text-ink leading-tight">
              A Beginner's Guide to Vibe Coding & Modern Web Dev
            </h1>
            <p className="text-xl text-chrome-text-soft font-serif italic border-l-4 border-accent pl-6 py-2">
              "Welcome to the beginner-friendly guide to build modern software using AI. This document explains the concept of 'vibe coding,' breaks down the tools you need, and translates complex technical jargon into plain English."
            </p>
          </div>

          {/* 1. What is Vibe Coding */}
          <section id="what-is" className="scroll-mt-32 space-y-6">
            <h2 className="text-3xl font-serif text-ink border-b border-hairline pb-4">1. What is "Vibe Coding"?</h2>
            <div className="bg-chrome-bg/50 border border-hairline rounded-xl p-8">
              <p className="text-lg leading-relaxed text-chrome-text">
                <strong className="text-ink">Vibe Coding</strong> is a new way of building software where you write instructions in plain English, and an Artificial Intelligence writes the actual code for you. You act as the "Director" giving instructions, while the AI acts as the developer typing out the complicated syntax.
              </p>
            </div>
          </section>

          {/* 2. Anatomy of a Website */}
          <section id="anatomy" className="scroll-mt-32 space-y-6">
            <h2 className="text-3xl font-serif text-ink border-b border-hairline pb-4">2. The Anatomy of a Website</h2>
            <p className="text-chrome-text">Before diving into tools, you should know the 3 basic ingredients of every website. All fancy modern tools are just shortcuts to write these three things faster.</p>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { title: "HTML", subtitle: "The Skeleton", desc: "Tells the browser what content exists (e.g., 'This is a button').", icon: Layout },
                { title: "CSS", subtitle: "The Paint & Decor", desc: "Makes it look pretty (e.g., 'Make the button red').", icon: Layers },
                { title: "JavaScript", subtitle: "The Brains / Muscles", desc: "Makes things actually do something (e.g., show a popup).", icon: Code }
              ].map((item, i) => (
                <div key={i} className="bg-paper border border-hairline rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-10 h-10 rounded bg-chrome-bg flex items-center justify-center mb-4">
                    <item.icon className="w-5 h-5 text-accent" />
                  </div>
                  <h3 className="font-bold text-ink text-lg">{item.title}</h3>
                  <p className="text-xs text-accent font-medium mb-3">{item.subtitle}</p>
                  <p className="text-sm text-chrome-text-soft">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* 3. Markdown */}
          <section id="markdown" className="scroll-mt-32 space-y-6">
            <h2 className="text-3xl font-serif text-ink border-b border-hairline pb-4">3. What is a Markdown (.md) File?</h2>
            <p className="text-chrome-text"><strong>Markdown</strong> is a lightweight way to format text using simple symbols, favored by developers over heavy programs like Microsoft Word.</p>
            <div className="bg-ink text-paper rounded-xl p-6 font-mono text-sm shadow-xl space-y-3">
              <div className="flex gap-4">
                <span className="text-chrome-text-soft w-32 shrink-0">Type this:</span>
                <span className="text-paper">**bold text**</span>
              </div>
              <div className="flex gap-4">
                <span className="text-chrome-text-soft w-32 shrink-0">Get this:</span>
                <span className="font-bold text-accent">bold text</span>
              </div>
              <div className="h-px bg-chrome-text-soft/30 my-4" />
              <div className="flex gap-4">
                <span className="text-chrome-text-soft w-32 shrink-0">Type this:</span>
                <span className="text-paper"># Heading</span>
              </div>
              <div className="flex gap-4">
                <span className="text-chrome-text-soft w-32 shrink-0">Get this:</span>
                <span className="font-serif text-lg text-accent">Heading</span>
              </div>
            </div>
          </section>

          {/* 4. Accounts / Toolbelt */}
          <section id="accounts" className="scroll-mt-32 space-y-6">
            <h2 className="text-3xl font-serif text-ink border-b border-hairline pb-4">4. The Accounts: Developer Toolbelt</h2>
            <p className="text-chrome-text">To build modern apps, you don't host everything on your own computer. You use cloud services.</p>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { name: "GitHub", desc: "A save-state system for your code. Roll back mistakes easily." },
                { name: "OpenAI / Anthropic", desc: "The companies that make the AI 'brains' (like ChatGPT or Claude)." },
                { name: "Vercel", desc: "Your hosting provider. Puts your app on the internet." },
                { name: "Supabase", desc: "Your database. Securely stores user data and passwords." },
                { name: "v0.dev", desc: "A specialized AI tool just for designing user interfaces." },
                { name: "Cursor", desc: "Your workspace. An 'AI IDE' that writes and edits code alongside you." }
              ].map((item, i) => (
                <div key={i} className="flex gap-4 border border-hairline rounded-lg p-4 bg-chrome-bg/30">
                  <div className="w-2 h-full bg-accent rounded-full shrink-0" />
                  <div>
                    <h4 className="font-bold text-ink">{item.name}</h4>
                    <p className="text-sm text-chrome-text-soft mt-1">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 5. AI Tools */}
          <section id="ai-tools" className="scroll-mt-32 space-y-6">
            <h2 className="text-3xl font-serif text-ink border-b border-hairline pb-4">5. The AI Tools: Robot Employees</h2>
            <div className="space-y-4">
              {[
                { role: "The General Contractor", name: "Cursor", desc: "Understands all your files. Makes complex changes across multiple files at once." },
                { role: "The Scaffolder", name: "Claude Code", desc: "Runs in the command line. Incredibly fast at generating the initial, bulk foundation." },
                { role: "The Interior Designer", name: "v0.dev", desc: "Instantly generates the visual code based on your prompt (e.g., 'modern login screen')." },
                { role: "The Prototypers", name: "Bolt.new & Lovable", desc: "Browser-based. Great for rapid, throwaway testing." },
                { role: "The Autocomplete", name: "GitHub Copilot", desc: "Guesses the rest of the line as you type." }
              ].map((tool, i) => (
                <div key={i} className="bg-paper border border-hairline p-5 rounded-xl shadow-sm flex items-start gap-4">
                  <div className="bg-chrome-bg p-3 rounded-lg"><Bot className="w-6 h-6 text-accent" /></div>
                  <div>
                    <div className="text-xs font-bold text-accent tracking-wider uppercase mb-1">{tool.role}</div>
                    <h4 className="font-bold text-lg text-ink">{tool.name}</h4>
                    <p className="text-chrome-text-soft text-sm mt-1">{tool.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 6. Tech Stack */}
          <section id="tech-stack" className="scroll-mt-32 space-y-6">
            <h2 className="text-3xl font-serif text-ink border-b border-hairline pb-4">6. The Tech Stack: Building Blocks</h2>
            <div className="grid gap-6">
              <div className="border-l-2 border-ink pl-6">
                <h4 className="font-bold text-lg text-ink">Next.js (The Framework)</h4>
                <p className="text-chrome-text-soft">The foundation and plumbing. Handles page loading and server-browser communication.</p>
              </div>
              <div className="border-l-2 border-ink pl-6">
                <h4 className="font-bold text-lg text-ink">TypeScript (The Language)</h4>
                <p className="text-chrome-text-soft">JavaScript with strict rules. Prevents the AI from hallucinating structural errors.</p>
              </div>
              <div className="border-l-2 border-ink pl-6">
                <h4 className="font-bold text-lg text-ink">Tailwind CSS & shadcn/ui (The Paint)</h4>
                <p className="text-chrome-text-soft">Style things quickly with utility words. Pre-built, beautiful UI components.</p>
              </div>
              <div className="border-l-2 border-ink pl-6">
                <h4 className="font-bold text-lg text-ink">Supabase (The Filing Cabinet)</h4>
                <p className="text-chrome-text-soft">Handles database (storing data) and Auth (secure user login).</p>
              </div>
              <div className="border-l-2 border-ink pl-6">
                <h4 className="font-bold text-lg text-ink">Vercel AI SDK</h4>
                <p className="text-chrome-text-soft">Plug AI chat features directly into your own app effortlessly.</p>
              </div>
            </div>
          </section>

          {/* 7. Jargon */}
          <section id="jargon" className="scroll-mt-32 space-y-6">
            <h2 className="text-3xl font-serif text-ink border-b border-hairline pb-4">7. Key Terms Explained</h2>
            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-6">
              {[
                { term: "Prompt", desc: "The instruction or command you type to the AI. When you say, 'Create a blue button,' that sentence is your prompt. Writing clear, detailed prompts is the most important skill in vibe coding!" },
                { term: "API", desc: "Application Programming Interface. A way for two pieces of software to talk to each other. When your app needs to get the weather, it asks a Weather API." },
                { term: "LLM", desc: "Large Language Model. The underlying technology behind tools like ChatGPT or Claude. It is a massive AI model trained on huge amounts of text to understand and generate human language." },
                { term: "RAG", desc: "Retrieval-Augmented Generation. A technique where you give an AI a specific document so it can search that document before answering a question. It stops the AI from making things up." },
                { term: "RSC", desc: "React Server Components. A modern way of writing web pages where parts of the page are built on the server (which is fast and secure) before being sent to the user's browser." },
                { term: "CLI", desc: "Command Line Interface. That black screen with white text where hackers in movies type really fast. In reality, it's just a text-based way to tell your computer to do things." },
                { term: "Git", desc: "The system that tracks changes to your code. GitHub is the website that stores your Git history in the cloud." },
                { term: "Frontend", desc: "The parts of the app the user actually sees and clicks on (buttons, text, layout). Next.js and Tailwind handle this." },
                { term: "Backend", desc: "The hidden plumbing behind the scenes (databases, security, servers). Supabase handles this." },
                { term: "Localhost", desc: "Your personal, private testing ground. Before you publish a website to the internet, it runs directly on your computer at an address called localhost. Only you can see it." },
                { term: "NPM / Packages", desc: "Think of these as free Lego blocks made by other developers. If you want to add a calendar, you install a 'calendar package' using a tool like NPM." },
                { term: "Terminal", desc: "Don't be afraid of the black screen with white text! You mostly just copy and paste commands here to start your app or install packages." },
                { term: "E2E Testing", desc: "End-to-End Testing. Automated software (like Playwright) that acts like a robot user. It clicks through your app automatically to make sure everything works before you publish." }
              ].map((word, i) => (
                <div key={i} className="border-b border-hairline border-dashed pb-3">
                  <strong className="text-ink block mb-1">{word.term}</strong>
                  <span className="text-chrome-text-soft text-sm">{word.desc}</span>
                </div>
              ))}
            </div>
          </section>

          {/* 8. Workflow */}
          <section id="workflow" className="scroll-mt-32 space-y-6">
            <h2 className="text-3xl font-serif text-ink border-b border-hairline pb-4">8. The Workflow: How it Fits Together</h2>
            <div className="relative border-l-2 border-accent/30 ml-4 space-y-12 pb-8">
              {[
                { step: "1. The Idea", text: "You decide you want to build a simple habit tracker." },
                { step: "2. The Prototype", text: "Use v0.dev to generate the visual code." },
                { step: "3. The Foundation", text: "Open Cursor, paste the code, ask AI to connect a database." },
                { step: "4. The Database", text: "Set up Supabase to securely save user habits." },
                { step: "5. The Save Point", text: "Tell Cursor to save your code to GitHub." },
                { step: "6. The Launch", text: "Vercel automatically updates your live website for the world to see." }
              ].map((flow, i) => (
                <div key={i} className="relative pl-8">
                  <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-accent border-4 border-paper shadow-sm" />
                  <h4 className="font-bold text-ink text-lg">{flow.step}</h4>
                  <p className="text-chrome-text-soft mt-2">{flow.text}</p>
                </div>
              ))}
            </div>
          </section>

          {/* 9. Rules */}
          <section id="rules" className="scroll-mt-32 space-y-6">
            <h2 className="text-3xl font-serif text-ink border-b border-hairline pb-4">9. Golden Rules of Vibe Coding</h2>
            <div className="bg-accent/5 border border-accent/20 rounded-2xl p-8 space-y-6">
              <p className="text-chrome-text italic">Working with AI is like managing an eager but easily confused intern.</p>
              <ul className="space-y-4">
                <li className="flex gap-4 items-start">
                  <CheckCircle2 className="w-6 h-6 text-accent shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-ink">Take Small Steps</strong>
                    <span className="text-chrome-text-soft text-sm">Don't ask to "Build an Uber clone." Ask for "Create a login screen."</span>
                  </div>
                </li>
                <li className="flex gap-4 items-start">
                  <CheckCircle2 className="w-6 h-6 text-accent shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-ink">Be Specific</strong>
                    <span className="text-chrome-text-soft text-sm">Instead of "make it nice," say "make buttons rounded with a blue gradient."</span>
                  </div>
                </li>
                <li className="flex gap-4 items-start">
                  <CheckCircle2 className="w-6 h-6 text-accent shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-ink">Use AI to Learn</strong>
                    <span className="text-chrome-text-soft text-sm">Ask it: "Explain what this block of code does like I'm 5 years old."</span>
                  </div>
                </li>
                <li className="flex gap-4 items-start">
                  <CheckCircle2 className="w-6 h-6 text-accent shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-ink">Don't Be Afraid to Undo</strong>
                    <span className="text-chrome-text-soft text-sm">AI broke your app? Hit undo or use Git to roll back, and try a different prompt.</span>
                  </div>
                </li>
              </ul>
            </div>
          </section>

          {/* 10. Stuck */}
          <section id="stuck" className="scroll-mt-32 space-y-6">
            <h2 className="text-3xl font-serif text-ink border-b border-hairline pb-4">10. Where to Go When You Get Stuck</h2>
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-1 bg-chrome-bg/50 border border-hairline rounded-xl p-6 text-center">
                <AlertTriangle className="w-8 h-8 text-ink mx-auto mb-3" />
                <h4 className="font-bold text-ink mb-2">Ask the AI</h4>
                <p className="text-sm text-chrome-text-soft">Paste red error text into Cursor/ChatGPT: "I got this error, how do I fix it?"</p>
              </div>
              <div className="flex-1 bg-chrome-bg/50 border border-hairline rounded-xl p-6 text-center">
                <BookOpen className="w-8 h-8 text-ink mx-auto mb-3" />
                <h4 className="font-bold text-ink mb-2">Read the Docs</h4>
                <p className="text-sm text-chrome-text-soft">Most tools (Next.js, Supabase) have excellent documentation.</p>
              </div>
              <div className="flex-1 bg-chrome-bg/50 border border-hairline rounded-xl p-6 text-center">
                <Map className="w-8 h-8 text-ink mx-auto mb-3" />
                <h4 className="font-bold text-ink mb-2">Join the Community</h4>
                <p className="text-sm text-chrome-text-soft">Discord servers and subreddits like r/nextjs or r/webdev are incredibly helpful.</p>
              </div>
            </div>
          </section>

          {/* Next Steps */}
          <section className="space-y-6 pt-16 border-t border-hairline mt-32">
            <h2 className="text-3xl font-serif text-ink border-b border-hairline pb-4">Ready to Write Prompts Like a Pro?</h2>
            <div className="bg-chrome-bg/50 border border-hairline rounded-xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h4 className="font-bold text-ink mb-2 text-xl">The High-Quality Prompts Guide</h4>
                <p className="text-chrome-text-soft">Go from "just get something on screen" to shipping a polished, production-ready site with our phase-by-phase prompt engineering guide.</p>
              </div>
              <Link href="/tech-stack/prompts" className="px-6 py-3 shrink-0 bg-ink text-paper rounded-full font-bold hover:bg-ink-soft transition-colors flex items-center gap-2 shadow-sm">
                Read the Guide <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </section>

        </div>
      </main>
    </div>
  );
}
