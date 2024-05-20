import React, { useEffect, useState } from 'react';
import { BackGraund } from '../../../../../componentes/BackGraund';
import { MenuAdmin } from '../../../../../componentes/Menu';
import DataTable from 'react-data-table-component';
import axios from 'axios';
import './Tipos.css'

export const TiposSolicitud = () => {
    const [data, setData] = useState([]);

    const fetchData = async () => {
        try {
            const response = await axios.get('http://localhost:8080/api/request_type/get')
            setData(response.data);
            console.log(response.data)
        } catch (error) {
            console.error('Error en la data: ', error);
        }

    };
    useEffect(() => {
        fetchData();
    }, []);

    const columns = [
        {
            name: 'Id',
            selector: row => row.idRequestType
        },
        {
            name: 'Tipos de Solicitud',
            selector: row => row.nameRequestType
        },

    ]

    return (
        <div>
            <BackGraund />
            <MenuAdmin />
            <div class="Ap">
                <div class="tabla"></div>
                <div class="formulario"></div>
            </div>
            <h1>Tipo de Solicitud</h1>
            <DataTable

                columns={columns}
                data={data}

            />
        </div>
    );
}


