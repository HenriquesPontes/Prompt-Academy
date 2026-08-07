import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function RefundPolicy() {
  return (
    <div className="max-w-3xl mx-auto pt-24 pb-32 px-6">
      <Link href="/" className="inline-flex items-center gap-2 text-chrome-text hover:text-ink transition-colors mb-8">
        <ArrowLeft className="w-4 h-4" /> Back to Home
      </Link>
      
      <h1 className="text-4xl font-serif font-bold text-ink mb-8">Refund Policy</h1>
      
      <div className="prose prose-stone prose-lg">
        <p className="text-chrome-text-soft mb-8">Last updated: {new Date().toLocaleDateString()}</p>
        
        <h2 className="text-2xl font-serif text-ink mt-8 mb-4">1. All Sales Are Final</h2>
        <p>At Skribe, we pride ourselves on delivering high-quality consulting services, digital products, and resources. Because of the nature of digital goods and the time commitment required for one-on-one consulting, <strong>all sales are strictly final and non-refundable</strong>.</p>
        
        <h2 className="text-2xl font-serif text-ink mt-8 mb-4">2. One-on-One Consulting</h2>
        <p>When you book a consulting session, that time is specifically reserved for you. Therefore, we do not offer refunds for cancelled or missed appointments. If you need to reschedule, please contact us at least 24 hours in advance, and we will do our best to accommodate your request, subject to availability.</p>
        
        <h2 className="text-2xl font-serif text-ink mt-8 mb-4">3. Digital Products</h2>
        <p>Once a digital product has been purchased and accessed, it cannot be "returned." As such, we cannot issue refunds for digital downloads, courses, or guides under any circumstances.</p>
        
        <h2 className="text-2xl font-serif text-ink mt-8 mb-4">4. Exceptional Circumstances</h2>
        <p>In the rare event that a service cannot be delivered due to circumstances on our end, we will issue a full refund or provide equivalent credit. This is determined at the sole discretion of the Skribe team.</p>

        <h2 className="text-2xl font-serif text-ink mt-8 mb-4">5. Contact Us</h2>
        <p>If you have any questions or concerns before making a purchase or booking, please reach out to us so we can ensure our services are the right fit for your needs.</p>
      </div>
    </div>
  );
}
