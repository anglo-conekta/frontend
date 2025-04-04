"use client"
  
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

import { Area, AreaChart, Bar, BarChart, CartesianGrid, Cell, LabelList, Line, LineChart, XAxis } from "recharts"

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

export const description = "Velocidad Viento"

const chartData = [
  { month: "Enero", desktop: 186 },
  { month: "Febrero", desktop: 305 },
  { month: "Marzo", desktop: 237 },
  { month: "Abril", desktop: 73 },
  { month: "Mayo", desktop: 209 },
  { month: "Junio", desktop: 214 },
]

const chartConfig = {
  desktop: {
    label: "m/s",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig


/*Roseta de viento*/
import { PolarAngleAxis, PolarGrid, Radar, RadarChart } from "recharts"


const chartViento = [
  { month: "Norte", desktop: 237 },
  { month: "Noreste", desktop: 214 },
  { month: "Este", desktop: 305 },
  { month: "Sudeste", desktop: 209 },
  { month: "Sur", desktop: 273 },
  { month: "Sudoeste", desktop: 109 },
  { month: "Oeste", desktop: 204 },
  { month: "Noroeste", desktop: 89 },

]

const chartConfigViento = {
  desktop: {
    label: "m/s",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig


/*Temperatura*/

const chartTemp = [
  { month: "Enero", visitors: 32 },
  { month: "Febrero", visitors: 29 },
  { month: "Marzo", visitors: 22 },
  { month: "Abril", visitors: 15 },
  { month: "Mayo", visitors: 8 },
  { month: "Junio", visitors: -2 },
  { month: "Julio", visitors: -10 },
]

const chartConfigTemp = {
  visitors: {
    label: "Temperatura en C°",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig

/*Humedad*/

const chartDataHum = [
  { month: "Enero", desktop: 18 },
  { month: "Febrero", desktop: 35 },
  { month: "Marzo", desktop: 65 },
  { month: "Abril", desktop: 73 },
  { month: "Mayo", desktop: 29 },
  { month: "Junio", desktop: 14 },
]

const chartConfigHum = {
  desktop: {
    label: "HR",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig


/*Presion <Atmosferica*/

const chartDataPres = [
  { month: "Enero", desktop: 1186 },
  { month: "Febrero", desktop: 1305 },
  { month: "Marzo", desktop: 1237 },
  { month: "Abril", desktop: 973 },
  { month: "Mayo", desktop: 809 },
  { month: "Junio", desktop: 1214 },
]

const chartConfigPres = {
  desktop: {
    label: "hPa",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig


/*Precipitacion*/

const chartDataPrecipitacion = [
  { month: "Enero", desktop: 16 },
  { month: "Febrero", desktop: 45 },
  { month: "Marzo", desktop: 37 },
  { month: "Abril", desktop: 73 },
  { month: "Mayo", desktop: 29 },
  { month: "Junio", desktop: 14 },
]

const chartConfigPrecipitacion = {
  desktop: {
    label: "mm/m2",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig


/*Nieve*/

const chartDataNieve = [
  { month: "Enero", desktop: 10 },
  { month: "Febrero", desktop: 5 },
  { month: "March", desktop: 350 },
  { month: "Abril", desktop: 730 },
  { month: "Mayo", desktop: 1209 },
  { month: "Junio", desktop: 1214 },
]

const chartConfigNieve = {
  desktop: {
    label: "mm/m2",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig

export const Pcmps = () => (
  <div className="w-full py-6">
    <div className="container mx-auto">

        <Tabs defaultValue="viento" className="">
      <TabsList className="grid w-full grid-cols-7">
        <TabsTrigger value="viento">Velocidad Viento</TabsTrigger>
        <TabsTrigger value="direccion">Dirección Viento</TabsTrigger>
        <TabsTrigger value="temperatura">Temperatura</TabsTrigger>
        <TabsTrigger value="humedad">Humedad Relativa</TabsTrigger>
        <TabsTrigger value="presion">Presión Atmosférica</TabsTrigger>
        <TabsTrigger value="precipitacion">Precipitación</TabsTrigger>
        <TabsTrigger value="nieve">Altura de Nieve</TabsTrigger>
      </TabsList>
      <TabsContent value="viento">
        <Card>
          <CardHeader>
            <CardTitle>Velocidad Viento</CardTitle>
            <CardDescription>
            m/s - promedios mensuales
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
        <ChartContainer config={chartConfig} className="aspect-auto h-[250px] w-full py-6">
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
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
              /></Bar>
          </BarChart>
        </ChartContainer>
          
      </CardContent>
          <CardFooter>
          <p>Velocidad del viento promedio mensual. Valores dentro de los parámetros habituales. </p>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="direccion">
        <Card>
          <CardHeader>
            <CardTitle>Dirección del Viento</CardTitle>
            <CardDescription>
            Monitoreo de dirección del viento
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
                 <ChartContainer
          config={chartConfigViento}
          className="aspect-auto h-[250px] w-full py-6"
        >
          <RadarChart data={chartViento}>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel className="whitebg"/>}
            />
            <PolarGrid gridType="circle" />
            <PolarAngleAxis dataKey="month" />
            <Radar
              dataKey="desktop"
              fill="var(--color-desktop)"
              fillOpacity={0.6}
              dot={{
                r: 4,
                fillOpacity: 1,
              }}
            />
          </RadarChart>
        </ChartContainer>
          </CardContent>
          <CardFooter>
            <p>Se muestran los promedios mensuales</p>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="temperatura">
        <Card>
          <CardHeader>
            <CardTitle>Temperatura</CardTitle>
            <CardDescription>
            Promedios mensuales expresados en C°
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
   <ChartContainer config={chartConfigTemp}           className="aspect-auto h-[250px] w-full py-6">
          <BarChart accessibilityLayer data={chartTemp}>
            <CartesianGrid vertical={false} />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel hideIndicator className="whitebg"/>}
            />
            <Bar dataKey="visitors">
              <LabelList position="bottom" dataKey="month" fillOpacity={1} />
              {chartData.map((item) => (
                <Cell
                  key={item.month}
                  fill="var(--color-visitors)"
                />
              ))}
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
          <CardFooter>
            <p>Mostrando promedios mensuales. Indicadores de temperaturas esperables.</p>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="humedad">
        <Card>
          <CardHeader>
            <CardTitle>Humedad del ambiente</CardTitle>
            <CardDescription>
            Humedad relativa del ambiente expresada en HR
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
<ChartContainer config={chartConfigHum}>
          <AreaChart
            accessibilityLayer
            data={chartDataHum}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="line" className="whitebg"/>}
            />
            <Area
              dataKey="desktop"
              type="natural"
              fill="var(--color-desktop)"
              fillOpacity={0.4}
              stroke="var(--color-desktop)"
            />
          </AreaChart>
        </ChartContainer>
          </CardContent>
          <CardFooter>
            <p>Mostrando valores promedio de los últimos 6 meses</p>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="presion">

            <Card>
      <CardHeader>
        <CardTitle>Presión Atmosférica</CardTitle>
        <CardDescription>Valores promedio expresados en bars</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfigPres}           className="aspect-auto h-[250px] w-full py-6">
          <LineChart
            accessibilityLayer
            data={chartDataPres}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel className="whitebg"/>}
            />
            <Line
              dataKey="desktop"
              type="linear"
              stroke="var(--color-desktop)"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="leading-none text-muted-foreground">
          Mostrando valores promedio de los últimos 6 meses
        </div>
      </CardFooter>
    </Card>

      </TabsContent>

            <TabsContent value="precipitacion">

    <Card>
      <CardHeader>
        <CardTitle>Precipitación</CardTitle>
        <CardDescription>Mostrando indicadores promedios mensuales expresados en mm/m2</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfigPrecipitacion}           className="aspect-auto h-[250px] w-full py-6">
          <BarChart accessibilityLayer data={chartDataPrecipitacion}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
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
          Mostrando datos promedio de los últimos 6 meses.
        </div>
      </CardFooter>
    </Card>
      </TabsContent>

            <TabsContent value="nieve">
                  <Card>
      <CardHeader>
        <CardTitle>Nieve</CardTitle>
        <CardDescription>
          Mostrando indicadores de promedio de acumulación de nieve expresados en mm/m2
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfigNieve}           className="aspect-auto h-[250px] w-full py-6">
          <AreaChart
            accessibilityLayer
            data={chartDataNieve}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dot" hideLabel className="whitebg"/>}
            />
            <Area
              dataKey="desktop"
              type="linear"
              fill="var(--color-desktop)"
              fillOpacity={0.4}
              stroke="var(--color-desktop)"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
      <CardFooter>
        <div className="flex w-full items-start gap-2 text-sm">
          <div className="grid gap-2">
            <div className="flex items-center gap-2 leading-none text-muted-foreground">
              Mostrando indicadores de los últimos 6 meses
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>

      </TabsContent>

    </Tabs>

    <Separator className="my-14" />
  </div>
  </div>
);
