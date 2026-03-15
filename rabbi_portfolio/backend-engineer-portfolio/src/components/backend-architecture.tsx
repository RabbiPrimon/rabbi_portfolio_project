"use client";

import { motion } from "framer-motion";
import { backendArchitectureFlows } from "@/lib/site-data";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/section-heading";

export function BackendArchitectureShowcase() {
  return (
    <section id="architecture" className="mx-auto w-full max-w-7xl px-4 py-14 md:px-8">
      <SectionHeading
        eyebrow="System Design Showcase"
        title="Backend Architecture"
        description="Interactive architecture paths for API orchestration, caching layers, async jobs, and relational data strategy."
      />

      <div className="grid gap-5 md:grid-cols-2">
        {backendArchitectureFlows.map((flow, idx) => (
          <motion.div
            key={flow.title}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.06 }}
          >
            <Card className="h-full">
              <h3 className="mb-2 text-xl font-semibold text-slate-900 dark:text-white">{flow.title}</h3>
              <p className="mb-4 text-sm text-slate-600 dark:text-slate-400">{flow.description}</p>

              <div className="rounded-xl border border-slate-300/70 dark:border-white/10 bg-slate-100/90 dark:bg-slate-950/40 p-3">
                <div className="flex flex-wrap items-center gap-2">
                  {flow.nodes.map((node, nodeIndex) => (
                    <div key={node} className="inline-flex items-center gap-2">
                      <motion.span
                        whileHover={{ scale: 1.04 }}
                        className="rounded-lg border border-sky-300 bg-sky-100 px-3 py-1 text-xs text-sky-800 dark:border-sky-500/20 dark:bg-sky-500/10 dark:text-sky-200"
                      >
                        {node}
                      </motion.span>
                      {nodeIndex < flow.nodes.length - 1 ? <span className="text-slate-500">{"->"}</span> : null}
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

