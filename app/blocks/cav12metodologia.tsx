import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { TablaReptilia } from "./tablaCav12reptilia";
import { TablaAves } from "./tablaCav12Aves";
import { TablaMammalia } from "./tablaCav12Mammalia";
import { TablaAmphibia } from "./tablacav12amphibia";
/*probando 123*/

export const Cav12Metodologia = () => (
      <div className="w-full py-6">
    <div className="container mx-auto">
            <h3 className="py-8">Metodologías</h3>
<Tabs defaultValue="reptilia" className="w-full">
  <TabsList>
    <TabsTrigger value="reptilia">Clase Reptilia</TabsTrigger>
    <TabsTrigger value="aves">Clase Aves</TabsTrigger>
    <TabsTrigger value="mammalia">Clase Mammalia</TabsTrigger>
    <TabsTrigger value="amphibia">Clase Amphibia</TabsTrigger>
  </TabsList>
  <TabsContent value="reptilia">
      <div className="grid container py-8 grid-cols-1 gap-8 items-center lg:grid-cols-2">
        <div className="flex gap-10 flex-col">
          <div className="flex gap-4 flex-col">
            <div className="flex gap-6 flex-col">
              <h3 className="tracking-tighter max-w-xl text-left font-regular">
                Clase Reptilia
              </h3>
                <h4 className="tracking-tighter max-w-xl text-left font-regular">
                Transectos
              </h4>
              <p className="text-lg leading-relaxed tracking-tight text-muted-foreground max-w-xl text-left">
                Se llevarán a cabo transectos de 200 m de largo aproximadamente, de forma pedestre a baja velocidad. A lo largo del transecto se registrarán los ejemplares dentro de un ancho de banda de dos metros.
              </p>
                              <h4 className="tracking-tighter max-w-xl text-left font-regular">
                Registro de evidencias indirectas
              </h4>
              <p className="text-lg leading-relaxed tracking-tight text-muted-foreground max-w-xl text-left">
                Como método de detección indirecto se contempla la presencia de madrigueras y mudas de piel.
              </p>
            </div>
          </div>
          </div>
        <div className="bg-muted rounded-md aspect-video">
            <Image
            src="/belli.png"
            alt="placeholder hero"
            className="w-full rounded-md object-cover"
            width={600}
            height={500}
          />
        </div>
                      
      </div>
      <TablaReptilia></TablaReptilia>
  </TabsContent>

    <TabsContent value="aves">
      <div className="grid container py-8 grid-cols-1 gap-8 items-center lg:grid-cols-2">
        <div className="flex gap-10 flex-col">
          <div className="flex gap-4 flex-col">
            <div className="flex gap-6 flex-col">
              <h3 className="tracking-tighter max-w-xl text-left font-regular">
                Clase Aves
              </h3>
                <h4 className="tracking-tighter max-w-xl text-left font-regular">
                Transectos
              </h4>
              <p className="text-lg leading-relaxed tracking-tight text-muted-foreground max-w-xl text-left">
Para la descripción de avifauna se proyectarán transectos de ancho fijo. Este método consistirá en recorrer un trazado de una línea imaginaria de largo variable que depende de las características del terreno, así como la extensión de los ambientes muestreados, con un ancho fijo a cada lado del observador que varía entre 30 y 50 m para Passeriformes (en bosque o ambientes abiertos respectivamente) hasta 1 km para Falconiformes o Cathartiformes.               </p>
                              
                <h4 className="tracking-tighter max-w-xl text-left font-regular">Estaciones de observación y escucha</h4>
                <p className="text-lg leading-relaxed tracking-tight text-muted-foreground max-w-xl text-left">Los puntos de observación y escucha son ampliamente usados en estudios de avifauna, pudiendo abarcar gran variedad de hábitats, en las cuales el investigador, durante un período de previo de 1 minuto, estabiliza el comportamiento de las aves. </p>
            
            </div>
          </div>
          </div>
        <div className="bg-muted rounded-md aspect-video">
            <Image
            src="/gayi.png"
            alt="placeholder hero"
            className="w-full rounded-md object-cover"
            width={600}
            height={500}
          />
        </div>
      </div>

      <div className="container grid-cols-1 gap-8 items-center">

        <div className="flex flex-col">
          <div className="flex gap-4 flex-col">
            <div className="flex gap-6 flex-col">
                      <p className="text-lg leading-relaxed tracking-tight text-muted-foreground text-left">Posteriormente, se registran todas las aves identificadas visual o auditivamente. El tiempo de conteo se estima entre 5 y 20 minutos, el cual dependerá del momento de saturación en el registro de especies, evitando registros duplicados de aves. Se establecerán parcelas orientadas hacia vegas y matorrales, principalmente, con un radio de 50 m. Las estaciones serán ubicadas con una distancia mínima de 150 m para reducir la duplicidad de conteos y en un horario de trabajo fue entre las 9:00 y 19:00 h.</p>              
                              <h4 className="tracking-tighter text-left font-regular">
                Detección indirecta
              </h4>
              <p className="text-lg leading-relaxed tracking-tight text-muted-foreground text-left">
                Como método de detección indirecta se registrará cualquier rastro, tales como nidos, huevos, heces, plumas, huellas y egagrópilas a medida que se realizan los transectos.              </p>
      <TablaAves></TablaAves>
      </div>
      </div>
      </div>
      </div>
  </TabsContent>

      <TabsContent value="mammalia">
      <div className="grid container py-8 grid-cols-1 gap-8 items-center lg:grid-cols-2">
        <div className="flex gap-10 flex-col">
          <div className="flex gap-4 flex-col">
            <div className="flex gap-6 flex-col">
              <h3 className="tracking-tighter max-w-xl text-left font-regular">
                Clase Mammalia
              </h3>
                <h4 className="tracking-tighter max-w-xl text-left font-regular">
                Transectos
              </h4>
              <p className="text-lg leading-relaxed tracking-tight text-muted-foreground max-w-xl text-left">
                Para determinar la presencia de especies de mamíferos cuyo peso promedio en estado adulto es superior a 1 kg, se realizarán recorridos con búsqueda activa de individuos o sus rastros. Los transectos tienen un largo aproximado de 200 metros de largo con un ancho fijo de 4 metros a cada lado de la línea de progresión. Se llevarán a cabo por un profesional a baja velocidad, en los que se registrarán todos los individuos y/o rastros de mamíferos identificados.
              </p>
                              
                <h4 className="tracking-tighter max-w-xl text-left font-regular">Registro de evidencias indirectas</h4>
                <p className="text-lg leading-relaxed tracking-tight text-muted-foreground max-w-xl text-left">
                    La identificación indirecta, se llevará a cabo mediante la detección de huellas sobre sustratos adecuados para la impresión de las mismas, tales como tierra arcillosa o arena, así como también la localización de madrigueras, cuevas, heces, entre otros signos. Las huellas serán fotografiadas y comparadas con esquemas de huellas de mamíferos silvestres chilenos. 
                </p>  
            </div>
          </div>
          </div>
        <div className="bg-muted rounded-md aspect-video">
            <Image
            src="/degu.png"
            alt="placeholder hero"
            className="w-full rounded-md object-cover"
            width={600}
            height={500}
          />
        </div>
      </div>

      <div className="container grid-cols-1 gap-8 items-center">

        <div className="flex flex-col">
          <div className="flex gap-4 flex-col">
            <div className="flex gap-6 flex-col">
                        <h4 className="tracking-tighter max-w-xl text-left font-regular">
                Cámaras trampa
              </h4>
              <p className="text-lg leading-relaxed tracking-tight text-muted-foreground text-left">
Las cámaras trampas sirven para trabajar con animales crípticos, de tamaño medio a grande, de hábitos nocturnos o crepusculares y/o que viven en baja densidad. Con el uso de las cámaras trampas se pueden registrar especies difíciles de observar, principalmente carnívoros (felinos, cánidos y mustélidos), sin generar alteraciones en su comportamiento habitual. En el presente estudio, las cámaras serán instaladas y se utilizará cebos y/o atractores olfativos a fines para este método.
                </p>
                                <h4 className="tracking-tighter max-w-xl text-left font-regular">
                Trampeo in vivo de micromamíferos (Trampas Sherman)
              </h4>
              <p className="text-lg leading-relaxed tracking-tight text-muted-foreground text-left">
Con el fin de detectar e identificar especies de micromamíferos (roedores), se realizarán trampeos nocturnos dirigidos, utilizando trampas Sherman de 8 x 9 x 23 cm. Se instalarán líneas de trampeos de 10 a 15 trampas cada una, a una distancia, una de la otra, de aproximadamente 10 metros (SEA, 2015). Estas trampas serán cebadas con avena y esencia de vainilla al atardecer y permanecerán activas en horario nocturno por un mínimo de 2 noches. Las trampas se revisarán de forma diaria en la mañana y, en el caso de haber capturas, los animales se identifican y son liberados en el mismo sitio donde se capturaren.
                </p>
                                <h4 className="tracking-tighter max-w-xl text-left font-regular">
                Muestreo de Quirópteros
              </h4>
              <p className="text-lg leading-relaxed tracking-tight text-muted-foreground text-left">
La descripción de especies del órden Chiroptera se basará en datos obtenidos prefiriendo metodologías no invasivas, principalmente, en el reconocimiento e interpretación de la ecolocación, es decir, de los pulsos de alta frecuencia (entre 15 y 210 kHz) que emiten los murciélagos. Dichos pulsos rebotan en los objetos circundantes o las presas y le entregan al murciélago información completa de su entorno (distancia, forma, tamaño, movilidad, etc.).
Para registrar estas señales de alta frecuencia que emiten los murciélagos se utilizarán equipos detectores de ultrasonidos, tales como el D500X de Petterson Elektronik y Song Meter SM4 de Wildlife Acoustics. Posteriormente, la identificación de las especies se realizará mediante los softwares Bat Sound 4 y Avisoft-SASLab Pro. Dentro de cada ambiente se buscarán áreas con características particulares donde la probabilidad de presencia de quirópteros sea mayor, tales como cuevas, cursos de agua superficial y vegetación abierta, entre otras. El período de muestreo abarcará el crepúsculo desde el atardecer hasta el amanecer (entre 20:30 y 7:00 h).

                </p>
                                <TablaMammalia></TablaMammalia>           
      </div>
      </div>
      </div>
      </div>
  </TabsContent>

      <TabsContent value="amphibia">
      <div className="grid container py-8 grid-cols-1 gap-8 items-center">
        <div className="flex gap-10 flex-col">
          <div className="flex gap-4 flex-col">
            <div className="flex gap-6 flex-col">
              <h3 className="tracking-tighter max-w-xl text-left font-regular">
                Clase Amphibia
              </h3>
              <p className="text-lg leading-relaxed tracking-tight text-muted-foreground text-left">

Si bien no existen registros de esta especie en el sector de la línea base del proyecto, la  búsqueda se realiza con la siguiente metodología: 
</p>
                <h4 className="tracking-tighter text-left font-regular">
                Transectos
              </h4>
              <p className="text-lg leading-relaxed tracking-tight text-muted-foreground text-left">
Para el estudio de los anfibios se proponen recorridos de largo variable, donde se busca activamente y de forma dirigida a individuos de este grupo. Todos los transectos serán llevados a cabo por especialistas en fauna silvestre, de forma pedestre y a baja velocidad. El registro de los ejemplares se realizará dentro de los límites de la capacidad de detección visual del observador, estandarizado en un ancho de banda de dos metros. 
Durante estos recorridos se revisarán indicios de la presencia de ejemplares, así como la existencia de hábitats o microhábitats apropiados para las especies de este grupo tales como vegas, pozones charcos temporales, bajo rocas, troncos o entre la vegetación ribereña de vertientes. </p>                              
            
            <TablaAmphibia></TablaAmphibia>
            
            </div>
          </div>
          </div>
      </div>
  </TabsContent>

  
</Tabs>

<Separator></Separator>

</div>
</div>
);