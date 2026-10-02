"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { getClients } from "@/lib/data";

export default function ClientsSection() {
  const t = useTranslations("clients");
  const clients = getClients();

  return (
    <section className="relative py-16 lg:py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 max-w-2xl mx-auto"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight mb-3">
            {t("title")}{" "}
            <span className="text-gradient">{t("titleHighlight")}</span>
          </h2>
          <p className="text-foreground-muted text-sm sm:text-base">
            {t("subtitle")}
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

          <div className="flex overflow-hidden">
            <motion.div
              className="flex gap-12 shrink-0"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            >
              {[...clients, ...clients].map((client, i) => (
                <div
                  key={`${client.name}-${i}`}
                  className="relative h-16 w-32 shrink-0 opacity-60 hover:opacity-100 grayscale hover:grayscale-0 transition-all duration-300"
                >
                  <Image
                    src={client.logo}
                    alt={client.name}
                    fill
                    className="object-contain"
                    sizes="128px"
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}