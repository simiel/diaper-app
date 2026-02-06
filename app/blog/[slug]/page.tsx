import Header from "@/components/Header";
import Nav from "@/components/Nav";
import { notFound } from "next/navigation";
import Footer from "@/components/Footer";
import Image from "next/image";
import { getPostBySlug } from "@/lib/repositories/blog";

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) {
    notFound();
  }

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
          <div className="relative h-64 w-full rounded-3xl overflow-hidden mb-6">
            <Image
              src={post.coverUrl || "/baby2.jpg"}
              alt={post.title}
              fill
              className="object-cover"
              unoptimized
            />
          </div>
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
