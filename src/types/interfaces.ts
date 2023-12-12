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

// PortableTextComponents

interface ImageComponentProps {
  value: {
    alt: string;
  };
}

interface CodeComponentProps {
  value: {
    filename?: string;
    language: string;
    code: string;
  };
}

interface BlockComponentProps {
  children: React.ReactNode;
}

interface LinkComponentProps {
  value: { href: string };
  children: React.ReactNode;
}

export interface IPortableTextComponents {
  image: React.FC<ImageComponentProps>;
  types: {
    code: React.FC<CodeComponentProps>;
  };
  block: {
    h2: React.FC<BlockComponentProps>;
    h3: React.FC<BlockComponentProps>;
    h4: React.FC<BlockComponentProps>;
    normal: React.FC<BlockComponentProps>;
    blockquote: React.FC<BlockComponentProps>;
  };
  list: {
    bullet: React.FC<BlockComponentProps>;
    number: React.FC<BlockComponentProps>;
  };
  marks: {
    strong: React.FC<BlockComponentProps>;
    emphasis: React.FC<BlockComponentProps>;
    link: React.FC<LinkComponentProps>;
  };
}
