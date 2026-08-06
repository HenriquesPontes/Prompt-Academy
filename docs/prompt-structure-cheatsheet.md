# Prompt Structure — Cheat Sheet

A good prompt is a mini spec, not just a sentence. Here's the anatomy.

## The core structure

**1. Role (optional but powerful)**
Tell the AI what perspective to act from.
> "Act as a senior frontend developer..."

**2. Context**
What already exists, what the situation is, what it needs to know before doing the task.
> "This is a bakery website using vanilla HTML/CSS, cream and brown color scheme..."

**3. Task (the core ask)**
The actual thing you want done — be specific, not vague.
> "Build a checkout page with a shipping form and order summary."

**4. Constraints**
Rules, boundaries, things to avoid.
> "Don't use any external libraries. Keep it in one file. Don't touch the header component."

**5. Format / output expectations**
How you want the result delivered.
> "Give me the full HTML file, then a short list of what you changed."

**6. Success criteria (the pro-level addition)**
How you'll judge if it's right.
> "It should work on mobile, validate the email field, and match the existing button style."

## Putting it together

```
[Role] Act as a senior frontend developer.
[Context] This is a bakery site, cream/brown palette, vanilla HTML/CSS/JS only.
[Task] Build a checkout page with shipping form + order summary.
[Constraints] No external libraries. Match existing button and font styles.
[Format] Full HTML file, then a short changelog.
[Success criteria] Must be mobile-responsive and validate required fields.
```

## The short version

The 4 things to always include, even in a quick prompt:

1. **What** you want
2. **Context** (what exists / what not to break)
3. **Constraints** (tech, scope, style rules)
4. **What "done" looks like**

---

## Before / After Examples

**Weak:**
> "Make the header look better."

**Strong:**
> "Increase the header height to 80px, center the logo vertically, and add a subtle box-shadow (0 2px 4px rgba(0,0,0,0.1)) so it separates from the content below."

---

**Weak:**
> "Add a contact form."

**Strong:**
> "Add a contact form with name, email, and message fields. Validate that email is a proper format and all fields are required before submit. On success, show a green confirmation message; on error, show red inline text under the invalid field."

---

**Weak:**
> "Fix the bug."

**Strong:**
> "Expected: clicking 'Add to Cart' updates the cart count in the nav. Actual: the count doesn't change and there's no console error. I checked the click handler is attached — here's the relevant code: [paste]. What's wrong?"

---

## Common Mistakes

- **Vague adjectives with no anchor** — "modern," "clean," "pop" mean nothing without a concrete reference (a color, a spacing value, a comparable site).
- **Re-explaining the whole project every time** instead of referencing what already exists ("on the hero section we just built...").
- **One giant prompt for the whole site** instead of building in passes (structure → content → style → interactivity → polish).
- **No constraints**, so the AI over-builds — adds libraries, restructures files, or changes things you didn't ask about.
- **Vague bug reports** ("it's broken") instead of expected vs. actual behavior plus what you already tried.
- **No success criteria**, so there's no way to tell if the output is actually "done" or just "different."

---

## Useful Prompt Patterns

**Reference existing work instead of restating everything:**
> "Keep everything the same but change the color scheme to dark navy + gold."

**Ask for options before committing to an approach:**
> "Briefly explain 2 approaches for this feature and the trade-offs, then implement the one you recommend."

**Scope-lock a change:**
> "Only modify the files related to the checkout page. Don't touch the header or nav. Explain what you changed and why."

**Review/audit prompting:**
> "Review the whole site for launch readiness: broken links, missing alt text, unresponsive breakpoints, console errors, inconsistent spacing. List issues by page."

**Role + task + format:**
> "Act as a senior frontend engineer reviewing this for accessibility. List issues ranked by severity, then fix the top 3."

---

## Quick Self-Check Before Sending a Prompt

- [ ] Did I say **what** I want, specifically (not just a vibe)?
- [ ] Did I give **context** — what exists, what shouldn't change?
- [ ] Did I set **constraints** — tech stack, scope, style rules?
- [ ] Did I define **what "done" looks like**?
- [ ] Are my adjectives backed by something concrete (a number, a color, an example)?
