"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Send, CheckCircle2, Sparkles } from "lucide-react";
import { getContactFields } from "@/lib/data";
import type { ContactField } from "@/types";

type FormState = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const t = useTranslations("contact.form");
  const fields = getContactFields();

  const [values, setValues] = useState<Record<string, string>>(
    fields.reduce((acc, f) => ({ ...acc, [f.key]: "" }), {})
  );
  const [state, setState] = useState<FormState>("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setState("loading");
    await new Promise((r) => setTimeout(r, 1200));
    setState("success");
    setValues(fields.reduce((acc, f) => ({ ...acc, [f.key]: "" }), {}));
    setTimeout(() => setState("idle"), 4000);
  };

  const getFieldClass = () =>
    "w-full px-4 py-3.5 rounded-xl bg-surface border border-border text-foreground placeholder:text-foreground-subtle focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200";

  // Champs texte en haut (name, email, subject), textarea en bas (message)
  const topFields = fields.filter((f) => f.type !== "textarea");
  const bottomFields = fields.filter((f) => f.type === "textarea");

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
      className="relative rounded-3xl p-6 sm:p-10 lg:p-14 bg-surface border border-border shadow-xl overflow-hidden"
    >
      {/* Halos décoratifs */}
      <div className="absolute -top-32 -right-32 h-80 w-80 rounded-full bg-primary-soft blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-secondary-soft blur-3xl pointer-events-none" />

      <div className="relative">
        {/* En-tête en paysage : titre à gauche, icône à droite */}
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6 mb-10">
          <div className="max-w-2xl">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight mb-3">
              {t("title")}{" "}
              <span className="text-gradient">{t("titleHighlight")}</span>
            </h2>
            <p className="text-base text-foreground-muted leading-relaxed">
              {t("subtitle")}
            </p>
          </div>

          {/* Icône décorative droite (desktop) */}
          <div className="hidden sm:block flex-shrink-0">
            <div className="relative">
              <div className="absolute inset-0 rounded-2xl bg-primary/30 blur-2xl" />
              <div className="relative inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-primary text-primary-foreground shadow-lg">
                <Send className="h-7 w-7" />
              </div>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          {/* Grille des 3 champs texte en haut (name, email, subject) */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-5">
            {topFields.map((field) => (
              <FieldRenderer
                key={field.key}
                field={field}
                value={values[field.key]}
                onChange={handleChange}
                label={t(`fields.${field.key}.label`)}
                placeholder={t(`fields.${field.key}.placeholder`)}
                className={getFieldClass()}
              />
            ))}
          </div>

          {/* Textarea pleine largeur */}
          {bottomFields.map((field) => (
            <div key={field.key} className="mb-6">
              <FieldRenderer
                field={field}
                value={values[field.key]}
                onChange={handleChange}
                label={t(`fields.${field.key}.label`)}
                placeholder={t(`fields.${field.key}.placeholder`)}
                className={getFieldClass()}
              />
            </div>
          ))}

          {/* Bouton submit pleine largeur */}
          <button
            type="submit"
            disabled={state === "loading"}
            className="group w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-semibold text-primary-foreground bg-gradient-primary shadow-lg glow-primary hover:shadow-xl hover:scale-[1.01] active:scale-[0.99] disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-300"
          >
            {state === "loading" ? (
              <>
                <span className="h-4 w-4 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                Envoi...
              </>
            ) : state === "success" ? (
              <>
                <CheckCircle2 className="h-5 w-5" />
                {t("success")}
              </>
            ) : (
              <>
                {t("submit")}
                <Send className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5" />
              </>
            )}
          </button>
        </form>
      </div>
    </motion.div>
  );
}

/* =========================================================
   Sous-composant : champ générique
   ========================================================= */
function FieldRenderer({
  field,
  value,
  onChange,
  label,
  placeholder,
  className,
}: {
  field: ContactField;
  value: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  label: string;
  placeholder: string;
  className: string;
}) {
  const commonProps = {
    id: field.key,
    name: field.key,
    value,
    onChange,
    placeholder,
    required: field.required,
    className,
  };

  return (
    <div>
      <label
        htmlFor={field.key}
        className="block text-sm font-semibold text-foreground mb-2"
      >
        {label}
      </label>

      {field.type === "textarea" ? (
        <textarea {...commonProps} rows={field.rows ?? 5} />
      ) : (
        <input {...commonProps} type={field.type} />
      )}
    </div>
  );
}