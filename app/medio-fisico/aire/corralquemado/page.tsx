
import { ChartLaErmitaDiario } from "@/app/blocks/chartLaErmita"
import { ChartLaErmitaProm } from "@/app/blocks/chartLaErmitaProm"
import { ChartLaErmita25 } from "@/app/blocks/chartMp25"
import { ChartMP25diario } from "@/app/blocks/chartMP25diario"
import { HeroCQ } from "@/app/blocks/hero-cq"
import { Pcmps } from "@/app/blocks/pc-mps"


const CorralQuemado = () => {
    return (
        <div className="grid">
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
           <HeroCQ></HeroCQ>
           <section className="w-full py-6">
        <div className="container mx-auto">
          <div className="grid gap-8 lg:grid-cols-3">
            <h2 className="row-span-2 text-3xl font-semibold lg:text-5xl">
              Nuestro Compromiso
            </h2>
            <div>
              <h3 className="mb-2 text-xl font-medium">Objetivo de la Medición: </h3>
              <p className="text-muted-foreground">
                Monitorear concentraciones de Material Particulado Respirable (MP) y variables meteorológicas en el entorno de la estación.
              </p>
            </div>
            <div>
              <h3 className="mb-2 text-xl font-medium"> </h3>
              <p className="text-muted-foreground">
            Hacer seguimiento de las concentraciones de Material Particulado Respirable (MP) y variables meteorológicas para evitar afectaciones a las comunidades aledañas a la ruta G-21.
              </p>
            </div>
          </div>
        </div>
      </section>  
           <ChartLaErmitaDiario></ChartLaErmitaDiario>
          <ChartLaErmitaProm></ChartLaErmitaProm>
                               <ChartLaErmita25></ChartLaErmita25>
                               <ChartMP25diario></ChartMP25diario>
                     <Pcmps></Pcmps>
         </main>
      </div>
    )
}

export default CorralQuemado