import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { HospitalIcon, Menu } from "lucide-react";
import Link from "next/link";
import Filters from "./filters";

export default function Header() {
  return (
    <div className="body-padding py-4 flex justify-between items-center shadow-md">
      <Link
        href="/"
        className="flex gap-x-2 items-center font-bold text-2xl to-zinc-900"
      >
        <span>
          <HospitalIcon />
        </span>
        Hospitality Experiences
      </Link>
      <div className="md:hidden">
        <HeaderMenu />
      </div>
    </div>
  );
}

function HeaderMenu() {
  return (
    <Sheet>
      <SheetTrigger className="menu">
        <Menu />
      </SheetTrigger>
      <SheetContent className="rounded-l-4xl overflow-y-auto">
        <SheetHeader className="invisible w-0 h-0" aria-hidden>
          <SheetTitle>Filters</SheetTitle>
          <SheetDescription>Apply filters</SheetDescription>
        </SheetHeader>
        <Filters />
      </SheetContent>
    </Sheet>
  );
}
