import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function TermsOfService() {
  return (
    <div className="max-w-3xl mx-auto pt-24 pb-32 px-6">
      <Link href="/" className="inline-flex items-center gap-2 text-chrome-text hover:text-ink transition-colors mb-8">
        <ArrowLeft className="w-4 h-4" /> Back to Home
      </Link>
      
      <h1 className="text-4xl font-serif font-bold text-ink mb-8">Terms of Service</h1>
      
      <div className="prose prose-stone prose-lg">
        <p className="text-chrome-text-soft mb-8">Last updated: {new Date().toLocaleDateString()}</p>
        
        <h2 className="text-2xl font-serif text-ink mt-8 mb-4">1. Agreement to Terms</h2>
        <p>By accessing or using our website and services, you agree to be bound by these Terms of Service. If you disagree with any part of the terms, then you may not access our services.</p>
        
        <h2 className="text-2xl font-serif text-ink mt-8 mb-4">2. Services</h2>
        <p>Skribe provides digital products, resources, and one-on-one consulting services. We reserve the right to withdraw or amend our service, and any service or material we provide, in our sole discretion without notice.</p>
        
        <h2 className="text-2xl font-serif text-ink mt-8 mb-4">3. Payments and Booking</h2>
        <p>When you book a consultation or purchase a service, you agree to provide current, complete, and accurate purchase and account information. We use third-party payment processors (such as Stripe) to process payments safely.</p>
        
        <h2 className="text-2xl font-serif text-ink mt-8 mb-4">4. Intellectual Property</h2>
        <p>The Service and its original content, features, and functionality are and will remain the exclusive property of Skribe and its licensors. Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of Skribe.</p>
        
        <h2 className="text-2xl font-serif text-ink mt-8 mb-4">5. Limitation of Liability</h2>
        <p>In no event shall Skribe, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Service.</p>
        
        <h2 className="text-2xl font-serif text-ink mt-8 mb-4">6. Changes</h2>
        <p>We reserve the right, at our sole discretion, to modify or replace these Terms at any time. By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms.</p>
      </div>
    </div>
  );
}
