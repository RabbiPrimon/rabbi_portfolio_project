import Link from "next/link";
import { CalendarDays, Clock3 } from "lucide-react";
import { getAllPosts } from "@/lib/mdx";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/section-heading";

export function BlogPreview() {
  const posts = getAllPosts().slice(0, 3);

  return (
    <section id="blog" className="mx-auto w-full max-w-7xl px-4 py-14 md:px-8">
      <SectionHeading
        eyebrow="Technical Blog"
        title="MDX engineering notes"
        description="Practical deep dives on Django scaling, Redis caching patterns, Celery architecture, and PostgreSQL optimization."
      />

      <div className="grid gap-4 md:grid-cols-3">
        {posts.map((post) => (
          <Card key={post.slug} className="flex h-full flex-col gap-4">
            <div>
              <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">{post.title}</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">{post.description}</p>
            </div>

            <div className="mt-auto space-y-3">
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <Badge key={tag}>{tag}</Badge>
                ))}
              </div>
              <div className="flex items-center gap-3 text-xs text-slate-600 dark:text-slate-400">
                <span className="inline-flex items-center gap-1">
                  <CalendarDays className="h-3.5 w-3.5" /> {new Date(post.date).toLocaleDateString()}
                </span>
                <span className="inline-flex items-center gap-1">
                  <Clock3 className="h-3.5 w-3.5" /> {post.readingMinutes} min read
                </span>
              </div>
              <Link
                href={`/blog/${post.slug}`}
                className="text-sm font-medium text-sky-700 hover:text-sky-800 dark:text-sky-300 dark:hover:text-sky-200"
              >
                Read article {"->"}
              </Link>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}

