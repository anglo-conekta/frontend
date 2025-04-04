import Image from "next/image";

const HeroAgua = () => {
  return (
    <section className="w-full py-6">
    <div className="container mx-auto">
        <div className="grid items-center gap-8 lg:grid-cols-2">
          <div className="flex flex-col items-center py-32 text-center lg:items-start lg:text-left">
            <h1 className="my-6 text-pretty text-4xl lg:text-6xl">
              Monitoreo de Aguas Superficiales y Subterráneas
            </h1>
          </div>
          <Image
            src="/heroAgua.png"
            alt="Monotoreo de Hidrogeología"
            className="w-full rounded-lg object-cover"
            width={600}
            height={500}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroAgua;
