export default function AuthScreenPage() {
  return (
    <main
      id="main-content"
      className="mx-auto flex min-h-screen w-full max-w-md flex-col justify-center gap-6 px-6 py-12"
    >
      <header className="space-y-2 text-center">
        <h1 className="text-3xl font-semibold">Acceso</h1>
        <p className="text-sm text-[var(--text-secondary)]">
          Pantalla demo para ensayar autenticación y estados del formulario.
        </p>
      </header>

      <div className="space-y-4 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6">
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm text-[var(--text-secondary)]">
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="nombre@empresa.com"
            className="w-full rounded-lg border border-[var(--border)] bg-transparent px-3 py-2 text-sm"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="password" className="text-sm text-[var(--text-secondary)]">
            Contraseña
          </label>
          <input
            id="password"
            type="password"
            placeholder="••••••••"
            className="w-full rounded-lg border border-[var(--border)] bg-transparent px-3 py-2 text-sm"
          />
        </div>

        <button className="w-full rounded-lg bg-[var(--brand)] px-4 py-2 text-sm font-medium text-[var(--brand-contrast)]">
          Continuar
        </button>
      </div>
    </main>
  );
}
