import { Wind, Menu, Sunset, Trees, AudioLines, Mountain, Waves } from 'lucide-react';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button, buttonVariants } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import Image from 'next/image';

const subMenuItemsOne = [
  {
    link:"/medio-fisico/aire",
    title: 'Aire y Metereología',
    description: 'Monitoreo de calidad de aire y metereología',
    icon: <Wind className="size-5 shrink-0" />,
  },
  {
    link:"/medio-fisico/agua",
    title: 'Agua',
    description: 'Monitoreo de agua superficial y subterránea',
    icon: <Waves className="size-5 shrink-0" />,
  },
  {
    link:"/medio-fisico/ruido",
    title: 'Ruido Móvil',
    description: 'Monitoreo de ruido móvil',
    icon: <AudioLines className="size-5 shrink-0" />,
  },
  {
    link:"/medio-fisico/glaciares",
    title: 'Glaciares',
    description: 'Monitoreo de glaciares',
    icon: <Mountain className="size-5 shrink-0" />,
  },

];

const subMenuItemsTwo = [
  {
    link:"/ecosistemasterrestres/suelo",
    title: 'Suelo',
    description:
      'Monitoreo de calidad y uso del suelo',
    icon: <Sunset className="size-5 shrink-0" />,
  },
  {
    link:"/ecosistemasterrestres/florayfauna",
    title: 'Flora, Vegetación y Fauna',
    description: 'Monitoreo de Flora Vegetación y Fauna',
    icon: <Trees className="size-5 shrink-0" />,
  },
];

const Navbar = () => {
  return (
    
    <section className="w-full py-6">
      <div className="container mx-auto">
        <nav className="hidden justify-between lg:flex">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Image
              src="/aa-logo.png"
                alt="logo" width={250} height={70}
              />
            </div>
            <div className="flex items-center">
              <a
                className={cn(
                  navigationMenuTriggerStyle,
                  buttonVariants({
                    variant: 'ghost',
                  }),
                )}
                href="/"
              >
                Inicio
              </a>
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem className="">
                    <NavigationMenuTrigger>
                      <a href="/medio-fisico"><span>Medio Físico</span></a>
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="w-80 p-3">
                        <NavigationMenuLink>
                          {subMenuItemsOne.map((item, idx) => (
                            <li key={idx}>
                              <a
                                className={cn(
                                  'flex select-none gap-4 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
                                )}
                                href={item.link}
                              >
                                {item.icon}
                                <div>
                                  <div className="font-semibold">
                                    {item.title}
                                  </div>
                                  <p className="leading-snug text-muted-foreground">
                                    {item.description}
                                  </p>
                                </div>
                              </a>
                            </li>
                          ))}
                        </NavigationMenuLink>
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                  <NavigationMenuItem className="">
                    <NavigationMenuTrigger>
                      <a href="/ecosistemasterrestres"><span>Ecosistemas Terrestres</span></a>
                      </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="w-80 p-3">
                        <NavigationMenuLink>
                          {subMenuItemsTwo.map((item, idx) => (
                            <li key={idx}>
                              <a
                                className={cn(
                                  'flex select-none gap-4 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
                                )}
                                href={item.link}
                              >
                                {item.icon}
                                <div>
                                  <div className="font-semibold">
                                    {item.title}
                                  </div>
                                  <p className="leading-snug">
                                    {item.description}
                                  </p>
                                </div>
                              </a>
                            </li>
                          ))}
                        </NavigationMenuLink>
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>

              <a
                className={cn(
                  navigationMenuTriggerStyle,
                  buttonVariants({
                    variant: 'ghost',
                  }),
                )}
                href="/vialidad"
              >
                Vialidad
              </a>
              <a
                className={cn(
                  navigationMenuTriggerStyle,
                  buttonVariants({
                    variant: 'ghost',
                  }),
                )}
                href="/patrimonio-cultural"
              >
                Patrimonio Cultural
              </a>
                                          <a
                className={cn(
                  navigationMenuTriggerStyle,
                  buttonVariants({
                    variant: 'ghost',
                  }),
                )}
                href="/limnologia"
              >
                Limnología
              </a>
                                                        <a
                className={cn(
                  navigationMenuTriggerStyle,
                  buttonVariants({
                    variant: 'ghost',
                  }),
                )}
                href="/contacto"
              >
                Contacto
              </a>

            </div>
          </div>
        </nav>
        <div className="block lg:hidden whitebg">
          <div className="flex items-center justify-between whitebg">
            <div className="flex items-center gap-2">
            <Image
              src="/logo-nabvar.png"
                className="w-48"
                alt="logo" width={150} height={45}
              />
            </div>
              <span className="text-xl font-bold"></span>
            </div>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant={'outline'} size={'icon'}>
                  <Menu className="size-4" />
                </Button>
              </SheetTrigger>
              <SheetContent className="overflow-y-auto whitebg">
                <SheetHeader>
                  <SheetTitle>
                    <div className="flex items-center gap-2">
                                    <Image
              src="/logo-nabvar.png"
                className="w-48"
                alt="logo" width={150} height={45}
              /> </div>
                  </SheetTitle>
                </SheetHeader>
                <div className="my-8 flex flex-col gap-4">
                  <a href="#" className="font-semibold">
                    Inicio
                  </a>
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="products" className="border-b-0">
                      <AccordionTrigger className="mb-4 py-0 font-semibold hover:no-underline">
                        Medios Físicos
                      </AccordionTrigger>
                      <AccordionContent className="mt-2">
                        {subMenuItemsOne.map((item, idx) => (
                          <a
                            key={idx}
                            className={cn(
                              'flex select-none gap-4 rounded-md p-3 leading-none outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
                            )}
                            href="/medio-fisico"
                          >
                            {item.icon}
                            <div>
                              <div className="font-semibold">
                                {item.title}
                              </div>
                              <p className="leading-snug text-muted-foreground">
                                {item.description}
                              </p>
                            </div>
                          </a>
                        ))}
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="resources" className="border-b-0">
                      <AccordionTrigger className="py-0 font-semibold hover:no-underline">
                        Ecosistemas Terrestres
                      </AccordionTrigger>
                      <AccordionContent className="mt-2">
                        {subMenuItemsTwo.map((item, idx) => (
                          <a
                            key={idx}
                            className={cn(
                              'flex select-none gap-4 rounded-md p-3 leading-none outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
                            )}
                            href="/ecosistemasterrestres"
                          >
                            {item.icon}
                            <div>
                              <div className="font-semibold">
                                {item.title}
                              </div>
                              <p className="leading-snug text-muted-foreground">
                                {item.description}
                              </p>
                            </div>
                          </a>
                        ))}
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                  <a href="/vialidad" className="font-semibold">
                    Vialidad
                  </a>
                  <a href="/patrimonio-cultural" className="font-semibold">
                    Patrimonio Cultural
                  </a>
                  <a href="/limnologia" className="font-semibold">
                    Limnología
                  </a>
                  <a href="/contacto" className="font-semibold">
                    Contacto
                  </a>
                </div>
                <div className="border-t pt-4">
                  <div className="grid grid-cols-2 justify-start">
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
    </section>
  );
};

export default Navbar;
