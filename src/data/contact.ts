import type { ContactData, ContactField } from "@/types";

/** Champs du formulaire (ordre d'affichage) */
export const contactFields: ContactField[] = [
  { key: "name", type: "text", required: true },
  { key: "email", type: "email", required: true },
  { key: "subject", type: "text", required: true },
  { key: "message", type: "textarea", required: true, rows: 5 },
];

/** Données complètes de la page contact */
export const contactData: ContactData = {
  info: [
    {
      key: "address",
      icon: "MapPin",
      accent: "from-blue-500 to-cyan-500",
      values: [
        { text: "SOMGANDE, Ouagadougou, Burkina Faso" },
      ],
    },
    {
      key: "phone",
      icon: "Phone",
      accent: "from-emerald-500 to-teal-500",
      values: [
        { text: "+226 65 03 37 42", href: "tel:+22665033742" },
        { text: "+226 61 78 03 91", href: "tel:+22661780391" },
      ],
    },
    {
      key: "email",
      icon: "Mail",
      accent: "from-orange-500 to-amber-500",
      values: [
        { text: "tech00.02in@gmail.com", href: "mailto:tech00.02in@gmail.com" },
        { text: "etannestor45@gmail.com", href: "mailto:etannestor45@gmail.com" },
      ],
    },
  ],
  schedule: [
    { key: "weekdays", hoursKey: "weekdays" },
    { key: "saturday", hoursKey: "saturday" },
    { key: "sunday", hoursKey: "sunday", closed: true },
  ],
  socials: [
    {
      name: "Facebook",
      href: "#",
      icon: "Facebook",
      hoverColor: "hover:text-blue-600",
    },
    {
      name: "Twitter",
      href: "#",
      icon: "Twitter",
      hoverColor: "hover:text-sky-500",
    },
    {
      name: "LinkedIn",
      href: "#",
      icon: "Linkedin",
      hoverColor: "hover:text-blue-700",
    },
    {
      name: "Instagram",
      href: "#",
      icon: "Instagram",
      hoverColor: "hover:text-pink-600",
    },
  ],
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.0286000000003!2d-1.5190854!3d12.8447144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDUwJzQxLjAiTiAxwrAzMScwOC43Ilc!5e0!3m2!1sen!2sbf!4v1620000000000!5m2!1sen!2sbf",
};