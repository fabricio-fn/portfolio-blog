import { groq } from 'next-sanity';
import { client } from '../lib/client';
import { IPost } from '@/types/interfaces';

const postFields = `
  _id,
  title,
  slug,
  author->{name},
  mainImage{
    alt,
    asset->{url},
    imageCredit{
      siteName,
      imageSourceUrl
    }
  },
  categories->{title},
  publishedAt,
  body
`;

const getAllPostsQuery = groq`*[_type == "post"] { ${postFields} }`;

export const getAllPosts = async (): Promise<IPost[]> => {
  try {
    const posts = await client.fetch(getAllPostsQuery);
    return posts;
  } catch (error) {
    console.error('Error fetching posts from Sanity:', error);
    throw error;
  }
};

export const getPostBySlug = async (slug: string): Promise<IPost> => {
  const postQuery = groq`*[_type == "post" && slug.current == $slug] { ${postFields} }[0]`;

  try {
    const post = await client.fetch(postQuery, { slug });
    return post;
  } catch (error) {
    console.error('Error fetching post from Sanity:', error);
    throw error;
  }
};
