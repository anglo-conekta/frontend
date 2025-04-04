
import { VariablesCav9 } from "@/app/blocks/cav9variables"
import CompromisoCav9 from "@/app/blocks/compcav9"
import { HeroCav9 } from "@/app/blocks/herocav9"

const pageCav9 = () => {
    return (
        <div className="grid">
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
            <HeroCav9></HeroCav9>
            <CompromisoCav9></CompromisoCav9>
            <VariablesCav9></VariablesCav9>
         </main>
      </div>
    )
}

export default pageCav9