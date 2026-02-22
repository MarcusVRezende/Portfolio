import { LuGithub } from "react-icons/lu";
import { FaLinkedinIn, FaInstagram } from "react-icons/fa";
import "../styles/contatos.css";
import React from "react";
import Footer from "./Footer";

function Contatos() {
  return (
    <div className="contatos-container" id="contatos">
      <div className="contatos">
        <div className="titulo-contatos-container">
          <h1 className="titulo-contatos">Contatos</h1>
          <div className="init-hidden">
            <p className="titulo-rodape-extra">
              Vamos criar algo
              <span className="destaque-contatos">incrível</span> juntos?
            </p>
          </div>
          <p className="texto-contatos">
            Estou sempre aberto a novos projetos e oportunidades. Se você tem
            uma ideia ou projeto em mente, adoraria ouvir sobre isso.
          </p>
        </div>
        <div className="init-hidden">
          <div className="email-container">
            <a href="mailto:marcusviniciusxmvr@gmail.com" target="_blank" rel="noopener noreferrer">
              <button className="botao-email">Enviar Email</button>
            </a>
          </div>
        </div>
        <div className="init-hidden">
          <div className="icone-redes-sociais">
            <a
              href="https://www.instagram.com/marcus_rezende_/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="icone-redes">
                <FaInstagram className="icone" />
              </button>
            </a>
            <a
              href="https://github.com/MarcusVRezende"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="icone-redes">
                <LuGithub className="icone" />
              </button>
            </a>
            <a
              href="https://www.linkedin.com/in/marcus-vrezende"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="icone-redes">
                <FaLinkedinIn className="icone" />
              </button>
            </a>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
export default Contatos;
