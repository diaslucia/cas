import './App.scss';

/* React Router */
import { Routes, Route } from "react-router-dom";

/* Components */
import NavBar from './shared/navBar/navBar';
import Inicio from './sections/inicio/inicio';
import Coberturas from './sections/coberturas/coberturas';
import Contacto from './sections/contacto/contacto';
import Aseguradoras from './sections/aseguradoras/aseguradoras';
import Footer from './shared/footer/Footer';

function App() {
  return (
    <>
    <NavBar/>
    <Routes>
      <Route path="/" element={<Inicio />} />
      <Route path="/coberturas" element={<Coberturas />} />
      <Route path="/contacto" element={<Contacto />} />
      <Route path="/aseguradoras" element={<Aseguradoras />} />
    </Routes>
    <Footer/>
    </>
    
  );
}

export default App;
