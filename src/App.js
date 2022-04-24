import './App.scss';

/* React Router */
import { Routes, Route } from "react-router-dom";

/* Components */
import NavBar from './shared/navBar';
import Home from './sections/home/home';
import Seguros from './sections/seguros/seguros';
import Aseguradoras from './sections/aseguradoras/aseguradoras';
import Nosotros from './sections/nosotros/nosotros';
import Contacto from './sections/contacto/contacto';

function App() {
  return (
    <>
    <NavBar/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/seguros" element={<Seguros />} />
      <Route path="/aseguradoras" element={<Aseguradoras />} />
      <Route path="/nosotros" element={<Nosotros />} />
      <Route path="/contacto" element={<Contacto />} />
    </Routes>
    </>
    
  );
}

export default App;
