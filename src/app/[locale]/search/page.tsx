import { getTranslations } from "next-intl/server";
import SearchPageClient from "@/components/search/SearchPageClient";

interface PageProps {
  searchParams: Promise<{ q?: string }>;
}

export async function generateMetadata({ searchParams }: PageProps) {
  const { q } = await searchParams;
  const t = await getTranslations("search");

  return {
    title: q ? `${t("title")} — « ${q} »` : t("title"),
    description: t("placeholder"),
  };
}

export default async function SearchPage({ searchParams }: PageProps) {
  const { q } = await searchParams;
  return <SearchPageClient initialQuery={q ?? ""} />;
}