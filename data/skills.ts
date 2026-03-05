export interface SkillCategory {
  id: string;
  category: string;
  items: string[];
}

export const skills: SkillCategory[] = [
  {
    id: "frontend",
    category: "Frontend",
    items: [
      "HTML",
      "CSS",
      "Bootstrap",
      "Tailwind CSS",
      "JavaScript",
      "React.js",
      "Next.js",
    ],
  },
  {
    id: "backend",
    category: "Backend",
    items: ["Django", "PHP"],
  },
  {
    id: "languages",
    category: "Programming Languages",
    items: ["Python", "JavaScript", "C", "C#", "Java"],
  },
  {
    id: "other",
    category: "Other Skills",
    items: ["Responsive Web Design", "Problem Solving", "Team Collaboration"],
  },
];
