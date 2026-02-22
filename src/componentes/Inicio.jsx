import { Container } from "lucide-react";
import "../styles/inicio.css";
import React from "react";
import video from "../assets/fotos-fundos/video-fundo.mp4";

function Inicio() {
  return (
    <div className="inicio-container" id="home">
      <div className="inicio">
        <video className="video-background" autoPlay loop muted playsInline>
          <source src={video} type="video/mp4" />
        </video>
        <div className="texto-icicio">
          <h1 className="titulo">Portfólio</h1>
          <p className="texto">
            Construindo <span className="destacado">soluções</span>
            do zero ao deploy
          </p>
        </div>
        <div className="botoes">
          <a href="#projetos">
            <button className="botao1">Ver Projetos</button>
          </a>
          <a href="#contatos">
            <button className="botao2">Entre em contato</button>
          </a>
        </div>
      </div>
    </div>
  );
}
export default Inicio;
