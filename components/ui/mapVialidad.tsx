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

const MapVialidad: React.FC = () => {
  const mapRef = useRef<HTMLDivElement | null>(null);
  const [map, setMap] = useState<google.maps.Map | null>(null);
  const [layers, setLayers] = useState<Layers>({});
  const [visibleLayers, setVisibleLayers] = useState<{[key: string]: boolean}>({});

  const kmlLayers: KmlLayer[] = [
    { name: "Puntos de monitoreo", url: "https://aymarasamudio.com/Transporte.kmz" },
    { name: "Sector 1", url: "https://aymarasamudio.com/Sector1Vialidad.kmz" },
    { name: "Sector 2", url: "https://aymarasamudio.com/Sector2Vialidad.kmz" },
    { name: "Sector 3", url: "https://aymarasamudio.com/Sector3Vialidad.kmz" },
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
      const initialVisibleLayers: {[key: string]: boolean} = {};
      kmlLayers.forEach(layer => {
        newLayers[layer.name] = new google.maps.KmlLayer({
          url: layer.url,
          map: newMap,
        });
        initialVisibleLayers[layer.name] = true;
      });
      setLayers(newLayers);
      setVisibleLayers(initialVisibleLayers);
    };

    if (typeof window !== 'undefined') {
      initMap();
    }
  }, []);

  const toggleLayer = (layerName: string) => {
    if (layers[layerName]) {
      const isVisible = !visibleLayers[layerName];
      layers[layerName].setMap(isVisible ? map : null);
      setVisibleLayers({...visibleLayers, [layerName]: isVisible});
    }
  };

  return (
    <div className="w-full py-6">
      <div className="container mx-auto">
        <div style={{ height: '600px'}} className="rounded-lg" ref={mapRef} />
        <div className="flex w-full py-6 flex-col justify-center gap-4 sm:flex-row lg:justify-start">
          {kmlLayers.map((layer, index) => (
            <label key={index} className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={visibleLayers[layer.name]}
                onChange={() => toggleLayer(layer.name)}
                className="form-checkbox h-5 w-5 text-blue-600"
              />
              <span>{layer.name}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MapVialidad;