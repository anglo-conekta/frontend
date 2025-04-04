import { Button } from "@/components/ui/button";
import PageContainer from "@/components/ui/page-container";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CardDemo } from "@/components/ui/tarjetaPublicar";
import { ChartCobre1 } from "../blocks/chartCobre1";
import { ChartMolibdeno1 } from "../blocks/chartMolibdeno1";
import { ChartPh1 } from "../blocks/chartPh1";
import { ChartHierro1 } from "../blocks/chartHierro1";
import { ChartArsenico1 } from "../blocks/chartArsenico1";


export default function OverViewPage() {
  return (
    <PageContainer scrollable>
      <div className='space-y-2'>
        <div className='flex items-center justify-between space-y-2'>
          <h2 className='text-2xl font-bold tracking-tight'>
            Hola 👋
          </h2>
          <div className='hidden items-center space-x-2 md:flex'>
            <Button>Descargar</Button>
          </div>
        </div>
        <Tabs defaultValue='overview' className='space-y-4'>
          <TabsList>
            <TabsTrigger value='overview'>Pozo 3</TabsTrigger>
            <TabsTrigger value='analytics' disabled>
              Pozo 2B
            </TabsTrigger>
            <TabsTrigger value='analytics' disabled>
              Pozo 2
            </TabsTrigger>
              <TabsTrigger value='analytics' disabled>
              Pozo 1
            </TabsTrigger>
                          <TabsTrigger value='analytics' disabled>
              Sulfatos Bajo
            </TabsTrigger>
                                      <TabsTrigger value='analytics' disabled>
              Paloma Baja
            </TabsTrigger>
                                                  <TabsTrigger value='analytics' disabled>
              Pozo Adicional
            </TabsTrigger>
                                                  <TabsTrigger value='analytics' disabled>
              E4
            </TabsTrigger>
                                                  <TabsTrigger value='analytics' disabled>
              E5
            </TabsTrigger>
                                                              <TabsTrigger value='analytics' disabled>
              E6
            </TabsTrigger>
                                                                          <TabsTrigger value='analytics' disabled>
              EA6
            </TabsTrigger>
          </TabsList>
          <TabsContent value='overview' className='space-y-4'>
            <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-7 bg-white p-4 rounded-lg shadow-md'>
              <div className='col-span-5'>
                <ChartArsenico1></ChartArsenico1>
              </div>
                            <div className='col-span-2'>
                              <CardDemo></CardDemo>
              </div>
              </div>
            
<div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-7 bg-white p-4 rounded-lg shadow-md'>

              <div className='col-span-5'>
                <ChartHierro1></ChartHierro1>
              </div>
                            <div className='col-span-2'>
                              <CardDemo></CardDemo>
              </div>
              </div>
              <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-7 bg-white p-4 rounded-lg shadow-md'>
                <div className='col-span-5'>
                <ChartPh1></ChartPh1>
              </div>
                                          <div className='col-span-2'>
                              <CardDemo></CardDemo>
              </div>
              </div>

              <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-7 bg-white p-4 rounded-lg shadow-md'>
                <div className='col-span-5'>
                <ChartMolibdeno1></ChartMolibdeno1>
              </div>
                                                        <div className='col-span-2'>
                              <CardDemo></CardDemo>
              </div>
              </div>

<div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-7 bg-white rounded-lg shadow-md'>
                              <div className='col-span-5'>
                <ChartCobre1></ChartCobre1>
              </div>
              <div className='col-span-2'>
                              <CardDemo></CardDemo>
              </div>
            
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </PageContainer>
  );
}
