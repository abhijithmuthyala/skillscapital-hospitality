import Image from "next/image";
import HeroStats from "./components/hero-stats";
import EngagementModels from "./components/models";
import Button from "./ui/button";
import BodyPaddingCard from "./ui/cards/body-padding";

export default function Home() {
  return (
    <>
      <section className="relative grid grid-cols-[60fr_40fr] bg-gradient-to-r from-hero-bg-start to-hero-bg-end to-50">
        <Image
          src={"/images/hero-bg.png"}
          alt=""
          width={836}
          height={799}
          className="col-start-2 row-start-1 bg-gradient-to-r from-hero-bg-end to-hero-img-bg-end h-full object-cover object-right mix-blend-color-dodge"
        />
        <BodyPaddingCard className="col-start-1 col-span-2 row-start-1 pt-36 text-surface text-balance">
          <header className="w-1/2">
            <h1 className="font-bold text-9xl leading-18">
              Unleash SAP &amp; Tech Excellence with AI/ML Talent Cloud
            </h1>
            <p className="opacity-80 mt-4">
              Find and deploy elite SAP consultants, managed teams, and
              consulting expertise instantly with AI-driven precision.
            </p>
          </header>
          <HeroStats className="mt-10 max-w-[80%]" />
          <div className="flex gap-x-4 mt-10 mb-24">
            <Button variant="primary">Find SAP experts now</Button>
            <Button variant="text">Explore Talent Cloud &rarr;</Button>
          </div>
        </BodyPaddingCard>
      </section>
      <section>
        <BodyPaddingCard className="py-20 bg-background">
          <header className="text-center mb-8 text-balance text-primary">
            <h2 className="text-9xl font-semibold  mb-4">
              Source &amp; Deploy SAP Expertise Seamlessly
            </h2>
            <p className="opacity-80">
              Our AI driven platform powers three key engagement models.
            </p>
          </header>
          <EngagementModels />
        </BodyPaddingCard>
      </section>
    </>
  );
}
