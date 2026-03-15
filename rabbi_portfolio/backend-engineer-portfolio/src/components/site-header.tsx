"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import { useState } from "react";
import { navLinks, profile } from "@/lib/site-data";
import { ThemeToggle } from "@/components/theme-toggle";
import { CommandMenu } from "@/components/command-menu";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-300/70 dark:border-white/10 bg-white/75 dark:bg-slate-950/70 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-4 py-3 md:px-8">
        <Link href="/" className="text-sm font-semibold tracking-wide text-slate-900 dark:text-slate-100">
          {profile.name} <span className="text-sky-700 dark:text-sky-400">.backend</span>
        </Link>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((prev) => !prev)}
          className="inline-flex rounded-xl border border-slate-300/70 dark:border-white/10 p-2 md:hidden"
        >
          <Menu className="h-4 w-4" />
        </button>

        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-lg px-3 py-2 text-sm text-slate-700 transition hover:bg-slate-200/70 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-white/5 dark:hover:text-white"
            >
              {item.name}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <CommandMenu />
          <ThemeToggle />
        </div>
      </div>

      {open ? (
        <div className="border-t border-slate-300/70 dark:border-white/10 px-4 py-3 md:hidden">
          <nav className="grid gap-1">
            {navLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2 text-sm text-slate-700 hover:bg-slate-200/70 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-white/5 dark:hover:text-white"
              >
                {item.name}
              </a>
            ))}
          </nav>
          <div className="mt-3 flex items-center gap-2">
            <CommandMenu />
            <ThemeToggle />
          </div>
        </div>
      ) : null}
    </header>
  );
}

