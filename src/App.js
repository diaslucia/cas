import './App.scss';

/* React Router */
import { Routes, Route } from "react-router-dom";

/* Components */
import NavBar from './shared/navBar/navBar';
import Inicio from './sections/inicio/inicio';
import Coberturas from './sections/coberturas/coberturas';
import Contacto from './sections/contacto/contacto';
import Footer from './shared/footer/Footer';

function App() {
  return (
    <>
    <NavBar/>
    <Routes>
      <Route path="/cas" element={<Inicio />} />
      <Route path="/coberturas" element={<Coberturas />} />
      <Route path="/contacto" element={<Contacto />} />
    </Routes>
    <Footer/>
    </>
    
  );
}

export default App;
