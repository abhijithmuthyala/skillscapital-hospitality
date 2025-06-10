type HeroStat = {
  title: string;
  description: string;
};

export default function HeroStats({ className }: { className?: string }) {
  return (
    <ul className={`flex gap-x-16 gap-y-8 max-md:flex-wrap ${className}`}>
      {heroStats.map(function renderStat(stat, id) {
        return (
          <li key={id} className="flex gap-x-16">
            <div className="flex flex-col gap-2 text-balance">
              <span className="text-3xl font-bold">{stat.title}</span>
              <span className="text-lg opacity-80">{stat.description}</span>
            </div>
            {id < heroStats.length - 1 && (
              <hr className="h-[75%] block w-0.5 bg-surface self-center" />
            )}
          </li>
        );
      })}
    </ul>
  );
}

const heroStats: HeroStat[] = [
  { title: "20,000+", description: "Vetted SAP Tech Consultants" },
  { title: "1000+", description: "Global Clients & SAP Projects" },
  {
    title: "10+ Years",
    description: "Average Experience per Consultant",
  },
  {
    title: "20M+",
    description: "Man-Hours of SAP Expertise",
  },
];
