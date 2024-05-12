import './script.css'

export const Script = () => {
  return (


    <div className="dropdown-content">
      <div class="App">
        <div className="arriba"><p><span className="username">¡Hola, Admin!</span></p></div>
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
      <div class="App">
        <div className="arriba"><p><span className="username">¡Hola, Admin!</span></p></div>
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
      <div class="App">
        <div className="arriba"><p><span className="username">¡Hola, Admin!</span></p></div>
        <div className="abajo"><a href="/EditarPerfilSecre">
          <i className="fa fa-plus"></i>Editar usuario</a>
          <a href="/Login"><i className="fa fa-sign-out"></i>Salir</a></div>
      </div>

    </div>


  );
};

