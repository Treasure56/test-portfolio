import type { Metadata } from "next";
import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/ProjectCard";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Projects built by Okeke Vivian Chinecherem using React.js, Next.js, Django, PHP, and more.",
};

export default function PortfolioPage() {
  return (
    <section
      id="portfolio"
      aria-labelledby="portfolio-heading"
      className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-20"
    >
      <div className="mb-10">
        <h1
          id="portfolio-heading"
          className="mb-3 text-3xl font-bold text-[var(--foreground)]"
        >
          Portfolio
        </h1>
        <p className="max-w-xl text-[var(--muted)]">
          A selection of projects I have built, covering both front-end
          interfaces and back-end systems.
        </p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
