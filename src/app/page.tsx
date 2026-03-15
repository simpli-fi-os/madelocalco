"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  Search,
  MapPin,
  Flower2,
  Hammer,
  CookingPot,
  Gem,
  Palette,
  Shirt,
  Leaf,
  Cake,
  ArrowRight,
  Heart,
  Users,
  Sparkles,
  BadgeCheck,
  CircleDollarSign,
  MessageCircle,
  BookOpen,
} from "lucide-react";

const CATEGORIES = [
  { name: "Ceramics", slug: "ceramics", icon: Flower2 },
  { name: "Woodworking", slug: "woodworking", icon: Hammer },
  { name: "Food & Drink", slug: "food", icon: CookingPot },
  { name: "Jewelry", slug: "jewelry", icon: Gem },
  { name: "Art & Prints", slug: "art", icon: Palette },
  { name: "Clothing", slug: "clothing", icon: Shirt },
  { name: "Plants", slug: "plants", icon: Leaf },
  { name: "Bakery", slug: "bakery", icon: Cake },
];

const POPULAR_SEARCHES = [
  "Handmade pottery",
  "Raw honey",
  "Custom woodwork",
  "Fresh bread",
  "Local jewelry",
  "Artisan candles",
];

export default function Home() {
  const [zip, setZip] = useState("");
  const [query, setQuery] = useState("");
  const router = useRouter();

  function handleSearch(e: React.FormEvent) {
    e.preventDefault();
    const params = new URLSearchParams();
    if (zip) params.set("zip", zip);
    if (query) params.set("q", query);
    router.push(`/search?${params.toString()}`);
  }

  return (
    <>
      {/* ─── HERO ─── */}
      <section className="relative overflow-hidden bg-stone-950">
        {/* Ambient glow */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(45,80,22,0.15) 0%, transparent 70%), radial-gradient(ellipse 40% 40% at 80% 100%, rgba(198,93,59,0.1) 0%, transparent 70%)",
          }}
        />

        <div className="relative mx-auto max-w-7xl px-6 pb-24 pt-20 sm:pb-32 sm:pt-28 lg:px-8 lg:pb-40 lg:pt-36">
          <div className="mx-auto max-w-3xl text-center">
            {/* Badge */}
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-stone-700/60 bg-stone-800/60 px-4 py-1.5 text-xs font-medium text-stone-300 backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-sage" />
              Supporting local makers across the country
            </div>

            <h1 className="font-[family-name:var(--font-fraunces)] text-[2.75rem] font-bold leading-[1.1] tracking-tight text-white sm:text-6xl lg:text-7xl">
              Find the hands{" "}
              <span className="bg-gradient-to-r from-wheat via-[#e8d4a8] to-terracotta bg-clip-text text-transparent">
                that made it
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-stone-400 sm:text-xl">
              One search connects you to artisans, craftsmen, and farmers in
              your community. No middlemen. No algorithms. Just real people
              making real things.
            </p>

            {/* Search bar */}
            <form
              onSubmit={handleSearch}
              className="mx-auto mt-10 max-w-2xl"
            >
              <div className="flex items-center overflow-hidden rounded-2xl border border-stone-700/40 bg-stone-800/50 shadow-[0_4px_24px_rgba(0,0,0,0.3)] backdrop-blur-sm transition-all duration-200 focus-within:border-forest/60 focus-within:shadow-[0_4px_32px_rgba(45,80,22,0.15)]">
                <Search className="ml-5 h-5 w-5 shrink-0 text-stone-500" />
                <input
                  type="text"
                  placeholder="What are you looking for?"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="flex-1 bg-transparent px-4 py-4 text-base text-white placeholder:text-stone-500 focus:outline-none"
                />
                <div className="hidden h-6 w-px bg-stone-700 sm:block" />
                <MapPin className="ml-4 hidden h-5 w-5 shrink-0 text-stone-500 sm:block" />
                <input
                  type="text"
                  placeholder="Zip code"
                  value={zip}
                  onChange={(e) => setZip(e.target.value)}
                  maxLength={5}
                  pattern="[0-9]*"
                  inputMode="numeric"
                  className="hidden w-28 bg-transparent px-3 py-4 text-base text-white placeholder:text-stone-500 focus:outline-none sm:block"
                />
                <button
                  type="submit"
                  className="m-1.5 rounded-xl bg-forest px-6 py-2.5 text-sm font-semibold text-white transition-all hover:bg-forest-600 active:scale-[0.97]"
                >
                  Search
                </button>
              </div>

              {/* Mobile zip input */}
              <div className="mt-3 sm:hidden">
                <div className="flex items-center overflow-hidden rounded-xl border border-stone-700/40 bg-stone-800/50">
                  <MapPin className="ml-4 h-5 w-5 shrink-0 text-stone-500" />
                  <input
                    type="text"
                    placeholder="Enter your zip code"
                    value={zip}
                    onChange={(e) => setZip(e.target.value)}
                    maxLength={5}
                    pattern="[0-9]*"
                    inputMode="numeric"
                    className="flex-1 bg-transparent px-3 py-3.5 text-base text-white placeholder:text-stone-500 focus:outline-none"
                  />
                </div>
              </div>
            </form>

            {/* Popular searches */}
            <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
              <span className="text-xs text-stone-600">Popular:</span>
              {POPULAR_SEARCHES.map((term) => (
                <button
                  key={term}
                  onClick={() => {
                    setQuery(term);
                    router.push(`/search?q=${encodeURIComponent(term)}`);
                  }}
                  className="rounded-full border border-stone-800 px-3 py-1 text-xs text-stone-500 transition-all hover:border-stone-600 hover:text-stone-300"
                >
                  {term}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── CATEGORIES ─── */}
      <section className="mx-auto max-w-7xl px-6 py-20 sm:py-28 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-forest">
            Explore
          </p>
          <h2 className="mt-2 font-[family-name:var(--font-fraunces)] text-3xl font-semibold tracking-tight sm:text-4xl">
            Browse by craft
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-base text-stone-500">
            From wheel-thrown ceramics to farm-fresh produce, discover the makers
            shaping your local community.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:gap-5">
          {CATEGORIES.map((cat) => {
            const Icon = cat.icon;
            return (
              <Link
                key={cat.slug}
                href={`/categories/${cat.slug}`}
                className="group relative flex flex-col items-center gap-4 rounded-2xl border border-stone-200/80 bg-white p-7 shadow-[0_1px_3px_rgba(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-stone-300/80 hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-stone-100 text-forest transition-all duration-300 group-hover:scale-110 group-hover:bg-forest-50">
                  <Icon className="h-6 w-6" strokeWidth={1.5} />
                </div>
                <span className="text-sm font-medium text-stone-700 transition-colors group-hover:text-stone-900">
                  {cat.name}
                </span>
              </Link>
            );
          })}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/categories"
            className="inline-flex items-center gap-2 text-sm font-semibold text-forest transition-colors hover:text-forest-600"
          >
            View all 15 categories
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </section>

      {/* ─── HOW IT WORKS ─── */}
      <section className="border-y border-stone-200/60 bg-stone-100/50">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:py-28 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-terracotta">
              Simple by design
            </p>
            <h2 className="mt-2 font-[family-name:var(--font-fraunces)] text-3xl font-semibold tracking-tight sm:text-4xl">
              Three steps. That&apos;s it.
            </h2>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-8">
            {[
              {
                step: "01",
                icon: MapPin,
                title: "Enter your zip code",
                desc: "Tell us where you are. We'll find makers within driving distance.",
              },
              {
                step: "02",
                icon: Search,
                title: "Discover what's local",
                desc: "Browse by craft, search for something specific, or just explore what's nearby.",
              },
              {
                step: "03",
                icon: Heart,
                title: "Connect directly",
                desc: "Read their story, see their work, reach out. No platform fees stand between you.",
              },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.step} className="relative text-center md:text-left">
                  <span className="font-[family-name:var(--font-fraunces)] text-5xl font-bold text-stone-200">
                    {item.step}
                  </span>
                  <div className="mt-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-stone-900 text-white">
                    <Icon className="h-5 w-5" strokeWidth={1.5} />
                  </div>
                  <h3 className="mt-4 font-[family-name:var(--font-fraunces)] text-lg font-semibold tracking-tight">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-stone-500">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── WHY BUY LOCAL ─── */}
      <section className="mx-auto max-w-7xl px-6 py-20 sm:py-28 lg:px-8">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-forest">
              The local difference
            </p>
            <h2 className="mt-2 font-[family-name:var(--font-fraunces)] text-3xl font-semibold tracking-tight sm:text-4xl">
              Every purchase tells a story
            </h2>
            <p className="mt-4 text-base leading-relaxed text-stone-500">
              When you buy from a local maker, you&apos;re not just getting a
              product. You&apos;re investing in a person, a craft, and the
              community you share.
            </p>

            <div className="mt-10 space-y-8">
              {[
                {
                  icon: Users,
                  title: "$68 of every $100",
                  desc: "stays in the community when you buy local, compared to $43 at a national chain.",
                },
                {
                  icon: Sparkles,
                  title: "One of a kind",
                  desc: "Every piece carries the maker's intention, skill, and story. Mass production can't replicate that.",
                },
                {
                  icon: Leaf,
                  title: "Miles, not continents",
                  desc: "Less shipping, less packaging, less waste. Local goods are kinder to the planet by default.",
                },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="flex gap-5">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-forest-50 text-forest">
                      <Icon className="h-5 w-5" strokeWidth={1.5} />
                    </div>
                    <div>
                      <h4 className="text-[15px] font-semibold text-stone-900">
                        {item.title}
                      </h4>
                      <p className="mt-1 text-sm leading-relaxed text-stone-500">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Maker CTA card */}
          <div className="flex items-center">
            <div className="w-full rounded-3xl border border-stone-200/80 bg-white p-8 shadow-[0_1px_3px_rgba(0,0,0,0.04)] sm:p-10">
              <div className="inline-flex items-center gap-2 rounded-full bg-terracotta-50 px-3 py-1 text-xs font-semibold text-terracotta">
                <BadgeCheck className="h-3.5 w-3.5" />
                For Makers
              </div>

              <h3 className="mt-5 font-[family-name:var(--font-fraunces)] text-2xl font-semibold tracking-tight sm:text-3xl">
                Your craft deserves
                <br />
                to be found.
              </h3>

              <p className="mt-4 text-[15px] leading-relaxed text-stone-500">
                Join a directory built for makers, not algorithms. List your
                business for free and connect directly with people who value what
                you create.
              </p>

              <div className="mt-8 grid grid-cols-2 gap-4">
                {[
                  { icon: CircleDollarSign, text: "Free forever" },
                  { icon: Heart, text: "Keep 100% of sales" },
                  { icon: MessageCircle, text: "Direct customer contact" },
                  { icon: BookOpen, text: "Tell your story" },
                ].map((perk) => {
                  const Icon = perk.icon;
                  return (
                    <div key={perk.text} className="flex items-center gap-2.5">
                      <Icon className="h-4 w-4 shrink-0 text-sage" strokeWidth={1.5} />
                      <span className="text-sm text-stone-700">{perk.text}</span>
                    </div>
                  );
                })}
              </div>

              <Link
                href="/join"
                className="mt-8 inline-flex items-center gap-2 rounded-xl bg-stone-900 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-stone-800 active:scale-[0.98]"
              >
                List Your Business
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="bg-stone-950">
        <div className="mx-auto max-w-7xl px-6 py-20 text-center sm:py-28 lg:px-8">
          <h2 className="font-[family-name:var(--font-fraunces)] text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Ready to meet your makers?
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-stone-400">
            Support the artisans in your backyard. Every search strengthens a
            local business.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/search"
              className="rounded-xl bg-white px-8 py-3.5 text-sm font-semibold text-stone-900 shadow-lg transition-all hover:bg-stone-100 active:scale-[0.98]"
            >
              Find Makers Near You
            </Link>
            <Link
              href="/join"
              className="rounded-xl border border-stone-700 px-8 py-3.5 text-sm font-semibold text-stone-300 transition-all hover:border-stone-500 hover:bg-stone-800/50 hover:text-white"
            >
              List Your Business
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
