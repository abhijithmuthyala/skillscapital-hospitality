import Button from "../ui/button";
import ArrowRight from "../ui/icons/arrow-right";
import Tag from "../ui/tag";

export default function ButtonCTA({
  text = "Find Talent",
  className = "",
}: {
  text?: React.ReactNode;
  className?: string;
}) {
  return (
    <Button
      className={`text-primary bg-primary-light px-3 py-2 ${className}`}
      variant="outline"
    >
      <Tag
        label={<p>{text}</p>}
        trailingIcon={
          <ArrowRight
            className="font-bold text-primary bg-secondary rounded-full p-2"
            width={36}
            height={32}
          />
        }
      />
    </Button>
  );
}
