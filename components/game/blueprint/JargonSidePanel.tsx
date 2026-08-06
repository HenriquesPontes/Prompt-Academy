"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Book, Terminal, Cpu, Cloud, Code, Database, Globe, Wrench, Search, Layout, Server, Beaker, FileCode } from "lucide-react";

interface JargonSidePanelProps {
  isOpen: boolean;
  onClose: () => void;
}

const GLOSSARY_TERMS = [
  {
    term: "Prompt",
    icon: <Terminal className="w-4 h-4" />,
    definition: "The instruction or command you type to the AI. When you say, 'Create a blue button,' that sentence is your prompt. Writing clear, detailed prompts is the most important skill in vibe coding!"
  },
  {
    term: "API",
    icon: <Cloud className="w-4 h-4" />,
    definition: "Application Programming Interface. A way for two pieces of software to talk to each other. When your app needs to get the weather, it asks a Weather API."
  },
  {
    term: "LLM",
    icon: <Cpu className="w-4 h-4" />,
    definition: "Large Language Model. The underlying technology behind tools like ChatGPT or Claude. It is a massive AI model trained on huge amounts of text to understand and generate human language."
  },
  {
    term: "RAG",
    icon: <Search className="w-4 h-4" />,
    definition: "Retrieval-Augmented Generation. A technique where you give an AI a specific document so it can search that document before answering a question. It stops the AI from making things up."
  },
  {
    term: "RSC",
    icon: <Layout className="w-4 h-4" />,
    definition: "React Server Components. A modern way of writing web pages where parts of the page are built on the server (which is fast and secure) before being sent to the user's browser."
  },
  {
    term: "CLI",
    icon: <Terminal className="w-4 h-4" />,
    definition: "Command Line Interface. That black screen with white text where hackers in movies type really fast. In reality, it's just a text-based way to tell your computer to do things."
  },
  {
    term: "Git",
    icon: <FileCode className="w-4 h-4" />,
    definition: "The system that tracks changes to your code. GitHub is the website that stores your Git history in the cloud."
  },
  {
    term: "Frontend",
    icon: <Layout className="w-4 h-4" />,
    definition: "The parts of the app the user actually sees and clicks on (buttons, text, layout). Next.js and Tailwind handle this."
  },
  {
    term: "Backend",
    icon: <Server className="w-4 h-4" />,
    definition: "The hidden plumbing behind the scenes (databases, security, servers). Supabase handles this."
  },
  {
    term: "Localhost",
    icon: <Globe className="w-4 h-4" />,
    definition: "Your personal, private testing ground. Before you publish a website to the internet, it runs directly on your computer at an address called localhost. Only you can see it."
  },
  {
    term: "NPM / Packages",
    icon: <Wrench className="w-4 h-4" />,
    definition: "Think of these as free Lego blocks made by other developers. If you want to add a calendar, you install a 'calendar package' using a tool like NPM."
  },
  {
    term: "Terminal",
    icon: <Terminal className="w-4 h-4" />,
    definition: "Don't be afraid of the black screen with white text! You mostly just copy and paste commands here to start your app or install packages."
  },
  {
    term: "E2E Testing",
    icon: <Beaker className="w-4 h-4" />,
    definition: "End-to-End Testing. Automated software (like Playwright) that acts like a robot user. It clicks through your app automatically to make sure everything works before you publish."
  }
];

export function JargonSidePanel({ isOpen, onClose }: JargonSidePanelProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-ink/20 backdrop-blur-sm z-[100]"
          />

          {/* Panel */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 bottom-0 w-full max-w-sm bg-paper border-l border-hairline shadow-2xl z-[101] flex flex-col font-mono"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-hairline bg-chrome-bg/50">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-md bg-accent/10 flex items-center justify-center">
                  <Book className="w-4 h-4 text-accent" />
                </div>
                <h2 className="font-serif font-medium text-lg text-ink">Cheat Sheet</h2>
              </div>
              <button 
                onClick={onClose}
                className="p-2 hover:bg-chrome-bg rounded-md transition-colors text-chrome-text-soft hover:text-ink"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              <p className="text-sm text-chrome-text-soft mb-4">
                Vibe coding comes with some jargon. Use this cheat sheet to translate tech speak into plain English.
              </p>

              <div className="space-y-6">
                {GLOSSARY_TERMS.map((item, idx) => (
                  <div key={idx} className="group">
                    <div className="flex items-center gap-2 mb-1.5 text-ink">
                      <div className="text-accent">
                        {item.icon}
                      </div>
                      <h3 className="font-medium text-sm">{item.term}</h3>
                    </div>
                    <p className="text-sm text-chrome-text leading-relaxed pl-6">
                      {item.definition}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
