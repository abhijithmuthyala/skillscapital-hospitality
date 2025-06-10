export function FeatureListGrid({
  className = "",
  children,
  minGridWidth = 220,
}: {
  className?: string;
  children: React.ReactNode;
  minGridWidth?: number;
}) {
  return (
    <div
      className={`grid ${className} gap-6`}
      style={{
        gridTemplateColumns: `repeat(auto-fit, minmax(${minGridWidth}px, 1fr))`,
      }}
    >
      {children}
    </div>
  );
}

export function FeatureUnitLayout({
  header,
  image,
  features,
  cta,
}: {
  className?: string;
  header?: React.ReactNode;
  image?: React.ReactNode;
  features?: React.ReactNode;
  cta?: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-y-4">
      {header}
      <div className="grid lg:grid-cols-[45fr_55fr] gap-6">
        {image}
        <FeatureListGrid>{features}</FeatureListGrid>
      </div>
      <div className="self-center mt-4">{cta}</div>
    </div>
  );
}
