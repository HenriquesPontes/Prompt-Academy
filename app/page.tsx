import Link from "next/link";
import { PenTool, Terminal, Sparkles, Send, Paperclip } from "lucide-react";
import * as motion from "framer-motion/client";
import { BookingButton } from "@/components/ui/BookingButton";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-paper font-serif selection:bg-selection overflow-hidden">
      
      {/* Decorative Background Elements */}
      <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-chrome-bg/50 rounded-full blur-3xl opacity-50 pointer-events-none" />
      <div className="absolute top-1/4 right-1/4 translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-chrome-bg/30 rounded-full blur-3xl opacity-50 pointer-events-none" />

      {/* Navigation Header */}
      <header className="absolute top-0 left-0 right-0 h-16 z-50 flex items-center px-10 justify-between">
        <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
          <span className="font-serif font-medium text-xl tracking-wide text-ink">Skribe</span>
        </Link>
        <BookingButton className="text-sm font-medium bg-accent text-paper px-4 py-2 rounded-full hover:bg-accent-deep-green transition-colors flex items-center gap-2 shadow-sm" />
      </header>

      {/* Main Content */}
      <main className="mx-auto flex min-h-screen w-full max-w-[100rem] items-center px-6 sm:px-10 py-24">
        <div className="grid w-full grid-cols-1 items-center gap-12 lg:grid-cols-[minmax(0,1.2fr)_minmax(40rem,1fr)] lg:gap-20 mt-8 lg:mt-0 relative z-10">
          
          {/* Left Column: Visual Area - Animated AI Composer */}
          <div className="order-2 lg:order-1 relative w-full max-w-2xl mx-auto flex items-center justify-center p-8 sm:p-12 h-[500px]">
             
             {/* The Composer Surface */}
             <motion.div 
               initial={{ y: 20, opacity: 0 }}
               animate={{ y: 0, opacity: 1 }}
               transition={{ duration: 0.8, ease: "easeOut" }}
               className="relative w-full max-w-[34rem] bg-ai-surface rounded-[24px] border border-hairline shadow-[0_10px_30px_rgb(42_42_42_/_12%)] p-2 z-20 flex flex-col"
             >
                {/* Simulated Content Area */}
                <div className="px-4 pt-4 pb-12">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="bg-selection text-success px-3 py-1 rounded-full text-xs font-sans font-medium flex items-center gap-1.5 w-fit">
                      <Terminal className="w-3 h-3" />
                      prompt_academy.md
                    </div>
                  </div>
                  
                  <motion.p 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 1 }}
                    className="font-mono text-base text-ink"
                  >
                    [Role] + [Context] + [Request] + [Constraints] + [Formatting]
                  </motion.p>
                </div>

                {/* Input Controls Row */}
                <div className="flex items-center justify-between p-2">
                  <button className="w-10 h-10 rounded-full flex items-center justify-center text-chrome-text-soft hover:bg-chrome-bg transition-colors">
                    <Paperclip className="w-5 h-5" />
                  </button>
                  <button className="w-10 h-10 rounded-full bg-submit text-paper flex items-center justify-center hover:bg-submit-hover transition-colors shadow-sm">
                    <Send className="w-4 h-4 ml-0.5" />
                  </button>
                </div>
             </motion.div>

             {/* Floating Stream Preview / Context Card */}
             <motion.div 
               initial={{ y: 40, opacity: 0, scale: 0.95 }}
               animate={{ 
                 y: [0, -8, 0], 
                 opacity: 1, 
                 scale: 1 
               }}
               transition={{ 
                 y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
                 opacity: { duration: 0.8, delay: 0.3 },
                 scale: { duration: 0.8, delay: 0.3 }
               }}
               className="absolute top-10 right-4 sm:right-10 w-64 bg-white/75 backdrop-blur-xl rounded-t-xl rounded-b-md border border-hairline border-b-0 shadow-modal p-4 z-10"
             >
                <div className="flex items-center gap-2 mb-3 text-accent text-sm font-sans font-medium">
                  <Sparkles className="w-4 h-4" />
                  Thinking...
                </div>
                <div className="space-y-2">
                  <div className="h-2 bg-chrome-bg rounded-full w-full"></div>
                  <div className="h-2 bg-chrome-bg rounded-full w-5/6"></div>
                  <div className="h-2 bg-chrome-bg rounded-full w-4/6"></div>
                </div>
             </motion.div>

          </div>

          {/* Right Column: Copy and CTA */}
          <div className="order-1 lg:order-2 flex flex-col items-start lg:pl-10">
            
            {/* Removed Pill Badge */}

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-doc-h1 font-normal tracking-tight leading-[1.15] text-ink md:text-display lg:text-display-md"
            >
              <span className="block">Prompting, made precise.</span>
              <span className="block mt-2">Built with your mindset.</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-8 max-w-xl font-sans text-lg leading-relaxed text-ink-soft"
            >
              Prompt Academy opens a curriculum of best practices and interactive challenges. A calm, step-by-step to master prompt engineering and build like an architect.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-12 flex flex-col sm:flex-row items-center gap-4 w-full"
            >
              <Link 
                href="/prompt-academy/play"
                className="bg-ink text-paper px-8 py-4 rounded-full font-sans font-medium hover:bg-ink-soft transition-all inline-flex items-center justify-center gap-3 text-lg shadow-sm w-full sm:w-auto h-14"
              >
                <PenTool className="w-5 h-5" /> Start the Academy
              </Link>
              <Link 
                href="/tech-stack"
                className="px-8 py-4 rounded-full font-sans font-medium border border-hairline text-ink hover:bg-chrome-bg transition-all inline-flex items-center justify-center gap-3 text-lg w-full sm:w-auto h-14"
              >
                Read the Beginner's Guide
              </Link>
            </motion.div>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="mt-6 font-sans text-xs text-chrome-text-soft font-medium tracking-wide"
            >
              PLAIN ENGLISH · STEP-BY-STEP · ACTIONABLE PROMPTS
            </motion.p>
          </div>
          
        </div>
      </main>
    </div>
  );
}
