import Link from "next/link";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--border)] bg-[var(--background)] py-6">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-2 px-4 text-xs text-[var(--muted)] sm:flex-row sm:px-6">
        <p>© {year} Okeke Vivian Chinecherem. All rights reserved.</p>
        <nav aria-label="Footer navigation" className="flex gap-4">
          <Link
            href="/"
            className="transition-colors hover:text-[var(--foreground)]"
          >
            Home
          </Link>
          <Link
            href="/portfolio"
            className="transition-colors hover:text-[var(--foreground)]"
          >
            Portfolio
          </Link>
          <Link
            href="/contact"
            className="transition-colors hover:text-[var(--foreground)]"
          >
            Contact
          </Link>
        </nav>
      </div>
    </footer>
  );
}
