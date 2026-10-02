"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { ArrowRight } from "lucide-react";
import Icon from "@/components/ui/Icon";
import { getHomeServices } from "@/lib/data";

export default function ServicesSection() {
  const t = useTranslations("servicesSection");
  const services = getHomeServices();

  return (
    <section className="relative py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14 max-w-2xl mx-auto"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4">
            {t("title")} <span className="text-gradient">{t("titleHighlight")}</span>
          </h2>
          <p className="text-foreground-muted text-base sm:text-lg">
            {t("subtitle")}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.key}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -6 }}
            >
              <Link
                href={service.href}
                className="group relative block h-full rounded-2xl p-6 border border-border bg-surface hover:border-primary/40 hover:shadow-2xl transition-all duration-300 overflow-hidden"
              >
                <div
                  className={`absolute -top-12 -right-12 h-32 w-32 rounded-full bg-gradient-to-br ${service.accent} opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-500`}
                />

                <div className="relative">
                  <div
                    className={`inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${service.accent} text-white shadow-lg mb-5 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300`}
                  >
                    <Icon name={service.icon} className="h-6 w-6" />
                  </div>

                  <h3 className="text-lg font-bold mb-2 text-foreground">
                    {t(`items.${service.key}.title`)}
                  </h3>
                  <p className="text-sm text-foreground-muted leading-relaxed mb-5">
                    {t(`items.${service.key}.description`)}
                  </p>

                  <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary group-hover:gap-3 transition-all">
                    {t("learnMore")}
                    <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <Link
            href="/services"
            className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-primary-foreground bg-gradient-primary shadow-lg glow-primary hover:shadow-xl transition-all"
          >
            {t("viewAll")}
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}