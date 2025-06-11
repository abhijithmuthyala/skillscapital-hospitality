"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { propertyTypes, propertyYears } from "@/lib/utils";
import { useRouter, useSearchParams } from "next/navigation";
import { ChangeEvent, FormEvent, useState } from "react";

export default function FiltersForm() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [filters, setFilters] = useState({
    search: "",
    year: "",
    type: "",
  });

  function handleFilterChange(
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) {
    const name = e.target.getAttribute("name");
    if (!name) return;
    setFilters((filters) => ({ ...filters, [name]: e.target.value }));
  }

  function updateFilters(e: FormEvent) {
    e.preventDefault();

    const params = new URLSearchParams(searchParams.toString());
    params.set("search", filters.search);
    params.set("year", filters.year);
    params.set("type", filters.type);

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
          onChange={handleFilterChange}
        />
      </label>
      <div className="flex flex-wrap gap-x-12 gap-y-4 items-center">
        <label htmlFor="type" className="flex gap-x-2 items-center">
          Property Type
          <select
            name="type"
            id="type"
            defaultValue={""}
            onChange={handleFilterChange}
            className="border border-zinc-300"
          >
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
            defaultValue={""}
            onChange={handleFilterChange}
            className="border border-zinc-300"
          >
            {propertyYears.map(function (year) {
              return (
                <option key={year} value={year}>
                  {year}
                </option>
              );
            })}
          </select>
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
