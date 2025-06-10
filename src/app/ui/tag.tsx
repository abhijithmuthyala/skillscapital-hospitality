import React from "react";

type TagProps = {
  leadingIcon?: React.ReactElement;
  label: React.ReactNode;
  trailingIcon?: React.ReactElement;
  className?: string;
};

export default function Tag({
  leadingIcon,
  label,
  trailingIcon,
  className,
}: TagProps) {
  return (
    <div
      className={`flex items-center gap-2 rounded-full font-bold text-text-primary ${className}`}
    >
      {leadingIcon}
      <div>{label}</div>
      {trailingIcon}
    </div>
  );
}
