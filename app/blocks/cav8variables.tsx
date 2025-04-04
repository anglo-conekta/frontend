"use client"
import { Bar, BarChart, CartesianGrid, LabelList, XAxis, YAxis } from "recharts"
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
  { month: "January", desktop: 186, mobile: 80 },
  { month: "February", desktop: 305, mobile: 200 },
  { month: "March", desktop: 237, mobile: 120 },
  { month: "April", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "June", desktop: 214, mobile: 140 },
]
const chartConfig = {
  desktop: {
    label: "Desktop",
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
    { month: "January", desktop: 186 },
    { month: "February", desktop: 305 },
    { month: "March", desktop: 237 },
    { month: "April", desktop: 73 },
    { month: "May", desktop: 209 },
    { month: "June", desktop: 214 },
  ]
  const chartConfigpH = {
    desktop: {
      label: "Desktop",
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

export const VariablesCav8 = () => (
  <div className="w-full py-6">
    <div className="container mx-auto">

            <div className="flex gap-2 flex-col">
              <h4 className="pretty max-w-xl text-left font-regular">
              Ecosistemas Acuáticos Continentales
              </h4>
              <p className="text-lg max-w-xl lg:max-w-lg leading-relaxed tracking-tight text-muted-foreground  text-left">
               Trimestral - Vega Piedra Carvajal</p>

            <div className="py-6">
             <Button className="gap-4 gradient-button">
                Descargar Datos
              </Button> 
            </div>
          </div>
        <Tabs defaultValue="agua" className="">
      <TabsList className="grid w-full grid-cols-5">
        <TabsTrigger value="agua">Agua</TabsTrigger>
        <TabsTrigger value="biota">Biota</TabsTrigger>
        <TabsTrigger value="sedimentos">Sedimentos</TabsTrigger>
      </TabsList>
      <TabsContent value="agua">
        <Card>
          <CardHeader>
            <CardTitle>Agua</CardTitle>
            <CardDescription>
            Info
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
              content={<ChartTooltipContent indicator="line" />}
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
          <p>Info</p>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="biota">
        <Card>
          <CardHeader>
            <CardTitle>Biota</CardTitle>
            <CardDescription>
            Info
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
          <ChartContainer config={chartConfigpH}>
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
              content={<ChartTooltipContent indicator="line" />}
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
            <p>Mas información</p>
          </CardFooter>
        </Card>
      </TabsContent>
        <TabsContent value="sedimentos">
        <Card>
          <CardHeader>
            <CardTitle>Sedimentos</CardTitle>
            <CardDescription>
           Info
                       </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
          <ChartContainer config={chartConfigpH}>
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
              content={<ChartTooltipContent indicator="line" />}
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
            <p>Mas información</p>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>

    <Separator className="my-14" />
  </div>
  </div>
);