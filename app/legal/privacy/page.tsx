import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function PrivacyPolicy() {
  return (
    <div className="max-w-3xl mx-auto pt-24 pb-32 px-6">
      <Link href="/" className="inline-flex items-center gap-2 text-chrome-text hover:text-ink transition-colors mb-8">
        <ArrowLeft className="w-4 h-4" /> Back to Home
      </Link>
      
      <h1 className="text-4xl font-serif font-bold text-ink mb-8">Privacy Policy</h1>
      
      <div className="prose prose-stone prose-lg">
        <p className="text-chrome-text-soft mb-8">Last updated: {new Date().toLocaleDateString()}</p>
        
        <h2 className="text-2xl font-serif text-ink mt-8 mb-4">1. Introduction</h2>
        <p>Welcome to Skribe. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website (regardless of where you visit it from) and tell you about your privacy rights and how the law protects you.</p>
        
        <h2 className="text-2xl font-serif text-ink mt-8 mb-4">2. The data we collect about you</h2>
        <p>Personal data, or personal information, means any information about an individual from which that person can be identified. It does not include data where the identity has been removed (anonymous data).</p>
        <p>We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:</p>
        <ul className="list-disc pl-6 space-y-2 my-4">
          <li><strong>Identity Data</strong> includes first name, last name, username or similar identifier.</li>
          <li><strong>Contact Data</strong> includes billing address, email address and telephone numbers.</li>
          <li><strong>Financial Data</strong> includes payment card details (processed securely by our payment providers, e.g., Stripe).</li>
          <li><strong>Transaction Data</strong> includes details about payments to and from you and other details of products and services you have purchased from us.</li>
        </ul>
        
        <h2 className="text-2xl font-serif text-ink mt-8 mb-4">3. How we use your personal data</h2>
        <p>We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:</p>
        <ul className="list-disc pl-6 space-y-2 my-4">
          <li>Where we need to perform the contract we are about to enter into or have entered into with you (e.g., booking a consultation).</li>
          <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
          <li>Where we need to comply with a legal obligation.</li>
        </ul>

        <h2 className="text-2xl font-serif text-ink mt-8 mb-4">4. Data Security</h2>
        <p>We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorised way, altered or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know.</p>

        <h2 className="text-2xl font-serif text-ink mt-8 mb-4">5. Contact Us</h2>
        <p>If you have any questions about this privacy policy or our privacy practices, please contact us at our provided support channels.</p>
      </div>
    </div>
  );
}
