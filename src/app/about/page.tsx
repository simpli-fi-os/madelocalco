import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "About",
  description:
    "Made Local Co. connects passionate makers with conscious consumers. Learn about our mission.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="font-[family-name:var(--font-fraunces)] text-3xl font-bold text-charcoal sm:text-4xl">
        About Made Local Co.
      </h1>

      <div className="mt-8 space-y-6 text-clay leading-relaxed">
        <p>
          In a world where we&apos;re increasingly disconnected from what we buy
          and who made it, Made Local Co. creates a bridge between local
          artisans, craftsmen, and farmers and the conscious consumers who want
          to support them.
        </p>

        <p className="text-xl font-medium text-charcoal">
          Type your zip code. Find what you&apos;re looking for. Meet the person
          who made it.
        </p>

        <h2 className="font-[family-name:var(--font-fraunces)] text-2xl font-semibold text-charcoal pt-4">
          The problem we&apos;re solving
        </h2>
        <p>
          Finding locally made goods requires hours of research across farmers
          markets, Etsy, Instagram, and word of mouth. There&apos;s no single
          source to search &ldquo;handmade ceramics within 30 miles of my zip
          code.&rdquo;
        </p>
        <p>
          Meanwhile, small artisans struggle with visibility. They&apos;re
          buried in algorithm-driven platforms or limited to physical farmers
          markets. There&apos;s no affordable way to be discovered by local
          buyers who are specifically looking for what they make.
        </p>

        <h2 className="font-[family-name:var(--font-fraunces)] text-2xl font-semibold text-charcoal pt-4">
          Our values
        </h2>
        <ul className="space-y-3">
          <li>
            <strong className="text-charcoal">Authenticity</strong> — Real
            makers, real stories, no dropshippers.
          </li>
          <li>
            <strong className="text-charcoal">Community</strong> — Local
            economies, reduced waste, human connection.
          </li>
          <li>
            <strong className="text-charcoal">Accessibility</strong> — Free for
            makers to be found, simple for consumers to search.
          </li>
          <li>
            <strong className="text-charcoal">Craftsmanship</strong> —
            Celebrating skill, tradition, and the made-by-hand ethos.
          </li>
        </ul>

        <h2 className="font-[family-name:var(--font-fraunces)] text-2xl font-semibold text-charcoal pt-4">
          How it works
        </h2>
        <p>
          Made Local Co. is a searchable directory of local makers organized by
          location and category. Consumers enter their zip code and find
          artisans nearby. Each listing includes the maker&apos;s story, what
          they create, and how to contact them directly.
        </p>
        <p>
          For makers, basic listings are always free. We never take a cut of
          your sales. We connect you directly with customers who value what you
          make.
        </p>
      </div>

      <div className="mt-10 flex flex-col gap-4 sm:flex-row">
        <Link
          href="/search"
          className="inline-flex items-center justify-center gap-2 rounded-lg bg-forest px-6 py-3 font-semibold text-white transition-colors hover:bg-forest-light"
        >
          Find Makers <ArrowRight className="h-4 w-4" />
        </Link>
        <Link
          href="/join"
          className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-terracotta px-6 py-3 font-semibold text-terracotta transition-colors hover:bg-terracotta hover:text-white"
        >
          List Your Business <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}
