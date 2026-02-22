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
            <p className="titullo-rodape-extra">
              Vamos criar algo{" "}
              <spam className="destaque-contatos">incrível</spam> juntos?
            </p>
          </div>
          <p className="texto-contatos">
            Estou sempre aberto a novos projetos e oportunidades. Se você tem
            uma ideia ou projeto em mente, adoraria ouvir sobre isso.
          </p>
        </div>
        <div className="init-hidden">
          <div className="email-container">
            <button className="botao-email">Enviar Email</button>
          </div>
        </div>
        <div className="init-hidden">
          <div className="icone-redes-sociais">
            <button className="icone-redes">
              <FaInstagram className="icone" />
            </button>

            <button className="icone-redes">
              <LuGithub className="icone" />
            </button>

            <button className="icone-redes">
              <FaLinkedinIn className="icone" />
            </button>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
export default Contatos;
