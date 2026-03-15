import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Heart, Shield, Users, Hammer } from "lucide-react";

export const metadata: Metadata = {
  title: "About",
  description:
    "Made Local Co. connects passionate makers with conscious consumers. Learn about our mission.",
};

const VALUES = [
  {
    icon: Shield,
    name: "Authenticity",
    desc: "Real makers, real stories. No dropshippers, no resellers. Every listing is a person who makes something with their hands.",
  },
  {
    icon: Users,
    name: "Community",
    desc: "Local economies thrive when money stays close to home. We exist to strengthen the connection between makers and their neighbors.",
  },
  {
    icon: Heart,
    name: "Accessibility",
    desc: "Free for makers to be found, simple for consumers to search. We believe visibility shouldn't cost a fortune.",
  },
  {
    icon: Hammer,
    name: "Craftsmanship",
    desc: "We celebrate skill, tradition, and the made-by-hand ethos. The world needs more things made with intention.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="border-b border-stone-200/60 bg-stone-100/50 px-6 py-16 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-forest">
            Our story
          </p>
          <h1 className="mt-3 font-[family-name:var(--font-fraunces)] text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            We believe every maker
            <br />
            deserves to be found.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-stone-500">
            Made Local Co. is the simplest way to discover artisans, craftsmen,
            and farmers in your community. One search. Real people. No middlemen.
          </p>
        </div>
      </section>

      {/* Problem */}
      <section className="mx-auto max-w-3xl px-6 py-16 sm:py-24 lg:px-8">
        <div className="space-y-6 text-[15px] leading-relaxed text-stone-600">
          <p className="text-xl font-medium leading-relaxed text-stone-800">
            Finding locally made goods shouldn&apos;t require hours of
            research across farmers markets, Etsy, Instagram, and word of
            mouth.
          </p>

          <p>
            But right now, there&apos;s no single place to search
            &ldquo;handmade ceramics within 30 miles of me.&rdquo; Consumers
            want to buy local but don&apos;t know where to look. And small
            artisans — the people doing the most interesting, most human work
            — are buried under algorithms they can&apos;t afford to compete
            with.
          </p>

          <p>
            Made Local Co. fixes that. We&apos;re a searchable directory
            organized by location and craft. Enter your zip code, find
            what&apos;s nearby, and reach out directly to the person who made
            it. No platform fees. No cuts of sales. Just connection.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="border-y border-stone-200/60 bg-stone-100/50">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-[family-name:var(--font-fraunces)] text-2xl font-semibold tracking-tight sm:text-3xl">
              What we stand for
            </h2>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {VALUES.map((value) => {
              const Icon = value.icon;
              return (
                <div
                  key={value.name}
                  className="rounded-2xl border border-stone-200/80 bg-white p-7 shadow-[0_1px_3px_rgba(0,0,0,0.04)]"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-forest-50 text-forest">
                    <Icon className="h-5 w-5" strokeWidth={1.5} />
                  </div>
                  <h3 className="mt-4 font-[family-name:var(--font-fraunces)] text-lg font-semibold tracking-tight">
                    {value.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-stone-500">
                    {value.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-3xl px-6 py-16 text-center sm:py-24 lg:px-8">
        <h2 className="font-[family-name:var(--font-fraunces)] text-2xl font-semibold tracking-tight sm:text-3xl">
          Ready to get involved?
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-base text-stone-500">
          Whether you&apos;re looking to discover local makers or you are one —
          there&apos;s a place for you here.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/search"
            className="inline-flex items-center gap-2 rounded-xl bg-stone-900 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-stone-800 active:scale-[0.98]"
          >
            Find Makers <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/join"
            className="inline-flex items-center gap-2 rounded-xl border border-stone-300 px-6 py-3 text-sm font-semibold text-stone-700 transition-all hover:border-stone-400 hover:bg-stone-50"
          >
            List Your Business <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
