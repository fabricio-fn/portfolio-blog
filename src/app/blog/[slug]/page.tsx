import { getPostBySlug } from '@/../sanity/utils/sanityApi';
import { formatDate } from '@/utils/formatDate';
import Image from 'next/image';
import Link from 'next/link';

export default async function Post({ params }: { params: { slug: string } }) {
  const { slug } = params;

  const post = await getPostBySlug(slug);

  return (
    <section className="min-h-screen flex flex-col gap-10">
      <div className="flex flex-col gap-8 md:gap-16">
        <div className="flex flex-col gap-4">
          <div className="flex gap-2 items-center">
            <Link
              href="/blog"
              className="text-base text-secondary hover:text-primary"
            >
              Voltar
            </Link>
          </div>

          {post.mainImage && (
            <Image
              src="/teste.jpg"
              alt={post.mainImage.alt}
              width={800}
              height={500}
              className="object-cover rounded-lg min-w-full max-h-[80vh]"
            />
          )}
        </div>

        <div className="flex flex-col gap-4">
          <span className="text-base text-secondary">
            {formatDate(post.publishedAt)}
          </span>

          <h1 className="sm:text-6xl font-bold text-4xl">{post.title}</h1>
        </div>
      </div>
    </section>
  );
}
