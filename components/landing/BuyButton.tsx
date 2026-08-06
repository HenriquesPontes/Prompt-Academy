"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

const DOWNLOAD_URL = "#";

type Size = "sm" | "md" | "lg";

const sizeClasses: Record<Size, string> = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-5 text-base",
  lg: "h-14 px-7 text-doc",
};

const iconSize: Record<Size, number> = {
  sm: 14,
  md: 16,
  lg: 18,
};

const CHAR_MS = 30;

export function BuyButton({
  size = "md",
  children = "Download",
  className = "",
}: {
  size?: Size;
  children?: ReactNode;
  className?: string;
}) {
  const fullText = typeof children === "string" ? children : null;
  const [displayed, setDisplayed] = useState(fullText ?? "");
  const [isTyping, setIsTyping] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  const startTypewriter = () => {
    if (!fullText) return;
    if (typeof window !== "undefined" &&
        window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }
    if (timerRef.current) clearTimeout(timerRef.current);
    setIsTyping(true);
    setDisplayed("");
    let i = 0;
    const tick = () => {
      i += 1;
      setDisplayed(fullText.slice(0, i));
      if (i < fullText.length) {
        timerRef.current = setTimeout(tick, CHAR_MS);
      } else {
        setIsTyping(false);
      }
    };
    timerRef.current = setTimeout(tick, CHAR_MS);
  };

  const cancelTypewriter = () => {
    if (timerRef.current) clearTimeout(timerRef.current);
    if (fullText) setDisplayed(fullText);
    setIsTyping(false);
  };

  return (
    <a
      href={DOWNLOAD_URL}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={startTypewriter}
      onMouseLeave={cancelTypewriter}
      onFocus={startTypewriter}
      onBlur={cancelTypewriter}
      className={`group inline-flex items-center justify-center gap-2 rounded-pill bg-submit font-medium text-paper shadow-none transition-[background-color,box-shadow,transform] duration-150 ease-skribe hover:-translate-y-0.5 hover:bg-submit-hover hover:shadow-composer ${sizeClasses[size]} ${className}`}
    >
      <AppleLogo size={iconSize[size]} />
      {fullText ? (
        <span
          aria-label={fullText}
          className="relative inline-flex items-baseline"
        >
          {/* Reserve width so the button doesn't reflow while typing */}
          <span aria-hidden="true" className="invisible whitespace-pre">
            {fullText}
          </span>
          <span
            aria-hidden="true"
            className="absolute inset-y-0 left-0 flex items-center whitespace-pre"
          >
            {displayed}
            <span
              className={`ml-[1px] inline-block h-[1em] w-[1px] bg-paper ${
                isTyping ? "animate-[blink_900ms_steps(2,end)_infinite]" : "opacity-0"
              }`}
            />
          </span>
        </span>
      ) : (
        children
      )}
      <style>{`
        @keyframes blink { 0%, 50% { opacity: 1; } 51%, 100% { opacity: 0; } }
      `}</style>
    </a>
  );
}

function AppleLogo({ size }: { size: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className="-mt-0.5 shrink-0"
    >
      <path d="M17.05 12.04c-.03-2.79 2.28-4.13 2.39-4.2-1.3-1.9-3.33-2.16-4.05-2.19-1.73-.17-3.37 1.02-4.25 1.02-.88 0-2.23-.99-3.66-.96-1.88.03-3.62 1.09-4.59 2.78-1.95 3.39-.5 8.4 1.4 11.15.93 1.34 2.03 2.85 3.48 2.79 1.4-.06 1.93-.91 3.62-.91 1.69 0 2.17.91 3.65.88 1.51-.03 2.46-1.37 3.38-2.71 1.06-1.56 1.5-3.06 1.52-3.14-.03-.02-2.92-1.12-2.94-4.45zM14.27 4.06c.77-.94 1.29-2.24 1.15-3.54-1.11.05-2.45.74-3.25 1.67-.72.83-1.35 2.16-1.18 3.43 1.23.1 2.5-.62 3.28-1.56z" />
    </svg>
  );
}
