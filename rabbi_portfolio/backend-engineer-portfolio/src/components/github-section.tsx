import { Star, Clock3, Github } from "lucide-react";
import { getLatestRepos } from "@/lib/github";
import { profile } from "@/lib/site-data";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/section-heading";

export async function GithubSection() {
  const repos = await getLatestRepos("RabbiPrimon", 6);

  return (
    <section id="opensource" className="mx-auto w-full max-w-7xl px-4 py-14 md:px-8">
      <SectionHeading
        eyebrow="Open Source / GitHub"
        title="Latest repositories"
        description="Auto-synced from GitHub API with repository metadata and activity timestamps."
      />

      <div className="mb-4 inline-flex items-center gap-2 rounded-lg border border-slate-300/70 dark:border-white/10 bg-white/80 dark:bg-white/5 px-3 py-2 text-xs text-slate-700 dark:text-slate-300">
        <Github className="h-3.5 w-3.5 text-sky-600 dark:text-sky-400" /> Source:{" "}
        <a href={profile.github} target="_blank" rel="noreferrer" className="text-sky-700 hover:text-sky-800 dark:text-sky-300 dark:hover:text-sky-200">
          {profile.github}
        </a>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {repos.map((repo) => (
          <Card key={repo.id} className="space-y-3">
            <h3 className="text-base font-semibold text-slate-900 dark:text-white">{repo.name}</h3>
            <p className="line-clamp-3 text-sm text-slate-600 dark:text-slate-400">{repo.description ?? "No description provided."}</p>
            <div className="flex flex-wrap items-center gap-3 text-xs text-slate-600 dark:text-slate-400">
              <span className="inline-flex items-center gap-1">
                <Star className="h-3.5 w-3.5 text-yellow-300" /> {repo.stargazers_count}
              </span>
              <span>{repo.language ?? "Unknown"}</span>
              <span className="inline-flex items-center gap-1">
                <Clock3 className="h-3.5 w-3.5" /> {new Date(repo.pushed_at).toLocaleDateString()}
              </span>
            </div>
            <a
              href={repo.html_url}
              target="_blank"
              rel="noreferrer"
              className="inline-flex text-sm font-medium text-sky-700 hover:text-sky-800 dark:text-sky-300 dark:hover:text-sky-200"
            >
              Open Repository {"->"}
            </a>
          </Card>
        ))}
      </div>
    </section>
  );
}

