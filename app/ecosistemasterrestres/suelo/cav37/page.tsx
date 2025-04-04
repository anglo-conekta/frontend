
import { Cav37Areas } from "@/app/blocks/cav37areas"
import { MapaCav37 } from "@/app/blocks/cav37mapa"
import { VariablesCav37 } from "@/app/blocks/cav37variables"
import CompromisoCav37 from "@/app/blocks/compcav37"
import { HeroCav37 } from "@/app/blocks/herocav37"


function pageCav37() {
    return (
        <div className="grid">
            <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
                <HeroCav37></HeroCav37>
                <CompromisoCav37></CompromisoCav37>
                <MapaCav37></MapaCav37>
                <Cav37Areas></Cav37Areas>
                <VariablesCav37></VariablesCav37>
            </main>
        </div>
    )
}

export default pageCav37