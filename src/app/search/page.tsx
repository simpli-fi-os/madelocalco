import type { Metadata } from "next";
import Link from "next/link";
import { Search, MapPin, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Find Local Makers",
  description:
    "Search for local artisans, craftsmen, and farmers near you by zip code and category.",
};

export default function SearchPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-forest">
          Discover
        </p>
        <h1 className="mt-2 font-[family-name:var(--font-fraunces)] text-3xl font-bold tracking-tight sm:text-4xl">
          Find local makers near you
        </h1>
        <p className="mt-4 text-base text-stone-500">
          Enter a zip code and what you&apos;re looking for. We&apos;ll show you
          the artisans in your area.
        </p>
      </div>

      {/* Search */}
      <div className="mx-auto mt-10 max-w-2xl">
        <form className="flex items-center overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-[0_1px_3px_rgba(0,0,0,0.04)] transition-all duration-200 focus-within:border-forest/40 focus-within:shadow-[0_4px_20px_rgba(0,0,0,0.08)]">
          <Search className="ml-5 h-5 w-5 shrink-0 text-stone-400" />
          <input
            type="text"
            name="q"
            placeholder="Pottery, honey, woodwork..."
            className="flex-1 bg-transparent px-4 py-4 text-base text-stone-900 placeholder:text-stone-400 focus:outline-none"
          />
          <div className="hidden h-6 w-px bg-stone-200 sm:block" />
          <MapPin className="ml-4 hidden h-5 w-5 shrink-0 text-stone-400 sm:block" />
          <input
            type="text"
            name="zip"
            placeholder="Zip code"
            maxLength={5}
            className="hidden w-28 bg-transparent px-3 py-4 text-base text-stone-900 placeholder:text-stone-400 focus:outline-none sm:block"
          />
          <button
            type="submit"
            className="m-1.5 rounded-xl bg-stone-900 px-6 py-2.5 text-sm font-semibold text-white transition-all hover:bg-stone-800 active:scale-[0.97]"
          >
            Search
          </button>
        </form>
      </div>

      {/* Empty state */}
      <div className="mx-auto mt-24 max-w-sm text-center">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-stone-100 text-stone-400">
          <Search className="h-7 w-7" strokeWidth={1.5} />
        </div>
        <h2 className="mt-6 font-[family-name:var(--font-fraunces)] text-xl font-semibold tracking-tight">
          Directory launching soon
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-stone-500">
          We&apos;re onboarding the first wave of local makers. Want to be
          among the first listed?
        </p>
        <Link
          href="/join"
          className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-forest transition-colors hover:text-forest-600"
        >
          Join as a maker <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </div>
    </div>
  );
}
