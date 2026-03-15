import * as React from "react";
import { cn } from "@/lib/utils";

const Input = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
  ({ className, ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={cn(
          "flex h-11 w-full rounded-xl border border-slate-300 bg-white/90 px-3 py-2 text-sm text-slate-900 placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 dark:border-white/15 dark:bg-slate-950/40 dark:text-slate-100 dark:placeholder:text-slate-500",
          className,
        )}
        {...props}
      />
    );
  },
);
Input.displayName = "Input";

export { Input };

