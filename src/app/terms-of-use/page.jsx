import Link from "next/link";
import React from "react";

export default function TermsOfUsePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white dark:from-gray-900 dark:to-black">
      {/* Banner */}
      <div className="w-full bg-gradient-to-b from-purple-50 to-purple-100 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-black mb-5 drop-shadow">Terms of Use</h1>
          <p className="text-lg text-black-100 max-w-2xl mx-auto">
            Please read our terms of use carefully before using our platform.
          </p>
        </div>
      </div>
      <div className="container mx-auto px-4 py-12">
        <div className="bg-white dark:bg-gray-900 rounded shadow p-6 space-y-8">
          <section>
            <h2 className="text-xl font-semibold mb-2">1. Acceptance of Terms</h2>
            <p className="text-gray-700 dark:text-gray-300">By accessing or using our website, you agree to be bound by these terms and all applicable laws and regulations.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold mb-2">2. Use of Service</h2>
            <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300">
              <li>You agree to use the platform only for lawful purposes.</li>
              <li>You must not misuse or interfere with the platform or try to access it using a method other than the interface and instructions we provide.</li>
              <li>Dummy content for use of service. Replace with actual terms.</li>
            </ul>
          </section>
          <section>
            <h2 className="text-xl font-semibold mb-2">3. Intellectual Property</h2>
            <p className="text-gray-700 dark:text-gray-300">All content, trademarks, and data on this website, including but not limited to software, databases, text, graphics, icons, and hyperlinks are the property of EquiGini or its licensors.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold mb-2">4. Limitation of Liability</h2>
            <p className="text-gray-700 dark:text-gray-300">EquiGini is not liable for any direct, indirect, incidental, or consequential damages arising from your use of the platform.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold mb-2">5. Changes to Terms</h2>
            <p className="text-gray-700 dark:text-gray-300">We may update these Terms of Use from time to time. We encourage you to review this page periodically for any changes.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold mb-2">6. Governing Law</h2>
            <p className="text-gray-700 dark:text-gray-300">These terms are governed by and construed in accordance with the laws of your jurisdiction.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold mb-2">7. Contact Us</h2>
            <p className="text-gray-700 dark:text-gray-300">If you have any questions about these Terms of Use, please contact us at <Link href="mailto:info@equigini.com" className="text-purple-600 underline">info@equigini.com</Link>.</p>
          </section>
        </div>
      </div>
    </div>
  );
}
