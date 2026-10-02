"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { ArrowRight, Check } from "lucide-react";
import Icon from "@/components/ui/Icon";
import type { ServiceCategory, SubService } from "@/types";

interface ServiceCardProps {
  category: ServiceCategory;
  item: SubService;
  index: number;
}

export default function ServiceCard({ category, item, index }: ServiceCardProps) {
  const t = useTranslations("servicesPage");
  const baseKey = `categories.${category.id}.items.${item.key}`;

  const details = t.raw(`${baseKey}.details`) as string[];

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      // ⚠️ Pas de whileHover ici — le hover est 100% CSS ci-dessous
    >
      <div className="group relative rounded-2xl border border-border bg-surface p-6 sm:p-8 overflow-hidden transition-all duration-300 ease-out hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-2xl">
        {/* Halo au hover (CSS pur) */}
        <div
          className={`absolute -top-16 -right-16 h-40 w-40 rounded-full bg-gradient-to-br ${category.accent} opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-20`}
        />

        <div className="relative">
          {/* Icône */}
          <div
            className={`inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${category.accent} text-white shadow-lg mb-5 transition-transform duration-300 ease-out group-hover:scale-110 group-hover:rotate-3`}
          >
            <Icon name={item.icon} className="h-6 w-6" />
          </div>

          {/* Titre + description */}
          <h3 className="text-lg sm:text-xl font-bold mb-2 text-foreground transition-colors group-hover:text-primary">
            {t(`${baseKey}.title`)}
          </h3>
          <p className="text-sm text-foreground-muted leading-relaxed mb-5">
            {t(`${baseKey}.description`)}
          </p>

          {/* Détails */}
          <ul className="space-y-2 mb-6">
            {details.map((detail, i) => (
              <li
                key={i}
                className="flex items-start gap-2 text-sm text-foreground-muted"
              >
                <Check className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                <span>{detail}</span>
              </li>
            ))}
          </ul>

          {/* Lien */}
          <Link
            href={`/services/${category.id}`}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-all duration-300 group-hover:gap-3"
          >
            {t("learnMore")}
            <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}