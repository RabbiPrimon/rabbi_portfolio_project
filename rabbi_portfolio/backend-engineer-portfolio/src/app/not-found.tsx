export default function NotFound() {
  return (
    <main className="mx-auto grid min-h-[60vh] w-full max-w-4xl place-items-center px-4 py-16 text-center">
      <div>
        <p className="text-xs uppercase tracking-[0.18em] text-sky-700 dark:text-sky-400">404</p>
        <h1 className="mt-3 text-4xl font-semibold text-slate-900 dark:text-white">Page not found</h1>
        <p className="mt-3 text-slate-600 dark:text-slate-400">The requested page does not exist.</p>
      </div>
    </main>
  );
}

