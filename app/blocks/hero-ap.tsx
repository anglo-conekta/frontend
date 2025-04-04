import Image from "next/image";

const HeroAP = () => {
  return (
    <section className="w-full py-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid items-center gap-8 lg:grid-cols-2">
          <div className="flex flex-col items-center py-32 text-center lg:mx-auto lg:items-start lg:px-0 lg:text-left">
            <h1>Áreas protegidas</h1>
            <p className="mb-8 max-w-xl text-muted-foreground lg:text-xl">
            </p>
          </div>
                <Image src="/jj.png" className="w-full rounded-lg object-cover" alt={"hero"}  width={600}
            height={500}/>
            </div>
          </div>
    </section>
  );
};

export default HeroAP;
