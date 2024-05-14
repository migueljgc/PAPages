import React, { useState } from 'react';
import './Login.css';
import { VscAccount } from "react-icons/vsc";
import { RiLockPasswordLine } from "react-icons/ri";
import {useForm} from '../../../hook/useForm'
import { useNavigate } from 'react-router-dom';
import {BackGraund} from '../../../componentes/BackGraund'

export const Login = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');

    const onLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:8080/api/user/login', {
                user,
                password
            });

            if (response.status === 200) {
                navigate('/HomePageAdmin', {
                    replace: true,
                    state: {
                        logged: true,
                        user
                    }
                });
            } else {
                alert('Credenciales incorrectas');
            }
        } catch (error) {
            console.error('Error al iniciar sesión:', error);
            alert('Error al iniciar sesión. Por favor, inténtalo de nuevo.');
        }
    }
    
    return (
        <div className='login'>
            <BackGraund />
            <div className="formLogin" onSubmit={onLogin}>
            <div className="usa">
                <div className="usu"></div>
            </div>
            <div className="loginForm">
                <form action="" className="Formlogin">
                    <h1>Login</h1>

                    <div className="input-box">
                        <label htmlFor='usuario'><VscAccount /> Usuario: </label><br />
                        <input type="text" className='usuario' id='usurio' value={user} onChange={e => setUser(e.target.value)} required />
                    </div><br />
                    <div className="input-box">
                        <label htmlFor=""><RiLockPasswordLine /> Contraseña: </label><br />
                        <input type="password" className='contrasena' id='contrasena' value={password} onChange={e => setPassword(e.target.value)} required />
                    </div><br />
                    <div className="btnIniciarSesion">
                        <button >
                            Iniciar Sesión 
                        </button>
                    </div><br />
                    <div className="remember-forgod">
                        <label > <input type="checkbox" />Recuerdame <label >  </label></label>
                        <a href="/Recuperacion">  ¿Olvidaste tu contraseña?</a>
                    </div>
                    <div className="register">
                        <p>¿No tienes cuenta aún? <a href="/Registro">Registrar</a></p>
                    </div>
                </form>
            </div>
            </div>
        </div>

    );
};


