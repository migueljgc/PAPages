import { Route, Routes } from "react-router-dom"
import { Navbar } from "../Navbar"
import { Login } from '../componentes/Login/Login'
import { GestionUsuario } from '../componentes/Usuarios/Admin/GestionUsuario/GestionUsuario'



export const AppRouter = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Navbar />}>
                    <Route index element={<Login />} />
                    <Route path="/Login" element={<Login />} />
                    <Route path="/GestionUsuario" element={<GestionUsuario />} />
                </Route>

            </Routes>

        </>
    )
}