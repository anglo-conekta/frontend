import { Badge } from "@/components/ui/badge";
import Image from "next/image";

export const HeroCav10 = () => (
    <div className="w-full py-6">
    <div className="container mx-auto">
  <div className="w-full ">
    <div className="container mx-auto">
      <div className="flex flex-col lg:flex-row gap-10 lg:items-center">
        <div className="flex gap-4 flex-col flex-1">
          <div>
            <Badge>Plantas</Badge>
          </div>
          <div className="flex gap-2 flex-col">
            <h1 className="text-xl md:text-3xl md:text-5xl tracking-tighter lg:max-w-xl font-regular text-left">
            Seguimiento Plantas Zonales
            </h1>
            <p className="text-lg max-w-xl lg:max-w-sm leading-relaxed tracking-tight text-muted-foreground text-left">
            </p>
          </div>
        </div>
        <div className="bg-muted rounded-md w-full aspect-video h-full flex-1">
          <Image
            src="/ff-cav10.jpg"
            alt="placeholder hero"
            className="w-full rounded-md object-cover"
            width={600}
            height={500}
          />
        </div>
      </div>
    </div>
  </div>

  </div>
</div>
);