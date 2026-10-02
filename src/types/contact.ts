/** Type de champ de formulaire */
export type ContactFieldType = "text" | "email" | "tel" | "textarea";

/** Champ du formulaire de contact */
export interface ContactField {
  /** Clé i18n : `contact.form.fields.<key>.label` */
  key: "name" | "email" | "subject" | "message";
  type: ContactFieldType;
  required: boolean;
  /** Nombre de lignes (uniquement pour textarea) */
  rows?: number;
}

/** Type d'information de contact */
export type ContactInfoType = "address" | "phone" | "email";

/** Bloc d'information de contact */
export interface ContactInfoItem {
  /** Clé i18n : `contact.info.items.<key>.*` */
  key: ContactInfoType;
  /** Nom d'icône Lucide */
  icon: string;
  /** Dégradé Tailwind pour la pastille icône */
  accent: string;
  /** Valeurs (plusieurs lignes possibles : 2 tél, 2 emails...) */
  values: ContactValue[];
}

export interface ContactValue {
  /** Texte affiché */
  text: string;
  /** Lien optionnel (tel:, mailto:, maps) */
  href?: string;
}

/** Horaire d'ouverture */
export interface ContactSchedule {
  /** Clé i18n : `contact.schedule.days.<key>` */
  key: string;
  /** Heures (clé i18n : `contact.schedule.hours.<key>`) */
  hoursKey: string;
  /** Fermé ? */
  closed?: boolean;
}

/** Réseau social */
export interface ContactSocial {
  /** Nom (utilisé comme aria-label) */
  name: string;
  /** URL */
  href: string;
  /** Icône Lucide */
  icon: string;
  /** Couleur de hover (classe Tailwind) */
  hoverColor: string;
}

/** Lien de contact complet */
export interface ContactData {
  info: ContactInfoItem[];
  schedule: ContactSchedule[];
  socials: ContactSocial[];
  mapEmbedUrl: string;
}