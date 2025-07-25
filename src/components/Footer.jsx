"use client";
import Link from "next/link";
import Button from "./Button";

export default function Footer() {
  const handleSubscribe = (e) => {
    e.preventDefault();
    // Handle newsletter subscription
  };

  return (
    <footer className="bg-black text-white py-5 md:py-20">
      <div className="container mx-auto px-6 md:px-4 hidden md:block">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand Description */}
          <div className="col-span-1">
            <h3 className="text-2xl text-purple font-bold mb-4">EquiGini</h3>
            <p className="text-gray-400 mb-6">
              Curated private investment opportunities for discerning investors.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li><Link href="/" className="text-gray-400 hover:text-purple-600">Home</Link></li>
              <li><Link href="javacript:void()" className="text-gray-400 hover:text-purple-600">About</Link></li>
              <li><Link href="/deals" className="text-gray-400 hover:text-purple-600">Deals</Link></li>
              <li><Link href="/blogs" className="text-gray-400 hover:text-purple-600">Blogs</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div className="col-span-1">
            <h4 className="text-lg font-semibold mb-6">Legal</h4>
            <ul className="space-y-4">
              <li><Link href="/terms-of-use" className="text-gray-400 hover:text-purple-600">Terms of Use</Link></li>
              <li><Link href="/privacy-policy" className="text-gray-400 hover:text-purple-600">Privacy Policy</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-purple-600">Contact</Link></li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="col-span-1">
            <h4 className="text-lg font-semibold mb-6">Follow Us On</h4>
            <div className="flex gap-6">
            <a href="https://www.facebook.com/pantomathsme/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-600">
              {/* Facebook Icon */}
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a href="https://x.com/pantomath_group?lang=en" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-600">
              {/* X (Twitter) Icon */}
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.53 2.477h3.75l-8.19 9.34 9.64 9.706h-7.56l-5.94-6.73-6.79 6.73H.47l8.75-9.72L.14 2.477h7.72l5.19 5.89 4.48-5.89zm-1.32 17.03h2.08L6.62 4.36H4.42l11.79 15.147z"/>
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/pantomath-advisory-services-group-854750197/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-600">
              {/* LinkedIn Icon */}
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a href="https://www.instagram.com/pantomath_group/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-600">
              {/* Instagram Icon */}
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/>
              </svg>
            </a>
            <a href="https://www.youtube.com/channel/UCPDK_k_mnUQCqw9I9JxjkEg" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-600">
              {/* YouTube Icon */}
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a2.994 2.994 0 00-2.112-2.117C19.458 3.5 12 3.5 12 3.5s-7.458 0-9.386.569A2.994 2.994 0 00.502 6.186C0 8.114 0 12 0 12s0 3.886.502 5.814a2.994 2.994 0 002.112 2.117C4.542 20.5 12 20.5 12 20.5s7.458 0 9.386-.569a2.994 2.994 0 002.112-2.117C24 15.886 24 12 24 12s0-3.886-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>
          </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-center items-center">
          <p className="text-gray-400 mb-4 md:mb-0">© Copyright 2025, Pantomath Financial Services. All Rights Reserved</p>
        </div>
      </div>
      <div className="container mx-auto px-6 md:px-4 block md:hidden text-center">
        <p className="text-gray-400">© Copyright 2025, Pantomath Financial Services. All Rights Reserved</p>
      </div>
    </footer>
  );
} 