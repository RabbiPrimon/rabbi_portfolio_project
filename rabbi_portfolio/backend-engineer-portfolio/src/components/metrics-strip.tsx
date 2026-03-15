import { featuredMetrics } from "@/lib/site-data";

export function MetricsStrip() {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 pb-8 md:px-8">
      <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
        {featuredMetrics.map((metric) => (
          <div key={metric.label} className="rounded-2xl border border-slate-300/70 dark:border-white/10 bg-white/80 dark:bg-white/5 p-4 backdrop-blur-xl">
            <p className="text-xs uppercase tracking-[0.16em] text-slate-600 dark:text-slate-400">{metric.label}</p>
            <p className="mt-2 text-xl font-semibold text-slate-900 dark:text-white">{metric.value}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

