import ButtonCTA from "./button-cta";

export default function Navbar({ className }: { className?: string }) {
  return (
    <div className={`flex items-center justify-between ${className}`}>
      <p className="text-2xl text-text-logo font-bold">SkillsCapital</p>
      <nav></nav>
      <ButtonCTA />
    </div>
  );
}
