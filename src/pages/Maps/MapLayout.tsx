// {/*todo Uncomment this*/}
// import Breadcrumb from '../../components/Breadcrumb';
import DefaultLayout from '../../layout/DefaultLayout';
import DenunciaTable from '../../components/DenunciasTable';
import Map from "../../components/Map";
import MapFilter from "../../components/MapFilter";




interface Denuncias {
    id: number;
    nombre: string;
    cantidad: number;
    aceptadas: number;
}

const dataDenuncias: Denuncias[] = [
    { id: 1, nombre: 'Vecinales', cantidad: 25 , aceptadas : 10},
    { id: 2, nombre: 'Alumbrado Publico', cantidad: 30 , aceptadas : 2},
    { id: 3, nombre: 'Vehicular', cantidad: 28, aceptadas : 3 },
];


const MapLayout = () => {

   return (
        <DefaultLayout>
            {/*todo Uncomment this*/}
            {/*<Breadcrumb pageName="Map"/>*/}
            <div className="grid grid-cols-1 gap-9 sm:grid-cols-2">
                <MapFilter />
                {/*todo Uncomment this*/}
                {/*<DenunciaTable />*/}
            </div>
            <Map />
        </DefaultLayout>
    );
};

export default MapLayout;
