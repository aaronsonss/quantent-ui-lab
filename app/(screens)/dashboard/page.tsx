export default function DashboardScreenPage() {
  return (
    <main
      id="main-content"
      className="mx-auto flex min-h-screen w-full max-w-6xl flex-col gap-6 px-6 py-10"
    >
      <header className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-semibold">Dashboard</h1>
          <p className="text-sm text-[var(--text-secondary)]">
            Pantalla demo para composición de módulos y visualización de datos.
          </p>
        </div>
        <button className="rounded-lg bg-[var(--brand)] px-4 py-2 text-sm font-medium text-[var(--brand-contrast)]">
          Acción primaria
        </button>
      </header>

      <section className="grid gap-4 md:grid-cols-3">
        {[
          "Resumen",
          "Actividad",
          "Notificaciones",
          "Métricas",
          "Tareas",
          "Eventos",
        ].map((item) => (
          <article
            key={item}
            className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-4"
          >
            <h2 className="text-lg font-semibold">{item}</h2>
            <p className="mt-2 text-sm text-[var(--text-secondary)]">
              Placeholder de contenido para prototipado rápido.
            </p>
          </article>
        ))}
      </section>
    </main>
  );
}
