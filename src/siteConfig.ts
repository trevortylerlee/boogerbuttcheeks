import type {
  SiteConfiguration,
  NavigationLinks,
  SocialLinks,
} from "@/types.ts";

export const SITE: SiteConfiguration = {
  title: "boogerbuttcheeks",
  description:
    "my name is boogerbuttcheeks. you called my father. prepare to die.",
  url: "https://boogerbuttcheeks.com",
  author: "boogerbuttcheeks",
};

export const NAV_LINKS: NavigationLinks = {
  about: {
    path: "/about",
    title: "About",
  },
  blog: {
    path: "/blog",
    title: "Blog",
  },
  contact: {
    path: "/contact",
    title: "Contact",
  },
  lists: {
    path: "/lists",
    title: "Lists",
  },
  themes: {
    path: "/themes",
    title: "Themes",
  },
};

export const SOCIAL_LINKS: SocialLinks = {
  email: {
    title: "Email",
    url: "mailto:trevortylerlee@gmail.com",
  },
  github: {
    title: "GitHub",
    url: "https://github.com/trevortylerlee",
  },
  twitter: {
    title: "Twitter",
    url: "https://twitter.com/boogerbuttcheeks",
  },
};
