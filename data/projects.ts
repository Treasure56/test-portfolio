export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image?: string;
  github?: string;
  live?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Skill stack",
    description:
      "A  personal command center for professional development. Log your skills, set mastery goals, and watch your potential expand",
    tags: ["React.js", "Nextjs", "Tailwind CSS"],
    image: "/images/skill-stack.png",
    live: "https://skill-stack-eta.vercel.app/",
  },
  {
    id: 2,
    title: "Shiftly",
    description:
      "A responsive event and staff management platform. Manage your staff and their shifts, events and more.",
    tags: ["Next.js", "Node.JS", "Tailwind CSS", "MongoDB"],
    image: "/images/shifty.png",
    live: "https://shiftly-orpin.vercel.app/",
  },
  {
    id: 3,
    title: "Um-health",
    description:
      "A platform for booking Medical appointments, accessing medical records, tracking medications, monitoring bills, and getting personalized health insights all in one easy-to-use Patient Platform.",
    tags: ["React.js", "Nextjs", "Tailwind CSS", "MongoDB"],
    image: "/images/um-health.png",
    live: "https://umhealth.vercel.app/",
  },
  {
    id: 4,
    title: "LifeLink",
    description:
      "An emergency response web app that connects patients to the nearest available ambulance in real time, built to reduce response time with live tracking and smart dispatch.",
    tags: ["Next.js", "Tailwind CSS", "TypeScript"],
    image: "/images/life-link.png",
    live: "https://life-link-kappa.vercel.app/",
  },
];
