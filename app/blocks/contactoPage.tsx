
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Separator } from "@/components/ui/separator";

export const ContactoContent = () => (
  <div className="w-full">
    <div className="container mx-auto">
        <div className="flex text-center justify-center items-center gap-4 flex-col">
          <div className="flex gap-2 flex-col">
            <h4 className="md:text-5xl tracking-tighter text-left font-regular">
              Cuéntanos qué necesitas y te ayudaremos
            </h4>
            <p className="text-lg leading-relaxed tracking-tight text-muted-foreground max-w-xl text-center">
            </p>
          </div>
          <div className="py-6">
            <h3>Quiero:</h3>
          </div>
        </div>

        <div className="w-full mx-auto">
          <Accordion type="single" collapsible className="w-full">
              <AccordionItem value={"1"}>
                <AccordionTrigger className="gradient-accordion">
                  <h5>Realizar una consulta o reclamo</h5>
                </AccordionTrigger>
                <AccordionContent>
                <p>Por favor comuníquese al 600 655 05 00. También puede ingresar su consulta y/o reclamo en el siguiente <u>formulario</u>.</p>
                </AccordionContent>
              </AccordionItem>
                <AccordionItem value={"2"}>
                <AccordionTrigger className="gradient-accordion">
                  <h5>Hacer una denuncia (YourVoice)</h5>
                </AccordionTrigger>
                <AccordionContent>
                <p>Si desea denunciar una conducta inapropiada, Anglo American cuenta con un sistema de denuncias confidencial llamado YourVoice para los empleados, socios de negocio y otras partes interesadas, y que es administrado de manera independiente por una empresa de consultoría externa. Ingrese a <a href="www.yourvoice.angloamerican.com">www.yourvoice.angloamerican.com</a> o llame al 800-914-059.</p>
                </AccordionContent>
              </AccordionItem>
          </Accordion>
        </div>
        <Separator></Separator>
      </div>
    </div>
);