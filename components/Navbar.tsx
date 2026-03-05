"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "./ThemeToggle";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[var(--background)]/90 backdrop-blur-sm">
      <nav
        className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3 sm:px-6"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <Link
          href="/"
          className="text-sm font-semibold tracking-tight text-[var(--foreground)] transition-colors hover:text-[var(--color-accent-500)]"
        >
          Vivian<span className="text-[var(--color-accent-500)]">.</span>
        </Link>

        {/* Links */}
        <ul className="flex items-center gap-1">
          {navLinks.map(({ href, label }) => {
            const isActive = pathname === href;
            return (
              <li key={href}>
                <Link
                  href={href}
                  className={`rounded-md px-3 py-1.5 text-sm font-medium transition-all duration-200 hover:scale-[1.02] ${
                    isActive
                      ? "bg-[var(--color-accent-500)] text-white"
                      : "text-[var(--muted)] hover:bg-[var(--surface)] hover:text-[var(--foreground)]"
                  }`}
                  aria-current={isActive ? "page" : undefined}
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Theme toggle */}
        <ThemeToggle />
      </nav>
    </header>
  );
}
