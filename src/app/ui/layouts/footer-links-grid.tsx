export default function FooterLinksGrid({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-x-12 gap-y-8">
      {children}
    </div>
  );
}
