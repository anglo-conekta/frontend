
import MapEt from "@/components/ui/mapEt"
import HeroET from "../blocks/hero-et"
import { CAVListET } from "../blocks/list-et"

const EcosistemasTerrestres = () => {
    return (
        <div className="grid">
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
           <HeroET></HeroET>
           <MapEt></MapEt>
           <CAVListET></CAVListET>
         </main>
      </div>
    )
}

export default EcosistemasTerrestres