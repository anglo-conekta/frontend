import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";

export const PuestosFlora = () => (
  <div className="w-full py-6">
    <div className="container mx-auto">
      <div className="flex w-full flex-col sm:flex-row sm:justify-between sm:items-center gap-8">
        <h4 className="text-3xl md:text-5xl tracking-tighter max-w-xl font-regular">
        </h4>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
<div className="flex flex-col gap-4 hover:opacity-75 cursor-pointer">
        <a href="/ecosistemasterrestres/florayfauna/cav10">
          <div className="rounded-md aspect-video">         
         <Image
              src="/portadaZonales.png"
                alt="" width={600} height={300}
                className="rounded-lg"
              /></div> 
          <div className="flex flex-row gap-4 py-2 items-center">
            <Badge>Flora y Vegetación</Badge>
          </div>
          <div className="flex flex-col gap-1">
            <h3 className="max-w-3xl text-2xl tracking-tight">
              Seguimiento Plantas - Zonal
            </h3>
            <p className="max-w-3xl text-muted-foreground text-base">
            </p>
          </div>
          </a>
        </div>
<div className="flex flex-col gap-4 hover:opacity-75 cursor-pointer">
          <a href="/ecosistemasterrestres/florayfauna/cav11">
          <div className="rounded-md aspect-video">
              <Image
              src="/portadaAzonales.png"
                alt="" width={600} height={300}
                className="rounded-lg"
              />
          </div>
          <div className="flex flex-row gap-4 py-2 items-center">
            <Badge>Flora y Vegetación</Badge>
          </div>
          <div className="flex flex-col gap-1">
          <h3 className="max-w-3xl text-2xl tracking-tight">
            Seguimiento Plantas - Azonal
            </h3>
            <p className="max-w-3xl text-muted-foreground text-base">
            </p>
          </div>
          </a>
        </div>
<div className="flex flex-col gap-4 hover:opacity-75 cursor-pointer">
          <a href="/ecosistemasterrestres/florayfauna/cav12">
          <div className="rounded-md aspect-video">
          <Image
              src="/gayi.png"
                alt="" width={600} height={300}
                className="rounded-lg"
              />
          </div>
          <div className="flex flex-row gap-4 py-2 items-center">
          <Badge>Fauna</Badge>
          </div>
          <div className="flex flex-col gap-1">
          <h3 className="max-w-3xl text-2xl tracking-tight">
           Animales Silvestres
            </h3>
            <p className="max-w-3xl text-muted-foreground text-base">
            </p>
          </div>
          </a>
        </div>
<div className="flex flex-col gap-4 hover:opacity-75 cursor-pointer">
          <a href="/ecosistemasterrestres/florayfauna/cav41">
          <div className="rounded-md aspect-video">
          <Image
              src="/condorito.png"
                alt="" width={600} height={300}
                className="rounded-lg"
              />
          </div>
          <div className="flex flex-row gap-6 py-2 items-center">
            <Badge>Fauna</Badge>
          </div>
          <div className="flex flex-col gap-1">
          <h3 className="max-w-3xl text-2xl tracking-tight">
            Monitoreo de <i>Leopardus jacobita </i> y <i>Euathlus condorito</i>
            </h3>
            <p className="max-w-3xl text-muted-foreground text-base">
            </p>
          </div>
          </a>
        </div>
      </div>
      <Separator></Separator>
    </div>
  </div>
);