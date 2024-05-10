import { Route, Routes } from "react-router-dom"
import { Navbar } from "../Navbar"
import {Login} from '../src/Pages/Login and Register/Login'
import { GestionUsuario } from '../src/Pages/Usuarios/Admin/GestionUsuario/GestionUsuario'
import { EditarPerfil } from "../componentes/EditarPerfil"
import { CrearUsuario } from "../src/Pages/Usuarios/Admin/CrearUsuario/CrearUsuario"
import { VerUsuarios } from "../src/Pages/Usuarios/Admin/VerUsuarios/VerUsuarios"
import { Recovery } from "../componentes/Recovery"



export const AppRouter = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Navbar />}>
                    <Route index element={<Login />} />
                    <Route path="/Login" element={<Login />} />
                    <Route path="/GestionUsuario" element={<GestionUsuario />} />
                    <Route path="/EditarPerfil" element={<EditarPerfil />} />
                    <Route path="/CrearUsuario" element={<CrearUsuario/>}/>
                    <Route path="/VerUsuarios" element={<VerUsuarios/>}/>
                    <Route path="/Recuperacion" element={<Recovery/>}/>
                </Route>

            </Routes>

        </>
    )
}