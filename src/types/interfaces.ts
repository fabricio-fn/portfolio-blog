import { PortableTextBlock } from 'sanity';

export interface IPost {
  _id: string;
  title: string;
  slug: { current: string };
  mainImage: {
    alt: string;
    asset: { url: string };
  };
  publishedAt: string;
  body: PortableTextBlock[];
}

export interface ISkill {
  icon: React.ReactElement;
  label: string;
  name: string;
}

export interface ISocialMedia {
  icon: React.ReactElement;
  label: string;
  href: string;
}

export interface IProjects {
  description: string;
  image: string;
  link: string;
  code: string;
}
