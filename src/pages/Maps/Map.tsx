import React, { useEffect , useState} from 'react';
import { Loader } from '@googlemaps/js-api-loader';
import MapLayout from "./MapLayout";



const Map = () => {

    const [map, setMap] = useState<google.maps.Map | null>(null);
    useEffect(() => {

        const initMap = () => {

            const loader = new Loader({
                apiKey: 'AIzaSyBgTxIfXuFWEByk3cL71ZYQlS4cpM8sgms&libraries=drawing,visualization',
                version: 'weekly',
            });



            loader.load().then(() => {
                const santacruz = { lat: -17.78629, lng: -63.18117 };
                const mapElement = document.getElementById('map');

                if (mapElement) {
                    const map = new google.maps.Map(mapElement, {
                        center: santacruz,
                        zoom: 15,
                    });

                    let listaCalor = [];
                    listaCalor.push(new google.maps.LatLng(-17.781857522626026, -63.18337826721948));
                    listaCalor.push(new google.maps.LatLng(-17.781862630765033,-63.183056402137694));
                    listaCalor.push(new google.maps.LatLng(-17.781826873788873, -63.18291156285089));
                    listaCalor.push(new google.maps.LatLng(-17.781826873788873, -63.18318514817041));
                    listaCalor.push(new google.maps.LatLng(-17.781862630765033, -63.183775234153686));
                    listaCalor.push(new google.maps.LatLng(-17.781908604009573, -63.184032726219115));
                    listaCalor.push(new google.maps.LatLng(-17.781929036558903, -63.184284853866515));
                    listaCalor.push(new google.maps.LatLng(-17.781939252832693, -63.18445115082544));
                    listaCalor.push(new google.maps.LatLng(-17.7819494691059, -63.18459599011224));
                    listaCalor.push(new google.maps.LatLng(-17.782023527044345, -63.18388783445872));
                    listaCalor.push(new google.maps.LatLng(-17.782105257175076, -63.183866376786604));
                    listaCalor.push(new google.maps.LatLng(-17.782258501069418, -63.183850283532514));
                    listaCalor.push(new google.maps.LatLng(-17.78235555546783, -63.183834190278425));
                    listaCalor.push(new google.maps.LatLng(-17.782799961776593, -63.183818097024336));
                    listaCalor.push(new google.maps.LatLng(-17.78168638985985, -63.18391465654887));
                    listaCalor.push(new google.maps.LatLng(-17.7814616313834, -63.182841772942915));
                    listaCalor.push(new google.maps.LatLng(-17.781921364328355, -63.182809586434736));
                    listaCalor.push(new google.maps.LatLng(-17.782043959580534, -63.18277203550853));
                    listaCalor.push(new google.maps.LatLng(-17.782488366664438, -63.1827130269102));
                    listaCalor.push(new google.maps.LatLng(-17.782983853718903, -63.1826593827299));
                    listaCalor.push(new google.maps.LatLng(-17.787681927936426, -63.17595578567504));
                    listaCalor.push(new google.maps.LatLng(-17.787661496045175,-63.17578412429809));
                    listaCalor.push(new google.maps.LatLng(-17.787569552505584, -63.17554808990478));
                    listaCalor.push(new google.maps.LatLng(-17.787692143881166, -63.17578412429809));
                    listaCalor.push(new google.maps.LatLng(-17.78786581485253 ,-63.17581631080627));
                    listaCalor.push(new google.maps.LatLng(-17.78708940214094 ,-63.17634202377319));
                    listaCalor.push(new google.maps.LatLng(-17.787651280098665, -63.17621327774047));
                    listaCalor.push(new google.maps.LatLng(-17.787477608918667, -63.17659951583862));
                    listaCalor.push(new google.maps.LatLng(-17.787712575768932, -63.17661024467468));
                    listaCalor.push(new google.maps.LatLng(-17.78786581485253 ,-63.17653514282226));
                    listaCalor.push(new google.maps.LatLng(-17.78810078119202 ,-63.17653514282226));
                    listaCalor.push(new google.maps.LatLng(-17.788274451765993, -63.17650295631408));
                    listaCalor.push(new google.maps.LatLng(-17.788591144730773, -63.176427854461664));
                    listaCalor.push(new google.maps.LatLng(-17.788897621258727, -63.176395667953486));
                    listaCalor.push(new google.maps.LatLng(-17.788785246592873, -63.17583776847839));
                    listaCalor.push(new google.maps.LatLng(-17.78863200829822 ,-63.17537642852783));
                    listaCalor.push(new google.maps.LatLng(-17.788611576515677, -63.17560173408508));
                    listaCalor.push(new google.maps.LatLng(-17.78873416717594 ,-63.176127447052));
                    listaCalor.push(new google.maps.LatLng(-17.788785246592873, -63.175934328002924));
                    listaCalor.push(new google.maps.LatLng(-17.788754598944475, -63.175408615036005));
                    listaCalor.push(new google.maps.LatLng(-17.788550281153967, -63.17507602111816));
                    listaCalor.push(new google.maps.LatLng(-17.788478769872064, -63.174882902069086));
                    listaCalor.push(new google.maps.LatLng(-17.788417474464804, -63.17453957931518));
                    listaCalor.push(new google.maps.LatLng(-17.788376610848253, -63.17423917190551));
                    listaCalor.push(new google.maps.LatLng(-17.788836325995216, -63.176653160018915));
                    listaCalor.push(new google.maps.LatLng(-17.789050859325457, -63.17720821472793));
                    listaCalor.push(new google.maps.LatLng(-17.78893848475605, -63.17673614594131));
                    listaCalor.push(new google.maps.LatLng(-17.788958916501198, -63.17698290917068));
                    listaCalor.push(new google.maps.LatLng(-17.78862179240724 ,-63.179944067923124));
                    listaCalor.push(new google.maps.LatLng(-17.78882611011592 ,-63.179944067923124));
                    listaCalor.push(new google.maps.LatLng(-17.788958916501198, -63.179901152578886));
                    listaCalor.push(new google.maps.LatLng(-17.78906107519189 ,-63.179890423742826));
                    listaCalor.push(new google.maps.LatLng(-17.789234744831962, -63.17983677956253));
                    listaCalor.push(new google.maps.LatLng(-17.789234744831962, -63.17987969490677));
                    listaCalor.push(new google.maps.LatLng(-17.789347119214927, -63.17985823723465));
                    listaCalor.push(new google.maps.LatLng(-17.789728345002878, -63.179744482040405));
                    listaCalor.push(new google.maps.LatLng(-17.788716975169425, -63.178274631500244));
                    listaCalor.push(new google.maps.LatLng(-17.78822481124612 ,-63.177444249121244));
                    listaCalor.push(new google.maps.LatLng(-17.787918333563496, -63.17702582451492));
                    listaCalor.push(new google.maps.LatLng(-17.78837804989019 ,-63.17734768959671));
                    listaCalor.push(new google.maps.LatLng(-17.788716975169425, -63.178274631500244));
                    listaCalor.push(new google.maps.LatLng(-17.788551720194505, -63.17727258774429));
                    listaCalor.push(new google.maps.LatLng(-17.78774466264321 ,-63.17751935097366));
                    listaCalor.push(new google.maps.LatLng(-17.787213432897445, -63.177637368170316));
                    listaCalor.push(new google.maps.LatLng(-17.786702633574826, -63.17777684303909));
                    listaCalor.push(new google.maps.LatLng(-17.787274728718 ,-63.17760518166214));

                    var heatmap = new google.maps.visualization.HeatmapLayer({
                        data: listaCalor,
                        map: map,
                    });
                    heatmap.setMap(map);
                    // Aquí puedes agregar marcadores, polígonos u otras funcionalidades del mapa

                    // new google.maps.Marker({
                    //     position: santacruz,
                    //     map: map,
                    //     title: 'Santa Cruz',
                    // });
                    //
                    // setMap(map);
                }
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


    }, []);


    return (
            <MapLayout/>
    );
};

export default Map;
