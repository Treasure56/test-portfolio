import { Project } from "@/data/projects";
import { LuExternalLink, LuGithub } from "react-icons/lu";
import Link from "next/link";
import Image from "next/image";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-lg border border-[var(--border)] bg-[var(--surface)] shadow-sm transition-all duration-200 hover:scale-[1.01] hover:shadow-md hover:border-[var(--color-accent-200)]">
      {/* Cover image */}
      {project.image && (
        <div className="relative h-44 w-full shrink-0 overflow-hidden border-b border-[var(--border)]">
          <Image
            src={project.image}
            alt={`${project.title} preview`}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
            sizes="(max-width: 640px) 100vw, 50vw"
          />
        </div>
      )}

      {/* Content */}
      <div className="flex flex-1 flex-col p-5">
        {/* Title */}
        <h3 className="mb-2 text-base font-semibold text-[var(--foreground)]">
          {project.title}
        </h3>

        {/* Description */}
        <p className="mb-4 flex-1 text-sm leading-relaxed text-[var(--muted)]">
          {project.description}
        </p>

        {/* Tags */}
        <ul
          className="mb-4 flex flex-wrap gap-1.5"
          aria-label="Technologies used"
        >
          {project.tags.map((tag) => (
            <li
              key={tag}
              className="rounded px-2 py-0.5 text-xs font-medium bg-[var(--background)] border border-[var(--border)] text-[var(--muted)]"
            >
              {tag}
            </li>
          ))}
        </ul>

        {/* Links */}
        {(project.github || project.live) && (
          <div className="flex items-center gap-3 text-sm">
            {project.github && (
              <Link
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-medium text-[var(--muted)] transition-colors hover:text-[var(--color-accent-500)]"
                aria-label={`View ${project.title} on GitHub`}
              >
                <LuGithub size={14} />
                Code
              </Link>
            )}
            {project.live && (
              <Link
                href={project.live}
                className="inline-flex items-center gap-1.5 font-medium text-[var(--color-accent-500)] transition-colors hover:text-[var(--color-accent-700)]"
                aria-label={`View live demo of ${project.title}`}
              >
                <LuExternalLink size={14} />
                Live
              </Link>
            )}
          </div>
        )}
      </div>
    </article>
  );
}
