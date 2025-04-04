
import VariablesCav39a from "@/app/blocks/cav39variables"
import CompromisoCav39 from "@/app/blocks/compcav39"
import { HeroCav39 } from "@/app/blocks/herocav39"

const pageCav39 = () => {
    return (
        <div className="grid">
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
            <HeroCav39></HeroCav39>
            <CompromisoCav39></CompromisoCav39>
            <VariablesCav39a></VariablesCav39a>
         </main>
      </div>
    )
}

export default pageCav39