# The 5 Prompts, Exploded for Beginners

This breaks down the "Prompts I Use 90% of the Time" system — what each one actually does, why it's phrased that way, and a simpler version you can start with if the full version feels like a lot.

## Why this system works (the big idea)

Instead of guessing which prompt to write each time, you match your **situation** to one of 5 buckets:

| Your situation | Use |
|---|---|
| Adding something new | Prompt #1 |
| Something's broken | Prompt #2 |
| Code works but is ugly/hard to read | Prompt #3 |
| You've tried to fix it 3+ times and it's still broken | Prompt #4 |
| You don't understand what the code does | Prompt #5 |

This is a **router**, not a single prompt — the skill is picking the right one, not memorizing all five perfectly.

---

## 1. Building something new

**Full prompt:**
> "I am building a new feature in our existing codebase. Follow the established structure, architecture, and layout of this project. Write the code as a senior developer would: high quality, concise but complete, clear, and maintainable. Use consistent naming, patterns, and best practices that match the codebase. Provide a clean solution that integrates optimally with what's already here, and explain briefly how it fits into the project."

**Broken down — what each part is doing:**
- *"Follow the established structure..."* → stops the AI from inventing a totally different style than the rest of your project.
- *"As a senior developer would"* → this is **role prompting** (from the cheat sheet). It nudges the AI toward more careful, production-quality output instead of a quick throwaway answer.
- *"Concise but complete"* → don't over-explain in comments, but don't leave things half-done either.
- *"Explain briefly how it fits"* → this is your **success criteria** — you want to understand the integration, not just get a code dump.

**Beginner-simplified version** (use this if the full one feels heavy):
```
Add [feature] to my project. Match the style and structure of my
existing code. Keep it simple and well-organized, and briefly
explain how it connects to what's already there.
```

**When to reach for this:** any time you're adding something that didn't exist before — a new page, a new button, a new function.

---

## 2. Something broken

**Full prompt:**
> "This part of the project is broken. Analyze the provided code or error carefully and identify the root cause. Explain clearly why it's happening, then propose and implement the correct fix. Ensure the solution works within the project's existing structure, maintains performance and readability, and doesn't introduce hidden side effects. Write the corrected code in a clean and reliable way."

**Broken down:**
- *"Identify the root cause"* → this is the key phrase. Without it, AI (like people) tends to patch the *symptom* instead of the real problem.
- *"Explain clearly why it's happening"* → forces the AI to show its reasoning before jumping to a fix — this helps you learn, and helps you catch a wrong diagnosis early.
- *"Doesn't introduce hidden side effects"* → a reminder not to break something else while fixing this one thing.

**Beginner-simplified version:**
```
This is broken: [describe what's wrong or paste the error].
Explain what's causing it, then fix it. Don't change anything
else in the project.
```

**Important add for beginners:** always paste the **exact error message** and describe what you *expected* vs. what *actually happened*. That single addition makes this prompt dramatically more effective — see the "Before/After" section of the main cheat sheet.

**When to reach for this:** the first time something breaks — before you've tried multiple failed fixes (that's prompt #4).

---

## 3. Messy code

**Full prompt:**
> "This code is messy or poorly structured. Refactor it into clean, high-quality code while preserving functionality. Improve readability, maintainability, and performance without over-engineering. Follow modern best practices and match the style and conventions already used in this codebase. When improving, act like a senior developer who values clarity, consistency, and long-term maintainability. Provide the improved version and explain what was changed."

**Broken down:**
- *"Preserving functionality"* → the single most important constraint here. Without it, refactoring can silently change behavior.
- *"Without over-engineering"* → stops the AI from adding unnecessary abstraction, extra files, or patterns you didn't ask for (a common AI over-eagerness).
- *"Explain what was changed"* → gives you a changelog so you're not blindly trusting a rewrite.

**Beginner-simplified version:**
```
Clean up this code without changing what it does. Make it easier
to read and organize. Tell me what you changed and why.
```

**When to reach for this:** code that *works* but you (or a teammate) would struggle to read or extend later.

---

## 4. Stuck in a loop

**Full prompt:**
> "I am stuck on this issue after many failed attempts to fix it. Act like a senior engineer and focus on root-cause debugging. Use error logs and detailed instrumentation to trace the root problem. Add targeted logging where needed, interpret the results, and identify the exact failure chain. Once the root cause is clear, propose and implement a high-quality fix that respects the project's structure and patterns. Write the solution cleanly, with concise but complete code, and explain how the fix resolves the issue."

**Broken down:**
- *"After many failed attempts"* → this tells the AI to **stop guessing** and change strategy — it's a signal to slow down instead of trying another quick patch.
- *"Add targeted logging... interpret the results"* → this is the core technique: instead of guessing at the fix, add `console.log` (or equivalent) statements to actually *see* what's happening, then reason from real data.
- *"Identify the exact failure chain"* → find the sequence of events that leads to the bug, not just the line where it crashes.

**Beginner-simplified version:**
```
I've tried to fix this a few times and it's still broken: [describe].
Instead of guessing, add some debug logging so we can see what's
actually happening, then figure out the real cause from that.
```

**Why this one matters most for beginners:** it's easy to get stuck in a "try random thing → still broken → try another random thing" loop with AI. This prompt breaks that loop by forcing evidence-based debugging instead of guessing.

**When to reach for this:** you've already tried prompt #2 two or three times and it's still not fixed.

---

## 5. Don't understand the code

**Full prompt:**
> "I don't fully understand this code. Explain it step by step in plain language, as if teaching a beginner. Break down what each part does, how the logic flows, and why it was written this way. Show how it connects to the rest of the project and point out any important patterns, functions, or dependencies. Keep the explanation clear, structured, and easy to follow."

**Broken down:**
- *"As if teaching a beginner"* → this single phrase is doing the most work. Without it, the AI may assume you already know the jargon.
- *"How it connects to the rest of the project"* → stops the explanation from being isolated — code rarely exists on its own.
- *"Point out important patterns, functions, or dependencies"* → asks the AI to flag things worth remembering, not just narrate line-by-line.

**Beginner-simplified version:**
```
Explain this code to me like I'm new to programming. Go step by
step, and tell me why it's written this way, not just what it does.
```

**When to reach for this:** any time you're about to touch code you didn't write (including code the AI wrote for you five minutes ago — always ask this before you "trust and move on").

---

## The two "continue building" prompts

> "Build the app step-by-step by focusing on one task at a time @Context file"
> "continue building the app step-by-step, focusing on one task at a time, using the existing structure"

**What these are for:** they stop the AI from trying to build your *entire* app in one giant response — which is when quality drops, things get skipped, or context gets lost.

**Broken down:**
- *"Step-by-step, one task at a time"* → this is **scope-locking**, the same idea as "only modify the files related to X" from the main cheat sheet. One small, reviewable step beats one giant unreviewable dump.
- *"@Context file"* → pointing to a reference file (like a spec, a design doc, or a running notes file) so the AI doesn't have to guess your plan — same idea as the "living spec document" from the Pro phase of the web-dev guide.
- *"Using the existing structure"* → same safeguard as prompt #1 — keep new work consistent with what's already there.

**Beginner-simplified version:**
```
Let's build this one piece at a time. Before each step, tell me
what you're about to build and why, then wait for me to confirm
before moving to the next piece.
```

**When to reach for this:** at the *start* of any multi-step build, and again any time you're resuming work after a break — say it once, then repeat "continue" as you go.

---

## Putting it all together: a beginner's decision flow

1. **Starting something new?** → Prompt #1
2. **It broke?** → Prompt #2 (with the exact error + expected vs. actual)
3. **Fixed it but it's ugly?** → Prompt #3
4. **Tried to fix it more than twice and it's still broken?** → Stop. Switch to Prompt #4.
5. **Don't understand what you're looking at before changing it?** → Prompt #5, *first*, before you touch anything
6. **Building something with multiple steps?** → Open with the "step-by-step" prompt, then just say "continue" as each piece is confirmed

The underlying skill across all five: **name your situation honestly** (new vs. broken vs. messy vs. stuck vs. confusing), then let that choice pick your prompt — instead of writing a generic "fix this" or "build this" every time.
