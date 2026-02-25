import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "QuantEnt UI Lab",
  description: "Laboratorio para prototipar UI en Next.js + Tailwind v4",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="bg-[var(--bg)] text-[var(--text-primary)]">
        <a href="#main-content" className="skip-link">
          Saltar al contenido principal
        </a>
        {children}
      </body>
    </html>
  );
}
