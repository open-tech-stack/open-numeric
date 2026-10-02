/**
 * Couche d'accès aux données.
 *
 * Aujourd'hui : lecture directe depuis src/data/*.
 * Demain (API) : remplace chaque fonction par un fetch() vers ton backend.
 *
 * Les composants n'importent QUE ce fichier, jamais src/data/*.
 */

import {
  site,
  navItems,
  locales,
  themeOptions,
  navServices,
  homeServices,
  teamMembers,
  clients,
  testimonials,
  servicesHeroImage,
  serviceDetails,
  contactData,
  contactFields,
} from "@/data";

import { heroStats, heroImage } from "@/data";
import type { ContactData, ContactField, ImageSource, ServiceDetail } from "@/types";

import type {
  Service,
  TeamMember,
  Client,
  Testimonial,
  NavItem,
  LocaleOption,
  ThemeOption,
} from "@/types";

/* =========================================================
   SITE
   ========================================================= */
export function getSite() {
  return site;
}

/* =========================================================
   NAVIGATION
   ========================================================= */
export function getNavItems(): NavItem[] {
  return navItems;
}

export function getLocales(): readonly LocaleOption[] {
  return locales;
}

export function getThemeOptions(): readonly ThemeOption[] {
  return themeOptions;
}

/* =========================================================
   SERVICES
   ========================================================= */
export function getNavServices(): Service[] {
  return navServices;
}

export function getHomeServices(): Service[] {
  return homeServices;
}

export function getServiceByKey(key: string): Service | undefined {
  return navServices.find((s) => s.key === key);
}

/* =========================================================
   TEAM
   ========================================================= */
export function getTeamMembers(): TeamMember[] {
  return teamMembers;
}

/* =========================================================
   CLIENTS
   ========================================================= */
export function getClients(): Client[] {
  return clients;
}

/* =========================================================
   TESTIMONIALS
   ========================================================= */
export function getTestimonials(): Testimonial[] {
  return testimonials;
}



/* =========================================================
   HERO
   ========================================================= */
export interface HeroStat {
  key: string;
  value: string;
  label: string;
}

export function getHeroImage(): ImageSource {
  return heroImage;
}

/**
 * Retourne les stats avec label déjà traduit.
 * Reçoit une fonction `t` (celle du namespace "hero") pour rester
 * découplé du système i18n.
 */
export function getHeroStats(t: (key: string) => string): HeroStat[] {
  return heroStats.map((s) => ({
    key: s.key,
    value: s.value,
    label: t(`stats.${s.key}`),
  }));
}

import {
  serviceCategories as rawServiceCategories,
  processSteps as rawProcessSteps,
} from "@/data";
import type {
  ServiceCategory,
  ProcessStep,
  ServiceCategoryId,
} from "@/types";

/* =========================================================
   PAGE SERVICES — CATÉGORIES
   ========================================================= */
export function getServiceCategories(): ServiceCategory[] {
  return rawServiceCategories;
}

export function getServiceCategoryById(
  id: ServiceCategoryId
): ServiceCategory | undefined {
  return rawServiceCategories.find((c) => c.id === id);
}

export function getDefaultServiceCategory(): ServiceCategory {
  return rawServiceCategories[0];
}

/* =========================================================
   PAGE SERVICES — PROCESSUS
   ========================================================= */
export function getProcessSteps(): ProcessStep[] {
  return rawProcessSteps;
}

export function getServicesHeroImage(): string {
  return servicesHeroImage;
}

/* =========================================================
   SERVICE DETAILS
   ========================================================= */
export function getServiceDetail(slug: string): ServiceDetail | undefined {
  return serviceDetails[slug as keyof typeof serviceDetails];
}

export function getAllServiceDetails(): ServiceDetail[] {
  return Object.values(serviceDetails);
}

/* =========================================================
   CONTACT
   ========================================================= */
export function getContactData(): ContactData {
  return contactData;
}

export function getContactFields(): ContactField[] {
  return contactFields;
}