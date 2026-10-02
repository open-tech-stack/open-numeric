import type { ImageSource } from "./common";

export interface Client {
  /** Nom affiché + alt */
  name: string;
  /** Logo */
  logo: ImageSource;
  /** URL du site du client */
  url?: string;
}