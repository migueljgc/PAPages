import React, { useEffect, useState } from 'react';
import { BackGraund } from '../../../../../componentes/BackGraund';
import { MenuAdmin } from '../../../../../componentes/Menu';
import DataTable from 'react-data-table-component';
import axios from 'axios';

const TiposIdentificacion = () => {

    const [data, setData] = useState([]);
    
    const fetchData = async () =>{
        try{
            const response = await axios.get('http://localhost:8080/api/identification_type/get')
            setData(response.data);
            console.log(response.data)
        } catch (error){
            console.error('Error en la data: ', error);
        }

    };
    useEffect( () => {
        fetchData();
    }, []);
    const columns = [
        {
            name: 'Id',
            selector: row => row.idIdentificationType
        },
        {
            name: 'Tipo de Identificacion',
            selector: row => row.nameIdentificationType

        },

    ]

    return (
        <div>
            <BackGraund />
            <MenuAdmin />
            <h1>Tipo de Identificacion</h1>
            <DataTable

                columns={columns}
                data={data}

            />
        </div>
    );
}


export default TiposIdentificacion;
