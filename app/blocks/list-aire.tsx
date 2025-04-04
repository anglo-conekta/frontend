import { Badge } from "@/components/ui/badge";
import Image from "next/image";

export const PuestosAire = () => (
  <div className="w-full py-6">
    <div className="container mx-auto">
      <div className="flex w-full flex-col sm:flex-row sm:justify-between sm:items-center gap-8">
        <h4 className="text-3xl md:text-5xl tracking-tighter max-w-xl font-regular">
        </h4>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <a href="/medio-fisico/aire/piedracarvajal">
        <div className="flex flex-col gap-4 hover:opacity-75 cursor-pointer">
          <div className="bg-muted rounded-md aspect-video">         
         <Image
              src="/piedracarvajal-portrait.png"
              className="w-full rounded-lg object-cover"
                alt="piedracarvajal" width={600} height={300}
              /></div>
          <div className="flex flex-row gap-4 items-center">
            <Badge>Aire y Metereología</Badge>
          </div>
          <div className="flex flex-col gap-1">
            <h3 className="max-w-3xl text-2xl tracking-tight">
              Piedra Carvajal
            </h3>
            <p className="max-w-3xl text-muted-foreground text-base">
                            Implementación del monitoreo de Depositación de Material Particulado Sedimentable (MPS) y meteorología.
            </p>
          </div>
        </div></a>
        <a href="/medio-fisico/aire/sulfatos">       
        <div className="flex flex-col gap-4 hover:opacity-75 cursor-pointer">
          <div className="bg-muted rounded-md aspect-video">
          <Image
              src="/sulfatos-portrait.png"
              className="w-full rounded-lg object-cover"
                alt="sulfatos" width={600} height={300}
              />
          </div>
          <div className="flex flex-row gap-4 items-center">
            <Badge>Aire y Metereología</Badge>
          </div>
          <div className="flex flex-col gap-1">
          <h3 className="max-w-3xl text-2xl tracking-tight">
              Sulfatos
            </h3>
            <p className="max-w-3xl text-muted-foreground text-base">
                            Implementación del monitoreo de Depositación de Material Particulado Sedimentable (MPS) y meteorología.
            </p>
          </div>
        </div></a> 
        <a href="/medio-fisico/aire/lapaloma">   
        <div className="flex flex-col gap-4 hover:opacity-75 cursor-pointer">
          <div className="bg-muted rounded-md aspect-video">
          <Image
              src="/lapaloma-portrait.png"
                alt="la paloma" 
                className="w-full rounded-lg object-cover"
                width={600} height={300}
              />
          </div>
          <div className="flex flex-row gap-4 items-center">
            <Badge>Aire y Metereología</Badge>
          </div>
          <div className="flex flex-col gap-1">
          <h3 className="max-w-3xl text-2xl tracking-tight">
              La Paloma
            </h3>
            <p className="max-w-3xl text-muted-foreground text-base">
              Implementación del monitoreo de Depositación de Material Particulado Sedimentable (MPS) y meteorología.
            </p>
          </div>
        </div></a>
        <a href="/medio-fisico/aire/laermita">   
        <div className="flex flex-col gap-4 hover:opacity-75 cursor-pointer">
          <div className="bg-muted rounded-md aspect-video">
              <Image
              src="/lahermita-portrait.png"
                alt="La Ermita" 
                className="w-full rounded-lg object-cover"
                width={600} height={300}
              />
          </div>
          <div className="flex flex-row gap-4 items-center">
            <Badge>Aire y Metereología</Badge>
          </div>
          <div className="flex flex-col gap-1">
          <h3 className="max-w-3xl text-2xl tracking-tight">
              La Ermita
            </h3>
            <p className="max-w-3xl text-muted-foreground text-base">
            Monitoreo de Material Particulado Respirable (MP10), Respirable Fino (MP2.5) y meteorología.            </p>
          </div>
        </div></a>
        <a href="/medio-fisico/aire/corralquemado">   
        <div className="flex flex-col gap-4 hover:opacity-75 cursor-pointer">
          <div className="bg-muted rounded-md aspect-video">
          <Image
              src="/corralquemado-portrait.png"
                alt="Corral Quemado" 
                className="w-full rounded-lg object-cover"
                width={600} height={300}
              />
          </div>
          <div className="flex flex-row gap-4 items-center">
            <Badge>Aire y Metereología</Badge>
          </div>
          <div className="flex flex-col gap-1">
          <h3 className="max-w-3xl text-2xl tracking-tight">
              Corral Quemado
            </h3>
            <p className="max-w-3xl text-muted-foreground text-base">
              Monitoreo de Material Particulado Respirable (MP10), Respirable Fino (MP2.5) y meteorología.
            </p>
          </div>
        </div></a>
      </div>
    </div>
  </div>
);