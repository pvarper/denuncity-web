import React, {useEffect, useState} from 'react';
import {Loader} from '@googlemaps/js-api-loader';
import {listarAllDenuncias} from "../pages/api/denuncias";


interface DenunciaAllDTO {
    _id: string;
    correo: string;
    titulo: string;
    descripcion: string;
    tipodenuncia: string;
    estado: string;
    lon: string;
    lat: string;
    createdAt: Date;
}

const Map = () => {

    const [map, setMap] = useState<google.maps.Map | null>(null);
    const [denuncias, setDenuncias] = useState<DenunciaAllDTO[]>([]);
    useEffect(() => {
        const getDenuncias = async () => {
            const denunciasData = await listarAllDenuncias();
            setDenuncias(denunciasData);
        };
        getDenuncias();
    }, []);


    useEffect(() => {
        const initMap = () => {
            const loader = new Loader({
                apiKey: 'AIzaSyBgTxIfXuFWEByk3cL71ZYQlS4cpM8sgms&libraries=drawing,visualization',
                version: 'weekly',
            });
            loader.load().then(() => {
                const santacruz = {lat: -17.78629, lng: -63.18117};
                const mapElement = document.getElementById('map');
                // @ts-ignore
                const map = new google.maps.Map(mapElement, {
                    center: santacruz,
                    zoom: 15,
                });

                denuncias.forEach((denun) => {
                    const {lon, lat} = denun;
                    const position = {lat: parseFloat(lat), lng: parseFloat(lon)};
                    new google.maps.Marker({
                        position: position,
                        map: map,
                        title: denun.titulo,
                    });
                })

                setMap(map);
            });
        };


        // Cargar el script de Google Maps API
        const loader = new Loader({
            apiKey: 'AIzaSyBgTxIfXuFWEByk3cL71ZYQlS4cpM8sgms&libraries=drawing,visualization',
            version: 'weekly',
        });

        loader
            .load()
            .then(() => {
                initMap();
            })
            .catch((error) => {
                console.error('Error al cargar el mapa:', error);
            });


    }, [denuncias]); // agregado denuncias como dependencia del efecto.


    return (
        <div className="grid grid-cols-1 gap-9 sm:grid-cols-1">

            <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
                <h3 className="font-medium text-black dark:text-white">
                    Mapa
                </h3>
            </div>

            <div id="map" style={{height: '400px'}}></div>
        </div>


    );
};

export default Map;
