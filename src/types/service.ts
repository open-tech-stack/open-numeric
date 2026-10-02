import type { ImageSource } from "./common";

/* =========================================================
   Service simple (navbar / home)
   ========================================================= */
export type ServiceKey =
  | "development"
  | "design"
  | "training"
  | "maintenance"
  | "shop";

export interface Service {
  key: ServiceKey;
  href: string;
  icon: "Code2" | "PenTool" | "GraduationCap" | "Wrench" | "ShoppingBag";
  accent: string;
  image?: ImageSource;
  features?: string[];
}

/* =========================================================
   Catégories enrichies (page /services)
   ========================================================= */

/** Catégories affichées dans les tabs de la page services */
export type ServiceCategoryId =
  | "development"
  | "training"
  | "maintenance"
  | "sales"
  | "design";

/** Icônes utilisables dans les sous-services */
export type SubServiceIcon =
  | "Code2"
  | "PenTool"
  | "GraduationCap"
  | "Wrench"
  | "ShoppingBag"
  | "Globe"
  | "Smartphone"
  | "Server"
  | "Network"
  | "Lightbulb"
  | "BookOpen"
  | "ShieldCheck"
  | "MonitorSmartphone"
  | "Printer"
  | "Palette";

export interface SubService {
  /** Clé i18n : `servicesPage.categories.<categoryId>.items.<key>.*` */
  key: string;
  /** Nom d'icône Lucide (mappé dans Icon.tsx) */
  icon: SubServiceIcon;
}

export interface ServiceCategory {
  /** Identifiant unique, utilisé dans les tabs */
  id: ServiceCategoryId;
  /** Icône Lucide de l'onglet */
  icon: SubServiceIcon;
  /** Dégradé Tailwind de la catégorie */
  accent: string;
  /** Sous-services */
  items: SubService[];
}

/* =========================================================
   Étapes du processus
   ========================================================= */
export interface ProcessStep {
  /** Clé i18n : `servicesPage.process.steps.<key>.*` */
  key: string;
  /** Numéro affiché (1, 2, 3, 4) */
  step: number;
  /** Dégradé Tailwind */
  accent: string;
  /** Icône Lucide */
  icon: SubServiceIcon;
}