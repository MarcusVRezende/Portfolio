import React from "react";
import "../styles/projetos.css";
import Carousel from "react-bootstrap/Carousel";
import fotoPincel1 from "../assets/projetos-fotos/pincel-magico/imagem1.jpg";
import fotoPincel2 from "../assets/projetos-fotos/pincel-magico/imagem2.png";
import fotoPincel3 from "../assets/projetos-fotos/pincel-magico/imagem3.png";
import fotoPincel4 from "../assets/projetos-fotos/pincel-magico/imagem4.png";
import fotoPincel5 from "../assets/projetos-fotos/pincel-magico/imagem5.png";

import fotoRecreya1 from "../assets/projetos-fotos/recreya/imagem1.png";
import fotoRecreya2 from "../assets/projetos-fotos/recreya/imagem2.png";
import fotoRecreya3 from "../assets/projetos-fotos/recreya/imagem3.png";
import fotoRecreya4 from "../assets/projetos-fotos/recreya/imagem4.png";

import fotoSeLiga1 from "../assets/projetos-fotos/seLiga/imagem1.png";
import fotoSeLiga2 from "../assets/projetos-fotos/seLiga/imagem2.png";
import fotoSeLiga3 from "../assets/projetos-fotos/seLiga/imagem3.png";
import fotoSeLiga4 from "../assets/projetos-fotos/seLiga/imagem4.png";
import fotoSeLiga5 from "../assets/projetos-fotos/seLiga/imagem5.png";

function Projetos() {
  return (
    <div className="projetos-container" id="projeto">
      <div className="projetos">
        <div className="titulo-projetos-container">
          <h1 className="titulo-projetos">Projetos</h1>
        </div>
        <div className="init-hidden">
          <div className="bloco-projetos-container">
            <div className="bloco-projetos">
              <h2 className="titulo-cima-bloco">
                Web Design & Desenvolvimento
              </h2>
              <a
                href="https://pincelmagicoanimacoes.com.br"
                className="link"
                target="_blank"
                rel="noreferrer"
              >
                <Carousel
                  fade
                  className="foto-carrossel-container"
                  controls={false}
                  indicators={false}
                  interval={2000}
                >
                  <Carousel.Item>
                    <img
                      src={fotoPincel1}
                      alt="primeira imagem do projeto Pincel Mágico"
                      className="foto-carrossel"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      src={fotoPincel2}
                      alt="segunda imagem do projeto Pincel Mágico"
                      className="foto-carrossel"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      src={fotoPincel3}
                      alt="terceira imagem do projeto Pincel Mágico"
                      className="foto-carrossel"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      src={fotoPincel4}
                      alt="quarta imagem do projeto Pincel Mágico"
                      className="foto-carrossel"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      src={fotoPincel5}
                      alt="quinta imagem do projeto Pincel Mágico"
                      className="foto-carrossel"
                    />
                  </Carousel.Item>
                </Carousel>
              </a>
              <div className="titulo-projeto-container">
                <h2 className="titulo-projeto-cada">
                  {" "}
                  <a
                    href="https://recreya.onrender.com"
                    target="_blank"
                    rel="noreferrer"
                    className="link"
                  >
                    Pincel Mágico
                  </a>
                </h2>

                <p className="descricao-projeto">
                  Desenvolvimento da plataforma oficial da Pincel Mágico. O site
                  foi estruturado para apresentar o catálogo de animação de
                  eventos de forma atrativa, facilitando o agendamento de
                  serviços e fortalecendo a identidade visual da empresa no
                  ambiente online.
                </p>
              </div>
            </div>

            <div className="bloco-projetos">
              <h2 className="titulo-cima-bloco">
                Web Design & Desenvolvimento
              </h2>
              <a
                href="https://marcusvrezende.github.io/recreya/"
                className="link"
                target="_blank"
                rel="noreferrer"
              >
                <Carousel
                  fade
                  className="foto-carrossel-container"
                  controls={false}
                  indicators={false}
                  interval={2000}
                >
                  <Carousel.Item>
                    <img
                      src={fotoRecreya1}
                      alt="primeiro exemplo do site Recreya"
                      className="foto-carrossel"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      src={fotoRecreya2}
                      alt="segundo exemplo do site Recreya"
                      className="foto-carrossel"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      src={fotoRecreya3}
                      alt="terceiro exemplo do site Recreya"
                      className="foto-carrossel"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      src={fotoRecreya4}
                      alt="quarto exemplo do site Recreya"
                      className="foto-carrossel"
                    />
                  </Carousel.Item>
                </Carousel>
              </a>
              <div className="titulo-projeto-container">
                <h2 className="titulo-projeto-cada">
                  <a
                    href="https://recreya.onrender.com"
                    target="_blank"
                    rel="noreferrer"
                    className="link"
                  >
                    Recreya
                  </a>
                </h2>

                <p className="descricao-projeto">
                  Website institucional desenvolvido com React e Tailwind CSS. O
                  projeto foca em componentes dinâmicos e estilização otimizada
                  para oferecer uma experiência de usuário leve e interativa,
                  refletindo a energia e o dinamismo do setor de eventos.
                </p>
              </div>
            </div>

            <div className="bloco-projetos">
              <h2 className="titulo-cima-bloco">
                Web Design & Desenvolvimento
              </h2>
              <a
                href="https://seliga-portal.onrender.com"
                className="link"
                target="_blank"
                rel="noreferrer"
              >
                <Carousel
                  fade
                  className="foto-carrossel-container"
                  controls={false}
                  indicators={false}
                  interval={2000}
                >
                  <Carousel.Item>
                    <img
                      src={fotoSeLiga1}
                      alt="primeira imagem do projeto SeLiga"
                      className="foto-carrossel"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      src={fotoSeLiga2}
                      alt="segunda imagem do projeto SeLiga"
                      className="foto-carrossel"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      src={fotoSeLiga3}
                      alt="terceira imagem do projeto SeLiga"
                      className="foto-carrossel"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      src={fotoSeLiga4}
                      alt="quarta imagem do projeto SeLiga"
                      className="foto-carrossel"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      src={fotoSeLiga5}
                      alt="quinta imagem do projeto SeLiga"
                      className="foto-carrossel"
                    />
                  </Carousel.Item>
                </Carousel>
              </a>
              <div className="titulo-projeto-container">
                <h2 className="titulo-projeto-cada">
                  <a
                    href="https://recreya.onrender.com"
                    target="_blank"
                    rel="noreferrer"
                    className="link"
                  >
                    SeLiga
                  </a>
                </h2>

                <p className="descricao-projeto">
                  Projeto desenvolvido para a universidade onde atuei na criação
                  da interface web. O objetivo foi transformar dados complexos
                  de verificação de notícias em um painel simples e acessível,
                  utilizando componentes modernos para facilitar a checagem de
                  informações pelo usuário final.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Projetos;
