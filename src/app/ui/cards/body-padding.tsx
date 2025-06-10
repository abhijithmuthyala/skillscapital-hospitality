export default function BodyPaddingCard({
  children,
  className = "",
}: Readonly<{
  children: React.ReactNode;
  className?: string;
}>) {
  return (
    <div className={`px-4 md:px-16 xl:px-40 ${className}`}>{children}</div>
  );
}
