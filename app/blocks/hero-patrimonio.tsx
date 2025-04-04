import Image from "next/image";

const HeroPatrimonio = () => {
  return (
        <section className="w-full py-6">
    <div className="container mx-auto">
        <div className="grid items-center gap-8 lg:grid-cols-2">
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <h1 className="my-6 text-pretty text-4xl lg:text-6xl">
              Patrimonio Cultural
            </h1>
            <h3>Arqueología</h3>
          </div>

          <Image
            src="/jj.png"
            alt="placeholder hero"
            className="w-full rounded-md object-cover"
            width={600}
            height={500}
          />
          </div>
      </div>
    </section>
  );
};

export default HeroPatrimonio;
