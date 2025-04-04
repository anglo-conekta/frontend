
import Image from "next/image";

export const PuestosSuelo = () => (
  <div className="w-full py-6">
    <div className="container mx-auto">
      <div className="flex w-full flex-col gap-8">
        <h4 className="text-3xl md:text-5xl tracking-tighter font-regular">
        </h4>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
<div className="flex flex-col gap-4 hover:opacity-75 cursor-pointer">
        <a href="/ecosistemasterrestres/suelo/cav6">
          <div className="rounded-md">         
         <Image
              src="/geomorfologia.png"
                alt="" width={600} height={300} className="w-full rounded-lg object-cover"
              /></div> 
          <div className="flex flex-col gap-1">
            <h3 className="max-w-3xl text-2xl py-6 tracking-tight">
              Geomorfología
            </h3>
            <p className="max-w-3xl text-muted-foreground text-base">
            </p>
          </div>
          </a>
        </div>
<div className="flex flex-col gap-4 hover:opacity-75 cursor-pointer">
          <a href="/ecosistemasterrestres/suelo/cav37">
          <div className="rounded-md">
          <Image
              src="/monitoreo-erosion.jpg"
                alt="" width={600} height={300} className="w-full rounded-lg object-cover"
              />
          </div>
          <div className="flex flex-col gap-1">
          <h3 className="max-w-3xl text-2xl py-6 tracking-tight">
              Pendientes - Pedregosidad - Canalículos/Regueros
            </h3>
            <p className="max-w-3xl text-muted-foreground text-base">
            </p>
          </div>
          </a>
        </div>
<div className="flex flex-col gap-4 hover:opacity-75 cursor-pointer">
          <a href="/ecosistemasterrestres/suelo/cav39">
          <div className="rounded-md">
          <Image
              src="/cav39.jpg"
                alt="" width={600} height={300} className="w-full rounded-lg object-cover"
              />
          </div>
          <div className="flex flex-col gap-1">
          <h3 className="max-w-3xl text-2xl py-6 tracking-tight">
              Permafrost - Peligros de Remoción en Masa
            </h3>
            <p className="max-w-3xl text-muted-foreground text-base">
            </p>
          </div>
          </a>
        </div>
      </div>
    </div>
  </div>
);