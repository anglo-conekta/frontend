import { CavAguaIndicadores } from "@/app/blocks/cavAguaIndicadores"
import CompromisoAgua from "@/app/blocks/compromiso-agua"
import HeroAgua from "@/app/blocks/hero-agua"
import { MapAgua } from "@/components/ui/mapAgua"

const Agua = () => {
    return (
        <div className="grid">
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
           <HeroAgua></HeroAgua>
           <CompromisoAgua></CompromisoAgua>
           <MapAgua></MapAgua>
           <CavAguaIndicadores></CavAguaIndicadores>
         </main>
      </div>
    )
}

export default Agua