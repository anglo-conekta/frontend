
import { VariablesCav10 } from "@/app/blocks/cav10variables"
import CompromisoCav10 from "@/app/blocks/compcav10"
import { HeroCav10 } from "@/app/blocks/herocav10"
import { MapCav10 } from "@/components/ui/mapCav10"


const pageCav10 = () => {
    return (
        <div className="grid">
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
            <HeroCav10></HeroCav10>
            <CompromisoCav10></CompromisoCav10>
            <MapCav10></MapCav10>
            <VariablesCav10></VariablesCav10>
         </main>
      </div>
    )
}

export default pageCav10