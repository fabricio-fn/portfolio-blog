import { IconHeart } from '@/icons';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="flex flex-col gap-2 py-4 justify-center items-center">
      <h3 className="text-sm">Todos os direitos reservados © 2023</h3>

      <h3 className="text-sm flex gap-2">
        Feito com
        <IconHeart />
        <Link
          href="https://www.linkedin.com/in/fabriciofn/"
          className="text-primary"
        >
          Fabricio Nascimento
        </Link>
      </h3>
    </footer>
  );
}
