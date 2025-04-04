"use client"

import { Activity, TrendingUp } from "lucide-react"
import { Area, AreaChart, CartesianGrid, Label, ReferenceLine, XAxis } from "recharts"
/*probando 123*/
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

export const description = "A step area chart"

const chartData = [
  { month: "Enero ", mps: 43 },
  { month: "Febrero", mps: 102 },
  { month: "Marzo", mps: 86 },
  { month: "Abril", mps: 73 },
  { month: "Mayo", mps: 65 },
  { month: "Junio", mps: 184 },
]

const chartConfig = {
  desktop: {
    label: "MPS",
    color: "hsl(var(--chart-1))",
    icon: Activity,
  },
} satisfies ChartConfig

export function Cav1() {
  return (

    <section className="w-full py-6">
          <div className="container mx-auto">
    <Card>
      <CardHeader>
        <CardTitle>Material Particulado Sedimentable</CardTitle>
        <CardDescription>
          Tasas de depositación Material Particulado Sedimentable expresado en mg/m2/dia 
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="aspect-auto h-[250px] w-full py-6">
          <AreaChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
                                              <ReferenceLine
                  y={200}
                  stroke="hsl(var(--muted-foreground))"
                  strokeDasharray="3 3"
                  strokeWidth={1}
                >
                  <Label
                    position="insideBottomLeft"
                    value="Max Promedio Diario"
                    offset={10}
                    fill="hsl(var(--foreground))"
                  />
                  <Label
                    position="insideTopLeft"
                    value="200 mg/m2/dia"
                    className="text-lg"
                    fill="hsl(var(--foreground))"
                    offset={10}
                    startOffset={100}
                  />
                </ReferenceLine>
            <CartesianGrid vertical={true} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={true}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel className="whitebg" />}
            />
            <Area
              dataKey="mps"
              type="step"
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
            <div className="flex items-center gap-2 font-medium leading-none">
              Valores esperables y por debajo de la línea de cumplimiento <TrendingUp className="h-4 w-4" />
            </div>
            <div className="flex items-center gap-2 leading-none text-muted-foreground">
              Enero - Junio 2024
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
    </div>
    </section>
  )
}
