import React from 'react'
import DataTable from 'react-data-table-component';
import './TablaUsuarios.css'

const columns = [
    {
        name: 'Titulo',
        selector: row => row.Titulo,
        sortable: true,
    },
    {
        name: 'Descripcion',
        selector: row => row.Descripcion,
        sortable: true,
    },
    {
        name: 'Estado',
        selector: row => row.Estado,
        sortable: true,
    },
];
const data =[
    {
        Titulo: "",
        Descripcion: "",
        Estado: ""

    }
];

export const TablaPQRS = () => {
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

