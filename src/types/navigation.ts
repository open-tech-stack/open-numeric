import type { NavLink } from "./common";

export interface NavItem {
  /** Clé i18n dans `nav.*` */
  key: "home" | "services" | "portfolio" | "blog" | "contact";
  href: string;
  /** Sous-menu éventuel */
  children?: NavLink[];
}

export interface LocaleOption {
  code: string;
  label: string;
}

export interface ThemeOption {
  value: string;
  label: string;
  mode: "light" | "dark";
  preview: string;
}