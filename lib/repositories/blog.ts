import fs from "fs";
import path from "path";
import { prisma } from "@/lib/prisma";

type PostMeta = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  coverUrl?: string;
};

type Post = PostMeta & { body: string[] };

const CONTENT_DIR = path.join(process.cwd(), "content", "blog");

const parseFrontmatter = (raw: string, slug: string): PostMeta => {
  const match = raw.match(/---\n([\s\S]*?)\n---/);
  const frontmatter = match ? match[1] : "";
  const get = (key: string) => {
    const line = frontmatter
      .split("\n")
      .find((l) => l.trim().startsWith(`${key}:`));
    return line ? line.split(":").slice(1).join(":").trim() : "";
  };
  return {
    slug,
    title: get("title") || "Untitled",
    date: get("date") || "2025-01-01",
    excerpt: get("excerpt") || "",
    coverUrl: get("coverUrl") || undefined,
  };
};

const parsePost = (raw: string, slug: string): Post => {
  const meta = parseFrontmatter(raw, slug);
  const body = raw.replace(/---[\s\S]*?---/, "").trim();
  const paragraphs = body ? body.split(/\n\s*\n/) : [];
  return { ...meta, body: paragraphs };
};

const getMarkdownPosts = (): PostMeta[] => {
  if (!fs.existsSync(CONTENT_DIR)) return [];
  const files = fs
    .readdirSync(CONTENT_DIR)
    .filter((file) => file.endsWith(".md"));
  return files
    .map((file) => {
      const slug = file.replace(".md", "");
      const raw = fs.readFileSync(path.join(CONTENT_DIR, file), "utf-8");
      return parseFrontmatter(raw, slug);
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1));
};

export const getAllPosts = async (): Promise<PostMeta[]> => {
  try {
    const posts = await prisma.blogPost.findMany({
      where: { published: true },
      orderBy: { createdAt: "desc" },
    });
    if (posts.length === 0) return getMarkdownPosts();
    return posts.map((post) => ({
      slug: post.slug,
      title: post.title,
      date: post.createdAt.toISOString().slice(0, 10),
      excerpt: post.excerpt || "",
      coverUrl: post.coverUrl || undefined,
    }));
  } catch {
    return getMarkdownPosts();
  }
};

export const getPostBySlug = async (slug: string): Promise<Post | null> => {
  try {
    const post = await prisma.blogPost.findUnique({ where: { slug } });
    if (!post) {
      const filePath = path.join(CONTENT_DIR, `${slug}.md`);
      if (!fs.existsSync(filePath)) return null;
      const raw = fs.readFileSync(filePath, "utf-8");
      return parsePost(raw, slug);
    }
    return {
      slug: post.slug,
      title: post.title,
      date: post.createdAt.toISOString().slice(0, 10),
      excerpt: post.excerpt || "",
      coverUrl: post.coverUrl || undefined,
      body: post.body ? post.body.split(/\n\s*\n/) : [],
    };
  } catch {
    return null;
  }
};
