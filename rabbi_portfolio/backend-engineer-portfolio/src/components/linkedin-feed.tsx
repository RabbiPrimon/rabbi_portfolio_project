"use client";

import { useEffect, useState } from "react";
import { ExternalLink, Linkedin } from "lucide-react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/section-heading";

type LinkedinPost = {
  id: string;
  title: string;
  url: string;
  publishedAt: string;
  excerpt?: string;
};

export function LinkedinFeed() {
  const [posts, setPosts] = useState<LinkedinPost[]>([]);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (process.env.NEXT_PUBLIC_ENABLE_LINKEDIN_FEED !== "true") return;

    let active = true;

    async function load() {
      try {
        const response = await fetch("/api/linkedin");
        const data = (await response.json()) as { posts?: LinkedinPost[]; enabled?: boolean };

        if (!active) return;
        setEnabled(Boolean(data.enabled));
        setPosts(data.posts ?? []);
      } catch {
        if (!active) return;
        setEnabled(false);
      }
    }

    void load();
    return () => {
      active = false;
    };
  }, []);

  if (!enabled || posts.length === 0) return null;

  return (
    <section id="linkedin" className="mx-auto w-full max-w-7xl px-4 py-14 md:px-8">
      <SectionHeading
        eyebrow="LinkedIn Feed"
        title="Latest LinkedIn posts"
        description="Auto-synced from your configured LinkedIn feed endpoint."
      />

      <div className="grid gap-4 md:grid-cols-2">
        {posts.map((post, idx) => (
          <motion.div
            key={post.id}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: idx * 0.05 }}
          >
            <Card className="h-full space-y-3">
              <div className="inline-flex items-center gap-2 text-xs text-slate-600 dark:text-slate-400">
                <Linkedin className="h-3.5 w-3.5 text-sky-600 dark:text-sky-400" />
                {new Date(post.publishedAt).toLocaleDateString()}
              </div>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{post.title}</h3>
              {post.excerpt ? <p className="text-sm text-slate-700 dark:text-slate-300">{post.excerpt}</p> : null}
              <a
                href={post.url}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-sky-700 hover:text-sky-800 dark:text-sky-300 dark:hover:text-sky-200"
              >
                Open on LinkedIn <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
