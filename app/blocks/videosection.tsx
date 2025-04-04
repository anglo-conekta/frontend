import {CircleCheckBig } from 'lucide-react';
async function getTitulo3() {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:1337";
  const path = `/api/inicio`;

  const url = new URL(path, baseUrl);

  const res = await fetch(url, {
    cache: 'no-store',
    });

  if (!res.ok) throw new Error("Failed to fetch inicio");

  const data = await res.json();
  const titulo3 = data.data.titulo3;

  return titulo3;
}

async function getDescripcion3() {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:1337";
  const path = `/api/inicio`;

  const url = new URL(path, baseUrl);

  const res = await fetch(url, {
    cache: 'no-store',
    });

  if (!res.ok) throw new Error("Failed to fetch inicio");

  const data = await res.json();
  const descripcion3 = data.data.descripcion3;
  return descripcion3;
}

export default async function VideoSection () {
  const txttitulo3= await getTitulo3();
  const txtdescripcion3= await getDescripcion3();

  return (
    <section className="w-full py-6">
      <div className="container mx-auto">
        <div className="flex flex-col gap-8 md:flex-row lg:grid-cols-2">
        <iframe width="800" src="https://www.youtube.com/embed/PfVhUIk1ZjE?si=RCiIBSXJzFC6Jee1" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
          <div className="lg:p-16">
            <h2 className="text-balance text-3xl font-medium md:text-5xl">
              {txttitulo3}
            </h2>
            <p className="mt-1 md:mt-6">
            {txtdescripcion3} 
            </p>
            <ul className="mt-10 flex-wrap items-center gap-6 space-y-6 md:flex md:space-y-0">
              <li className="flex items-center gap-3">
                <CircleCheckBig className="size-4" /> Sin afectar glaciares
              </li>
              <li className="flex items-center gap-3">
                <CircleCheckBig className="size-4" />
                Sin incorporar más aguas frescas a los procesos
              </li>
              <li className="flex items-center gap-3">
                <CircleCheckBig className="size-4" /> Sin afectación de la biodiversidad en áreas protegidas
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

