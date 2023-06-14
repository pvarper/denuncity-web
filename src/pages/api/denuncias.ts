import axios from 'axios';


interface DenunciaDTO {
    _id: string;
    total: string;
    aceptadas: string;
}


export async function obtenerDenuncias():Promise<DenunciaDTO[]> {
    try {
        const response = await axios.get('http://localhost:3001/denuncias/listar'); // Reemplaza la URL con la de tu API
        console.log(response.data);
        return response.data;

    } catch (error) {
        console.error('Error al obtener las denuncias:', error);
        return [];
    }
}


