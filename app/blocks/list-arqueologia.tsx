"use client"
import { SetStateAction, useState } from 'react';
import PdfArq2 from '@/components/ui/pdfarq2';
import PdfArq3 from '@/components/ui/pdfarq3';
import PdfArq from '@/components/ui/pdfexample';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Image from 'next/image';

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const FotosArqueologia = () => {
  const [selectedReport, setSelectedReport] = useState('julio');

  const handleReportChange = (value: SetStateAction<string>) => {
    setSelectedReport(value);
  };

  const renderPdfComponent = () => {
    switch (selectedReport) {
      case 'enero':
        return <PdfArq />
      case 'mayo':
        return <PdfArq2 />
      case 'septiembre':
        return <PdfArq3 />
      default:
        return <PdfArq />
    }
  };

    const [selectedReport2, setSelectedReport2] = useState('enero');

  const handleReportChange2 = (value: SetStateAction<string>) => {
    setSelectedReport2(value);
  };

  const renderPdfComponent2 = () => {
    switch (selectedReport2) {
      case 'Mayo - Agosto 2024':
        return <PdfArq2 />
      case 'Enero - Abril 2024':
        return <PdfArq />
      case 'Septiembre - Diciembre 2024':
        return <PdfArq3 />
      default:
        return <PdfArq />
    }
  };

      const [selectedReport3, setSelectedReport3] = useState('enero');

  const handleReportChange3 = (value: SetStateAction<string>) => {
    setSelectedReport3(value);
  };

  const renderPdfComponent3 = () => {
    switch (selectedReport3) {
      case 'septiembre':
        return <PdfArq3 />
      case 'mayo':
        return <PdfArq2 />
      case 'enero':
        return <PdfArq />
      default:
        return <PdfArq3 />
    }
  };

  return (
          <section className="w-full py-6">
        <div className="container mx-auto">
          <h3 className="py-6">Elementos patrimoniales</h3>
          <p>Elementos patrimoniales relacionados con la actividad minera documentada en la zona desde tiempos históricos hasta la actualidad. </p>
        <Tabs defaultValue="feature-1">
          <TabsList className="flex h-auto w-full flex-col gap-2 bg-background md:flex-row">
            <TabsTrigger
              value="feature-1"
              className="flex w-full flex-col items-start justify-start gap-1 whitespace-normal rounded-md border p-4 text-left text-primary hover:border-primary/40 data-[state=active]:border-primary"
            >
              <div className="flex items-center gap-2 md:flex-col md:items-start lg:gap-4">
                <p className="text-lg font-semibold md:text-2xl lg:text-xl">
                Basamento de estructura subactual (PLBI_001)
                </p>
              </div>
              <Image
              src="/arqueologia-1.png"
              alt=""
              className="aspect-video rounded-md object-cover"
              width={400} height={400}
            />
            </TabsTrigger>
            <TabsTrigger
              value="feature-2"
              className="flex w-full flex-col items-start justify-start gap-1 whitespace-normal rounded-md border p-4 text-left text-primary hover:border-primary/40 data-[state=active]:border-primary"
            >
              <div className="flex items-center gap-2 md:flex-col md:items-start lg:gap-4">
                <p className="text-lg font-semibold md:text-2xl lg:text-xl">
                  Muros de contención
                  (PLBI_002)
                </p>
              </div>
                            <Image
              src="/arqueologia-2.png"
              alt=""
              className="aspect-video rounded-md object-cover"
              width={400} height={400}
            />
            </TabsTrigger>
            <TabsTrigger
              value="feature-3"
              className="flex w-full flex-col items-start justify-start gap-1 whitespace-normal rounded-md border p-4 text-left text-primary hover:border-primary/40 data-[state=active]:border-primary"
            >
              <div className="flex items-center gap-2 md:flex-col md:items-start lg:gap-4">
                <p className="text-lg font-semibold md:text-2xl lg:text-xl">
                  Plataformas de chancado mineral (PLBI_003)
                </p>
              </div>
                            <Image
              src="/arqueologia-3.png"
              alt=""
              className="aspect-video rounded-md object-cover"
              width={400} height={400}
            />
            </TabsTrigger>
          </TabsList>
          <TabsContent value="feature-1" className='rounded-md border p-4 text-left text-primary hover:border-primary/40 data-[state=active]:border-primary'>
    <Select onValueChange={handleReportChange} value={selectedReport}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Registro de Reportes" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Reportes</SelectLabel>
          <SelectItem value="enero">Enero-Abril 2024</SelectItem>
          <SelectItem value="mayo">Mayo-Agosto 2024</SelectItem>
          <SelectItem value="septiembre">Septiembre-Diciembre 2024</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>

            {renderPdfComponent()}
          </TabsContent>
          <TabsContent value="feature-2" className='rounded-md border p-4 text-left text-primary hover:border-primary/40 data-[state=active]:border-primary'>
                <Select onValueChange={handleReportChange2} value={selectedReport2}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Registro de Reportes" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Reportes</SelectLabel>
          <SelectItem value="julio">Julio 2024</SelectItem>
          <SelectItem value="marzo">Marzo 2024</SelectItem>
          <SelectItem value="enero">Enero 2024</SelectItem>
          <SelectItem value="octubre">Octubre 2023</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
            {renderPdfComponent2()}
          </TabsContent>
          <TabsContent value="feature-3" className='rounded-md border p-4 text-left text-primary hover:border-primary/40 data-[state=active]:border-primary'> 
                            <Select onValueChange={handleReportChange3} value={selectedReport2}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Registro de Reportes" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Reportes</SelectLabel>
          <SelectItem value="julio">Julio 2024</SelectItem>
          <SelectItem value="marzo">Marzo 2024</SelectItem>
          <SelectItem value="enero">Enero 2024</SelectItem>
          <SelectItem value="octubre">Octubre 2023</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
            {renderPdfComponent3()}
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default FotosArqueologia;
