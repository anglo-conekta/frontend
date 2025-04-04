import { Badge } from "@/components/ui/badge";
import Image from "next/image";

export const CAVListET = () => (
  <div className="w-full py-6">
    <div className="container mx-auto">
      <div className="flex w-full flex-col sm:flex-row sm:justify-between sm:items-center gap-8">
        <h4 className="text-3xl md:text-5xl tracking-tighter max-w-xl font-regular">
        </h4>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

        <div className="flex flex-col gap-4 hover:opacity-75 cursor-pointer">
          <a href="/ecosistemasterrestres/suelo">
          <div className="bg-muted rounded-md aspect-video">
        <Image
              src="/cc.png"
              className="w-full rounded-lg object-cover"
                alt="Flora y Fauna" width={600} height={300}
              />
          </div>
          <div className="flex flex-row gap-4 py-4 items-center">
            <Badge>Suelo</Badge>
          </div>
          <div className="flex flex-col gap-1">
            <h3 className="max-w-3xl text-2xl tracking-tight">
              Monitoreo del Suelo
            </h3>
            <p className="max-w-3xl text-muted-foreground text-base">
              
            </p>
          </div>
          </a>
        </div> 

        <div className="flex flex-col gap-4 hover:opacity-75 cursor-pointer">

        <a href="/ecosistemasterrestres/florayfauna">
          <div className="bg-muted rounded-md aspect-video">
        <Image
              src="/ff-cav10.jpg"
              className="w-full rounded-lg object-cover"
                alt="Flora y Fauna" width={600} height={300}
              />
          </div>
          <div className="flex flex-row gap-4 py-4 items-center">
            <Badge>Flora y Fauna</Badge>
          </div>
          <div className="flex flex-col gap-1">
          <h3 className="max-w-3xl text-2xl tracking-tight">
              Monitoreo de Vegetación, Flora y Fauna
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