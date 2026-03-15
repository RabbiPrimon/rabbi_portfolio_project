"use client";

import { motion } from "framer-motion";
import { experiences } from "@/lib/site-data";
import { SectionHeading } from "@/components/section-heading";
import { Card } from "@/components/ui/card";

export function ExperienceTimeline() {
  return (
    <section id="experience" className="mx-auto w-full max-w-7xl px-4 py-14 md:px-8">
      <SectionHeading
        eyebrow="Experience Timeline"
        title="Professional backend engineering journey"
        description="A vertical timeline focused on backend delivery, systems reliability, and architecture ownership."
      />

      <div className="relative ml-2 space-y-6 border-l border-slate-300/70 dark:border-white/10 pl-6">
        {experiences.map((exp, index) => (
          <motion.div
            key={exp.role + exp.company}
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4, delay: index * 0.08 }}
            className="relative"
          >
            <span className="absolute -left-[34px] top-6 h-3 w-3 rounded-full bg-sky-400 shadow-[0_0_12px_rgba(56,189,248,0.7)]" />
            <Card>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{exp.role}</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">{exp.company}</p>
              <p className="mb-4 text-xs uppercase tracking-[0.16em] text-sky-700 dark:text-sky-300">{exp.period}</p>
              <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
                {exp.responsibilities.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-400" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

