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
} from "lucide-react";

const CATEGORIES = [
  { name: "Ceramics & Pottery", slug: "ceramics", icon: Flower2 },
  { name: "Woodworking", slug: "woodworking", icon: Hammer },
  { name: "Food & Drink", slug: "food", icon: CookingPot },
  { name: "Jewelry", slug: "jewelry", icon: Gem },
  { name: "Art & Prints", slug: "art", icon: Palette },
  { name: "Clothing", slug: "clothing", icon: Shirt },
  { name: "Plants & Garden", slug: "plants", icon: Leaf },
  { name: "Bakery", slug: "bakery", icon: Cake },
];

const STEPS = [
  {
    icon: MapPin,
    title: "Enter your zip code",
    description: "Tell us where you are and how far you want to look.",
  },
  {
    icon: Search,
    title: "Search for what you need",
    description:
      "Browse by category or search for something specific — honey, pottery, leather goods.",
  },
  {
    icon: Heart,
    title: "Meet your maker",
    description:
      "Read their story, see their work, and reach out directly. No middleman, no platform fees.",
  },
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
      {/* Hero */}
      <section className="relative overflow-hidden bg-forest">
        <div className="absolute inset-0 opacity-10">
          <div
            className="h-full w-full"
            style={{
              backgroundImage:
                "radial-gradient(circle at 20% 50%, rgba(245,230,200,0.3) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(198,93,59,0.2) 0%, transparent 50%)",
            }}
          />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-36">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="font-[family-name:var(--font-fraunces)] text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Find the hands
              <br />
              <span className="text-wheat">that made it.</span>
            </h1>
            <p className="mt-6 text-lg text-white/80 sm:text-xl">
              Type your zip code. Find what you&apos;re looking for. Meet the
              person who made it.
            </p>

            <form
              onSubmit={handleSearch}
              className="mx-auto mt-10 flex max-w-2xl flex-col gap-3 sm:flex-row"
            >
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-clay" />
                <input
                  type="text"
                  placeholder="What are you looking for?"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="w-full rounded-xl border-2 border-transparent bg-white py-4 pl-12 pr-4 text-charcoal shadow-lg placeholder:text-clay focus:border-terracotta focus:outline-none"
                />
              </div>
              <div className="relative w-full sm:w-40">
                <MapPin className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-clay" />
                <input
                  type="text"
                  placeholder="Zip code"
                  value={zip}
                  onChange={(e) => setZip(e.target.value)}
                  maxLength={5}
                  pattern="[0-9]*"
                  inputMode="numeric"
                  className="w-full rounded-xl border-2 border-transparent bg-white py-4 pl-12 pr-4 text-charcoal shadow-lg placeholder:text-clay focus:border-terracotta focus:outline-none"
                />
              </div>
              <button
                type="submit"
                className="rounded-xl bg-terracotta px-8 py-4 font-semibold text-white shadow-lg transition-colors hover:bg-terracotta-light"
              >
                Search
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="text-center">
          <h2 className="font-[family-name:var(--font-fraunces)] text-3xl font-semibold text-charcoal sm:text-4xl">
            Browse by category
          </h2>
          <p className="mt-3 text-lg text-clay">
            Discover local artisans in the craft you love.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:gap-6">
          {CATEGORIES.map((cat) => {
            const Icon = cat.icon;
            return (
              <Link
                key={cat.slug}
                href={`/categories/${cat.slug}`}
                className="group flex flex-col items-center gap-3 rounded-2xl border border-wheat bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-sage hover:shadow-md"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-wheat/60 text-forest transition-colors group-hover:bg-sage/20">
                  <Icon className="h-7 w-7" />
                </div>
                <span className="text-center text-sm font-medium text-charcoal">
                  {cat.name}
                </span>
              </Link>
            );
          })}
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/categories"
            className="inline-flex items-center gap-2 text-sm font-semibold text-forest transition-colors hover:text-terracotta"
          >
            View all categories <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-wheat/40">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="text-center">
            <h2 className="font-[family-name:var(--font-fraunces)] text-3xl font-semibold text-charcoal sm:text-4xl">
              How it works
            </h2>
            <p className="mt-3 text-lg text-clay">
              Three steps to supporting your local makers.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
            {STEPS.map((step, i) => {
              const Icon = step.icon;
              return (
                <div key={i} className="text-center">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-forest text-white">
                    <Icon className="h-8 w-8" />
                  </div>
                  <h3 className="mt-5 font-[family-name:var(--font-fraunces)] text-xl font-semibold text-charcoal">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-clay">{step.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Value prop */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div>
            <h2 className="font-[family-name:var(--font-fraunces)] text-3xl font-semibold text-charcoal sm:text-4xl">
              Why buy local?
            </h2>
            <div className="mt-8 space-y-6">
              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-sage/20 text-forest">
                  <Users className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-charcoal">
                    Strengthen your community
                  </h4>
                  <p className="mt-1 text-sm text-clay">
                    For every $100 spent locally, $68 stays in the community
                    versus $43 at a national chain.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-sage/20 text-forest">
                  <Sparkles className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-charcoal">
                    Get something unique
                  </h4>
                  <p className="mt-1 text-sm text-clay">
                    Every piece has a story. Know exactly who made it, how they
                    made it, and why they love making it.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-sage/20 text-forest">
                  <Leaf className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-charcoal">
                    Reduce your footprint
                  </h4>
                  <p className="mt-1 text-sm text-clay">
                    Less shipping, less packaging, less waste. Local goods travel
                    miles, not continents.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-2xl border border-wheat bg-white p-8 shadow-sm lg:p-10">
            <h3 className="font-[family-name:var(--font-fraunces)] text-2xl font-semibold text-charcoal">
              Are you a maker?
            </h3>
            <p className="mt-3 text-clay">
              List your business for free. Get discovered by local customers who
              value what you create. No platform fees, no algorithms — just
              real connection.
            </p>
            <ul className="mt-5 space-y-2 text-sm text-charcoal">
              <li className="flex items-center gap-2">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-sage" />
                Free listing forever
              </li>
              <li className="flex items-center gap-2">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-sage" />
                Keep 100% of your sales
              </li>
              <li className="flex items-center gap-2">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-sage" />
                Direct customer contact
              </li>
              <li className="flex items-center gap-2">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-sage" />
                Tell your maker story
              </li>
            </ul>
            <Link
              href="/join"
              className="mt-6 inline-flex items-center gap-2 rounded-lg bg-terracotta px-6 py-3 font-semibold text-white transition-colors hover:bg-terracotta-light"
            >
              List Your Business <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-forest">
        <div className="mx-auto max-w-7xl px-4 py-16 text-center sm:px-6 sm:py-20 lg:px-8">
          <h2 className="font-[family-name:var(--font-fraunces)] text-3xl font-bold text-white sm:text-4xl">
            Ready to discover local makers?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-white/80">
            Buy local. Reduce waste. Reconnect with the people who make the
            things you love.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/search"
              className="rounded-xl bg-terracotta px-8 py-4 font-semibold text-white shadow-lg transition-colors hover:bg-terracotta-light"
            >
              Find Makers Near You
            </Link>
            <Link
              href="/join"
              className="rounded-xl border-2 border-white/30 px-8 py-4 font-semibold text-white transition-colors hover:border-white hover:bg-white/10"
            >
              List Your Business
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
