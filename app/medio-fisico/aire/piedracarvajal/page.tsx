import { Cav1 } from "@/app/blocks/cav1"
import CompromisoPC from "@/app/blocks/compromiso-pc"
import { Hero3 } from "@/app/blocks/hero-pc"
import { Pcmps } from "@/app/blocks/pc-mps"


const PiedraCarvajal = () => {
    return (
        <div className="grid">
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
           <Hero3></Hero3>
           <CompromisoPC></CompromisoPC>
           <Cav1></Cav1>
           <Pcmps></Pcmps>
         </main>
      </div>
    )
}

export default PiedraCarvajal