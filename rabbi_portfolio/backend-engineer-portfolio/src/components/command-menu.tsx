"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Command } from "cmdk";
import { Search } from "lucide-react";
import { navLinks } from "@/lib/site-data";

export function CommandMenu() {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const down = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setOpen((prev) => !prev);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="inline-flex items-center gap-2 rounded-xl border border-slate-300/70 dark:border-white/10 bg-white/80 dark:bg-white/5 px-3 py-2 text-xs text-slate-700 dark:text-slate-300"
      >
        <Search className="h-3.5 w-3.5" />
        Command Palette
        <kbd className="rounded border border-slate-300/70 dark:border-white/10 px-1 text-[10px]">Ctrl+K</kbd>
      </button>

      {open ? (
        <div className="fixed inset-0 z-[120] grid place-items-start bg-white/75 p-6 pt-24 dark:bg-slate-950/70" onClick={() => setOpen(false)}>
          <Command
            className="w-full max-w-xl rounded-2xl border border-slate-300/70 dark:border-white/10 bg-white/95 dark:bg-slate-900/95 p-3 text-slate-900 dark:text-slate-100 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Command.Input
              autoFocus
              placeholder="Jump to section or page..."
              className="mb-3 w-full rounded-xl border border-slate-300/70 dark:border-white/10 bg-slate-50/95 dark:bg-slate-950/60 px-3 py-2 text-sm outline-none"
            />
            <Command.List className="max-h-72 overflow-auto">
              <Command.Empty>No results found.</Command.Empty>
              <Command.Group heading="Sections" className="text-xs text-slate-600 dark:text-slate-400">
                {navLinks.map((item) => (
                  <Command.Item
                    key={item.href}
                    onSelect={() => {
                      router.push(item.href);
                      setOpen(false);
                    }}
                    className="cursor-pointer rounded-lg px-3 py-2 text-sm data-[selected=true]:bg-slate-200 dark:data-[selected=true]:bg-slate-800"
                  >
                    {item.name}
                  </Command.Item>
                ))}
              </Command.Group>
              <Command.Group heading="Pages" className="text-xs text-slate-600 dark:text-slate-400">
                {[
                  { name: "Projects Page", href: "/projects" },
                  { name: "Blog Page", href: "/blog" },
                  { name: "Experience Page", href: "/experience" },
                  { name: "Skills Page", href: "/skills" },
                ].map((item) => (
                  <Command.Item
                    key={item.href}
                    onSelect={() => {
                      router.push(item.href);
                      setOpen(false);
                    }}
                    className="cursor-pointer rounded-lg px-3 py-2 text-sm data-[selected=true]:bg-slate-200 dark:data-[selected=true]:bg-slate-800"
                  >
                    {item.name}
                  </Command.Item>
                ))}
              </Command.Group>
            </Command.List>
          </Command>
        </div>
      ) : null}
    </>
  );
}

