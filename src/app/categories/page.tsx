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
  Brush,
  Package,
  Grid3X3,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Browse Categories",
  description:
    "Browse all categories of local makers — ceramics, woodworking, food, jewelry, and more.",
};

const ALL_CATEGORIES = [
  { name: "Ceramics & Pottery", slug: "ceramics", icon: Flower2, count: 0 },
  { name: "Woodworking", slug: "woodworking", icon: Hammer, count: 0 },
  { name: "Textiles & Fiber", slug: "textiles", icon: Scissors, count: 0 },
  { name: "Food & Drink", slug: "food", icon: CookingPot, count: 0 },
  { name: "Honey & Bee Products", slug: "honey", icon: Leaf, count: 0 },
  { name: "Candles & Soaps", slug: "candles", icon: Flame, count: 0 },
  { name: "Jewelry", slug: "jewelry", icon: Gem, count: 0 },
  { name: "Leather Goods", slug: "leather", icon: ShoppingBag, count: 0 },
  { name: "Art & Prints", slug: "art", icon: Palette, count: 0 },
  { name: "Plants & Garden", slug: "plants", icon: Leaf, count: 0 },
  { name: "Home Goods", slug: "home", icon: Package, count: 0 },
  { name: "Clothing & Accessories", slug: "clothing", icon: Shirt, count: 0 },
  { name: "Farm & Produce", slug: "farm", icon: Tractor, count: 0 },
  { name: "Bakery", slug: "bakery", icon: Cake, count: 0 },
  { name: "Other", slug: "other", icon: Grid3X3, count: 0 },
];

export default function CategoriesPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="text-center">
        <h1 className="font-[family-name:var(--font-fraunces)] text-3xl font-bold text-charcoal sm:text-4xl">
          Browse Categories
        </h1>
        <p className="mt-3 text-lg text-clay">
          Explore local makers by what they create.
        </p>
      </div>

      <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 lg:gap-6">
        {ALL_CATEGORIES.map((cat) => {
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
              <span className="text-xs text-clay">
                {cat.count} makers
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
