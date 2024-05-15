import React, { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component';
import axios from 'axios';
import './GestionUsuario.css';
import { BackGraund } from '../../../../../componentes/BackGraund';
import { MenuAdmin } from '../../../../../componentes/Menu';


export const GestionUsuario = () => {

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
        <div className='GestionUsuario'>
            <BackGraund />
            <MenuAdmin />
            <div className="container">
                <div className="gestion">
                    <p></p>
                    <DataTable
                        columns={columns}
                        data={data}
                        fixedHeader

                    />
                </div>
                <div className="dato">
                    <div className=""></div>
                    <div className="formu">
                        <form className='form' >
                            <div className="input-box1">
                                <label htmlFor="nombre">Nombre:</label><br />
                                <input
                                    type="text"
                                    id="nombre"
                                    name="nombre"
                                />
                            </div> <br />
                            <div className="input-box1">
                                <label htmlFor="apellido">Apellido:</label><br />
                                <input
                                    type="text"
                                    id="apellido"
                                    name="apellido"
                                />
                            </div > <br />
                            <div className="input-box1">
                                <label htmlFor="correo">Correo:</label><br />
                                <input
                                    type="email"
                                    id="correo"
                                    name="correo"
                                />
                            </div> <br />
                            <div className="input-box1">
                                <label htmlFor="numero">Número:</label><br />
                                <input
                                    type="text"
                                    id="numero"
                                    name="numero"
                                />
                            </div> <br />
                            <div className="select-box1">
                                <label htmlFor="rol">Rol:</label><br />
                                <select
                                    type="text"
                                    id="rol"
                                    name="rol">

                                    <option value="">Seleccione el rol</option>
                                    <option value="Admin">Administrador</option>
                                    <option value="User">Usuario</option>
                                    <option value="Dependencia">Dependencia</option>

                                </select>
                            </div> <br />
                            <div className="input-box1">
                                <label htmlFor="usuario">Usuario:</label><br />
                                <input
                                    type="text"
                                    id="usuario"
                                    name="usuario"
                                />
                            </div> <br />
                            <div className="select-box1">
                                <label htmlFor="tipoPersona">Tipo de Persona:</label><br />
                                <select
                                    type="text"
                                    id="tipoPersona"
                                    name="tipoPersona">

                                    <option value="">Seleccione el tipo</option>
                                    <option value="Natural">Natural</option>
                                    <option value="Juridica">Juridica</option>

                                </select>
                            </div> <br />
                        </form>
                    </div>
                    <div className=""></div>
                </div>
            </div>


        </div>
    );
};



