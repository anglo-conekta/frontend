"use client"

import { TrendingUp } from "lucide-react"
import { Bar, BarChart, CartesianGrid, LabelList, XAxis } from "recharts"

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

export const description = "Promedios Anuales"

const chartData = [
  { year: "2019", desktop: 22 },
  { year: "2020", desktop: 14 },
  { year: "2021", desktop: 13 },
  { year: "2022", desktop: 15 },
  { year: "2023", desktop: 17 },
  { year: "2024", desktop: 17 },
]

const chartConfig = {
  desktop: {
    label: "MP10",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig

export function ChartLaErmitaProm() {
  return (
          <div className="w-full py-6">
    <div className="container mx-auto">
    <Card>
      <CardHeader>
        <CardTitle>MP10 - Registro Diario - Promedio Anual</CardTitle>
        <CardDescription>Hasta septiembre 2024</CardDescription>
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
              dataKey="year"
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
        <div className="flex gap-2 font-medium leading-none">
          Tendencia normal <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Mostrando últimos 6 años
        </div>
      </CardFooter>
    </Card>
    </div>
    </div>
  )
}