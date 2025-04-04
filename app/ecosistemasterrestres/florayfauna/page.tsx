
import { PuestosFlora } from "@/app/blocks/cavlist-flora"
import HeroFlora from "@/app/blocks/heroflora"
import MapFlora from "@/components/ui/mapflora"
import { Separator } from "@/components/ui/separator"

const FlorayFauna = () => {
    return (
        <div className="grid">
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
           <HeroFlora></HeroFlora>
           <MapFlora></MapFlora>
           <PuestosFlora></PuestosFlora>
      <div className="w-full py-6">
    <div className="container mx-auto">
            <h4 className="py-6">En relación con las Medidas de Seguimiento de Mitigación asociados a Flora/Vegetación y Fauna en el área del STP, estas serán visualizadas en el Portal de Sustentabilidad Los Bronces Integrado, una vez que las obras sean ejecutadas en dicho sector.</h4>
                                 <Separator></Separator>
           </div>

           </div>

         </main>
      </div>
    )
}

export default FlorayFauna