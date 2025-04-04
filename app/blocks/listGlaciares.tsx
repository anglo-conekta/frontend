import { Badge } from "@/components/ui/badge";
import Image from "next/image";

export const PuestosGlaciares = () => (
  <div className="w-full py-6">
    <div className="container mx-auto">
      <div className="flex w-full flex-col sm:flex-row sm:justify-between sm:items-center gap-8">
        <h4 className="text-3xl md:text-5xl tracking-tighter max-w-xl font-regular">
        </h4>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <a href="/medio-fisico/glaciares/altarsur">
        <div className="flex flex-col gap-4 hover:opacity-75 cursor-pointer">
          <div className="bg-muted rounded-md aspect-video">         
         <Image
              src="/AltarSur1.png"
              className="w-full rounded-lg object-cover"
                alt="Altar Sur" width={600} height={300}
              /></div>
          <div className="flex flex-row gap-4 items-center">
            <Badge>Glaciares</Badge>
          </div>
          <div className="flex flex-col gap-1">
            <h3 className="max-w-3xl text-2xl tracking-tight">
              Altar Sur
            </h3>
            <p className="max-w-3xl text-muted-foreground text-base">
            </p>
          </div>
        </div></a>
        <a href="/medio-fisico/glaciares/delrincon">       
        <div className="flex flex-col gap-4 hover:opacity-75 cursor-pointer">
          <div className="bg-muted rounded-md aspect-video">
          <Image
              src="/DelRinconyAlto1.png"
              className="w-full rounded-lg object-cover"
                alt="Del Rincón y Rincón Alto " width={600} height={300}
              />
          </div>
          <div className="flex flex-row gap-4 items-center">
            <Badge>Glaciares</Badge>
          </div>
          <div className="flex flex-col gap-1">
          <h3 className="max-w-3xl text-2xl tracking-tight">
              Del Rincón y Rincón Alto 
            </h3>
            <p className="max-w-3xl text-muted-foreground text-base">
            </p>
          </div>
        </div></a> 
        <a href="/medio-fisico/glaciares/glaciar58">   
        <div className="flex flex-col gap-4 hover:opacity-75 cursor-pointer">
          <div className="bg-muted rounded-md aspect-video">
          <Image
              src="/glaciar581.png"
                alt="Glaciar 58" 
                className="w-full rounded-lg object-cover"
                width={600} height={300}
              />
          </div>
          <div className="flex flex-row gap-4 items-center">
            <Badge>Glaciares</Badge>
          </div>
          <div className="flex flex-col gap-1">
          <h3 className="max-w-3xl text-2xl tracking-tight">
              Glaciar 58
            </h3>
            <p className="max-w-3xl text-muted-foreground text-base">
            </p>
          </div>
        </div></a>
        <a href="/medio-fisico/glaciares/infiernillo">   
        <div className="flex flex-col gap-4 hover:opacity-75 cursor-pointer">
          <div className="bg-muted rounded-md aspect-video">
              <Image
              src="/Infiernillo1.png"
                alt="Infiernillo" 
                className="w-full rounded-lg object-cover"
                width={600} height={300}
              />
          </div>
          <div className="flex flex-row gap-4 items-center">
            <Badge>Glaciares</Badge>
          </div>
          <div className="flex flex-col gap-1">
          <h3 className="max-w-3xl text-2xl tracking-tight">
              Infiernillo
            </h3>
            <p className="max-w-3xl text-muted-foreground text-base">
            </p>
          </div>
        </div></a>


                <a href="/medio-fisico/glaciares/littoria">   
        <div className="flex flex-col gap-4 hover:opacity-75 cursor-pointer">
          <div className="bg-muted rounded-md aspect-video">
          <Image
              src="/Littoria1.png"
                alt="Littoria" 
                className="w-full rounded-lg object-cover"
                width={600} height={300}
              />
          </div>
          <div className="flex flex-row gap-4 items-center">
            <Badge>Glaciares</Badge>
          </div>
          <div className="flex flex-col gap-1">
          <h3 className="max-w-3xl text-2xl tracking-tight">
              Littoria
            </h3>
            <p className="max-w-3xl text-muted-foreground text-base">
            </p>
          </div>
        </div></a>

                        <a href="/medio-fisico/glaciares/losmachos">   
        <div className="flex flex-col gap-4 hover:opacity-75 cursor-pointer">
          <div className="bg-muted rounded-md aspect-video">
          <Image
              src="/LosMachos2.png"
                alt="Los Machhos" 
                className="w-full rounded-lg object-cover"
                width={600} height={300}
              />
          </div>
          <div className="flex flex-row gap-4 items-center">
            <Badge>Glaciares</Badge>
          </div>
          <div className="flex flex-col gap-1">
          <h3 className="max-w-3xl text-2xl tracking-tight">
              Los Machos
            </h3>
            <p className="max-w-3xl text-muted-foreground text-base">
            </p>
          </div>
        </div></a>

                                <a href="/medio-fisico/glaciares/monolito">   
        <div className="flex flex-col gap-4 hover:opacity-75 cursor-pointer">
          <div className="bg-muted rounded-md aspect-video">
          <Image
              src="/Monolito1.png"
                alt="Monolito" 
                className="w-full rounded-lg object-cover"
                width={600} height={300}
              />
          </div>
          <div className="flex flex-row gap-4 items-center">
            <Badge>Glaciares</Badge>
          </div>
          <div className="flex flex-col gap-1">
          <h3 className="max-w-3xl text-2xl tracking-tight">
              Monolito
            </h3>
            <p className="max-w-3xl text-muted-foreground text-base">
            </p>
          </div>
        </div></a>



                                                <a href="/medio-fisico/glaciares/olivaresalfa">   
        <div className="flex flex-col gap-4 hover:opacity-75 cursor-pointer">
          <div className="bg-muted rounded-md aspect-video">
          <Image
              src="/OlivaresAlfa1.png"
                alt="Olivares Alfa" 
                className="w-full rounded-lg object-cover"
                width={600} height={300}
              />
          </div>
          <div className="flex flex-row gap-4 items-center">
            <Badge>Glaciares</Badge>
          </div>
          <div className="flex flex-col gap-1">
          <h3 className="max-w-3xl text-2xl tracking-tight">
              Olivares Alfa
            </h3>
            <p className="max-w-3xl text-muted-foreground text-base">
            </p>
          </div>
        </div></a>

                                                        <a href="/medio-fisico/glaciares/lapalomaeste">   
        <div className="flex flex-col gap-4 hover:opacity-75 cursor-pointer">
          <div className="bg-muted rounded-md aspect-video">
          <Image
              src="/PalomaEste1.png"
                alt="La Paloma Este" 
                className="w-full rounded-lg object-cover"
                width={600} height={300}
              />
          </div>
          <div className="flex flex-row gap-4 items-center">
            <Badge>Glaciares</Badge>
          </div>
          <div className="flex flex-col gap-1">
          <h3 className="max-w-3xl text-2xl tracking-tight">
              La Paloma Este
            </h3>
            <p className="max-w-3xl text-muted-foreground text-base">
            </p>
          </div>
        </div></a>

         <a href="/medio-fisico/glaciares/lapalomaoeste">   
        <div className="flex flex-col gap-4 hover:opacity-75 cursor-pointer">
          <div className="bg-muted rounded-md aspect-video">
          <Image
              src="/PalomaOeste1.png"
                alt="La Paloma Oeste" 
                className="w-full rounded-lg object-cover"
                width={600} height={300}
              />
          </div>
          <div className="flex flex-row gap-4 items-center">
            <Badge>Glaciares</Badge>
          </div>
          <div className="flex flex-col gap-1">
          <h3 className="max-w-3xl text-2xl tracking-tight">
              La Paloma Oeste
            </h3>
            <p className="max-w-3xl text-muted-foreground text-base">
            </p>
          </div>
        </div></a>

         <a href="/medio-fisico/glaciares/rinconadaoeste">   
        <div className="flex flex-col gap-4 hover:opacity-75 cursor-pointer">
          <div className="bg-muted rounded-md aspect-video">
          <Image
              src="/RinconadaOeste1.png"
                alt="Rinconada Oeste" 
                className="w-full rounded-lg object-cover"
                width={600} height={300}
              />
          </div>
          <div className="flex flex-row gap-4 items-center">
            <Badge>Glaciares</Badge>
          </div>
          <div className="flex flex-col gap-1">
          <h3 className="max-w-3xl text-2xl tracking-tight">
              Rinconada Oeste
            </h3>
            <p className="max-w-3xl text-muted-foreground text-base">
            </p>
          </div>
        </div></a>

        <a href="/medio-fisico/glaciares/laperla">   
        <div className="flex flex-col gap-4 hover:opacity-75 cursor-pointer">
          <div className="bg-muted rounded-md aspect-video">
          <Image
              src="/pozoLaPerladef.png"
                alt="La Perla" 
                className="w-full rounded-lg object-cover"
                width={600} height={300}
              />
          </div>
          <div className="flex flex-row gap-4 items-center">
            <Badge>Glaciares</Badge>
          </div>
          <div className="flex flex-col gap-1">
          <h3 className="max-w-3xl text-2xl tracking-tight">
              La Perla
            </h3>
            <p className="max-w-3xl text-muted-foreground text-base">
            </p>
          </div>
        </div></a>

                                        <a href="/medio-fisico/glaciares/observatorio">   
        <div className="flex flex-col gap-4 hover:opacity-75 cursor-pointer">
          <div className="bg-muted rounded-md aspect-video">
          <Image
              src="/observatorioDef.png"
                alt="Observatorio" 
                className="w-full rounded-lg object-cover"
                width={600} height={300}
              />
          </div>
          <div className="flex flex-row gap-4 items-center">
            <Badge>Glaciares</Badge>
          </div>
          <div className="flex flex-col gap-1">
          <h3 className="max-w-3xl text-2xl tracking-tight">
              Observatorio
            </h3>
            <p className="max-w-3xl text-muted-foreground text-base">
            </p>
          </div>
        </div></a>



      </div>
    </div>
  </div>
);