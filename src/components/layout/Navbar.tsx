"use client";

import { useState, useRef, useEffect } from "react";
import { useTranslations } from "next-intl";
import { usePathname, Link } from "@/i18n/navigation";
import { motion } from "framer-motion";
import { getNavItems } from "@/lib/data";

import Logo from "./navbar/Logo";
import NavLink from "./navbar/NavLinks";
import ServicesDropdown from "./navbar/ServicesDropdown";
import ThemeSwitcher from "./navbar/ThemeSwitcher";
import LanguageSwitcher from "./navbar/LanguageSwitcher";
import MobileMenu from "./navbar/MobileMenu";

export default function Navbar() {
  const t = useTranslations("nav");
  const pathname = usePathname();
  const navItems = getNavItems();

  const [servicesOpen, setServicesOpen] = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);
  const hoverTimeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (
        servicesRef.current &&
        !servicesRef.current.contains(e.target as Node)
      ) {
        setServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  useEffect(() => {
    setServicesOpen(false);
  }, [pathname]);

  const handleServicesEnter = () => {
    if (hoverTimeout.current) clearTimeout(hoverTimeout.current);
    setServicesOpen(true);
  };
  const handleServicesLeave = () => {
    hoverTimeout.current = setTimeout(() => setServicesOpen(false), 150);
  };

  const isServicesActive = pathname.startsWith("/services");
  const homeItem = navItems.find((n) => n.key === "home");
  const otherItems = navItems.filter((n) => n.key !== "home");

  return (
    <nav className="sticky top-0 z-50 bg-navbar-bg border-b border-navbar-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-4">
          {/* LOGO */}
          <div className="hidden lg:block">
            <Logo showText />
          </div>
          <div className="lg:hidden">
            <Logo showText={false} />
          </div>

          {/* NAV DESKTOP */}
          <div className="hidden lg:flex items-center gap-1">
            {homeItem && (
              <NavLink
                href={homeItem.href}
                label={t(homeItem.key)}
                pathname={pathname}
              />
            )}
            <div ref={servicesRef}>
              <ServicesDropdown
                open={servicesOpen}
                isActive={isServicesActive}
                onEnter={handleServicesEnter}
                onLeave={handleServicesLeave}
              />
            </div>
            {otherItems.map((item) => (
              <NavLink
                key={item.href}
                href={item.href}
                label={t(item.key)}
                pathname={pathname}
              />
            ))}
          </div>

          {/* ACTIONS DESKTOP */}
          <div className="hidden lg:flex items-center gap-2">
            <LanguageSwitcher />
            <ThemeSwitcher />
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Link
                href="/devis"
                className="ml-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-primary-foreground bg-gradient-primary hover:opacity-90 transition-all shadow-lg glow-primary"
              >
                {t("quote")}
              </Link>
            </motion.div>
          </div>

          {/* ACTIONS MOBILE — 3 boutons alignés, pas de débordement */}
          <div className="lg:hidden flex items-center gap-1">
            <LanguageSwitcher />
            <ThemeSwitcher />
            <MobileMenu pathname={pathname} />
          </div>
        </div>
      </div>
    </nav>
  );
}