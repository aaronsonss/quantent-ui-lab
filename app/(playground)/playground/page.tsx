export default function PlaygroundPage() {
  return (
    <main
      id="main-content"
      className="mx-auto flex min-h-screen w-full max-w-6xl flex-col gap-8 px-6 py-14"
    >
      <header className="space-y-3">
        <h1 className="text-4xl font-semibold">Playground</h1>
        <p className="max-w-3xl text-base text-[var(--text-secondary)]">
          Sandbox para experimentar tipografía, espaciado, jerarquías y bloques de
          interfaz usando solamente utilidades Tailwind.
        </p>
      </header>

      <section className="grid gap-4 md:grid-cols-2">
        <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6">
          <h2 className="text-2xl font-semibold">Bloque A</h2>
          <p className="mt-3 text-sm text-[var(--text-secondary)]">
            Placeholder para estados, tarjetas, formularios y composición de
            componentes.
          </p>
          <div className="mt-5 h-24 rounded-xl border border-dashed border-[var(--border)] bg-[color:rgba(var(--brand-rgb),0.08)]" />
        </div>

        <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6">
          <h3 className="text-xl font-semibold">Bloque B</h3>
          <p className="mt-3 text-sm text-[var(--text-secondary)]">
            Otra caja para probar variantes visuales, densidad y ritmo vertical.
          </p>
          <div className="mt-5 h-24 rounded-xl border border-dashed border-[var(--border)] bg-[color:rgba(var(--brand-rgb),0.12)]" />
        </div>
      </section>
    </main>
  );
}
