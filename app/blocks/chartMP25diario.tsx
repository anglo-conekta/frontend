"use client"

import { GitCommitVertical, TrendingUp } from "lucide-react"
import { CartesianGrid, Line, LineChart, XAxis,} from "recharts"

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

export const description = "MPS 10"

const chartData = [

  { date: "Enero", desktop: 102, mobile: 150 },
  { date: "Febrero", desktop: 97, mobile: 180 },
  { date: "Marzo", desktop: 125, mobile: 120 },
  { date: "Abril", desktop: 35, mobile: 260 },
  { date: "Mayo", desktop: 48, mobile: 290 },
  { date: "Junio", desktop: 98, mobile: 340 },
  { date: "Julio", desktop: 55, mobile: 180 },
  { date: "Agosto", desktop: 78, mobile: 320 },
  { date: "Septiembre", desktop: 82, mobile: 110 },
  { date: "Octubre", desktop: 65, mobile: 190 },
  { date: "Noviembre", desktop: 58, mobile: 350 },
  { date: "Diciembre", desktop: 43, mobile: 210 },
]
const chartConfig = {
  views: {
    label: "Page Views",
  },
  desktop: {
    label: "MP2.5",
    color: "hsl(var(--chart-1))",
  },
  mobile: {
    label: "Mobile",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig

export function ChartMP25diario() {
  return (
      <div className="w-full py-6">
    <div className="container mx-auto">
    <Card>
      <CardHeader>
        <CardTitle>MP2.5 - Indicador diario</CardTitle>
        <CardDescription></CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}  className="aspect-auto h-[250px] w-full py-6">
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
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
              type="natural"
              stroke="var(--color-desktop)"
              strokeWidth={2}
              dot={({ cx, cy, payload }) => {
                const r = 24
                return (
                  <GitCommitVertical
                    key={payload.month}
                    x={cx - r / 2}
                    y={cy - r / 2}
                    width={r}
                    height={r}
                    fill="hsl(var(--background))"
                    stroke="var(--color-desktop)"
                  />
                )
              }}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          Valores normales esperados <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
           MP2.5
        </div>
      </CardFooter>
    </Card>
    </div>
    </div>
  )
}
