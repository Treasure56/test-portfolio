export interface Social {
  id: string;
  label: string;
  href: string;
  icon: "linkedin" | "github" | "twitter" | "mail";
  display: string;
}

export const socials: Social[] = [
  {
    id: "linkedin",
    label: "LinkedIn",
    href: "/",
    icon: "linkedin",
    display: "linkedin.com/in/vivian-chinecherem",
  },
  {
    id: "github",
    label: "GitHub",
    href: "https://github.com/VivianChinecherem",
    icon: "github",
    display: "github.com/VivianChinecherem",
  },
  {
    id: "twitter",
    label: "X (Twitter)",
    href: "https://x.com/@01_Lexvee153",
    icon: "twitter",
    display: "x.com/@01_Lexvee153",
  },
  {
    id: "email",
    label: "Email",
    href: "mailto:chinecherem153@gmail.com",
    icon: "mail",
    display: "chinecherem153@gmail.com",
  },
];
