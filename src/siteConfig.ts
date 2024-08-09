import type {
  SiteConfiguration,
  NavigationLinks,
  SocialLinks,
} from "@/types.ts";

export const SITE: SiteConfiguration = {
  title: "boogerbuttcheeks",
  description:
    "my name is boogerbuttcheeks. you killed my father. prepare to die.",
  url: "https://boogerbuttcheeks.com",
  author: "boogerbuttcheeks",
};

export const NAV_LINKS: NavigationLinks = {
  about: {
    path: "/about",
    label: "About",
  },
  blog: {
    path: "/blog",
    label: "Blog",
  },
  contact: {
    path: "/contact",
    label: "Contact",
  },
  lists: {
    path: "/lists",
    label: "Lists",
  },
  themes: {
    path: "/themes",
    label: "Themes",
  },
};

export const SOCIAL_LINKS: SocialLinks = {
  email: {
    label: "Email",
    url: "mailto:trevortylerlee@gmail.com",
  },
  github: {
    label: "GitHub",
    url: "https://github.com/trevortylerlee",
  },
  twitter: {
    label: "Twitter",
    url: "https://twitter.com/boogerbuttcheeks",
  },
};
