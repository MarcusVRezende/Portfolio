import './App.css'
import NavBar from './componentes/NavBar.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import Inicio from './componentes/inicio.jsx'
import Sobre from './componentes/Sobre.jsx'
import Projetos from './componentes/Projetos.jsx'
import React, { useEffect } from "react";
import Habilidades from './componentes/Habilidades.jsx'
import Contatos from './componentes/Contatos.jsx'
import Footer from './componentes/Footer.jsx'

function App() {
   useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("init-hidden-off");
              observer.unobserve(entry.target);
            }
          });
        },
        {
          threshold: [0, 0.5, 1],
        },
      );
      const elements = document.querySelectorAll(".init-hidden");
      elements.forEach((el) => observer.observe(el));
  
      return () => observer.disconnect();
    }, []);
  return (
  
    <div>
      <NavBar/>
      <Inicio/>
      <Sobre/>
      <Projetos/>
      <Habilidades/>
      <Contatos/>
    </div>
  )
}
export default App
