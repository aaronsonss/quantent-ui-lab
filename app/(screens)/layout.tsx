export default function ScreensLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <div className="min-h-screen bg-[var(--bg)] text-[var(--text-primary)]">{children}</div>;
}
