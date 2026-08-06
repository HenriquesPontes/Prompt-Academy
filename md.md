2. Requirements & Prerequisites

2.1 Skills

 Solid JavaScript/TypeScript and React fundamentals (hooks, server components).
 Familiarity with REST/route handlers and basic SQL.
 Comfortable on the command line (git, npm/pnpm/bun).

 | Account | Purpose | Notes |
|---|---|---|
| **GitHub** | Version control + Vercel integration | Enable 2FA |
| **OpenAI / Anthropic** | LLM + embeddings API | Add billing cap |
| **Vercel** | Hosting + AI Gateway | Free tier covers dev |
| **Supabase** | Postgres + pgvector + Auth | Free tier: 500 MB DB |
| **v0.dev** | UI generation | GitHub login |
| **Cursor** | AI IDE | Pro tier for agent mode |

AI Tool Selection

3.1 Comparison of the main AI dev tools

| Tool | Category | Strengths | Weaknesses | Best Use |
|---|---|---|---|---|
| **Cursor** | AI IDE | Deep codebase context, agent mode, `.cursorrules`, multi-file edits | Paid for best models; heavier than VS Code | Day-to-day coding, refactors |
| **Claude Code** | CLI agent | Long-context, surgical multi-file edits, runs in terminal | Less IDE polish | Bulk scaffolding from a prompt |
| **v0.dev** | UI generator | Outputs shadcn/ui + Tailwind JSX, responsive by default | Can over-generate; needs cleanup | Component prototyping |
| **Bolt.new** | Browser IDE | Full-stack prototype in one prompt; instant preview | Not ideal for long-term maintenance | Throwaway MVPs, demos |
| **Lovable** | Full-stack builder | Strong GitHub sync, team collab, AI personas | Opinionated stack | Solo-founder production apps |
| **GitHub Copilot** | Inline completion | Lightweight, integrates everywhere | Weaker on large refactors | Inline autocomplete |
| **Flowise** | Visual LLM builder | Drag-drop RAG/agents, embeddable chat widget | Limited for custom code | No-code chatbot + RAG |

Recommended Tech Stack
4.1 Stack comparison
| Layer | Choice | Why (AI-friendly) |
|---|---|---|
| Framework | **Next.js 16 (App Router)** | RSC, route handlers, edge runtime — models trained heavily on it |
| Language | **TypeScript** | Types dramatically reduce AI hallucinations |
| Styling | **Tailwind CSS v4** | Utility classes are token-friendly; v0 outputs them natively |
| UI kit | **shadcn/ui** | Copy-in components, fully editable, no vendor lock-in |
| Backend/BaaS | **Supabase** | Postgres + pgvector + Auth in one — ideal for RAG |
| AI layer | **Vercel AI SDK** | Unified provider API, streaming, tool-calling |
| Models | OpenAI gpt-4.1 / Anthropic Claude / Regolo (GDPR) | Pluggable via AI SDK providers |
| Testing | **Playwright** + Mabl/AgentQL | Self-healing, AI-augmented E2E |
| Hosting | **Vercel** (or Netlify) | Zero-config Next.js deploys, env-var scoping |

