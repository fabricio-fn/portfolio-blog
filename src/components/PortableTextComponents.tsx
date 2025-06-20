import Image from 'next/image';
import { urlForImage } from '../../sanity/lib/image';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { IPortableTextComponents } from '@/types/interfaces';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import CopyToClipboard from './CopyToClipboard';
import Link from 'next/link';

export const portableTextComponents: IPortableTextComponents = {
  image: ({ value }) => (
    <div className="flex flex-col gap-2 items-center">
      <Image
        src={urlForImage(value).url()}
        alt={value.alt || ''}
        loading="lazy"
        width={800}
        height={800}
        className="object-cover rounded-lg min-w-full h-auto"
      />

      {value?.imageCredit && (
        <span className="text-sm">
          Font:{' '}
          <Link
            href={value.imageCredit.imageSourceUrl}
            target="_blank"
            rel="noreferrer"
            className="text-primary underline"
          >
            {value.imageCredit.siteName}
          </Link>
        </span>
      )}
    </div>
  ),

  types: {
    code: ({ value }) => {
      return (
        <div className="w-full border-2 border-secondary rounded-lg overflow-hidden">
          <div className="border-secondary border-b-2 p-2 text-sm flex justify-between items-center">
            {value?.filename}
            <CopyToClipboard code={value.code} />
          </div>
          <SyntaxHighlighter language={value.language} style={dracula}>
            {value.code}
          </SyntaxHighlighter>
        </div>
      );
    }
  },

  block: {
    h2: ({ children }) => (
      <h2 className="text-3xl font-semibold">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-2xl font-semibold">{children} </h3>
    ),
    h4: ({ children }) => <h4 className="text-xl font-semibold">{children}</h4>,
    normal: ({ children }) => <p className="text-lg sm:text-2xl">{children}</p>,
    blockquote: ({ children }) => (
      <blockquote className="border-l-primary">{children}</blockquote>
    )
  },

  list: {
    bullet: ({ children }) => (
      <ul className="text-lg ml-8 list-disc">{children}</ul>
    ),
    number: ({ children }) => (
      <ol className="text-lg ml-8 list-decimal">{children}</ol>
    )
  },

  marks: {
    strong: ({ children }) => <strong>{children}</strong>,

    emphasis: ({ children }) => <em className="italic">{children}</em>,

    link: ({ value, children }) => {
      const target = (value?.href || '').startsWith('http')
        ? '_blank'
        : undefined;
      const relValue = target === '_blank' ? 'noindex nofollow' : undefined;

      return (
        <a
          href={value?.href}
          target={target}
          rel={relValue}
          className="text-primary underline"
        >
          <strong>{children}</strong>
        </a>
      );
    }
  }
};
