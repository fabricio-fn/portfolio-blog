import { getPostBySlug } from '@/../sanity/utils/sanityApi';
import Section from '@/components/Section';
import { formatDate } from '@/utils/formatDate';
import Image from 'next/image';
import Link from 'next/link';
import { PortableText } from '@portabletext/react';
import { portableTextComponents } from '@/components/PortableTextComponents';
import { Metadata } from 'next';

export async function generateMetadata({
  params
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const { slug } = params;

  const post = await getPostBySlug(slug);
  return {
    title: post.title
  };
}

export default async function Post({ params }: { params: { slug: string } }) {
  const { slug } = params;

  const post = await getPostBySlug(slug);

  return (
    <Section>
      <div className="flex flex-col gap-8 py-8">
        <div className="flex flex-col gap-4">
          <div className="flex gap-2 items-center">
            <Link href="/blog" className="text-lg text-primary underline">
              Voltar
            </Link>
          </div>

          <div className="flex flex-col gap-2 items-center">
            {post.mainImage && (
              <Image
                src={post.mainImage.asset.url}
                alt={post.mainImage.alt}
                width={800}
                height={500}
                className="object-cover rounded-lg min-w-full max-h-[80vh]"
              />
            )}

            {post.mainImage?.imageCredit && (
              <span className="text-sm">
                Font:{''}
                <Link
                  href={post.mainImage.imageCredit.imageSourceUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-primary underline"
                >
                  {post.mainImage.imageCredit.siteName}
                </Link>
              </span>
            )}
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <span className="text-base text-secondary">
            {formatDate(post.publishedAt)}
          </span>

          <h1 className="sm:text-6xl font-bold text-4xl">{post.title}</h1>
        </div>

        <div className="flex flex-col gap-8">
          <PortableText value={post.body} components={portableTextComponents} />
        </div>
      </div>
    </Section>
  );
}
