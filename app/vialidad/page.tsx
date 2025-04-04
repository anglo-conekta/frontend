import MapVialidad from "@/components/ui/mapVialidad"
import { Cav28 } from "../blocks/cav28"
import { Cav43 } from "../blocks/cav43"
import HeroVialidad from "../blocks/hero-vialidad"
import CompVialidad from "../blocks/compvialidad"



const Vialidad = () => {
    return (
        <div className="grid">
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
           <HeroVialidad></HeroVialidad>
           <CompVialidad></CompVialidad>
          <MapVialidad></MapVialidad>
           <Cav28></Cav28>
           <Cav43></Cav43>
         </main>
      </div>
    )
}

export default Vialidad