import { Metadata } from "next";
import { Sparkles, FileText, Zap, Shield } from "lucide-react";

export const metadata: Metadata = {
  title: "Features",
  description: "Explore the features that make Skribe the ultimate markdown editor for the AI era.",
};

export default function FeaturesPage() {
  const features = [
    {
      title: "Local-First Architecture",
      description: "Your files never leave your machine unless you want them to. Skribe edits standard markdown files directly on your file system.",
      icon: Shield,
    },
    {
      title: "Seamless AI Integration",
      description: "Built from the ground up to work with Claude Code and other agentic coding tools. See your AI's edits happen in real time.",
      icon: Sparkles,
    },
    {
      title: "Calm, Distraction-Free",
      description: "A gorgeous, minimalist interface inspired by literary editors, designed to keep you focused on your thoughts.",
      icon: FileText,
    },
    {
      title: "Lightning Fast",
      description: "Native macOS performance. No electron bloat. Skribe opens instantly and handles massive documents with ease.",
      icon: Zap,
    }
  ];

  return (
    <div className="min-h-screen bg-paper text-ink pb-24">
      <div className="max-w-5xl mx-auto px-6 lg:px-10 pt-24">
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-serif mb-6 text-accent">Powerful Features, Simple Interface</h1>
          <p className="text-lg text-chrome-text-soft max-w-2xl mx-auto leading-relaxed">
            Skribe is designed for the modern writer who uses AI to augment their workflow. 
            Everything you need, nothing you don't.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div key={idx} className="bg-chrome-bg/50 border border-hairline rounded-xl p-8 hover:bg-chrome-bg transition-colors">
                <div className="w-12 h-12 bg-paper rounded-lg border border-hairline flex items-center justify-center mb-6">
                  <Icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-xl font-serif font-medium mb-3">{feature.title}</h3>
                <p className="text-ink-soft leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
