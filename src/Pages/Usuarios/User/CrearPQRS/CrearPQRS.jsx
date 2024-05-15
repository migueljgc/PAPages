import './CrearPQRS.css';
import { MenuUser } from '../../../../../componentes/Menu';
import { BackGraund } from '../../../../../componentes/BackGraund';

export const CrearPQRS = () => {
    return (
        <div className='CrearPQRS'>
            <BackGraund />
            <MenuUser />
            <div className="fr">
                <div className="formu">
                    <form className='formPQRS'>
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
                                name="rol"
                               >

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
                        <div className="input-box1">
                            <label htmlFor="contraseña">Contraseña:</label><br />
                            <input
                                type="password"
                                id="contraseña"
                                name="contraseña"
                            />
                        </div> <br />
                        <div className="input-box1">
                            <label htmlFor="confirmarContraseña">Confirmar Contraseña:</label><br />
                            <input
                                type="password"
                                id="confirmarContraseña"
                                name="confirmarContraseña"
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
                        <div className="select-box1">
                            <label htmlFor="tipoIdentificacion">Tipo de Identificación:</label><br />

                            <select
                                type="text"
                                id="tipoIdentificacion"
                                name="tipoIdentificacion">

                                <option value="">Seleccione Tipo de Identidicacion</option>
                                <option value="C.C">C.C</option>
                                <option value="T.I">T.I</option>
                                <option value="P.A">P.A</option>

                            </select>
                        </div> <br />
                        <div className="input-box1">
                            <label htmlFor="identificacion">Identificación:</label><br />
                            <input
                                type="text"
                                id="identificacion"
                                name="identificacion"
                            />
                        </div><br />
                        <div className="btnIniciarSesion">
                            <button type="submit">Registrar</button>
                        </div><br />
                    </form>
                </div>
            </div>
        </div>)
}
