import './script.css'
const user=localStorage.getItem('username');
    console.log(user)
export const Script = () => {
  return (


    <div className="dropdown-content">
      <div className="App">
        <div className="arriba">
          {user && <p>Bienvenido, {user}!</p>}
          
          </div>
        <div className="abajo"><a href="/EditarPerfilAdmin">
          <i className="fa fa-plus"></i>Editar usuario</a>
          <a href="/Login"><i className="fa fa-sign-out"></i>Salir</a></div>
      </div>

    </div>


  );
};
export const ScriptUser = () => {
  return (


    <div className="dropdown-content">
      <div className="App">
        <div className="arriba">{user && <p>Bienvenido, {user}!</p>}</div>
        <div className="abajo"><a href="/EditarPerfilUser">
          <i className="fa fa-plus"></i>Editar usuario</a>
          <a href="/Login"><i className="fa fa-sign-out"></i>Salir</a></div>
      </div>

    </div>


  );
};
export const ScriptSecre = () => {
  return (


    <div className="dropdown-content">
      <div className="App">
        <div className="arriba">{user && <p>Bienvenido, {user}!</p>}</div>
        <div className="abajo"><a href="/EditarPerfilSecre">
          <i className="fa fa-plus"></i>Editar usuario</a>
          <a href="/Login"><i className="fa fa-sign-out"></i>Salir</a></div>
      </div>

    </div>


  );
};

