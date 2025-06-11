import Link from "next/link";
import { Children } from "react";
import BodyPaddingCard from "../ui/cards/body-padding";
import FooterLinksGrid from "../ui/layouts/footer-links-grid";
import { SocialLinks } from "./social-links";

export default function Footer() {
  return (
    <footer className="flex flex-col gap-12 text-primary-light bg-primary">
      <BodyPaddingCard className="py-16 flex flex-col gap-12">
        <div className="flex justify-between flex-wrap gap-x-12 gap-y-4 items-center">
          <Link href="/" className="font-bold">
            SkillsCapital.
          </Link>
          <div className="flex gap-x-8 items-center flex-wrap gap-y-2">
            <p>Follow our socials</p>
            <SocialLinks />
          </div>
        </div>
        <FooterLinksGrid>
          <FooterLinksGroup title="Quick Links">
            <Link href="/">SAP Talent Cloud</Link>
            <Link href="/">Enterprise Talent Cloud</Link>
            <Link href="/">AI Powered Vetting</Link>
            <Link href="/">Tech Talent Solution</Link>
            <Link href="/">About Us</Link>
          </FooterLinksGroup>
          <FooterLinksGroup title="Support">
            <Link href="/">Help</Link>
            <Link href="/">Privacy Policy</Link>
          </FooterLinksGroup>
          <FooterLinksGroup title="Get In Touch">
            <Link href="tel:+91123456789">+91 123456789</Link>
            <Link href="mailto:info@skillscapital.io">
              info@skillscapital.io
            </Link>
            <Link href="">Pune, India</Link>
          </FooterLinksGroup>
        </FooterLinksGrid>
      </BodyPaddingCard>
    </footer>
  );
}

function FooterLinksGroup({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode[];
}) {
  return (
    <div className="text-primary-light flex flex-col gap-4">
      <h4 className="text-xl font-semibold to-primary-light">{title}</h4>
      <ul className="flex flex-col gap-2 opacity-80">
        {Children.map(children, function renderLink(child, index) {
          return <li key={index}>{child}</li>;
        })}
      </ul>
    </div>
  );
}
