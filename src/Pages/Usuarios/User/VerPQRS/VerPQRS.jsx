import { Link } from 'react-router-dom';
import './VerPQRS.css';
import { MenuUser } from '../../../../../componentes/Menu';
import { BackGraund } from '../../../../../componentes/BackGraund';
import DataTable from 'react-data-table-component';

const columns = [
    {
        name: 'Id solicitud',
        selector: row => row.Id_solicitud,
        sortable: true,
    },
    {
        name: 'Fecha solicitud',
        selector: row => row.fecha_solicitud,
        sortable: true,
    },
    {
        name: 'Concepto solicitud',
        selector: row => row.concepto_solicitud,
        sortable: true,
    },
    
];
const data =[
    {
        Id_solicitud: "",
        fecha_solicitud: "",
        concepto_solicitud: ""

    }
];
export const VerPQRS = () => {
    return (
        <div className='VerPQRS'>
            <BackGraund />
            <MenuUser />
            <div className="gestion">
                <div className='cla'>
                    <DataTable
                        columns={columns}
                        data={data}
                        fixedHeader

                    />
                </div>
            </div>
        </div>

    );
};



