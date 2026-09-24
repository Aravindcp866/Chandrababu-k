"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useState } from "react";
import { chandrababu } from "@/data/chandrababu";
import { navItems } from "@/lib/navigation";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [menuPath, setMenuPath] = useState(pathname);
  const menuId = useId();

  if (menuPath !== pathname) {
    setMenuPath(pathname);
    setOpen(false);
  }

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="site-header">
      <div className="page-shell flex h-[var(--header-h)] items-center justify-between gap-6">
        <Link
          href="/"
          className="serif text-[1.15rem] tracking-[0.18em] uppercase text-ink no-underline"
        >
          {chandrababu.name}
        </Link>

        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-8">
            {navItems.map((item) => {
              const current = pathname === item.href;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="nav-link"
                    aria-current={current ? "page" : undefined}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <button
          type="button"
          className="md:hidden kicker text-ink"
          aria-expanded={open}
          aria-controls={menuId}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      {open ? (
        <div
          id={menuId}
          className="md:hidden border-t border-line bg-paper"
        >
          <nav aria-label="Mobile" className="page-shell py-8">
            <ul className="flex flex-col gap-5">
              {navItems.map((item) => {
                const current = pathname === item.href;
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="serif text-3xl no-underline"
                      aria-current={current ? "page" : undefined}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
