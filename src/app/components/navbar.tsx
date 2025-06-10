import Button from "../ui/button";
import ArrowRight from "../ui/icons/arrow-right";
import Tag from "../ui/tag";

export default function Navbar({ className }: { className?: string }) {
  return (
    <div className={`flex items-center justify-between ${className}`}>
      <p className="text-2xl text-text-logo font-bold">SkillsCapital</p>
      <nav></nav>
      <Button>
        <Tag
          label={<p>Find Talent</p>}
          trailingIcon={
            <ArrowRight
              className="font-bold text-primary bg-secondary rounded-full p-2"
              width={36}
              height={32}
            />
          }
        />
      </Button>
    </div>
  );
}
