import {
  ContactHero,
  ContactForm,
  ContactInfo,
  ContactMap,
} from "@/components/contact";

export default function ContactPage() {
  return (
    <>
      <ContactHero />

      {/* Section FORMULAIRE pleine largeur */}
      <section className="relative py-16 lg:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ContactForm />
        </div>
      </section>

      {/* Section INFOS pleine largeur */}
      <section className="relative py-16 lg:py-20 bg-background-alt">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ContactInfo />
        </div>
      </section>

      <ContactMap />
    </>
  );
}