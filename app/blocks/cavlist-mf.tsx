import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";

export const CAVListMF = () => (
  <div className="w-full py-6">
    <div className="container mx-auto">
      <div className="flex w-full flex-col sm:flex-row sm:justify-between sm:items-center gap-8">
        <h4 className="text-3xl md:text-5xl tracking-tighter max-w-xl font-regular">
        </h4>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

        <div className="flex flex-col gap-4 hover:opacity-75 cursor-pointer">
                  <a href="/medio-fisico/agua">
          <div className="bg-muted rounded-md aspect-video">
            <Image
            src="/hh.png"
            alt="placeholder hero"
            className="w-full rounded-md object-cover"
            width={600}
            height={500}
          />
          </div>
          <div className="flex py-4 flex-row gap-4 items-center">
            <Badge>Agua</Badge>
          </div>
          <div className="flex flex-col gap-1">
            <h3 className="max-w-3xl text-2xl tracking-tight">
              Monitoreo de Aguas Subterráneas y Superficiales
            </h3>
            <p className="max-w-3xl text-muted-foreground text-base">
              
            </p>
          </div>
          </a>
        </div> 

        
        <div className="flex flex-col gap-4 hover:opacity-75 cursor-pointer">
          <a href="/medio-fisico/aire">
          <div className="bg-muted rounded-md aspect-video">
                        <Image
            src="/cc.png"
            alt="placeholder hero"
            className="w-full rounded-md object-cover"
            width={600}
            height={500}
          />
          </div>
          <div className="flex flex-row py-4 gap-4 items-center">
            <Badge>Aire y Metereología</Badge>
          </div>
          <div className="flex flex-col gap-1">
          <h3 className="max-w-3xl text-2xl tracking-tight">
              Monitoreo de Aire y Metereología
            </h3>
            <p className="max-w-3xl text-muted-foreground text-base">
              
            </p>
          </div>
          </a>
        </div>
                
        <div className="flex flex-col gap-4 hover:opacity-75 cursor-pointer">
          <a href="/medio-fisico/ruido">
          <div className="bg-muted rounded-md aspect-video">
                        <Image
            src="/vialidad1.png"
            alt="placeholder hero"
            className="w-full rounded-md object-cover"
            width={600}
            height={500}
          />
          </div>
          <div className="flex flex-row py-4 gap-4 items-center">
            <Badge>Ruido</Badge>
          </div>
          <div className="flex flex-col gap-1">
          <h3 className="max-w-3xl text-2xl tracking-tight">
              Monitoreo de Ruido
            </h3>
            <p className="max-w-3xl text-muted-foreground text-base">
              
            </p>
          </div>
          </a>
        </div>
                        
        <div className="flex flex-col gap-4 hover:opacity-75 cursor-pointer">
          <a href="/medio-fisico/glaciares">
          <div className="bg-muted rounded-md aspect-video">
                                    <Image
            src="/glaciares1.png"
            alt="placeholder hero"
            className="w-full rounded-md object-cover"
            width={600}
            height={400}
          />
          </div>
          <div className="flex flex-row gap-4 py-4 items-center">
            <Badge>Glaciares</Badge>
          </div>
          <div className="flex flex-col gap-1">
          <h3 className="max-w-3xl text-2xl tracking-tight">
              Monitoreo de Glaciares
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