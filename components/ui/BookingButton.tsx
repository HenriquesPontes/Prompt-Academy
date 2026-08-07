"use client";
import { useState } from "react";
import { Loader2 } from "lucide-react";

interface BookingButtonProps {
  className?: string;
}

export function BookingButton({ className }: BookingButtonProps) {
  const [isLoading, setIsLoading] = useState(false);

  const defaultClasses = "text-sm font-medium bg-accent text-paper px-4 py-2 rounded-full hover:bg-accent-deep-green transition-colors flex items-center gap-2 shadow-sm";
  const finalClassName = className || defaultClasses;

  const handleCheckout = async () => {
    try {
      setIsLoading(true);
      const res = await fetch("/api/checkout", {
        method: "POST",
      });
      
      const data = await res.json();
      
      if (data.url) {
        window.location.href = data.url;
      } else {
        console.error("No checkout URL returned", data);
        setIsLoading(false);
      }
    } catch (err) {
      console.error("Checkout error:", err);
      setIsLoading(false);
    }
  };

  return (
    <button 
      onClick={handleCheckout} 
      disabled={isLoading}
      className={`${finalClassName} ${isLoading ? 'opacity-80 cursor-not-allowed' : ''}`}
    >
      {isLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : null}
      {isLoading ? "Loading..." : "Book a Call"}
    </button>
  );
}
