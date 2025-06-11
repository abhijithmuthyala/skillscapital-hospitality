import Link from "next/link";

export function SocialLinks() {
  return (
    <ul className="flex gap-4 items-center flex-wrap">
      {socialLinks.map(function renderLink(link) {
        return (
          <li key={link.name}>
            <Link
              href={link.url}
              className="w-8 block aspect-square bg-no-repeat bg-center bg-cover"
              style={{
                backgroundImage: `url(/icons/socials/${link.icon}.svg)`,
              }}
            ></Link>
          </li>
        );
      })}
    </ul>
  );
}

const socialLinks = [
  {
    name: "Facebook",
    url: "https://www.facebook.com/",
    icon: "facebook",
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/",
    icon: "instagram",
  },
  {
    name: "Twitter",
    url: "https://www.twitter.com/",
    icon: "twitter",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/",
    icon: "linkedin",
  },
];
