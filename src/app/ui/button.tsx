"use client";

export default function Button({
  variant = "primary",
  className = "",
  children,
}: Readonly<{
  variant?: "primary" | "secondary" | "outline" | "text";
  className?: string;
  children?: React.ReactNode;
}>) {
  const variantToClass = {
    primary: "bg-cta text-primary",
    secondary: "bg-secondary",
    outline: "border-2 border-border bg-text-inverse",
    text: "bg-transparent",
  };
  className = `${variantToClass[variant]} ${className}`;

  return (
    <button className={`font-semibold rounded-4xl cursor-pointer ${className}`}>
      {children}
    </button>
  );
}
