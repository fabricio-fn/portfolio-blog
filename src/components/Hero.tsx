import Section from './Section';
import SocialMediaLinks from './SocialMediaLinks';

export default function Hero() {
  return (
    <Section id="inicio">
      <div className="flex flex-col gap-8  md:max-w-4xl">
        <h1 className="text-4xl md:text-6xl xl:text-7xl font-bold">
          Hey, Eu me chamo Fabricio Nascimento,{' '}
          <strong className="text-primary font-bold">Desenvolvedor Web</strong>
        </h1>

        <h2 className="sm:text-2xl font-normal text-base">
          Transformando ideias em código de maneira eficaz, criando experiências
          digitais funcionais e atraentes, explore meu portfólio e veja alguns
          dos meus projetos e habilidades.
        </h2>

        <SocialMediaLinks />
      </div>
    </Section>
  );
}
