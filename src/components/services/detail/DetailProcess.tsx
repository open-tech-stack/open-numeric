"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Icon from "@/components/ui/Icon";
import type { ServiceDetail } from "@/types";

interface DetailProcessProps {
  service: ServiceDetail;
}

export default function DetailProcess({ service }: DetailProcessProps) {
  const t = useTranslations(`serviceDetail.${service.slug}.process`);

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
            {t("title")}{" "}
            <span className="text-gradient">{t("titleHighlight")}</span>
          </h2>
          <p className="text-foreground-muted text-base sm:text-lg">
            {t("subtitle")}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {service.processSteps.map((step, i) => (
            <motion.div
              key={step.key}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <div className="group relative h-full rounded-2xl border border-border bg-surface p-6 text-center overflow-hidden transition-all duration-300 ease-out hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-2xl">
                {/* Halo */}
                <div
                  className={`absolute -top-16 left-1/2 -translate-x-1/2 h-32 w-32 rounded-full bg-gradient-to-br ${service.accent} opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-25`}
                />

                <div className="relative">
                  {/* Cercle icône + numéro */}
                  <div className="relative inline-flex mb-5">
                    <div
                      className={`h-16 w-16 rounded-2xl bg-gradient-to-br ${service.accent} text-white flex items-center justify-center shadow-lg transition-transform duration-300 ease-out group-hover:scale-110 group-hover:rotate-3`}
                    >
                      <Icon name={step.icon} className="h-7 w-7" />
                    </div>
                    <span className="absolute -top-2 -right-2 h-6 w-6 rounded-full bg-surface text-foreground text-xs font-bold flex items-center justify-center border-2 border-border transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary">
                      {i + 1}
                    </span>
                  </div>

                  <h3 className="text-base font-bold mb-2 text-foreground transition-colors group-hover:text-primary">
                    {t(`steps.${step.key}.title`)}
                  </h3>
                  <p className="text-sm text-foreground-muted leading-relaxed">
                    {t(`steps.${step.key}.description`)}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}