import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-wheat bg-charcoal text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <h3 className="font-[family-name:var(--font-fraunces)] text-xl font-bold text-wheat">
              Made Local Co.
            </h3>
            <p className="mt-3 text-sm text-white/70">
              Connecting passionate makers with conscious consumers. Find the
              hands that made it.
            </p>
          </div>

          {/* Discover */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-wheat">
              Discover
            </h4>
            <ul className="mt-4 space-y-2">
              <li>
                <Link
                  href="/search"
                  className="text-sm text-white/70 transition-colors hover:text-white"
                >
                  Find Makers
                </Link>
              </li>
              <li>
                <Link
                  href="/categories"
                  className="text-sm text-white/70 transition-colors hover:text-white"
                >
                  Browse Categories
                </Link>
              </li>
            </ul>
          </div>

          {/* For Makers */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-wheat">
              For Makers
            </h4>
            <ul className="mt-4 space-y-2">
              <li>
                <Link
                  href="/join"
                  className="text-sm text-white/70 transition-colors hover:text-white"
                >
                  List Your Business
                </Link>
              </li>
              <li>
                <Link
                  href="/join#pricing"
                  className="text-sm text-white/70 transition-colors hover:text-white"
                >
                  Pricing
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-wheat">
              Company
            </h4>
            <ul className="mt-4 space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-sm text-white/70 transition-colors hover:text-white"
                >
                  About
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-center text-xs text-white/50">
          &copy; {new Date().getFullYear()} Made Local Co. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
