import { Link } from 'react-router-dom';
import './GestionUsuario.css';
import {Menu} from '../../../../../componentes/Menu'

export const GestionUsuario = () => {
    return (
        <div className='GestionUsuario'>
            <Menu/>
            <div className="container">
                <div className="gestion">
                    <p>
                        <table className='tableDatos' border="3">
                            <tr>
                                <td>

                                </td>
                                <td>

                                </td>
                                <td>

                                </td>
                                <td>

                                </td>
                                <td>

                                </td>
                                <td>

                                </td>
                            </tr>
                            <tr>
                                <td>

                                </td>
                            </tr>
                            <tr>
                                <td>

                                </td>
                            </tr>
                            <tr>
                                <td>

                                </td>
                            </tr>
                            <tr>
                                <td>

                                </td>
                            </tr>
                        </table>
                    </p>

                </div>
                <div className="dato">
                    <div className="form">
                        <form action="">
                            <label htmlFor="">nombre: </label>
                            <input type="text" />
                        </form>
                    
                    </div>
                </div>
            </div>


        </div>
    );
};


