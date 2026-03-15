import type { Metadata } from "next";
import { Search, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Find Local Makers",
  description:
    "Search for local artisans, craftsmen, and farmers near you by zip code and category.",
};

export default function SearchPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="text-center">
        <h1 className="font-[family-name:var(--font-fraunces)] text-3xl font-bold text-charcoal sm:text-4xl">
          Find Local Makers
        </h1>
        <p className="mt-3 text-lg text-clay">
          Search by zip code and category to discover makers in your area.
        </p>
      </div>

      {/* Search form */}
      <div className="mx-auto mt-8 max-w-2xl">
        <form className="flex flex-col gap-3 sm:flex-row">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-clay" />
            <input
              type="text"
              name="q"
              placeholder="What are you looking for?"
              className="w-full rounded-xl border-2 border-wheat bg-white py-3 pl-12 pr-4 text-charcoal placeholder:text-clay focus:border-forest focus:outline-none"
            />
          </div>
          <div className="relative w-full sm:w-36">
            <MapPin className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-clay" />
            <input
              type="text"
              name="zip"
              placeholder="Zip code"
              maxLength={5}
              className="w-full rounded-xl border-2 border-wheat bg-white py-3 pl-12 pr-4 text-charcoal placeholder:text-clay focus:border-forest focus:outline-none"
            />
          </div>
          <button
            type="submit"
            className="rounded-xl bg-forest px-6 py-3 font-semibold text-white transition-colors hover:bg-forest-light"
          >
            Search
          </button>
        </form>
      </div>

      {/* Coming soon state */}
      <div className="mt-16 flex flex-col items-center gap-4 text-center">
        <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-wheat/60 text-forest">
          <Search className="h-10 w-10" />
        </div>
        <h2 className="font-[family-name:var(--font-fraunces)] text-xl font-semibold text-charcoal">
          Search is coming soon
        </h2>
        <p className="max-w-md text-clay">
          We&apos;re building out our maker directory. Check back soon to search
          for local artisans near you.
        </p>
      </div>
    </div>
  );
}
