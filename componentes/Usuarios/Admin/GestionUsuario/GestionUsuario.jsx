import { Link } from 'react-router-dom';
import './GestionUsuario.css';
import './script'

export const GestionUsuario = () => {
    return (
        <div className='GestionUsuario'>
            <div className="usa">
                <div className="menu">
                    <header className="main-header">
                        <label htmlFor="btn-nav" className="btn-nav"><i className="fas fa-bars"></i></label>
                        <input type="checkbox" id="btn-nav" />
                        <nav>
                            <ul className="men">
                                <li><a href="#">1</a></li>

                            </ul>
                        </nav>

                    </header>
                </div>
                <div className="usuario">
                    <div className="user-menu">
                        <div className="user-info">
                            <img src='/iconprofile.png' alt="Foto de perfil" className="profile-picture" width="35%" height="40%" />
                            <br />
                            <i className="fa fa-caret-down"></i>
                        </div>
                        <div className="dropdown-content">
                            <span className="username">¡Hola, Admin!</span><br />
                            <a href="#"><i className="fa fa-plus"></i>Editar usuario</a>
                            <a href="#"><i className="fa fa-sign-out"></i> 
                            <Link to='/Login' >Salir </Link>
                            
                            </a>
                        </div>
                    </div>
                </div>
                <div className="imag"><img src='/pqrspng.png' width="55%" height="60%" /></div>
                <div className="dato"></div>
            </div>
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



