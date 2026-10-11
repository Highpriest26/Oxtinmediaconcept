"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { NavItem } from "@/content/types";
import { cn } from "@/lib/utils";

/** Desktop nav links with active-page state. */
export function NavLinks({ items }: { items: NavItem[] }) {
  const pathname = usePathname();
  return (
    <ul className="flex items-center gap-1">
      {items.map((item) => {
        const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
        return (
          <li key={item.href}>
            <Link
              href={item.href}
              aria-current={active ? "page" : undefined}
              className={cn(
                "relative inline-flex min-h-11 items-center px-4 text-sm font-semibold transition-colors",
                "after:absolute after:inset-x-4 after:bottom-1.5 after:h-0.5 after:origin-left after:bg-accent after:transition-transform",
                active ? "text-ink after:scale-x-100" : "text-ink/65 hover:text-ink after:scale-x-0 hover:after:scale-x-100",
              )}
            >
              {item.label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
