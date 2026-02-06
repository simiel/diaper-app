import Header from "@/components/Header";
import Nav from "@/components/Nav";
import Link from "next/link";
import Image from "next/image";
import { getAllPosts } from "@/lib/repositories/blog";
import Footer from "@/components/Footer";

export default async function BlogPage() {
  const posts = await getAllPosts();

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
                <div className="relative h-40 w-full rounded-2xl overflow-hidden mb-4">
                  <Image
                    src={post.coverUrl || "/baby1.jpg"}
                    alt={post.title}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>
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
