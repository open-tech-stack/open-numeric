"use client";

import { motion } from "framer-motion";
import { useTranslations, useLocale } from "next-intl";
import { Clock, MessageCircle, Share2, MapPin, Phone, Mail } from "lucide-react";
import Icon from "@/components/ui/Icon";
import type { SiteSettings, Social } from "@/types";

interface ContactInfoProps {
  settings: SiteSettings;
  socials: Social[];
}

/* Info statique (les valeurs viennent de `settings`) */
const INFO_CONFIG = [
  { key: "address", icon: "MapPin", accent: "from-blue-500 to-cyan-500" },
  { key: "phone", icon: "Phone", accent: "from-emerald-500 to-teal-500" },
  { key: "email", icon: "Mail", accent: "from-orange-500 to-amber-500" },
] as const;

/* Horaires statiques */
const SCHEDULE = [
  { key: "weekdays", hoursKey: "weekdays" },
  { key: "saturday", hoursKey: "saturday" },
  { key: "sunday", hoursKey: "sunday", closed: true },
] as const;

export default function ContactInfo({ settings, socials }: ContactInfoProps) {
  const t = useTranslations("contact.info");
  const tSchedule = useTranslations("contact.schedule");
  const locale = useLocale();

  /* Construit les valeurs selon la config */
  const getValues = (key: (typeof INFO_CONFIG)[number]["key"]) => {
    if (key === "address") {
      return [{ text: settings.address }];
    }
    if (key === "phone") {
      return [
        { text: settings.phone, href: `tel:${settings.phone}` },
        ...(settings.phoneSecondary
          ? [{ text: settings.phoneSecondary, href: `tel:${settings.phoneSecondary}` }]
          : []),
      ];
    }
    if (key === "email") {
      return [
        { text: settings.email, href: `mailto:${settings.email}` },
        ...(settings.emailSecondary
          ? [{ text: settings.emailSecondary, href: `mailto:${settings.emailSecondary}` }]
          : []),
      ];
    }
    return [];
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
      className="relative rounded-3xl p-6 sm:p-10 lg:p-14 bg-surface border border-border shadow-xl overflow-hidden"
    >
      <div className="absolute -top-32 -right-32 h-80 w-80 rounded-full bg-secondary-soft blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-primary-soft blur-3xl pointer-events-none" />

      <div className="relative">
        <div className="mb-10">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight">
            {t("title")}{" "}
            <span className="text-gradient">{t("titleHighlight")}</span>
          </h2>
        </div>

        {/* Coordonnées */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {INFO_CONFIG.map((item, i) => {
            const values = getValues(item.key);
            return (
              <motion.div
                key={item.key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
                className="group relative rounded-2xl p-5 bg-surface-hover border border-border transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-xl overflow-hidden"
              >
                <div
                  className={`absolute -top-12 -right-12 h-32 w-32 rounded-full bg-gradient-to-br ${item.accent} opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-20`}
                />
                <div className="relative">
                  <div
                    className={`inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${item.accent} text-white shadow-md mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}
                  >
                    <Icon name={item.icon} className="h-5 w-5" />
                  </div>

                  <h3 className="text-xs uppercase tracking-wider font-bold text-foreground-subtle mb-2">
                    {t(`items.${item.key}.label`)}
                  </h3>

                  {values.map((v, idx) => (
                    <p
                      key={idx}
                      className="text-sm text-foreground leading-relaxed mb-1"
                    >
                      {"href" in v && v.href ? (
                        <a
                          href={v.href}
                          className="hover:text-primary transition-colors break-all"
                        >
                          {v.text}
                        </a>
                      ) : (
                        v.text
                      )}
                    </p>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* WhatsApp */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="rounded-2xl p-6 bg-gradient-to-br from-emerald-500/10 via-transparent to-emerald-500/5 border border-emerald-500/20 mb-10"
        >
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500 text-white shadow-lg shadow-emerald-500/30">
                <MessageCircle className="h-6 w-6 fill-current" />
              </div>
              <div>
                <h3 className="text-base font-bold text-foreground mb-1">
                  {tSchedule("whatsapp.title")}
                </h3>
                <p className="text-sm text-foreground-muted">
                  {tSchedule("whatsapp.subtitle")}
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              {settings.whatsapp && (
                <a
                  href={`https://wa.me/${settings.whatsapp.replace(/\D/g, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-white bg-emerald-500 hover:bg-emerald-600 shadow-lg hover:shadow-xl hover:scale-[1.03] active:scale-[0.97] transition-all duration-300"
                >
                  <MessageCircle className="h-4 w-4 fill-current" />
                  <span className="text-sm">{settings.phone}</span>
                </a>
              )}
              {settings.whatsappSecondary && (
                <a
                  href={`https://wa.me/${settings.whatsappSecondary.replace(/\D/g, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-emerald-600 dark:text-emerald-400 border border-emerald-500/40 bg-transparent hover:bg-emerald-500/10 hover:border-emerald-500 hover:scale-[1.03] active:scale-[0.97] transition-all duration-300"
                >
                  <MessageCircle className="h-4 w-4" />
                  <span className="text-sm">{settings.phoneSecondary}</span>
                </a>
              )}
            </div>
          </div>
        </motion.div>

        {/* Horaires + Réseaux */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Horaires */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="rounded-2xl p-6 bg-surface-hover border border-border"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-primary text-primary-foreground shadow-md">
                <Clock className="h-5 w-5" />
              </div>
              <h3 className="text-base font-bold text-foreground">
                {tSchedule("title")}{" "}
                <span className="text-gradient">
                  {tSchedule("titleHighlight")}
                </span>
              </h3>
            </div>

            <ul className="space-y-3">
              {SCHEDULE.map((s) => (
                <li
                  key={s.key}
                  className="flex items-center justify-between py-2 border-b border-border/60 last:border-0"
                >
                  <span className="text-sm font-medium text-foreground-muted">
                    {tSchedule(`days.${s.key}`)}
                  </span>
                  <span
                    className={`text-sm font-semibold ${"closed" in s && s.closed ? "text-danger" : "text-primary"
                      }`}
                  >
                    {tSchedule(`hours.${s.hoursKey}`)}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Réseaux sociaux */}
          {socials.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="rounded-2xl p-6 bg-surface-hover border border-border"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-primary text-primary-foreground shadow-md">
                  <Share2 className="h-5 w-5" />
                </div>
                <h3 className="text-base font-bold text-foreground">
                  {tSchedule("socials")}
                </h3>
              </div>

              <div className="grid grid-cols-2 gap-2.5">
                {socials.map((social) => {
                  const label =
                    social.translations.find((x) => x.locale === locale)?.name ??
                    social.translations[0]?.name ??
                    social.key;

                  return (
                    <a
                      key={social.id}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className={`group inline-flex items-center gap-3 px-4 py-3 rounded-xl bg-surface border border-border text-foreground-muted transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-lg ${social.hoverColor}`}
                    >
                      <Icon
                        name={social.icon}
                        className="h-4 w-4 transition-transform duration-300 group-hover:scale-110"
                      />
                      <span className="text-xs font-medium">{label}</span>
                    </a>
                  );
                })}
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </motion.div>
  );
}