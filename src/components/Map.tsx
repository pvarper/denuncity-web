import React, {useEffect, useState} from 'react';
import {Loader} from '@googlemaps/js-api-loader';
import {listarAllDenuncias} from "../pages/api/denuncias";


interface DenunciaAllDTO {
    _id: string;
    correo: string;
    titulo: string;
    descripcion: string;
    tipodenuncia: string;
    colorMarker: string;
    estado: string;
    imagenesUrls: string[];
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


    function generarAleatorio(): string {
        const colores = ["red", "green", "blue", "yellow", "orange", "purple"];
        const indiceAleatorio = Math.floor(Math.random() * colores.length);
        return colores[indiceAleatorio];
    }

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
                    var ca = generarAleatorio();
                    const {lon, lat, colorMarker, imagenesUrls, titulo, descripcion} = denun;
                    const position = {lat: parseFloat(lat), lng: parseFloat(lon)};
                    const marker = new google.maps.Marker({
                        position: position,
                        map: map,  // Utilizar la variable `map` local en lugar del estado `map`.
                        title: titulo,
                        icon: {
                            path: google.maps.SymbolPath.CIRCLE,
                            fillColor: ca,
                            fillOpacity: 1,
                            strokeColor: ca,
                            strokeOpacity: 1,
                            scale: 8,
                        }
                    });

                    // Crear un InfoWindow con los datos de la denuncia.
                    const infoWindowContent = `
        <div>
            <h2>${titulo}</h2>
            <p>${descripcion}</p>
            ${imagenesUrls.map(imageUrl => `<img src="${imageUrl}" width="100" />`).join('')}
        </div>
    `;
                    const infoWindow = new google.maps.InfoWindow({
                        content: infoWindowContent,
                    });

                    // Añadir un evento de clic al marcador para abrir el InfoWindow.
                    marker.addListener('click', () => {
                        infoWindow.open({
                            anchor: marker,
                            map: map,  // Utilizar la variable `map` local en lugar del estado `map`.
                            shouldFocus: false,
                        });
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
