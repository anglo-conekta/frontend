
import { Cav1 } from "@/app/blocks/cav1"
import { HeroSulf } from "@/app/blocks/hero-sulf"
import { Pcmps } from "@/app/blocks/pc-mps"


const Sulfatos = () => {
    return (
        <div className="grid">
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
           <HeroSulf></HeroSulf>
      <section className="w-full py-6">
        <div className="container mx-auto">
          <div className="grid gap-8 lg:grid-cols-3">
            <h2 className="row-span-2 text-3xl font-semibold lg:text-5xl">
              Nuestro Compromiso
            </h2>
            <div>
              <h3 className="mb-2 text-xl font-medium">Objetivo de la Medición: </h3>
              <p className="text-muted-foreground">
              Monitorear la tasa de depositación de MPS en la cuenca alta del estero Yerba Loca.
              </p>
            </div>
            <div>
              <h3 className="mb-2 text-xl font-medium"> </h3>
              <p className="text-muted-foreground">
              Evitar la potencial afectación de las Formaciones Vegetales o Fauna relevante, producto de emisiones de Material particulado Sedimentable (MPS)
              </p>
            </div>
          </div>
        </div>
      </section>
           <Cav1></Cav1>
           <Pcmps></Pcmps>
         </main>
      </div>
    )
}

export default Sulfatos