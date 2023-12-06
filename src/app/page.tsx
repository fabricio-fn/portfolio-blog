import Hero from '@/components/Hero';
import CardsSkills from '@/components/CardsSkills';
import About from '@/components/About';

export default function Home() {
  return (
    <main className="flex flex-col gap-16 lg:gap-0">
      <Hero />
      <About />
      <CardsSkills />
    </main>
  );
}
