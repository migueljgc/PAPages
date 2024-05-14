import { Route, Routes } from 'react-router-dom';
import { Navbar } from '../Navbar';
import { Login } from '../src/Pages/Login and Register/Login';
import { GestionUsuario } from '../src/Pages/Usuarios/Admin/GestionUsuario/GestionUsuario';
import { EditarPerfilAdmin, EditarPerfilSecre, EditarPerfilUser } from '../componentes/EditarPerfil';
import { CrearUsuario } from '../src/Pages/Usuarios/Admin/CrearUsuario/CrearUsuario';
import { VerUsuarios } from '../src/Pages/Usuarios/Admin/VerUsuarios/VerUsuarios';
import { Recovery } from '../componentes/Recovery';
import { Registro } from '../src/Pages/Login and Register/Registro';
import { VerPQRS } from '../src/Pages/Usuarios/User/VerPQRS/VerPQRS';
import { CrearPQRS } from '../src/Pages/Usuarios/User/CrearPQRS/CrearPQRS';
import { PageNotFound } from '../componentes/PageNotFound';
import { GestionPQRS } from '../src/Pages/Usuarios/ResponsibleDependency/GestionPQRS/GestionPQRS';
import { HomePageSe } from '../src/Pages/Usuarios/ResponsibleDependency/HomePageSe';
import { HomePageUs } from '../src/Pages/Usuarios/User/HomePageUs';
import { HomePageAd } from '../src/Pages/Usuarios/Admin/HomePageAd';

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Login />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Recuperacion" element={<Recovery />} />
          <Route path="/Registro" element={<Registro />} />
          <Route path="*" element={<PageNotFound />} />
          <Route element={<Navbar />}>
            <Route path="/GestionUsuario" element={<GestionUsuario />} />
            <Route path="/EditarPerfilAdmin" element={<EditarPerfilAdmin />} />
            <Route path="/EditarPerfilUser" element={<EditarPerfilUser />} />
            <Route path="/EditarPerfilSecre" element={<EditarPerfilSecre />} />
            <Route path="/CrearUsuario" element={<CrearUsuario />} />
            <Route path="/VerUsuarios" element={<VerUsuarios />} />
            <Route path="/VerPQRS" element={<VerPQRS />} />
            <Route path="/CrearPQRS" element={<CrearPQRS />} />
            <Route path="/GestionPQRS" element={<GestionPQRS />} />
            <Route path="/HomePagesAdmin" element={<HomePageAd />} />
            <Route path="/HomePagesUser" element={<HomePageUs />} />
            <Route path="/HomePagesSecre" element={<HomePageSe />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
};