import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import './globals.css';
import BackToTop from '@/components/BackToTop';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '700', '900']
});

export const metadata: Metadata = {
  title: 'Portfólio | Fabricio Nascimento - Desenvolvedor Fron-End',
  description:
    'Transformando ideias em código de maneira eficaz, criando experiências digitais funcionais e atraentes, explore meu portfólio e veja alguns dos meus projetos e habilidades.'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${roboto.className}`}>
      <body className="w-full block mx-auto max-w-screen-2xl bg-light dark:bg-dark text-dark dark:text-light">
        <Header />
        {children}
        <BackToTop />
        <Footer />
      </body>
    </html>
  );
}
