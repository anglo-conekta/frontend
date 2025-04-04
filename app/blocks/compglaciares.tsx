export const CompromisoGlaciares = () => {
    return (

      <section className="w-full py-6">
        <div className="container mx-auto">
          <div className="grid gap-8 lg:grid-cols-2">
            <h2 className="row-span-2 text-3xl lg:text-5xl">
              Nuestro Compromiso
            </h2>
            <div>
              <h3 className="mb-2 text-xl font-medium">Objetivo</h3>
              <p className="text-muted-foreground">
              Monitorear la evolución de los glaciares cercanos al rajo Los Bronces, asociados a la parte alta de la microcuenca Yerba Loca y La Disputada.
              </p>
          </div>
          </div>
                    <div className="grid gap-8 lg:grid-cols-3">
                        <div>
            <h3 className="mb-2 text-xl font-medium">Monitoreo de MPS de glaciares cubiertos y descubiertos en</h3>
            <p className="text-muted-foreground"><b>Yerba Loca:</b> Del Rincón, Altar Sur, Paloma Este, Paloma Oeste</p>
            <p className="text-muted-foreground"><b>Río Blanco:</b> Rinconada Oeste</p>
            <p className="text-muted-foreground"><b>Río Olivares:</b> Olivares Alfa</p>
            </div>
            <div>
            <h3 className="mb-2 text-xl font-medium">Monitoreo de vibraciones en glaciares cubiertos y descubiertos en</h3>
            <p className="text-muted-foreground"><b>Yerba Loca:</b> Altar Sur, Del Rincón y Paloma Este. Glaciares rocosos: Littoria</p>
            <p className="text-muted-foreground"><b>La Disputada:</b> Infiernillo Sur</p>
            <p className="text-muted-foreground"><b>Río Olivares:</b> Observatorio</p>
            </div>

            <div>
            <h3 className="mb-2 text-xl font-medium">Monitoreo de variación geométrica y albedo en los glaciares rocosos en</h3>
            <p className="text-muted-foreground"><b>Yerba Loca:</b> Glaciar 58</p>
            <p className="text-muted-foreground"><b>La Disputada:</b> La Perla y Agua Los Machos</p>
            <p className="text-muted-foreground"><b>Río Blanco:</b> Monolito</p>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default CompromisoGlaciares;
  