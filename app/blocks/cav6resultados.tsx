import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";

const Cav6Resultado = () => {
    return (
        <section className="w-full py-6">
  <div className="container flex flex-col items-center gap-16 mx-auto">
<Tabs defaultValue="patosia" className="w-full">
  <TabsList>
    <TabsTrigger value="patosia">Glaciar Rocoso</TabsTrigger>
    <TabsTrigger value="caespitosa">Laderas</TabsTrigger>
  </TabsList>
  <TabsContent value="patosia">
    <Card>
      <CardHeader>
        <CardTitle>Glaciar rocoso sector punto 4</CardTitle>
        <CardDescription> </CardDescription>
      </CardHeader>
      <CardContent>
                <div className="rounded-md">
            <Image
            src="/glaciarRocoso1.png"
            alt="placeholder hero"
            className="rounded-md aspect-auto h-[500px]"
            width={600}
            height={500}
          />
        </div>
      </CardContent>
      </Card>
  </TabsContent>

  <TabsContent value="caespitosa">

        <Card>
      <CardHeader>
        <CardTitle>Laderas con lóbulos de solifluxión en el sector de Yerba Loca</CardTitle>
        <CardDescription> </CardDescription>
      </CardHeader>
      <CardContent>
                <div className="ounded-md">
                      <Image
            src="/laderas1.png"
            alt="placeholder hero"
            className="rounded-md aspect-auto h-[500px]"
            width={600}
            height={500}
          />
        </div>
      </CardContent>
      </Card>
  </TabsContent>
</Tabs>
  </div>
</section>

);
};

export default Cav6Resultado;
