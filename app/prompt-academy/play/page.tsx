"use client";
import { useState } from "react";
import { StageCard, StageData } from "@/components/game/blueprint/StageCard";
import { LivePromptBuilder } from "@/components/game/blueprint/LivePromptBuilder";
import { ActionPlanReward } from "@/components/game/blueprint/ActionPlanReward";
import { JargonSidePanel } from "@/components/game/blueprint/JargonSidePanel";
import { MindsetExploded } from "@/components/game/blueprint/MindsetExploded";
import { motion, useScroll, useSpring } from "framer-motion";
import { PenTool, Book } from "lucide-react";
import Link from "next/link";

const STAGES: StageData[] = [
  {
    id: 1,
    title: "Beginner Ingredients",
    interactiveType: "injector",
    lesson: (
      <>
        <p>Every good prompt needs 4 core ingredients:</p>
        <ol>
          <li><strong>What</strong> you're building (a landing page, a portfolio)</li>
          <li><strong>Who</strong> it's for (audience/purpose)</li>
          <li><strong>What sections/features</strong> it needs</li>
          <li><strong>Constraints</strong> (tech stack, things to avoid)</li>
        </ol>
      </>
    ),
    basePrompt: "Build a landing page for my bakery.",
    missingLabel: "MISSING_SECTIONS",
    choices: [
      { text: "Inject: Use the Inter font.", correct: false, snippet: "Use the Inter font." },
      { text: "Inject: Include a hero, an about section, and a contact form.", correct: true, snippet: "Include a hero, an about section, and a contact form." }
    ]
  },
  {
    id: 2,
    title: "Building in Steps",
    interactiveType: "injector",
    lesson: (
      <>
        <p>Stop treating prompting as a one-shot game. Instead of explaining the whole project every time, build in passes:</p>
        <ol>
          <li>Structure/layout first</li>
          <li>Content and copy</li>
          <li>Styling and design</li>
        </ol>
        <p>Reference what already exists to maintain context.</p>
      </>
    ),
    basePrompt: "Okay, you just built the HTML skeleton perfectly. Now,",
    missingLabel: "NEXT_STEP",
    choices: [
      { text: "Inject: Build the backend database.", correct: false, snippet: "Build the backend database." },
      { text: "Inject: Apply a dark navy and gold Tailwind color scheme.", correct: true, snippet: "Apply a dark navy and gold Tailwind color scheme." }
    ]
  },
  {
    id: 3,
    title: "Thinking about Behavior",
    interactiveType: "injector",
    lesson: (
      <>
        <p>Once you have a page, you need to prompt for systems and behavior. Start defining user flows and edge cases.</p>
        <p>Example: "When a user clicks 'Add to Cart', show a toast notification."</p>
      </>
    ),
    basePrompt: "I need you to build a signup form.",
    missingLabel: "BEHAVIOR",
    choices: [
      { text: "Inject: Make it work smoothly.", correct: false, snippet: "Make it work smoothly." },
      { text: "Inject: On submit, show a spinner. On success, show a check. On error, turn inputs red.", correct: true, snippet: "On submit, show a spinner. On success, show a check. On error, turn inputs red." }
    ]
  },
  {
    id: 4,
    title: "Invisible Qualities",
    interactiveType: "injector",
    lesson: (
      <>
        <p>Prompt as if you're briefing a senior engineer. Think about non-functional requirements like Performance and Accessibility.</p>
        <p>Pro tip: Use constraint-driven prompting to control scope and protect your existing code.</p>
      </>
    ),
    basePrompt: "Fix the bug in the footer layout.",
    missingLabel: "CONSTRAINT",
    choices: [
      { text: "Inject: Also make the site look better.", correct: false, snippet: "Also make the site look better." },
      { text: "Inject: DO NOT modify the header or main content components.", correct: true, snippet: "DO NOT modify the header or main content components." }
    ]
  }
];

export default function PlayPromptAcademyPage() {
  const [mindsetCompleted, setMindsetCompleted] = useState(false);
  const [unlockedStage, setUnlockedStage] = useState(0); // 0 relates to STAGES array
  const [challengeUnlocked, setChallengeUnlocked] = useState(false);
  const [rewardUnlocked, setRewardUnlocked] = useState(false);
  const [isGlossaryOpen, setIsGlossaryOpen] = useState(false);

  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  const totalStages = STAGES.length;
  // XP calculation
  const currentXP = (mindsetCompleted ? 100 : 0) + (unlockedStage * 100) + (challengeUnlocked ? 100 : 0) + (rewardUnlocked ? 100 : 0);
  const maxXP = 100 + (totalStages * 100) + 200; // mindset + stages + challenge + reward

  const handleStageComplete = (idx: number) => {
    if (idx === unlockedStage && idx < totalStages - 1) {
      setUnlockedStage(prev => prev + 1);
    } else if (idx === totalStages - 1) {
      setChallengeUnlocked(true);
    }
  };

  return (
    <div className="min-h-screen bg-paper text-ink selection:bg-selection relative overflow-x-hidden font-sans">

      {/* Progress Bar Header */}
      <header className="fixed top-0 left-0 right-0 h-16 z-50 flex items-center px-6 md:px-10 justify-between bg-paper/80 backdrop-blur-md border-b border-hairline">
        <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
          <span className="font-serif font-medium text-xl tracking-wide text-ink">Skribe</span>
        </Link>
        <div className="flex items-center gap-4">
          <Link 
            href="#" 
            className="hidden md:flex text-sm font-medium bg-accent text-paper px-4 py-1.5 rounded-full hover:bg-accent-deep-green transition-colors items-center gap-2 shadow-sm"
          >
            Book 1:1 Call
          </Link>
          <button 
            onClick={() => setIsGlossaryOpen(true)}
            className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-chrome-bg border border-hairline text-sm font-medium hover:bg-accent/10 hover:text-accent transition-colors"
          >
            <Book className="w-4 h-4" />
            <span className="hidden md:inline">Cheat Sheet</span>
          </button>
          <div className="w-32 md:w-48 h-3 bg-chrome-bg border border-hairline rounded-full overflow-hidden relative">
            <motion.div 
              className="absolute top-0 left-0 h-full bg-accent"
              initial={{ width: 0 }}
              animate={{ width: `${(currentXP / maxXP) * 100}%` }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-24 pb-24 px-4 md:px-6 md:pt-32 md:pb-32 max-w-4xl mx-auto relative z-10">
        
        {/* Timeline Path (Visual) */}
        <div className="absolute left-6 md:left-[50px] top-[100px] bottom-[200px] w-0.5 border-l-2 border-dashed border-hairline -z-10 hidden md:block" />

        <div className="space-y-16 pl-0 md:pl-12 relative">
          
          {/* Stage 0: Mindset Shift (Exploded) */}
          <div className="relative">
            <div className="absolute -left-12 top-10 w-6 h-6 rounded-full border-2 hidden md:flex items-center justify-center bg-paper z-10 transition-colors duration-500"
                 style={{ borderColor: '#2D5F4A' }}>
              <div className="w-2 h-2 rounded-full transition-colors duration-500"
                   style={{ backgroundColor: mindsetCompleted ? '#2D5F4A' : 'transparent' }} />
            </div>
            <MindsetExploded onComplete={() => setMindsetCompleted(true)} />
          </div>

          {/* Standard Stages */}
          {mindsetCompleted && STAGES.map((stage, idx) => (
            <div key={stage.id} className="relative">
              {/* Timeline dot */}
              <div className="absolute -left-12 top-10 w-6 h-6 rounded-full border-2 hidden md:flex items-center justify-center bg-paper z-10 transition-colors duration-500"
                   style={{ borderColor: idx <= unlockedStage ? '#2D5F4A' : '#E5E5E5' }}>
                <div className="w-2 h-2 rounded-full transition-colors duration-500"
                     style={{ backgroundColor: idx < unlockedStage || (idx === unlockedStage && challengeUnlocked) ? '#2D5F4A' : 'transparent' }} />
              </div>

              <StageCard 
                stage={stage} 
                isUnlocked={idx <= unlockedStage}
                onComplete={() => handleStageComplete(idx)}
              />
            </div>
          ))}
        </div>

        {/* Final Challenge */}
        {challengeUnlocked && (
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-16 md:mt-24 pt-12 md:pt-16 border-t-2 border-dashed border-hairline relative pl-0 md:pl-12"
          >
             <div className="absolute -left-12 top-24 w-6 h-6 rounded-full border-2 hidden md:flex items-center justify-center bg-paper z-10 transition-colors duration-500"
                   style={{ borderColor: '#2D5F4A' }}>
                <div className="w-2 h-2 rounded-full transition-colors duration-500"
                     style={{ backgroundColor: rewardUnlocked ? '#2D5F4A' : 'transparent' }} />
              </div>
            <LivePromptBuilder onComplete={() => setRewardUnlocked(true)} />
          </motion.div>
        )}

        {/* Action Plan Reward */}
        {rewardUnlocked && (
          <div className="mt-16 pl-0 md:pl-12">
            <ActionPlanReward />
          </div>
        )}
      </main>

      <JargonSidePanel 
        isOpen={isGlossaryOpen} 
        onClose={() => setIsGlossaryOpen(false)} 
      />
    </div>
  );
}
