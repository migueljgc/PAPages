import React, { useState } from 'react';
import { BackGraund } from '../../../../../componentes/BackGraund';
import { Menu } from '../../../../../componentes/MenuAdmin';
import './CrearPQRS.css'

const CrearPQRS = () => {
    const [formData, setFormData] = useState({
        nombre: '',
        apellido: '',
        correo: '',
        numero: '',
        rol: '',
        usuario: '',
        contraseña: '',
        confirmarContraseña: '',
        tipoIdentificacion: '',
        identificacion: '',
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        console.log(formData);
    };

    return (
        <div className="crearPQRS">
            <BackGraund />
            <Menu />
            <div className="fr">
                <label htmlFor=""></label>
                <div className="formu">
                    <form className='formPQRS' onSubmit={handleSubmit}>
                        <div className="input-box1">
                            <label htmlFor="nombre">Nombre:</label><br />
                            <input
                                type="text"
                                id="nombre"
                                name="nombre"
                                value={formData.nombre}
                                onChange={handleChange}
                            />
                        </div> <br />
                        <div className="input-box1">
                            <label htmlFor="apellido">Apellido:</label><br />
                            <input
                                type="text"
                                id="apellido"
                                name="apellido"
                                value={formData.apellido}
                                onChange={handleChange}
                            />
                        </div > <br />
                        <div className="input-box1">
                            <label htmlFor="correo">Correo:</label><br />
                            <input
                                type="email"
                                id="correo"
                                name="correo"
                                value={formData.correo}
                                onChange={handleChange}
                            />
                        </div> <br />
                        <div className="input-box1">
                            <label htmlFor="numero">Número:</label><br />
                            <input
                                type="text"
                                id="numero"
                                name="numero"
                                value={formData.numero}
                                onChange={handleChange}
                            />
                        </div> <br />
                        <div className="input-box1">
                            <label htmlFor="rol">Rol:</label><br />
                            <input
                                type="text"
                                id="rol"
                                name="rol"
                                value={formData.rol}
                                onChange={handleChange}
                            />
                        </div> <br />
                        <div className="input-box1">
                            <label htmlFor="usuario">Usuario:</label><br />
                            <input
                                type="text"
                                id="usuario"
                                name="usuario"
                                value={formData.usuario}
                                onChange={handleChange}
                            />
                        </div> <br />
                        <div className="input-box1">
                            <label htmlFor="contraseña">Contraseña:</label><br />
                            <input
                                type="password"
                                id="contraseña"
                                name="contraseña"
                                value={formData.contraseña}
                                onChange={handleChange}
                            />
                        </div> <br />
                        <div className="input-box1">
                            <label htmlFor="confirmarContraseña">Confirmar Contraseña:</label><br />
                            <input
                                type="password"
                                id="confirmarContraseña"
                                name="confirmarContraseña"
                                value={formData.confirmarContraseña}
                                onChange={handleChange}
                            />
                        </div> <br />
                        <div className="select-box1">
                            <label htmlFor="tipoIdentificacion">Tipo de Identificación:</label><br />

                            <select
                                type="text"
                                id="tipoIdentificacion"
                                name="tipoIdentificacion"
                                value={formData.tipoIdentificacion}
                                onChange={handleChange}>


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
                                value={formData.identificacion}
                                onChange={handleChange}
                            />
                        </div><br />
                        <div className="btnIniciarSesion">
                            <button type="submit">Registrar</button>
                        </div><br />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default CrearPQRS;