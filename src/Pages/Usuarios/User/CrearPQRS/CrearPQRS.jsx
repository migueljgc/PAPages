import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './CrearPQRS.css';
import { MenuUser } from '../../../../../componentes/Menu';
import { BackGraund } from '../../../../../componentes/BackGraund';

export const CrearPQRS = () => {

    const [formData, setFormData] = useState({
        medioRespuesta: '',
        answer: '',
        category: '',
        date: '',
        description: '',
        idRequest: '',
        mediumAnswer: '',
        requestState: '',
        requestType: '',
        user: '',

    });

    const [categoriasTypes, setCategorias] = useState([]);
    const [date, setFecha] = useState([]);
    const [requestType, setRequest] = useState([]);


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
        const fetchRequest = async () => {
            try {
                const response1 = await axios.get('http://localhost:8080/api/request_type/get');
                console.log('Tipos de solicitudes obtenidas:', response1.data);
                setRequest(response1.data);
            } catch (error) {
                console.error('Error al obtener Tipos de solicitudes', error);
            }
        };

        const obtenerFecha = () => {
            const fechaActual = new Date();
            const fechaFormat = fechaActual.toISOString().slice(0, 10);
            setFecha(fechaFormat);

        }
        fetchRequest();
        fetchCategorias();
        obtenerFecha();
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
            description: '',
            mediumAnswer: '',
            category: '',
            requestType: '',
        });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            console.log('Datos del formulario a enviar:', formData);

            // Obtener el objeto completo de categorias seleccionado
            const selectedCategoria = categoriasTypes.find(type => type.idCategory === parseInt(formData.category));
            const selectedRequestType = requestType.find(type => type.idRequestType === parseInt(formData.requestType));

            const requestData = {
                fecha: '',
                description: formData.description,
                mediumAnswer: formData.mediumAnswer,
                category: { idCategory: selectedCategoria.idCategory },
                requestType: { idRequestType: selectedRequestType.idRequestType }
            };
            const respuesta = await axios.post('http://localhost:8080/api/request/save', requestData)
            console.log('Respuesta al guardar PQRS:', respuesta.data);
            console.log('PQRS registrada correctamente');
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
                            <label htmlFor="requestType">Tipo de Solicitud:</label><br />
                            <select
                                id="requestType"
                                name="requestType"
                                value={formData.requestType}
                                onChange={handleChange} required>

                                <option key="" value="">Seleccione el tipo</option>
                                {requestType.map((type) => (
                                    <option key={type.idRequestType} value={type.idRequestType}>
                                        {type.nameRequestType}
                                    </option>
                                ))}

                            </select>
                        </div><br />

                        <div className="input-box1">
                            <label htmlFor="fecha">Frcha:</label>
                            <input type='date' name="date" id="date" rows={"4"} cols={"50"}
                                value={date}
                                onChange={(e) => setFecha(e.target.value)}
                                readOnly
                                required />
                        </div> <br />

                        <div className="select-box1">
                            <label htmlFor="mediumAnswer">Medio de Respuesta:</label><br />
                            <select
                                type="mediumAnswer"
                                id="mediumAnswer"
                                name="mediumAnswer"
                                value={formData.mediumAnswer}
                                onChange={handleChange} required>

                                <option value="">Seleccione el tipo</option>
                                <option value="Correo">Correo</option>
                                <option value="Numero">Numero</option>
                            </select>
                        </div><br />

                        <div className="select-box1">
                            <label htmlFor="category">Categoria:</label><br />
                            <select
                                id="category"
                                name="category"
                                value={formData.category}
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
                            <label htmlFor="description">Concepto de Solicitud:</label>
                            <textarea name="description" id="description" rows={"4"} cols={"50"}
                                value={formData.description}
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
