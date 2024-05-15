import './CrearPQRS.css';
import { MenuUser } from '../../../../../componentes/Menu';
import { BackGraund } from '../../../../../componentes/BackGraund';

export const CrearPQRS = () => {
    return (
        <div className='CrearPQRS'>
            <BackGraund />
            <MenuUser />
            <div className="fr">
                <div className=""></div>
                <div className="formu">
                    <form className='formPQRS'>
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
                            <label htmlFor="dependencia">Dependencia:</label><br />
                            <select
                                type="text"
                                id="dependencia"
                                name="dependencia">

                                <option value="">Seleccione el tipo</option>
                                <option value="Natural">Natural</option>
                                <option value="Juridica">Juridica</option>
                            </select>
                        </div><br />

                        <div className="select-box1">
                            <label htmlFor="categoria">Categoria:</label><br />
                            <select
                                type="text"
                                id="categoria"
                                name="categoria">

                                <option value="">Seleccione el tipo</option>
                                <option value="Natural">Natural</option>
                                <option value="Juridica">Juridica</option>
                            </select>
                        </div><br />
                        <div className="input-box1">
                            <label for="concepto_solicitud">Concepto de Solicitud:</label>
                            <textarea name="concepto_solicitud" id="concepto_solicitud" rows={"4"} cols={"50"}></textarea>
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
