import type { ServiceDetail, ServiceDetailSlug } from "@/types";

/* =========================================================
   1. DÉVELOPPEMENT
   ========================================================= */
const developpement: ServiceDetail = {
  slug: "developpement",
  accent: "from-blue-500 to-cyan-500",
  heroImage: "/images/services/development-hero.jpg",
  expertise: {
    mode: "tabs",
    groups: [
      {
        key: "frontend",
        accent: "from-blue-500 to-cyan-500",
        items: [
          { name: "React / Next.js", image: "/images/dev/react.png", descriptionKey: "react" },
          { name: "Angular", image: "/images/dev/angular1.png", descriptionKey: "angular" },
          { name: "Vue / Nuxt", image: "/images/dev/vue.png", descriptionKey: "vue" },
          { name: "Astro", image: "/images/dev/astro.png", descriptionKey: "astro" },
          { name: "SolidJS", image: "/images/dev/solid.png", descriptionKey: "solid" },
          { name: "Qwik", image: "/images/dev/qwik.png", descriptionKey: "qwik" },
          { name: "Svelte / SvelteKit", image: "/images/dev/svelte.png", descriptionKey: "svelte" },
          { name: "Remix", image: "/images/dev/remix.jpg", descriptionKey: "remix" },
        ],
      },
      {
        key: "backend",
        accent: "from-emerald-500 to-teal-500",
        items: [
          { name: "Node.js / NestJS", image: "/images/dev/nest.png", descriptionKey: "nest" },
          { name: "Express / Fastify", image: "/images/dev/node.png", descriptionKey: "express" },
          { name: "Python / Django / FastAPI", image: "/images/dev/python.png", descriptionKey: "python" },
          { name: "Spring Boot (Java)", image: "/images/dev/spring.png", descriptionKey: "spring" },
        ],
      },
      {
        key: "fullstack",
        accent: "from-purple-500 to-pink-500",
        items: [
          { name: "T3 Stack", image: "/images/dev/T3.png", descriptionKey: "t3" },
          { name: "MERN Stack", image: "/images/dev/mern.jfif", descriptionKey: "mern" },
          { name: "Angular + Spring", image: "/images/dev/angSpg.jfif", descriptionKey: "angularSpring" },
          { name: "MEAN Stack", image: "/images/dev/mean.jfif", descriptionKey: "mean" },
        ],
      },
      {
        key: "mobile",
        accent: "from-orange-500 to-amber-500",
        items: [
          { name: "React Native", image: "/images/dev/react-native.png", descriptionKey: "reactNative" },
          { name: "Flutter", image: "/images/dev/flutter.png", descriptionKey: "flutter" },
          { name: "Swift / Kotlin", image: "/images/dev/swift1.png", descriptionKey: "swiftKotlin" },
          { name: "Ionic", image: "/images/dev/ionic.png", descriptionKey: "ionic" },
        ],
      },
      {
        key: "devops",
        accent: "from-cyan-500 to-blue-500",
        items: [
          { name: "Docker / Kubernetes", image: "/images/dev/docker.png", descriptionKey: "docker" },
          { name: "CI/CD Pipelines", image: "/images/dev/github.png", descriptionKey: "cicd" },
          { name: "Cloud Solutions", image: "/images/dev/cloud.png", descriptionKey: "cloud" },
          { name: "Nginx / Traefik", image: "/images/dev/nginx.png", descriptionKey: "nginx" },
        ],
      },
      {
        key: "databases",
        accent: "from-rose-500 to-pink-500",
        items: [
          { name: "PostgreSQL / MySQL", image: "/images/dev/postgres.png", descriptionKey: "postgres" },
          { name: "MongoDB / Firebase", image: "/images/dev/mongo.png", descriptionKey: "mongo" },
          { name: "Prisma / TypeORM", image: "/images/dev/prisma.png", descriptionKey: "prisma" },
          { name: "SQLite / Dexie.js", image: "/images/dev/sqlite.png", descriptionKey: "sqlite" },
        ],
      },
      {
        key: "testing",
        accent: "from-yellow-500 to-amber-500",
        items: [
          { name: "Jest / Vitest", image: "/images/dev/jest.png", descriptionKey: "jest" },
          { name: "Playwright / Cypress", image: "/images/dev/e2e.png", descriptionKey: "playwright" },
          { name: "ESLint / Prettier", image: "/images/dev/eslint.png", descriptionKey: "eslint" },
          { name: "Testing Library", image: "/images/dev/testing.png", descriptionKey: "testingLib" },
        ],
      },
      {
        key: "tooling",
        accent: "from-indigo-500 to-violet-500",
        items: [
          { name: "Vite / Webpack", image: "/images/dev/vite.png", descriptionKey: "vite" },
          { name: "ESBuild / SWC", image: "/images/dev/esbuild.png", descriptionKey: "esbuild" },
          { name: "Zod / Yup", image: "/images/dev/zod.png", descriptionKey: "zod" },
          { name: "Nx / Turborepo", image: "/images/dev/monorepo.png", descriptionKey: "nx" },
        ],
      },
    ],
  },
  offerings: [
    { key: "web", icon: "Monitor", accent: "from-blue-500 to-cyan-500", featureCount: 5 },
    { key: "mobile", icon: "Smartphone", accent: "from-purple-500 to-pink-500", featureCount: 5 },
    { key: "api", icon: "Server", accent: "from-emerald-500 to-teal-500", featureCount: 5 },
    { key: "refactor", icon: "Wrench", accent: "from-orange-500 to-amber-500", featureCount: 5 },
  ],
  processSteps: [
    { key: "design", icon: "Ruler", iconColor: "text-blue-500" },
    { key: "prototype", icon: "FlaskConical", iconColor: "text-purple-500" },
    { key: "build", icon: "Code", iconColor: "text-emerald-500" },
    { key: "test", icon: "ShieldCheck", iconColor: "text-amber-500" },
    { key: "deploy", icon: "UploadCloud", iconColor: "text-cyan-500" },
  ],
};

/* =========================================================
   2. DESIGN
   ========================================================= */
const design: ServiceDetail = {
  slug: "design",
  accent: "from-pink-500 to-purple-500",
  heroImage: "/images/services/design-hero.jpg",
  expertise: {
    mode: "tabs",
    groups: [
      {
        key: "branding",
        accent: "from-pink-500 to-rose-500",
        items: [
          { key: "identity", icon: "Palette", descriptionKey: "identity" },
          { key: "charter", icon: "BookOpen", descriptionKey: "charter" },
          { key: "logo", icon: "PenTool", descriptionKey: "logo" },
          { key: "guidelines", icon: "Layers", descriptionKey: "guidelines" },
        ],
      },
      {
        key: "print",
        accent: "from-orange-500 to-amber-500",
        items: [
          { key: "brochures", icon: "BookOpen", descriptionKey: "brochures" },
          { key: "posters", icon: "PenTool", descriptionKey: "posters" },
          { key: "cards", icon: "Layout", descriptionKey: "cards" },
          { key: "packaging", icon: "Layers", descriptionKey: "packaging" },
        ],
      },
      {
        key: "digital",
        accent: "from-blue-500 to-cyan-500",
        items: [
          { key: "ui", icon: "Monitor", descriptionKey: "ui" },
          { key: "responsive", icon: "Smartphone", descriptionKey: "responsive" },
          { key: "prototypes", icon: "Layers", descriptionKey: "prototypes" },
          { key: "system", icon: "Layers", descriptionKey: "system" },
        ],
      },
      {
        key: "motion",
        accent: "from-violet-500 to-purple-500",
        items: [
          { key: "animations", icon: "Zap", descriptionKey: "animations" },
          { key: "motionGraphics", icon: "Film", descriptionKey: "motionGraphics" },
          { key: "transitions", icon: "Eye", descriptionKey: "transitions" },
          { key: "brandAnim", icon: "Palette", descriptionKey: "brandAnim" },
        ],
      },
    ],
  },
  offerings: [
    { key: "identity", icon: "Palette", accent: "from-purple-500 to-pink-500", featureCount: 5 },
    { key: "ui", icon: "Layout", accent: "from-blue-500 to-cyan-500", featureCount: 5 },
    { key: "print", icon: "Image", accent: "from-emerald-500 to-teal-500", featureCount: 5 },
    { key: "motion", icon: "Film", accent: "from-orange-500 to-amber-500", featureCount: 5 },
  ],
  processSteps: [
    { key: "discovery", icon: "Eye", iconColor: "text-pink-500" },
    { key: "research", icon: "Users", iconColor: "text-purple-500" },
    { key: "concept", icon: "Palette", iconColor: "text-violet-500" },
    { key: "design", icon: "PenTool", iconColor: "text-fuchsia-500" },
    { key: "validation", icon: "CheckCircle", iconColor: "text-rose-500" },
    { key: "delivery", icon: "Package", iconColor: "text-pink-500" },
  ],
};

/* =========================================================
   3. FORMATION
   ========================================================= */
const formation: ServiceDetail = {
  slug: "formation",
  accent: "from-cyan-500 to-blue-500",
  heroImage: "/images/services/training-hero.jpg",
  expertise: {
    mode: "tabs",
    groups: [
      {
        key: "tech",
        accent: "from-cyan-500 to-blue-500",
        items: [
          { key: "frontend", icon: "Monitor", descriptionKey: "frontend" },
          { key: "backend", icon: "Server", descriptionKey: "backend" },
          { key: "mobile", icon: "Smartphone", descriptionKey: "mobile" },
          { key: "devops", icon: "Cloud", descriptionKey: "devops" },
        ],
      },
      {
        key: "education",
        accent: "from-emerald-500 to-teal-500",
        items: [
          { key: "coding", icon: "Code", descriptionKey: "coding" },
          { key: "tools", icon: "Users", descriptionKey: "tools" },
          { key: "classroom", icon: "BookOpen", descriptionKey: "classroom" },
          { key: "resources", icon: "Presentation", descriptionKey: "resources" },
        ],
      },
    ],
  },
  offerings: [
    { key: "frontend", icon: "Monitor", accent: "from-blue-500 to-cyan-500", featureCount: 5 },
    { key: "backend", icon: "Server", accent: "from-green-500 to-emerald-500", featureCount: 5 },
    { key: "mobile", icon: "Smartphone", accent: "from-purple-500 to-pink-500", featureCount: 5 },
    { key: "devops", icon: "Cloud", accent: "from-orange-500 to-amber-500", featureCount: 5 },
  ],
  processSteps: [
    { key: "evaluation", icon: "BookOpen", iconColor: "text-cyan-500" },
    { key: "custom", icon: "GraduationCap", iconColor: "text-blue-500" },
    { key: "practice", icon: "Code", iconColor: "text-sky-500" },
    { key: "support", icon: "Users", iconColor: "text-indigo-500" },
    { key: "validation", icon: "Presentation", iconColor: "text-cyan-600" },
  ],
};

/* =========================================================
   4. MAINTENANCE
   ========================================================= */
const maintenance: ServiceDetail = {
  slug: "maintenance",
  accent: "from-amber-500 to-orange-500",
  heroImage: "/images/services/maintenance-hero.jpg",
  expertise: {
    mode: "tabs",
    groups: [
      {
        key: "repair",
        accent: "from-amber-500 to-orange-500",
        items: [
          { key: "computer", icon: "Cpu", descriptionKey: "computer" },
          { key: "peripherals", icon: "Printer", descriptionKey: "peripherals" },
          { key: "screens", icon: "Monitor", descriptionKey: "screens" },
          { key: "data", icon: "HardDrive", descriptionKey: "data" },
        ],
      },
      {
        key: "network",
        accent: "from-blue-500 to-cyan-500",
        items: [
          { key: "troubleshoot", icon: "Network", descriptionKey: "troubleshoot" },
          { key: "wifi", icon: "Wifi", descriptionKey: "wifi" },
          { key: "security", icon: "Shield", descriptionKey: "security" },
          { key: "cabling", icon: "Settings", descriptionKey: "cabling" },
        ],
      },
      {
        key: "preventive",
        accent: "from-emerald-500 to-teal-500",
        items: [
          { key: "cleaning", icon: "Sparkles", descriptionKey: "cleaning" },
          { key: "updates", icon: "Clock", descriptionKey: "updates" },
          { key: "diagnostic", icon: "Wrench", descriptionKey: "diagnostic" },
          { key: "contracts", icon: "ShieldCheck", descriptionKey: "contracts" },
        ],
      },
    ],
  },
  offerings: [
    { key: "hardware", icon: "Cpu", accent: "from-amber-500 to-orange-500", featureCount: 5 },
    { key: "preventive", icon: "Wrench", accent: "from-blue-500 to-cyan-500", featureCount: 5 },
    { key: "network", icon: "Network", accent: "from-emerald-500 to-teal-500", featureCount: 5 },
    { key: "installation", icon: "Settings", accent: "from-purple-500 to-pink-500", featureCount: 5 },
  ],
  processSteps: [
    { key: "diagnostic", icon: "Wrench", iconColor: "text-amber-500" },
    { key: "quote", icon: "FileText", iconColor: "text-orange-500" },
    { key: "repair", icon: "Cpu", iconColor: "text-amber-600" },
    { key: "test", icon: "Zap", iconColor: "text-yellow-500" },
    { key: "delivery", icon: "ShieldCheck", iconColor: "text-orange-600" },
  ],
};

/* =========================================================
   5. VENTE
   ========================================================= */
const vente: ServiceDetail = {
  slug: "vente",
  accent: "from-red-500 to-amber-500",
  heroImage: "/images/services/shop-hero.jpg",
  expertise: {
    mode: "tabs",
    groups: [
      {
        key: "computers",
        accent: "from-red-500 to-amber-500",
        items: [
          { key: "laptops", icon: "Laptop", descriptionKey: "laptops" },
          { key: "desktops", icon: "Monitor", descriptionKey: "desktops" },
          { key: "mini", icon: "Server", descriptionKey: "mini" },
          { key: "workstations", icon: "Cpu", descriptionKey: "workstations" },
        ],
      },
      {
        key: "peripherals",
        accent: "from-orange-500 to-amber-500",
        items: [
          { key: "screens", icon: "Monitor", descriptionKey: "screens" },
          { key: "input", icon: "Mouse", descriptionKey: "input" },
          { key: "printers", icon: "Printer", descriptionKey: "printers" },
          { key: "audio", icon: "Headphones", descriptionKey: "audio" },
        ],
      },
      {
        key: "networking",
        accent: "from-rose-500 to-pink-500",
        items: [
          { key: "routers", icon: "Wifi", descriptionKey: "routers" },
          { key: "switches", icon: "Network", descriptionKey: "switches" },
          { key: "cables", icon: "Cable", descriptionKey: "cables" },
          { key: "nas", icon: "HardDrive", descriptionKey: "nas" },
        ],
      },
      {
        key: "accessories",
        accent: "from-amber-500 to-yellow-500",
        items: [
          { key: "chargers", icon: "BatteryCharging", descriptionKey: "chargers" },
          { key: "batteries", icon: "Battery", descriptionKey: "batteries" },
          { key: "hubs", icon: "Usb", descriptionKey: "hubs" },
          { key: "stands", icon: "Monitor", descriptionKey: "stands" },
        ],
      },
    ],
  },
  offerings: [
    { key: "config", icon: "Settings", accent: "from-red-500 to-amber-500", featureCount: 4 },
    { key: "maintenance", icon: "Wrench", accent: "from-orange-500 to-amber-500", featureCount: 4 },
    { key: "network", icon: "Network", accent: "from-emerald-500 to-teal-500", featureCount: 4 },
    { key: "warranty", icon: "Shield", accent: "from-blue-500 to-cyan-500", featureCount: 4 },
  ],
  processSteps: [
    { key: "browse", icon: "Search", iconColor: "text-red-500" },
    { key: "select", icon: "ShoppingCart", iconColor: "text-orange-500" },
    { key: "config", icon: "Settings", iconColor: "text-amber-500" },
    { key: "delivery", icon: "Truck", iconColor: "text-rose-500" },
    { key: "support", icon: "Headphones", iconColor: "text-red-600" },
  ],
};

/* =========================================================
   EXPORT GLOBAL
   ========================================================= */
export const serviceDetails: Record<ServiceDetailSlug, ServiceDetail> = {
  developpement,
  design,
  formation,
  maintenance,
  vente,
};

export function getServiceDetailBySlug(
  slug: string
): ServiceDetail | undefined {
  return serviceDetails[slug as ServiceDetailSlug];
}