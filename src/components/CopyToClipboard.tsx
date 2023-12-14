'use client';

import { IconCheck, IconClipboard } from '@/icons';
import { useState } from 'react';

export default function CopyToClipboard({ code }: { code: string }) {
  const [isCopied, setIsCopied] = useState(false);

  const copyCode = () => {
    navigator.clipboard
      .writeText(code)
      .then(() => {
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 3000);
      })
      .catch((error) => {
        console.error('Error copying:', error);
      });
  };

  return (
    <button
      title="Copiar"
      aria-label="Copiar"
      onClick={copyCode}
      disabled={isCopied}
    >
      {isCopied ? <IconCheck /> : <IconClipboard />}
    </button>
  );
}
