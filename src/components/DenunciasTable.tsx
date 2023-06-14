import React, { useEffect, useState } from 'react';
import { obtenerDenuncias } from '../pages/api/denuncias';


interface DenunciaDTO {
    _id: string;
    total: string;
    aceptadas: string;
}

const DenunciasTable: React.FC = () => {
    const [denuncias, setDenuncias] = useState<DenunciaDTO[]>([]);

    useEffect(() => {
        const getDenuncias = async () => {
            const denunciasData = await obtenerDenuncias();
            setDenuncias(denunciasData);
        };

        getDenuncias();
    }, []);

    return (
        <table style={{ borderCollapse: 'collapse', width: '100%' }}>
            <thead>
            <tr>
                <th style={{ border: '1px solid black', padding: '8px' }} >Tipo de Denuncia</th>
                <th style={{ border: '1px solid black', padding: '8px' }} >Total</th>
                <th style={{ border: '1px solid black', padding: '8px' }} >Aceptadas</th>
            </tr>
            </thead>
            <tbody>
            {denuncias.map((denuncia) => (
                <tr key={denuncia._id}>
                    <td style={{ border: '1px solid black', padding: '8px' }} >{denuncia._id}</td>
                    <td style={{ border: '1px solid black', padding: '8px' }} >{denuncia.total}</td>
                    <td style={{ border: '1px solid black', padding: '8px' }} >{denuncia.aceptadas}</td>
                </tr>
            ))}
            </tbody>
        </table>
    );
};



export default DenunciasTable;