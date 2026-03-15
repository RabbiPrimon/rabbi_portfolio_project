import Link from "next/link";
import { CalendarDays, Clock3 } from "lucide-react";
import { getAllPosts } from "@/lib/mdx";
import { Badge } from "@/components/ui/badge";

export const metadata = {
  title: "Technical Blog | MD Rabbi Islam",
  description: "MDX-based backend engineering blog focused on Django, Redis, Celery, and PostgreSQL.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <main className="mx-auto w-full max-w-5xl px-4 py-16 md:px-8">
      <header className="mb-10 space-y-3">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-700 dark:text-sky-400">Technical Blog</p>
        <h1 className="text-4xl font-semibold text-slate-900 dark:text-white md:text-5xl">MDX Engineering Articles</h1>
        <p className="text-slate-600 dark:text-slate-400">Deep dives on backend architecture, scaling, and reliability patterns.</p>
      </header>

      <div className="grid gap-4">
        {posts.map((post) => (
          <article key={post.slug} className="rounded-2xl border border-slate-300/70 dark:border-white/10 bg-white/80 dark:bg-white/5 p-6 backdrop-blur-xl">
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">
              <Link href={`/blog/${post.slug}`}>{post.title}</Link>
            </h2>
            <p className="mt-3 text-slate-700 dark:text-slate-300">{post.description}</p>

            <div className="mt-4 flex flex-wrap items-center gap-4 text-xs text-slate-600 dark:text-slate-400">
              <span className="inline-flex items-center gap-1">
                <CalendarDays className="h-3.5 w-3.5" /> {new Date(post.date).toLocaleDateString()}
              </span>
              <span className="inline-flex items-center gap-1">
                <Clock3 className="h-3.5 w-3.5" /> {post.readingMinutes} min read
              </span>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <Badge key={tag}>{tag}</Badge>
              ))}
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}

