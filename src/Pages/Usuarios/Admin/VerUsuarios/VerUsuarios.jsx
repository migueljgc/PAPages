import { BackGraund } from "../../../../../componentes/BackGraund";
import { MenuAdmin } from "../../../../../componentes/Menu";
import { TablaUsuarios } from "../../../../../componentes/TablaUsuarios";

export  const VerUsuarios = () => {
return(
    <div className="verUsuarios">
        <BackGraund />
        <MenuAdmin/>
        <TablaUsuarios />
    </div>
)
}