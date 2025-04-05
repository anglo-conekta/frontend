import { Separator } from '@/components/ui/separator';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import Image from 'next/image';
import qs from "qs";

async function getNoticias() {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:1337";
  const path = `/api/inicio-calendario`;

  const url = new URL(path, baseUrl);

  const res = await fetch(url, {
    cache: 'no-store',
    });

  if (!res.ok) throw new Error("Failed to fetch calendario");

  const data = await res.json();
  //console.log(data);
  //const titulo1 = data.data.titulo1;

return {
    calendar: {
      tituloclr: data.data.titulocldr, // Cambiamos el nombre de la prop a "listaDeProductos"
      subtitulocldr: data.data.subtitulocldr, // Cambiamos el nombre de la prop a "listaDeProductos"
      dia1: data.data.dia1,
      actividad1: data.data.actividad1,
      dia2: data.data.dia2,
      actividad2: data.data.actividad2,
      dia3: data.data.dia3,
      actividad3: data.data.actividad3,
      dia4: data.data.dia4,
      actividad4: data.data.actividad4,
    },
  };
//console.log(calendar);
}
async function getNoticiaDetalle() {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:1337";
  const path = `/api/inicio-noticia`;
  const url = new URL(path, baseUrl);

  url.search = qs.stringify({
    populate: {
      notimage1: {
        fields: ["alternativeText", "name", "url"],
      },
      notimage2: {
        fields: ["alternativeText", "name", "url"],
      },
      notimage3: {
        fields: ["alternativeText", "name", "url"],
      },
    },
  });

  const res = await fetch(url, {
    cache: 'no-store',
    });

  if (!res.ok) throw new Error("Failed to fetch NoticiaDetalle");

  const data = await res.json();
  return {
    noticias: {
      imagen1url: data.data.notimage1.url,
      notifecha1: data.data.notifecha1,
      notititulo1: data.data.notititulo1,
      noticia1: data.data.noticia1,
      imagen2url: data.data.notimage2.url, 
      notifecha2: data.data.notifecha2, 
      notititulo2: data.data.notititulo2,
      noticia2: data.data.noticia2,
      imagen3url: data.data.notimage3.url, 
      notifecha3: data.data.notifecha3, 
      notititulo3: data.data.notititulo3,
      noticia3: data.data.noticia3,
    },
  };
}

export default async function ListNoticias() {
  const datanoti= await getNoticias();
  const titulonoti = datanoti.calendar.tituloclr;
  const subtitulonoti = datanoti.calendar.subtitulocldr;
  const dia1 = datanoti.calendar.dia1;
  const actividad1 = datanoti.calendar.actividad1;
  const dia2 = datanoti.calendar.dia2;
  const actividad2 = datanoti.calendar.actividad2;
  const dia3 = datanoti.calendar.dia3;
  const actividad3 = datanoti.calendar.actividad3;
  const dia4 = datanoti.calendar.dia4;
  const actividad4 = datanoti.calendar.actividad4;
  const detallenoticia = await getNoticiaDetalle();
  const pathimagen1 = detallenoticia.noticias.imagen1url; 
  const pathimagen2 = detallenoticia.noticias.imagen2url; 
  const pathimagen3 = detallenoticia.noticias.imagen3url; 
  const baseUrlimagen = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:1337";
 // const urlnotimage1 = `${baseUrlimagen}${pathimagen1}`;
 // const urlnotimage2 = `${baseUrlimagen}${pathimagen2}`;
 // const urlnotimage3 = `${baseUrlimagen}${pathimagen3}`;
  const notifecha1 = detallenoticia.noticias.notifecha1;
  const notifecha2 = detallenoticia.noticias.notifecha2;
  const notifecha3 = detallenoticia.noticias.notifecha3;
  const notititulo1 = detallenoticia.noticias.notititulo1;
  const notititulo2 = detallenoticia.noticias.notititulo2;
  const notititulo3 = detallenoticia.noticias.notititulo3;
  const noticia1 = detallenoticia.noticias.noticia1;
  const noticia2 = detallenoticia.noticias.noticia2;
  const noticia3 = detallenoticia.noticias.noticia3;

let urlnotimage1 = '';
  let urlnotimage2 = '';
  let urlnotimage3 = '';

  if (pathimagen1 && baseUrlimagen) {
    const trimmedBaseUrl = baseUrlimagen.replace(/\/$/, '');
    const trimmedImagePath = pathimagen1.replace(/^\//, '');
    urlnotimage1 = `${trimmedBaseUrl}/${trimmedImagePath}`;
  } else if (pathimagen1) {
    urlnotimage1 = pathimagen1;
  }

  if (pathimagen2 && baseUrlimagen) {
    const trimmedBaseUrl = baseUrlimagen.replace(/\/$/, '');
    const trimmedImagePath = pathimagen2.replace(/^\//, '');
    urlnotimage2 = `${trimmedBaseUrl}/${trimmedImagePath}`;
  } else if (pathimagen2) {
    urlnotimage2 = pathimagen2;
  }

  if (pathimagen3 && baseUrlimagen) {
    const trimmedBaseUrl = baseUrlimagen.replace(/\/$/, '');
    const trimmedImagePath = pathimagen3.replace(/^\//, '');
    urlnotimage3 = `${trimmedBaseUrl}/${trimmedImagePath}`;
  } else if (pathimagen3) {
    urlnotimage3 = pathimagen3;
  }



  return (

<section className="w-full py-6">
<div className="container mx-auto">
    <div>
      <h3 className="text-balance text-3xl md:text-5xl">
        {titulonoti}
      </h3>
    </div>

        <div className="grid items-center gap-8 lg:grid-cols-2">
          <div className="flex flex-col text-center lg:items-start lg:text-left">
<h5 className="py-6">{subtitulonoti}</h5>
<Table>
  <TableCaption> </TableCaption>
  <TableHeader>
    <TableRow>
      <TableHead className="w-[100px] text-center">Día</TableHead>
      <TableHead className="text-left">Actividad</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody className="py-6">
    <TableRow >
      <TableCell className="font-medium text-center"><h4>{dia1}</h4></TableCell>
      <TableCell>{actividad1}</TableCell>
      </TableRow>
    <TableRow>
      <TableCell className="font-medium text-center"><h4>{dia2}</h4></TableCell>
      <TableCell>{actividad2}</TableCell>
    </TableRow>
    <TableRow>
      <TableCell className="font-medium text-center"><h4>{dia3}</h4></TableCell>
      <TableCell>{actividad3}</TableCell>
    </TableRow>
    <TableRow>
      <TableCell className="font-medium text-center"><h4>{dia4}</h4></TableCell>
      <TableCell>{actividad4}</TableCell>
    </TableRow>
  </TableBody>
</Table>

          </div>
           <div className="flex flex-col items-center text-center lg:items-start lg:text-left gap-8">
            <h5>19 de julio</h5>
            <h3>Resultados Ambientales LBI 2° Trimestre 2025 </h3>


           </div>
        </div>
          <Separator className="my-14" />
    <div className="relative mx-auto">
      <div className="mx-auto mt-12 grid gap-12 lg:max-w-none lg:grid-cols-3">
        <div className="mb-12 flex cursor-pointer flex-col overflow-hidden">

            <div className="shrink-0">
              <Image className="w-full rounded-lg object-cover" src={urlnotimage1} alt=""             width={600}
            height={600} />
            </div>
          <div className="flex flex-1 flex-col justify-between">
            <div className="flex-1">
                <div className="flex space-x-1 pt-6 text-sm text-gray-500">
                  <time dateTime="2020-03-10"> {notifecha1} </time>
                </div>
                <h3 className="text-2xl leading-none">
                 {notititulo1} 
                </h3>
                <p className="mt-1 text-muted-foreground md:mt-6">
                 {noticia1} 
                </p>
            </div>
          </div>
        </div>

        <div className="mb-12 flex cursor-pointer flex-col overflow-hidden">
            <div className="shrink-0">
              <Image className="w-full rounded-lg object-cover" src={urlnotimage2} alt=""            width={600}
            height={600} />
            </div>
          <div className="flex flex-1 flex-col justify-between">
            <div className="flex-1">
                <div className="flex space-x-1 pt-6 text-sm text-gray-500">
                  <time dateTime="2020-03-10"> {notifecha2} </time>
                </div>
                <h3 className="text-2xl leading-none">
                 {notititulo2} 
                </h3>
                <p className="mt-1 text-muted-foreground md:mt-6">
                 {noticia2} 
                </p>
            </div>
          </div>
        </div>

        <div className="mb-12 flex cursor-pointer flex-col overflow-hidden">
            <div className="shrink-0">
              <Image className="w-full rounded-lg object-cover" src={urlnotimage3} alt=""             width={600}
            height={600}/>
            </div>
          <div className="flex flex-1 flex-col justify-between">
            <div className="flex-1">
                <div className="flex space-x-1 pt-6 text-sm text-gray-500">
                  <time dateTime="2020-03-10"> {notifecha3} </time>
                </div>
                <h3 className="text-2xl leading-none">
                  {notititulo3}
                </h3>
                <p className="mt-1 text-muted-foreground md:mt-6">
                 {noticia3}
                </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Separator className="my-14" />
  </div>
</section>

);
};

