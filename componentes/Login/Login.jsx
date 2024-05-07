import React from 'react';
import './Login.css';
import { VscAccount } from "react-icons/vsc";
import { RiLockPasswordLine } from "react-icons/ri";
import {useForm} from '../../hook/useForm'
import { useNavigate } from 'react-router-dom';

export const Login = () => {
    const navigate = useNavigate()

    const {usuario , contrasena, onInputChange, onResetForm} = () => useForm(
        {
            usuario: '',
            contrasena: '',
        }
    );
    const onLogin = (e) =>{
        e.preventDefault()
        navigate('/GestionUsuario', {
            replace: true,
            state: {
                logged: true,
                usuario
            }
        })
        onResetForm();
    }
    
    return (
        <div className='login'>
            <div className="formLogin" onSubmit={onLogin}>
            <div className="usa">
                <div className="usu"></div>
            </div>
            <div className="loginForm">
                <form action="" className="Formlogin">
                    <h1>Login</h1>

                    <div className="input-box">
                        <label htmlFor='usuario'><VscAccount /> Usuario: </label><br />
                        <input type="text" className='usuario' id='usurio' value={usuario} onChange={onInputChange} required />
                    </div><br />
                    <div className="input-box">
                        <label htmlFor=""><RiLockPasswordLine /> Contraseña: </label><br />
                        <input type="password" className='contrasena' id='contrasena' value={contrasena}  onChange={onInputChange} required />
                    </div><br />
                    <div className="btnIniciarSesion">
                        <button >
                            Iniciar Sesión 
                        </button>
                    </div><br />
                    <div className="remember-forgod">
                        <label > <input type="checkbox" />Recuerdame <label >  </label></label>
                        <a href="#">  ¿Olvidaste tu contraseña?</a>
                    </div>
                    <div className="register">
                        <p>¿No tienes cuenta aún? <a href="#">Registrar</a></p>
                    </div>
                </form>
            </div>
            </div>
        </div>

    );
};


