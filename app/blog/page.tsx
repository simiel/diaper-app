import Header from "@/components/Header";
import Nav from "@/components/Nav";
import Link from "next/link";
import fs from "fs";
import path from "path";
import Footer from "@/components/Footer";

type PostMeta = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
};

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
  };
};

const getPosts = (): PostMeta[] => {
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

export default function BlogPage() {
  const posts = getPosts();

  return (
    <main className="min-h-screen bg-[var(--background)]">
      <Header />
      <div className="relative z-20">
        <Nav />
      </div>

      <section className="py-16 border-b border-[var(--color-line)] bg-[var(--color-sand)]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs uppercase tracking-[0.2em] text-[var(--color-muted)] mb-4">
            The Pure Hug Journal
          </p>
          <h1 className="text-4xl sm:text-6xl lg:text-[64px] text-[var(--color-ink)] mb-4">
            Gentle guidance for modern motherhood.
          </h1>
          <p className="text-lg text-[var(--color-muted)] max-w-2xl">
            Tips on comfort, safety, and everyday care—crafted for Ghanaian
            families.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="bg-white border border-[var(--color-line)] rounded-3xl p-6 hover-lift"
              >
                <p className="text-xs uppercase tracking-[0.2em] text-[var(--color-muted)]">
                  {post.date}
                </p>
                <h2 className="text-2xl text-[var(--color-ink)] mt-4 mb-3">
                  {post.title}
                </h2>
                <p className="text-sm text-[var(--color-muted)] mb-6">
                  {post.excerpt}
                </p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-sm uppercase tracking-wide text-[var(--color-primary)] hover:text-[var(--color-ink)]"
                >
                  Read more →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
