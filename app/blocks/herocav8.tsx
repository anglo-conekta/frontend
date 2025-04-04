
import Image from "next/image";
export const HeroCav8 = () => (

    <section className="w-full py-6">
    <div className="container mx-auto">
        <div className="grid items-center gap-8 lg:grid-cols-2">
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <h1 className="my-6 text-pretty text-4xl lg:text-6xl">
             Seguimiento cuenca alta del estero Yerba Loca
            </h1>
            <h3>Ecosistemas Acuáticos Continentales</h3>
          </div>
                <Image src="/ff.png" className="w-full rounded-lg object-cover" alt={"hero"}  width={600}
            height={500}/>
        </div>
      </div>
    </section>
);