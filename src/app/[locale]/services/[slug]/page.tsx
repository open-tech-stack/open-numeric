import { notFound } from "next/navigation";
import {
  DetailHero,
  DetailExpertise,
  DetailCta,
} from "@/components/services/detail";
import { getServiceBySlug, getSettings } from "@/lib/endpoints";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;

  const [service, settings] = await Promise.all([
    getServiceBySlug(slug),
    getSettings(),
  ]);

  if (!service) notFound();

  return (
    <>
      <DetailHero service={service} settings={settings} />
      <DetailExpertise service={service} />
      <DetailCta service={service} settings={settings} />
    </>
  );
}