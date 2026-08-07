"use client";

import { InlineWidget } from "react-calendly";
import { useEffect, useState } from "react";
import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";

export default function BookingSuccessPage() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="min-h-screen bg-paper text-ink selection:bg-selection font-sans pt-16 px-4 md:px-10 flex flex-col items-center">
      <header className="absolute top-0 left-0 right-0 h-16 z-50 flex items-center px-6 md:px-10 justify-between bg-chrome-bg/80 backdrop-blur-sm border-b border-hairline">
        <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
          <span className="font-serif font-medium text-xl tracking-wide text-ink">Skribe</span>
        </Link>
        <Link href="/" className="text-sm font-medium text-chrome-text hover:text-ink transition-colors flex items-center gap-2">
           Back Home <ArrowRight className="w-4 h-4" />
        </Link>
      </header>

      <div className="mt-16 w-full max-w-4xl text-center space-y-4 mb-8">
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center">
            <CheckCircle2 className="w-8 h-8 text-accent" />
          </div>
        </div>
        <h1 className="text-4xl font-serif text-ink">Payment Successful!</h1>
        <p className="text-lg text-chrome-text-soft max-w-2xl mx-auto">
          Thank you for booking a consultation. Please choose a time on the calendar below to finalize your booking.
        </p>
      </div>

      <div className="w-full max-w-5xl h-[700px] border border-hairline rounded-2xl overflow-hidden shadow-sm bg-white">
        {isMounted ? (
          <InlineWidget 
            url="https://calendly.com/hpontes-31" 
            styles={{ height: '100%', width: '100%' }}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-chrome-bg/30">
            <p className="text-chrome-text-soft">Loading calendar...</p>
          </div>
        )}
      </div>
    </div>
  );
}
