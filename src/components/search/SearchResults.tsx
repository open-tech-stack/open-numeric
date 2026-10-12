"use client";

import type { SearchResponse } from "@/types";
import { SearchResultItem } from ".";

interface SearchResultsProps {
  response: SearchResponse;
  onClose: () => void;
}

export default function SearchResults({
  response,
  onClose,
}: SearchResultsProps) {
  if (response.results.length === 0) return null;

  return (
    <div className="p-2">
      {response.results.map((result) => (
        <SearchResultItem
          key={`${result.type}-${result.id}`}
          result={result}
          onClose={onClose}
        />
      ))}
    </div>
  );
}