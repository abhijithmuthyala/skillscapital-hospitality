import Image from "next/image";
import Button from "../ui/button";
import ArrowRight from "../ui/icons/arrow-right";
import CardsGrid from "../ui/layouts/cards-grid";

export default function EngagementModels() {
  return (
    <CardsGrid>
      {engagementModels.map(function renderModel(model) {
        return (
          <article
            key={model.key}
            className="bg-surface rounded-lg shadow overflow-hidden"
          >
            <Image
              src={`/images/engagement-model/${model.key}.png`}
              alt={model.title}
              width={300}
              height={200}
              className="w-full object-cover brightness-75 rounded-t-lg h-64 hover:scale-110 transition-all duration-300 ease-in-out hover:brightness-100"
            />
            <div className="px-4 py-4">
              <header className="mt-4">
                <h3 className="text-2xl font-semibold">{model.title}</h3>
                <p className="mt-2 opacity-80">{model.description}</p>
              </header>
              <Button
                variant="primary"
                className="mt-6 bg-primary text-primary-light flex items-center gap-x-1 mx-auto px-4"
              >
                {model.actionLabel} <ArrowRight />
              </Button>
            </div>
          </article>
        );
      })}
    </CardsGrid>
  );
}

type EngagementModel = {
  title: string;
  description: string;
  imageProps: Partial<React.ComponentProps<typeof Image>>;
  actionLabel: string;
  key: number;
};

const engagementModels: EngagementModel[] = [
  {
    title: "SAP Consultants",
    description:
      "Pre-vetted, ready-to-deploy SAP talent for on-demand projects & implementations.",
    imageProps: { src: "" },
    actionLabel: "Explore SAP Consultants",
    key: 1,
  },
  {
    title: "Managed Teams",
    description:
      "Scalable, fully managed SAP teams for end-to-end project delivery.",
    imageProps: { src: "" },
    actionLabel: "Browse Managed Teams",
    key: 2,
  },
  {
    title: "SAP Consulting",
    description:
      "SAP consulting and integration solutions to accelerate transformation.",
    imageProps: { src: "" },
    actionLabel: "Access Top SAP Consulting",
    key: 3,
  },
];
