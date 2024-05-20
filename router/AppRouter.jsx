import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Navbar } from '../Navbar';
import { Login } from '../src/Pages/Login and Register/Login';
import { EditarPerfilAdmin, EditarPerfilSecre, EditarPerfilUser } from '../componentes/EditarPerfil';
import { CrearUsuario } from '../src/Pages/Usuarios/Admin/CrearUsuario/CrearUsuario';
import { Recovery } from '../componentes/Recovery';
import { Registro } from '../src/Pages/Login and Register/Registro';
import { VerPQRS } from '../src/Pages/Usuarios/User/VerPQRS/VerPQRS';
import { CrearPQRS } from '../src/Pages/Usuarios/User/CrearPQRS/CrearPQRS';
import { PageNotFound } from '../componentes/PageNotFound';
import { GestionPQRS } from '../src/Pages/Usuarios/ResponsibleDependency/GestionPQRS/GestionPQRS';
import { HomePageSe } from '../src/Pages/Usuarios/ResponsibleDependency/HomePageSe';
import { HomePageUs } from '../src/Pages/Usuarios/User/HomePageUs';
import { HomePageAd } from '../src/Pages/Usuarios/Admin/HomePageAd';
import { TiposCategoria } from '../src/Pages/Usuarios/Admin/Edicion tipos/TiposCategoria';
import { TiposDependencia } from '../src/Pages/Usuarios/Admin/Edicion tipos/TiposDependencia';
import { TiposIdentificacion } from '../src/Pages/Usuarios/Admin/Edicion tipos/TiposIdentificacion';
import { TiposSolicitud } from '../src/Pages/Usuarios/Admin/Edicion tipos/TiposSolicitud';
import { EdicionUsuario } from '../src/Pages/Usuarios/Admin/EdicionUsuario/EdicionUsuario';
import { VerUsuarios } from '../src/Pages/Usuarios/Admin/VerUsuarios/VerUsuarios';
import { ReplyPQRS } from '../src/Pages/Usuarios/ResponsibleDependency/ReplyPQRS/ReplyPQRS';

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
            <Route path="/EdicionUsuario" element={<EdicionUsuario />} />
            <Route path="/EditarPerfilAdmin" element={<EditarPerfilAdmin />} />
            <Route path="/EditarPerfilUser" element={<EditarPerfilUser />} />
            <Route path="/EditarPerfilSecre" element={<EditarPerfilSecre />} />
            <Route path="/CrearUsuario" element={<CrearUsuario />} />
            <Route path="/VerUsuarios" element={<VerUsuarios />} />
            <Route path="/VerPQRS" element={<VerPQRS />} />
            <Route path="/CrearPQRS" element={<CrearPQRS />} />
            <Route path="/GestionPQRS" element={<GestionPQRS />} />
            <Route path="/ReplyPQRS" element={<ReplyPQRS />} />
            <Route path="/HomePagesAdmin" element={<HomePageAd />} />
            <Route path="/HomePagesUser" element={<HomePageUs />} />
            <Route path="/HomePagesSecre" element={<HomePageSe />} />
            <Route path="/TiposCategoria" element={<TiposCategoria />} />
            <Route path="/TiposDependencia" element={<TiposDependencia />} />
            <Route path="/TiposIdentificacion" element={<TiposIdentificacion />} />
            <Route path="/TiposSolicitud" element={<TiposSolicitud />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
};