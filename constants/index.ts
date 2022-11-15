import { SocialLinkModule } from "@/types/index.ts";
import { TelegramIcon } from "@/components/Socials/Telegram.tsx";
import { GitHubIcon } from "@/components/Socials/GitHub.tsx";
import { GmailIcon } from "@/components/Socials/Gmail.tsx";
import { LinkedinIcon } from "@/components/Socials/Linkedin.tsx";

export const socialLinks: Array<SocialLinkModule> = [
  {
    id: 1,
    href: "/",
    title: "telegram",
    Icon: TelegramIcon,
  },
  {
    id: 2,
    href: "/",
    title: "github",
    Icon: GitHubIcon,
  },
  {
    id: 3,
    href: "/",
    title: "gmail",
    Icon: GmailIcon,
  },
  {
    id: 4,
    href: "/",
    title: "linkedin",
    Icon: LinkedinIcon,
  },
];
