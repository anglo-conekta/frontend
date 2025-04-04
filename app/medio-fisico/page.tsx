import MapMF from "@/components/ui/map-mf"
import { CAVListMF } from "../blocks/cavlist-mf"
import HeroMF from "../blocks/hero-mf"

const MediosFisicos = () => {
    return (
        <div className="grid">
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
           <HeroMF></HeroMF>
           <MapMF></MapMF>
           <CAVListMF></CAVListMF>
         </main>
      </div>
    )
}

export default MediosFisicos