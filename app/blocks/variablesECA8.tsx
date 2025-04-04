"use client"
import { Separator } from "@/components/ui/separator";
import Image from "next/image";

import { CartesianGrid, Label, Line, LineChart, ReferenceLine, XAxis, } from "recharts"
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
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
export const description = "A bar chart with a custom label"
  
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

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
    label: "Granulometría",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig


const chartDataBiota = [
  { month: "1E", desktop: 186, especie2: 32, especie3:45, especie4:12, especie5:82 },
  { month: "1C", desktop: 305, especie2: 72, especie3:25, especie4:91, especie5:23 },
  { month: "2E", desktop: 237, especie2: 51, especie3:190, especie4:220, especie5:56 },
  { month: "2C", desktop: 73, especie2: 112, especie3:81, especie4:21, especie5:132 },
  { month: "3E", desktop: 209, especie2: 223, especie3:103, especie4:53, especie5:205 },
  { month: "3C", desktop: 214, especie2: 88, especie3:11, especie4:102, especie5:210 },
    { month: "4E", desktop: 16, especie2: 132, especie3:75, especie4:82, especie5:122 },
  { month: "4C", desktop: 203, especie2: 54, especie3:46, especie4:65, especie5:233 },
  { month: "5E", desktop: 183, especie2: 76, especie3:19, especie4:22, especie5:84 },
  { month: "5C", desktop: 58, especie2: 87, especie3:94, especie4:211, especie5:45 },
  { month: "6E", desktop: 101, especie2: 93, especie3:30, especie4:55, especie5:105 },
  { month: "6C", desktop: 83, especie2: 102, especie3:91, especie4:45, especie5:80 },
    { month: "7E", desktop: 74, especie2: 44, especie3:105, especie4:200, especie5:29 },
  { month: "7C", desktop: 205, especie2: 92, especie3:57, especie4:71, especie5:39 },
  { month: "8E", desktop: 37, especie2: 151, especie3:109, especie4:122, especie5:99 },
  { month: "8C", desktop: 38, especie2: 11, especie3:98, especie4:211, especie5:34 },
  { month: "9E", desktop: 20, especie2: 232, especie3:152, especie4:76, especie5:58 },
  { month: "9C", desktop: 143, especie2: 188, especie3:113, especie4:29, especie5:88 },
]
const chartConfigBiota = {
  desktop: {
    label: "Fitoplancton",
    color: "hsl(var(--chart-1))",
  },
    especie2: {
    label: "Fitobentos",
    color: "hsl(var(--chart-2))",
  },
    especie3: {
    label: "Zoobentos",
    color: "hsl(var(--chart-3))",
  },
} satisfies ChartConfig
  
  export const VariablesECA8 = () => (
  <div className="w-full py-6">
    <div className="container mx-auto">

            <div className="">
              <h4 className="pretty text-left font-regular">
              Ecosistemas Acuáticos Continentales
              </h4>
              <p className="text-lg leading-relaxed tracking-tight text-muted-foreground  text-left">
               Monitorear posibles cambios en la biota acuática registrada en la línea de base de ecosistemas acuáticos continentales.
              </p>
          </div>

        <Tabs defaultValue="foto" className="">
      <TabsList className="grid w-full grid-cols-4">
        <TabsTrigger value="agua">Agua</TabsTrigger>
        <TabsTrigger value="biota">Biota</TabsTrigger>
        <TabsTrigger value="sedimentos">Sedimentos</TabsTrigger>
        <TabsTrigger value="foto">Registro Fotográfico</TabsTrigger>
      </TabsList>
      <TabsContent value="agua">
        <Card>
          <CardHeader>
            <CardTitle>Agua</CardTitle>
            <CardDescription>
            Contenido volumétrico de agua promedio
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
<Table>
  <TableCaption></TableCaption>
  <TableHeader>
    <TableRow>
      <TableHead className="w-[150px]">Parámetros (mg/kg) / Puntos de monitoreo</TableHead>
      <TableHead className="font-medium text-center">L-6</TableHead>
      <TableHead className="font-medium text-center">L-6-B</TableHead>
      <TableHead className="font-medium text-center">L-6-C</TableHead>
     <TableHead className="font-medium text-center">LD-1</TableHead>
      <TableHead className="font-medium text-center">LD-2</TableHead>
      <TableHead className="font-medium text-center">BOT-T4-ED-2</TableHead>
      <TableHead className="font-medium text-center">ED</TableHead>
      <TableHead className="font-medium text-center">EP-1</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell className="font-medium">Aluminio</TableCell>
      <TableCell className="text-center">11.449</TableCell>
      <TableCell className="text-center">9.586</TableCell>
      <TableCell className="text-center">***</TableCell>
            <TableCell className="text-center">***</TableCell>
                  <TableCell className="text-center">***</TableCell>
                        <TableCell className="text-center">8.111</TableCell>
                          <TableCell className="text-center">13.429</TableCell>
                          <TableCell className="text-center">39.138</TableCell>
    </TableRow>
        <TableRow>
      <TableCell className="font-medium">Arsénico</TableCell>
      <TableCell className="text-center">20</TableCell>
      <TableCell className="text-center">17,6</TableCell>
      <TableCell className="text-center">***</TableCell>
      <TableCell className="text-center">***</TableCell>
      <TableCell className="text-center">***</TableCell>
      <TableCell className="text-center">31,4</TableCell>
      <TableCell className="text-center">30,7</TableCell>
      <TableCell className="text-center">55,3</TableCell>
    </TableRow>
      <TableRow>
      <TableCell className="font-medium">Bario</TableCell>
      <TableCell className="text-center">58</TableCell>
      <TableCell className="text-center">29</TableCell>
      <TableCell className="text-center">***</TableCell>
      <TableCell className="text-center">***</TableCell>
      <TableCell className="text-center">***</TableCell>
      <TableCell className="text-center">19</TableCell>
      <TableCell className="text-center">77</TableCell>
      <TableCell className="text-center">4</TableCell>
    </TableRow>
          <TableRow>
      <TableCell className="font-medium">Berilio</TableCell>
      <TableCell className="text-center">3</TableCell>
      <TableCell className="text-center">3</TableCell>
      <TableCell className="text-center">***</TableCell>
      <TableCell className="text-center">***</TableCell>
      <TableCell className="text-center">***</TableCell>
      <TableCell className="text-center">3</TableCell>
      <TableCell className="text-center">3</TableCell>
      <TableCell className="text-center">3,0</TableCell>
    </TableRow>
              <TableRow>
      <TableCell className="font-medium">Cadmio</TableCell>
      <TableCell className="text-center">0,1</TableCell>
      <TableCell className="text-center">1,3</TableCell>
      <TableCell className="text-center">***</TableCell>
      <TableCell className="text-center">***</TableCell>
      <TableCell className="text-center">***</TableCell>
      <TableCell className="text-center">0,5</TableCell>
      <TableCell className="text-center">0,1</TableCell>
      <TableCell className="text-center">4,5</TableCell>
    </TableRow>
                  <TableRow>
      <TableCell className="font-medium">Carbono Orgánio Total (%)</TableCell>
      <TableCell className="text-center">1</TableCell>
      <TableCell className="text-center">1</TableCell>
      <TableCell className="text-center">***</TableCell>
      <TableCell className="text-center">***</TableCell>
      <TableCell className="text-center">***</TableCell>
      <TableCell className="text-center">2</TableCell>
      <TableCell className="text-center">1</TableCell>
      <TableCell className="text-center">7</TableCell>
    </TableRow>
              <TableRow>
      <TableCell className="font-medium">Cobalto</TableCell>
      <TableCell className="text-center">6</TableCell>
      <TableCell className="text-center">9</TableCell>
      <TableCell className="text-center">***</TableCell>
      <TableCell className="text-center">***</TableCell>
      <TableCell className="text-center">***</TableCell>
      <TableCell className="text-center">20</TableCell>
      <TableCell className="text-center">20</TableCell>
      <TableCell className="text-center">152</TableCell>
    </TableRow>
                  <TableRow>
      <TableCell className="font-medium">Cobre</TableCell>
      <TableCell className="text-center">772</TableCell>
      <TableCell className="text-center">255</TableCell>
      <TableCell className="text-center">***</TableCell>
      <TableCell className="text-center">***</TableCell>
      <TableCell className="text-center">***</TableCell>
      <TableCell className="text-center">2075</TableCell>
      <TableCell className="text-center">2466</TableCell>
      <TableCell className="text-center">152</TableCell>
    </TableRow>
                      <TableRow>
      <TableCell className="font-medium">Cromo</TableCell>
      <TableCell className="text-center">0,5</TableCell>
      <TableCell className="text-center">0,5</TableCell>
      <TableCell className="text-center">***</TableCell>
      <TableCell className="text-center">***</TableCell>
      <TableCell className="text-center">***</TableCell>
      <TableCell className="text-center">4,7</TableCell>
      <TableCell className="text-center">9,2</TableCell>
      <TableCell className="text-center">10,7</TableCell>
    </TableRow>
                          <TableRow>
      <TableCell className="font-medium">Hierro</TableCell>
      <TableCell className="text-center">463</TableCell>
      <TableCell className="text-center">14.868</TableCell>
      <TableCell className="text-center">***</TableCell>
      <TableCell className="text-center">***</TableCell>
      <TableCell className="text-center">***</TableCell>
      <TableCell className="text-center">71.586</TableCell>
      <TableCell className="text-center">64.849</TableCell>
      <TableCell className="text-center">37.059</TableCell>
    </TableRow>

                              <TableRow>
      <TableCell className="font-medium">Manganeso</TableCell>
      <TableCell className="text-center">363</TableCell>
      <TableCell className="text-center">1.438</TableCell>
      <TableCell className="text-center">***</TableCell>
      <TableCell className="text-center">***</TableCell>
      <TableCell className="text-center">***</TableCell>
      <TableCell className="text-center">1209</TableCell>
      <TableCell className="text-center">972</TableCell>
      <TableCell className="text-center">1450</TableCell>
    </TableRow>

                                  <TableRow>
      <TableCell className="font-medium">Manganeso</TableCell>
      <TableCell className="text-center">363</TableCell>
      <TableCell className="text-center">1.438</TableCell>
      <TableCell className="text-center">***</TableCell>
      <TableCell className="text-center">***</TableCell>
      <TableCell className="text-center">***</TableCell>
      <TableCell className="text-center">1209</TableCell>
      <TableCell className="text-center">972</TableCell>
      <TableCell className="text-center">1450</TableCell>
    </TableRow>
                                      <TableRow>
      <TableCell className="font-medium">Mercurio</TableCell>
      <TableCell className="text-center">0</TableCell>
      <TableCell className="text-center">0,04</TableCell>
      <TableCell className="text-center">***</TableCell>
      <TableCell className="text-center">***</TableCell>
      <TableCell className="text-center">***</TableCell>
      <TableCell className="text-center">0,001</TableCell>
      <TableCell className="text-center">0,004</TableCell>
      <TableCell className="text-center">0,002</TableCell>
    </TableRow>
                                          <TableRow>
      <TableCell className="font-medium">Molibdeno</TableCell>
      <TableCell className="text-center">5</TableCell>
      <TableCell className="text-center">5</TableCell>
      <TableCell className="text-center">***</TableCell>
      <TableCell className="text-center">***</TableCell>
      <TableCell className="text-center">***</TableCell>
      <TableCell className="text-center">33</TableCell>
      <TableCell className="text-center">92</TableCell>
      <TableCell className="text-center">27</TableCell>
    </TableRow>
                                              <TableRow>
      <TableCell className="font-medium">Níquel</TableCell>
      <TableCell className="text-center">8</TableCell>
      <TableCell className="text-center">7,8</TableCell>
      <TableCell className="text-center">***</TableCell>
      <TableCell className="text-center">***</TableCell>
      <TableCell className="text-center">***</TableCell>
      <TableCell className="text-center">4,8</TableCell>
      <TableCell className="text-center">10,1</TableCell>
      <TableCell className="text-center">50,7</TableCell>
    </TableRow>
                                                  <TableRow>
      <TableCell className="font-medium">Plata</TableCell>
      <TableCell className="text-center">5</TableCell>
      <TableCell className="text-center">5</TableCell>
      <TableCell className="text-center">***</TableCell>
      <TableCell className="text-center">***</TableCell>
      <TableCell className="text-center">***</TableCell>
      <TableCell className="text-center">5</TableCell>
      <TableCell className="text-center">5</TableCell>
      <TableCell className="text-center">5</TableCell>
    </TableRow>
                                                      <TableRow>
      <TableCell className="font-medium">Plomo</TableCell>
      <TableCell className="text-center">121</TableCell>
      <TableCell className="text-center">56,0</TableCell>
      <TableCell className="text-center">***</TableCell>
      <TableCell className="text-center">***</TableCell>
      <TableCell className="text-center">***</TableCell>
      <TableCell className="text-center">22</TableCell>
      <TableCell className="text-center">39</TableCell>
      <TableCell className="text-center">86</TableCell>
    </TableRow>

                                                          <TableRow>
      <TableCell className="font-medium">Vanadio</TableCell>
      <TableCell className="text-center">2,5</TableCell>
      <TableCell className="text-center">2,5</TableCell>
      <TableCell className="text-center">***</TableCell>
      <TableCell className="text-center">***</TableCell>
      <TableCell className="text-center">***</TableCell>
      <TableCell className="text-center">19,6</TableCell>
      <TableCell className="text-center">41,5</TableCell>
      <TableCell className="text-center">56,1</TableCell>
    </TableRow>
  </TableBody>
</Table>
      </CardContent>
          <CardFooter>
          <p>*** sin sedimentto significativo para muestra</p>
          <p>Se muestran en rojo los valores que están fuera de norma.</p>
          <p>Las condiciones monitoreadas no reflejan cambios significativos en relación con los resultados de la Línea Base del Proyecto LBI.</p>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="biota">
        <Card>
          <CardHeader>
            <CardTitle>Biota</CardTitle>
            <CardDescription>
            Variación Cobertura Vegetal
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <ChartContainer config={chartConfigBiota} className="aspect-auto h-[250px] w-full py-6">
                          
          <LineChart
            accessibilityLayer
            data={chartDataBiota}
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
            <ChartLegend content={<ChartLegendContent />} />
            <Line
              dataKey="desktop"
              type="linear"
              stroke="var(--color-desktop)"
              strokeWidth={2}
              dot={false}
            />
                        <Line
              dataKey="especie2"
              type="linear"
              stroke="var(--color-especie2)"
              strokeWidth={2}
              dot={false}
            />
                        <Line
              dataKey="especie3"
              type="linear"
              stroke="var(--color-especie3)"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ChartContainer>
          </CardContent>
          <CardFooter>
            <p>Unidad de medida: N° de individuos por uniad de volumen (m3)</p>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="foto">
        <Card>
          <CardHeader>
            <CardTitle>Registro Fotográfico</CardTitle>
            <CardDescription>
            Vista del espejo de agua y del estado del suelo
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <Image
            src="/Vega-Espejo-Suelo.jpg"
            alt="placeholder hero"
            className="w-full rounded-md object-cover"
            width={600}
            height={500}
          />

          </CardContent>
          <CardFooter>
            <p>Fotografía obtenida en fecha: 22/06/2024</p>
          </CardFooter>
        </Card>
      </TabsContent>
            <TabsContent value="sedimentos">
        <Card>
          <CardHeader>
            <CardTitle>Sedimentos</CardTitle>
            <CardDescription>
              Granolumetría
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
        <ChartContainer config={chartConfig} className="aspect-auto h-[250px] w-full py-6">
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
              content={<ChartTooltipContent hideLabel className="whitebg" />}
            />
             <ReferenceLine
                                          y={140}
                                          stroke="hsl(var(--chart-4))"
                                          strokeDasharray="3 3"
                                          strokeWidth={1}
                                        >
                                          <Label
                                            position="insideBottomRight"
                                            value="Referencia: 140"
                                            className="text-lg"
                                            fill="hsl(var(--foreground))"
                                            offset={20}
                                            startOffset={100}
                                          />
                                        </ReferenceLine>
                                    <ReferenceLine
                                          y={60}
                                          stroke="hsl(var(--chart-3))"
                                          strokeDasharray="3 3"
                                          strokeWidth={1}
                                        >
                                          <Label
                                            position="insideTopRight"
                                            value="Referencia: 60"
                                            className="text-lg"
                                            fill="hsl(var(--foreground))"
                                            offset={20}
                                            startOffset={0}
                                          />
                                        </ReferenceLine>
            <Line
              dataKey="desktop"
              type="natural"
              stroke="var(--color-desktop)"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ChartContainer>
          </CardContent>
          <CardFooter>
            <p>Variables sedimentarias</p>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>

              <Separator className="my-14" />
  </div>
  </div>
);