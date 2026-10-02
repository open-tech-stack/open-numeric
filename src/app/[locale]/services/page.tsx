"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import {
  ServicesHero,
  ServicesTabs,
  ServiceCategorySection,
  ProcessSection,
  ServicesCta,
} from "@/components/services";
import { getServiceCategories, getDefaultServiceCategory } from "@/lib/data";
import type { ServiceCategoryId } from "@/types";

export default function ServicesPage() {
  const categories = getServiceCategories();
  const [activeId, setActiveId] = useState<ServiceCategoryId>(
    getDefaultServiceCategory().id
  );

  const activeCategory =
    categories.find((c) => c.id === activeId) ?? categories[0];

  return (
    <>
      <ServicesHero />

      <ServicesTabs
        categories={categories}
        activeId={activeId}
        onChange={setActiveId}
      />

      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatePresence mode="wait">
            <ServiceCategorySection
              key={activeCategory.id}
              category={activeCategory}
            />
          </AnimatePresence>
        </div>
      </section>

      <ProcessSection />
      <ServicesCta />
    </>
  );
}