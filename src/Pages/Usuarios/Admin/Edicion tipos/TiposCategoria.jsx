import React, { useEffect, useState } from 'react';
import { BackGraund } from '../../../../../componentes/BackGraund';
import { MenuAdmin } from '../../../../../componentes/Menu';
import axios from 'axios';
import DataTable from 'react-data-table-component';

const TiposCategoria = () => {
    const [data, setData] = useState([]);

    const fetchData = async () => {
        try {
            const response = await axios.get('http://localhost:8080/api/category/get')
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
            selector: row => row.idCategory
        },
        {
            name: 'Categoria',
            selector: row => row.nameCategory
        },

    ]

    return (
        <div>
            <BackGraund />
            <MenuAdmin />
            <h1>Tipo de Categoria</h1>
            <DataTable

                columns={columns}
                data={data}

            />
        </div>
    );
}

export default TiposCategoria;
