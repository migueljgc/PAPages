import React, { useState } from 'react';
import './Registro.css'
import { BackGraund } from '../../../componentes/BackGraund';

export const Registro = () => {
    const [formData, setFormData] = useState({
        nombre: '',
        apellido: '',
        correo: '',
        numero: '',
        rol: 'User',
        usuario: '',
        contraseña: '',
        confirmarContraseña: '',
        tipoIdentificacion: '',
        identificacion: '',
        tipoPersona: '',
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleTipoIdentificacion = (e) => {
        const value = e.target.value;
        let numericValue;

        if (value === 'C.C') {
            numericValue = 1;
        } else if (value === 'T.I') {
            numericValue = 2;
        } else if (value === 'P.A') {
            numericValue = 3;
        } else {
            numericValue = 4; // Puedes asignar otro valor numérico aquí
        }

        setFormData({ ...formData, tipoIdentificacion: numericValue });
    };

    const handleTipoPersona = (e) => {
        const value = e.target.value;
        let numericValue;

        if (value === 'Natural') {
            numericValue = 1;
        } else if (value === 'Juridica') {
            numericValue = 2;
        } else {
            numericValue = 3; // Puedes asignar otro valor numérico aquí
        }

        setFormData({ ...formData, tipoPersona: numericValue });
    };


    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(formData);
    };

    return (
        <div className="crearUsuario">
            <BackGraund />
            <div className="fr"><div className=""></div>
                <div className="formu">
                    <h1>Resgistro</h1>
                    <label htmlFor="">¿No tienes una cuenta, Registrate?</label>
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
                            <label htmlFor="tipoPersona">Tipo de Persona:</label><br />
                            <select
                                type="text"
                                id="tipoPersona"
                                name="tipoPersona"
                                value={formData.tipoPersona}
                                onChange={handleTipoPersona}>

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
                                name="tipoIdentificacion"
                                value={formData.tipoIdentificacion}
                                onChange={handleTipoIdentificacion}>

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
                    <p>¿Ya tiene cuenta? <a href="/Login">Inicia Sesion</a></p>
                </div><div className=""></div>
            </div>
        </div>
    )
}