import type { MDXComponents } from "mdx/types";

export const mdxComponents: MDXComponents = {
  h1: (props) => <h1 className="mb-4 mt-8 text-3xl font-semibold text-slate-900 dark:text-white" {...props} />,
  h2: (props) => <h2 className="mb-3 mt-8 text-2xl font-semibold text-slate-900 dark:text-white" {...props} />,
  h3: (props) => <h3 className="mb-2 mt-6 text-xl font-semibold text-slate-900 dark:text-white" {...props} />,
  p: (props) => <p className="mb-4 text-slate-700 dark:text-slate-300" {...props} />,
  ul: (props) => <ul className="mb-4 list-disc space-y-2 pl-6 text-slate-700 dark:text-slate-300" {...props} />,
  ol: (props) => <ol className="mb-4 list-decimal space-y-2 pl-6 text-slate-700 dark:text-slate-300" {...props} />,
  code: (props) => <code className="rounded bg-slate-200 px-1 py-0.5 text-sky-800 dark:bg-slate-800 dark:text-sky-200" {...props} />,
  pre: (props) => (
    <pre className="mb-4 overflow-x-auto rounded-xl border border-slate-300/70 bg-slate-100 p-4 text-slate-800 dark:border-white/10 dark:bg-slate-950/80 dark:text-slate-100" {...props} />
  ),
  a: (props) => <a className="text-sky-700 hover:text-sky-800 dark:text-sky-300 dark:hover:text-sky-200" {...props} />,
  blockquote: (props) => <blockquote className="mb-4 border-l-2 border-sky-500/50 pl-4 text-slate-700 dark:text-slate-300" {...props} />,
};

