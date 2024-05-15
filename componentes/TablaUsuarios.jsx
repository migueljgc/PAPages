import React, { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component';
import './TablaUsuarios.css'
import axios from 'axios';


export const  TablaUsuarios = () => {
    const [data, setData] = useState([]);
    useEffect( () => {
        fetchData();
    }, []);
    const fetchData = async () =>{
        try{
            const response = await axios.get('http://localhost:8080/api/user/get')
            setData(response.data);
        } catch (error){
            console.error('Error en la data: ', error);
        }

    };

    const columns = [
        {
            name: 'Nombre',
            selector: 'nombre_persona',
            sortable: true,
        },
        {
            name: 'Apellido',
            selector: 'apellido_persona',
            sortable: true,
        },
        {
            name: 'Correo',
            selector: 'correo_persona',
            sortable: true,
        },
    ];



  return (
    <div className='cla'>
        <DataTable 
            columns={columns}
            data={data}
            fixedHeader

        />
    
    </div>
  )
}

