import { Filter } from "lucide-react";
import { Suspense } from "react";
import FiltersForm from "./filters-form";

export default function Filters() {
  return (
    <div className="body-padding py-4 bg-zinc-50 animate-in">
      <div className="flex items-center gap-x-2">
        <Filter />
        <span className="font-semibold">Filters</span>
      </div>
      <hr className="w-full block h-[1px] bg-zinc-100 mb-4" />
      <Suspense>
        <FiltersForm />
      </Suspense>
    </div>
  );
}
