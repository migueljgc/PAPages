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

        const fetchEstadoTypes = async () => {
            try {
                const response = await axios.get('http://localhost:8080/api/request_type/get');
                console.log('Tipos de estados obtenidos:', response.data);
                setEstadoTypes(response.data);
            } catch (error) {
                console.error('Error al obtener tipos de Estados:', error);
            }
        };

        fetchCategorias();
        fetchEstadoTypes();
    }, []);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleReset = () => {
        setFormData({
            id: '',
            respuesta: '',
            fecha: '',
            descripcion: '',
            medioRespuesta: '',
            idCategoria: '',
            estado: '',
        });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            console.log('Datos del formulario a enviar:', formData);

            // Obtener el objeto completo de tipo de identificación seleccionado
            const selectedCategoria = categoriasTypes.find(type => type.idCategoria === parseInt(formData.Categoria));


            const requestData = {
                fecha: '',
                descripcion: formData.descripcion,
                medioRespuesta: formData.medioRespuesta,
                Categoria: { idCategoria: selectedCategoria.idCategoria },
            };

            const RequestResponse = await axios.post('http://localhost:8080/api/request/save', requestData);
            console.log('Respuesta al guardar persona:', RequestResponse.data);

            console.log('Respuesta al guardar PQRS:', RequestResponse.data);
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
                                id="MedioRespuesta"
                                name="MedioRespuesta"
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
                                name="categoria">

                                <option key="" value="">Seleccione el tipo</option>
                                {categoriasTypes.map((type) => (
                                    <option key={type.idCategoria} value={type.idCategoria}>
                                        {type.nameCategory}
                                    </option>
                                    ))}
                            </select>
                        </div><br />
                        <div className="input-box1">
                            <label for="concepto_solicitud">Concepto de Solicitud:</label>
                            <textarea name="concepto_solicitud" id="concepto_solicitud" rows={"4"} cols={"50"}
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
