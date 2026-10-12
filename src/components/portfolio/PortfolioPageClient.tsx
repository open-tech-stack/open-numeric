"use client";

import { useCallback, useTransition } from "react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import {
  PortfolioHero,
  PortfolioFilters,
  ProjectGrid,
  PortfolioPagination,
  PortfolioEmpty,
  type ActiveFilters,
} from "@/components/portfolio";
import type { PaginatedResponse, PortfolioFilters as FiltersData, Project, ProjectCategory, ProjectScope } from "@/types";

interface PortfolioPageClientProps {
  projects: PaginatedResponse<Project>;
  filterData: FiltersData;
  initialFilters: ActiveFilters;
}

/**
 * Wrapper client de la page Portfolio.
 * Gère la synchronisation des filtres avec l'URL (searchParams).
 */
export default function PortfolioPageClient({
  projects,
  filterData,
  initialFilters,
}: PortfolioPageClientProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isPending, startTransition] = useTransition();

  /* =========================================================
     Met à jour l'URL en fonction des nouveaux filtres.
     ========================================================= */
  const handleFiltersChange = useCallback(
    (next: ActiveFilters) => {
      const params = new URLSearchParams(searchParams.toString());

      // Reset la page à 1 quand les filtres changent
      params.delete("page");

      // Search
      if (next.search) params.set("search", next.search);
      else params.delete("search");

      // Categories
      if (next.categories.length) params.set("category", next.categories.join(","));
      else params.delete("category");

      // Scopes
      if (next.scopes.length) params.set("scope", next.scopes.join(","));
      else params.delete("scope");

      // Years
      if (next.years.length) params.set("year", next.years.join(","));
      else params.delete("year");

      // Techs
      if (next.techs.length) params.set("tech", next.techs.join(","));
      else params.delete("tech");

      startTransition(() => {
        router.push(`${pathname}?${params.toString()}`, { scroll: false });
      });
    },
    [router, pathname, searchParams],
  );

  /* =========================================================
     Change la page (pagination).
     ========================================================= */
  const handlePageChange = useCallback(
    (page: number) => {
      const params = new URLSearchParams(searchParams.toString());
      if (page > 1) params.set("page", String(page));
      else params.delete("page");

      startTransition(() => {
        router.push(`${pathname}?${params.toString()}`, { scroll: false });
      });
    },
    [router, pathname, searchParams],
  );

  /* =========================================================
     Reset tous les filtres.
     ========================================================= */
  const clearFilters = useCallback(() => {
    startTransition(() => {
      router.push(pathname, { scroll: false });
    });
  }, [router, pathname]);

  return (
    <>
      <PortfolioHero />

      <PortfolioFilters
        data={filterData}
        active={initialFilters}
        onChange={handleFiltersChange}
        resultCount={projects.total}
      />

      <section className="relative pb-16 lg:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Loader discret pendant la transition */}
          <div
            className={`transition-opacity duration-200 ${
              isPending ? "opacity-40" : "opacity-100"
            }`}
          >
            {projects.items.length > 0 ? (
              <ProjectGrid projects={projects.items} />
            ) : (
              <PortfolioEmpty onClear={clearFilters} />
            )}
          </div>

          {projects.items.length > 0 && (
            <PortfolioPagination
              page={projects.page}
              totalPages={projects.totalPages}
              onChange={handlePageChange}
            />
          )}
        </div>
      </section>
    </>
  );
}