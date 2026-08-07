"use client";
import { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Lock, ArrowRight, Zap, Terminal } from "lucide-react";

type Block = {
  id: string;
  label: string;
  options: { text: string; snippet: string }[];
};

const BLOCKS: Block[] = [
  {
    id: "role",
    label: "Role",
    options: [
      { text: "Senior Developer", snippet: "Act as a senior frontend developer." },
      { text: "Designer", snippet: "Act as a UI/UX designer." },
    ]
  },
  {
    id: "context",
    label: "Context",
    options: [
      { text: "Existing App", snippet: "I am working on an existing React app that uses Tailwind CSS." },
      { text: "Blank Slate", snippet: "This is a brand new project with zero existing code." },
    ]
  },
  {
    id: "task",
    label: "Task",
    options: [
      { text: "Build Login", snippet: "Build a responsive login form." },
      { text: "Fix Bug", snippet: "Fix the layout bug where the header overlaps the main content." },
    ]
  },
  {
    id: "constraints",
    label: "Constraints",
    options: [
      { text: "No Libraries", snippet: "Do not use any external libraries, just plain HTML/CSS." },
      { text: "Match Style", snippet: "Follow the existing design patterns and color variables." },
    ]
  },
  {
    id: "format",
    label: "Format",
    options: [
      { text: "Code Only", snippet: "Provide only the full file code, no explanations." },
      { text: "Diff & Explain", snippet: "Show me the diff of what changed and briefly explain why." },
    ]
  },
  {
    id: "success",
    label: "Success Criteria",
    options: [
      { text: "Mobile Ready", snippet: "It must look perfect on mobile devices and have no console errors." },
      { text: "Accessible", snippet: "It must be fully accessible (ARIA labels, keyboard navigation)." },
    ]
  }
];

export function LivePromptBuilder({ onComplete }: { onComplete: () => void }) {
  const [selections, setSelections] = useState<Record<string, string>>({});
  const [isCompiling, setIsCompiling] = useState(false);
  
  const handleSelect = (blockId: string, snippet: string) => {
    setSelections(prev => ({ ...prev, [blockId]: snippet }));
  };

  const progress = Object.keys(selections).length;
  const isComplete = progress === BLOCKS.length;

  const generatedPrompt = useMemo(() => {
    return BLOCKS.map(b => selections[b.id] ? `${b.label.toUpperCase()}:\n${selections[b.id]}` : `${b.label.toUpperCase()}:\n_`)
      .join("\n\n");
  }, [selections]);

  const handleCompile = () => {
    setIsCompiling(true);
    setTimeout(() => {
      onComplete();
    }, 2000);
  };

  return (
    <div className="border-2 border-dashed border-hairline bg-paper rounded-xl p-5 md:p-8 shadow-sm relative">
      <div className="absolute top-0 right-0 px-3 py-1 bg-chrome-bg border-l border-b border-dashed border-hairline rounded-bl-lg rounded-tr-xl font-mono text-[10px] tracking-widest text-chrome-text-soft">
        REV 05
      </div>
      <div className="text-center mb-8 md:mb-10 pb-6 border-b border-dashed border-hairline relative overflow-hidden pr-12 md:pr-16">
        <h2 className="text-3xl font-serif text-accent mb-3 flex items-center justify-center gap-3">
          <Terminal className="text-warning w-8 h-8" /> Final Boss: The Compiler
        </h2>
        <p className="font-mono text-sm text-chrome-text-soft">
          Lock in your parameters to generate the master spec.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
        {/* Left Side: Blocks */}
        <div className="space-y-8">
          <div className="flex items-center justify-between mb-2">
            <span className="font-mono text-sm font-semibold uppercase tracking-wider text-ink-soft">Parameters</span>
            <span className="font-mono text-sm font-semibold text-accent">{Math.round((progress / BLOCKS.length) * 100)}% Locked</span>
          </div>
          
          <div className="space-y-4">
            {BLOCKS.map((block, idx) => {
              const selectedSnippet = selections[block.id];
              // Only unlock next block if previous is selected
              const isUnlocked = idx === 0 || !!selections[BLOCKS[idx - 1].id];
              
              return (
                <motion.div 
                  key={block.id} 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: isUnlocked ? 1 : 0.4, x: 0 }}
                  className={`border border-hairline rounded-lg overflow-hidden transition-all duration-500 ${isUnlocked ? 'bg-chrome-bg/50' : 'bg-paper grayscale pointer-events-none'}`}
                >
                  <div className="bg-chrome-bg px-4 py-2 border-b border-hairline flex items-center justify-between">
                    <span className="font-mono text-xs font-semibold text-ink uppercase flex items-center gap-2">
                      <span className="opacity-50">0{idx + 1}</span> {block.label}
                    </span>
                    {selectedSnippet && <CheckCircle2 className="w-4 h-4 text-success" />}
                  </div>
                  <div className="p-3 flex gap-2 overflow-x-auto">
                    {block.options.map(opt => (
                      <button
                        key={opt.text}
                        onClick={() => handleSelect(block.id, opt.snippet)}
                        className={`whitespace-nowrap px-4 py-2 rounded-md font-mono text-xs transition-colors border ${
                          selectedSnippet === opt.snippet 
                            ? "bg-ink text-paper border-ink shadow-sm" 
                            : "bg-paper text-ink hover:bg-ink/5 border-hairline"
                        }`}
                      >
                        {opt.text}
                      </button>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Right Side: Spec Preview */}
        <div className="flex flex-col h-full">
          <span className="font-mono text-sm font-semibold uppercase tracking-wider text-ink-soft mb-4 flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-accent animate-pulse" /> Live Spec Document
          </span>
          
          <div className="relative flex-1 bg-chrome-bg text-ink border-2 border-dashed border-hairline rounded-lg p-6 font-mono text-sm whitespace-pre-wrap leading-relaxed shadow-sm overflow-hidden">
            <div className="relative z-20">
              {isCompiling ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-accent animate-pulse"
                >
                  [SYSTEM] Finalizing spec parameters...
                  <br/>
                  [SYSTEM] Verifying constraints...
                  <br/>
                  [SYSTEM] 100% SUCCESS. Spec ready for execution.
                </motion.div>
              ) : (
                <div className={`${isComplete ? 'text-success font-semibold' : 'text-ink opacity-90'}`}>
                  {generatedPrompt}
                  {!isComplete && <span className="animate-pulse ml-1 inline-block w-2 h-4 bg-accent" />}
                </div>
              )}
            </div>
          </div>

          <div className="mt-8 flex justify-end">
            <motion.button
              initial={false}
              animate={{
                opacity: isComplete ? 1 : 0.5,
                y: isComplete ? 0 : 5,
                scale: isCompiling ? 0.95 : 1
              }}
              disabled={!isComplete || isCompiling}
              onClick={handleCompile}
              className="bg-accent text-paper px-8 py-4 rounded-lg font-mono font-medium hover:bg-accent-deep-green transition-all inline-flex items-center gap-2 shadow-sm disabled:cursor-not-allowed uppercase tracking-wider overflow-hidden relative group"
            >
              {isCompiling ? (
                <span className="animate-pulse">Finalizing...</span>
              ) : (
                <>Approve Spec <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" /></>
              )}
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
}
