import type { Metadata } from "next";
import Link from "next/link";
import { skills } from "@/data/skills";
import type { IconType } from "react-icons";
import {
  SiHtml5,
  SiCss,
  SiBootstrap,
  SiTailwindcss,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiDjango,
  SiPhp,
  SiPython,
  SiC,
  SiSharp,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { LuMonitor, LuLightbulb, LuUsers } from "react-icons/lu";

/** Brand icon + color for each skill name. */
const SKILL_META: Record<string, { Icon: IconType; color: string }> = {
  HTML: { Icon: SiHtml5, color: "#E34F26" },
  CSS: { Icon: SiCss, color: "#1572B6" },
  Bootstrap: { Icon: SiBootstrap, color: "#7952B3" },
  "Tailwind CSS": { Icon: SiTailwindcss, color: "#06B6D4" },
  JavaScript: { Icon: SiJavascript, color: "#F7DF1E" },
  "React.js": { Icon: SiReact, color: "#61DAFB" },
  "Next.js": { Icon: SiNextdotjs, color: "#888888" },
  Django: { Icon: SiDjango, color: "#16A34A" },
  PHP: { Icon: SiPhp, color: "#777BB4" },
  Python: { Icon: SiPython, color: "#3776AB" },
  C: { Icon: SiC, color: "#A8B9CC" },
  "C#": { Icon: SiSharp, color: "#239120" },
  Java: { Icon: FaJava, color: "#f89820" },
  "Responsive Web Design": { Icon: LuMonitor, color: "#6366F1" },
  "Problem Solving": { Icon: LuLightbulb, color: "#EAB308" },
  "Team Collaboration": { Icon: LuUsers, color: "#14B8A6" },
};

export const metadata: Metadata = {
  title: "Okeke Vivian Chinecherem – Full Stack Developer",
  description:
    "Portfolio of Okeke Vivian Chinecherem, a Full Stack Developer skilled in React, Next.js, Django, and PHP.",
};

export default function HomePage() {
  return (
    <>
      {/* ── Hero ── */}
      <section
        id="hero"
        aria-labelledby="hero-heading"
        className="mx-auto max-w-5xl px-4 py-24 sm:px-6 sm:py-32"
      >
        <p className="mb-3 text-sm font-medium uppercase tracking-widest text-[var(--color-accent-500)]">
          Hello, I&apos;m
        </p>
        <h1
          id="hero-heading"
          className="mb-4 text-4xl font-bold leading-tight tracking-tight text-[var(--foreground)] sm:text-5xl"
        >
          Okeke Vivian
          <br />
          <span className="text-[var(--muted)]">Chinecherem</span>
        </h1>
        <p className="mb-8 max-w-xl text-lg text-[var(--muted)]">
          Full Stack Developer with a strong foundation in front-end and
          back-end technologies. I build responsive, accessible web applications
          that are fast and easy to use.
        </p>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/portfolio"
            className="rounded-md bg-[var(--color-accent-500)] px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:scale-[1.02] hover:bg-[var(--color-accent-600)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent-500)] focus-visible:ring-offset-2"
          >
            View my work
          </Link>
          <Link
            // download={true}
            target="_blank"
            href="/Okeke_Vivian_Chinecherem_CV.pdf"
            className="rounded-md border border-[var(--border)] bg-[var(--surface)] px-5 py-2.5 text-sm font-semibold text-[var(--foreground)] shadow-sm transition-all duration-200 hover:scale-[1.02] hover:border-[var(--color-accent-400)] hover:text-[var(--color-accent-500)]"
          >
            My Resume
          </Link>
        </div>
      </section>

      {/* ── Divider ── */}
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <hr className="border-[var(--border)]" />
      </div>

      {/* ── About ── */}
      <section
        id="about"
        aria-labelledby="about-heading"
        className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-20"
      >
        <h2
          id="about-heading"
          className="mb-6 text-2xl font-bold text-[var(--foreground)]"
        >
          About Me
        </h2>
        <div className="max-w-2xl space-y-4 text-[var(--muted)] leading-relaxed">
          <p>
            I am skilled in building responsive web applications using modern
            frameworks and programming languages. My toolkit spans both the
            front end (React.js, Next.js, Tailwind CSS) and the back end
            (Django, PHP), which lets me take a project from an idea to a fully
            working product.
          </p>
          <p>
            I am passionate about writing clean, efficient code and solving
            real-world problems through technology. I enjoy breaking down
            complex requirements into simple, maintainable solutions.
          </p>
          <p>
            I am actively seeking an opportunity to contribute to creative
            software projects while continuing to grow as a developer.
          </p>

          {/* Education */}
          <div className="mt-6 rounded-lg border border-[var(--border)] bg-[var(--surface)] p-4">
            <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-[var(--color-accent-500)]">
              Education
            </p>
            <p className="font-semibold text-[var(--foreground)]">
              Diploma in Software Engineering
            </p>
            <p className="text-sm text-[var(--muted)]">
              Aptech &mdash; Class of 2025
            </p>
          </div>
        </div>
      </section>

      {/* ── Divider ── */}
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <hr className="border-[var(--border)]" />
      </div>

      {/* ── Skills ── */}
      <section
        id="skills"
        aria-labelledby="skills-heading"
        className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-20"
      >
        <h2
          id="skills-heading"
          className="mb-8 text-2xl font-bold text-[var(--foreground)]"
        >
          My Skills
        </h2>
        <div className="grid gap-6 sm:grid-cols-2">
          {skills.map((category) => (
            <div
              key={category.id}
              className="rounded-lg border border-[var(--border)] bg-[var(--surface)] p-5 shadow-sm"
            >
              <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-[var(--color-accent-500)]">
                {category.category}
              </h3>
              <ul
                className="flex flex-wrap gap-2"
                aria-label={`${category.category} skills`}
              >
                {category.items.map((skill) => {
                  const meta = SKILL_META[skill];
                  const Icon = meta?.Icon;
                  const color = meta?.color ?? "#888888";
                  return (
                    <li
                      key={skill}
                      className="inline-flex items-center gap-1.5 rounded border px-2.5 py-1 text-sm font-medium transition-transform duration-150 hover:scale-[1.04]"
                      style={{
                        backgroundColor: `${color}1e` /* ~12 % opacity */,
                        borderColor: `${color}40` /* ~25 % opacity */,
                        color: "var(--foreground)",
                      }}
                    >
                      {Icon && (
                        <Icon
                          size={13}
                          aria-hidden="true"
                          style={{ color, flexShrink: 0 }}
                        />
                      )}
                      {skill}
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
