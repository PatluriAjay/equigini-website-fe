"use client";
import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import Navbar from "./Navbar";
import Footer from "./Footer";
import WhatsAppButton from "./WhatsAppButton";
import PageLoader from "./PageLoader";

export default function Layout({ children }) {
  const [isLoading, setIsLoading] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  // Listen for link clicks to show loader
  useEffect(() => {
    const handleLinkClick = (event) => {
      const link = event.target.closest('a[href]');
      if (link) {
        const href = link.getAttribute('href');
        // Only show loader for internal links
        if (href && !href.startsWith('http') && !href.startsWith('#') && !href.startsWith('mailto:') && !href.startsWith('tel:')) {
          setIsLoading(true);
        }
      }
    };

    document.addEventListener('click', handleLinkClick);
    
    return () => {
      document.removeEventListener('click', handleLinkClick);
    };
  }, []);

  // Hide loader when pathname changes (page has loaded)
  useEffect(() => {
    setIsLoading(false);
  }, [pathname]);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
      <WhatsAppButton />
      
      <PageLoader isLoading={isLoading} />
    </div>
  );
} 