import type { Metadata } from "next";
import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";

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
    description: "Get found by local customers.",
    features: [
      "Basic profile with bio",
      "Single profile photo",
      "One contact method",
      "One category listing",
      "Standard search placement",
    ],
    cta: "Get Started",
    highlighted: false,
  },
  {
    name: "Basic",
    price: "$9",
    period: "/month",
    description: "More visibility, more customers.",
    features: [
      "Everything in Free",
      "Photo gallery (10 images)",
      "Product listings (10)",
      "Multiple contact methods",
      "Multiple categories",
      "Verified Maker badge",
      "Basic analytics",
    ],
    cta: "Start Free Trial",
    highlighted: false,
  },
  {
    name: "Premium",
    price: "$19",
    period: "/month",
    description: "For serious makers building a business.",
    features: [
      "Everything in Basic",
      "Detailed analytics dashboard",
      "Priority search placement",
      "Meet the Maker video",
      "Unlimited product listings",
      "Quarterly market insights",
    ],
    cta: "Start Free Trial",
    highlighted: true,
  },
  {
    name: "Featured",
    price: "$49",
    period: "/month",
    description: "Maximum exposure for established makers.",
    features: [
      "Everything in Premium",
      "Homepage spotlight rotation",
      "Category page top placement",
      "Monthly social media promotion",
      "Direct email support",
      "Early access to new features",
    ],
    cta: "Start Free Trial",
    highlighted: false,
  },
];

export default function JoinPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      {/* Hero */}
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="font-[family-name:var(--font-fraunces)] text-3xl font-bold text-charcoal sm:text-4xl lg:text-5xl">
          Get discovered by
          <br />
          <span className="text-forest">local customers</span>
        </h1>
        <p className="mt-4 text-lg text-clay">
          List your business for free. No platform fees, no algorithms. Just
          real people finding your real work.
        </p>
      </div>

      {/* Pricing */}
      <div id="pricing" className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {TIERS.map((tier) => (
          <div
            key={tier.name}
            className={`relative flex flex-col rounded-2xl border p-6 shadow-sm ${
              tier.highlighted
                ? "border-forest bg-forest/5 ring-2 ring-forest"
                : "border-wheat bg-white"
            }`}
          >
            {tier.highlighted && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-forest px-4 py-1 text-xs font-semibold text-white">
                Most Popular
              </span>
            )}
            <h3 className="font-[family-name:var(--font-fraunces)] text-xl font-semibold text-charcoal">
              {tier.name}
            </h3>
            <div className="mt-3">
              <span className="text-3xl font-bold text-charcoal">
                {tier.price}
              </span>
              <span className="text-sm text-clay">{tier.period}</span>
            </div>
            <p className="mt-2 text-sm text-clay">{tier.description}</p>

            <ul className="mt-6 flex-1 space-y-3">
              {tier.features.map((feature) => (
                <li key={feature} className="flex items-start gap-2 text-sm">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-sage" />
                  <span className="text-charcoal">{feature}</span>
                </li>
              ))}
            </ul>

            <Link
              href="#"
              className={`mt-6 flex items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm font-semibold transition-colors ${
                tier.highlighted
                  ? "bg-forest text-white hover:bg-forest-light"
                  : "bg-wheat text-charcoal hover:bg-wheat/80"
              }`}
            >
              {tier.cta} <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        ))}
      </div>

      {/* Annual savings note */}
      <p className="mt-6 text-center text-sm text-clay">
        Save 2 months free with annual billing on any paid plan.
      </p>
    </div>
  );
}
