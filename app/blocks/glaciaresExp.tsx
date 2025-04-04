
import Image from "next/image";

const GlaciaresExp = () => {
  return (
    <section className="w-full py-6">
      <div className="container flex flex-col mx-auto">
        <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
          <div className="flex flex-col text-clip rounded-xl md:col-span-2 md:grid md:grid-cols-2 md:gap-6 lg:gap-8">
            <div className="">
              <Image
                src="/dinamicaMonitoreo1.png"
                alt="Dinámica de monitoreo"
                className="object-center"
                width={600}
            height={300}
              />
            </div>
            <div className="flex flex-col justify-center px-6 py-8 md:px-8 md:py-10 lg:px-10 lg:py-12">
              <h3 className="mb-3 text-lg font-semibold md:mb-4 md:text-2xl lg:mb-6">
                Velocidad máxima de partículas
              </h3>
              <p className="text-muted-foreground lg:text-lg">
                PPV a través de geófono
              </p>
              <p className="text-muted-foreground">
                A - Diseño de tronadura: Probabilidad de generar un impacto negativo debido a vibración del terreno
              </p> 
                            <p className="text-muted-foreground">
                B - BlastMonitor°: Registra eventos de vibraciones y los envía al servidor de RockBlast°
              </p> 

                            <p className="text-muted-foreground">
                C - BlastReport: Plataforma online que permite visualizar y generar reportes de los eventos de vibración registados
              </p> 
                                          <p className="text-muted-foreground">
                D - BlastMath: Permite predecir y mitigar el impacto de los niveles máximos de vibraciones generados por un diseño de tronadura, en base a modelos matemáticos.
              </p> 

                                                        <p className="text-muted-foreground">
                E - Servidor RockBlast: Almacena y mantiene información resguardada. </p>
            </div>
          </div>
          <div className="flex flex-col-reverse text-clip rounded-xl md:col-span-2 md:grid md:grid-cols-2 md:gap-6 lg:gap-8">
            <div className="flex flex-col justify-center px-6 py-8 md:px-8 md:py-10 lg:px-10 lg:py-12">
              <h3 className="mb-3 text-lg font-semibold md:mb-4 md:text-2xl lg:mb-6">
                Material particulado sedimentable (MPS)
              </h3>
              <p className="text-muted-foreground lg:text-lg">
                Colectores de polvo pasivo operativos
              </p>
            </div>
            <div className="md:min-h-96 lg:min-h-[28rem] xl:min-h-[32rem]">
              <Image
                src="/receptores1.png"
                alt="Feature 2"
                className="aspect-[16/9] size-full object-center"
                width={600}
            height={500}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlaciaresExp;
