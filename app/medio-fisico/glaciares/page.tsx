import CompromisoGlaciares from "@/app/blocks/compglaciares"
import HeroGlaciares from "@/app/blocks/heroglaciares"
import { PuestosGlaciares } from "@/app/blocks/listGlaciares"
import { MapGlaciares } from "@/components/ui/mapGlaciares"

const Glaciares = () => {
    return (
        <div className="grid">
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
           <HeroGlaciares></HeroGlaciares>
           <CompromisoGlaciares></CompromisoGlaciares>
           <MapGlaciares></MapGlaciares>
           <PuestosGlaciares></PuestosGlaciares>
         </main>
      </div>
    )
}

export default Glaciares