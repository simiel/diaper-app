import Header from "@/components/Header";
import Nav from "@/components/Nav";
import fs from "fs";
import path from "path";
import { notFound } from "next/navigation";
import Footer from "@/components/Footer";

type Post = {
  title: string;
  date: string;
  excerpt: string;
  body: string[];
};

const CONTENT_DIR = path.join(process.cwd(), "content", "blog");

const parsePost = (raw: string): Post => {
  const match = raw.match(/---\n([\s\S]*?)\n---/);
  const frontmatter = match ? match[1] : "";
  const get = (key: string) => {
    const line = frontmatter
      .split("\n")
      .find((l) => l.trim().startsWith(`${key}:`));
    return line ? line.split(":").slice(1).join(":").trim() : "";
  };
  const body = raw.replace(/---[\s\S]*?---/, "").trim();
  const paragraphs = body ? body.split(/\n\s*\n/) : [];

  return {
    title: get("title") || "Untitled",
    date: get("date") || "2025-01-01",
    excerpt: get("excerpt") || "",
    body: paragraphs,
  };
};

export default function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const filePath = path.join(CONTENT_DIR, `${params.slug}.md`);
  if (!fs.existsSync(filePath)) {
    notFound();
  }
  const raw = fs.readFileSync(filePath, "utf-8");
  const post = parsePost(raw);

  return (
    <main className="min-h-screen bg-[var(--background)]">
      <Header />
      <div className="relative z-20">
        <Nav />
      </div>

      <section className="py-16 border-b border-[var(--color-line)] bg-[var(--color-sand)]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs uppercase tracking-[0.2em] text-[var(--color-muted)] mb-4">
            {post.date}
          </p>
          <h1 className="text-4xl sm:text-6xl lg:text-[64px] text-[var(--color-ink)] mb-4">
            {post.title}
          </h1>
          <p className="text-lg text-[var(--color-muted)]">{post.excerpt}</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 text-[var(--color-ink)] text-lg leading-relaxed">
          {post.body.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
}
