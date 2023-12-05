import Image from 'next/image';
import Section from './Section';

export default function About() {
  return (
    <Section id="sobre">
      <h2 className="sm:text-6xl font-bold text-4xl">Sobre</h2>

      <div className="flex flex-col xl:flex-row gap-4 xl:justify-between">
        <Image
          src="/i.jpg"
          alt="Foto de perfil"
          width={400}
          height={400}
          className="border-2 border-primary rounded-lg h-96 object-cover"
        />

        <div className="flex w-full xl:w-2/4 flex-col gap-4">
          <h3 className="sm:text-2xl font-normal text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil hic
            fugiat recusandae, sit neque voluptas. Qui nesciunt ea maxime,
            itaque aut illum repudiandae nobis ex commodi natus eaque eveniet
            error.
          </h3>

          <h3 className="sm:text-2xl font-normal text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et esse
            tenetur ipsum voluptas impedit doloremque. Aspernatur iusto
            dignissimos numquam mollitia non ratione eveniet tenetur ipsum, est
            libero suscipit, aperiam doloremque.
          </h3>
        </div>
      </div>
    </Section>
  );
}
