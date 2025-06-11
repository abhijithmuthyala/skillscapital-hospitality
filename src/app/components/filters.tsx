import { Button } from "@/components/ui/button";
import { Filter, X } from "lucide-react";
import FiltersForm from "./filters-form";

export default function Filters() {
  return (
    <div className="body-padding py-3 bg-zinc-50 animate-in">
      <div className="flex py-3 justify-between gap-x-3 items-center">
        <div className="flex items-center gap-x-2">
          <Filter />
          <span className="font-semibold">Filters</span>
        </div>
        <Button className="" variant={"ghost"} size={"lg"}>
          <X />
        </Button>
      </div>
      <hr className="w-full block h-[1px] bg-zinc-100 mb-4" />
      <FiltersForm />
    </div>
  );
}
