"use client"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";


  export const GlaciaresVolumen = () => (
  <div className="w-full py-6">
    <div className="container mx-auto">
                <div className="py-6">
        <h2>Volumen Glaciar</h2>
</div>
        <Tabs defaultValue="ficha" className="">
      <TabsList className="grid w-full grid-cols-5">
        <TabsTrigger value="foto">Glaciar Altar Sur</TabsTrigger>
        <TabsTrigger value="ficha">Ficha de Registro</TabsTrigger>
      </TabsList>
      <TabsContent value="foto">
        <Card>
          <CardHeader>
            <CardTitle>Glaciar Altar Sur</CardTitle>
            <CardDescription>
             
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <Image
            src="/altarsur-grafico.png"
            alt="Registro Base punto G21-06"
            className="w-full rounded-md object-cover"
            width={300}
            height={300}
          />

          </CardContent>
          <CardFooter>
            <p>Fecha análisis 22/11/2023</p>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="ficha">
        <Card>
          <CardHeader>
            <CardTitle>Ficha de Registro</CardTitle>
            <CardDescription>
             Tabla resumen balance de masa
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">

            <Table>
  <TableCaption>Glaciar Altar Sur. Periodo 2012-2020</TableCaption>
  <TableHeader>
    <TableRow>
      <TableHead className="w-[100px]">Periodo</TableHead>
      <TableHead>VarH (M)</TableHead>
      <TableHead>VarT (años)</TableHead>
      <TableHead className="text-right">Área (Km2)</TableHead>
      <TableHead className="text-right">Balance Anual volúmen (10*3m3/año)</TableHead>
       <TableHead className="text-right">Balance de masa período (m. eq.a)</TableHead>
      <TableHead className="text-right">Balance de masa período (kt)</TableHead>
      <TableHead className="text-right">Balance de masa anual (m. eq.a)</TableHead>
      <TableHead className="text-right">Balance de masa anual (kt)</TableHead>      
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell className="font-medium">2012-2014</TableCell>
      <TableCell className="text-right">-1.52+/-0.01</TableCell>
      <TableCell className="text-right">1.970</TableCell>
      <TableCell className="text-right">0.473</TableCell>
      <TableCell className="text-right">-364+/-1</TableCell>
      <TableCell className="text-right">-1.29+/-0.08</TableCell>
      <TableCell className="text-right">-609+/-36</TableCell>
      <TableCell className="text-right">-0.65+/-0.04</TableCell>
      <TableCell className="text-right">-309+/-18</TableCell>
    </TableRow>
        <TableRow>
      <TableCell className="font-medium">2014-2015</TableCell>
      <TableCell className="text-right">-1.22+/-0.04</TableCell>
      <TableCell className="text-right">0.945</TableCell>
      <TableCell className="text-right">0.472</TableCell>
      <TableCell className="text-right">-609+/-18</TableCell>
      <TableCell className="text-right">-1.04+/-0.07</TableCell>
      <TableCell className="text-right">-490+/-33</TableCell>
      <TableCell className="text-right">-1.1+/-0.07</TableCell>
      <TableCell className="text-right">-518+/-35</TableCell>
    </TableRow>
            <TableRow>
      <TableCell className="font-medium">2015-2016</TableCell>
      <TableCell className="text-right">-0.44+/-0.01</TableCell>
      <TableCell className="text-right">1.088</TableCell>
      <TableCell className="text-right">0.467</TableCell>
      <TableCell className="text-right">-191+/-5</TableCell>
      <TableCell className="text-right">-0.38+/-0.03</TableCell>
      <TableCell className="text-right">-177+/-12</TableCell>
      <TableCell className="text-right">-0.35+/-0.02</TableCell>
      <TableCell className="text-right">-162+/-11</TableCell>
    </TableRow>
                <TableRow>
      <TableCell className="font-medium">2016-2017</TableCell>
      <TableCell className="text-right">+0.3+/-0</TableCell>
      <TableCell className="text-right">0.962</TableCell>
      <TableCell className="text-right">0.467</TableCell>
      <TableCell className="text-right">145+/-2</TableCell>
      <TableCell className="text-right">-0.25+/-0.02</TableCell>
      <TableCell className="text-right">-119+/-7</TableCell>
      <TableCell className="text-right">-0.26+/-0.02</TableCell>
      <TableCell className="text-right">124+/-8</TableCell>
    </TableRow>
                    <TableRow>
      <TableCell className="font-medium">2017-2018</TableCell>
      <TableCell className="text-right">-0.89+/-0.01</TableCell>
      <TableCell className="text-right">1.068</TableCell>
      <TableCell className="text-right">0.467</TableCell>
      <TableCell className="text-right">-390+/-3</TableCell>
      <TableCell className="text-right">-0.76+/-0.05</TableCell>
      <TableCell className="text-right">-354+/-21</TableCell>
      <TableCell className="text-right">-0.71+/-0.04</TableCell>
      <TableCell className="text-right">-332+/-20</TableCell>
    </TableRow>

                        <TableRow>
      <TableCell className="font-medium">2018-2019</TableCell>
      <TableCell className="text-right">-0.84+/-0.01</TableCell>
      <TableCell className="text-right">1.011</TableCell>
      <TableCell className="text-right">0.463</TableCell>
      <TableCell className="text-right">-385+/-4</TableCell>
      <TableCell className="text-right">-0.71+/-0.04</TableCell>
      <TableCell className="text-right">-330+/-20</TableCell>
      <TableCell className="text-right">-0.71+/-0.04</TableCell>
      <TableCell className="text-right">-332+/-20</TableCell>
    </TableRow>
                            <TableRow>
      <TableCell className="font-medium">2019-2020</TableCell>
      <TableCell className="text-right">-2.1+/-0.01</TableCell>
      <TableCell className="text-right">0.981</TableCell>
      <TableCell className="text-right">0.463</TableCell>
      <TableCell className="text-right">-992+/-4</TableCell>
      <TableCell className="text-right">-1.8+/-0.1</TableCell>
      <TableCell className="text-right">-827+/-49</TableCell>
      <TableCell className="text-right">-1.8+/-0.01</TableCell>
      <TableCell className="text-right">-843+/-50</TableCell>
    </TableRow>
  </TableBody>
</Table>

          </CardContent>
          <CardFooter>
            <p>Fecha de actualización 2021</p>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>

              <Separator className="my-14" />
  </div>
  </div>
);