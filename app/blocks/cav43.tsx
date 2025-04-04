"use client"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";

/*Agrego Comentarios solo para actualizar GIT*/

  export const Cav43 = () => (
  <div className="w-full py-6">
    <div className="container mx-auto">
        <div className="py-6">
</div>
        <Tabs defaultValue="flujo" className="py-6">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="flujo">Flujo Vehicular</TabsTrigger>
        <TabsTrigger value="foto">Registro Fotográfico</TabsTrigger>
      </TabsList>
      <TabsContent value="flujo">
            <Card>
      <CardHeader>
        <CardTitle>Participación de Ciclistas con relación al Flujo Vehicular por Período y Sector</CardTitle>
        <CardDescription></CardDescription>
      </CardHeader>
      <CardContent>

        <Table>
  <TableCaption>Participación de Ciclistas con relación al Flujo Vehicular por Período y Sector</TableCaption>
  <TableHeader>
    <TableRow>
      <TableHead className="text-center">Período</TableHead>
      <TableHead>Sector</TableHead>
      <TableHead className="text-center">Total Flujo veq/h</TableHead>
      <TableHead className="text-center">Ciclistas veq/h</TableHead>
       <TableHead className="text-center">Participación Ciclistas %</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell className="font-medium">Punta Mañana</TableCell>
      <TableCell>1</TableCell>
      <TableCell className="text-center">304</TableCell>
      <TableCell className="text-center">29</TableCell>
      <TableCell className="text-center">2.5%</TableCell>
    </TableRow>
        <TableRow>
      <TableCell className="font-medium">Punta Mañana</TableCell>
      <TableCell>2</TableCell>
      <TableCell className="text-center">264</TableCell>
      <TableCell className="text-center">37</TableCell>
      <TableCell className="text-center">14.0%</TableCell>
    </TableRow>
            <TableRow>
      <TableCell className="font-medium">Punta Mañana</TableCell>
      <TableCell>3</TableCell>
      <TableCell className="text-center">199</TableCell>
      <TableCell className="text-center">46</TableCell>
      <TableCell className="text-center">23.1%</TableCell>
    </TableRow>
                <TableRow>
      <TableCell className="font-medium">Fuera de Punta</TableCell>
      <TableCell>1</TableCell>
      <TableCell className="text-center">276</TableCell>
      <TableCell className="text-center">21</TableCell>
      <TableCell className="text-center">7.6%</TableCell>
    </TableRow>

                    <TableRow>
      <TableCell className="font-medium">Fuera de Punta</TableCell>
      <TableCell>2</TableCell>
      <TableCell className="text-center">215</TableCell>
      <TableCell className="text-center">22</TableCell>
      <TableCell className="text-center">10.2%</TableCell>
    </TableRow>

                    <TableRow>
      <TableCell className="font-medium">Fuera de Punta</TableCell>
      <TableCell>3</TableCell>
      <TableCell className="text-center">133</TableCell>
      <TableCell className="text-center">23</TableCell>
      <TableCell className="text-center">17.3%</TableCell>
    </TableRow>

                        <TableRow>
      <TableCell className="font-medium">Punta Tarde</TableCell>
      <TableCell>1</TableCell>
      <TableCell className="text-center">301</TableCell>
      <TableCell className="text-center">5</TableCell>
      <TableCell className="text-center">1.7%</TableCell>
    </TableRow>
                            <TableRow>
      <TableCell className="font-medium">Punta Tarde</TableCell>
      <TableCell>2</TableCell>
      <TableCell className="text-center">230</TableCell>
      <TableCell className="text-center">3</TableCell>
      <TableCell className="text-center">1.3%</TableCell>
    </TableRow>
                                <TableRow>
      <TableCell className="font-medium">Punta Tarde</TableCell>
      <TableCell>3</TableCell>
      <TableCell className="text-center">153</TableCell>
      <TableCell className="text-center">0</TableCell>
      <TableCell className="text-center">0%</TableCell>
    </TableRow>

  </TableBody>
</Table>

      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="leading-none text-muted-foreground">
          <p>Los flujos de ciclistas del gráfico anterior en relación con los flujos vehiculares en todos los períodos analizados varían entre un 0% y un 23,1,0%. Este último valor, que representa el mayor porcentaje de participación modal es muy bajo dado que en el sector 3 del período Punta Mañana se presentan un flujo total de vehículos equivalentes de 199 veq/h, con ciclistas que alcanzan los 46 vehículos equivalentes por hora, en una vía con un Grado de Saturación que alcanza sólo un 8,3% valor muy por debajo del 85% para que una vía presente problemas de operación y que cuenta con una Capacidad de Reserva de un 81,7%.
</p>
<p>Considerando lo anterior, se tiene que el análisis realizado indica que la circulación de ciclistas no se ve afectada en relación a la circulación de los diferentes tipos de vehículos dados los bajos flujos vehiculares registrados. Por lo tanto, no se prevé la obstrucción o restricción a la libre circulación, conectividad o el aumento significativo de los tiempos de desplazamiento.
        </p>
        </div>
      </CardFooter>
    </Card>
      </TabsContent>
      <TabsContent value="foto">
        <Card>
          <CardHeader>
            <CardTitle>Registro Fotográfico</CardTitle>
            <CardDescription>
             Sector 1: Ruta G-21 entre Av. Las Condes – Sector Las Puertas
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <Image
            src="/ciclista.png"
            alt="Vialidad - Las Puertas"
            className="aspect-auto h-[250px] py-6"
            width={300}
            height={300}
          />

          </CardContent>
          <CardFooter>
            <p>Fotografía obtenida en fecha: 22/06/2024</p>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>


    <Separator></Separator>
  </div>
  </div>

  
);