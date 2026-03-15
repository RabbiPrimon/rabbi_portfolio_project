import { cn } from "@/lib/utils";

export function Badge({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-sky-300 bg-sky-100 px-2.5 py-1 text-xs font-medium text-sky-800 dark:border-sky-500/30 dark:bg-sky-500/10 dark:text-sky-200",
        className,
      )}
      {...props}
    />
  );
}

