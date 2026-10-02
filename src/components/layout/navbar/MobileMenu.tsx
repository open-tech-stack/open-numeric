"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import Icon from "@/components/ui/Icon";
import { getNavItems, getNavServices } from "@/lib/data";

interface MobileMenuProps {
  pathname: string;
}

export default function MobileMenu({ pathname }: MobileMenuProps) {
  const t = useTranslations("nav");
  const tServ = useTranslations("services");
  const navItems = getNavItems();
  const services = getNavServices();

  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const isServicesActive = pathname.startsWith("/services");
  const homeItem = navItems.find((n) => n.key === "home");
  const otherItems = navItems.filter((n) => n.key !== "home");

  const closeAll = () => {
    setOpen(false);
    setServicesOpen(false);
  };

  return (
    <>
      {/* BOUTON BURGER */}
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex items-center justify-center h-10 w-10 rounded-lg text-foreground hover:bg-surface-hover transition-colors"
        aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
        aria-expanded={open}
      >
        <AnimatePresence mode="wait" initial={false}>
          {open ? (
            <motion.span
              key="x"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X className="h-6 w-6" />
            </motion.span>
          ) : (
            <motion.span
              key="menu"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <Menu className="h-6 w-6" />
            </motion.span>
          )}
        </AnimatePresence>
      </button>

      {/* PANNEAU — fixed sous la navbar, plein écran */}
      <AnimatePresence>
        {open && (
          <>
            {/* Overlay sombre sous le panneau */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={closeAll}
              className="fixed inset-0 top-20 z-40 bg-black/40 lg:hidden"
              aria-hidden
            />

            {/* Panneau */}
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
              className="fixed top-20 left-0 right-0 z-50 lg:hidden bg-navbar-bg border-b border-navbar-border max-h-[calc(100vh-5rem)] overflow-y-auto overscroll-contain"
              style={{ boxShadow: "var(--dropdown-shadow)" }}
            >
              <div className="px-4 py-4 space-y-1">
                {/* Accueil */}
                {homeItem && (
                  <Link
                    href={homeItem.href}
                    onClick={closeAll}
                    className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                      pathname === homeItem.href
                        ? "text-primary bg-primary-soft"
                        : "text-foreground-muted hover:text-foreground hover:bg-surface-hover"
                    }`}
                  >
                    {t(homeItem.key)}
                  </Link>
                )}

                {/* Services accordion */}
                <div>
                  <button
                    onClick={() => setServicesOpen((v) => !v)}
                    className={`w-full flex justify-between items-center px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                      isServicesActive
                        ? "text-primary bg-primary-soft"
                        : "text-foreground-muted hover:text-foreground hover:bg-surface-hover"
                    }`}
                    aria-expanded={servicesOpen}
                  >
                    {t("services")}
                    <ChevronDown
                      className={`h-5 w-5 transition-transform ${
                        servicesOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <AnimatePresence initial={false}>
                    {servicesOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="pl-4 pt-1 space-y-1">
                          {services.map((service) => (
                            <Link
                              key={service.key}
                              href={service.href}
                              onClick={closeAll}
                              className="flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium text-foreground-muted hover:text-foreground hover:bg-surface-hover transition-colors"
                            >
                              <Icon
                                name={service.icon}
                                className="h-4 w-4 text-primary"
                              />
                              {tServ(service.key)}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Autres liens */}
                {otherItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={closeAll}
                    className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                      pathname === item.href
                        ? "text-primary bg-primary-soft"
                        : "text-foreground-muted hover:text-foreground hover:bg-surface-hover"
                    }`}
                  >
                    {t(item.key)}
                  </Link>
                ))}

                {/* CTA */}
                <Link
                  href="/devis"
                  onClick={closeAll}
                  className="block mt-4 px-4 py-3 rounded-xl text-center font-semibold text-primary-foreground bg-gradient-primary shadow-lg"
                >
                  {t("quote")}
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}