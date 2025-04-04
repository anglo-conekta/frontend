import { Badge } from "@/components/ui/badge";

export const CAVListVialidad = () => (
  <div className="w-full py-6">
    <div className="container mx-auto">
      <div className="flex w-full flex-col sm:flex-row sm:justify-between sm:items-center gap-8">
        <h4 className="text-3xl md:text-5xl tracking-tighter max-w-xl font-regular">
        </h4>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <a href="/medio-fisico/agua">
        <div className="flex flex-col gap-4 hover:opacity-75 cursor-pointer">
          <div className="bg-muted rounded-md aspect-video"></div>
          <div className="flex flex-row gap-4 items-center">
            <Badge>Transporte</Badge>
          </div>
          <div className="flex flex-col gap-1">
            <h3 className="max-w-3xl text-2xl tracking-tight">
              Monitoreo Flujo Ciclistas Ruta G-21
            </h3>
            <p className="max-w-3xl text-muted-foreground text-base">
              Lorem Ipsum
            </p>
          </div>
        </div> </a>

        <a href="">
        <div className="flex flex-col gap-4 hover:opacity-75 cursor-pointer">
          <div className="bg-muted rounded-md aspect-video"></div>
          <div className="flex flex-row gap-4 items-center">
            <Badge>Transporte</Badge>
          </div>
          <div className="flex flex-col gap-1">
          <a href=""><h3 className="max-w-3xl text-2xl tracking-tight">
              Monitoreo de flujos vehículares
            </h3> </a>
            <p className="max-w-3xl text-muted-foreground text-base">
              Lorem Ipsum
            </p>
          </div>
        </div></a>

      </div>
    </div>
  </div>
);