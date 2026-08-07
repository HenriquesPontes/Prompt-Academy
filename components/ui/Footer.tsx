import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-hairline bg-paper/50 py-12 mt-24">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-col items-center md:items-start gap-2">
          <span className="font-serif font-medium text-lg text-ink">Skribe</span>
          <span className="text-sm text-chrome-text-soft">
            &copy; {new Date().getFullYear()} Skribe. All rights reserved.
          </span>
        </div>
        
        <div className="flex flex-wrap justify-center gap-6 text-sm font-medium text-chrome-text hover:text-ink transition-colors">
          <Link href="/legal/privacy" className="hover:text-accent transition-colors">
            Privacy Policy
          </Link>
          <Link href="/legal/terms" className="hover:text-accent transition-colors">
            Terms of Service
          </Link>
          <Link href="/legal/refunds" className="hover:text-accent transition-colors">
            Refund Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}
