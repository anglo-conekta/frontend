"use client"

//import * as React from "react"
import React, { useState, useEffect } from 'react';
import { Area, AreaChart, CartesianGrid, Label, ReferenceLine, XAxis, YAxis } from "recharts";

//import { Area, AreaChart, CartesianGrid, Label, ReferenceLine, XAxis, YAxis } from "recharts"

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

interface GraficoDataItem {
  date: string;
  nivel: number;
}

async function getChartArsenico1() {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:1337";
  const path = `/api/arsenico-data`;

  const url = new URL(path, baseUrl);

  const res = await fetch(url, {
    cache: 'no-store',
    });

  if (!res.ok) throw new Error("Failed to fetch calendario");

  const data = await res.json();
  //console.log(data);
  //const titulo1 = data.data.titulo1;

return {
    arsenico1: {
      //tituloclr: data.data.titulocldr, // Cambiamos el nombre de la prop a "listaDeProductos"
      //subtitulocldr: data.data.subtitulocldr, // Cambiamos el nombre de la prop a "listaDeProductos"
      dia1: data.data.dia1,
      data1: data.data.data1,
      dia2: data.data.dia2,
      data2: data.data.data2,
      dia3: data.data.dia3,
      data3: data.data.data3,
      dia4: data.data.dia4,
      data4: data.data.data4,
      dia5: data.data.dia5,
      data5: data.data.data5,
      dia6: data.data.dia6,
      data6: data.data.data6,
      dia7: data.data.dia7,
      data7: data.data.data7,
      dia8: data.data.dia8,
      data8: data.data.data8,
      dia9: data.data.dia9,
      data9: data.data.data9,
      dia10: data.data.dia10,
      data10: data.data.data10,
      dia11: data.data.dia11,
      data11: data.data.data11,
      dia12: data.data.dia12,
      data12: data.data.data12,
      dia13: data.data.dia13,
      data13: data.data.data13,
      dia14: data.data.dia14,
      data14: data.data.data14,
      dia15: data.data.dia15,
      data15: data.data.data15,
      dia16: data.data.dia16,
      data16: data.data.data16,
      dia17: data.data.dia17,
      data17: data.data.data17,
      dia18: data.data.dia18,
      data18: data.data.data18,
      dia19: data.data.dia19,
      data19: data.data.data19,
      dia20: data.data.dia20,
      data20: data.data.data20,
      dia21: data.data.dia21,
      data21: data.data.data21,
      dia22: data.data.dia22,
      data22: data.data.data22,
      dia23: data.data.dia23,
      data23: data.data.data23,
      dia24: data.data.dia24,
      data24: data.data.data24,
      dia25: data.data.dia25,
      data25: data.data.data25,
      dia26: data.data.dia26,
      data26: data.data.data26,
      dia27: data.data.dia27,
      data27: data.data.data27,
      dia28: data.data.dia28,
      data28: data.data.data28,
      dia29: data.data.dia29,
      data29: data.data.data29,
      dia30: data.data.dia30,
      data30: data.data.data30,
    },
  };
  //console.log(arsenico1);
}

export default async function despliegachart(diaPropiedad: string) {
  const dataArsenico1 = await getChartArsenico1();
  //const valorDeseado = dataArsenico1?.arsenico1?.[diaPropiedad]; // Acceso dinámico a la propiedad
  const valorDeseado = (dataArsenico1?.arsenico1 as any)?.[diaPropiedad];

  //console.log(valorDeseado);
  return valorDeseado;
}

async function getGraficoData() {

const dia200 = await despliegachart('dia20');
const d20 = dia200.toString();
const dia210 = await despliegachart('dia21');
const d21 = dia210.toString();
const dia220 = await despliegachart('dia22');
const d22 = dia220.toString();
const dia230 = await despliegachart('dia23');
const d23 = dia230.toString();
const dia240 = await despliegachart('dia24');
const d24 = dia240.toString();
const dia250 = await despliegachart('dia25');
const d25 = dia250.toString();
const dia260 = await despliegachart('dia26');
const d26 = dia260.toString();
const dia270 = await despliegachart('dia27');
const d27 = dia270.toString();

const dia280 = await despliegachart('dia28');
const d28 = dia280.toString();
const dia290 = await despliegachart('dia29');
const d29 = dia290.toString();
const dia300 = await despliegachart('dia30');
const d30 = dia300.toString();
const valor21 = await despliegachart('data21');
const valor22 = await despliegachart('data22');
const valor23 = await despliegachart('data23');
const valor24 = await despliegachart('data24');
const valor25 = await despliegachart('data25');
const valor26 = await despliegachart('data26');
const valor27 = await despliegachart('data27');
const valor28 = await despliegachart('data28');
const valor29 = await despliegachart('data29');
const valor30 = await despliegachart('data30');

const data = [
  { date: "2024-04-01", nivel: 0.025, },
  { date: "2024-04-02", nivel: -0.037, },
  { date: "2024-04-03", nivel: 0.032, },
  { date: "2024-04-04", nivel: -0.029,  },
  { date: "2024-04-05", nivel: 0.031, },
  { date: "2024-04-06", nivel: 0.020, },
  { date: "2024-04-07", nivel: -0.025, },
  { date: "2024-04-08", nivel: 0.022,  },
  { date: "2024-04-09", nivel: -0.035, },
  { date: "2024-04-10", nivel: 0.038,  },
  { date: "2024-04-11", nivel: -0.031, },
  { date: "2024-04-12", nivel: -0.038, },
  { date: "2024-04-13", nivel: 0.033,  },
  { date: "2024-04-14", nivel: 0.029, },
  { date: "2024-04-15", nivel: -0.022,  },
  { date: "2024-04-16", nivel: 0.025, },
  { date: "2024-04-17", nivel: -0.031, },
  { date: "2024-04-18", nivel: -0.029, },
  { date: "2024-04-19", nivel: 0.032, },
  { date: "2024-04-20", nivel: -0.037, },
  { date: "2024-04-21", nivel: -0.035, },
  { date: "2024-04-22", nivel: 0.037, },
  { date: "2024-04-23", nivel: -0.031, },
  { date: "2024-04-24", nivel: 0.029, },
  { date: "2024-04-25", nivel: -0.022,  },
  { date: "2024-04-26", nivel: 0.038, },
  { date: "2024-04-27", nivel: 0.032, },
  { date: "2024-04-28", nivel: -0.031, },
  { date: "2024-04-29", nivel: -0.029,  },
  { date: "2024-04-30", nivel: 0.025,},
  { date: "2024-05-01", nivel: 0.028,},
  { date: "2024-05-02", nivel: -0.034,},
  { date: "2024-05-03", nivel: 0.037, },
  { date: "2024-05-04", nivel: -0.038, },
  { date: "2024-05-05", nivel: 0.033, },
  { date: "2024-05-06", nivel: -0.029, },
  { date: "2024-05-07", nivel: 0.029, },
  { date: "2024-05-08", nivel: 0.025,  },
  { date: "2024-05-09", nivel: -0.028,  },
  { date: "2024-05-10", nivel: 0.031,  },
  { date: "2024-05-11", nivel: 0.035,  },
  { date: "2024-05-12", nivel: -0.037, },
  { date: "2024-05-13", nivel: 0.032, },
  { date: "2024-05-14", nivel: 0.029, },
  { date: "2024-05-15", nivel: -0.027, },
  { date: "2024-05-16", nivel: 0.032,  },
  { date: "2024-05-17", nivel: -0.035, },
  { date: "2024-05-18", nivel: 0.037, },
  { date: "2024-05-19", nivel: 0.029,  },
  { date: "2024-05-20", nivel: 0.022, },
  { date: "2024-05-21", nivel: -0.025,  },
  { date: "2024-05-22", nivel: 0.031,  },
  { date: "2024-05-23", nivel: 0.035,  },
  { date: "2024-05-24", nivel: 0.027, },
  { date: "2024-05-25", nivel: 0.029,  },
  { date: "2024-05-26", nivel: 0.033,  },
  { date: "2024-05-27", nivel: -0.038, },
  { date: "2024-05-28", nivel: -0.035,},
  { date: "2024-05-29", nivel: 0.034,  },
  { date: "2024-05-30", nivel: 0.029, },
  { date: "2024-05-31", nivel: -0.028, },
  { date: "2024-06-01", nivel: -0.022, },
  { date: "2024-06-02", nivel: 0.027, },
  { date: "2024-06-03", nivel: -0.032,},
  { date: "2024-06-04", nivel: -0.031,  },
  { date: "2024-06-05", nivel: 0.035,  },
  { date: "2024-06-06", nivel: 0.038, },
  { date: "2024-06-07", nivel: 0.037,  },
  { date: "2024-06-08", nivel: 0.033, },
  { date: "2024-06-09", nivel: 0.031,},
  { date: "2024-06-10", nivel: -0.035, },
  { date: "2024-06-11", nivel: -0.037, },
  { date: "2024-06-12", nivel: 0.034, },
  { date: "2024-06-13", nivel: 0.032, },
  { date: "2024-06-14", nivel: -0.033, },
  { date: "2024-06-15", nivel: -0.030,},
  { date: "2024-06-16", nivel: 0.034,},
  { date: "2024-06-17", nivel: -0.037, },
  { date: "2024-06-18", nivel: -0.038, },
  { date: "2024-06-19", nivel: -0.034,},
  { date: d20, nivel: 0.034, },
  { date: d21, nivel: valor21, },
  { date: d22, nivel: valor22, },
  { date: d23, nivel: valor23, },
  { date: d24, nivel: valor24, },
  { date: d25, nivel: valor25, },
  { date: d26, nivel: valor26, },
  { date: d27, nivel: valor27, },
  { date: d28, nivel: valor28, },
  { date: d29, nivel: valor29, },
  { date: d30, nivel: valor30, },
]
//console.log(data);
return data;

}

async function getFechaPublica() {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:1337";
  const path = `/api/dboard-public`;

  const url = new URL(path, baseUrl);

  const res = await fetch(url, {
    cache: 'no-store',
    });

  if (!res.ok) throw new Error("Failed to fetch fecha ultima publicacion");

  const data = await res.json();

return {
    fecultpub: {
      fecultima: data.data.fecha_ult,
    },
};
}

const chartConfig = {
  visitors: {
    label: "Arsénico",
  },
  nivel: {
    label: "nivel",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig

export function ChartArsenico1() {
  const [timeRange, setTimeRange] = useState("90d");
  const [graficoData, setGraficoData] = useState<GraficoDataItem[]>([]);

  const [fec_ultima_publica, setFecUltimaPublica] = useState<string | null>(null);

    useEffect(() => {
        async function fetchData() {
            const grafico = await getGraficoData();
            setGraficoData(grafico);

            const ultimaPublicacion = await getFechaPublica();
            setFecUltimaPublica(ultimaPublicacion?.fecultpub?.fecultima || null);
        }
        fetchData();
    }, []);

  const filteredData = graficoData.filter((item) => {
    const date = new Date(item.date);
    console.log("Fecha creada:", date.toISOString());
   // console.log(date);
    const referenceDate = new Date("2024-07-01");
    let daysToSubtract = 90;
    if (timeRange === "30d") {
      daysToSubtract = 30;
    } else if (timeRange === "7d") {
      daysToSubtract = 7;
    } else if (timeRange === "3d") {
      daysToSubtract = 3;
    }
    const startDate = new Date(referenceDate);
    startDate.setDate(startDate.getDate() - daysToSubtract);
    return date >= startDate;
  });

  return (
    <Card>
      <CardHeader className="flex items-center gap-2 space-y-0 border-b py-5 sm:flex-row">
        <div className="grid flex-1 gap-1 text-center sm:text-left">
          <CardTitle>Potencial de Hidrogeno PME 10</CardTitle>
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
                     <YAxis    domain={[-0.07,0.07]}         />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={(value) => {
                console.log(value);
                const date = new Date(value)
                return date.toLocaleDateString("es-CL", {
                  month: "short",
                  day: "numeric",
                  timeZone: 'Europe/Madrid'
                })
              }}
            />
            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent className="whitebg"
                  labelFormatter={(value) => {
                    console.log(value);
                    return new Date(value).toLocaleDateString("es-CL", {
                      month: "short",
                      day: "numeric",
                      timeZone: 'Europe/Madrid'
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
                              y={0.039}
                              stroke="hsl(var(--muted-foreground))"
                              strokeDasharray="3 3"
                              strokeWidth={1}
                            >
                              <Label
                                position="insideBottomRight"
                                value="Referencia: 0,039 (mg/l)"
                                className="text-lg"
                                fill="hsl(var(--foreground))"
                                offset={20}
                                startOffset={100}
                              />
                            </ReferenceLine>

                                                    <ReferenceLine
                              y={-0.039}
                              stroke="hsl(var(--muted-foreground))"
                              strokeDasharray="3 3"
                              strokeWidth={1}
                            >
                              <Label
                                position="insideTopRight"
                                value="Referencia:  - 0,039 (mg/l)"
                                className="text-lg"
                                fill="hsl(var(--foreground))"
                                offset={20}
                                startOffset={100}
                              />
                            </ReferenceLine>
                                      <ReferenceLine x={fec_ultima_publica} stroke="43.3 96.4% 56.3%" strokeWidth={4} label="Sin Publicar" />
          </AreaChart>
        </ChartContainer>
      </CardContent>
            <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          Monitoreo del nivel de arsénico medido en mg/l (Micro gramos por Litro)
        </div>
        <div className="leading-none text-muted-foreground">
          El nivel de referencia establecido es de 0,039 +/- 0,039 (mg/l)
        </div>
      </CardFooter>
    </Card>
  )
}
