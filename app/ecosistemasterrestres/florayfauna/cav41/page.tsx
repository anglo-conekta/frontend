
import { VariablesCav41 } from "@/app/blocks/cav41variables"
import CompromisoCav41 from "@/app/blocks/compcav41"
import { HeroCav41 } from "@/app/blocks/herocav41"
import MapCav12 from "@/components/ui/mapCav12"


const pageCav41 = () => {
    return (
        <div className="grid">
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
            <HeroCav41></HeroCav41>
            <CompromisoCav41></CompromisoCav41>
            <MapCav12></MapCav12>
            <VariablesCav41></VariablesCav41>
         </main>
      </div>
    )
}

export default pageCav41