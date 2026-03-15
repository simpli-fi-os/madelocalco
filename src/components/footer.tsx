import Link from "next/link";

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
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-stone-800">
                <svg viewBox="0 0 512 512" className="h-5 w-5">
                  <g fill="#F5F5F5" transform="translate(0,-16)">
                    <path d="M56 212 C40 212 30 226 42 240 L104 240 L104 212 Z" />
                    <rect x="104" y="200" width="228" height="48" rx="6" />
                    <rect x="332" y="200" width="76" height="84" rx="5" />
                    <path d="M136 248 L126 316 C124 336 144 348 168 350 L184 352 L184 368 L348 368 L348 352 L364 350 C388 348 404 336 402 316 L392 248 Z" />
                    <rect x="200" y="368" width="132" height="24" rx="6" />
                    <rect x="140" y="392" width="252" height="38" rx="8" />
                  </g>
                </svg>
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
