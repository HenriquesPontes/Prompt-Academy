"use client";
import { PopupButton } from "react-calendly";
import { useEffect, useState } from "react";

interface BookingButtonProps {
  className?: string;
}

export function BookingButton({ className }: BookingButtonProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const defaultClasses = "text-sm font-medium bg-accent text-paper px-4 py-2 rounded-full hover:bg-accent-deep-green transition-colors flex items-center gap-2 shadow-sm";
  const finalClassName = className || defaultClasses;

  if (!isMounted) {
    return (
      <button className={finalClassName}>
        Book a Call
      </button>
    );
  }

  return (
    <PopupButton
      url="https://calendly.com/hpontes-31"
      rootElement={document.body}
      text="Book a Call"
      className={finalClassName}
    />
  );
}
