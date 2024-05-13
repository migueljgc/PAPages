import React from 'react'
import DataTable from 'react-data-table-component';
import './TablaUsuarios.css'

const columns = [
    {
        name: 'nombre',
        selector: row => row.Nombre,
        sortable: true,
    },
    {
        name: 'apellido',
        selector: row => row.Apellido,
        sortable: true,
    },
    {
        name: 'Usuario',
        selector: row => row.usuario,
        sortable: true,
    },
];
const data =[
    {
        Nombre: "miguel",
        Apellido: "gaviria",
        usuario: "migue"

    }
];

export const TablaUsuarios = () => {
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

