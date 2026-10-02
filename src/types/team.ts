import type { ImageSource } from "./common";

/** Clés de membre (i18n) */
export type TeamMemberKey = "ceo" | "designer" | "trainer" | "support";

export interface TeamMember {
  key: TeamMemberKey;
  image: ImageSource;
  /** Liens sociaux optionnels */
  social?: {
    linkedin?: string;
    twitter?: string;
  };
}