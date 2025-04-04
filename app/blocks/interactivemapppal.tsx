
import { Separator } from "@/components/ui/separator";
import Map3 from "@/components/ui/map";

export const MainMap = () => (

    
  <div className="w-full py-6 lg:py-6">
    <div className="container mx-auto">
        <div className="flex flex-col gap-4 cursor-pointer md:col-span-2">
          <div className="aspect-video rounded-lg">
            <Map3></Map3>
          </div>
          </div>
      <Separator className="my-14" />
    </div>
  </div>
  
);