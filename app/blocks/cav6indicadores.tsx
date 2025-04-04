import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { ArrowDown} from 'lucide-react';
import Image from 'next/image';

/* estoy intentando de arreglar el deploy */

const Cav6Indicadores = () => {
  return (
    <><section className="w-full py-6">
          <div className="container mx-auto">
              <div className="flex flex-col gap-12 md:flex-row">
                  <Image
                      src="/med-geodesicas.png"
                      alt="placeholder"
                      width={600} height={600}
                      className="max-h-96 w-full rounded-lg object-cover md:max-h-[500px] md:w-1/2" />
                  <div className="lg:p-10">
                      <h2 className="text-balance text-3xl md:text-5xl">
                          Mediciones Geodésicas
                      </h2>
                      <p className="mt-1 text-muted-foreground md:mt-6">
                          Cotas superficiales
                      </p>

                      <div className="flex w-full flex-col justify-center gap-2 sm:flex-row py-6 lg:justify-start">
                          <Button className="w-full sm:w-auto gradient-button">
                              <ArrowDown className="mr-2 size-4" />
                              Descarga el Informe 2023
                          </Button>
                          <p>Solo fines ilustrativos</p>
                      </div>
                  </div>
              </div>
          </div>
      </section><section className="w-full py-6">
              <div className="container mx-auto">
                  <div className="flex flex-col gap-12 md:flex-row">

                      <div className="lg:p-10">
                          <h2 className="text-balance text-3xl md:text-5xl">
                              Datos topográficos de elevación
                          </h2>
                          <p className="mt-1 text-muted-foreground md:mt-6">
                              Interpretación Geoformas y su dinámica: cotas
                          </p>
                          <div className="flex w-full flex-col justify-center gap-2 py-6 sm:flex-row lg:justify-start">
                              <Button className="w-full sm:w-auto gradient-button">
                                  <ArrowDown className="mr-2 size-4" />
                                  Descarga el Informe 2023
                              </Button>
                                    <p>Solo fines ilustrativos</p>
                          </div>
                      </div>
                                            <Image
                          src="/elevacion-1.png"
                          alt="placeholder"
                          width={600} height={600}
                          className="max-h-96 w-full rounded-lg md:max-h-[500px] md:w-1/2" />
                  </div>
                  <Separator className="my-14" />
              </div>
          </section></>
  );
};

export default Cav6Indicadores;
