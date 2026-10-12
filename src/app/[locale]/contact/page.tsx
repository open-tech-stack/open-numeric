import {
  ContactHero,
  ContactForm,
  ContactInfo,
  ContactMap,
} from "@/components/contact";
import { getSettings, getSocials } from "@/lib/endpoints";

export default async function ContactPage() {
  const [settings, socials] = await Promise.all([
    getSettings(),
    getSocials(),
  ]);

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
          <ContactInfo settings={settings} socials={socials} />
        </div>
      </section>

      <ContactMap settings={settings} />
    </>
  );
}