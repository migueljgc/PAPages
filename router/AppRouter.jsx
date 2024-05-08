import { Route, Routes } from "react-router-dom"
import { Navbar } from "../Navbar"
import {Login} from '../src/Pages/Login/Login'
import { GestionUsuario } from '../src/Pages/Usuarios/Admin/GestionUsuario/GestionUsuario'
import { EditarPerfil } from "../componentes/EditarPerfil"



export const AppRouter = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Navbar />}>
                    <Route index element={<Login />} />
                    <Route path="/Login" element={<Login />} />
                    <Route path="/GestionUsuario" element={<GestionUsuario />} />
                    <Route path="/EditarPerfil" element={<EditarPerfil />} />
                </Route>

            </Routes>

        </>
    )
}