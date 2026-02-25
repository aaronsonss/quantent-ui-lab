import Link from "next/link";

export default function HomePage() {
  return (
    <main
      id="main-content"
      className="mx-auto flex min-h-screen w-full max-w-5xl flex-col gap-6 px-6 py-16"
    >
      <h1 className="text-4xl font-semibold tracking-tight">QuantEnt UI Lab</h1>
      <p className="max-w-2xl text-base text-[var(--text-secondary)]">
        Base profesional para prototipar interfaces con Next.js App Router,
        TypeScript y Tailwind v4 en modo oscuro.
      </p>
      <nav className="mt-2 flex flex-col gap-3 sm:flex-row sm:items-center">
        <Link
          href="/playground"
          className="rounded-lg border border-[var(--border)] bg-[var(--surface)] px-4 py-2 text-sm hover:border-[var(--brand)]"
        >
          Ir a Playground
        </Link>
        <Link
          href="/dashboard"
          className="rounded-lg border border-[var(--border)] bg-[var(--surface)] px-4 py-2 text-sm hover:border-[var(--brand)]"
        >
          Ver Dashboard Demo
        </Link>
        <Link
          href="/auth"
          className="rounded-lg border border-[var(--border)] bg-[var(--surface)] px-4 py-2 text-sm hover:border-[var(--brand)]"
        >
          Ver Auth Demo
        </Link>
      </nav>
    </main>
  );
}
