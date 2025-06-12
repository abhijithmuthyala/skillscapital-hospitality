import { PropertyData } from "@/data/hospitality";
import { LocationEdit, PersonStanding, Star, Timer } from "lucide-react";
import Image from "next/image";

export default function PreviewCard({ data }: { data: PropertyData }) {
  const guestFeedbacks = data.projects.map((p) => p.guestFeedback ?? []).flat();
  const guestAvgRating =
    guestFeedbacks.reduce((sum, n) => sum + n, 0) / guestFeedbacks.length;
  const roundedAvgRating = guestAvgRating.toFixed(1);

  return (
    <article className="rounded-xl overflow-hidden bg-zinc-100 shadow-lg">
      <Image
        src={"https://picsum.photos/800/600"}
        alt=""
        width={800}
        height={600}
        className="hover:scale-105 transition-all"
      />
      <div className="p-6 flex flex-col gap-y-3">
        <div className="flex gap-x-4 justify-between items-center">
          <h3 className="font-semibold">{data.title}</h3>
          <div className="flex items-center gap-x-1 flex-wrap">
            <Star className="text-zinc-500" />
            <span>{roundedAvgRating} / 5</span>
          </div>
        </div>
        <div className="flex flex-col gap-y-2">
          <div className="flex items-center gap-x-2">
            <PersonStanding />
            {data.role}
          </div>
          <div className="flex items-center gap-x-2">
            <LocationEdit />
            {data.location}
          </div>
          <div className="flex items-center gap-x-2">
            <Timer />
            {data.duration}
          </div>
          <div className="flex items-center gap-x-2">
            <Star />
            {guestFeedbacks.length} guests
          </div>
        </div>
      </div>
    </article>
  );
}
