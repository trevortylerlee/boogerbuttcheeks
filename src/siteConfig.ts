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
  locale: "en-CA",
  timezone: "America/Los_Angeles",
};

export const NAV_LINKS: NavigationLinks = {
  blog: {
    path: "/blog",
    label: "Blog",
  },
  lists: {
    path: "/lists",
    label: "Lists",
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
    url: "https://twitter.com/boogerbuttcheek",
  },
};
