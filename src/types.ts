export type SiteConfiguration = {
  title: string;
  description: string;
  url: string;
  author: string;
};

export type NavigationLinks = {
  [key: string]: NavigationLink;
};

export type NavigationLink = {
  title: string;
  path: string;
};

export type SocialLinks = {
  [key: string]: SocialLink;
};

export type SocialLink = {
  title: string;
  url: string;
};
