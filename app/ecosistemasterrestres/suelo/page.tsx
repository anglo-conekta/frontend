import { PuestosSuelo } from "@/app/blocks/cavlist-suelo"
import { CompromisoSuelo } from "@/app/blocks/compSuelo"
import HeroSuelo from "@/app/blocks/hero-suelo"
import { MapSuelo } from "@/components/ui/mapSuelo"



const  suelo = () => {
    return (
        <div className="grid">
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
           <HeroSuelo></HeroSuelo>
           <CompromisoSuelo></CompromisoSuelo>
           <MapSuelo></MapSuelo>
           <PuestosSuelo></PuestosSuelo>
         </main>
      </div>
    )
}

export default  suelo