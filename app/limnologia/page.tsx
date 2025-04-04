

import { CompromisoEAC } from "../blocks/compromiso-eac"
import HeroECA from "../blocks/heroECA"
import { MapECA } from "../blocks/mapECA"
import { VariablesECA8 } from "../blocks/variablesECA8"
import { VariablesECA9 } from "../blocks/variablesECA9"

const ECA = () => {
    return (
        <div className="grid">
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
           <HeroECA></HeroECA>
           <CompromisoEAC></CompromisoEAC>
           <MapECA></MapECA>
           <VariablesECA8></VariablesECA8>
           <VariablesECA9></VariablesECA9>
         </main>
      </div>
    )
}

export default ECA