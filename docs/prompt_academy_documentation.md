# Prompt Academy Documentation

Welcome to the **Prompt Academy**, a comprehensive resource designed to teach you **"Vibe Coding"**—the art of building modern software by writing plain English instructions for AI coding assistants. This documentation synthesizes all the guides, tools, and methodologies required to transition from a beginner to a pro in AI-assisted development.

---

## 1. Vibe Coding & The Modern Tech Stack

### What is "Vibe Coding"?
Vibe Coding is a new paradigm of software development. You act as the "Director" giving instructions in plain English, while the AI acts as the developer writing the complex syntax. 

### The Recommended Tech Stack
Building robust, modern apps requires the right foundation. The Prompt Academy recommends:
- **Framework**: Next.js 16 (App Router) — fast, modern, and heavily represented in AI training data.
- **Language**: TypeScript — strict typing drastically reduces AI hallucinations.
- **Styling**: Tailwind CSS v4 & shadcn/ui — AI tools excel at generating these utility classes and components.
- **Backend/Database**: Supabase — provides Postgres, pgvector (for AI search), and Authentication.
- **AI Integration**: Vercel AI SDK — standardizes calling LLMs (OpenAI, Anthropic) within your app.
- **Hosting**: Vercel — seamless Next.js deployments.

### AI Tool Ecosystem
Different tasks require different AI tools:
- **Cursor**: Your daily AI IDE. Best for deep codebase context, agent-mode edits, and refactoring.
- **Claude Code**: CLI agent excellent for rapid, surgical multi-file scaffolding.
- **v0.dev**: AI UI generator that outputs ready-to-use shadcn/ui + Tailwind code.
- **Bolt.new / Lovable**: Great for rapid prototyping and full-stack throwaway MVPs.

---

## 2. Prompting Progression: Beginner to Pro

A prompt is a **spec, not a wish**. As you advance, your prompts should evolve from simple requests to comprehensive technical briefs.

### Phase 1: Beginner (Getting something on screen)
Focus on the 4 essential ingredients: **What**, **Who**, **Features**, and **Constraints**.
- *Example:* "Build a single-page portfolio for a designer. Include: Hero, About, Projects, Contact. Tech: HTML/Tailwind."

### Phase 2: Novice (Iterative Building)
Stop trying to build the entire app in one prompt. Build in stages (Structure → Content → Styling → Interactivity → Polish). Reference existing code to make tweaks.
- *Example:* "On the hero section we just built, increase the heading size and add a subtle fade-in animation on load."

### Phase 3: Intermediate (Thinking Like a Product Owner)
Specify architecture, data flow, and edge cases. Think in systems and user flows.
- *Example:* "When a user clicks 'Add to Cart', show a toast notification and update the cart count. If the item is out of stock, disable the button and show inline text."

### Phase 4: Advanced (Architecture & Quality)
Prompt for non-functional requirements like accessibility (a11y), SEO, performance, and maintainability. Ask the AI to explain trade-offs before implementing.
- *Example:* "Set up the project using Next.js. Ensure all interactive elements are keyboard-navigable. Explain 2 approaches for state management and implement your recommendation."

### Phase 5: Pro (Full Lifecycle & Specs)
Treat the AI as a collaborator. Maintain a living spec document, use role-prompting (e.g., "Act as a senior engineer"), and use test-driven verification prompts.

---

## 3. The 5 Essential Prompts

Instead of guessing what to write, match your situation to one of these 5 core scenarios:

### 1. Adding Something New
> *"I am building a new feature in our existing codebase. Follow the established structure, architecture, and layout... Write the code as a senior developer would..."*
- **Why it works:** Prevents the AI from inventing a new style; forces consistency.

### 2. Fixing Something Broken
> *"This part of the project is broken. Analyze the error carefully and identify the root cause... Ensure the solution works within the existing structure without hidden side effects."*
- **Why it works:** Forces the AI to diagnose the *root cause* instead of blindly patching the symptom. Always include the exact error and expected vs. actual behavior.

### 3. Cleaning Messy Code
> *"This code is messy. Refactor it into clean, high-quality code while preserving functionality. Improve readability without over-engineering..."*
- **Why it works:** Stops the AI from changing behavior or over-engineering the solution.

### 4. Stuck in a Debugging Loop
> *"I am stuck... Act like a senior engineer and focus on root-cause debugging. Add targeted logging where needed, interpret the results, and identify the exact failure chain..."*
- **Why it works:** Breaks the cycle of guessing. Forces evidence-based debugging via logging and tracing.

### 5. Understanding Confusing Code
> *"I don't fully understand this code. Explain it step by step in plain language, as if teaching a beginner. Show how it connects to the rest of the project..."*
- **Why it works:** Ensures you actually understand the code the AI (or a coworker) wrote before you start modifying it.

### Bonus: The "Step-by-Step" Prompts
> *"Build the app step-by-step by focusing on one task at a time @Context file"*
- **Why it works:** Prevents the AI from overwhelming you with a massive, unreviewable code dump.

---

## 4. Prompt Structure Cheat Sheet

A pro-level prompt is structured like a mini specification document. Always verify your prompt against this checklist:

1. **Role:** *"Act as a senior frontend developer..."*
2. **Context:** *"This is a bakery site using Tailwind. We just finished the hero section..."*
3. **Task:** *"Build a checkout page with a shipping form."*
4. **Constraints:** *"No external libraries. Match the existing button styles."*
5. **Format:** *"Give me the full file, then a short list of changes."*
6. **Success Criteria:** *"It must be mobile-responsive and validate email formats before submission."*

### Common Mistakes to Avoid
- **Vague Adjectives:** Avoid words like "modern" or "make it pop." Use concrete references (e.g., "2px solid border", "navy blue palette").
- **No Constraints:** Without boundaries, the AI will over-build, restructure files, or add unnecessary libraries.
- **"Fix the bug":** Never just say "it's broken." Always provide: Expected behavior, Actual behavior, Error logs, and what you've already tried.
