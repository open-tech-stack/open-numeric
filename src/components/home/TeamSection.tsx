"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Linkedin, Twitter } from "lucide-react";
import Image from "next/image";
import { getTeamMembers } from "@/lib/data";

export default function TeamSection() {
  const t = useTranslations("team");
  const members = getTeamMembers();

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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {members.map((member, i) => (
            <motion.div
              key={member.key}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -6 }}
              className="group rounded-2xl overflow-hidden border border-border bg-surface hover:border-primary/40 hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={member.image}
                  alt={t(`members.${member.key}.name`)}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="absolute bottom-4 left-4 right-4 flex gap-2 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  {member.social?.linkedin && (
                    <a
                      href={member.social.linkedin}
                      aria-label="LinkedIn"
                      className="p-2 rounded-lg bg-white/10 backdrop-blur text-white hover:bg-primary transition-colors"
                    >
                      <Linkedin className="h-4 w-4" />
                    </a>
                  )}
                  {member.social?.twitter && (
                    <a
                      href={member.social.twitter}
                      aria-label="Twitter"
                      className="p-2 rounded-lg bg-white/10 backdrop-blur text-white hover:bg-primary transition-colors"
                    >
                      <Twitter className="h-4 w-4" />
                    </a>
                  )}
                </div>
              </div>

              <div className="p-5">
                <h3 className="text-base font-bold text-foreground">
                  {t(`members.${member.key}.name`)}
                </h3>
                <p className="text-xs font-semibold text-primary mt-0.5 mb-3">
                  {t(`members.${member.key}.role`)}
                </p>
                <p className="text-sm text-foreground-muted leading-relaxed">
                  {t(`members.${member.key}.bio`)}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}