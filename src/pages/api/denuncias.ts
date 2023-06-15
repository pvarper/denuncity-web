import axios from 'axios';


interface DenunciaPorTipoDTO {
    _id: string;
    total: string;
    aceptadas: string;

}

interface DenunciaAllDTO {
    _id: string;
    correo: string;
    titulo: string;
    descripcion: string;
    tipodenuncia: string;
    colorMarker: string;
    images: string[];
    estado: string;
    lat: string;
    lon: string;
    createdAt: Date;
}


export async function listarDenunciasPorGruposTipoDenuncia():Promise<DenunciaPorTipoDTO[]> {
    try {
        const response = await axios.get('http://localhost:3001/denuncias/listarportipo'); // Reemplaza la URL con la de tu API
        //console.log(response.data);
        return response.data;

    } catch (error) {
        console.error('Error al obtener las denuncias:', error);
        return [];
    }
}

export async function listarAllDenuncias():Promise<DenunciaAllDTO[]> {
    try {
        const response = await axios.get('http://localhost:3001/denuncias/listarall'); // Reemplaza la URL con la de tu API
        //console.log(response.data);
        return response.data;

    } catch (error) {
        console.error('Error al obtener las denuncias:', error);
        return [];
    }
}


