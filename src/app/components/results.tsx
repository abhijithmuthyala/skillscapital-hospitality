"use client";

import { hospitalityData } from "@/data/hospitality";
import { TriangleAlert } from "lucide-react";
import useFilterParams from "../hooks/use-filter-params";
import PreviewCard from "./preview-card";

export default function Results() {
  const { search, type, year, flagship } = useFilterParams();

  const filteredData = hospitalityData.filter(function (data) {
    return (
      (year === "all" || data.duration === year) &&
      (type === "all" || data.propertyType.includes(type)) &&
      (!flagship || flagship === data.isFlagship) &&
      (data.role.toLowerCase().includes(search) ||
        data.title.toLowerCase().includes(search) ||
        data.location.toLowerCase().includes(search))
    );
  });

  if (filteredData.length === 0) {
    return (
      <p className="text-balance font-semibold flex items-center gap-x-2 justify-center p-3">
        <span>
          <TriangleAlert color="maroon" />
        </span>
        No results found for the selected filters.
      </p>
    );
  }

  return (
    <ul className="body-padding py-3 grid grid-cols-[repeat(auto-fill,minmax(240px,1fr))] gap-6 highlight-list-item-on-hover">
      {filteredData.map(function renderResult(data) {
        return (
          <li key={data.id} className="grid">
            <PreviewCard data={data} />
          </li>
        );
      })}
    </ul>
  );
}
