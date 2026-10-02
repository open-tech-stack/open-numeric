"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Icon from "@/components/ui/Icon";
import { getProcessSteps } from "@/lib/data";

export default function ProcessSection() {
  const t = useTranslations("servicesPage.process");
  const steps = getProcessSteps();

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
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold bg-primary-soft text-primary border border-primary/20 mb-4">
            {t("badge")}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4">
            {t("title")}{" "}
            <span className="text-gradient">{t("titleHighlight")}</span>
          </h2>
          <p className="text-foreground-muted text-base sm:text-lg">
            {t("subtitle")}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={step.key}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              // Pas de whileHover → CSS
            >
              <div className="group relative h-full rounded-2xl overflow-hidden transition-all duration-300 ease-out hover:-translate-y-1.5 hover:shadow-2xl">
                {/* Bordure gradient (visible en permanence) */}
                <div
                  className={`h-full p-[2px] rounded-2xl bg-gradient-to-br ${step.accent}`}
                >
                  <div className="h-full p-6 rounded-2xl bg-surface flex flex-col items-center text-center">
                    {/* Cercle numéroté */}
                    <div
                      className={`relative h-16 w-16 rounded-2xl bg-gradient-to-br ${step.accent} text-white flex items-center justify-center shadow-lg mb-5 transition-transform duration-300 ease-out group-hover:scale-110 group-hover:rotate-3`}
                    >
                      <Icon name={step.icon} className="h-7 w-7" />
                      <span className="absolute -top-2 -right-2 h-6 w-6 rounded-full bg-surface text-foreground text-xs font-bold flex items-center justify-center border-2 border-border transition-colors group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary">
                        {step.step}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold mb-2 text-foreground transition-colors group-hover:text-primary">
                      {t(`steps.${step.key}.title`)}
                    </h3>
                    <p className="text-sm text-foreground-muted leading-relaxed">
                      {t(`steps.${step.key}.description`)}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}