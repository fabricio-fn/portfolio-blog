import Image from 'next/image';
import Section from './Section';
import SocialMediaLinks from './SocialMediaLinks';
import Link from 'next/link';

export default function About() {
  return (
    <Section id="sobre">
      <h2 className="sm:text-6xl font-bold text-4xl">Sobre mim</h2>

      <div className="flex flex-col xl:flex-row gap-8 xl:justify-between">
        <div className="flex flex-col gap-4">
          <Image
            src="/i.jpg"
            alt="Foto de perfil"
            width={400}
            height={400}
            className="border-2 border-primary rounded-lg h-96 object-cover"
          />
          <SocialMediaLinks />
        </div>

        <div className="flex w-full xl:w-3/5 flex-col gap-4">
          <h3 className="sm:text-2xl font-normal text-base">
            Ola, me chamo Fabrício e tenho 22 anos, gosto de filmes, series,
            cultura pop no geral. Gosto de consumir conteúdo sobre
            desenvolvimento pessoal além de estudar e procurar sempre melhorar
            em tudo o que faço. Meu antigo emprego não tinha nada a ver com
            programação, eu trabalhei em uma fábrica de gelo a noite, e
            aproveitava o pouco tempo que me restava durante o dia para focar
            nos estudos. Atualmente foco em Desenvolvimento Front-End, mas estou
            sempre aberto a novas oportunidades e desafios. Sintase a vontade
            para entrar em contato comigo através do{' '}
            <Link
              href="https://www.linkedin.com/in/fabriciofn/"
              target="_blank"
              className="text-primary"
            >
              meu linkedin
            </Link>{' '}
            seja para trabalho ou apenas discutir ideias.
          </h3>
        </div>
      </div>
    </Section>
  );
}
