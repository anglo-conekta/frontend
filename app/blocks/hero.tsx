import Image from "next/image";
import qs from "qs";


async function getTitulo1() {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:1337";
  const path = `/api/inicio`;

  const url = new URL(path, baseUrl);

  const res = await fetch(url, {
    cache: 'no-store',
    });

  if (!res.ok) throw new Error("Failed to fetch inicio");

  const data = await res.json();
  //console.log(data);
  const titulo1 = data.data.titulo1; 

  return titulo1;
}
async function getTitulo2() {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:1337";
  const path = `/api/inicio`;

  const url = new URL(path, baseUrl);

  const res = await fetch(url, {
    cache: 'no-store',
    });

  if (!res.ok) throw new Error("Failed to fetch inicio");

  const data = await res.json();
  //console.log(data);
  const titulo2 = data.data.titulo2;

  return titulo2;
}

async function getImagen1() {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:1337";
  const path = `/api/inicio`;
  const url = new URL(path, baseUrl);

  url.search = qs.stringify({
    populate: {
      imagen1: {
        fields: ["alternativeText", "name", "url"],
      },
    },
  });

  const res = await fetch(url, {
    cache: 'no-store',
    });

  if (!res.ok) throw new Error("Failed to fetch inicio");

  const data = await res.json();
  //console.log(data);
  const imagen1 = data.data.imagen1.url;
  //console.log(imagen1);
  return imagen1;
}

export default async function Hero() {
  const txttitulo1= await getTitulo1();
  const txttitulo2= await getTitulo2();
  const imagen1url= await getImagen1();
  const baseUrlimagen1 = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:1337";
  const pathimagen1 = imagen1url;
  //const urlimagen1 = `${baseUrlimagen1}${pathimagen1}`;
 // Elimina la barra inicial de la ruta de la imagen si existe
  const pathSinBarra = pathimagen1.replace(/^\//, '');
  const urlimagen1 = `${baseUrlimagen1}/${pathSinBarra}`;




  return (
    <section className="w-full py-6">
      <div className="container mx-auto">
        <div className="grid items-center gap-8 lg:grid-cols-2">
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <h1>{txttitulo1} </h1>
            <h3 className="my-8 text-pretty text-4xl lg:text-6xl">
		{txttitulo2}
            </h3>
          </div>
                <Image src={urlimagen1} alt={"header"} width={600}
            height={500} className="rounded-lg"/>
        </div>
      </div>
    </section>
  );
};

//                <Image src="/portadaZonales.png" alt={"header"} width={600}
