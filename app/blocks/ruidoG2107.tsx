"use client"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";


/*ChartConfig*/


import { Bar, BarChart, CartesianGrid, Label, ReferenceLine, XAxis } from "recharts"

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import PdfRuido07 from "@/components/ui/pdfRuido07";

export const description = "A multiple bar chart"

const chartData = [

    { month: "Basal", npsmax: 64,},
   { month: "Semestre 1", npsmax: 54,},
   { month: "Semestre 2", npsmax: 66,},
     { month: "Semestre 3", npsmax: 48,},
]

const chartConfig = {
  npsmin: {
    label: "LdN",
    color: "hsl(var(--chart-1))",
  },
    npsmax: {
    label: "LdN",
    color: "hsl(var(--chart-2))",
  },
    npseq: {
    label: "LdN",
    color: "hsl(var(--chart-3))",
  },
} satisfies ChartConfig

  export const G2107 = () => (
  <div className="w-full py-6">
    <div className="container mx-auto">
                <div className="py-6">
        <h2>Registro Base punto G21-07</h2>
</div>
        <Tabs defaultValue="ruido" className="">
      <TabsList className="grid w-full grid-cols-5">
        <TabsTrigger value="ruido">LdN Estimado</TabsTrigger>
        <TabsTrigger value="foto">Ficha de Registro</TabsTrigger>
      </TabsList>
      <TabsContent value="ruido">
            <Card>
      <CardHeader>
        <CardTitle>Nivel sonoro</CardTitle>
        <CardDescription>Mostrando el nivel sonoro medido en dB(A).</CardDescription>
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
              tickFormatter={(value) => value.slice(0, 15)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dashed" className="whitebg"/>}
            />
            <Bar dataKey="npsmax" fill="var(--color-npsmax)" radius={4} />
                                    <ReferenceLine
                  y={64}
                  stroke="hsl(var(--muted-foreground))"
                  strokeDasharray="3 3"
                  strokeWidth={1}
                >
                  <Label
                    position="insideBottomRight"
                    value="Dato basal"
                    offset={10}
                    fill="hsl(var(--foreground))"
                  />
                  <Label
                    position="insideTopRight"
                    value="Moderado"
                    className="text-lg"
                    fill="hsl(var(--foreground))"
                    offset={10}
                    startOffset={100}
                  />
                </ReferenceLine>
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="leading-none text-muted-foreground">
        </div>
      </CardFooter>
    </Card>
      </TabsContent>
      <TabsContent value="foto">
        <Card>
          <CardHeader>
            <CardTitle>Ficha de Registro</CardTitle>
            <CardDescription>
             Registro Base punto G21-07
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">

        <PdfRuido07></PdfRuido07>
          </CardContent>
          <CardFooter>
            <p></p>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>

              <Separator className="my-14" />
  </div>
  </div>
);