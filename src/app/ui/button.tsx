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
    outline: "bg-transparent border-2 border-border",
    text: "bg-transparent",
  };
  className = `${variantToClass[variant]} ${className}`;

  return (
    <button
      className={`px-14 py-4 font-semibold rounded-4xl cursor-pointer ${className}`}
    >
      {children}
    </button>
  );
}
