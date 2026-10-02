import type { Service, ServiceCategory, ProcessStep } from "@/types";
export const servicesHeroImage = "/images/sh01.jpg";
/* =========================================================
   Services (navbar + home)
   ========================================================= */
export const navServices: Service[] = [
  {
    key: "development",
    href: "/services/developpement",
    icon: "Code2",
    accent: "from-orange-500 to-red-500",
  },
  {
    key: "design",
    href: "/services/design",
    icon: "PenTool",
    accent: "from-blue-500 to-violet-500",
  },
  {
    key: "training",
    href: "/services/formation",
    icon: "GraduationCap",
    accent: "from-emerald-500 to-teal-500",
  },
  {
    key: "maintenance",
    href: "/services/maintenance",
    icon: "Wrench",
    accent: "from-amber-500 to-orange-500",
  },
  {
    key: "shop",
    href: "/services/vente",
    icon: "ShoppingBag",
    accent: "from-pink-500 to-rose-500",
  },
];

export const homeServices: Service[] = navServices.filter(
  (s) => s.key !== "shop"
);

/* =========================================================
   Catégories enrichies (page /services)
   ========================================================= */
export const serviceCategories: ServiceCategory[] = [
  {
    id: "development",
    icon: "Code2",
    accent: "from-blue-500 to-blue-600",
    items: [
      { key: "web", icon: "Globe" },
      { key: "mobile", icon: "Smartphone" },
      { key: "software", icon: "MonitorSmartphone" },
      { key: "api", icon: "Server" },
    ],
  },
  {
    id: "training",
    icon: "GraduationCap",
    accent: "from-purple-500 to-purple-600",
    items: [
      { key: "it", icon: "Lightbulb" },
      { key: "education", icon: "BookOpen" },
    ],
  },
  {
    id: "maintenance",
    icon: "Wrench",
    accent: "from-orange-500 to-orange-600",
    items: [
      { key: "it", icon: "Wrench" },
      { key: "repair", icon: "ShieldCheck" },
    ],
  },
  {
    id: "sales",
    icon: "ShoppingBag",
    accent: "from-green-500 to-green-600",
    items: [
      { key: "hardware", icon: "MonitorSmartphone" },
      { key: "office", icon: "Printer" },
    ],
  },
  {
    id: "design",
    icon: "PenTool",
    accent: "from-pink-500 to-pink-600",
    items: [
      { key: "web", icon: "Palette" },
      { key: "graphic", icon: "PenTool" },
    ],
  },
];

/* =========================================================
   Étapes du processus
   ========================================================= */
export const processSteps: ProcessStep[] = [
  {
    key: "consultation",
    step: 1,
    accent: "from-indigo-500 to-blue-500",
    icon: "Lightbulb",
  },
  {
    key: "design",
    step: 2,
    accent: "from-blue-500 to-teal-500",
    icon: "Palette",
  },
  {
    key: "build",
    step: 3,
    accent: "from-teal-500 to-emerald-500",
    icon: "Code2",
  },
  {
    key: "delivery",
    step: 4,
    accent: "from-emerald-500 to-green-500",
    icon: "ShieldCheck",
  },
];