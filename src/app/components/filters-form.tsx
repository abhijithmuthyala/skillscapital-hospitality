"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { PropertyType } from "@/data/hospitality";
import { propertyTypes, propertyYears } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { ChangeEvent, FormEvent, useState } from "react";

import { Checkbox } from "@/components/ui/checkbox";
import useFilterParams from "../hooks/use-filter-params";

export type FiltersState = {
  search: string;
  year: string;
  type: PropertyType;
  flagship: boolean;
};

export default function FiltersForm() {
  const router = useRouter();
  const filterParams = useFilterParams();
  const [filters, setFilters] = useState(filterParams);

  function handleFilterChange(
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) {
    const name = e.target.getAttribute("name");
    if (!name) return;
    setFilters((filters) => ({ ...filters, [name]: e.target.value }));
  }

  function handleCheckboxToggle() {
    setFilters((filters) => ({ ...filters, flagship: !filters.flagship }));
  }

  function updateFilters(e: FormEvent) {
    e.preventDefault();

    const params = new URLSearchParams();
    params.set("search", filters.search);
    params.set("year", filters.year);
    params.set("type", filters.type);
    params.set("flagship", filters.flagship ? "on" : "off");
    router.push(`?${params.toString()}`);
  }

  return (
    <form onSubmit={updateFilters} className="flex flex-col gap-y-5">
      <label htmlFor="search" className="flex flex-col gap-y-2 ">
        Search Experiences
        <Input
          placeholder="Search by title, location..."
          id="search"
          name="search"
          value={filters.search}
          onChange={handleFilterChange}
        />
      </label>
      <div className="flex flex-wrap gap-x-12 gap-y-4 items-center">
        <label htmlFor="type" className="flex gap-x-2 items-center">
          Property Type
          <select
            name="type"
            id="type"
            value={filters.type}
            onChange={handleFilterChange}
            className="border border-zinc-300"
          >
            <option value="all">All</option>
            {propertyTypes.map(function (type) {
              return (
                <option key={type} value={type}>
                  {type[0].toUpperCase() + type.slice(1)}
                </option>
              );
            })}
          </select>
        </label>
        <label htmlFor="year" className="flex gap-x-2 items-center">
          Year
          <select
            name="year"
            id="year"
            value={filters.year}
            onChange={handleFilterChange}
            className="border border-zinc-300"
          >
            <option value="all">All</option>
            {propertyYears.map(function (year) {
              return (
                <option key={year} value={year}>
                  {year}
                </option>
              );
            })}
          </select>
        </label>
        <label htmlFor="flagship" className="flex gap-x-2 items-center">
          <Checkbox
            onClick={handleCheckboxToggle}
            className="bg-zinc-300"
            id="flagship"
            name="flagship"
            type="button"
          />
          Flagship
        </label>
      </div>
      <div className="self-center">
        <Button type="submit" variant={"default"}>
          Apply Filters
        </Button>
      </div>
    </form>
  );
}
