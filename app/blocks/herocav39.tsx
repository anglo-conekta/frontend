
import Image from "next/image";

export const HeroCav39 = () => (
    <section className="w-full py-6">
    <div className="container mx-auto">
        <div className="grid items-center gap-8 lg:grid-cols-2">
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <h1 className="my-6 text-pretty text-4xl lg:text-6xl">
             Suelo
            </h1>
            <h3>Susceptibilidad del terreno a la generación de remociones en masa</h3>
          </div>
          <Image
              src="/hero-cav39.png"
              className="w-full rounded-lg object-cover"
                alt="" width={600} height={600}
              />
        </div>
      </div>
    </section>

);