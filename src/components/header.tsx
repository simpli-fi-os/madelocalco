"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Search } from "lucide-react";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-stone-200/60 bg-stone-50/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <Link href="/" className="flex items-center gap-2.5">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-stone-900">
            <svg viewBox="0 0 512 512" className="h-5 w-5">
              <g fill="#F5F5F5" transform="translate(0,-16)">
                <path d="M56 212 C40 212 30 226 42 240 L104 240 L104 212 Z" />
                <rect x="104" y="200" width="228" height="48" rx="6" />
                <rect x="332" y="200" width="76" height="84" rx="5" />
                <path d="M136 248 L126 316 C124 336 144 348 168 350 L184 352 L184 368 L348 368 L348 352 L364 350 C388 348 404 336 402 316 L392 248 Z" />
                <rect x="200" y="368" width="132" height="24" rx="6" />
                <rect x="140" y="392" width="252" height="38" rx="8" />
              </g>
            </svg>
          </div>
          <span className="font-[family-name:var(--font-fraunces)] text-lg font-semibold tracking-tight text-stone-900">
            Made Local Co.
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          <Link
            href="/search"
            className="rounded-lg px-4 py-2 text-sm font-medium text-stone-600 transition-colors hover:bg-stone-100 hover:text-stone-900"
          >
            Find Makers
          </Link>
          <Link
            href="/categories"
            className="rounded-lg px-4 py-2 text-sm font-medium text-stone-600 transition-colors hover:bg-stone-100 hover:text-stone-900"
          >
            Categories
          </Link>
          <Link
            href="/about"
            className="rounded-lg px-4 py-2 text-sm font-medium text-stone-600 transition-colors hover:bg-stone-100 hover:text-stone-900"
          >
            About
          </Link>
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Link
            href="/search"
            className="flex h-9 w-9 items-center justify-center rounded-lg text-stone-400 transition-colors hover:bg-stone-100 hover:text-stone-600"
            aria-label="Search"
          >
            <Search className="h-[18px] w-[18px]" />
          </Link>
          <Link
            href="/join"
            className="rounded-xl bg-stone-900 px-5 py-2.5 text-sm font-medium text-white transition-all hover:bg-stone-800 active:scale-[0.98]"
          >
            List Your Business
          </Link>
        </div>

        <button
          className="flex h-10 w-10 items-center justify-center rounded-lg text-stone-600 transition-colors hover:bg-stone-100 md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {mobileOpen && (
        <nav className="border-t border-stone-200/60 bg-stone-50 px-6 pb-6 pt-4 md:hidden">
          <div className="flex flex-col gap-1">
            {[
              { href: "/search", label: "Find Makers" },
              { href: "/categories", label: "Categories" },
              { href: "/about", label: "About" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-lg px-4 py-3 text-[15px] font-medium text-stone-700 transition-colors hover:bg-stone-100"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-3 border-t border-stone-200/60 pt-4">
              <Link
                href="/join"
                className="flex items-center justify-center rounded-xl bg-stone-900 px-5 py-3 text-[15px] font-medium text-white"
                onClick={() => setMobileOpen(false)}
              >
                List Your Business
              </Link>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}
