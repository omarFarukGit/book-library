"use client";

import Link from "next/link";
import { useState } from "react";

import { X, Menu } from "lucide-react";
import { Button } from "@heroui/react";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const loading = false;
  const user = true;

  return (
    <nav className="w-full border-b sticky top-0 z-20 bg-[rgba(26,25,25,0.86)] backdrop-blur-sm shadow-sm">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-4 md:px-8">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold hover:opacity-80">
          Book-Library
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-4 sm:gap-6">
          <Link href="/books" className="hover:opacity-80">
            Books
          </Link>
          <Link href="/subscription" className="hover:opacity-80">
            Subscription
          </Link>
          <Link href="/about" className="hover:opacity-80">
            About
          </Link>
          <Link href="/contact" className="hover:opacity-80">
            Contact
          </Link>

          {loading ? (
            <span className="text-sm opacity-50">Loading...</span>
          ) : user ? (
            <>
              <Link href="/dashboard/user" className="hover:opacity-80 ">
                My Dashboard
              </Link>

              <Button variant="primary">Logout</Button>
            </>
          ) : (
            <Button>
              <Link href="/login">Login</Link>
            </Button>
          )}
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-gray-200 hover:text-white"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer with Smooth Slide */}
      <div
        className={`md:hidden bg-gray-900/95 backdrop-blur-sm w-full absolute top-full left-0 z-10 flex flex-col gap-4 p-4 transition-transform duration-900 ease-in-out ${
          mobileOpen
            ? "translate-y-0 opacity-100"
            : "-translate-y-full opacity-0 pointer-events-none"
        }`}
      >
        <Link
          href="/books"
          onClick={() => setMobileOpen(false)}
          className="hover:opacity-80"
        >
          Books
        </Link>
        <Link
          href="/subscription"
          onClick={() => setMobileOpen(false)}
          className="hover:opacity-80"
        >
          Subscription
        </Link>
        <Link
          href="/about"
          onClick={() => setMobileOpen(false)}
          className="hover:opacity-80"
        >
          About
        </Link>
        <Link
          href="/contact"
          onClick={() => setMobileOpen(false)}
          className="hover:opacity-80"
        >
          Contact
        </Link>

        {loading ? (
          <span className="text-sm opacity-50">Loading...</span>
        ) : user ? (
          <>
            <Link
              href="/dashboard/user"
              onClick={() => setMobileOpen(false)}
              className="hover:opacity-80 "
            >
              My Dashboard
            </Link>
            <Button
              variant="primary"
              onClick={async () => {
                setMobileOpen(false);
              }}
            >
              Logout
            </Button>
          </>
        ) : (
          <Button>
            <Link href="/login" onClick={() => setMobileOpen(false)}>
              Login
            </Link>
          </Button>
        )}
      </div>
    </nav>
  );
}
