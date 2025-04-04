
import CompromisoAire from "@/app/blocks/compromiso-aire"
import HeroAire from "@/app/blocks/hero-aire"
import { PuestosAire } from "@/app/blocks/list-aire"
import { MapAire } from "@/components/ui/mapAire"

const Aire = () => {
    return (
        <div className="grid">
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
           <HeroAire></HeroAire>
           <CompromisoAire></CompromisoAire>
           <MapAire></MapAire>
           <PuestosAire></PuestosAire>
         </main>
      </div>
    )
}

export default Aire