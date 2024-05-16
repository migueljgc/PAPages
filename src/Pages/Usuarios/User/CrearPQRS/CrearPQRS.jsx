import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './CrearPQRS.css';
import { MenuUser } from '../../../../../componentes/Menu';
import { BackGraund } from '../../../../../componentes/BackGraund';

export const CrearPQRS = () => {

    const [formData, setFormData] = useState({
        fecha: '',
        descripcion: '',
        medioRespuesta: '',
        Categoria: '',
    });

    const [categoriasTypes, setCategorias] = useState([]);

    useEffect(() => {
        const fetchCategorias = async () => {
            try {
                const response = await axios.get('http://localhost:8080/api/category/get');
                console.log('Categorias obtenidas:', response.data);
                setCategorias(response.data);
            } catch (error) {
                console.error('Error al obtener categorias:', error);
            }
        };

        fetchCategorias();
    }, []);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleReset = () => {
        setFormData({
            fecha: '',
            descripcion: '',
            medioRespuesta: '',
            Categoria: '',
        });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            console.log('Datos del formulario a enviar:', formData);

            // Obtener el objeto completo de tipo de identificación seleccionado
            const selectedCategoria = categoriasTypes.find(type => type.idCategory === parseInt(formData.Categoria));


            const requestData = await axios.post('http://localhost:8080/api/request/save', {
                fecha: '',
                descripcion: formData.descripcion,
                medioRespuesta: formData.medioRespuesta,
                Categoria: { idCategory: selectedCategoria.idCategory },
            });

            
            console.log('Respuesta al guardar persona:', requestData.data);

            console.log('Respuesta al guardar PQRS:', requestData.data);
            console.log('Usuario registrado correctamente');
        } catch (error) {
            console.error('Error al guardar información:', error);
        }
        handleReset();
    };



    return (
        <div className='CrearPQRS'>
            <BackGraund />
            <MenuUser />
            <div className="fr">
                <div className=""></div>
                <div className="formu">
                    <form className='formPQRS' onSubmit={handleSubmit}>
                        <p></p>
                        <h1>Resgistro de PQRS</h1>
                        <div className="select-box1">
                            <label htmlFor="tipo_Solicitud">Tipo de Solicitud:</label><br />
                            <select
                                type="text"
                                id="tipo_Solicitud"
                                name="tipo_Solicitud">

                                <option value="">Seleccione el tipo</option>
                                <option value="Natural">Natural</option>
                                <option value="Juridica">Juridica</option>
                            </select>
                        </div><br />

                        <div className="select-box1">
                            <label htmlFor="dependencia">Medio de Respuesta:</label><br />
                            <select
                                type="text"
                                id="medioRespuesta"
                                name="medioRespuesta"
                                value={formData.medioRespuesta}
                                onChange={handleChange} required>

                                <option value="">Seleccione el tipo</option>
                                <option value="Correo">Correo</option>
                                <option value="Numero">Numero</option>
                            </select>
                        </div><br />

                        <div className="select-box1">
                            <label htmlFor="categoria">Categoria:</label><br />
                            <select
                                type="text"
                                id="categoria"
                                name="categoria"
                                value={formData.Categoria}
                                onChange={handleChange} required>

                                <option key="" value="">Seleccione el tipo</option>
                                {categoriasTypes.map((type) => (
                                    <option key={type.idCategory} value={type.idCategory}>
                                        {type.nameCategory}
                                    </option>
                                    ))}
                            </select>
                        </div><br />
                        <div className="input-box1">
                            <label htmlFor="descripcion">Concepto de Solicitud:</label>
                            <textarea name="descripcion" id="descripcion" rows={"4"} cols={"50"}
                                value={formData.descripcion}
                                onChange={handleChange} required></textarea>
                        </div> <br />

                        <br />
                        <div className="enviar">
                            <button type="submit">Enviar</button>
                        </div><br />
                    </form>
                </div>
            </div>
        </div>)
}
