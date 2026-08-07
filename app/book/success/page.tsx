"use client";

import { InlineWidget } from "react-calendly";
import { useEffect, useState } from "react";
import Link from "next/link";
import { CheckCircle2, ArrowRight, Loader2, AlertTriangle } from "lucide-react";
import { Header } from "@/components/ui/Header";

export default function BookingSuccessPage() {
  const [isMounted, setIsMounted] = useState(false);
  const [sessionState, setSessionState] = useState<'loading' | 'valid' | 'invalid'>('loading');
  const [customerInfo, setCustomerInfo] = useState<{ email?: string, name?: string }>({});

  useEffect(() => {
    setIsMounted(true);
    
    const verifySession = async () => {
      const urlParams = new URLSearchParams(window.location.search);
      const sessionId = urlParams.get('session_id');
      
      if (!sessionId) {
        setSessionState('invalid');
        return;
      }

      try {
        const res = await fetch(`/api/verify-session?session_id=${sessionId}`);
        const data = await res.json();
        
        if (data.isPaid) {
          setSessionState('valid');
          setCustomerInfo({ email: data.customerEmail, name: data.customerName });
        } else {
          setSessionState('invalid');
        }
      } catch (err) {
        console.error('Error verifying session', err);
        setSessionState('invalid');
      }
    };
    
    verifySession();
  }, []);

  return (
    <div className="min-h-screen bg-paper text-ink selection:bg-selection pt-16 px-4 md:px-10 flex flex-col items-center">
      <Header>
        <Link href="/" className="text-sm font-medium text-chrome-text hover:text-ink transition-colors flex items-center gap-2">
           Back Home <ArrowRight className="w-4 h-4" />
        </Link>
      </Header>

      {sessionState === 'loading' && (
        <div className="mt-32 w-full max-w-4xl text-center space-y-4 mb-8 flex flex-col items-center">
          <Loader2 className="w-8 h-8 text-chrome-text-soft animate-spin mb-4" />
          <h1 className="text-4xl font-serif text-ink">Verifying Payment...</h1>
          <p className="text-lg text-chrome-text-soft">Please wait while we confirm your payment securely.</p>
        </div>
      )}

      {sessionState === 'invalid' && (
        <div className="mt-32 w-full max-w-4xl text-center space-y-4 mb-8 flex flex-col items-center">
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6">
            <AlertTriangle className="w-8 h-8 text-red-600" />
          </div>
          <h1 className="text-4xl font-serif text-ink">Invalid Session</h1>
          <p className="text-lg text-chrome-text-soft max-w-2xl mx-auto">
            We couldn't verify your payment. If you believe this is an error, please contact support.
          </p>
          <Link href="/" className="mt-6 inline-flex items-center gap-2 bg-ink text-paper px-6 py-3 rounded-full hover:bg-ink-soft transition-colors">
            Return to Homepage
          </Link>
        </div>
      )}

      {sessionState === 'valid' && (
        <>
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
                prefill={{
                  email: customerInfo.email,
                  name: customerInfo.name
                }}
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-chrome-bg/30">
                <p className="text-chrome-text-soft">Loading calendar...</p>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
}
