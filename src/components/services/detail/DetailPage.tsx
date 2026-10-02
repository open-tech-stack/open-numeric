"use client";

import { notFound } from "next/navigation";
import DetailHero from "./DetailHero";
import DetailExpertise from "./DetailExpertise";
import DetailOfferings from "./DetailOfferings";
import DetailProcess from "./DetailProcess";
import DetailCta from "./DetailCta";
import { getServiceDetail } from "@/lib/data";

interface DetailPageProps {
  slug: string;
}

export default function DetailPage({ slug }: DetailPageProps) {
  const service = getServiceDetail(slug);

  if (!service) {
    notFound();
  }

  return (
    <>
      <DetailHero service={service} />
      <DetailExpertise service={service} />
      <DetailOfferings service={service} />
      <DetailProcess service={service} />
      <DetailCta service={service} />
    </>
  );
}