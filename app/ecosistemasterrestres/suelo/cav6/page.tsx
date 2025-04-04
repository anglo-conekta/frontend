
import Cav6Indicadores from "@/app/blocks/cav6indicadores"
import Cav6Resultado from "@/app/blocks/cav6resultados"
import { VariablesCav6 } from "@/app/blocks/cav6variables"
import CompromisoCav6 from "@/app/blocks/compcav6"
import { HeroCav6 } from "@/app/blocks/herocav6"



const pageCav6 = () => {
    return (
        <div className="grid">
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
            <HeroCav6></HeroCav6>
            <CompromisoCav6></CompromisoCav6>
            <Cav6Indicadores></Cav6Indicadores>
            <Cav6Resultado></Cav6Resultado>
            <VariablesCav6></VariablesCav6>
         </main>
      </div>
    )
}

export default pageCav6