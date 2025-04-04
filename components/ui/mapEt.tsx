"use client"

import React, { useEffect, useState, useRef } from 'react';
import { Loader } from '@googlemaps/js-api-loader';

interface KmlLayer {
  name: string;
  url: string;
}

interface Layers {
  [key: string]: google.maps.KmlLayer;
}

const MapEt: React.FC = () => {
  const mapRef = useRef<HTMLDivElement | null>(null);
  const [map, setMap] = useState<google.maps.Map | null>(null);
  const [layers, setLayers] = useState<Layers>({});

  const kmlLayers: KmlLayer[] = [
    { name: "Plantas Zonales", url: "https://aymarasamudio.com/PlantasZonales.kmz" },
    { name: "Plantas Azonales", url: "https://aymarasamudio.com/PlantasAzonales.kmz" },
    { name: "Fauna", url: "https://aymarasamudio.com/EsfuerzoMuestreo.kmz" },
    { name: "Suelo", url: "https://aymarasamudio.com/influenciasuelo.kml" },
  ];

  useEffect(() => {
    const initMap = async () => {
      const loader = new Loader({
        apiKey: 'AIzaSyDeecA3ipdvXlcpKKOdSlCWUAq56ga2sxI',
        version: 'weekly'
      });

      const { Map } = await loader.importLibrary('maps');

      const position = {
        lat: -33.150286040364,
        lng: -70.28716392683
      };

      const mapOptions: google.maps.MapOptions = {
        center: position,
        zoom: 12,
        mapId: 'Mina1',
        styles: [],
        mapTypeId: google.maps.MapTypeId.SATELLITE
      };

      const newMap = new Map(mapRef.current as HTMLDivElement, mapOptions);
      setMap(newMap);

      const newLayers: Layers = {};
      kmlLayers.forEach(layer => {
        newLayers[layer.name] = new google.maps.KmlLayer({
          url: layer.url,
          map: newMap,
          preserveViewport: true,
        });
      });
      setLayers(newLayers);
    };

    if (typeof window !== 'undefined') {
      initMap();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const toggleLayer = (layerName: string) => {
    if (layers[layerName]) {
      layers[layerName].setMap(layers[layerName].getMap() ? null : map);
      setLayers({...layers});
    }
  };

  const showAllLayers = () => {
    Object.values(layers).forEach(layer => layer.setMap(map));
    setLayers({...layers});
  };

  const hideAllLayers = () => {
    Object.values(layers).forEach(layer => layer.setMap(null));
    setLayers({...layers});
  };

  return (
    <section className="w-full py-6">
      <div className="container mx-auto">
        <div style={{ height: '600px'}} className="rounded-lg" ref={mapRef} />
            <div className="flex w-full py-6 flex-col justify-center gap-4 sm:flex-row lg:justify-start">
                {kmlLayers.map((layer, index) => (
                <label key={index} className="inline-flex items-center">
                <input
                type="checkbox"
                className="form-checkbox"
                onChange={() => toggleLayer(layer.name)}
                checked={layers[layer.name]?.getMap() !== null}
                />
                <span className="ml-2">{layer.name}</span>
                </label>
          ))}
        </div>
        <div className="flex w-full py-6 flex-col justify-center gap-4 sm:flex-row lg:justify-start">        
          <button className="gray" onClick={showAllLayers}>Mostrar Todo</button>
          <button className="gray" onClick={hideAllLayers}>Esconder Todo</button>
        </div>
      </div>
    </section>
  );
};

export default MapEt;