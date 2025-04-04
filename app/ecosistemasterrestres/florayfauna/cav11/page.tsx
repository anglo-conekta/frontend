
import CompromisoCav11 from "@/app/blocks/compcav11"
import { HeroCav11 } from "@/app/blocks/herocav11"
import { TablaCav11 } from "@/app/blocks/tablacav11"
import { MapCav11 } from "@/components/ui/mapCav11"


const pageCav11 = () => {
    return (
        <div className="grid">
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
            <HeroCav11></HeroCav11>
            <CompromisoCav11></CompromisoCav11>
            <MapCav11></MapCav11>
            <TablaCav11></TablaCav11>
         </main>
      </div>
    )
}

export default pageCav11