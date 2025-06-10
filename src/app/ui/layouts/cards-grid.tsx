export default function CardsGrid({
  children,
  className = "",
  minGridWidth = 300,
}: {
  children: React.ReactNode;
  className?: string;
  minGridWidth?: number;
}) {
  return (
    <div
      className={`grid gap-6 ${className}`}
      style={{
        gridTemplateColumns: `repeat(auto-fit, minmax(${minGridWidth}px, 1fr))`,
      }}
    >
      {children}
    </div>
  );
}
