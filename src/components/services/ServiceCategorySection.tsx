"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import ServiceCard from "./ServiceCard";
import type { ServiceCategory } from "@/types";

interface ServiceCategorySectionProps {
  category: ServiceCategory;
}

export default function ServiceCategorySection({
  category,
}: ServiceCategorySectionProps) {
  const t = useTranslations("servicesPage.categories");

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="space-y-10"
    >
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-3">
          <span
            className={`bg-gradient-to-r ${category.accent} bg-clip-text text-transparent`}
          >
            {t(`${category.id}.name`)}
          </span>
        </h2>
        <p className="text-foreground-muted text-base sm:text-lg">
          {t(`${category.id}.description`)}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {category.items.map((item, i) => (
          <ServiceCard
            key={item.key}
            category={category}
            item={item}
            index={i}
          />
        ))}
      </div>
    </motion.div>
  );
}