import { OptionHTMLAttributes } from 'react';

interface SectionProps extends OptionHTMLAttributes<HTMLTableSectionElement> {
  children: React.ReactNode;
}

export default function Section({ children, ...props }: SectionProps) {
  return (
    <section
      {...props}
      className="px-[5%] md:px-[15%] min-[2293px]:px-[5%] min-h-screen flex flex-col gap-8 justify-center"
    >
      {children}
    </section>
  );
}
