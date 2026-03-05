import type { Metadata } from "next";
import { socials } from "@/data/socials";
import {
  LuLinkedin,
  LuGithub,
  LuTwitter,
  LuMail,
  LuPhone,
} from "react-icons/lu";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Okeke Vivian Chinecherem via email, LinkedIn, GitHub, or X.",
};

const iconMap = {
  linkedin: LuLinkedin,
  github: LuGithub,
  twitter: LuTwitter,
  mail: LuMail,
} as const;

export default function ContactPage() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-20"
    >
      {/* Heading */}
      <div className="mb-10">
        <h1
          id="contact-heading"
          className="mb-3 text-3xl font-bold text-[var(--foreground)]"
        >
          Contact
        </h1>
        <p className="max-w-md text-[var(--muted)]">
          I am open to new opportunities. Feel free to reach out through any of
          the channels below.
        </p>
      </div>

      {/* Direct contact */}
      <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:gap-6">
        {/* Email */}
        <a
          href="mailto:chinecherem153@gmail.com"
          className="group inline-flex items-center gap-3 rounded-lg border border-[var(--border)] bg-[var(--surface)] px-5 py-4 shadow-sm transition-all duration-200 hover:scale-[1.01] hover:border-[var(--color-accent-400)]"
          aria-label="Send an email to chinecherem153@gmail.com"
        >
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-[var(--color-accent-500)] text-white">
            <LuMail size={18} />
          </span>
          <div>
            <p className="text-xs text-[var(--muted)]">Email</p>
            <p className="text-sm font-medium text-[var(--foreground)] group-hover:text-[var(--color-accent-500)]">
              chinecherem153@gmail.com
            </p>
          </div>
        </a>

        {/* Phone */}
        <a
          href="tel:+2349124560456"
          className="group inline-flex items-center gap-3 rounded-lg border border-[var(--border)] bg-[var(--surface)] px-5 py-4 shadow-sm transition-all duration-200 hover:scale-[1.01] hover:border-[var(--color-accent-400)]"
          aria-label="Call 09124560456"
        >
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-[var(--color-accent-500)] text-white">
            <LuPhone size={18} />
          </span>
          <div>
            <p className="text-xs text-[var(--muted)]">Phone</p>
            <p className="text-sm font-medium text-[var(--foreground)] group-hover:text-[var(--color-accent-500)]">
              09124560456
            </p>
          </div>
        </a>
      </div>

      {/* Social links */}
      <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-[var(--muted)]">
        Find me online
      </h2>
      <ul
        className="flex flex-col gap-3 sm:max-w-md"
        aria-label="Social media links"
      >
        {socials.map((social) => {
          const Icon = iconMap[social.icon];
          return (
            <li key={social.id}>
              <a
                href={social.href}
                target={social.icon === "mail" ? undefined : "_blank"}
                rel={social.icon === "mail" ? undefined : "noopener noreferrer"}
                className="group flex items-center gap-4 rounded-lg border border-[var(--border)] bg-[var(--surface)] px-4 py-3 shadow-sm transition-all duration-200 hover:scale-[1.01] hover:border-[var(--color-accent-400)]"
                aria-label={`${social.label}: ${social.display}`}
              >
                <Icon
                  size={18}
                  className="shrink-0 text-[var(--muted)] transition-colors group-hover:text-[var(--color-accent-500)]"
                />
                <div className="min-w-0">
                  <p className="text-xs text-[var(--muted)]">{social.label}</p>
                  <p className="truncate text-sm font-medium text-[var(--foreground)] group-hover:text-[var(--color-accent-500)]">
                    {social.display}
                  </p>
                </div>
              </a>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
