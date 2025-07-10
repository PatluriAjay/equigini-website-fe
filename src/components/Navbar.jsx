"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Button from "./Button";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "#", label: "About" },
  { href: "/deals", label: "Deals" },
  { href: "/blogs", label: "Blogs" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-white   shadow-sm fixed top-0 left-0 z-50">
      <div className="container mx-auto flex flex-wrap items-center py-4 px-4 relative">
        {/* Left section - Logo */}
        <div className="flex items-center justify-between lg:justify-start w-full lg:w-[180px]">
          <Link href="/">
            <Image src={"/logo.png"} width={120} height={60} alt="Logo" />
          </Link>
          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
        {/* Center section - Navigation Links */}
        <ul
          className={`${
            isMenuOpen ? "flex" : "hidden"
          } lg:flex flex-col lg:flex-row w-full lg:w-auto gap-4 lg:gap-8 items-center justify-center lg:!flex order-last lg:order-none mt-4 lg:mt-0 lg:absolute lg:left-1/2 lg:-translate-x-1/2`}
        >
          {navLinks.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            // Add handler to close menu on mobile
            const handleLinkClick = () => {
              if (isMenuOpen) setIsMenuOpen(false);
            };
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`text-gray-700  hover:text-purple-600 font-semibold transition-colors 
                    hover:underline hover:decoration-purple-600 hover:underline-offset-8
                    ${
                      isActive
                        ? "underline decoration-purple-600 underline-offset-8"
                        : ""
                    }`}
                  onClick={handleLinkClick}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Right section - Language and Login */}
        <div
          className={`${
            isMenuOpen ? "flex" : "hidden"
          } lg:flex w-full lg:w-[180px] items-center flex-col md:flex-row justify-center lg:justify-end mt-4 lg:mt-0 lg:ml-auto gap-2`}
        >
          {/* Separate Login and Register Buttons */}
          <Link
            href="http://localhost:9000/login"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="w-full lg:w-auto mr-2 rounded-full " variant="secondary">
              Login
            </Button>
          </Link>
          <Link
            href="http://localhost:9000/register"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="w-full lg:w-auto" variant="primaryoutline">
              Register
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
