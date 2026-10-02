import type { StaticImageData } from "next/image";

/** Source d'image : chemin public OU image importée */
export type ImageSource = string | StaticImageData;

/** Lien interne typé */
export interface NavLink {
  label: string;
  href: string;
  external?: boolean;
}

/** Identifiant de thème supporté */
export type ThemeId =
  | "light"
  | "light-blue"
  | "light-orange"
  | "dark"
  | "dark-blue"
  | "dark-orange";

/** Locale supportée */
export type Locale = "fr" | "en" | "de" | "zh" | "es";