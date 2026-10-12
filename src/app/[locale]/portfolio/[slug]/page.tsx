import { notFound } from "next/navigation";
import {
  DetailHero,
  DetailMeta,
  DetailContent,
  DetailFeatures,
  DetailGallery,
  DetailTechs,
  DetailLinks,
  SimilarProjects,
  DetailCta,
} from "@/components/portfolio/detail";
import { getProjectBySlug, getSimilarProjects } from "@/lib/endpoints";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params;

  const project = await getProjectBySlug(slug);
  if (!project) notFound();

  const similar = await getSimilarProjects(slug);

  return (
    <>
      <DetailHero project={project} />
      <DetailMeta project={project} />
      <DetailContent project={project} />
      <DetailFeatures project={project} />
      <DetailGallery project={project} />
      <DetailTechs project={project} />
      <DetailLinks project={project} />
      <SimilarProjects projects={similar} />
      <DetailCta />
    </>
  );
}