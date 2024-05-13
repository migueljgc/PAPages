import { Link } from 'react-router-dom';
import './GestionUsuario.css';
import { BackGraund } from '../../../../../componentes/BackGraund';
import { MenuAdmin } from '../../../../../componentes/Menu';
import { TablaUsuarios } from '../../../../../componentes/TablaUsuarios';

export const GestionUsuario = () => {
    return (
        <div className='GestionUsuario'>
            <BackGraund />
            <MenuAdmin />
            <div className="container">
                <div className="gestion">
                    <p>
                        <TablaUsuarios />
                    </p>

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



