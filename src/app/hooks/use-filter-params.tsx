import { PropertyType, propertyTypes } from "@/data/hospitality";
import { useSearchParams } from "next/navigation";
import { FiltersState } from "../components/filters-form";
import { defaultFilters } from "../constants";

export default function useFilterParams(): FiltersState {
  const params = useSearchParams();

  const search = params.get("search") || defaultFilters.search;
  const type = (params.get("type") as PropertyType) || defaultFilters.type;
  const year = params.get("year") || defaultFilters.year;
  let flagship = params.get("flagship") || defaultFilters.flagship;
  if (typeof flagship === "string") {
    flagship = flagship === "on" ? true : false;
  }

  if (!propertyTypes.includes(type)) {
    throw new Error("Invalid filters.");
  }

  return { search, type, year, flagship };
}
