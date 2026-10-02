"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { ArrowRight, Check } from "lucide-react";
import Icon from "@/components/ui/Icon";
import type { ServiceDetail } from "@/types";

interface DetailOfferingsProps {
  service: ServiceDetail;
}

export default function DetailOfferings({ service }: DetailOfferingsProps) {
  const t = useTranslations(`serviceDetail.${service.slug}.offerings`);
  const tCommon = useTranslations("serviceDetail.common");

  return (
    <section className="relative py-20 lg:py-28 bg-background-alt">
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {service.offerings.map((offering, i) => {
            const features = t.raw(`items.${offering.key}.features`) as string[];

            return (
              <motion.div
                key={offering.key}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <div className="group relative h-full rounded-2xl border border-border bg-surface p-6 sm:p-8 overflow-hidden transition-all duration-300 ease-out hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-2xl">
                  {/* Halo */}
                  <div
                    className={`absolute -top-20 -right-20 h-48 w-48 rounded-full bg-gradient-to-br ${offering.accent} opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-20`}
                  />

                  <div className="relative flex items-start gap-5">
                    {/* Icône */}
                    <div
                      className={`flex-shrink-0 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${offering.accent} text-white shadow-lg transition-transform duration-300 ease-out group-hover:scale-110 group-hover:rotate-3`}
                    >
                      <Icon name={offering.icon} className="h-6 w-6" />
                    </div>

                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg sm:text-xl font-bold mb-2 text-foreground transition-colors group-hover:text-primary">
                        {t(`items.${offering.key}.title`)}
                      </h3>
                      <p className="text-sm text-foreground-muted leading-relaxed mb-4">
                        {t(`items.${offering.key}.description`)}
                      </p>

                      {/* Features révélées au hover (CSS pur) */}
                      <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-500 ease-out mb-0 group-hover:mb-5">
                        <div className="overflow-hidden">
                          <ul className="space-y-2 pt-1">
                            {features.map((feature, k) => (
                              <li
                                key={k}
                                className="flex items-start gap-2 text-sm text-foreground-muted"
                              >
                                <Check className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <button className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-all duration-300 group-hover:gap-3">
                        {tCommon("learnMore")}
                        <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}