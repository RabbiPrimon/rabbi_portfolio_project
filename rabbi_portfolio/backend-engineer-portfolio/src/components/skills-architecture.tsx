"use client";

import {
  BrainCircuit,
  Cloud,
  Container,
  Cpu,
  Database,
  FileCode,
  FileCode2,
  Flame,
  GitBranch,
  Github,
  HardDrive,
  LayoutGrid,
  Paintbrush,
  PanelTop,
  ServerCog,
  Webhook,
  Workflow,
} from "lucide-react";
import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import { skillGroups } from "@/lib/site-data";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { SectionHeading } from "@/components/section-heading";

const iconMap: Record<string, LucideIcon> = {
  BrainCircuit,
  Cpu,
  FileCode2,
  ServerCog,
  Webhook,
  Workflow,
  Database,
  HardDrive,
  Flame,
  Container,
  GitBranch,
  Github,
  Cloud,
  PanelTop,
  FileCode,
  Paintbrush,
  LayoutGrid,
};

export function SkillsArchitecture() {
  return (
    <section id="skills" className="mx-auto w-full max-w-7xl px-4 py-14 md:px-8">
      <SectionHeading
        eyebrow="Skills Architecture"
        title="Interactive backend skill map"
        description="Grouped by engineering concern: programming, framework architecture, database design, caching, deployment, and frontend interoperability."
      />

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {skillGroups.map((group, groupIndex) => (
          <motion.div
            key={group.title}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.35, delay: groupIndex * 0.05 }}
          >
            <Card className="h-full">
              <CardTitle className="text-lg text-slate-900 dark:text-white">{group.title}</CardTitle>
              <CardDescription className="mb-4">Hover each skill to inspect proficiency and architecture confidence.</CardDescription>

              <div className="space-y-4">
                {group.items.map((skill) => {
                  const Icon = iconMap[skill.icon] ?? BrainCircuit;

                  return (
                    <motion.div
                      key={skill.name}
                      whileHover={{ y: -2 }}
                      className="rounded-xl border border-slate-300/70 dark:border-white/10 bg-slate-100/90 dark:bg-slate-900/40 p-3"
                    >
                      <div className="mb-2 flex items-center justify-between gap-3">
                        <div className="inline-flex items-center gap-2 text-sm font-medium text-slate-900 dark:text-slate-100">
                          <Icon className="h-4 w-4 text-sky-600 dark:text-sky-400" />
                          {skill.name}
                        </div>
                        <span className="text-xs text-slate-600 dark:text-slate-400">{skill.proficiency}%</span>
                      </div>
                      <div className="h-2 w-full rounded-full bg-slate-800">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.proficiency}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.6 }}
                          className="h-2 rounded-full bg-gradient-to-r from-sky-400 to-blue-500"
                        />
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

