"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Lock, Hammer } from "lucide-react";

export type StageData = {
  id: number;
  title: string;
  lesson: React.ReactNode;
  interactiveType: "injector";
  basePrompt: string;
  missingLabel: string;
  choices: { text: string; correct: boolean; snippet: string }[];
};

type Props = {
  stage: StageData;
  isUnlocked: boolean;
  onComplete: () => void;
};

export function StageCard({ stage, isUnlocked, onComplete }: Props) {
  const [selectedSnippet, setSelectedSnippet] = useState<string | null>(null);
  const [isCompleted, setIsCompleted] = useState(false);
  const [error, setError] = useState(false);

  const handleSelect = (choice: { text: string; correct: boolean; snippet: string }) => {
    setSelectedSnippet(choice.snippet);
    if (choice.correct && !isCompleted) {
      setError(false);
      setIsCompleted(true);
      setTimeout(() => {
        onComplete();
      }, 1000);
    } else {
      setError(true);
    }
  };

  if (!isUnlocked) {
    return (
      <div className="relative border-2 border-dashed border-hairline bg-paper/50 rounded-xl p-5 md:p-8 opacity-50 flex flex-col items-center justify-center min-h-[160px] md:min-h-[200px]">
        <Lock className="w-8 h-8 text-chrome-text-soft mb-3" />
        <h3 className="text-ink font-medium font-serif text-xl mb-1">Stage {stage.id}: Locked</h3>
        <p className="text-sm text-chrome-text-soft">Complete previous stages to unlock</p>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`border-2 rounded-xl p-5 md:p-8 shadow-sm transition-colors ${
        isCompleted ? "border-success/30 bg-success/5" : "border-ink/10 bg-paper hover:border-ink/20"
      }`}
    >
      <div className="flex items-center justify-between mb-6 pb-4 border-b border-dashed border-hairline">
        <h2 className="text-2xl font-serif text-accent font-medium">
          Stage {stage.id} — {stage.title}
        </h2>
        {isCompleted && (
          <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="text-success flex items-center gap-2 font-mono text-sm font-semibold">
            <CheckCircle2 className="w-5 h-5" />
            UNLOCKED
          </motion.div>
        )}
      </div>

      <div className="prose prose-sm text-ink-soft max-w-none mb-8 font-mono text-sm leading-relaxed">
        {stage.lesson}
      </div>

      <div className="bg-chrome-bg rounded-lg p-4 md:p-6 border border-hairline relative">
        <h3 className="font-semibold text-ink mb-4 font-mono text-sm flex items-center gap-2">
          <Hammer className="w-4 h-4 text-accent" /> Fix this prompt
        </h3>
        
        {/* The Prompt Editor */}
        <div className="bg-ink text-chrome-bg p-4 rounded-md font-mono text-sm leading-loose shadow-inner mb-6 whitespace-pre-wrap">
          {stage.basePrompt}
          
          {/* Injection Slot */}
          <span className={`inline-block ml-2 px-2 py-1 rounded border-2 border-dashed ${
            isCompleted ? "border-success bg-success text-paper font-semibold shadow-sm" : error ? "border-error bg-error text-paper font-semibold shadow-sm" : "border-chrome-text-soft text-chrome-text-soft"
          }`}>
            {selectedSnippet ? selectedSnippet : `[ ${stage.missingLabel} ]`}
          </span>
        </div>

        {/* The Toolkit */}
        {!isCompleted && (
          <div className="space-y-3 relative z-10">
            <p className="text-xs font-mono font-semibold text-ink uppercase tracking-wider mb-2">Available Snippets:</p>
            <div className="flex flex-col gap-2">
              {stage.choices.map((choice, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSelect(choice)}
                  className={`w-full text-left px-4 py-3 rounded-md border transition-all font-mono text-sm hover:border-ink/40 bg-paper text-ink`}
                >
                  {choice.text}
                </button>
              ))}
            </div>
            {error && (
              <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-xs text-error font-mono mt-2">
                Incorrect snippet. Think about what information the AI is missing.
              </motion.p>
            )}
          </div>
        )}
      </div>
    </motion.div>
  );
}
