import { Separator } from "@/components/ui/separator";
import Image from "next/image";


const Testimonials2 = () => {
    return (

<section className="w-full py-6">
  <div className="container container mx-auto text-center">
  <h2>Testimonios</h2>
    <div className="grid grid-cols-1 gap-24 lg:grid-cols-1">
      <div className="flex flex-col w-full max-w-lg mb-12 text-center lg:mx-auto">
        <Image alt="testimonial" className="inline-block object-cover object-center w-20 h-20 mx-auto mb-8 rounded-full"
          src="/rafael.png" width={150} height={150} />
        <p className="mx-auto text-base leading-relaxed text-gray-500">Cumplir con las normas ambientales es nuestra obligación. No obstante, nuestra ambición va más allá, pues nos hemos propuesto mejorar activamente las condiciones de los ecosistemas y la biodiversidad en los territorios donde operamos, dejando las áreas silvestres en mejor estado que como las encontramos.</p>
        <h2 className="mt-4 text-xs font-semibold tracking-widest text-blue-500 uppercase">
        Rafael Ascanio
          <span className="font-semibold text-gray-200 lg:mb-0"> </span>
        </h2>
      </div>
    </div>
    <Separator className="my-14" />
  </div>
</section>

);
};

export default Testimonials2;