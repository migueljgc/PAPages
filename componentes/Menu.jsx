import React from 'react';
import './menu.css';
import { Script } from './script';

export const Menu = () => {
    return (
        <div className="menus">
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
                    <Script />

                </div>
                <div className="imag"><img src='/pqrspng.png' width="55%" height="60%" /></div>
                <div className="dato"></div>
                <div className="cuerpo">

                </div>
            </div>
        </div>
    );

};
