"use client";

import { useEffect, useMemo, useState } from "react";
import { ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";
import { projects } from "@/lib/site-data";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/section-heading";

type SyncedRepo = {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  stargazers_count: number;
  language: string | null;
  pushed_at: string;
  homepage: string | null;
};

// GitHub sync is enabled by default; set env var to "false" only if you want to disable it.
const enableGithubProjectSync = process.env.NEXT_PUBLIC_ENABLE_GITHUB_PROJECT_SYNC !== "false";

export function ProjectShowcase() {
  const [activeStack, setActiveStack] = useState("All");
  const [syncedProjects, setSyncedProjects] = useState(projects);

  useEffect(() => {
    if (!enableGithubProjectSync) return;

    let active = true;

    async function loadSyncedProjects() {
      try {
        const response = await fetch("/api/github");
        const data = (await response.json()) as { repos?: SyncedRepo[] };
        const repos = data.repos ?? [];

        const existingGithubUrls = new Set(projects.map((project) => project.githubUrl.toLowerCase()));

        const autoProjects = repos
          .filter((repo) => !existingGithubUrls.has(repo.html_url.toLowerCase()))
          .slice(0, 4)
          .map((repo) => ({
            slug: `github-${repo.id}`,
            title: repo.name,
            subtitle: "Auto-synced from GitHub",
            description: repo.description ?? "Repository imported automatically from GitHub activity.",
            features: [
              `GitHub stars: ${repo.stargazers_count}`,
              `Last pushed: ${new Date(repo.pushed_at).toLocaleDateString()}`,
              "Synced automatically from GitHub API",
            ],
            architecture: ["GitHub", repo.language ?? "Codebase", "Production Engineering"],
            stack: repo.language ? [repo.language, "GitHub"] : ["GitHub"],
            githubUrl: repo.html_url,
            liveUrl: repo.homepage || undefined,
          }));

        if (!active) return;
        setSyncedProjects([...projects, ...autoProjects]);
      } catch {
        if (!active) return;
        setSyncedProjects(projects);
      }
    }

    void loadSyncedProjects();
    return () => {
      active = false;
    };
  }, []);

  const allProjects = useMemo(() => (enableGithubProjectSync ? syncedProjects : projects), [syncedProjects]);

  const stacks = useMemo(
    () => ["All", ...Array.from(new Set(allProjects.flatMap((project) => project.stack)))],
    [allProjects],
  );

  const filtered = useMemo(() => {
    if (activeStack === "All") return allProjects;
    return allProjects.filter((project) => project.stack.includes(activeStack));
  }, [activeStack, allProjects]);

  return (
    <section id="projects" className="mx-auto w-full max-w-7xl px-4 py-14 md:px-8">
      <SectionHeading
        eyebrow="Featured Projects"
        title="Large-scale backend project showcase"
        description="Detailed cards with architecture intent, stack filters, source links, and deploy links."
      />

      <div className="mb-6 flex flex-wrap gap-2">
        {stacks.map((stack) => (
          <Button
            key={stack}
            type="button"
            variant={activeStack === stack ? "default" : "outline"}
            size="sm"
            onClick={() => setActiveStack(stack)}
          >
            {stack}
          </Button>
        ))}
      </div>

      <div className="grid gap-5 lg:grid-cols-2">
        {filtered.map((project, idx) => (
          <motion.div
            key={project.slug}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.06 }}
          >
            <Card className="h-full p-0">
              <div className="border-b border-slate-300/70 dark:border-white/10 p-6">
                <p className="text-xs uppercase tracking-[0.16em] text-sky-700 dark:text-sky-300">{project.subtitle}</p>
                <h3 className="mt-2 text-2xl font-semibold text-slate-900 dark:text-white">{project.title}</h3>
                <p className="mt-3 text-sm text-slate-700 dark:text-slate-300">{project.description}</p>
              </div>

              <div className="space-y-5 p-6">
                <div>
                  <h4 className="mb-2 text-sm font-semibold text-slate-900 dark:text-slate-100">Key features</h4>
                  <ul className="space-y-1.5 text-sm text-slate-700 dark:text-slate-300">
                    {project.features.map((feature) => (
                      <li key={feature} className="flex gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-xl border border-slate-300/70 dark:border-white/10 bg-slate-100/90 dark:bg-slate-900/40 p-4">
                  <h4 className="mb-2 text-sm font-semibold text-slate-900 dark:text-slate-100">Architecture diagram</h4>
                  <div className="flex flex-wrap items-center gap-2 text-xs text-slate-700 dark:text-slate-300">
                    {project.architecture.map((item, i) => (
                      <div key={item} className="inline-flex items-center gap-2">
                        <span className="rounded-md border border-slate-300/70 bg-slate-200 px-2 py-1 text-slate-800 dark:border-white/10 dark:bg-slate-950/50 dark:text-slate-100">{item}</span>
                        {i < project.architecture.length - 1 ? <span className="text-slate-500">{"->"}</span> : null}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <Badge key={item}>{item}</Badge>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3">
                  <Button asChild>
                    <a href={project.githubUrl} target="_blank" rel="noreferrer">
                      <Github className="mr-2 h-4 w-4" /> GitHub
                    </a>
                  </Button>
                  {project.liveUrl ? (
                    <Button asChild variant="outline">
                      <a href={project.liveUrl} target="_blank" rel="noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                      </a>
                    </Button>
                  ) : (
                    <Badge className="bg-slate-700/40 text-slate-700 dark:text-slate-300">Private deployment</Badge>
                  )}
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

