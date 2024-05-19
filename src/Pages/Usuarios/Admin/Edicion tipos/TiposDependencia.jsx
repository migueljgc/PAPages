import React, { useEffect, useState } from 'react';
import { BackGraund } from '../../../../../componentes/BackGraund';
import { MenuAdmin } from '../../../../../componentes/Menu';
import axios from 'axios';
import DataTable from 'react-data-table-component';

const TiposDependencia = () => {

    const [data, setData] = useState([]);
    
    const fetchData = async () =>{
        try{
            const response = await axios.get('http://localhost:8080/api/dependence/get')
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
            selector: row => row.idDependence
        },
        {
            name: 'Dependencia',
            selector: row => row.nameDependence
        },

    ]

    return (
        <div>
            <BackGraund />
            <MenuAdmin />
            <h1>Tipo de Dependencia</h1>
            <DataTable

                columns={columns}
                data={data}

            />
        </div>
    );
}


export default TiposDependencia;
