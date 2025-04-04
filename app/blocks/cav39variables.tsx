import { Separator } from '@/components/ui/separator';
import { CircleCheckBig } from 'lucide-react';
import Image from 'next/image';

const VariablesCav39a = () => {
  return (
    <section className="w-full py-6">
    <div className="container mx-auto">
        <div className="flex flex-col gap-12 md:flex-row">
          <Image
            src="/geomorfica.png"
            alt="placeholder"
            width={600} height={600}
            className="w-full rounded-lg"
          />
          <div className="lg:p-10">
            <h3 className="text-balance text-3xl font-medium md:text-5xl">
            Analisis de suceptibilidad de escala regional
            </h3>
            <p className="mt-1 text-muted-foreground md:mt-6">
            Información a título ilustrativo
            </p>
            <ul className="mt-10 flex-wrap items-center gap-6 space-y-6 md:flex md:space-y-0">
              <li className="flex items-center gap-3">
                <CircleCheckBig className="size-4" /> Geología
              </li>
              <li className="flex items-center gap-3">
                <CircleCheckBig className="size-4" />
                Permafrost
              </li>
              <li className="flex items-center gap-3">
                <CircleCheckBig className="size-4" /> Escenarios Permafrost
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col gap-12 md:flex-row">

          <div className="lg:p-10 py-20">
            <h3 className="text-balance text-3xl font-medium md:text-5xl">
            Analisis de suceptibilidad de escala local
            </h3>
            <p className="mt-1 text-muted-foreground md:mt-6">
            Información a título ilustrativo
            </p>
            <ul className="mt-10 flex-wrap items-center gap-6 space-y-6 md:flex md:space-y-0">
              <li className="flex items-center gap-3">
                <CircleCheckBig className="size-4" /> Geología
              </li>
              <li className="flex items-center gap-3">
                <CircleCheckBig className="size-4" />
                Mapa de Peligros de Remocion en Masa
              </li>
            </ul>
          </div>
                    <Image
            src="/geomorfica.png"
            alt="placeholder"
            width={600} height={600}
            className="w-full rounded-lg"
          />
        </div>

      </div>
              <Separator></Separator>
    </section>
  );
};

export default VariablesCav39a;
