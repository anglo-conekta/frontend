import { ArrowDown} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
 
export const Cav37Areas = () => {

    return (
        <section className="w-full py-6">
        <div className="container mx-auto">
            <div className="flex flex-col gap-12 md:flex-row">
              <Image
                src="/p1-p2.png"
                alt="placeholder"
                width={600} height={600}
                className="w-full rounded-lg"
              />
              <div className="lg:p-10">
                <h2 className="text-balance text-3xl font-medium md:text-5xl">
                Área de monitoreo procesos erosivos 
                </h2>
                <div className="flex w-full flex-col justify-center gap-2 py-6 sm:flex-row lg:justify-start">
              <Button className="w-full sm:w-auto gradient-button">
                <ArrowDown className="mr-2 size-4" />
                Descarga el Informe 2023
              </Button>
              <p>Solo fines ilustrativos</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-12 md:flex-row py-20">

              <div className="lg:p-10">
                <h2 className="text-balance text-3xl font-medium md:text-5xl">
                Procesos erosivos activos
                </h2>
                <div className="flex w-full flex-col justify-center gap-2 py-6 sm:flex-row lg:justify-start">
              <Button className="w-full sm:w-auto gradient-button">
                <ArrowDown className="mr-2 size-4" />
                Descarga el Informe 2023
              </Button>
                            <p>Solo fines ilustrativos</p>
                </div>
              </div>
                            <Image
                src="/erosion-activos.png"
                alt="placeholder"
                width={600} height={600}
                className="w-full rounded-lg"
              />
            </div>
            <Separator className="my-14" />
          </div>
        </section>
);
}