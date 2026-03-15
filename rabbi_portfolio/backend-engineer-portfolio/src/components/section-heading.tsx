import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
};

export function SectionHeading({ eyebrow, title, description, className }: SectionHeadingProps) {
  return (
    <div className={cn("mb-8 space-y-3", className)}>
      {eyebrow ? <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-700 dark:text-sky-400">{eyebrow}</p> : null}
      <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white md:text-4xl">{title}</h2>
      {description ? <p className="max-w-3xl text-sm text-slate-600 dark:text-slate-400 md:text-base">{description}</p> : null}
    </div>
  );
}

