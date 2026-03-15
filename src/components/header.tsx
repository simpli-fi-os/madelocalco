"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-wheat bg-cream/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <span className="font-[family-name:var(--font-fraunces)] text-2xl font-bold text-forest">
            Made Local Co.
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex">
          <Link
            href="/search"
            className="text-sm font-medium text-charcoal transition-colors hover:text-forest"
          >
            Find Makers
          </Link>
          <Link
            href="/categories"
            className="text-sm font-medium text-charcoal transition-colors hover:text-forest"
          >
            Categories
          </Link>
          <Link
            href="/about"
            className="text-sm font-medium text-charcoal transition-colors hover:text-forest"
          >
            About
          </Link>
          <Link
            href="/join"
            className="rounded-lg bg-forest px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-forest-light"
          >
            List Your Business
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <X className="h-6 w-6 text-charcoal" />
          ) : (
            <Menu className="h-6 w-6 text-charcoal" />
          )}
        </button>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <nav className="border-t border-wheat bg-cream px-4 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            <Link
              href="/search"
              className="text-base font-medium text-charcoal"
              onClick={() => setMobileOpen(false)}
            >
              Find Makers
            </Link>
            <Link
              href="/categories"
              className="text-base font-medium text-charcoal"
              onClick={() => setMobileOpen(false)}
            >
              Categories
            </Link>
            <Link
              href="/about"
              className="text-base font-medium text-charcoal"
              onClick={() => setMobileOpen(false)}
            >
              About
            </Link>
            <Link
              href="/join"
              className="rounded-lg bg-forest px-5 py-2.5 text-center text-base font-semibold text-white"
              onClick={() => setMobileOpen(false)}
            >
              List Your Business
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
