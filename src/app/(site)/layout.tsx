// src/app/(site)/layout.tsx
import TopNav from "@/components/ui/TopNav";
import type { ReactNode } from "react";

export default function SiteLayout({ children }: { children: ReactNode; }) {
  return (
    <div className="min-h-dvh flex flex-col">
      <TopNav />
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}