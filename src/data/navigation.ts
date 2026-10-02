import type { NavItem } from "@/types";

/** Liens principaux de la navbar (hors services) */
export const navItems: NavItem[] = [
  { key: "home", href: "/" },
  // services est injecté dynamiquement dans le composant car il a un dropdown
  { key: "portfolio", href: "/portfolio" },
  { key: "blog", href: "/blog" },
  { key: "contact", href: "/contact" },
];

/** Langues supportées */
export const locales = [
  { code: "fr", label: "Français" },
  { code: "en", label: "English" },
  { code: "de", label: "Deutsch" },
  { code: "zh", label: "中文" },
  { code: "es", label: "Español" },
] as const;

/** Thèmes disponibles (aperçu utilisé dans le sélecteur) */
export const themeOptions = [
  {
    value: "light",
    label: "Crème",
    mode: "light" as const,
    preview: "linear-gradient(135deg, #fdf9f3 0%, #e85d2f 100%)",
  },
  {
    value: "light-blue",
    label: "Azur",
    mode: "light" as const,
    preview: "linear-gradient(135deg, #f5faff 0%, #2563eb 100%)",
  },
  {
    value: "light-orange",
    label: "Pêche",
    mode: "light" as const,
    preview: "linear-gradient(135deg, #fff8f0 0%, #f97316 100%)",
  },
  {
    value: "dark",
    label: "Chocolat",
    mode: "dark" as const,
    preview: "linear-gradient(135deg, #1a120b 0%, #f59e0b 100%)",
  },
  {
    value: "dark-blue",
    label: "Nuit",
    mode: "dark" as const,
    preview: "linear-gradient(135deg, #0a1128 0%, #3b82f6 100%)",
  },
  {
    value: "dark-orange",
    label: "Braise",
    mode: "dark" as const,
    preview: "linear-gradient(135deg, #15100a 0%, #f97316 100%)",
  },
];