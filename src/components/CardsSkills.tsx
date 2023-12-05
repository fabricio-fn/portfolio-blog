import { skillsData } from '@/data/skillsData';
import Section from './Section';

export default function CardsSkills() {
  return (
    <Section>
      <h2 className="sm:text-6xl font-bold text-4xl">Conhecimentos</h2>

      <ul className="grid gap-4 grid-cols-auto-fit-150">
        {skillsData.map((skill, index) => (
          <li
            key={index}
            aria-label={skill.label}
            className="rounded-lg border-2 border-primary p-2 flex gap-2 flex-col items-center text-primary text-lg font-bold hover:rotate-360 duration-700"
          >
            {skill.icon}
            {skill.name}
          </li>
        ))}
      </ul>
    </Section>
  );
}
