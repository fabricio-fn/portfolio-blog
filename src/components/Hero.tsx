import Section from './Section';
import SocialMediaLinks from './SocialMediaLinks';

export default function Hero() {
  return (
    <Section id="inicio">
      <div className="flex flex-col gap-8 max-w-2xl">
        <h1 className="sm:text-6xl font-bold text-4xl">
          Hey, Eu me chamo Fabricio Nascimento,{' '}
          <strong className="text-primary font-bold">
            Desenvolvedor Fron-End
          </strong>
        </h1>

        <h2 className="sm:text-2xl font-normal text-base">
          Focado em criar interfaces eficientes e estilosas, Estou em constante
          evolução para aprimorar minhas habilidades, sempre disposto a
          trabalhar em equipe para alcançar os melhores resultados.
        </h2>

        <SocialMediaLinks />
      </div>
    </Section>
  );
}
