import type { ImageSource } from "./common";

/** Slugs des 5 services détaillés */
export type ServiceDetailSlug =
  | "developpement"
  | "design"
  | "formation"
  | "maintenance"
  | "vente";

/* =========================================================
   Blocs de contenu réutilisables
   ========================================================= */

/** Groupe d'items (technologies, outils, catégories...) */
export interface DetailGroup {
  /** Clé i18n (ex: "frontend", "branding", "tools") */
  key: string;
  /** Nom d'icône Lucide (optionnel, pour les groupes illustrés) */
  icon?: string;
  /** Dégradé Tailwind du groupe */
  accent: string;
  /** Items du groupe */
  items: DetailItem[];
}

/** Item générique d'un groupe */
export interface DetailItem {
  /** Nom technique affiché (jamais traduit, ex: "React / Next.js") */
  name?: string;
  /** Clé i18n pour le nom traduit (utilisé si `name` absent) */
  nameKey?: string;
  /** Clé i18n (utilisé comme fallback du name si name et nameKey absents) */
  key?: string;
  image?: ImageSource;
  icon?: string;
  /** Clé i18n pour la description */
  descriptionKey?: string;
}

/* =========================================================
   Services offerts (cartes principales)
   ========================================================= */
export interface ServiceOffering {
  /** Clé i18n */
  key: string;
  /** Nom d'icône Lucide */
  icon: string;
  /** Dégradé Tailwind */
  accent: string;
  /** Nombre de features (pour itérer côté i18n) */
  featureCount: number;
}

/* =========================================================
   Étapes du processus
   ========================================================= */
export interface DetailProcessStep {
  /** Clé i18n */
  key: string;
  /** Nom d'icône Lucide */
  icon: string;
  /** Couleur de l'icône (classe Tailwind, ex: "text-blue-500") */
  iconColor?: string;
}

/* =========================================================
   Service détaillé complet
   ========================================================= */
export interface ServiceDetail {
  slug: ServiceDetailSlug;
  /** Dégradé principal du service */
  accent: string;
  /** Image du hero */
  heroImage: ImageSource;

  /**
   * Configuration de la section "Expertises / Technologies"
   * - `mode: "grid"` → grille classique de cartes
   * - `mode: "tabs"` → tabs de catégories + grille
   * - `mode: "gallery"` → galerie sans tabs (tout affiché)
   */
  expertise: {
    mode: "grid" | "tabs" | "gallery";
    groups: DetailGroup[];
  };

  /** Services offerts */
  offerings: ServiceOffering[];

  /** Étapes du processus */
  processSteps: DetailProcessStep[];
}