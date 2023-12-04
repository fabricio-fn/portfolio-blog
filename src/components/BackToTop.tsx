'use client';

import { IconArrowUp } from '@/icons';
import { useEffect, useState } from 'react';

export default function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleWindowScroll = () => {
      if (window.scrollY > 500) setShow(true);
      else setShow(false);
    };

    window.addEventListener('scroll', handleWindowScroll);
    return () => window.removeEventListener('scroll', handleWindowScroll);
  }, []);

  const handleScrollTop = () => {
    window.scrollTo({ top: 0 });
  };

  return (
    <div
      className={`fixed bottom-4 right-4 hidden ${
        show ? 'md:flex' : 'md:hidden'
      }`}
    >
      <button
        aria-label="Voltar ao Topo"
        onClick={handleScrollTop}
        className="rounded-lg border-2 border-primary p-2 hover:rotate-360 duration-700"
      >
        <IconArrowUp />
      </button>
    </div>
  );
}
