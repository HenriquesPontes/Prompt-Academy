import Link from "next/link";
import { BookingButton } from "@/components/ui/BookingButton";

interface HeaderProps {
  children?: React.ReactNode;
}

export function Header({ children }: HeaderProps) {
  return (
    <header className="fixed top-0 left-0 right-0 h-16 z-50 flex items-center px-6 md:px-10 justify-between bg-paper/80 backdrop-blur-sm">
      <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
        <span className="font-serif font-medium text-xl tracking-wide text-ink">Skribe</span>
      </Link>
      <div className="flex items-center gap-4 md:gap-6">
        {children}
        <BookingButton className="text-sm font-medium bg-accent text-paper px-4 py-2 rounded-full hover:bg-accent-deep-green transition-colors flex items-center gap-2 shadow-sm" />
      </div>
    </header>
  );
}
