"use client"

import React, {useEffect} from "react";
import {Loader} from '@googlemaps/js-api-loader';

export function MapAire() {

    const mapRef = React.useRef<HTMLDivElement>(null); 

    useEffect (() => {
        const initMap = async () => {
            
            const loader = new Loader({
                // apiKey: process.env.NEXT_PUBLIC_MAPS_API as string,
                apiKey: 'AIzaSyDeecA3ipdvXlcpKKOdSlCWUAq56ga2sxI',
                version: 'weekly'
            });
            const {Map} = await loader.importLibrary('maps');

            const position = {
                lat: -33.150286040364,
                lng: -70.28716392683
            }

            // map options
            const mapOptions: google.maps.MapOptions = {
                center: position,
                zoom: 12,
                mapId: 'MapAire',
                styles: [],
                mapTypeId: google.maps.MapTypeId.SATELLITE
            }

            // setup the map
            const map = new Map(mapRef.current as HTMLDivElement, mapOptions);

            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            const ctaLayer = new google.maps.KmlLayer({
                url: "https://aymarasamudio.com/aire.kmz",
                map: map,
              });
            

        }

        initMap();
    }, 
    []);
    return (
                <div className="w-full py-6">
    <div className="container mx-auto">
        <div style={{height:'600px'}} className="rounded-lg" ref={mapRef}/>
        </div>
        </div>
    )
}