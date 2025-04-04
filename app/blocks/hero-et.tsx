import Image from "next/image";

const HeroET = () => {
  return (
    <section className="w-full py-6">
      <div className="container mx-auto">
        <div className="grid items-center gap-8 lg:grid-cols-2">
          <div className="flex flex-col items-center py-32 text-center lg:mx-auto lg:items-start lg:px-0 lg:text-left">
            <h1>Ecosistemas Terrestres</h1>
          </div>
                <Image src="/jj.png" className="w-full rounded-lg object-cover" alt={"hero"}  width={600}
            height={500}/>
        </div>
      </div>
    </section>
  );
};


export default HeroET;
