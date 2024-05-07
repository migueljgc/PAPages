import { BrowserRouter as Router, Routes } from 'react-router-dom';
import { AppRouter } from '../router/AppRouter';
import {Menu} from '../componentes/Menu';


function App() {
  return (
    <div className="App">
      <Router>

        <Menu />
      </Router>

    </div>
  );
}

export default App;
 