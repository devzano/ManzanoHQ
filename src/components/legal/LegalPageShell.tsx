// components/legal/LegalPageShell.tsx
import type { ReactNode } from "react";
import LegalCard from "./LegalCard";

type LegalPageShellProps = {
  title: string;
  subtitle?: string;
  children: ReactNode;
  lastUpdated?: string;
};

export default function LegalPageShell({
  title,
  subtitle,
  children,
  lastUpdated,
}: LegalPageShellProps) {
  return (
    <main className="min-h-screen mt-6 px-4 sm:px-6 lg:px-10 py-10 sm:py-14">
      <div className="mx-auto w-full max-w-5xl">
        <LegalCard title={title} subtitle={subtitle} lastUpdated={lastUpdated}>
          {children}
        </LegalCard>
      </div>
    </main>
  );
}