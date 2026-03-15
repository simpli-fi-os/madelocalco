import type { Metadata } from "next";
import Link from "next/link";
import {
  Flower2,
  Hammer,
  CookingPot,
  Gem,
  Palette,
  Shirt,
  Leaf,
  Cake,
  Flame,
  Scissors,
  ShoppingBag,
  Tractor,
  Package,
  Grid3X3,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Browse Categories",
  description:
    "Browse all categories of local makers — ceramics, woodworking, food, jewelry, and more.",
};

const ALL_CATEGORIES = [
  { name: "Ceramics & Pottery", slug: "ceramics", icon: Flower2, desc: "Wheel-thrown, hand-built, glazed, and fired" },
  { name: "Woodworking", slug: "woodworking", icon: Hammer, desc: "Furniture, cutting boards, turned bowls" },
  { name: "Textiles & Fiber", slug: "textiles", icon: Scissors, desc: "Woven, knit, dyed, and stitched by hand" },
  { name: "Food & Drink", slug: "food", icon: CookingPot, desc: "Sauces, preserves, spirits, and specialty foods" },
  { name: "Honey & Bee Products", slug: "honey", icon: Leaf, desc: "Raw honey, beeswax, and hive-to-jar goods" },
  { name: "Candles & Soaps", slug: "candles", icon: Flame, desc: "Hand-poured candles and artisan soaps" },
  { name: "Jewelry", slug: "jewelry", icon: Gem, desc: "Handcrafted rings, necklaces, and earrings" },
  { name: "Leather Goods", slug: "leather", icon: ShoppingBag, desc: "Belts, wallets, bags, and custom leatherwork" },
  { name: "Art & Prints", slug: "art", icon: Palette, desc: "Original paintings, prints, and illustrations" },
  { name: "Plants & Garden", slug: "plants", icon: Leaf, desc: "Nursery plants, succulents, and garden art" },
  { name: "Home Goods", slug: "home", icon: Package, desc: "Handmade items for your living space" },
  { name: "Clothing & Accessories", slug: "clothing", icon: Shirt, desc: "Locally designed and sewn apparel" },
  { name: "Farm & Produce", slug: "farm", icon: Tractor, desc: "Fresh produce, eggs, meat, and dairy" },
  { name: "Bakery", slug: "bakery", icon: Cake, desc: "Sourdough, pastries, and baked-to-order treats" },
  { name: "Other", slug: "other", icon: Grid3X3, desc: "Unique crafts that defy categorization" },
];

export default function CategoriesPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-forest">
          Categories
        </p>
        <h1 className="mt-2 font-[family-name:var(--font-fraunces)] text-3xl font-bold tracking-tight sm:text-4xl">
          Explore by craft
        </h1>
        <p className="mt-4 text-base text-stone-500">
          Every category represents a community of skilled makers doing what
          they love.
        </p>
      </div>

      <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {ALL_CATEGORIES.map((cat) => {
          const Icon = cat.icon;
          return (
            <Link
              key={cat.slug}
              href={`/categories/${cat.slug}`}
              className="group flex items-start gap-4 rounded-2xl border border-stone-200/80 bg-white p-6 shadow-[0_1px_3px_rgba(0,0,0,0.04)] transition-all duration-300 hover:border-stone-300/80 hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)]"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-stone-100 text-forest transition-all duration-300 group-hover:scale-110 group-hover:bg-forest-50">
                <Icon className="h-5 w-5" strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="text-[15px] font-semibold text-stone-900 transition-colors group-hover:text-forest">
                  {cat.name}
                </h3>
                <p className="mt-1 text-sm text-stone-500">{cat.desc}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
