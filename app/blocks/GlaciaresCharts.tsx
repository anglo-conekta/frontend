"use client"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";



/*ChartConfig*/


import { Bar, BarChart, CartesianGrid, LabelList, XAxis } from "recharts"

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

export const description = "A multiple bar chart"

const chartData = [
  { month: "Enero 2023", desktop: 122 },
  { month: "Febrero 2023 2020", desktop: 114 },
  { month: "Marzo 2023", desktop: 113 },
  { month: "Abril 2023", desktop: 115 },
  { month: "Mayo 2023", desktop: 117 },
  { month: "Junio 2023", desktop: 170 },
    { month: "Julio 2023", desktop: 270 },
      { month: "Agosto 2023", desktop: 155 },
        { month: "Septiembre 2023", desktop: 200 },
  { month: "Octubre 2023", desktop: 100 },
    { month: "Noviembre 2023", desktop: 70 },
      { month: "Diciembre 2023", desktop: 90 },
]

const chartConfig = {
  desktop: {
    label: "MPS",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig



import { Pie, PieChart } from "recharts"

import {
  ChartLegend,
  ChartLegendContent,
} from "@/components/ui/chart"
const chartDataPie = [

  { browser: "safari", visitors: 59, fill: "var(--color-safari)" },
  { browser: "firefox", visitors: 41, fill: "var(--color-firefox)" },
  { browser: "edge", visitors: 8, fill: "var(--color-edge)" },
  { browser: "other", visitors: 92, fill: "var(--color-other)" },
]
const chartConfigPie = {
  visitors: {
    label: "Porcentaje",
  },
  safari: {
    label: "No Fósil WIOC",
    color: "hsl(var(--chart-2))",
  },
  firefox: {
    label: "Fósil WIOC",
    color: "hsl(var(--chart-3))",
  },
  edge: {
    label: "No fósil EC",
    color: "hsl(var(--chart-4))",
  },
  other: {
    label: "Fósil EC",
    color: "hsl(var(--chart-5))",
  },
} satisfies ChartConfig

  export const GlaciaresCharts = () => (
  <div className="w-full py-6">
    <div className="container mx-auto">
        <div className="py-6">
                <h2>Monitoreo MPS</h2>
</div>
        <Tabs defaultValue="depositacion" className="">
      <TabsList className="grid w-full grid-cols-5">
        <TabsTrigger value="depositacion">Tasa de Depositación</TabsTrigger>
        <TabsTrigger value="quimico">Análisis Químico</TabsTrigger>
      </TabsList>
      <TabsContent value="depositacion">
            <Card>
      <CardHeader>
        <CardTitle>Tasa de Depositación de MPS</CardTitle>
        <CardDescription>Unidad de medida: mg/(m2.día)</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="aspect-auto h-[250px] w-full py-6">
          <BarChart
            accessibilityLayer
            data={chartData}
            margin={{
              top: 20,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 4)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel className="whitebg"/>}
            />
            <Bar dataKey="desktop" fill="var(--color-desktop)" radius={8}>
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
          
        </div>
      </CardFooter>
    </Card>
      </TabsContent>
      <TabsContent value="quimico">
        <Card>
          <CardHeader>
            <CardTitle>Análisis químico y mineralógico del MPS </CardTitle>
            <CardDescription>
             (Black Carbon)
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <ChartContainer
          config={chartConfigPie}
          className="aspect-auto h-[250px] w-full py-6"
        >
          <PieChart>
                        <ChartTooltip
              content={<ChartTooltipContent nameKey="visitors" className="whitebg" hideLabel />}
            />
            <Pie data={chartDataPie} dataKey="visitors"
            /> 
            <ChartLegend
              content={<ChartLegendContent nameKey="browser" />}
              className="-translate-y-2 flex-wrap gap-2 [&>*]:basis-1/4 [&>*]:justify-center"
            />
          </PieChart>
        </ChartContainer>
          </CardContent>
          <CardFooter>
            <p>Contribución de partículas de origen fósil y no fósil en WIOC y EC en las muestras de nieve obtenidas desde el Glaciar Olivares Alfa, en 2015</p>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>

  </div>
  </div>

  
);