"use client";
import { useState } from "react";
import { Loader2 } from "lucide-react";

interface BookingButtonProps {
  className?: string;
}

export function BookingButton({ className }: BookingButtonProps) {
  const defaultClasses = "text-sm font-medium bg-accent text-paper px-4 py-2 rounded-full hover:bg-accent-deep-green transition-colors flex items-center gap-2 shadow-sm";
  const finalClassName = className || defaultClasses;

  return (
    <a 
      href="mailto:hello@skribe.com?subject=Booking%20a%20Consultation"
      className={finalClassName}
    >
      Book a Call
    </a>
  );
}
