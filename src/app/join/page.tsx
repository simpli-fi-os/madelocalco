import type { Metadata } from "next";
import Link from "next/link";
import { Check, ArrowRight, Zap } from "lucide-react";

export const metadata: Metadata = {
  title: "List Your Business",
  description:
    "Join Made Local Co. and get discovered by local customers. Free to list, no platform fees.",
};

const TIERS = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Everything you need to get discovered.",
    features: [
      "Profile with your story",
      "Profile photo",
      "Contact info",
      "Category listing",
      "Appear in search results",
    ],
    cta: "Create Your Profile",
    highlighted: false,
  },
  {
    name: "Basic",
    price: "$9",
    period: "/mo",
    description: "Stand out with richer content.",
    features: [
      "Everything in Free",
      "Photo gallery (10 images)",
      "Product listings",
      "Multiple categories",
      "Verified Maker badge",
      "Basic view analytics",
    ],
    cta: "Start 14-Day Free Trial",
    highlighted: false,
  },
  {
    name: "Premium",
    price: "$19",
    period: "/mo",
    description: "Built for makers growing a business.",
    features: [
      "Everything in Basic",
      "Full analytics dashboard",
      "Priority search ranking",
      "Meet the Maker video",
      "Unlimited products",
      "Quarterly market insights",
    ],
    cta: "Start 14-Day Free Trial",
    highlighted: true,
  },
  {
    name: "Featured",
    price: "$49",
    period: "/mo",
    description: "Maximum visibility. Maximum reach.",
    features: [
      "Everything in Premium",
      "Homepage spotlight",
      "Top of category pages",
      "Monthly social promotion",
      "Priority email support",
      "Early feature access",
    ],
    cta: "Start 14-Day Free Trial",
    highlighted: false,
  },
];

export default function JoinPage() {
  return (
    <>
      {/* Hero */}
      <section className="border-b border-stone-200/60 bg-stone-100/50 px-6 py-16 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-forest-50 px-4 py-1.5 text-xs font-semibold text-forest">
            <Zap className="h-3.5 w-3.5" />
            Free to get started
          </div>
          <h1 className="font-[family-name:var(--font-fraunces)] text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Your customers are
            <br />
            <span className="bg-gradient-to-r from-forest to-sage bg-clip-text text-transparent">
              searching for you
            </span>
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-lg text-stone-500">
            List your business in minutes. No platform fees on your sales, ever.
            We connect you directly with people who care about buying local.
          </p>
        </div>
      </section>

      {/* Pricing grid */}
      <section id="pricing" className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {TIERS.map((tier) => (
            <div
              key={tier.name}
              className={`relative flex flex-col rounded-2xl border p-7 transition-all duration-300 ${
                tier.highlighted
                  ? "border-forest bg-white shadow-[0_8px_30px_rgba(45,80,22,0.1)] ring-1 ring-forest"
                  : "border-stone-200/80 bg-white shadow-[0_1px_3px_rgba(0,0,0,0.04)] hover:shadow-[0_4px_20px_rgba(0,0,0,0.06)]"
              }`}
            >
              {tier.highlighted && (
                <span className="absolute -top-3 left-6 rounded-full bg-forest px-3 py-1 text-[11px] font-semibold tracking-wide text-white">
                  MOST POPULAR
                </span>
              )}

              <h3 className="font-[family-name:var(--font-fraunces)] text-lg font-semibold tracking-tight">
                {tier.name}
              </h3>

              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-4xl font-bold tracking-tight text-stone-900">
                  {tier.price}
                </span>
                <span className="text-sm text-stone-500">{tier.period}</span>
              </div>

              <p className="mt-2 text-sm text-stone-500">{tier.description}</p>

              <ul className="mt-7 flex-1 space-y-3">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5 text-sm">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-forest" strokeWidth={2.5} />
                    <span className="text-stone-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="#"
                className={`mt-8 flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition-all active:scale-[0.98] ${
                  tier.highlighted
                    ? "bg-stone-900 text-white hover:bg-stone-800"
                    : "bg-stone-100 text-stone-900 hover:bg-stone-200"
                }`}
              >
                {tier.cta}
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-stone-500">
          All paid plans include a 14-day free trial. Save 2 months with annual
          billing.
        </p>
      </section>
    </>
  );
}
