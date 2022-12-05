import { SocialLinkModule } from "@/types/index.ts";
import { TelegramIcon } from "@/components/Icons/Socials/Telegram.tsx";
import { GitHubIcon } from "@/components/Icons/Socials/GitHub.tsx";
import { GmailIcon } from "@/components/Icons/Socials/Gmail.tsx";
import { LinkedinIcon } from "@/components/Icons/Socials/Linkedin.tsx";

export const socialLinks: Array<SocialLinkModule> = [
  {
    id: 1,
    href: "https://t.me/shakhzod_ayibov",
    title: "telegram",
    Icon: TelegramIcon,
  },
  {
    id: 2,
    href: "https://github.com/ayibovShakhzod",
    title: "github",
    Icon: GitHubIcon,
  },
  {
    id: 3,
    href: "mailto:ayubjonovshakhzod01@gmail.com",
    title: "gmail",
    Icon: GmailIcon,
  },
  {
    id: 4,
    href: "https://www.linkedin.com/in/shakhzod-ayibjonov/",
    title: "linkedin",
    Icon: LinkedinIcon,
  },
];
