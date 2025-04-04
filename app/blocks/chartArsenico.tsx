"use client"

import { GitCommitVertical, TrendingUp } from "lucide-react"
import { CartesianGrid, Label, Line, LineChart, ReferenceLine, XAxis } from "recharts"

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



const chartData = [
  { month: "Enero", nivel: 25,},
  { month: "Febrero", nivel: 32,},
  { month: "Marzo", nivel: 28, },
  { month: "Abril", nivel: 37,},
  { month: "Mayo", nivel: 29, },
  { month: "Junio", nivel: 35, },
]

const chartConfig = {
  nivel: {
    label: "nivel",
    color: "hsl(var(--chart-1))",
  },
  mobile: {
    label: "Mobile",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig

export function ChartArsenico() {

  return (
    <Card>
      <CardHeader>
        <CardTitle>Monitoreo Nivel de Arsénico</CardTitle>
        <CardDescription>Período 2024-2025</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
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
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Line
              dataKey="nivel"
              type="natural"
              stroke="var(--color-nivel)"
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
                    stroke="var(--color-nivel)"
                  />
                )
              }}
            />
            <ReferenceLine
                  y={39}
                  stroke="hsl(var(--muted-foreground))"
                  strokeDasharray="3 3"
                  strokeWidth={1}
                >
                  <Label
                    position="insideBottomRight"
                    value="Referencia"
                    offset={10}
                    fill="hsl(var(--foreground))"
                  />
                  <Label
                    position="insideTopRight"
                    value="0,039 +/- 0,039 (mg/l)"
                    className="text-lg"
                    fill="hsl(var(--foreground))"
                    offset={10}
                    startOffset={100}
                  />
                </ReferenceLine>
          </LineChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          Monitoreo del nivel de arsénico medido en mg/l (Micro gramos por litro) <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          El nivel de referencia establecido es de 0,039 +/- 0,039 (mg/l)
        </div>
      </CardFooter>
    </Card>
  )
}
