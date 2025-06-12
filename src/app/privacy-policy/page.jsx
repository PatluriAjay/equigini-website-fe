import Link from "next/link";
import React from "react";

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      {/* Banner */}
      <div className="w-full bg-gradient-to-b from-purple-50 to-purple-100 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-black mb-5 drop-shadow">Privacy Policy</h1>
          <p className="text-lg text-black-100 max-w-2xl mx-auto">
            Your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your information.
          </p>
        </div>
      </div>
      <div className="container mx-auto px-4 py-12">
        <div className="bg-white   rounded shadow p-6 space-y-8">
        <section>
          <h2 className="text-xl font-semibold mb-2">1. Information We Collect</h2>
          <ul className="list-disc pl-6 text-gray-700">
            <li>Personal identification information (Name, email address, phone number, etc.)</li>
            <li>Usage data (pages visited, time spent, browser type, etc.)</li>
            <li>Any information you voluntarily provide via forms or contact methods</li>
          </ul>
        </section>
        <section>
          <h2 className="text-xl font-semibold mb-2">2. How We Use Your Information</h2>
          <ul className="list-disc pl-6 text-gray-700">
            <li>To provide and maintain our services</li>
            <li>To improve user experience and our website</li>
            <li>To communicate with you about updates, offers, or support</li>
            <li>To comply with legal obligations</li>
          </ul>
        </section>
        <section>
          <h2 className="text-xl font-semibold mb-2">3. Information Sharing</h2>
          <p className="text-gray-700">
            We do not sell or rent your personal information. We may share information with trusted partners who assist us in operating our website, conducting our business, or serving our users, as long as those parties agree to keep this information confidential.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-semibold mb-2">4. Data Security</h2>
          <p className="text-gray-700">
            We implement a variety of security measures to maintain the safety of your personal information.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-semibold mb-2">5. Your Rights</h2>
          <ul className="list-disc pl-6 text-gray-700">
            <li>Access, update, or delete your personal information</li>
            <li>Opt out of marketing communications</li>
            <li>Request a copy of the data we hold about you</li>
          </ul>
        </section>
        <section>
          <h2 className="text-xl font-semibold mb-2">6. Changes to This Policy</h2>
          <p className="text-gray-700">
            We may update our Privacy Policy from time to time. We encourage you to review this page periodically for any changes.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-semibold mb-2">7. Contact Us</h2>
          <p className="text-gray-700">
            If you have any questions about this Privacy Policy, please contact us at <Link href="mailto:info@equigini.com" className="text-purple-600 underline">info@equigini.com</Link>.
          </p>
        </section>
      </div>
      </div>
    </div>
  );
}