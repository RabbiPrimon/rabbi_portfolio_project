import { profile } from "@/lib/site-data";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/section-heading";

const strengths = [
  "Relational database design",
  "Authentication systems",
  "Redis caching strategies",
  "Celery background processing",
  "Docker deployments",
  "Scalable backend architecture",
];

export function AboutSection() {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-14 md:px-8">
      <SectionHeading eyebrow="About" title="Backend engineer focused on resilient systems" description={profile.headline} />
      <div className="grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
        <Card>
          <p className="text-base text-slate-700 dark:text-slate-300">{profile.summary}</p>
          <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">
            I design backend systems that prioritize throughput, correctness, observability, and maintainability.
            My focus is production reliability from API contracts to queue processing and database integrity.
          </p>
        </Card>
        <Card>
          <h3 className="mb-3 text-lg font-semibold text-slate-900 dark:text-white">Core strengths</h3>
          <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
            {strengths.map((item) => (
              <li key={item} className="flex gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-400" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </Card>
      </div>
    </section>
  );
}

