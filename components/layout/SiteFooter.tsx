import Link from "next/link";
import { chandrababu } from "@/data/chandrababu";
import { navItems } from "@/lib/navigation";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-line">
      <div className="page-shell py-16 md:py-24">
        <p className="display text-[clamp(2.4rem,7vw,5.5rem)] text-ink">
          {chandrababu.footerLine}
        </p>
        <p className="mt-8 text-ink-soft">
          In loving memory of {chandrababu.name}
        </p>
        <p className="kicker mt-3">
          {chandrababu.locations.join(" · ")}
        </p>
        <hr className="hairline my-10" />
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <nav aria-label="Footer">
            <ul className="flex flex-wrap gap-x-6 gap-y-3">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="nav-link">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <p className="text-sm text-ink-faint">{chandrababu.createdBy}</p>
        </div>
      </div>
    </footer>
  );
}
