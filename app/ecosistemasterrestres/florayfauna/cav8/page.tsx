
import { VariablesCav8 } from "@/app/blocks/cav8variables"
import CompromisoCav8 from "@/app/blocks/compcav8"
import { HeroCav8 } from "@/app/blocks/herocav8"
import { MainMap } from "@/app/blocks/interactivemapppal"


const pageCav8 = () => {
    return (
        <div className="grid">
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
            <HeroCav8></HeroCav8>
            <CompromisoCav8></CompromisoCav8>
            <MainMap></MainMap>
            <VariablesCav8></VariablesCav8>
         </main>
      </div>
    )
}

export default pageCav8