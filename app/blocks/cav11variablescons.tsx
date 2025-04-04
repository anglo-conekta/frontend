import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Check } from "lucide-react";

export const VariablesCav11 = () => (
      <div className="w-full py-6">
    <div className="container mx-auto">
      <h3 className="py-8">Formaciones Vegetales Azonales</h3>
<Tabs defaultValue="deyeuxia" className="w-full">
  <TabsList>
    <TabsTrigger value="deyeuxia">Deyeuxia chrysostachya</TabsTrigger>
    <TabsTrigger value="barbata">Plantago barbata</TabsTrigger>
  </TabsList>
  <TabsContent value="deyeuxia">
      <div className="grid container py-8 grid-cols-1 gap-8 items-center lg:grid-cols-2">
        <div className="flex gap-10 flex-col">
          <div className="flex gap-4 flex-col">
            <div className="flex gap-6 flex-col">
              <h4 className="tracking-tighter max-w-xl text-left font-regular">
                <i>Deyeuxia chrysostachya</i>
              </h4>
              <p className="text-lg leading-relaxed tracking-tight text-muted-foreground max-w-xl text-left">
                Área STP
              </p>
            </div>
          </div>
          <div className="grid lg:pl-6 grid-cols-1 sm:grid-cols-3 items-start lg:grid-cols-1 gap-6">
            <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
              <div className="flex flex-col gap-1">
                <p>Estado de conservación</p>
                <p className="text-muted-foreground text-sm">
                   Sin clasificación
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
              <div className="flex flex-col gap-1">
                <p>Origen biogeográfico</p>
                <p className="text-muted-foreground text-sm">
                  Endémico
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
              <div className="flex flex-col gap-1">
                <p>Especimenes observados</p>
                <p className="text-muted-foreground text-sm">
                  Cantidad X en zona STP
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-muted rounded-md aspect-video">
            <Image
            src="/chrysostachya.png"
            alt="placeholder hero"
            className="w-full rounded-md object-cover"
            width={600}
            height={500}
          />
        </div>
      </div>
  </TabsContent>

  <TabsContent value="barbata">
   <div className="grid container py-8 grid-cols-1 gap-8 items-center lg:grid-cols-2">
        <div className="flex gap-10 flex-col">
          <div className="flex gap-4 flex-col">
            <div className="flex gap-6 flex-col">
              <h4 className="tracking-tighter max-w-xl text-left font-regular">
                <i>Plantago barbata</i>
              </h4>
              <p className="text-lg leading-relaxed tracking-tight text-muted-foreground max-w-xl text-left">
                Área STP
              </p>
            </div>
          </div>
          <div className="grid lg:pl-6 grid-cols-1 sm:grid-cols-3 items-start lg:grid-cols-1 gap-6">
            <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
              <div className="flex flex-col gap-1">
                <p>Estado de conservación</p>
                <p className="text-muted-foreground text-sm">
                   Sin clasificación
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
              <div className="flex flex-col gap-1">
                <p>Origen biogeográfico</p>
                <p className="text-muted-foreground text-sm">
                  Nativa
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
              <div className="flex flex-col gap-1">
                <p>Especimenes observados</p>
                <p className="text-muted-foreground text-sm">
                  Cantidad X en zona Área STP
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-muted rounded-md aspect-video">
                      <Image
            src="/barbata.png"
            alt="placeholder hero"
            className="w-full rounded-md object-cover"
            width={600}
            height={500}
          />
        </div>
      </div>
  </TabsContent>
</Tabs>

</div>
</div>
);
