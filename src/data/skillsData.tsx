import * as Icons from '@/icons';
import { ISkill } from '@/types/interfaces';

export const skillsData: ISkill[] = [
  { icon: <Icons.IconHTML />, name: 'HTML', label: 'Icone do HTML' },
  { icon: <Icons.IconCSS />, name: 'CSS', label: 'Icone do CSS' },
  {
    icon: <Icons.IconJavascript />,
    name: 'Javascript',
    label: 'Icone do Javascript'
  },
  {
    icon: <Icons.IconTypescript />,
    name: 'Typescript',
    label: 'Icone do Typescript'
  },
  { icon: <Icons.IconReact />, name: 'React', label: 'Icone do React' },
  { icon: <Icons.IconNext />, name: 'Next.Js', label: 'Icone do Next.Js' },
  { icon: <Icons.IconSass />, name: 'Sass', label: 'Icone do Sass' },
  {
    icon: <Icons.IconBootstrap />,
    name: 'Bootstrap',
    label: 'Icone do Bootstrap'
  },
  {
    icon: <Icons.IconTailwindcss />,
    name: 'Tailwindcss',
    label: 'Icone do Tailwind CSS'
  },
  {
    icon: <Icons.IconStyledComponents />,
    name: 'CSS-IN-JS',
    label: 'Icone do CSS-IN-JS'
  }
];
