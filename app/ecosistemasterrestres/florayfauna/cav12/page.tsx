
import { Cav12Metodologia } from "@/app/blocks/cav12metodologia"
import { CompromisoCav12 } from "@/app/blocks/compcav12"
import { HeroCav12 } from "@/app/blocks/herocav12"
import MapCav12 from "@/components/ui/mapCav12"


const pageCav12 = () => {
    return (
        <div className="grid">
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
            <HeroCav12></HeroCav12>
            <CompromisoCav12></CompromisoCav12>
            <MapCav12></MapCav12>
            <Cav12Metodologia></Cav12Metodologia>
         </main>
      </div>
    )
}

export default pageCav12