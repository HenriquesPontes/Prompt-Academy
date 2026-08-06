# Creating High-Quality Prompts to Build a Website — Beginner to Pro

A phase-by-phase guide to prompting an AI coding assistant (like Claude) so you go from "just get something on screen" to shipping a polished, production-ready site.

---

## Phase 0 — Mindset Shift

Before writing any prompt, understand this: **a prompt is a spec, not a wish.** The more precisely you describe the *what*, *why*, and *constraints*, the less the AI has to guess — and guessing is where bad output comes from.

Beginners write prompts like requests. Pros write prompts like briefs.

- Beginner: "Make me a website for my bakery."
- Pro: "Build a single-page site for a small artisan bakery. Sections: hero, about, product menu (grid, 6 items with price + image placeholder), location/hours, contact form. Warm, rustic aesthetic — cream/brown palette. Mobile-first. Use semantic HTML, no framework needed."

---

## Phase 1 — Beginner: Getting Something on the Screen

**Goal:** Learn the anatomy of a basic prompt and get a working first draft.

### The 4 ingredients every beginner prompt needs
1. **What** you're building (a landing page, a portfolio, a shop)
2. **Who** it's for (audience/purpose)
3. **What sections/features** it needs
4. **Any hard constraints** (language, platform, must include X)

### Beginner prompt template
```
Build a [type of site] for [purpose/audience].
It should include: [list sections/features].
Tech: [plain HTML/CSS/JS, or a framework if you know one].
```

### Practice exercises
- Prompt for a one-page personal portfolio (about, projects, contact)
- Prompt for a simple product landing page
- Prompt for a basic blog homepage

**Common beginner mistake:** vague adjectives with no specifics ("make it modern and cool"). Modern *how*? Cool *compared to what*? Always pair a style word with a concrete reference or detail.

---

## Phase 2 — Novice: Adding Structure and Iteration

**Goal:** Stop treating this as one prompt = one final product. Learn to build in passes.

### Break the build into stages instead of one giant prompt
1. Structure/layout first ("just the skeleton, no styling yet")
2. Content and copy
3. Styling and visual design
4. Interactivity (forms, menus, animations)
5. Responsiveness/polish

### Iteration prompts (the pro habit that starts here)
Instead of re-explaining the whole project every time, reference what exists:
```
On the hero section we just built, increase the heading size,
center it vertically, and add a subtle fade-in animation on load.
```
```
Keep everything the same but change the color scheme to a
dark navy + gold palette instead of blue + white.
```

### Introduce constraints that prevent chaos
- "Don't use any external libraries yet."
- "Keep all code in a single HTML file for now."
- "Comment the CSS so I can find sections easily."

---

## Phase 3 — Intermediate: Thinking Like a Product Owner

**Goal:** Prompt for *systems*, not just pages — start specifying architecture, data, and behavior.

### Add these dimensions to your prompts
- **User flows**: "When a user clicks 'Add to Cart,' show a toast notification and update the cart count in the nav."
- **State/data**: "Store form submissions in local state for now; we'll wire up a backend later."
- **Edge cases**: "If the email field is invalid, show inline validation — don't let the form submit."
- **Component thinking** (if using React/Vue/etc.): "Break this into a `Header`, `ProductCard`, and `Footer` component."

### Intermediate prompt template
```
Build [feature] with the following behavior:
- [trigger] → [result]
- Handle these edge cases: [list]
- Data should be structured as: [shape/example]
- Reuse [existing component/section] where possible
```

### Start giving feedback like a reviewer, not a user
- Beginner feedback: "It looks bad."
- Intermediate feedback: "The spacing between cards is inconsistent — set a fixed gap of 24px and align them to a 3-column grid on desktop, 1-column on mobile."

---

## Phase 4 — Advanced: Architecture, Performance, and Maintainability

**Goal:** Prompt as if you're briefing a senior engineer — think about scale, structure, and long-term maintenance.

### Specify architecture up front
```
Set up the project with:
- [Framework, e.g. Next.js / vanilla + Vite]
- Folder structure: /components, /pages, /styles, /lib
- A shared design system (colors, spacing, typography as CSS variables or a theme file)
- Accessibility: semantic HTML, ARIA labels where needed, keyboard nav
```

### Prompt for non-functional requirements too
- Performance: "Lazy-load images below the fold."
- SEO: "Add meta tags, Open Graph tags, and a sitemap."
- Accessibility: "Ensure all interactive elements are keyboard-navigable and have visible focus states."
- Maintainability: "Extract repeated styles into reusable classes/utilities."

### Ask the AI to explain trade-offs — a pro move
```
Before implementing, briefly explain 2 approaches for [feature]
and the trade-offs, then implement the one you recommend.
```

### Use constraint-driven prompting to control scope
```
Only modify the files related to [feature]. Do not touch
[other files/sections]. Explain what you changed and why.
```

---

## Phase 5 — Pro: Iterative, Multi-Session, Spec-Driven Development

**Goal:** Treat the AI like a collaborator across an entire project lifecycle, not a one-shot generator.

### Keep a living spec document
Maintain a short doc (even just a running note) with:
- Project goals
- Design decisions already made
- Tech stack and conventions
- Open questions/next steps

Feed relevant chunks of it into prompts so the AI stays consistent across sessions:
```
Context: this is a bakery e-commerce site. Design system uses
cream (#F5EFE6), brown (#6B4226), and a serif display font for
headings. We're using vanilla HTML/CSS/JS, no frameworks, per
project convention. Now build the checkout page following the
same visual language.
```

### Use role + task + format prompting
```
Act as a senior frontend engineer reviewing this code for
accessibility and performance issues. List problems ranked by
severity, then fix the top 3.
```

### Test-driven / verification prompting
```
After building [feature], write a short checklist of things to
manually test (mobile view, form validation, empty states) and
verify each one against the code.
```

### Debug like a pro
Don't just say "it's broken." Give:
- What you expected
- What actually happened
- Relevant error message or console output
- What you already tried
```
Expected: clicking submit shows a success message.
Actual: nothing happens, no console error.
I checked the event listener is attached. Here's the relevant
code: [paste]. What's wrong?
```

### Ship-readiness prompt
```
Review the whole site for launch readiness: broken links,
missing alt text, unresponsive breakpoints, console errors,
and inconsistent spacing/typography. List issues by page.
```

---

## Quick Reference: Prompt Quality Checklist

Before sending a prompt, check it has:
- [ ] Clear **goal** (what should exist after this prompt runs)
- [ ] **Context** (what already exists, what not to touch)
- [ ] **Constraints** (tech stack, scope, style rules)
- [ ] **Success criteria** (how you'll judge if it's right)
- [ ] Specific, not vague, adjectives ("2px solid border" not "make it pop")

---

## Progression Summary

| Phase | Focus | Prompt style |
|---|---|---|
| 1. Beginner | Get something visible | Simple request with sections listed |
| 2. Novice | Iterate in passes | Layered prompts, referencing prior output |
| 3. Intermediate | Behavior & data | User flows, edge cases, component thinking |
| 4. Advanced | Architecture & quality | Non-functional requirements, trade-off analysis |
| 5. Pro | Full lifecycle | Living spec, role prompting, test/debug/ship prompts |

Practice by rebuilding the *same* site once per phase — you'll feel the difference in both the prompt and the output quality.
