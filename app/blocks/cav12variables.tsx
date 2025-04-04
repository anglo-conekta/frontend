import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Check } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export const VariablesCav12 = () => (
      <div className="w-full py-6">
    <div className="container mx-auto max-w-6xl">
      <h3 className="py-8">Clase Reptilia</h3>
<Tabs defaultValue="belli" className="w-full">
  <TabsList>
    <TabsTrigger value="belli">Liolaemus bellii</TabsTrigger>
    <TabsTrigger value="lagartija">Liolaemus pseudolemniscatus</TabsTrigger>
    <TabsTrigger value="leopardinus">Liolaemus leopardinus</TabsTrigger>
    <TabsTrigger value="nigroviridis">Liolaemus nigroviridis</TabsTrigger>
    <TabsTrigger value="darwini">Phymaturus darwini</TabsTrigger>
  </TabsList>
  <TabsContent value="belli">
      <div className="grid container py-8 grid-cols-1 gap-8 items-center lg:grid-cols-2">
        <div className="flex gap-10 flex-col">
          <div className="flex gap-4 flex-col">
            <div className="flex gap-6 flex-col">
              <h4 className="tracking-tighter max-w-xl text-left font-regular">
                <i>Liolaemus bellii</i> (lagartija parda de Santiago)
              </h4>
              <p className="text-lg leading-relaxed tracking-tight text-muted-foreground max-w-xl text-left">
                Área Mina Subterránea
              </p>
            </div>
          </div>
          <div className="grid lg:pl-6 grid-cols-1 sm:grid-cols-3 items-start lg:grid-cols-1 gap-6">
            <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
              <div className="flex flex-col gap-1">
                <p>Estado de conservación</p>
                <p className="text-muted-foreground text-sm">
                   Casi Amenazada
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
                  Cantidad X en zona Área Mina Subterránea.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-muted rounded-md aspect-video">
            <Image
            src="/belli.png"
            alt="placeholder hero"
            className="w-full rounded-md object-cover"
            width={600}
            height={500}
          />
        </div>
      </div>
  </TabsContent>

  <TabsContent value="lagartija">
   <div className="grid container py-8 grid-cols-1 gap-8 items-center lg:grid-cols-2">
        <div className="flex gap-10 flex-col">
          <div className="flex gap-4 flex-col">
            <div className="flex gap-6 flex-col">
              <h4 className="tracking-tighter max-w-xl text-left font-regular">
                <i>Liolaemus pseudolemniscatus</i> (lagartija pseudolemniscata)
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
                   Fuera de peligro
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
                  Cantidad X en zona Área STP
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-muted rounded-md aspect-video">
                      <Image
            src="/lagartija.png"
            alt="placeholder hero"
            className="w-full rounded-md object-cover"
            width={600}
            height={500}
          />
        </div>
      </div>
  </TabsContent>
    <TabsContent value="leopardinus">
   <div className="grid container py-8 grid-cols-1 gap-8 items-center lg:grid-cols-2">
        <div className="flex gap-10 flex-col">
          <div className="flex gap-4 flex-col">
            <div className="flex gap-6 flex-col">
              <h4 className="tracking-tighter max-w-xl text-left font-regular">
                <i>Liolaemus leopardinus</i> (lagarto leopardo)
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
                   En peligro de extinción
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
              <div className="flex flex-col gap-1">
                <p>Origen biogeográfico</p>
                <p className="text-muted-foreground text-sm">
                  Nativo
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
              <div className="flex flex-col gap-1">
                <p>Especímenes observados</p>
                <p className="text-muted-foreground text-sm">
                  Cantidad X zona STP
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-muted rounded-md aspect-video">
                                <Image
            src="/leopardinus.png"
            alt="placeholder hero"
            className="w-full rounded-md object-cover"
            width={600}
            height={500}
          />
        </div>
      </div>
  </TabsContent>
      <TabsContent value="nigroviridis">
   <div className="grid container py-8 grid-cols-1 gap-8 items-center lg:grid-cols-2">
        <div className="flex gap-10 flex-col">
          <div className="flex gap-4 flex-col">
            <div className="flex gap-6 flex-col">
              <h4 className="tracking-tighter max-w-xl text-left font-regular">
                <i>Liolaemus nigroviridis</i> (lagarto negro-verdosa)
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
                   Preocupación menor
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
                <p>Especímenes observados</p>
                <p className="text-muted-foreground text-sm">
                  Cantidad X en Área STP
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-muted rounded-md aspect-video">
                                          <Image
            src="/nigroviridis.png"
            alt="placeholder hero"
            className="w-full rounded-md object-cover"
            width={600}
            height={500}
          />
        </div>
      </div>
  </TabsContent>
     <TabsContent value="darwini">
   <div className="grid container py-8 grid-cols-1 gap-8 items-center lg:grid-cols-2">
        <div className="flex gap-10 flex-col">
          <div className="flex gap-4 flex-col">
            <div className="flex gap-6 flex-col">
              <h4 className="tracking-tighter max-w-xl text-left font-regular">
                <i>Phymaturus darwini</i> (matuasto de Darwin)
              </h4>
              <p className="text-lg leading-relaxed tracking-tight text-muted-foreground max-w-xl text-left">
                Área Los Bronces
              </p>
            </div>
          </div>
          <div className="grid lg:pl-6 grid-cols-1 sm:grid-cols-3 items-start lg:grid-cols-1 gap-6">
            <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
              <div className="flex flex-col gap-1">
                <p>Estado de conservación</p>
                <p className="text-muted-foreground text-sm">
                   En peligro de extinción
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
                <p>Especímenes observados</p>
                <p className="text-muted-foreground text-sm">
                  Cantidad X en Área Los Bronces
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-muted rounded-md aspect-video">
                                          <Image
            src="/darwini.png"
            alt="placeholder hero"
            className="w-full rounded-md object-cover"
            width={600}
            height={500}
          />
        </div>
      </div>
  </TabsContent>
</Tabs>




      <h3 className="py-8">Clase Aves</h3>
<Tabs defaultValue="gayi" className="w-full">
  <TabsList>
    <TabsTrigger value="gayi">Attagis gayi</TabsTrigger>
    <TabsTrigger value="aguila">Geranoaetus melanoleucus</TabsTrigger>
    <TabsTrigger value="picaflor">Oreotrochilus leucopleurus</TabsTrigger>
    <TabsTrigger value="falco">Falco sparverius</TabsTrigger>
    <TabsTrigger value="vultur">Vultur gryphus</TabsTrigger>
    <TabsTrigger value="buho">Bubo magellanicus</TabsTrigger>
  </TabsList>
  <TabsContent value="gayi">
      <div className="grid container py-8 grid-cols-1 gap-8 items-center lg:grid-cols-2">
        <div className="flex gap-10 flex-col">
          <div className="flex gap-4 flex-col">
            <div className="flex gap-6 flex-col">
              <h4 className="tracking-tighter max-w-xl text-left font-regular">
                <i>Attagis gayi</i> (perdicita cordillerana)
              </h4>
              <p className="text-lg leading-relaxed tracking-tight text-muted-foreground max-w-xl text-left">
                Área Mina Subterránea
              </p>
            </div>
          </div>
          <div className="grid lg:pl-6 grid-cols-1 sm:grid-cols-3 items-start lg:grid-cols-1 gap-6">
            <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
              <div className="flex flex-col gap-1">
                <p>Estado de conservación</p>
                <p className="text-muted-foreground text-sm">
                   Preocupación menor
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
                  Cantidad X en zona Área Mina Subterránea.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-muted rounded-md aspect-video">
            <Image
            src="/gayi.png"
            alt="placeholder hero"
            className="w-full rounded-md object-cover"
            width={600}
            height={500}
          />
        </div>
      </div>
  </TabsContent>

  <TabsContent value="aguila">
   <div className="grid container py-8 grid-cols-1 gap-8 items-center lg:grid-cols-2">
        <div className="flex gap-10 flex-col">
          <div className="flex gap-4 flex-col">
            <div className="flex gap-6 flex-col">
              <h4 className="tracking-tighter max-w-xl text-left font-regular">
                <i>Geranoaetus melanoleucus</i> (águila)
              </h4>
              <p className="text-lg leading-relaxed tracking-tight text-muted-foreground max-w-xl text-left">
                Área Mina Subterránea
              </p>
            </div>
          </div>
          <div className="grid lg:pl-6 grid-cols-1 sm:grid-cols-3 items-start lg:grid-cols-1 gap-6">
            <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
              <div className="flex flex-col gap-1">
                <p>Estado de conservación</p>
                <p className="text-muted-foreground text-sm">
                   Sin Categoría
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
                  Cantidad X en zona Mina Subterránea
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-muted rounded-md aspect-video">
                      <Image
            src="/aguila.png"
            alt="placeholder hero"
            className="w-full rounded-md object-cover"
            width={600}
            height={500}
          />
        </div>
      </div>
  </TabsContent>
    <TabsContent value="picaflor">
   <div className="grid container py-8 grid-cols-1 gap-8 items-center lg:grid-cols-2">
        <div className="flex gap-10 flex-col">
          <div className="flex gap-4 flex-col">
            <div className="flex gap-6 flex-col">
              <h4 className="tracking-tighter max-w-xl text-left font-regular">
                <i>Oreotrochilus leucopleurus</i> (picaflor cordillerano)
              </h4>
              <p className="text-lg leading-relaxed tracking-tight text-muted-foreground max-w-xl text-left">
                Área Mina Subterránea
              </p>
            </div>
          </div>
          <div className="grid lg:pl-6 grid-cols-1 sm:grid-cols-3 items-start lg:grid-cols-1 gap-6">
            <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
              <div className="flex flex-col gap-1">
                <p>Estado de conservación</p>
                <p className="text-muted-foreground text-sm">
                   Sin categoría
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
                <p>Especímenes observados</p>
                <p className="text-muted-foreground text-sm">
                  Cantidad X zona Mina Subterránea
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-muted rounded-md aspect-video">
                                <Image
            src="/picaflor.png"
            alt="placeholder hero"
            className="w-full rounded-md object-cover"
            width={600}
            height={500}
          />
        </div>
      </div>
  </TabsContent>
      <TabsContent value="falco">
   <div className="grid container py-8 grid-cols-1 gap-8 items-center lg:grid-cols-2">
        <div className="flex gap-10 flex-col">
          <div className="flex gap-4 flex-col">
            <div className="flex gap-6 flex-col">
              <h4 className="tracking-tighter max-w-xl text-left font-regular">
                <i>Falco sparverius</i> (cernícalo)
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
                   Sin categoría
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
              <div className="flex flex-col gap-1">
                <p>Origen biogeográfico</p>
                <p className="text-muted-foreground text-sm">
                  Nativo
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
              <div className="flex flex-col gap-1">
                <p>Especímenes observados</p>
                <p className="text-muted-foreground text-sm">
                  Cantidad X en Área STP
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-muted rounded-md aspect-video">
                                          <Image
            src="/falco.png"
            alt="placeholder hero"
            className="w-full rounded-md object-cover"
            width={600}
            height={500}
          />
        </div>
      </div>
  </TabsContent>
     <TabsContent value="vultur">
   <div className="grid container py-8 grid-cols-1 gap-8 items-center lg:grid-cols-2">
        <div className="flex gap-10 flex-col">
          <div className="flex gap-4 flex-col">
            <div className="flex gap-6 flex-col">
              <h4 className="tracking-tighter max-w-xl text-left font-regular">
                <i>Vultur gryphus</i> (cóndor de los Andes)
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
                   Vulnerables
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
                <p>Especímenes observados</p>
                <p className="text-muted-foreground text-sm">
                  Cantidad X en Área STP
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-muted rounded-md aspect-video">
                                          <Image
            src="/vultur.png"
            alt="placeholder hero"
            className="w-full rounded-md object-cover"
            width={600}
            height={500}
          />
        </div>
      </div>
  </TabsContent>
     <TabsContent value="buho">
   <div className="grid container py-8 grid-cols-1 gap-8 items-center lg:grid-cols-2">
        <div className="flex gap-10 flex-col">
          <div className="flex gap-4 flex-col">
            <div className="flex gap-6 flex-col">
              <h4 className="tracking-tighter max-w-xl text-left font-regular">
                <i>Bubo magellanicus</i> (tucúquere)
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
                   Sin categoría
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
                <p>Especímenes observados</p>
                <p className="text-muted-foreground text-sm">
                  Cantidad X en Área STP
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-muted rounded-md aspect-video">
                                          <Image
            src="/buho.png"
            alt="placeholder hero"
            className="w-full rounded-md object-cover"
            width={600}
            height={500}
          />
        </div>
      </div>
  </TabsContent>
</Tabs>







      <h3 className="py-8">Clase Mammalia</h3>
<Tabs defaultValue="degu" className="w-full">
  <TabsList>
    <TabsTrigger value="degu">Octodon degus</TabsTrigger>
    <TabsTrigger value="raton">Phyllotis xanthopygus</TabsTrigger>
  </TabsList>
  <TabsContent value="degu">
      <div className="grid container py-8 grid-cols-1 gap-8 items-center lg:grid-cols-2">
        <div className="flex gap-10 flex-col">
          <div className="flex gap-4 flex-col">
            <div className="flex gap-6 flex-col">
              <h4 className="tracking-tighter max-w-xl text-left font-regular">
                <i>Octodon degus</i> (degú)
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
            src="/degu.png"
            alt="placeholder hero"
            className="w-full rounded-md object-cover"
            width={600}
            height={500}
          />
        </div>
      </div>
  </TabsContent>

  <TabsContent value="raton">
   <div className="grid container py-8 grid-cols-1 gap-8 items-center lg:grid-cols-2">
        <div className="flex gap-10 flex-col">
          <div className="flex gap-4 flex-col">
            <div className="flex gap-6 flex-col">
              <h4 className="tracking-tighter max-w-xl text-left font-regular">
                <i>Phyllotis xanthopygus</i> (ratón orejudo amarillento)
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
            src="/raton.png"
            alt="placeholder hero"
            className="w-full rounded-md object-cover"
            width={600}
            height={500}
          />
        </div>
      </div>
  </TabsContent>
    <TabsContent value="leopardinus">
   <div className="grid container py-8 grid-cols-1 gap-8 items-center lg:grid-cols-2">
        <div className="flex gap-10 flex-col">
          <div className="flex gap-4 flex-col">
            <div className="flex gap-6 flex-col">
              <h4 className="tracking-tighter max-w-xl text-left font-regular">
                <i>Liolaemus leopardinus</i> (lagarto leopardo)
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
                   En peligro de extinción
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
              <div className="flex flex-col gap-1">
                <p>Origen biogeográfico</p>
                <p className="text-muted-foreground text-sm">
                  Nativo
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
              <div className="flex flex-col gap-1">
                <p>Especímenes observados</p>
                <p className="text-muted-foreground text-sm">
                  Cantidad X zona STP
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-muted rounded-md aspect-video">
                                <Image
            src="/leopardinus.png"
            alt="placeholder hero"
            className="w-full rounded-md object-cover"
            width={600}
            height={500}
          />
        </div>
      </div>
  </TabsContent>
</Tabs>





      <h3 className="py-8">Clase Amphibia</h3>
<Tabs defaultValue="sapo" className="w-full">
  <TabsList>
    <TabsTrigger value="sapo">Rhinella arunco</TabsTrigger>
  </TabsList>
  <TabsContent value="sapo">
      <div className="grid container py-8 grid-cols-1 gap-8 items-center lg:grid-cols-2">
        <div className="flex gap-10 flex-col">
          <div className="flex gap-4 flex-col">
            <div className="flex gap-6 flex-col">
              <h4 className="tracking-tighter max-w-xl text-left font-regular">
                <i>Rhinella arunco</i> (sapo de rulo)
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
                  Cantidad X en zona STP
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-muted rounded-md aspect-video">
            <Image
            src="/sapo.png"
            alt="placeholder hero"
            className="w-full rounded-md object-cover"
            width={600}
            height={500}
          />
        </div>
      </div>
  </TabsContent>
</Tabs>


<Separator></Separator>

</div>
</div>
);
