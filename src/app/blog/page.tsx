import Link from 'next/link';
import { getAllPosts } from '@/../sanity/utils/sanityApi';
import { Metadata } from 'next';
import { formatDate } from '@/utils/formatDate';
import Section from '@/components/Section';

export const metadata: Metadata = {
  title: 'Blog | Fabricio Nascimento - Desenvolvedor Fron-End',
  description:
    'Seja Bem-vindo(a) ao meu Blog pessoal Aqui eu compartilho alguns aprendizados que venho tendo no mundo da programação.'
};

export default async function Blog() {
  const posts = await getAllPosts();

  return (
    <Section>
      <div className="flex flex-col gap-8 md:max-w-4xl">
        <h1 className="text-4xl md:text-6xl xl:text-7xl font-bold">
          Seja Bem-vindo(a) ao meu{' '}
          <strong className="text-primary font-bold">Blog pessoal</strong>
        </h1>

        <p className="sm:text-2xl font-normal text-base">
          Aqui eu compartilho alguns aprendizados que venho tendo no mundo da
          programação.
        </p>
      </div>

      <h2 className="text-2xl font-bold">Todos os posts</h2>

      <ul className="grid gap-4 w-full sm:grid-cols-auto-fit-400">
        {posts.map((post) => (
          <li key={post._id}>
            <Link
              href={`/blog/${post.slug.current}`}
              className="min-h-[180px] border-2 border-secondary p-4 rounded-lg flex flex-col gap-4 hover:border-primary hover:shadow-2xl"
            >
              <h3 className="text-3xl font-bold">{post.title}</h3>

              <span className="text-base text-secondary">
                {formatDate(post.publishedAt)}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </Section>
  );
}
