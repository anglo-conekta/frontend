"use client"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";



import { Bar, BarChart, CartesianGrid, LabelList, XAxis } from "recharts"

import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

export const description = "Flujo Vehicular"

const chartData = [
  { month: "Ene-Mar", npsmin: 186, npsmax: 80, npseq: 75 },
  { month: "Abr-Jun", npsmin: 73, npsmax: 190, npseq: 121},
  { month: "Jul-Sep", npsmin: 209, npsmax: 130, npseq: 160 },
  { month: "Oct-Dic", npsmin: 305, npsmax: 200, npseq: 185 },
]

const chartConfig = {
  npsmin: {
    label: "Ciclistas ",
    color: "hsl(var(--chart-1))",
  },
    npsmax: {
    label: "Automóviles ",
    color: "hsl(var(--chart-2))",
  },
    npseq: {
    label: "Maquinaria / Carga ",
    color: "hsl(var(--chart-3))",
  },
} satisfies ChartConfig

  export const Cav28 = () => (
  <div className="w-full py-6">
    <div className="container mx-auto">
        <div className="py-6">
          <h2>Flujos viales asociados en ruta G-21, incluyendo ciclistas</h2>
</div>
        <Tabs defaultValue="flujo" className="py-6">
      <TabsList className="grid w-full grid-cols-5">
        <TabsTrigger value="flujo">Flujo vial</TabsTrigger>
        <TabsTrigger value="foto">Registro Fotográfico</TabsTrigger>
      </TabsList>
      <TabsContent value="flujo">
            <Card>
      <CardHeader>
        <CardTitle>Sector 1:</CardTitle>
        <CardDescription>Ruta G-21 entre Av. Las Condes – Sector Las Puertas.</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="aspect-auto h-[250px] w-full py-6">
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={true}
              tickFormatter={(value) => value.slice(0, 9)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dashed" className="whitebg"/>}
            />
                        <ChartLegend content={<ChartLegendContent />} />
            <Bar dataKey="npsmin" fill="var(--color-npsmin)" radius={4} >
                <LabelList
                position="top"
                offset={12}
                className="fill-foreground"
                fontSize={12}
              />
            </Bar>

            <Bar dataKey="npsmax" fill="var(--color-npsmax)" radius={4} >
                            <LabelList
                position="top"
                offset={12}
                className="fill-foreground"
                fontSize={12}
              />
            </Bar>
            <Bar dataKey="npseq" fill="var(--color-npseq)" radius={4}>
                            <LabelList
                position="top"
                offset={12}
                className="fill-foreground"
                fontSize={12}
              />
            </Bar>
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="leading-none text-muted-foreground">
          Mediciones de flujo por tipo de vehiculos, incluyendo su relación con ciclistas
        </div>
      </CardFooter>
    </Card>
      </TabsContent>
      <TabsContent value="foto">
        <Card>
          <CardHeader>
            <CardTitle>Registro Fotográfico</CardTitle>
            <CardDescription>
             Ruta G-21 entre Av. Las Condes – Sector Las Puertas
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <Image
            src="/vialidad-laspuertas.png"
            alt="Vialidad - Las Puertas"
            className="aspect-auto h-[250px] py-6"
            width={300}
            height={300}
          />

          </CardContent>
          <CardFooter>
            <p>Fotografía obtenida en fecha: 22/06/2024</p>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>

        <Tabs defaultValue="flujo" className="py-6">
      <TabsList className="grid w-full grid-cols-5">
        <TabsTrigger value="flujo">Flujo Vial</TabsTrigger>
        <TabsTrigger value="foto">Registro Fotográfico</TabsTrigger>
      </TabsList>
      <TabsContent value="flujo">
            <Card>
      <CardHeader>
        <CardTitle>Sector 2</CardTitle>
        <CardDescription>Ruta G-21 entre Sector Las Puertas –Sector La Hermita</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="aspect-auto h-[250px] w-full py-6">
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={true}
              tickFormatter={(value) => value.slice(0, 9)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dashed" className="whitebg"/>}
            />
                        <ChartLegend content={<ChartLegendContent />} />
            <Bar dataKey="npsmin" fill="var(--color-npsmin)" radius={4} >
                            <LabelList
                position="top"
                offset={12}
                className="fill-foreground"
                fontSize={12}
              />
            </Bar>
            <Bar dataKey="npsmax" fill="var(--color-npsmax)" radius={4} >
                            <LabelList
                position="top"
                offset={12}
                className="fill-foreground"
                fontSize={12}
              />
            </Bar>
            <Bar dataKey="npseq" fill="var(--color-npseq)" radius={4}>
                            <LabelList
                position="top"
                offset={12}
                className="fill-foreground"
                fontSize={12}
              />
            </Bar>
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="leading-none text-muted-foreground">
          Mediciones de flujo por tipo de vehiculos, incluyendo su relación con ciclistas 
        </div>
      </CardFooter>
    </Card>
      </TabsContent>
      <TabsContent value="foto">
        <Card>
          <CardHeader>
            <CardTitle>Registro Fotográfico</CardTitle>
            <CardDescription>
                 Ruta G-21 entre Sector Las Puertas –Sector La Hermita
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <Image
            src="/vialidad-lahermita.png"
            alt="Vialidad - Las Puertas"
            className="aspect-auto h-[250px] py-6"
            width={300}
            height={300}
          />

          </CardContent>
          <CardFooter>
            <p>Fotografía obtenida en fecha: 22/06/2024</p>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>

        <Tabs defaultValue="flujo" className="py-6">
      <TabsList className="grid w-full grid-cols-5">
        <TabsTrigger value="flujo">Flujo Vial</TabsTrigger>
        <TabsTrigger value="foto">Registro Fotográfico</TabsTrigger>
      </TabsList>
      <TabsContent value="flujo">
            <Card>
      <CardHeader>
        <CardTitle>Sector 3</CardTitle>
        <CardDescription>Ruta G-21 entre Sector La Hermita – Bifurcación Ruta G-245</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="aspect-auto h-[250px] w-full py-6">
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={true}
              tickFormatter={(value) => value.slice(0, 9)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dashed" className="whitebg"/>}
            />
                         <ChartLegend content={<ChartLegendContent />} />
            <Bar dataKey="npsmin" fill="var(--color-npsmin)" radius={4} >
                            <LabelList
                position="top"
                offset={12}
                className="fill-foreground"
                fontSize={12}
              />
            </Bar>
            <Bar dataKey="npsmax" fill="var(--color-npsmax)" radius={4}>
                            <LabelList
                position="top"
                offset={12}
                className="fill-foreground"
                fontSize={12}
              />
            </Bar>
            <Bar dataKey="npseq" fill="var(--color-npseq)" radius={4}>
                            <LabelList
                position="top"
                offset={12}
                className="fill-foreground"
                fontSize={12}
              />
            </Bar>
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="leading-none text-muted-foreground">
          Mediciones de flujo por tipo de vehiculos, incluyendo su relación con ciclistas
        </div>
      </CardFooter>
    </Card>
      </TabsContent>
      <TabsContent value="foto">
        <Card>
          <CardHeader>
            <CardTitle>Registro Fotográfico</CardTitle>
            <CardDescription>
         Ruta G-21 entre Sector La Hermita – Bifurcación Ruta G-245
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <Image
            src="/vialidad-g245.png"
            alt="Vialidad - Las Puertas"
            className="aspect-auto h-[250px] py-6"
            width={300}
            height={300}
          />

          </CardContent>
          <CardFooter>
            <p>Fotografía obtenida en fecha: 22/06/2024</p>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>

    <Separator></Separator>
  </div>
  </div>

  
);