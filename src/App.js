import './App.scss';

/* React Router */
import { Routes, Route } from "react-router-dom";

/* Components */
import NavBar from './shared/navBar/navBar';
import Inicio from './sections/inicio/inicio';
import Productos from './sections/productos/productos';
import Contacto from './sections/contacto/contacto';

function App() {
  return (
    <>
    <NavBar/>
    <Routes>
      <Route path="/" element={<Inicio />} />
      <Route path="/productos" element={<Productos />} />
      <Route path="/contacto" element={<Contacto />} />
    </Routes>
    </>
    
  );
}

export default App;
