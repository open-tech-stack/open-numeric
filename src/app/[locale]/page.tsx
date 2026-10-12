import {
  Hero,
  ServicesSection,
  TeamSection,
  ClientsSection,
  TestimonialsSection,
  CtaSection,
} from "@/components/home";
import { getSettings, getServices, getTeamMembers, getClients, getTestimonials } from "@/lib/endpoints";

export default async function HomePage() {
  // Chargement parallèle de toutes les données de la home
  const [settings, services, teamMembers, clients, testimonials] =
    await Promise.all([
      getSettings(),
      getServices(),
      getTeamMembers(),
      getClients(),
      getTestimonials(),
    ]);

  return (
    <>
      <Hero settings={settings} />
      <ServicesSection services={services} />
      <TeamSection members={teamMembers} />
      <ClientsSection clients={clients} />
      <TestimonialsSection testimonials={testimonials} />
      <CtaSection />
    </>
  );
}