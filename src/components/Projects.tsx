import Link from 'next/link';
import Section from './Section';
import Image from 'next/image';
import { projectsData } from '@/data/projectsData';

export default function Projects() {
  return (
    <Section>
      <h2 className="sm:text-6xl font-bold text-4xl">Projetos</h2>

      <ul className="grid gap-4 w-full sm:grid-cols-auto-fit-400">
        {projectsData.map((project, index) => (
          <li key={index} className="flex flex-col gap-4">
            <Image
              src={project.image}
              alt="Imagem do projeto"
              width={500}
              height={400}
              className="w-full object-cover"
            />
            <h3 className="text-lg px-2">{project.description}</h3>

            <div className="p-2 flex gap-4">
              <Link
                href={project.link}
                target="_blank"
                className="underline text-lg text-primary rounded-lg"
              >
                Ver site
              </Link>
              <Link
                href={project.code}
                target="_blank"
                className="underline text-lg text-primary rounded-lg"
              >
                Ver código
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}
