import Link from 'next/link';
import { getAllPosts } from '@/../sanity/utils/sanityApi';
import Image from 'next/image';

export default async function AllPosts() {
  const posts = await getAllPosts();

  return (
    <>
      <h2>Ultimos Posts</h2>

      <ul>
        {posts.map((post) => (
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
            <span>{post.publishedAt}</span>
            <h3>{post.title}</h3>
            <Link href={`/blog/${post.slug.current}`}>Ver post</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
