import React from "react";
import { Card } from "react-bootstrap";
import {
  FaHtml5,
  FaCss3Alt,
  FaJava,
  FaReact,
  FaDocker,
  FaPython,
} from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import { TbBrandCpp } from "react-icons/tb";

function Habilidades() {
  return (
    <div className="habilidades-container" id="habilidades">
      <div className="habilidades">
        <div className="titulo-habilidades-container">
          <h1 className="titulo-habilidades">Habilidades</h1>
          <p className="titulo-descricao">O que eu faço</p>
        </div>
        <div className="init-hidden">
          <div className="cards-container">
            <Card className="cards">
              <Card.Body>
                <Card.Title>UI/UX Design</Card.Title>
                <Card.Text>
                  Interfaces intuitivas e experiências memoráveis centradas no
                  usuário.
                  <div className="extra-container">
                    <h3 className="extra">Figma</h3>
                    <h3 className="extra">Sketch</h3>
                  </div>
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className="cards">
              <Card.Body>
                <Card.Title>Desenvolvimento</Card.Title>
                <Card.Text>
                  Código limpo e performático com as tecnologias mais modernas.
                  <div className="extra-container">
                    <h3 className="extra">React</h3>
                    <h3 className="extra">TypeScript</h3>
                  </div>
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className="cards">
              <Card.Body>
                <Card.Title>Estratégia</Card.Title>
                <Card.Text>
                  Código limpo e performático com as tecnologias mais modernas.
                  <div className="extra-container">
                    <h3 className="extra">User Research</h3>
                    <h3 className="extra">Analytics</h3>
                  </div>
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className="cards">
              <Card.Body>
                <Card.Title>Produto</Card.Title>
                <Card.Text>
                  Visão completa do ciclo de vida do produto digital.
                  <div className="extra-container">
                    <h3 className="extra">Scrum</h3>
                  </div>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="init-hidden">
            <div className="linguagens-container">
              <h1 className="linguagens-titulo">
                Linguagens e tecnologias que estou estudando:{" "}
              </h1>
              <div className="linguagens-lista">
                <div className="descricao">
                  <h4>
                    HTML <FaHtml5 />
                  </h4>
                  <h4>
                    CSS <FaCss3Alt />
                  </h4>
                  <h4>
                    JavaScript <RiJavascriptFill />
                  </h4>
                  <h4>
                    React <FaReact />
                  </h4>
                  <h4>
                    Docker <FaDocker />
                  </h4>
                  <h4>
                    Java <FaJava />
                  </h4>
                  <h4>
                    Python <FaPython />
                  </h4>
                  <h4>
                    C++ <TbBrandCpp />
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Habilidades;
