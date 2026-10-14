"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Icon } from "../ui/Icon";

type NavTab = {
  label: string;
  href: string;
  icon: "home" | "services" | "projects" | "about" | "quote";
  emphasis?: boolean;
};

const navTabs: NavTab[] = [
  { label: "Home", href: "/", icon: "home" },
  { label: "Services", href: "/services", icon: "services" },
  { label: "Projects", href: "/projects", icon: "projects" },
  { label: "About", href: "/about", icon: "about" },
  { label: "Get Quote", href: "/request-quote", icon: "quote", emphasis: true },
];

export function MobileBottomNav() {
  const pathname = usePathname();

  function isTabActive(href: string) {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  }

  return (
    <nav
      aria-label="Mobile Bottom Navigation"
      className="fixed left-1/2 bottom-[max(0.75rem,env(safe-area-inset-bottom))] z-50 w-[calc(100%-1.5rem)] max-w-md -translate-x-1/2 md:hidden"
    >
      <div className="flex items-center justify-between gap-1 rounded-2xl border border-white/15 bg-night/95 p-1.5 shadow-[0_8px_32px_rgba(0,0,0,0.36)] backdrop-blur-md">
        {navTabs.map((tab) => {
          const active = isTabActive(tab.href);

          if (tab.emphasis) {
            return (
              <Link
                key={tab.href}
                href={tab.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "relative flex min-h-[48px] flex-1 min-w-0 flex-col items-center justify-center gap-0.5 rounded-xl px-1 py-1.5 text-center transition-all duration-200 active:scale-95",
                  active
                    ? "bg-accent text-white shadow-md ring-2 ring-white/30"
                    : "bg-accent text-white shadow-sm hover:bg-accent/90",
                )}
              >
                <Icon name={tab.icon} className="size-[18px] shrink-0" />
                <span className="max-w-full truncate text-[9.5px] font-black tracking-tight min-[360px]:text-[10.5px]">
                  {tab.label}
                </span>
              </Link>
            );
          }

          return (
            <Link
              key={tab.href}
              href={tab.href}
              aria-current={active ? "page" : undefined}
              className={cn(
                "relative flex min-h-[48px] flex-1 min-w-0 flex-col items-center justify-center gap-0.5 rounded-xl px-1 py-1.5 text-center transition-all duration-200 active:scale-95",
                active
                  ? "bg-white/15 font-bold text-white shadow-xs"
                  : "font-medium text-white/65 hover:bg-white/5 hover:text-white",
              )}
            >
              <Icon
                name={tab.icon}
                className={cn("size-[18px] shrink-0 transition-colors", active ? "text-accent" : "text-white/70")}
              />
              <span className="max-w-full truncate text-[9.5px] tracking-tight min-[360px]:text-[10.5px]">
                {tab.label}
              </span>
              {active && (
                <span className="absolute bottom-1 size-1 rounded-full bg-accent" aria-hidden="true" />
              )}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
