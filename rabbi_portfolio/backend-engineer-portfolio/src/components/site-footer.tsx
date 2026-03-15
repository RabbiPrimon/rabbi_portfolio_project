import Link from "next/link";
import { profile } from "@/lib/site-data";

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-300/70 dark:border-white/10 py-8">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-3 px-4 text-sm text-slate-600 dark:text-slate-400 md:flex-row md:items-center md:justify-between md:px-8">
        <p>
          Copyright {new Date().getFullYear()} {profile.name}. Built for global backend engineering opportunities.
        </p>
        <div className="flex items-center gap-4">
          <Link href={profile.github} target="_blank" className="hover:text-slate-900 dark:hover:text-white">
            GitHub
          </Link>
          <Link href={profile.linkedin} target="_blank" className="hover:text-slate-900 dark:hover:text-white">
            LinkedIn
          </Link>
          <a href="/blog" className="hover:text-slate-900 dark:hover:text-white">
            Blog
          </a>
        </div>
      </div>
    </footer>
  );
}

