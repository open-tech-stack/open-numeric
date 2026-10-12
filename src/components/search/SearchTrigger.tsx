"use client";

import { useEffect, useState } from "react";
import { Search } from "lucide-react";
import { useTranslations } from "next-intl";
import { SearchOverlay } from ".";

export default function SearchTrigger() {
  const t = useTranslations("search");
  const [open, setOpen] = useState(false);

  /* Raccourci clavier ⌘K / Ctrl+K */
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((v) => !v);
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      {/* Bouton unique : icône seule (desktop + mobile) */}
      <button
        onClick={() => setOpen(true)}
        aria-label={t("trigger")}
        title={`${t("trigger")} (⌘K)`}
        className="flex items-center justify-center h-10 w-10 rounded-lg text-foreground-muted hover:text-foreground hover:bg-surface-hover transition-colors"
      >
        <Search className="h-5 w-5" />
      </button>

      {/* Overlay */}
      <SearchOverlay open={open} onClose={() => setOpen(false)} />
    </>
  );
}