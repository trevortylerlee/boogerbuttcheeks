import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { formatBlogPosts } from "@/lib/util";
import { SITE } from "@/siteConfig";
import sanitizeHtml from "sanitize-html";
import MarkdownIt from "markdown-it";

const parser = new MarkdownIt();

const blogPosts = await getCollection("blog");
const formattedBlogPosts = formatBlogPosts(blogPosts);

export function GET(context) {
  return rss({
    title: SITE.title,
    description: SITE.description,
    site: context.site,
    items: formattedBlogPosts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.publicationDate,
      link: `/blog/${post.slug}`,
      content: sanitizeHtml(parser.render(post.body), {
        allowedTags: sanitizeHtml.defaults.allowedTags.concat(["img"]),
      }),
    })),
  });
}
