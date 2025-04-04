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
  { month: "Enero", desktop: 10, mobile: 80 },
  { month: "Febrero", desktop: 4, mobile: 200 },
  { month: "Marzo", desktop: 8, mobile: 120 },
  { month: "Abril", desktop: 11, mobile: 190 },
  { month: "Mayo", desktop: 2, mobile: 130 },
  { month: "Junio", desktop: 7, mobile: 140 },
]
const chartConfig = {
  desktop: {
    label: "Movimiento",
    color: "hsl(var(--chart-1))",
  },
  mobile: {
    label: "Mobile",
    color: "hsl(var(--chart-2))",
  },
  label: {
    color: "hsl(var(--background))",
  },
} satisfies ChartConfig

const chartDatapH = [
    { month: "Enero", desktop: 11 },
    { month: "Febrero", desktop: 8 },
    { month: "Marzo", desktop: 9 },
    { month: "Abril", desktop: 12 },
    { month: "Mayo", desktop: 3 },
    { month: "Junio", desktop: 2 },
  ]
  const chartConfigpH = {
    desktop: {
      label: "Pedregosidad",
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

export const VariablesCav37 = () => (
  <div className="w-full py-6">
    <div className="container mx-auto">
            <div className="flex gap-2 flex-col">
              <div className="py-6">
             <Button className="gap-4 gradient-button">
                Descargar Datos
              </Button> 
            </div>
          </div>
        <Tabs defaultValue="pendientes" className="mx-auto">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="pendientes">Pendientes</TabsTrigger>
        <TabsTrigger value="pedregosidad">Pedregosidad</TabsTrigger>
        <TabsTrigger value="ruegueros">Canalículos o Regueros</TabsTrigger>
      </TabsList>
      <TabsContent value="pendientes">
        <Card>
          <CardHeader>
            <CardTitle>Pendientes</CardTitle>
            <CardDescription>
              Unidad de medida en porcentaje
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
      <TabsContent value="pedregosidad">
        <Card>
          <CardHeader>
            <CardTitle>Pedregosidad</CardTitle>
            <CardDescription>
            <p>Aumento de 10% de superficie de zonas con pedregosidad</p>
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
      <TabsContent value="ruegueros">
        <Card>
          <CardHeader>
            <CardTitle>Canaliculos o regueros</CardTitle>
            <CardDescription>
            <p>Aumento por sobre 3 cm de profundidad de un canaliculo</p>
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

          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
    <Separator className="my-14" />
  </div>
  </div>
);