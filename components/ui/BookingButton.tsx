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
      href="https://calendly.com/hpontes-31"
      target="_blank"
      rel="noopener noreferrer"
      className={finalClassName}
    >
      Book a Call
    </a>
  );
}
