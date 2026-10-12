import {
  queryProjects,
  getAllProjectsForFilters,
  buildPortfolioFilters,
} from "@/lib/endpoints";
import PortfolioPageClient from "@/components/portfolio/PortfolioPageClient";
import type { ProjectCategory, ProjectScope } from "@/types";
import type { ActiveFilters } from "@/components/portfolio";

const PER_PAGE = 9;

interface PageProps {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}

/**
 * Parse les searchParams pour construire les filtres actifs.
 */
function parseFilters(
  params: Record<string, string | string[] | undefined>,
): ActiveFilters {
  const get = (key: string): string => {
    const v = params[key];
    return Array.isArray(v) ? v[0] ?? "" : v ?? "";
  };

  const parseList = <T extends string>(key: string): T[] => {
    const v = get(key);
    return v ? (v.split(",").filter(Boolean) as T[]) : [];
  };

  return {
    search: get("search"),
    categories: parseList<ProjectCategory>("category"),
    scopes: parseList<ProjectScope>("scope"),
    years: parseList<string>("year").map(Number).filter((n) => !isNaN(n)),
    techs: parseList<string>("tech"),
  };
}

export default async function PortfolioPage({ searchParams }: PageProps) {
  const params = await searchParams;
  const filters = parseFilters(params);
  const page = Number(params.page) || 1;

  // Charge en parallèle : les projets filtrés + tous les projets (pour les filtres)
  const [projects, allProjects] = await Promise.all([
    queryProjects({
      page,
      limit: PER_PAGE,
      category: filters.categories.length ? filters.categories : undefined,
      scope: filters.scopes.length ? filters.scopes : undefined,
      year: filters.years.length ? filters.years : undefined,
      tech: filters.techs.length ? filters.techs : undefined,
      search: filters.search || undefined,
    }),
    getAllProjectsForFilters(),
  ]);

  const filterData = buildPortfolioFilters(allProjects);

  return (
    <PortfolioPageClient
      projects={projects}
      filterData={filterData}
      initialFilters={filters}
    />
  );
}