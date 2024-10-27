import { type CollectionEntry } from "astro:content";

import { SITE } from "@/siteConfig.ts";

export function formatDate(
  date: Date,
  options: {
    year?: "numeric" | "2-digit";
    month?: "numeric" | "2-digit" | "long" | "short" | "narrow";
    day?: "numeric" | "2-digit";
    hour?: "numeric" | "2-digit";
    minute?: "numeric" | "2-digit";
    timezone?: string;
  } = {},
  locale: string = SITE.locale,
): string {
  const defaultOptions: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: undefined,
    minute: undefined,
    timeZone: SITE.timezone,
    ...options,
  };

  const formatOptions = { ...defaultOptions, ...options };

  return new Intl.DateTimeFormat(locale, formatOptions).format(date);
}

// Sort newest first (default)
// const newestPosts = formatBlogPost(posts);

// Sort oldest first
// const oldestPosts = formatBlogPost(posts, { sortDirection: 'asc' });

interface FormatBlogPostsOptions {
  filterOutDrafts?: boolean;
  sortDirection?: string;
}

export function formatBlogPosts(
  posts: CollectionEntry<"blog">[],
  {
    filterOutDrafts = true,
    sortDirection = "desc",
  }: FormatBlogPostsOptions = {},
): CollectionEntry<"blog">[] {
  const filteredPosts = posts.reduce<CollectionEntry<"blog">[]>(
    (processedPosts, post) => {
      const { draft } = post.data;

      // filter out drafts if true
      if (filterOutDrafts && draft) return processedPosts;

      processedPosts.push(post);
      return processedPosts;
    },
    [],
  );

  if (sortDirection) {
    filteredPosts.sort((a, b) => {
      const dateA = new Date(a.data.publicationDate).getTime();
      const dateB = new Date(b.data.publicationDate).getTime();
      return sortDirection === "desc"
        ? dateB - dateA // newest first
        : dateA - dateB; // oldest first
    });
  }

  return filteredPosts;
}
