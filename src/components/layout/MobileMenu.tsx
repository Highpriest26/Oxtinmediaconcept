"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";
import type { NavItem } from "@/content/types";
import { cn } from "@/lib/utils";
import { buttonClass } from "../ui/Button";
import { Icon } from "../ui/Icon";

/** Accessible mobile navigation: disclosure button + full-screen panel, Esc to close, scroll lock. */
export function MobileMenu({
  items,
  cta,
  phone,
}: {
  items: NavItem[];
  cta: NavItem;
  phone: { display: string; href: string };
}) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const panelId = useId();
  const buttonRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  // Close when the route changes.
  const [lastPath, setLastPath] = useState(pathname);
  if (pathname !== lastPath) {
    setLastPath(pathname);
    setOpen(false);
  }

  useEffect(() => {
    if (!open) return;
    const root = document.documentElement;
    const prev = root.style.overflow;
    root.style.overflow = "hidden";
    panelRef.current?.querySelector<HTMLElement>("a, button")?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
      if (e.key === "Tab" && panelRef.current) {
        const focusables = [
          buttonRef.current,
          ...panelRef.current.querySelectorAll<HTMLElement>("a, button"),
        ].filter(Boolean) as HTMLElement[];
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener("keydown", onKey);
    return () => {
      root.style.overflow = prev;
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div className="lg:hidden">
      <button
        ref={buttonRef}
        type="button"
        className="relative z-[60] grid size-12 place-items-center text-ink"
        aria-expanded={open}
        aria-controls={panelId}
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen((o) => !o)}
      >
        <Icon name={open ? "close" : "menu"} className="size-6" />
      </button>

      <div
        id={panelId}
        ref={panelRef}
        hidden={!open}
        className="fixed inset-x-0 bottom-0 top-[var(--header-h)] z-50 overflow-y-auto bg-paper"
      >
        <nav aria-label="Mobile" className="container-site flex min-h-full flex-col py-6">
          <ul className="divide-y divide-ink/10 border-y border-ink/10">
            {items.map((item) => {
              const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "flex min-h-16 items-center justify-between font-display text-2xl font-bold",
                      active ? "text-brand" : "text-ink",
                    )}
                  >
                    {item.label}
                    <Icon name="arrow-right" className="size-5 opacity-40" />
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className="mt-8 grid gap-3">
            <Link href={cta.href} onClick={() => setOpen(false)} className={buttonClass("primary", "w-full")}>
              {cta.label}
            </Link>
            <a href={phone.href} className={buttonClass("outline", "w-full")}>
              <Icon name="phone" className="size-4" />
              Call {phone.display}
            </a>
          </div>
        </nav>
      </div>
    </div>
  );
}
