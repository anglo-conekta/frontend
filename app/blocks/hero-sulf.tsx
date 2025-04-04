import { Badge } from "@/components/ui/badge";
import Image from "next/image";

export const HeroSulf = () => (

  <div className="w-full py-6">
    <div className="container mx-auto">
      <div className="grid grid-cols-1 gap-8 items-center lg:grid-cols-2">
        <div className="flex gap-4 flex-col">
          <div>
            <Badge variant="outline">Aire y Metereología</Badge>
          </div>
          <div className="flex gap-4 flex-col">
            <h1 className="text-5xl md:text-7xl max-w-lg tracking-tighter text-left font-regular">
              Sulfatos
            </h1>
            <p className="text-xl leading-relaxed tracking-tight text-muted-foreground max-w-md text-left">
            </p>
          </div>
        </div>
        <div className="bg-muted rounded-md aspect-square">
        <Image
              src="/sulfatos-def.jpg"
                alt="piedracarvajal" 
                className="w-full rounded-lg object-cover"
                width={600} height={600}
              />
        </div>
      </div>
    </div>
  </div>
);