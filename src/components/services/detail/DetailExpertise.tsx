"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { ArrowRight, ChevronDown, Check } from "lucide-react";
import Icon from "@/components/ui/Icon";
import type { ServiceDetail } from "@/types";

interface DetailExpertiseProps {
  service: ServiceDetail;
}

export default function DetailExpertise({ service }: DetailExpertiseProps) {
  const t = useTranslations(`serviceDetail.${service.slug}.expertise`);
  const tDesc = useTranslations(
    `serviceDetail.${service.slug}.expertise.descriptions`
  );
  const tCommon = useTranslations("serviceDetail.common");

  const groups = service.expertise.groups;
  const [activeKey, setActiveKey] = useState(groups[0].key);
  const [mobileOpen, setMobileOpen] = useState(false);

  const activeGroup = groups.find((g) => g.key === activeKey) ?? groups[0];

  const handleSelect = (key: string) => {
    setActiveKey(key);
    setMobileOpen(false);
  };

  return (
    <section className="relative py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* En-tête */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 max-w-2xl mx-auto"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4">
            {t("title")}{" "}
            <span className="text-gradient">{t("titleHighlight")}</span>
          </h2>
          <p className="text-foreground-muted text-base sm:text-lg">
            {t("subtitle")}
          </p>
        </motion.div>

        {/* ═══════════════════════════════════════════════════
            TABS — DESKTOP UNIQUEMENT (lg+)
            ═══════════════════════════════════════════════════ */}
        {service.expertise.mode === "tabs" && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="hidden lg:flex justify-center mb-10"
          >
            <div className="inline-flex gap-1.5 p-1.5 rounded-2xl bg-surface border border-border shadow-md">
              {groups.map((group) => {
                const isActive = activeKey === group.key;
                return (
                  <button
                    key={group.key}
                    onClick={() => setActiveKey(group.key)}
                    className={`relative flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-medium whitespace-nowrap transition-all duration-300 ease-out hover:scale-[1.03] active:scale-[0.97] ${
                      isActive
                        ? "text-white shadow-lg"
                        : "text-foreground-muted hover:text-foreground hover:bg-surface-hover hover:shadow-md"
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId={`active-tab-${service.slug}`}
                        className={`absolute inset-0 rounded-xl bg-gradient-to-r ${group.accent}`}
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 30,
                        }}
                      />
                    )}
                    <span className="relative z-10">
                      {t(`groups.${group.key}`)}
                    </span>
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}

        {/* ═══════════════════════════════════════════════════
            SÉLECTEUR MOBILE (< lg) — Dropdown stylé
            ═══════════════════════════════════════════════════ */}
        {service.expertise.mode === "tabs" && (
          <div className="lg:hidden relative mb-8">
            {/* Bouton déclencheur */}
            <button
              onClick={() => setMobileOpen((v) => !v)}
              className="w-full flex items-center justify-between gap-3 px-5 py-4 rounded-2xl bg-surface border border-border shadow-md hover:border-primary/40 active:scale-[0.99] transition-all duration-200"
              aria-expanded={mobileOpen}
              aria-haspopup="listbox"
            >
              <div className="flex items-center gap-3 min-w-0">
                <span
                  className={`flex-shrink-0 h-8 w-8 rounded-lg bg-gradient-to-br ${activeGroup.accent} shadow-md`}
                />
                <span className="text-sm font-semibold text-foreground truncate">
                  {t(`groups.${activeGroup.key}`)}
                </span>
              </div>
              <ChevronDown
                className={`flex-shrink-0 h-5 w-5 text-foreground-muted transition-transform duration-300 ${
                  mobileOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {/* Menu déroulant */}
            <AnimatePresence>
              {mobileOpen && (
                <>
                  {/* Overlay pour fermer au clic extérieur */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.15 }}
                    onClick={() => setMobileOpen(false)}
                    className="fixed inset-0 z-30 bg-black/40 backdrop-blur-sm"
                    aria-hidden
                  />

                  {/* Liste */}
                  <motion.div
                    initial={{ opacity: 0, y: -8, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -8, scale: 0.98 }}
                    transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
                    className="absolute top-full left-0 right-0 mt-2 z-40 rounded-2xl bg-dropdown-bg border border-dropdown-border overflow-hidden"
                    style={{ boxShadow: "var(--dropdown-shadow)" }}
                    role="listbox"
                  >
                    <div className="p-2">
                      {groups.map((group) => {
                        const isActive = activeKey === group.key;
                        return (
                          <button
                            key={group.key}
                            onClick={() => handleSelect(group.key)}
                            className={`w-full flex items-center gap-3 px-4 py-3.5 rounded-xl text-left transition-colors ${
                              isActive
                                ? "bg-primary-soft text-primary"
                                : "text-foreground-muted hover:bg-surface-hover hover:text-foreground"
                            }`}
                            role="option"
                            aria-selected={isActive}
                          >
                            <span
                              className={`flex-shrink-0 h-8 w-8 rounded-lg bg-gradient-to-br ${group.accent} shadow-sm transition-transform ${
                                isActive ? "scale-110" : ""
                              }`}
                            />
                            <span className="flex-1 text-sm font-medium truncate">
                              {t(`groups.${group.key}`)}
                            </span>
                            {isActive && (
                              <Check className="flex-shrink-0 h-4 w-4 text-primary" />
                            )}
                          </button>
                        );
                      })}
                    </div>
                  </motion.div>
                </>
              )}
            </AnimatePresence>
          </div>
        )}

        {/* ═══════════════════════════════════════════════════
            GRILLE D'ITEMS (commune desktop + mobile)
            ═══════════════════════════════════════════════════ */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeKey}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
          >
            {activeGroup.items.map((techItem, i) => {
              const displayName = techItem.name
                ? techItem.name
                : techItem.nameKey
                  ? tDesc(techItem.nameKey)
                  : techItem.key
                    ? tDesc(techItem.key)
                    : "—";

              const description = techItem.descriptionKey
                ? tDesc(techItem.descriptionKey)
                : "";

              return (
                <motion.div
                  key={techItem.name ?? techItem.key}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                >
                  <div className="group relative h-full rounded-2xl border border-border bg-surface p-6 overflow-hidden transition-all duration-300 ease-out hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-2xl">
                    {/* Halo gradient au hover */}
                    <div
                      className={`absolute -top-16 -right-16 h-40 w-40 rounded-full bg-gradient-to-br ${activeGroup.accent} opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-20`}
                    />

                    <div className="relative">
                      {/* Logo / icône */}
                      <div
                        className={`inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-surface-hover border border-border mb-5 transition-all duration-300 ease-out group-hover:scale-110 group-hover:rotate-3 group-hover:border-transparent group-hover:bg-gradient-to-br ${activeGroup.accent}`}
                      >
                        {techItem.image ? (
                          <Image
                            src={techItem.image}
                            alt={displayName}
                            width={32}
                            height={32}
                            className="h-8 w-8 object-contain"
                          />
                        ) : techItem.icon ? (
                          <Icon name={techItem.icon} className="h-6 w-6" />
                        ) : null}
                      </div>

                      <h3 className="text-base font-bold text-foreground mb-2 transition-colors group-hover:text-primary">
                        {displayName}
                      </h3>

                      {description && (
                        <p className="text-sm text-foreground-muted leading-relaxed mb-4">
                          {description}
                        </p>
                      )}

                      <Link
                        href="/portfolio"
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary transition-all duration-300 group-hover:gap-3"
                      >
                        {tCommon("viewProjects")}
                        <ArrowRight className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-1" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}