import Image from "next/image";
import Button from "../ui/button";
import ArrowRight from "../ui/icons/arrow-right";
import { FeatureUnitLayout } from "../ui/layouts/feature-grid";
import ButtonCTA from "./button-cta";

export function FeatureUnitsList() {
  return (
    <div className="grid gap-y-20">
      {features.map(function renderFeatureUnit(data: Feature, index: number) {
        return <FeatureUnit key={index} data={data} />;
      })}
      ;
    </div>
  );
}

export function FeatureUnit({ data = features[0] }: { data?: Feature }) {
  return (
    <FeatureUnitLayout
      header={<FeatureHeader title={data.title} iconName={data.iconName} />}
      image={
        <Image
          src={`/images/features/${data.imageName}.png`}
          alt={data.title}
          width={100}
          height={120}
          className="max-h-56 lg:h-full lg:max-h-full w-full object-cover object-center rounded-lg"
        />
      }
      features={data.list.map((item, index) => (
        <Feature
          key={index}
          title={item.title}
          description={item.description}
          iconName={item.iconName}
          className="bg-secondary-light"
        />
      ))}
      cta={
        <Button
          variant="primary"
          className="mt-2 px-8 py-3 w-fit mx-auto flex items-center gap-x-2"
        >
          Explore Our Vetting Process <ArrowRight />
        </Button>
      }
    />
  );
}

function Feature({
  title,
  description,
  iconName,
  className = "",
}: {
  title: string;
  description: string;
  iconName: string;
  className?: string;
}) {
  return (
    <div
      className={`flex flex-col gap-y-3 p-6 bg-surface rounded-lg shadow-lg ${className}`}
    >
      <div
        className="bg-cover bg-no-repeat bg-center w-10 aspect-square"
        style={{
          backgroundImage: `url(/icons/${iconName}.svg)`,
        }}
      ></div>
      <h3 className="text-2xl font-semibold mb-2">{title}</h3>
      <p className="text-balance opacity-80">{description}</p>
    </div>
  );
}

function FeatureHeader({
  title,
  iconName,
}: {
  title: string;
  iconName: string;
}) {
  return (
    <div className="flex items-center gap-x-4 p-3 bg-primary rounded-lg text-primary-light font-semibold text-lg">
      <div
        className="w-6 aspect-square bg-cover bg-no-repeat bg-center"
        style={{
          backgroundImage: `url(/icons/${iconName}.svg)`,
        }}
      ></div>
      <h3>{title}</h3>
      <ButtonCTA className="ml-auto " />
    </div>
  );
}

type Feature = {
  title: string;
  iconName: string;
  imageName: string;
  list: {
    title: string;
    description: string;
    iconName: string;
  }[];
};

const features: Feature[] = [
  {
    title: "Advanced ML-Powered Precision MatchTM",
    iconName: "match",
    imageName: "sap",
    list: [
      {
        title: "Continuously Learning Models",
        description:
          "Matching algorithms evolve with every project, improving accuracy over time.",
        iconName: "recycle",
      },
      {
        title: "Trained on Real-World Data",
        description:
          "Models are trained on 20,000+ consultant profiles and 1,000+ client project outcomes.",
        iconName: "web",
      },
      {
        title: "AI-Powered Precision",
        description:
          "Instantly identifies best-fit SAP consultants using advanced AI/ML algorithms.",
        iconName: "focus",
      },
      {
        title: "Optimized for Enterprise Needs",
        description:
          "Ensures high-relevance matches tailored to complex SAP delivery environments.",
        iconName: "enterprise",
      },
    ],
  },
  {
    title: "Deep Tech AI-Driven Deep Vet",
    iconName: "match",
    imageName: "humans",
    list: [
      {
        title: "End-to-End Fit Scoring",
        description:
          "Combines all layers into a unified candidate readiness score for decision-making.",
        iconName: "recycle",
      },
      {
        title: "Verified by External Assessments",
        description:
          "Third-party evaluations validate core skills across SAP, ERP, and enterprise technologies.",
        iconName: "web",
      },
      {
        title: "AI-Powered Matching",
        description:
          "Machine learning algorithms analyze SAP resumes and job descriptions to ensure precise skill alignment.",
        iconName: "enterprise",
      },
      {
        title: "Human Insights for Cultural Fit",
        description:
          "Industry experts assess soft skills and team compatibility for enterprise-ready placements.",
        iconName: "focus",
      },
    ],
  },
  {
    title: "Cognitive NLP-Processed Talent Persona",
    iconName: "match",
    imageName: "nlp",
    list: [
      {
        title: "Bias-Free Evaluation",
        description:
          "Delivers data-backed insights that reduce hiring bias and enhance fairness.",
        iconName: "recycle",
      },
      {
        title: "Expertise Depth Evaluation",
        description:
          "NLP algorithms extract and score domain knowledge and technical fluency in real time.",
        iconName: "web",
      },
      {
        title: "AI-Assisted Behavioral Insights",
        description:
          "Natural Language Processing analyzes video interview responses to assess personality traits.",
        iconName: "focus",
      },
      {
        title: "Behavioral Fit Mapping",
        description:
          "Matches candidates to roles based on cognitive, interpersonal, and cultural alignment.",
        iconName: "enterprise",
      },
    ],
  },
];
