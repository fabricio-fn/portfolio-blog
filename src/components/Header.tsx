import Link from 'next/link';

export default function Header() {
  return (
    <header className="px-[5%] xl:px-52 max-w-screen-2xl w-full flex py-4 justify-center bg-primary">
      <nav className="flex items-center gap-4">
        <Link href="/" className="font-medium">
          Portfolio
        </Link>
        <Link href="/blog" className="font-medium">
          Blog
        </Link>
      </nav>
    </header>
  );
}
