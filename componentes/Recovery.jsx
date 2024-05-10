import { BackGraund } from "./BackGraund"
import React from "react";
import './Recovery.css';

export const Recovery = () => {
    return (
        <div className="recovery">
            <BackGraund />
            <div className="reco">
                <form className="rec">

                    <h2>¿Olvidate tu contraseña?</h2>
                    <label>Para recuperar tu contraseña ingrese su Email o Numero</label><br /><br />
                    <div className="input-box2">
                        <label htmlFor="Email">Email:</label><br />
                        <input
                            type="text"
                            id="email"
                            name="email"
                        />
                    </div > <br />
                    <button> Solicitar</button>
                    <div className="">
                        <p>¿Ya tiene cuenta? <a href="/Login">Inicia Sesion</a></p>
                    </div>
                </form>
            </div>
        </div>

    )
}