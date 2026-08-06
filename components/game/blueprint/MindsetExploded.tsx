"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ArrowRight, Zap, Target, Hammer } from "lucide-react";

type ExplodedNode = {
  id: string;
  trigger: string;
  replacement: string;
  explanation: string;
  icon: React.ReactNode;
};

const NODES: ExplodedNode[] = [
  {
    id: "vague1",
    trigger: "a cool website",
    replacement: "a minimalist Next.js landing page",
    explanation: "'Cool' means nothing to AI. Specify exactly what kind of project it is and the tech stack you want.",
    icon: <Target className="w-5 h-5 text-accent" />
  },
  {
    id: "vague2",
    trigger: "make it look nice",
    replacement: "use a monochrome color scheme with 2px borders",
    explanation: "AI doesn't have 'taste'. You have to give it specific styling rules or a design system to follow.",
    icon: <Search className="w-5 h-5 text-accent" />
  },
  {
    id: "vague3",
    trigger: "add some features",
    replacement: "include a hero section, feature grid, and newsletter signup form",
    explanation: "List the exact features and sections you need. Don't leave the architecture up to chance.",
    icon: <Hammer className="w-5 h-5 text-accent" />
  }
];

export function MindsetExploded({ onComplete }: { onComplete?: () => void }) {
  const [exploded, setExploded] = useState<Record<string, boolean>>({});
  const [hasStarted, setHasStarted] = useState(false);

  const toggleNode = (id: string) => {
    setExploded(prev => {
      const next = { ...prev, [id]: true };
      if (Object.keys(next).length === NODES.length && onComplete) {
        setTimeout(onComplete, 1000);
      }
      return next;
    });
  };

  const isFullyExploded = Object.keys(exploded).length === NODES.length;

  return (
    <div className="border-2 border-hairline bg-paper rounded-xl p-5 md:p-8 shadow-sm">
      <div className="mb-6 md:mb-8">
        <h2 className="text-2xl font-serif text-accent mb-2 flex items-center gap-2">
          <Zap className="text-warning" /> The Mindset Shift
        </h2>
        <p className="font-mono text-sm text-ink-soft leading-relaxed">
          Beginners write wishes. Pros write specs. Click the highlighted vague words in the beginner prompt below to "explode" them into a professional spec.
        </p>
      </div>

      {!hasStarted ? (
        <div className="flex justify-center py-8 border border-dashed border-hairline rounded-lg bg-chrome-bg/50">
          <button 
            onClick={() => setHasStarted(true)}
            className="px-6 py-3 bg-accent text-paper font-mono text-sm uppercase tracking-wider font-semibold rounded-lg hover:bg-accent-deep-green transition-colors flex items-center gap-2"
          >
            I'm Ready to Start <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="relative p-4 md:p-6 rounded-lg bg-chrome-bg border border-hairline font-mono text-base leading-loose mb-6 md:mb-8 text-ink">
        <span>I want you to build </span>
        
        {/* Node 1 */}
        <span className="relative inline-block mx-1">
          <button 
            onClick={() => toggleNode("vague1")}
            className={`px-2 py-0.5 rounded transition-all duration-300 ${
              exploded["vague1"] 
                ? "bg-success/10 text-success border border-success/30 font-bold" 
                : "bg-warning/20 text-ink font-semibold border border-warning/50 hover:bg-warning/30 hover:scale-105 cursor-pointer underline decoration-wavy decoration-warning/80 animate-pulse shadow-sm"
            }`}
          >
            {exploded["vague1"] ? NODES[0].replacement : NODES[0].trigger}
          </button>
        </span>
        
        <span>, </span>
        
        {/* Node 2 */}
        <span className="relative inline-block mx-1">
          <button 
            onClick={() => toggleNode("vague2")}
            className={`px-2 py-0.5 rounded transition-all duration-300 ${
              exploded["vague2"] 
                ? "bg-success/10 text-success border border-success/30 font-bold" 
                : "bg-warning/20 text-ink font-semibold border border-warning/50 hover:bg-warning/30 hover:scale-105 cursor-pointer underline decoration-wavy decoration-warning/80 animate-pulse shadow-sm"
            }`}
          >
            {exploded["vague2"] ? NODES[1].replacement : NODES[1].trigger}
          </button>
        </span>
        
        <span>, and </span>
        
        {/* Node 3 */}
        <span className="relative inline-block mx-1">
          <button 
            onClick={() => toggleNode("vague3")}
            className={`px-2 py-0.5 rounded transition-all duration-300 ${
              exploded["vague3"] 
                ? "bg-success/10 text-success border border-success/30 font-bold" 
                : "bg-warning/20 text-ink font-semibold border border-warning/50 hover:bg-warning/30 hover:scale-105 cursor-pointer underline decoration-wavy decoration-warning/80 animate-pulse shadow-sm"
            }`}
          >
            {exploded["vague3"] ? NODES[2].replacement : NODES[2].trigger}
          </button>
        </span>

      </div>

      <div className="space-y-4">
        <h3 className="font-serif font-medium text-ink mb-4 border-b border-hairline pb-2">Explanation</h3>
        
        {NODES.map((node, i) => (
          <div key={node.id} className="min-h-[80px]">
            <AnimatePresence mode="wait">
              {exploded[node.id] ? (
                <motion.div 
                  key="exploded"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
                  className="flex gap-3 p-3 md:gap-4 md:p-4 rounded-lg border border-success/20 bg-success/5 items-start"
                >
                  <div className="mt-0.5 flex-shrink-0">{node.icon}</div>
                  <div>
                    <div className="font-mono text-xs font-semibold text-success mb-1">
                      UPGRADED: "{node.trigger}" <ArrowRight className="inline w-3 h-3 mx-1" /> "{node.replacement}"
                    </div>
                    <div className="font-mono text-xs text-ink-soft leading-relaxed">
                      {node.explanation}
                    </div>
                  </div>
                </motion.div>
              ) : (
                <motion.div 
                  key="unexploded"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="flex gap-3 p-3 md:gap-4 md:p-4 rounded-lg border border-dashed border-hairline bg-paper items-center justify-center h-full opacity-70"
                >
                  <span className="font-mono text-xs text-ink-soft">Explode node {i + 1} to analyze...</span>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>

      <AnimatePresence>
        {isFullyExploded && (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-8 pt-6 border-t border-hairline flex justify-end"
          >
            <div className="px-4 py-2 rounded-full bg-success/10 text-success border border-success/30 font-mono text-xs font-semibold tracking-wide uppercase">
              Mindset Upgraded ✓
            </div>
          </motion.div>
        )}
      </AnimatePresence>
        </motion.div>
      )}
    </div>
  );
}
