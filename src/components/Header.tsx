import Link from 'next/link';

export default function Header() {
  return (
    <header className="px-[5%] md:px-[15%] min-[2293px]:px-[5%] w-full z-10 max-w-[1920px] flex py-4 justify-between items-center bg-primary">
      <Link href="/" className="flex items-center text-xl font-bold">
        FN
      </Link>

      <nav className="flex items-center gap-4">
        <Link href="/" className="hidden font-medium sm:block">
          Portfolio
        </Link>
        <Link href="/blog" className="hidden font-medium sm:block">
          Blog
        </Link>
      </nav>
    </header>
  );
}
