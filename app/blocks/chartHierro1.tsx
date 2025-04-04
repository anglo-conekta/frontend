"use client"

import * as React from "react"
import { Area, AreaChart, CartesianGrid, Label, ReferenceLine, XAxis, YAxis } from "recharts"

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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Button } from "@/components/ui/button"
const chartData = [
  { date: "2024-04-01", nivel: 2.5, },
  { date: "2024-04-02", nivel: 3.7, },
  { date: "2024-04-03", nivel: -3.2, },
  { date: "2024-04-04", nivel: -2.9,  },
  { date: "2024-04-05", nivel: -3.1, },
  { date: "2024-04-06", nivel: -2.0, },
  { date: "2024-04-07", nivel: -2.5, },
  { date: "2024-04-08", nivel: -2.2,  },
  { date: "2024-04-09", nivel: -3.5, },
  { date: "2024-04-10", nivel: -3.8,  },
  { date: "2024-04-11", nivel: 3.1, },
  { date: "2024-04-12", nivel: 3.8, },
  { date: "2024-04-13", nivel: 3.3,  },
  { date: "2024-04-14", nivel: 2.9, },
  { date: "2024-04-15", nivel: 2.2,  },
  { date: "2024-04-16", nivel: 2.5, },
  { date: "2024-04-17", nivel: 3.1, },
  { date: "2024-04-18", nivel: 2.9, },
  { date: "2024-04-19", nivel: -3.2, },
  { date: "2024-04-20", nivel: -3.7, },
  { date: "2024-04-21", nivel: -3.5, },
  { date: "2024-04-22", nivel: -3.7, },
  { date: "2024-04-23", nivel: -3.1, },
  { date: "2024-04-24", nivel: -2.9, },
  { date: "2024-04-25", nivel: 2.2,  },
  { date: "2024-04-26", nivel: 3.8, },
  { date: "2024-04-27", nivel: 3.2, },
  { date: "2024-04-28", nivel: 3.1, },
  { date: "2024-04-29", nivel: -2.9,  },
  { date: "2024-04-30", nivel: -2.5,},
  { date: "2024-05-01", nivel: -2.8,},
  { date: "2024-05-02", nivel: -3.4,},
  { date: "2024-05-03", nivel: 3.7, },
  { date: "2024-05-04", nivel: 3.8, },
  { date: "2024-05-05", nivel: 3.3, },
  { date: "2024-05-06", nivel: 2.9, },
  { date: "2024-05-07", nivel: -2.9, },
  { date: "2024-05-08", nivel: -2.5,  },
  { date: "2024-05-09", nivel: -2.8,  },
  { date: "2024-05-10", nivel: -3.1,  },
  { date: "2024-05-11", nivel: -3.5,  },
  { date: "2024-05-12", nivel: 3.7, },
  { date: "2024-05-13", nivel: 3.2, },
  { date: "2024-05-14", nivel: 2.9, },
  { date: "2024-05-15", nivel: -2.7, },
  { date: "2024-05-16", nivel: -3.2,  },
  { date: "2024-05-17", nivel: -3.5, },
  { date: "2024-05-18", nivel: -3.7, },
  { date: "2024-05-19", nivel: 2.9,  },
  { date: "2024-05-20", nivel: 2.2, },
  { date: "2024-05-21", nivel: 2.5,  },
  { date: "2024-05-22", nivel: 3.1,  },
  { date: "2024-05-23", nivel: 3.5,  },
  { date: "2024-05-24", nivel: -2.7, },
  { date: "2024-05-25", nivel: -2.9,  },
  { date: "2024-05-26", nivel: -3.3,  },
  { date: "2024-05-27", nivel: -3.8, },
  { date: "2024-05-28", nivel: -3.5,},
  { date: "2024-05-29", nivel: 3.4,  },
  { date: "2024-05-30", nivel: 2.9, },
  { date: "2024-05-31", nivel: 2.8, },
  { date: "2024-06-01", nivel: 2.2, },
  { date: "2024-06-02", nivel: -2.7, },
  { date: "2024-06-03", nivel: -3.2,},
  { date: "2024-06-04", nivel: -3.1,  },
  { date: "2024-06-05", nivel: 3.5,  },
  { date: "2024-06-06", nivel: 3.8, },
  { date: "2024-06-07", nivel: 3.7,  },
  { date: "2024-06-08", nivel: -3.3, },
  { date: "2024-06-09", nivel: -3.1,},
  { date: "2024-06-10", nivel: -3.5, },
  { date: "2024-06-11", nivel: -3.7, },
  { date: "2024-06-12", nivel: 3.4, },
  { date: "2024-06-13", nivel: 3.2, },
  { date: "2024-06-14", nivel: 3.3, },
  { date: "2024-06-15", nivel: 3.0,},
  { date: "2024-06-16", nivel: -3.4,},
  { date: "2024-06-17", nivel: -3.7, },
  { date: "2024-06-18", nivel: -3.8, },
  { date: "2024-06-19", nivel: -3.4,},
  { date: "2024-06-20", nivel: 3.2, },
  { date: "2024-06-21", nivel: 2.9, },
  { date: "2024-06-22", nivel: 3.3, },
  { date: "2024-06-23", nivel: 3.8, },
  { date: "2024-06-24", nivel: 3.5, },
  { date: "2024-06-25", nivel: -3.3, },
  { date: "2024-06-26", nivel: -3.4, },
  { date: "2024-06-27", nivel: -3.8, },
  { date: "2024-06-28", nivel: 3.9, },
  { date: "2024-06-29", nivel: 3.3, },
  { date: "2024-06-30", nivel: 3.6, },
]

const chartConfig = {
  visitors: {
    label: "Hierro",
  },
  nivel: {
    label: "nivel",
    color: "hsl(var(--chart-3))",
  },
} satisfies ChartConfig

export function ChartHierro1() {
  const [timeRange, setTimeRange] = React.useState("90d")

  const filteredData = chartData.filter((item) => {
    const date = new Date(item.date)
    const referenceDate = new Date("2024-06-30")
    let daysToSubtract = 90
    if (timeRange === "30d") {
      daysToSubtract = 30
    } else if (timeRange === "7d") {
      daysToSubtract = 7
    }
          else if (timeRange === "3d") {
      daysToSubtract = 3
    }
    const startDate = new Date(referenceDate)
    startDate.setDate(startDate.getDate() - daysToSubtract)
    return date >= startDate
  })

  return (
    <Card>
      <CardHeader className="flex items-center gap-2 space-y-0 border-b py-5 sm:flex-row">
        <div className="grid flex-1 gap-1 text-center sm:text-left">
          <CardTitle>Potencial de Hidrogeno Dren ME</CardTitle>
          <CardDescription>
            Período 2024-2025
          </CardDescription>
        </div>
        <Select value={timeRange} onValueChange={setTimeRange}>
          <SelectTrigger
            className="w-[160px] rounded-lg sm:ml-auto"
            aria-label="Seleccionar"
          >
            <SelectValue placeholder="Last 3 months" />
          </SelectTrigger>
          <SelectContent className="rounded-xl">
            <SelectItem value="90d" className="rounded-lg">
              Últimos 3 meses
            </SelectItem>
            <SelectItem value="30d" className="rounded-lg">
              Últimos 30 días
            </SelectItem>
            <SelectItem value="7d" className="rounded-lg">
              Últimos 7 días
            </SelectItem>
                          <SelectItem value="3d" className="rounded-lg">
                          Desde la última publicación
                        </SelectItem>
          </SelectContent>
        </Select>
                                  <div className='hidden items-center space-x-2 md:flex'>
            <Button>Descargar</Button>
          </div>
      </CardHeader>
      <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[250px] w-full py-6"
        >
          <AreaChart data={filteredData}>
            <defs>
              <linearGradient id="fillnivel" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-nivel)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-nivel)"
                  stopOpacity={0.1}
                />
              </linearGradient>
              <linearGradient id="fillMobile" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-mobile)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-mobile)"
                  stopOpacity={0.1}
                />
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} />
            <YAxis    domain={[-8,8]}         />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={(value) => {
                const date = new Date(value)
                return date.toLocaleDateString("es-ES", {
                  month: "short",
                  day: "numeric",
                })
              }}
            />
            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent className="whitebg"
                  labelFormatter={(value) => {
                    return new Date(value).toLocaleDateString("es-ES", {
                      month: "short",
                      day: "numeric",
                    })
                  }}
                  indicator="dot"
                />
              }
            />
            <Area
              dataKey="nivel"
              type="natural"
              fill="url(#fillnivel)"
              stroke="var(--color-nivel)"
              stackId="a"
            />
                        <ReferenceLine
                              y={4}
                              stroke="hsl(var(--muted-foreground))"
                              strokeDasharray="3 3"
                              strokeWidth={1}
                            >
                              <Label
                                position="insideBottomRight"
                                value="Referencia: 4,0 (mg/l)"
                                className="text-lg"
                                fill="hsl(var(--foreground))"
                                offset={20}
                                startOffset={100}
                              />
                            </ReferenceLine>

                                                    <ReferenceLine
                              y={-4}
                              stroke="hsl(var(--muted-foreground))"
                              strokeDasharray="3 3"
                              strokeWidth={1}
                            >
                              <Label
                                position="insideTopRight"
                                value="Referencia: - 4,0 (mg/l)"
                                className="text-lg"
                                fill="hsl(var(--foreground))"
                                offset={20}
                                startOffset={100}
                              />
                            </ReferenceLine>
                     <ReferenceLine x="2024-06-24" stroke="43.3 96.4% 56.3%" strokeWidth={4} label="Sin Publicar" />
                            
          </AreaChart>
        </ChartContainer>
      </CardContent>
            <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          Monitoreo del nivel de hierro medido en mg/l (Micro gramos por Litro)
        </div>
        <div className="leading-none text-muted-foreground">
          El nivel de referencia establecido es de 4,0 +/- 4,0 (mg/l)
        </div>
      </CardFooter>
    </Card>
  )
}
