import React, { useState } from 'react';
import './menuAdmin.css';
import { Script } from './script';
import { TiThMenu } from "react-icons/ti";
import { EditarPerfil } from './EditarPerfil';


export const Menu = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="menus">
            <div className="usa">
                <div className="menu">
                    <header className="main-header">
                        <label htmlFor="btn-nav" className="btn-nav"><TiThMenu /></label>
                        <input type="checkbox" id="btn-nav" />
                        <nav>
                            <ul className="men">
                                <li><a href="/GestionUsuario"> Gestion de Usuario </a></li>
                                <li><a href="/CrearUsuario">Crear Usuario </a></li>
                                <li><a href="/VerUsuarios"> Ver Usuarios </a></li>

                            </ul>
                        </nav>

                    </header>
                </div>
                <div className="usuario">
                    <div className="user-menu">
                        <div className="user-info">
                            <img src='/iconprofile.png' alt="Foto de perfil" className="profile-picture" width="35%" height="40%" onClick={() => setIsOpen((prev) => !prev)} />
                            <br />
                        </div>
                        {isOpen && (<Script />)
                        }

                    </div>



                </div>
                <div className="imag"><img src='/pqrspng.png' width="80%" height="85%" /></div>
            </div>
        </div>
    );

};
