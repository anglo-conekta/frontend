import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Check } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export const VariablesCav41 = () => (
      <div className="w-full py-6">
    <div className="container mx-auto">
      <h3 className="py-8"></h3>

<Tabs defaultValue="jacobita" className="w-full">
  <TabsList>
    <TabsTrigger value="jacobita">Leopardus jacobita</TabsTrigger>
    <TabsTrigger value="condorito">Euathlus condorito</TabsTrigger>
  </TabsList>
  <TabsContent value="jacobita">
      <div className="grid container py-8 grid-cols-1 gap-8 items-center lg:grid-cols-2">
        <div className="flex gap-10 flex-col">
          <div className="flex gap-4 flex-col">
            <div className="flex gap-6 flex-col">
              <h4 className="tracking-tighter max-w-xl text-left font-regular">
                <i>Leopardus jacobita</i>
              </h4>
              <p className="text-lg leading-relaxed tracking-tight text-muted-foreground max-w-xl text-left">
              </p>
            </div>
          </div>
          <div className="grid lg:pl-6 grid-cols-1 sm:grid-cols-3 items-start lg:grid-cols-1 gap-6">
            <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
              <div className="flex flex-col gap-1">
                <p>En proceso de validación de metodología con autoridades correspondientes.
 
Una vez obtenida su validación serán visualizados en el Portal de Sustentabilidad Los Bronces Integrados.
 </p>
              </div>
            </div>

          </div>
        </div>
        <div className="bg-muted rounded-md aspect-video">
            <Image
            src="/gato.png"
            alt="placeholder hero"
            className="w-full rounded-md"
            width={600}
            height={500}
          />
                    <p className="text-center">Imagen a fines ilustrativos</p>
        </div>
      </div>
  </TabsContent>

  <TabsContent value="condorito">
   <div className="grid container py-8 grid-cols-1 gap-8 items-center lg:grid-cols-2">
        <div className="flex gap-10 flex-col">
          <div className="flex gap-4 flex-col">
            <div className="flex gap-6 flex-col">
              <h4 className="tracking-tighter max-w-xl text-left font-regular">
                <i>Euathlus condorito</i>
              </h4>
              <p className="text-lg leading-relaxed tracking-tight text-muted-foreground max-w-xl text-left">
              </p>
            </div>
          </div>
          <div className="grid lg:pl-6 grid-cols-1 sm:grid-cols-3 items-start lg:grid-cols-1 gap-6">
            <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
              <div className="flex flex-col gap-1">
<p>En proceso de validación de metodología con autoridades correspondientes.
 
Una vez obtenida su validación serán visualizados en el Portal de Sustentabilidad Los Bronces Integrados.
 </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-muted rounded-md aspect-video">
                      <Image
            src="/condorito.png"
            alt="placeholder hero"
            className="w-full rounded-md object-cover"
            width={600}
            height={500}
          />
          <p className="text-center">Imagen a fines ilustrativos</p>
        </div>
      </div>
  </TabsContent>
</Tabs>

<Separator></Separator>
</div>
</div>
);
