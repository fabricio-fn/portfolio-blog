import { getPostBySlug } from '@/../sanity/utils/sanityApi';
import Image from 'next/image';

export default async function Post({ params }: { params: { slug: string } }) {
  const { slug } = params;

  const post = await getPostBySlug(slug);

  return (
    <div>
      <h1>{post.title}</h1>

      <li key={post._id}>
        {post.mainImage && (
          <Image
            src={post.mainImage.asset.url}
            alt={post.mainImage.alt}
            width={250}
            height={200}
            className="object-cover rouded-lg"
          />
        )}
      </li>
    </div>
  );
}
