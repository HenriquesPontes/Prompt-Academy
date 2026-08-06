import Image from "next/image";
import { BuyButton } from "./BuyButton";

export function Hero() {
  return (
    <section className="min-h-screen bg-paper">
      <div className="mx-auto flex min-h-screen w-full max-w-[100rem] items-center px-10 py-12 lg:px-10 lg:py-16">
        <div className="grid w-full grid-cols-1 items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(44rem,1.15fr)] lg:gap-20">
          <div>
            <Image
              src="/skribe-screenshot.png"
              alt="The Skribe markdown editor with the Claude Code composer at the bottom of the document"
              width={1422}
              height={1010}
              priority
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="block h-auto w-full rounded-lg border border-hairline/60 shadow-hero"
            />
          </div>

          <div>
            <Image
              src="/logo.png"
              alt=""
              width={146}
              height={236}
              priority
              className="mb-3 h-20 w-auto sm:h-24"
            />

            <h1 className="text-doc-h2 font-normal tracking-tight leading-[1.1] text-ink md:text-display lg:text-display-md lg:whitespace-nowrap">
              <span className="block">Markdown, made beautiful.</span>
              <span className="block">Edited with your agent.</span>
            </h1>

            <p className="mt-6 max-w-xl font-geist text-doc leading-relaxed text-ink-soft">
              Skribe opens a folder of markdown files on your Mac and lets you
              edit them with Claude Code in real time. A calm, literary editor
              for writing any context on your local machine.
            </p>

            <div className="mt-10">
              <BuyButton size="lg">Download for MacOS</BuyButton>
            </div>

            <p className="mt-5 font-geist text-xs text-chrome-text-soft">
              macOS · Local-first · Free forever · Works with Claude Code + Codex
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
