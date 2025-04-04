import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { ChartArsenico2 } from "./chartArsenico2";
import { ChartCobre } from "./chartCobre";
import { ChartHierro } from "./chartHierro";
import { ChartManganeso } from "./chartManganeso";
import { ChartMolibdeno } from "./chartMolibdeno";
import { ChartSulfatos } from "./chartSulfatos";
import { ChartElect } from "./chartElect";
import { ChartPh } from "./chartPh";
import { ChartPhIn } from "./chartPhIn";
import { ChartElect2 } from "./chartElect2";
import { ChartPresionAgua } from "./chartPresionAgua";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export const CavAguaIndicadores = () => (
      <div className="w-full py-6">
    <div className="container mx-auto">

<Accordion type="single" collapsible>
  <AccordionItem value="pozo3">
    <AccordionTrigger><h3 className="py-8">Pozo 3 <span className="font-regular text-sm text-right tracking-tight text-muted-foreground">Click para ver la información</span></h3></AccordionTrigger>
    <AccordionContent>
      <Tabs defaultValue="info" className="w-full">
  <TabsList>
    <TabsTrigger value="info">Información</TabsTrigger>
        <TabsTrigger value="arsenico">Arsénico</TabsTrigger>
    <TabsTrigger value="cobre">Cobre</TabsTrigger>
    <TabsTrigger value="hierro">Hierro</TabsTrigger>
    <TabsTrigger value="manganeso">Manganeso</TabsTrigger>
    <TabsTrigger value="molibdeno">Molibdeno</TabsTrigger>
    <TabsTrigger value="sulfatos">Sulfatos</TabsTrigger>
    <TabsTrigger value="conduct1">Conductividad Eléctrica</TabsTrigger>
    <TabsTrigger value="ph">Ph</TabsTrigger>
    <TabsTrigger value="phin">Ph In-situ</TabsTrigger>
    <TabsTrigger value="conduct2">Conductividad Eléctrica in-situ</TabsTrigger>
        <TabsTrigger value="nivelagua">Nivel de água subterránea</TabsTrigger>
  </TabsList>
  <TabsContent value="info">
      <div className="grid container py-8 grid-cols-1 gap-8 items-center lg:grid-cols-2">
        <div className="flex gap-10 flex-col">
          <div className="flex gap-4 flex-col">
            <div className="flex gap-6 flex-col">
              <h3>Calidad de agua subterránea</h3>
                <h4 className="tracking-tighter max-w-xl text-left font-regular">
                Punto a monitorear
              </h4>
              <p className="text-lg leading-relaxed tracking-tight text-muted-foreground max-w-xl text-left">
              Coordenada: E: 383.421; N: 6.325.962.
              </p>
                              <h4 className="tracking-tighter max-w-xl text-left font-regular">
                Objetivo General
              </h4>
              <p className="text-lg leading-relaxed tracking-tight text-muted-foreground max-w-xl text-left">
                Seguimiento de las características fisico químicas y niveles en aguas subterráneas.
              </p>
            </div>
          </div>
          </div>
        <div className="bg-muted rounded-md aspect-video">
            <Image
            src="/pozo3.png"
            alt="placeholder hero"
            className="w-full rounded-md object-cover"
            width={600}
            height={500}
          />
        </div>
                      
      </div>
  </TabsContent>

    <TabsContent value="arsenico">
      <ChartArsenico2></ChartArsenico2>
  </TabsContent>

      <TabsContent value="cobre">
<ChartCobre></ChartCobre>
  </TabsContent>

      <TabsContent value="hierro">
 <ChartHierro></ChartHierro>
  </TabsContent>

        <TabsContent value="manganeso">
    <ChartManganeso></ChartManganeso>
  </TabsContent>

          <TabsContent value="molibdeno">
            <ChartMolibdeno></ChartMolibdeno>
  </TabsContent>
          <TabsContent value="sulfatos">
            <ChartSulfatos></ChartSulfatos>
  </TabsContent>
  
            <TabsContent value="conduct1">
            <ChartElect></ChartElect>
  </TabsContent>

              <TabsContent value="ph">
  <ChartPh></ChartPh>
  </TabsContent>

                <TabsContent value="phin">
 <ChartPhIn></ChartPhIn>
  </TabsContent>

              <TabsContent value="conduct2">
<ChartElect2></ChartElect2>
  </TabsContent>

                <TabsContent value="nivelagua">
<ChartPresionAgua></ChartPresionAgua>
  </TabsContent>
  
</Tabs>
    </AccordionContent>
  </AccordionItem>
</Accordion>
<Separator></Separator>
<Accordion type="single" collapsible>
  <AccordionItem value="pozo2">
    <AccordionTrigger><h3 className="py-8">Pozo 2 B <span className="font-regular text-sm text-right tracking-tight text-muted-foreground">Click para ver la información</span></h3></AccordionTrigger>
    <AccordionContent>
      <Tabs defaultValue="info" className="w-full">
  <TabsList>
    <TabsTrigger value="info">Información</TabsTrigger>
    <TabsTrigger value="arsenico">Arsénico</TabsTrigger>
    <TabsTrigger value="cobre">Cobre</TabsTrigger>
    <TabsTrigger value="hierro">Hierro</TabsTrigger>
    <TabsTrigger value="manganeso">Manganeso</TabsTrigger>
    <TabsTrigger value="molibdeno">Molibdeno</TabsTrigger>
    <TabsTrigger value="sulfatos">Sulfatos</TabsTrigger>
    <TabsTrigger value="conduct1">Conductividad Eléctrica</TabsTrigger>
    <TabsTrigger value="ph">Ph</TabsTrigger>
    <TabsTrigger value="phin">Ph In-situ</TabsTrigger>
    <TabsTrigger value="conduct2">Conductividad Eléctrica in-situ</TabsTrigger>
    <TabsTrigger value="nivelagua">Nivel de agua subterránea</TabsTrigger>
  </TabsList>
  <TabsContent value="info">
      <div className="grid container py-8 grid-cols-1 gap-8 items-center lg:grid-cols-2">
        <div className="flex gap-10 flex-col">
          <div className="flex gap-4 flex-col">
            <div className="flex gap-6 flex-col">
              <h3>Calidad de agua subterránea</h3>
                <h4 className="tracking-tighter max-w-xl text-left font-regular">
                Punto a monitorear
              </h4>
              <p className="text-lg leading-relaxed tracking-tight text-muted-foreground max-w-xl text-left">
              Coordenadas: E: 383.902; N: 6.324.976.
              </p>
                              <h4 className="tracking-tighter max-w-xl text-left font-regular">
                Objetivo General
              </h4>
              <p className="text-lg leading-relaxed tracking-tight text-muted-foreground max-w-xl text-left">
                Seguimiento de las características fisico químicas y niveles en aguas subterráneas.
              </p>
            </div>
          </div>
          </div>
        <div className="bg-muted rounded-md aspect-video">
            <Image
            src="/pozo2b.png"
            alt="placeholder hero"
            className="w-full rounded-md object-cover"
            width={600}
            height={500}
          />
        </div>
                      
      </div>
  </TabsContent>

    <TabsContent value="arsenico">
      <ChartArsenico2></ChartArsenico2>
  </TabsContent>

      <TabsContent value="cobre">
<ChartCobre></ChartCobre>
  </TabsContent>

      <TabsContent value="hierro">
 <ChartHierro></ChartHierro>
  </TabsContent>

        <TabsContent value="manganeso">
    <ChartManganeso></ChartManganeso>
  </TabsContent>

          <TabsContent value="molibdeno">
            <ChartMolibdeno></ChartMolibdeno>
  </TabsContent>
          <TabsContent value="sulfatos">
            <ChartSulfatos></ChartSulfatos>
  </TabsContent>
  
            <TabsContent value="conduct1">
            <ChartElect></ChartElect>
  </TabsContent>

              <TabsContent value="ph">
  <ChartPh></ChartPh>
  </TabsContent>

                <TabsContent value="phin">
 <ChartPhIn></ChartPhIn>
  </TabsContent>

              <TabsContent value="conduct2">
<ChartElect2></ChartElect2>
  </TabsContent>

                <TabsContent value="nivelagua">
<ChartPresionAgua></ChartPresionAgua>
  </TabsContent>
  
</Tabs>
    </AccordionContent>
  </AccordionItem>
</Accordion>
<Separator></Separator>

<Accordion type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger><h3 className="py-8">Pozo 2 <span className="font-regular text-sm text-right tracking-tight text-muted-foreground">Click para ver la información</span></h3></AccordionTrigger>
    <AccordionContent>
<Tabs defaultValue="info" className="w-full">
  <TabsList>
    <TabsTrigger value="info">Información</TabsTrigger>
    <TabsTrigger value="arsenico">Arsénico</TabsTrigger>
    <TabsTrigger value="cobre">Cobre</TabsTrigger>
    <TabsTrigger value="hierro">Hierro</TabsTrigger>
    <TabsTrigger value="manganeso">Manganeso</TabsTrigger>
    <TabsTrigger value="molibdeno">Molibdeno</TabsTrigger>
    <TabsTrigger value="sulfatos">Sulfatos</TabsTrigger>
    <TabsTrigger value="conduct1">Conductividad Eléctrica</TabsTrigger>
    <TabsTrigger value="ph">Ph</TabsTrigger>
    <TabsTrigger value="phin">Ph In-situ</TabsTrigger>
    <TabsTrigger value="conduct2">Conductividad Eléctrica in-situ</TabsTrigger>
    <TabsTrigger value="nivelagua">Nivel de agua subterránea</TabsTrigger>
  </TabsList>
  <TabsContent value="info">
      <div className="grid container py-8 grid-cols-1 gap-8 items-center lg:grid-cols-2">
        <div className="flex gap-10 flex-col">
          <div className="flex gap-4 flex-col">
            <div className="flex gap-6 flex-col">
              <h3>Calidad de agua subterránea</h3>
                <h4 className="tracking-tighter max-w-xl text-left font-regular">
                Punto a monitorear
              </h4>
              <p className="text-lg leading-relaxed tracking-tight text-muted-foreground max-w-xl text-left">
              Por determinar.
              </p>
                              <h4 className="tracking-tighter max-w-xl text-left font-regular">
                Objetivo General
              </h4>
              <p className="text-lg leading-relaxed tracking-tight text-muted-foreground max-w-xl text-left">
                Seguimiento de las características fisico químicas y niveles en aguas subterráneas.
              </p>
            </div>
          </div>
          </div>
        <div className="bg-muted rounded-md aspect-video">
            <Image
            src="/pozo2.png"
            alt="placeholder hero"
            className="w-full rounded-md object-cover"
            width={600}
            height={500}
          />
          <p className="text-center">imagen solo con fines ilustrativos</p>
        </div>
                      
      </div>
  </TabsContent>

    <TabsContent value="arsenico">
      <ChartArsenico2></ChartArsenico2>
  </TabsContent>

      <TabsContent value="cobre">
<ChartCobre></ChartCobre>
  </TabsContent>

      <TabsContent value="hierro">
 <ChartHierro></ChartHierro>
  </TabsContent>

        <TabsContent value="manganeso">
    <ChartManganeso></ChartManganeso>
  </TabsContent>

          <TabsContent value="molibdeno">
            <ChartMolibdeno></ChartMolibdeno>
  </TabsContent>
          <TabsContent value="sulfatos">
            <ChartSulfatos></ChartSulfatos>
  </TabsContent>
  
            <TabsContent value="conduct1">
            <ChartElect></ChartElect>
  </TabsContent>

              <TabsContent value="ph">
  <ChartPh></ChartPh>
  </TabsContent>

                <TabsContent value="phin">
 <ChartPhIn></ChartPhIn>
  </TabsContent>

              <TabsContent value="conduct2">
<ChartElect2></ChartElect2>
  </TabsContent>

                <TabsContent value="nivelagua">
<ChartPresionAgua></ChartPresionAgua>
  </TabsContent>
  
</Tabs>
    </AccordionContent>
  </AccordionItem>
</Accordion>
<Separator></Separator>

<Accordion type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger><h3 className="py-8">Pozo 1 <span className="font-regular text-sm text-right tracking-tight text-muted-foreground">Click para ver la información</span></h3></AccordionTrigger>
    <AccordionContent>
    <Tabs defaultValue="info" className="w-full">
  <TabsList>
    <TabsTrigger value="info">Información</TabsTrigger>
    <TabsTrigger value="arsenico">Arsénico</TabsTrigger>
    <TabsTrigger value="cobre">Cobre</TabsTrigger>
    <TabsTrigger value="hierro">Hierro</TabsTrigger>
    <TabsTrigger value="manganeso">Manganeso</TabsTrigger>
    <TabsTrigger value="molibdeno">Molibdeno</TabsTrigger>
    <TabsTrigger value="sulfatos">Sulfatos</TabsTrigger>
    <TabsTrigger value="conduct1">Conductividad Eléctrica</TabsTrigger>
    <TabsTrigger value="ph">Ph</TabsTrigger>
    <TabsTrigger value="phin">Ph In-situ</TabsTrigger>
    <TabsTrigger value="conduct2">Conductividad Eléctrica in-situ</TabsTrigger>
    <TabsTrigger value="nivelagua">Nivel de agua subterránea</TabsTrigger>
  </TabsList>
  <TabsContent value="info">
      <div className="grid container py-8 grid-cols-1 gap-8 items-center lg:grid-cols-2">
        <div className="flex gap-10 flex-col">
          <div className="flex gap-4 flex-col">
            <div className="flex gap-6 flex-col">
              <h3>Calidad de agua subterránea</h3>
                <h4 className="tracking-tighter max-w-xl text-left font-regular">
                Punto a monitorear
              </h4>
              <p className="text-lg leading-relaxed tracking-tight text-muted-foreground max-w-xl text-left">
              Coordenadas: E: 384,390; N: 6.324.859.
              </p>
                              <h4 className="tracking-tighter max-w-xl text-left font-regular">
                Objetivo general
              </h4>
              <p className="text-lg leading-relaxed tracking-tight text-muted-foreground max-w-xl text-left">
                Seguimiento de las características fisico químicas y niveles en aguas subterráneas.
              </p>
            </div>
          </div>
          </div>
        <div className="bg-muted rounded-md aspect-video">
            <Image
            src="/pozo1.png"
            alt="placeholder hero"
            className="w-full rounded-md object-cover"
            width={600}
            height={500}
          />
        </div>
                      
      </div>
  </TabsContent>

    <TabsContent value="arsenico">
      <ChartArsenico2></ChartArsenico2>
  </TabsContent>

      <TabsContent value="cobre">
<ChartCobre></ChartCobre>
  </TabsContent>

      <TabsContent value="hierro">
 <ChartHierro></ChartHierro>
  </TabsContent>

        <TabsContent value="manganeso">
    <ChartManganeso></ChartManganeso>
  </TabsContent>

          <TabsContent value="molibdeno">
            <ChartMolibdeno></ChartMolibdeno>
  </TabsContent>
          <TabsContent value="sulfatos">
            <ChartSulfatos></ChartSulfatos>
  </TabsContent>
  
            <TabsContent value="conduct1">
            <ChartElect></ChartElect>
  </TabsContent>

              <TabsContent value="ph">
  <ChartPh></ChartPh>
  </TabsContent>

                <TabsContent value="phin">
 <ChartPhIn></ChartPhIn>
  </TabsContent>

              <TabsContent value="conduct2">
<ChartElect2></ChartElect2>
  </TabsContent>

                <TabsContent value="nivelagua">
<ChartPresionAgua></ChartPresionAgua>
  </TabsContent>
  
</Tabs>
    </AccordionContent>
  </AccordionItem>
</Accordion>
<Separator></Separator>

<Accordion type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger><h3 className="py-8">Sulfatos Bajo <span className="font-regular text-sm text-right tracking-tight text-muted-foreground">Click para ver la información</span></h3></AccordionTrigger>
    <AccordionContent>
<Tabs defaultValue="info" className="w-full">
  <TabsList>
    <TabsTrigger value="info">Información</TabsTrigger>
    <TabsTrigger value="arsenico">Arsénico</TabsTrigger>
    <TabsTrigger value="cobre">Cobre</TabsTrigger>
    <TabsTrigger value="hierro">Hierro</TabsTrigger>
    <TabsTrigger value="manganeso">Manganeso</TabsTrigger>
    <TabsTrigger value="molibdeno">Molibdeno</TabsTrigger>
    <TabsTrigger value="sulfatos">Sulfatos</TabsTrigger>
    <TabsTrigger value="conduct1">Conductividad Eléctrica</TabsTrigger>
    <TabsTrigger value="ph">Ph</TabsTrigger>
    <TabsTrigger value="phin">Ph In-situ</TabsTrigger>
    <TabsTrigger value="conduct2">Conductividad Eléctrica in-situ</TabsTrigger>
    <TabsTrigger value="nivelagua">Nivel de agua subterránea</TabsTrigger>
  </TabsList>
  <TabsContent value="info">
      <div className="grid container py-8 grid-cols-1 gap-8 items-center lg:grid-cols-2">
        <div className="flex gap-10 flex-col">
          <div className="flex gap-4 flex-col">
            <div className="flex gap-6 flex-col">
              <h3>Calidad de agua subterránea</h3>
                <h4 className="tracking-tighter max-w-xl text-left font-regular">
                Punto a monitorear
              </h4>
              <p className="text-lg leading-relaxed tracking-tight text-muted-foreground max-w-xl text-left">
              Coordenadas: E: 382.534; N: 6.323.649
              </p>
                              <h4 className="tracking-tighter max-w-xl text-left font-regular">
                Objetivo general
              </h4>
              <p className="text-lg leading-relaxed tracking-tight text-muted-foreground max-w-xl text-left">
                Seguimiento de las características fisico químicas y niveles en aguas subterráneas.
              </p>
            </div>
          </div>
          </div>
        <div className="bg-muted rounded-md aspect-video">
            <Image
            src="/sulfatosBajo.png"
            alt="placeholder hero"
            className="w-full rounded-md object-cover"
            width={600}
            height={500}
          />
        </div>
                      
      </div>
  </TabsContent>

    <TabsContent value="arsenico">
      <ChartArsenico2></ChartArsenico2>
  </TabsContent>

      <TabsContent value="cobre">
<ChartCobre></ChartCobre>
  </TabsContent>

      <TabsContent value="hierro">
 <ChartHierro></ChartHierro>
  </TabsContent>

        <TabsContent value="manganeso">
    <ChartManganeso></ChartManganeso>
  </TabsContent>

          <TabsContent value="molibdeno">
            <ChartMolibdeno></ChartMolibdeno>
  </TabsContent>
          <TabsContent value="sulfatos">
            <ChartSulfatos></ChartSulfatos>
  </TabsContent>
  
            <TabsContent value="conduct1">
            <ChartElect></ChartElect>
  </TabsContent>

              <TabsContent value="ph">
  <ChartPh></ChartPh>
  </TabsContent>

                <TabsContent value="phin">
 <ChartPhIn></ChartPhIn>
  </TabsContent>

              <TabsContent value="conduct2">
<ChartElect2></ChartElect2>
  </TabsContent>

                <TabsContent value="nivelagua">
<ChartPresionAgua></ChartPresionAgua>
  </TabsContent>
  
</Tabs>
    </AccordionContent>
  </AccordionItem>
</Accordion>
<Separator></Separator>
<Accordion type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger><h3 className="py-8">Paloma Baja <span className="font-regular text-sm text-right tracking-tight text-muted-foreground">Click para ver la información</span></h3></AccordionTrigger>
    <AccordionContent>
<Tabs defaultValue="info" className="w-full">
  <TabsList>
    <TabsTrigger value="info">Información</TabsTrigger>
    <TabsTrigger value="arsenico">Arsénico</TabsTrigger>
    <TabsTrigger value="cobre">Cobre</TabsTrigger>
    <TabsTrigger value="hierro">Hierro</TabsTrigger>
    <TabsTrigger value="manganeso">Manganeso</TabsTrigger>
    <TabsTrigger value="molibdeno">Molibdeno</TabsTrigger>
    <TabsTrigger value="sulfatos">Sulfatos</TabsTrigger>
    <TabsTrigger value="conduct1">Conductividad Eléctrica</TabsTrigger>
    <TabsTrigger value="ph">Ph</TabsTrigger>
    <TabsTrigger value="phin">Ph In-situ</TabsTrigger>
    <TabsTrigger value="conduct2">Conductividad Eléctrica in-situ</TabsTrigger>
    <TabsTrigger value="nivelagua">Nivel de agua subterránea</TabsTrigger>
  </TabsList>
  <TabsContent value="info">
      <div className="grid container py-8 grid-cols-1 gap-8 items-center lg:grid-cols-2">
        <div className="flex gap-10 flex-col">
          <div className="flex gap-4 flex-col">
            <div className="flex gap-6 flex-col">
              <h3>Calidad de agua subterránea</h3>
                <h4 className="tracking-tighter max-w-xl text-left font-regular">
                Punto a monitorear
              </h4>
              <p className="text-lg leading-relaxed tracking-tight text-muted-foreground max-w-xl text-left">
              Coordenadas: E: 382.179; N: 6.326.016.
              </p>
                              <h4 className="tracking-tighter max-w-xl text-left font-regular">
                Objetivo general
              </h4>
              <p className="text-lg leading-relaxed tracking-tight text-muted-foreground max-w-xl text-left">
                Seguimiento de las características fisico químicas y niveles en aguas subterráneas.
              </p>
            </div>
          </div>
          </div>
        <div className="bg-muted rounded-md aspect-video">
            <Image
            src="/palomaBaja.png"
            alt="placeholder hero"
            className="w-full rounded-md object-cover"
            width={600}
            height={500}
          />
        </div>
                      
      </div>
  </TabsContent>

    <TabsContent value="arsenico">
      <ChartArsenico2></ChartArsenico2>
  </TabsContent>

      <TabsContent value="cobre">
<ChartCobre></ChartCobre>
  </TabsContent>

      <TabsContent value="hierro">
 <ChartHierro></ChartHierro>
  </TabsContent>

        <TabsContent value="manganeso">
    <ChartManganeso></ChartManganeso>
  </TabsContent>

          <TabsContent value="molibdeno">
            <ChartMolibdeno></ChartMolibdeno>
  </TabsContent>
          <TabsContent value="sulfatos">
            <ChartSulfatos></ChartSulfatos>
  </TabsContent>
  
            <TabsContent value="conduct1">
            <ChartElect></ChartElect>
  </TabsContent>

              <TabsContent value="ph">
  <ChartPh></ChartPh>
  </TabsContent>

                <TabsContent value="phin">
 <ChartPhIn></ChartPhIn>
  </TabsContent>

              <TabsContent value="conduct2">
<ChartElect2></ChartElect2>
  </TabsContent>

                <TabsContent value="nivelagua">
<ChartPresionAgua></ChartPresionAgua>
  </TabsContent>
  
</Tabs>
    </AccordionContent>
  </AccordionItem>
</Accordion>
<Separator></Separator>

<Accordion type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger><h3 className="py-8">Pozo Adicional <span className="font-regular text-sm text-right tracking-tight text-muted-foreground">Click para ver la información</span></h3></AccordionTrigger>
    <AccordionContent>
<Tabs defaultValue="info" className="w-full">
  <TabsList>
    <TabsTrigger value="info">Información</TabsTrigger>
    <TabsTrigger value="arsenico">Arsénico</TabsTrigger>
    <TabsTrigger value="cobre">Cobre</TabsTrigger>
    <TabsTrigger value="hierro">Hierro</TabsTrigger>
    <TabsTrigger value="manganeso">Manganeso</TabsTrigger>
    <TabsTrigger value="molibdeno">Molibdeno</TabsTrigger>
    <TabsTrigger value="sulfatos">Sulfatos</TabsTrigger>
    <TabsTrigger value="conduct1">Conductividad Eléctrica</TabsTrigger>
    <TabsTrigger value="ph">Ph</TabsTrigger>
    <TabsTrigger value="phin">Ph In-situ</TabsTrigger>
    <TabsTrigger value="conduct2">Conductividad Eléctrica in-situ</TabsTrigger>
    <TabsTrigger value="nivelagua">Nivel de agua subterránea</TabsTrigger>
  </TabsList>
  <TabsContent value="info">
      <div className="grid container py-8 grid-cols-1 gap-8 items-center lg:grid-cols-2">
        <div className="flex gap-10 flex-col">
          <div className="flex gap-4 flex-col">
            <div className="flex gap-6 flex-col">
                            <h3>Calidad de agua subterránea</h3>
                <h4 className="tracking-tighter max-w-xl text-left font-regular">
                Punto a monitorear
              </h4>
              <p className="text-lg leading-relaxed tracking-tight text-muted-foreground max-w-xl text-left">
              Por determinar.
              </p>
                              <h4 className="tracking-tighter max-w-xl text-left font-regular">
                Objetivo general
              </h4>
              <p className="text-lg leading-relaxed tracking-tight text-muted-foreground max-w-xl text-left">
                Seguimiento de las características fisico químicas y niveles en aguas subterráneas.
              </p>
            </div>
          </div>
          </div>
        <div className="bg-muted rounded-md aspect-video">
            <Image
            src="/pozo2.png"
            alt="placeholder hero"
            className="w-full rounded-md object-cover"
            width={600}
            height={500}
          />
          <p className="text-center">imagen solo con fines ilustrativos</p>
        </div>
                      
      </div>
  </TabsContent>

    <TabsContent value="arsenico">
      <ChartArsenico2></ChartArsenico2>
  </TabsContent>

      <TabsContent value="cobre">
<ChartCobre></ChartCobre>
  </TabsContent>

      <TabsContent value="hierro">
 <ChartHierro></ChartHierro>
  </TabsContent>

        <TabsContent value="manganeso">
    <ChartManganeso></ChartManganeso>
  </TabsContent>

          <TabsContent value="molibdeno">
            <ChartMolibdeno></ChartMolibdeno>
  </TabsContent>
          <TabsContent value="sulfatos">
            <ChartSulfatos></ChartSulfatos>
  </TabsContent>
  
            <TabsContent value="conduct1">
            <ChartElect></ChartElect>
  </TabsContent>

              <TabsContent value="ph">
  <ChartPh></ChartPh>
  </TabsContent>

                <TabsContent value="phin">
 <ChartPhIn></ChartPhIn>
  </TabsContent>

              <TabsContent value="conduct2">
<ChartElect2></ChartElect2>
  </TabsContent>

                <TabsContent value="nivelagua">
<ChartPresionAgua></ChartPresionAgua>
  </TabsContent>
  
</Tabs>
    </AccordionContent>
  </AccordionItem>
</Accordion>
<Separator></Separator>

<Accordion type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger><h3 className="py-8">E4 - Estación DGA Piedra Carvajal <span className="font-regular text-sm text-right tracking-tight text-muted-foreground">Click para ver la información</span></h3></AccordionTrigger>
    <AccordionContent>
      <Tabs defaultValue="info" className="w-full">
  <TabsList>
    <TabsTrigger value="info">Información</TabsTrigger>
    <TabsTrigger value="manganeso">Manganeso</TabsTrigger>
    <TabsTrigger value="molibdeno">Molibdeno</TabsTrigger>
    <TabsTrigger value="sulfatos">Sulfatos</TabsTrigger>
    <TabsTrigger value="conduct1">Conductividad Eléctrica</TabsTrigger>
    <TabsTrigger value="ph">Ph</TabsTrigger>
    <TabsTrigger value="phin">Ph In-situ</TabsTrigger>
    <TabsTrigger value="conduct2">Conductividad Eléctrica in-situ</TabsTrigger>
  </TabsList>
  <TabsContent value="info">
      <div className="grid container py-8 grid-cols-1 gap-8 items-center lg:grid-cols-2">
        <div className="flex gap-10 flex-col">
          <div className="flex gap-4 flex-col">
            <div className="flex gap-6 flex-col">
              <h3>Calidad de agua superficial</h3>
                <h4 className="tracking-tighter max-w-xl text-left font-regular">
                Punto a monitorear
              </h4>
              <p className="text-lg leading-relaxed tracking-tight text-muted-foreground max-w-xl text-left">
              Coordenadas: E: 381.284; N: 6.323.447.
              </p>
                              <h4 className="tracking-tighter max-w-xl text-left font-regular">
                Objetivo general
              </h4>
              <p className="text-lg leading-relaxed tracking-tight text-muted-foreground max-w-xl text-left">
                Seguimiento de las características fisico químicas y niveles en aguas superficiales.
              </p>
            </div>
          </div>
          </div>
        <div className="bg-muted rounded-md aspect-video">
            <Image
            src="/piedracarvajal-invierno.png"
            alt="placeholder hero"
            className="w-full rounded-md object-cover"
            width={600}
            height={500}
          />
          <p className="text-center">imagen solo con fines ilustrativos</p>
        </div>
                      
      </div>
  </TabsContent>

    <TabsContent value="arsenico">
      <ChartArsenico2></ChartArsenico2>
  </TabsContent>

      <TabsContent value="cobre">
<ChartCobre></ChartCobre>
  </TabsContent>

      <TabsContent value="hierro">
 <ChartHierro></ChartHierro>
  </TabsContent>

        <TabsContent value="manganeso">
    <ChartManganeso></ChartManganeso>
  </TabsContent>

          <TabsContent value="molibdeno">
            <ChartMolibdeno></ChartMolibdeno>
  </TabsContent>
          <TabsContent value="sulfatos">
            <ChartSulfatos></ChartSulfatos>
  </TabsContent>
  
            <TabsContent value="conduct1">
            <ChartElect></ChartElect>
  </TabsContent>

              <TabsContent value="ph">
  <ChartPh></ChartPh>
  </TabsContent>

                <TabsContent value="phin">
 <ChartPhIn></ChartPhIn>
  </TabsContent>

              <TabsContent value="conduct2">
<ChartElect2></ChartElect2>
  </TabsContent>

                <TabsContent value="nivelagua">
<ChartPresionAgua></ChartPresionAgua>
  </TabsContent>
  
</Tabs>
    </AccordionContent>
  </AccordionItem>
</Accordion>

<Separator></Separator>

<Accordion type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger><h3 className="py-8">E5 <span className="font-regular text-sm text-right tracking-tight text-muted-foreground">Click para ver la información</span></h3></AccordionTrigger>
    <AccordionContent>
<Tabs defaultValue="info" className="w-full">
  <TabsList>
    <TabsTrigger value="info">Información</TabsTrigger>
    <TabsTrigger value="arsenico">Arsénico</TabsTrigger>
    <TabsTrigger value="cobre">Cobre</TabsTrigger>
    <TabsTrigger value="hierro">Hierro</TabsTrigger>
    <TabsTrigger value="manganeso">Manganeso</TabsTrigger>
    <TabsTrigger value="molibdeno">Molibdeno</TabsTrigger>
    <TabsTrigger value="sulfatos">Sulfatos</TabsTrigger>
    <TabsTrigger value="conduct1">Conductividad Eléctrica</TabsTrigger>
    <TabsTrigger value="ph">Ph</TabsTrigger>
    <TabsTrigger value="phin">Ph In-situ</TabsTrigger>
    <TabsTrigger value="conduct2">Conductividad Eléctrica in-situ</TabsTrigger>
  </TabsList>
  <TabsContent value="info">
      <div className="grid container py-8 grid-cols-1 gap-8 items-center lg:grid-cols-2">
        <div className="flex gap-10 flex-col">
          <div className="flex gap-4 flex-col">
            <div className="flex gap-6 flex-col">
                            <h3>Calidad de agua superficial</h3>
                <h4 className="tracking-tighter max-w-xl text-left font-regular">
                Punto a monitorear
              </h4>
              <p className="text-lg leading-relaxed tracking-tight text-muted-foreground max-w-xl text-left">
              E: 381.348; N: 6.322.730.
              </p>
                              <h4 className="tracking-tighter max-w-xl text-left font-regular">
                Objetivo general
              </h4>
              <p className="text-lg leading-relaxed tracking-tight text-muted-foreground max-w-xl text-left">
                Seguimiento de las características fisico químicas y niveles en aguas superficiales.
              </p>
            </div>
          </div>
          </div>
        <div className="bg-muted rounded-md aspect-video">
            <Image
            src="/pozoE5def.png"
            alt="placeholder hero"
            className="w-full rounded-md object-cover"
            width={600}
            height={500}
          />
          <p className="text-center">imagen solo con fines ilustrativos</p>
        </div>
                      
      </div>
  </TabsContent>

    <TabsContent value="arsenico">
      <ChartArsenico2></ChartArsenico2>
  </TabsContent>

      <TabsContent value="cobre">
<ChartCobre></ChartCobre>
  </TabsContent>

      <TabsContent value="hierro">
 <ChartHierro></ChartHierro>
  </TabsContent>

        <TabsContent value="manganeso">
    <ChartManganeso></ChartManganeso>
  </TabsContent>

          <TabsContent value="molibdeno">
            <ChartMolibdeno></ChartMolibdeno>
  </TabsContent>
          <TabsContent value="sulfatos">
            <ChartSulfatos></ChartSulfatos>
  </TabsContent>
  
            <TabsContent value="conduct1">
            <ChartElect></ChartElect>
  </TabsContent>

              <TabsContent value="ph">
  <ChartPh></ChartPh>
  </TabsContent>

                <TabsContent value="phin">
 <ChartPhIn></ChartPhIn>
  </TabsContent>

              <TabsContent value="conduct2">
<ChartElect2></ChartElect2>
  </TabsContent>
  
</Tabs>
    </AccordionContent>
  </AccordionItem>
</Accordion>
<Separator></Separator>


<Accordion type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger><h3 className="py-8">E6 <span className="font-regular text-sm text-right tracking-tight text-muted-foreground">Click para ver la información</span></h3></AccordionTrigger>
    <AccordionContent>
<Tabs defaultValue="info" className="w-full">
  <TabsList>
    <TabsTrigger value="info">Información</TabsTrigger>
    <TabsTrigger value="arsenico">Arsénico</TabsTrigger>
    <TabsTrigger value="cobre">Cobre</TabsTrigger>
    <TabsTrigger value="hierro">Hierro</TabsTrigger>
    <TabsTrigger value="manganeso">Manganeso</TabsTrigger>
    <TabsTrigger value="molibdeno">Molibdeno</TabsTrigger>
    <TabsTrigger value="sulfatos">Sulfatos</TabsTrigger>
    <TabsTrigger value="conduct1">Conductividad Eléctrica</TabsTrigger>
    <TabsTrigger value="ph">Ph</TabsTrigger>
    <TabsTrigger value="phin">Ph In-situ</TabsTrigger>
    <TabsTrigger value="conduct2">Conductividad Eléctrica in-situ</TabsTrigger>
  </TabsList>
  <TabsContent value="info">
      <div className="grid container py-8 grid-cols-1 gap-8 items-center lg:grid-cols-2">
        <div className="flex gap-10 flex-col">
          <div className="flex gap-4 flex-col">
            <div className="flex gap-6 flex-col">
                            <h3>Calidad de agua superficial</h3>
                <h4 className="tracking-tighter max-w-xl text-left font-regular">
                Punto a monitorear
              </h4>
              <p className="text-lg leading-relaxed tracking-tight text-muted-foreground max-w-xl text-left">
              E: 381.342; N: 6.322.691.
              </p>
                              <h4 className="tracking-tighter max-w-xl text-left font-regular">
                Objetivo general
              </h4>
              <p className="text-lg leading-relaxed tracking-tight text-muted-foreground max-w-xl text-left">
                Seguimiento de las características fisico químicas y niveles en aguas superficiales.
              </p>
            </div>
          </div>
          </div>
        <div className="bg-muted rounded-md aspect-video">
            <Image
            src="/pozoE5.png"
            alt="placeholder hero"
            className="w-full rounded-md object-cover"
            width={600}
            height={500}
          />
          <p className="text-center">imagen solo con fines ilustrativos</p>
        </div>
                      
      </div>
  </TabsContent>

    <TabsContent value="arsenico">
      <ChartArsenico2></ChartArsenico2>
  </TabsContent>

      <TabsContent value="cobre">
<ChartCobre></ChartCobre>
  </TabsContent>

      <TabsContent value="hierro">
 <ChartHierro></ChartHierro>
  </TabsContent>

        <TabsContent value="manganeso">
    <ChartManganeso></ChartManganeso>
  </TabsContent>

          <TabsContent value="molibdeno">
            <ChartMolibdeno></ChartMolibdeno>
  </TabsContent>
          <TabsContent value="sulfatos">
            <ChartSulfatos></ChartSulfatos>
  </TabsContent>
  
            <TabsContent value="conduct1">
            <ChartElect></ChartElect>
  </TabsContent>

              <TabsContent value="ph">
  <ChartPh></ChartPh>
  </TabsContent>

                <TabsContent value="phin">
 <ChartPhIn></ChartPhIn>
  </TabsContent>

              <TabsContent value="conduct2">
<ChartElect2></ChartElect2>
  </TabsContent>
  
</Tabs>
    </AccordionContent>
  </AccordionItem>
</Accordion>
<Separator></Separator>

<Accordion type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger><h3 className="py-8">EA6 <span className="font-regular text-sm text-right tracking-tight text-muted-foreground">Click para ver la información</span></h3></AccordionTrigger>
    <AccordionContent>
<Tabs defaultValue="info" className="w-full">
  <TabsList>
    <TabsTrigger value="info">Información</TabsTrigger>
    <TabsTrigger value="arsenico">Arsénico</TabsTrigger>
    <TabsTrigger value="cobre">Cobre</TabsTrigger>
    <TabsTrigger value="hierro">Hierro</TabsTrigger>
    <TabsTrigger value="manganeso">Manganeso</TabsTrigger>
    <TabsTrigger value="molibdeno">Molibdeno</TabsTrigger>
    <TabsTrigger value="sulfatos">Sulfatos</TabsTrigger>
    <TabsTrigger value="conduct1">Conductividad Eléctrica</TabsTrigger>
    <TabsTrigger value="ph">Ph</TabsTrigger>
    <TabsTrigger value="phin">Ph In-situ</TabsTrigger>
    <TabsTrigger value="conduct2">Conductividad Eléctrica in-situ</TabsTrigger>
  </TabsList>
  <TabsContent value="info">
      <div className="grid container py-8 grid-cols-1 gap-8 items-center lg:grid-cols-2">
        <div className="flex gap-10 flex-col">
          <div className="flex gap-4 flex-col">
            <div className="flex gap-6 flex-col">
                            <h3>Calidad de agua superficial</h3>
                <h4 className="tracking-tighter max-w-xl text-left font-regular">
                Punto a monitorear
              </h4>
              <p className="text-lg leading-relaxed tracking-tight text-muted-foreground max-w-xl text-left">
              E: 381.387; N: 6.322.731.
              </p>
                              <h4 className="tracking-tighter max-w-xl text-left font-regular">
                Objetivo general
              </h4>
              <p className="text-lg leading-relaxed tracking-tight text-muted-foreground max-w-xl text-left">
                Seguimiento de las características fisico químicas y niveles en aguas superficiales.
              </p>
            </div>
          </div>
          </div>
        <div className="bg-muted rounded-md aspect-video">
            <Image
            src="/glaciarEA6.png"
            alt="placeholder hero"
            className="w-full rounded-md object-cover"
            width={600}
            height={500}
          />
          <p className="text-center">imagen solo con fines ilustrativos</p>
        </div>
                      
      </div>
  </TabsContent>

    <TabsContent value="arsenico">
      <ChartArsenico2></ChartArsenico2>
  </TabsContent>

      <TabsContent value="cobre">
<ChartCobre></ChartCobre>
  </TabsContent>

      <TabsContent value="hierro">
 <ChartHierro></ChartHierro>
  </TabsContent>

        <TabsContent value="manganeso">
    <ChartManganeso></ChartManganeso>
  </TabsContent>

          <TabsContent value="molibdeno">
            <ChartMolibdeno></ChartMolibdeno>
  </TabsContent>
          <TabsContent value="sulfatos">
            <ChartSulfatos></ChartSulfatos>
  </TabsContent>
  
            <TabsContent value="conduct1">
            <ChartElect></ChartElect>
  </TabsContent>

              <TabsContent value="ph">
  <ChartPh></ChartPh>
  </TabsContent>

                <TabsContent value="phin">
 <ChartPhIn></ChartPhIn>
  </TabsContent>

              <TabsContent value="conduct2">
<ChartElect2></ChartElect2>
  </TabsContent>
  
</Tabs>
    </AccordionContent>
  </AccordionItem>
</Accordion>
<Separator></Separator>

<Separator></Separator>


</div>
</div>
);