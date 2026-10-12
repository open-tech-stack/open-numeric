import { getServices, getSettings } from "@/lib/endpoints";
import { ServicesPageClient } from "@/components/services";

export default async function ServicesPage() {
  const [services, settings] = await Promise.all([
    getServices(),
    getSettings(),
  ]);

  return <ServicesPageClient services={services} settings={settings} />;
}