import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { GlaciaresCharts } from "@/app/blocks/GlaciaresCharts"
import GlaciaresExp from "@/app/blocks/glaciaresExp"
import { GlaciaresVolumen } from "@/app/blocks/glaciaresVolumen"


const AltarSur = () => {
    return (
        <div className="grid">
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
  <div className="w-full py-6">
    <div className="container mx-auto">
      <div className="grid grid-cols-1 gap-8 items-center lg:grid-cols-2">
        <div className="flex gap-4 flex-col">
          <div>
            <Badge variant="outline">Glaciares</Badge>
          </div>
          <div className="flex gap-4 flex-col">
            <h1 className="text-5xl md:text-7xl max-w-lg tracking-tighter text-left font-regular">
              Altar Sur
            </h1>
            <p className="text-xl leading-relaxed tracking-tight text-muted-foreground max-w-md text-left">
              Glaciar Altar Sur, geográficamente se ubica en la cuenca alta del Estero Yerba Loca. Presenta orientación SO.
Se clasifica como glaciar cubierto.
            </p>
          </div>
        </div>
        <div className="rounded-md aspect-square">
        <Image
              src="/AltarSur.png" 
              className="w-full rounded-lg object-cover"
                alt="Altar Sur" width={600} height={600}
              />
        </div>
      </div>
    </div>
  </div>
           <GlaciaresExp></GlaciaresExp>
           <GlaciaresCharts></GlaciaresCharts>
           <GlaciaresVolumen></GlaciaresVolumen>
         </main>
      </div>
    )
}

export default AltarSur