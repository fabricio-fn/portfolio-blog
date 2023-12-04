import { socialMediaData } from '@/data/socialMediaData';
import Link from 'next/link';

export default function SocialMediaLinks() {
  return (
    <ul className="flex gap-4">
      {socialMediaData.map((socialMedia, index) => (
        <li
          key={index}
          className="rounded-lg border-2 border-primary p-2 hover:rotate-360 duration-700"
        >
          <Link
            href={socialMedia.href}
            aria-label={socialMedia.label}
            target="_blank"
          >
            {socialMedia.icon}
          </Link>
        </li>
      ))}
    </ul>
  );
}
