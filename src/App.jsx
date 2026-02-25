import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import NavBar from "./componentes/NavBar";
import Inicio from "./componentes/inicio";
import Sobre from "./componentes/Sobre";
import Projetos from "./componentes/Projetos";
import Habilidades from "./componentes/Habilidades";
import Contatos from "./componentes/Contatos";

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
        threshold: 0.1,
      },
    );
    const elements = document.querySelectorAll(".init-hidden");
    elements.forEach((el) => observer.observe(el));
    
    return () => observer.disconnect();
  }, []);
  return (
    <div>
      <NavBar />
      <main>
        <Inicio />
        <Sobre />

        <Projetos />
        <Habilidades />
        <Contatos />
      </main>
    </div>
  );
}
export default App;
