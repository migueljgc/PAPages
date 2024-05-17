import React, { useState, useEffect } from 'react';
import './Login.css';
import { VscAccount } from "react-icons/vsc";
import { RiLockPasswordLine } from "react-icons/ri";
import { useNavigate } from 'react-router-dom';
import { BackGraund } from '../../../componentes/BackGraund';
import axios from 'axios';


export const Login = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
  

    useEffect(() => {
        const storedUsername = localStorage.getItem('username');
        const storedPassword = localStorage.getItem('password');

        if (storedUsername && storedPassword) {
            setUser(storedUsername);
            setPassword(storedPassword);
            setRememberMe(true);
        }
    }, []);

    const onLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:8080/api/user/login', {
                user,
                password,
            });

            if (response.status === 200) {
                const responseData = response.data;
                const roleId = responseData.role.id;
                console.log(roleId);
                if (roleId === 2){
                    console.log(roleId);
                    navigate('/HomePagesAdmin', {
                        replace: true,
                        state: {
                            logged: true,
                            user,
                        }
                    });
                }
                else if(roleId === 1){
                    console.log(roleId);
                    navigate('/HomePagesUser', {
                        replace: true,
                        state: {
                            logged: true,
                            user,
                        }
                    });
                }
            } else {
                alert('Credenciales incorrectas');
            }
        } catch (error) {
            console.error('Error al iniciar sesión:', error);
            alert('Error al iniciar sesión. Por favor, inténtalo de nuevo.');
        }

        if (rememberMe) {
            localStorage.setItem('username', user);
            localStorage.setItem('password', password);
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
                            <label htmlFor='user'><VscAccount /> Usuario: </label><br />
                            <input type="text" className='usuario' value={user} onChange={e => setUser(e.target.value)} required />
                        </div><br />
                        <div className="input-box">
                            <label htmlFor=""><RiLockPasswordLine /> Contraseña: </label><br />
                            <input type="password" className='contrasena' value={password} onChange={e => setPassword(e.target.value)} required />
                        </div><br />
                        <div className="btnIniciarSesion">
                            <button type="submit">
                                Iniciar Sesión
                            </button>
                        </div><br />
                        <div className="remember-forgod">
                            <label> <input type="checkbox" checked={rememberMe}
                                onChange={(e) => setRememberMe(e.target.checked)} /> Recuérdame</label>
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