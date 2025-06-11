import { hospitalityData, PropertyData } from "@/data/hospitality";
import Image from "next/image";

export default function PreviewCard({
  data = hospitalityData[0],
}: {
  data?: PropertyData;
}) {
  const guestFeedbacks = data.projects.map((p) => p.guestFeedback ?? []).flat();
  const guestAvgRating =
    guestFeedbacks.reduce((sum, n) => sum + n, 0) / guestFeedbacks.length;
  const roundedAvgRating = guestAvgRating.toFixed(2);

  return (
    <article className="rounded-xl overflow-hidden">
      <Image src={"/images/test.jpg"} alt="" width={800} height={600} />
      <div className="p-6">
        <div className="flex gap-x-4 justify-between items-center">
          <h3 className="font-semibold">{data.title}</h3>
          <span>{roundedAvgRating}</span>
        </div>
        <p className="mt-3">{data.role}</p>
        <div className="flex flex-wrap gap-x-4 gap-y-2">
          <span>{data.location}</span>
          <span>{data.duration}</span>
          <span>{guestFeedbacks.length} guests</span>
        </div>
      </div>
    </article>
  );
}
