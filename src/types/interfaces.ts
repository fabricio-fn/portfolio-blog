import {
  PortableTextBlockComponent,
  PortableTextListComponent,
  PortableTextMarkComponent
} from '@portabletext/react';
import { PortableTextBlock } from 'sanity';
import type { PortableTextListItemType } from '@portabletext/types';
import type { PortableTextBlockStyle } from '@portabletext/types';

export interface IPost {
  _id: string;
  title: string;
  slug: { current: string };
  mainImage: {
    alt: string;
    asset: { url: string };
    imageCredit?: {
      siteName: string;
      imageSourceUrl: string;
    };
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
    imageCredit?: {
      siteName: string;
      imageSourceUrl: string;
    };
  };
}

interface CodeComponentProps {
  value: {
    filename?: string;
    language: string;
    code: string;
  };
}

export interface IPortableTextComponents {
  image: React.FC<ImageComponentProps>;
  types: {
    code: React.FC<CodeComponentProps>;
  };
  block:
    | Record<PortableTextBlockStyle, PortableTextBlockComponent | undefined>
    | PortableTextBlockComponent;
  list:
    | Record<PortableTextListItemType, PortableTextListComponent | undefined>
    | PortableTextListComponent;
  marks: Record<string, PortableTextMarkComponent | undefined>;
}
