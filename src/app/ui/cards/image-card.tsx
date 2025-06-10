import Image from "next/image";
import React from "react";

export default function ImageCard({
  imageProps,
  title,
  description,
  action,
}: {
  imageProps: React.ComponentProps<typeof Image>;
  title: string;
  description: string;
  action: React.ReactElement;
}) {
  return (
    <article>
      <Image {...imageProps} alt={imageProps.alt ?? ""} className="max-h-24" />
      <header className="p-3 text-balance">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="opacity-80">{description}</p>
      </header>
      {action}
    </article>
  );
}
