export const site = {
  name: "Open Numeric",
  shortName: "ON",
  logo: "/images/logo.png",
  url: "https://www.opennumeric.com",
  email: "tech00.02in@gmail.com",
  phone: "+226 65 03 37 42",
  phoneHref: "tel:+22665033742",
  address: "SOMGANDE, Ouagadougou, Burkina Faso",
  availability: "24/7",
  social: {
    facebook: "#",
    twitter: "#",
    linkedin: "#",
  },
} as const;

export type Site = typeof site;