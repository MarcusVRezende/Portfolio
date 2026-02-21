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
import "../styles/habilidades.css";

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
                <Card.Title className="card-titulo">UI/UX Design</Card.Title>
                <Card.Text className="card-texto">
                  Interfaces intuitivas e experiências focadas no usuário,
                  utilizando as melhores práticas de design e usabilidade.
                  <div className="extra-container">
                    <h3 className="extra">Figma</h3>
                    <h3 className="extra">Sketch</h3>
                  </div>
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className="cards">
              <Card.Body>
                <Card.Title className="card-titulo">Desenvolvimento</Card.Title>
                <Card.Text className="card-texto">
                  Soluções robustas e escaláveis, utilizando as melhores
                  práticas de Clean Code e performance.
                  <div className="extra-container">
                    <h3 className="extra">React</h3>
                    <h3 className="extra">TypeScript</h3>
                  </div>
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className="cards">
              <Card.Body>
                <Card.Title className="card-titulo">Estratégia</Card.Title>
                <Card.Text className="card-texto">
                  Análise de dados e planejamento de produto para transformar
                  ideias em resultados reais de negócio.
                  <div className="extra-container">
                    <h3 className="extra">User Research</h3>
                    <h3 className="extra">Analytics</h3>
                  </div>
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className="cards">
              <Card.Body>
                <Card.Title className="card-titulo">Produto</Card.Title>
                <Card.Text className="card-texto">
                  Gestão do ciclo de vida de produtos digitais, unindo visão
                  estratégica e foco total na entrega de valor.
                  <div className="extra-container">
                    <h3 className="extra">Scrum</h3>
                  </div>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="init-hidden">
            <div className="linguagens-container">
              <div className="linguagens">
                <h1 className="linguagens-titulo">
                  Linguagens e tecnologias que estou estudando
                </h1>
                <div className="linguagens-lista">
                  <div className="descricao">
                    <div className="icone-container">
                      <FaHtml5 className="icone-html" />
                      <h4 className="icone-descricao">HTML</h4>
                    </div>
                    <div className="icone-container">
                      <FaCss3Alt className="icone-css" />
                      <h4 className="icone-descricao">CSS</h4>
                    </div>
                    <div className="icone-container">
                      <RiJavascriptFill className="icone-js" />
                      <h4 className="icone-descricao">JavaScript</h4>
                    </div>
                    <div className="icone-container">
                      <FaReact className="icone-react" />
                      <h4 className="icone-descricao">React</h4>
                    </div>
                    <div className="icone-container">
                      <FaDocker className="icone-docker" />
                      <h4 className="icone-descricao">Docker</h4>
                    </div>
                    <div className="icone-container">
                      <FaJava className="icone-java" />
                      <h4 className="icone-descricao">Java</h4>
                    </div>
                    <div className="icone-container">
                      <FaPython className="icone-python" />
                      <h4 className="icone-descricao">Python</h4>
                    </div>
                    <div className="icone-container">
                      <TbBrandCpp className="icone-cpp" />
                      <h4 className="icone-descricao">C++</h4>
                    </div>
                  </div>
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
