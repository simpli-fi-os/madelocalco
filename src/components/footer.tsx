import Link from "next/link";
import { AnvilLogo } from "./anvil-logo";

const footerLinks = {
  Discover: [
    { href: "/search", label: "Find Makers" },
    { href: "/categories", label: "Browse Categories" },
  ],
  "For Makers": [
    { href: "/join", label: "List Your Business" },
    { href: "/join#pricing", label: "Pricing" },
  ],
  Company: [
    { href: "/about", label: "About" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-stone-200/60 bg-stone-950 text-stone-400">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-12">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-5">
            <div className="flex items-center gap-2.5">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-stone-800 text-stone-50">
                <AnvilLogo className="h-5 w-5" separatorColor="#292524" />
              </div>
              <span className="font-[family-name:var(--font-fraunces)] text-lg font-semibold text-stone-200">
                Made Local Co.
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed">
              The simplest way to discover artisans, craftsmen, and farmers in
              your community. Every maker has a story worth knowing.
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title} className="md:col-span-2">
              <h4 className="text-xs font-semibold uppercase tracking-widest text-stone-500">
                {title}
              </h4>
              <ul className="mt-4 space-y-3">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm transition-colors hover:text-stone-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-stone-800 pt-8 sm:flex-row">
          <p className="text-xs text-stone-600">
            &copy; {new Date().getFullYear()} Made Local Co. All rights
            reserved.
          </p>
          <p className="text-xs text-stone-600">
            Built with care in Denton, Texas.
          </p>
        </div>
      </div>
    </footer>
  );
}
