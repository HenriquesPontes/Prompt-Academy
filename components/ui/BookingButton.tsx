"use client";
import { useState, useEffect } from "react";
import { Loader2 } from "lucide-react";
import { PopupModal } from "react-calendly";

interface BookingButtonProps {
  className?: string;
}

export function BookingButton({ className }: BookingButtonProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [rootElement, setRootElement] = useState<HTMLElement | null>(null);

  useEffect(() => {
    setRootElement(document.body);
  }, []);

  const defaultClasses = "text-sm font-medium bg-accent text-paper px-4 py-2 rounded-full hover:bg-accent-deep-green transition-colors flex items-center gap-2 shadow-sm";
  const finalClassName = className || defaultClasses;

  return (
    <>
      <button 
        onClick={() => setIsOpen(true)}
        className={finalClassName}
      >
        Book a Call
      </button>
      {rootElement && (
        <PopupModal
          url="https://calendly.com/hpontes-31"
          onModalClose={() => setIsOpen(false)}
          open={isOpen}
          rootElement={rootElement}
        />
      )}
    </>
  );
}
