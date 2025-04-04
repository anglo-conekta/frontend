"use client"
import { Area, AreaChart, Bar, BarChart, CartesianGrid, LabelList, XAxis, YAxis } from "recharts"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
export const description = "A bar chart with a custom label"
const chartData = [
  { month: "Enero", desktop: 186, mobile: 80 },
  { month: "Febrero", desktop: 305, mobile: 200 },
  { month: "Marzo", desktop: 237, mobile: 120 },
  { month: "Abril", desktop: 73, mobile: 190 },
  { month: "Mayo", desktop: 209, mobile: 130 },
  { month: "Junio", desktop: 214, mobile: 140 },
]
const chartConfig = {
  desktop: {
    label: "",
    color: "hsl(var(--chart-1))",
  },
  mobile: {
    label: "PH",
    color: "hsl(var(--chart-2))",
  },
  label: {
    color: "hsl(var(--background))",
  },
} satisfies ChartConfig

const chartDatapH = [
    { month: "Enero", desktop: 186 },
    { month: "Febrero", desktop: 305 },
    { month: "Marzo", desktop: 237 },
    { month: "Abril", desktop: 73 },
    { month: "Mayo", desktop: 209 },
    { month: "Junio", desktop: 214 },
  ]
  const chartConfigpH = {
    desktop: {
      label: "Salinidad",
      color: "hsl(var(--chart-1))",
    },
  } satisfies ChartConfig
  
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

export const VariablesECA9 = () => (
  <div className="w-full py-6">
    <div className="container mx-auto">

            <div className="">
              <h4 className="pretty max-w-xl text-left font-regular">
              Suelo
              </h4>
              <p className="text-lg leading-relaxed tracking-tight text-muted-foreground text-left">
               Monitorear la evolución de las características fisicoquímicas de los suelos en la vega en Piedra Carvajal, respecto a lo registrado en la línea de Base de Suelos.
              </p>
          </div>
        <Tabs defaultValue="organica" className="">
      <TabsList className="grid w-full grid-cols-5">
        <TabsTrigger value="organica">Materia Orgánica</TabsTrigger>
        <TabsTrigger value="salinidad">Salinidad</TabsTrigger>
        <TabsTrigger value="acidez">Acidez del Suelo</TabsTrigger>
        <TabsTrigger value="temperatura">Temperatura</TabsTrigger>
        <TabsTrigger value="humedad">Humedad</TabsTrigger>
      </TabsList>
      <TabsContent value="organica">
        <Card>
          <CardHeader>
            <CardTitle>Contenido de materia orgánica</CardTitle>
            <CardDescription>
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
          <ChartContainer config={chartConfig} className="aspect-auto h-[250px] w-full py-6">
          <BarChart
            accessibilityLayer
            data={chartData}
            layout="vertical"
            margin={{
              right: 16,
            }}
          >
            <CartesianGrid horizontal={false} />
            <YAxis
              dataKey="month"
              type="category"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
              hide
            />
            <XAxis dataKey="desktop" type="number" hide />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="line" className="whitebg" />}
            />
            <Bar
              dataKey="desktop"
              layout="vertical"
              fill="var(--color-desktop)"
              radius={4}
            >
              <LabelList
                dataKey="month"
                position="insideLeft"
                offset={8}
                className="fill-[--color-label]"
                fontSize={12}
              />
              <LabelList
                dataKey="desktop"
                position="right"
                offset={8}
                className="fill-foreground"
                fontSize={12}
              />
            </Bar>
          </BarChart>
        </ChartContainer>
      </CardContent>
          <CardFooter>
          <p>%MO
          Contenido de materia orgánica: O 0-36 cm: raíces y restos vegetales con distinto grado de descomposición</p>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="salinidad">
        <Card>
          <CardHeader>
            <CardTitle>Salinidad</CardTitle>
            <CardDescription>
            dS m-1
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
          <ChartContainer config={chartConfigpH} className="aspect-auto h-[250px] w-full py-6">
          <BarChart
            accessibilityLayer
            data={chartDatapH}
            layout="vertical"
            margin={{
              right: 16,
            }}
          >
            <CartesianGrid horizontal={false} />
            <YAxis
              dataKey="month"
              type="category"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
              hide
            />
            <XAxis dataKey="desktop" type="number" hide />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="line" className="whitebg"/>}
            />
            <Bar
              dataKey="desktop"
              layout="vertical"
              fill="var(--color-desktop)"
              radius={4}
            >
              <LabelList
                dataKey="month"
                position="insideLeft"
                offset={8}
                className="fill-[--color-label]"
                fontSize={12}
              />
              <LabelList
                dataKey="desktop"
                position="right"
                offset={8}
                className="fill-foreground"
                fontSize={12}
              />
            </Bar>
          </BarChart>
        </ChartContainer>
          </CardContent>
          <CardFooter>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="acidez">
        <Card>
          <CardHeader>
            <CardTitle>Acidez del Suelo</CardTitle>
            <CardDescription>
            ph
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
          <ChartContainer config={chartConfig} className="aspect-auto h-[250px] w-full py-6">
          <AreaChart
            accessibilityLayer
            data={chartData}
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
            <p>Indicador de cumplimiento: Acidéz del Suelo: No calcáreo</p>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="temperatura">
        <Card>
          <CardHeader>
            <CardTitle>Temperatura</CardTitle>
            <CardDescription>
            C°
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
          <ChartContainer config={chartConfig} className="aspect-auto h-[250px] w-full py-6">
          <AreaChart
            accessibilityLayer
            data={chartData}
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
              content={<ChartTooltipContent indicator="dot" hideLabel />}
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
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="humedad">
        <Card>
          <CardHeader>
            <CardTitle>Humedad del ambiente</CardTitle>
            <CardDescription>
            Humedad relativa del ambiente (HR)
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
          <ChartContainer config={chartConfig} className="aspect-auto h-[250px] w-full py-6">
          <AreaChart
            accessibilityLayer
            data={chartData}
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
              content={<ChartTooltipContent indicator="dot" hideLabel />}
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
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>

    <Separator className="my-14" />
  </div>
  </div>
);