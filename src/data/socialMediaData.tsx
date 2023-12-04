import * as Icons from '@/icons';
import { ISocialMedia } from '@/types/interfaces';

export const socialMediaData: ISocialMedia[] = [
  {
    icon: <Icons.IconGithub />,
    label: 'Link para o Github',
    href: 'https://github.com/fabricio-fn'
  },
  {
    icon: <Icons.IconLinkedin />,
    label: 'Link para o Linkedin',
    href: 'https://www.linkedin.com/in/fabriciofn/'
  },
  {
    icon: <Icons.IconGmail />,
    label: 'Link para o Gmail',
    href: 'mailto:contatofabricio.dev@gmail.com'
  }
];
