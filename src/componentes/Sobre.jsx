import React from 'react';
import foto from '../assets/foto-minha.jpg';
import '../styles/sobre.css';

function Sobre() {
  return (
    <div className="sobre">
      <div className="titulo">
        <h1>Sobre Mim</h1>
      </div>
      <div className="texto-destacado">
        <p className="frase">
          Estudante de Engenharia de Software & Dev Full Stack
        </p>
        <div className="texto">
          <p>
            Sou estudante de Engenharia de Software, focado em desenvolvimento
            Full Stack. Atualmente estou me aprofundando em tecnologias
            front-end para criar interfaces mais intuitivas e performáticas.
          </p>
          <p>
            Minha jornada combina a base teórica da faculdade com projetos
            práticos, buscando sempre aplicar o que aprendo em soluções reais.
            Acredito que um bom desenvolvedor precisa entender toda a stack.
          </p>
          <p>
            Quando não estou codando, você pode me encontrar estudando novas
            tecnologias, c ontribuindo em projetos open source ou explorando as
            últimas tendências do desenvolvimento web.
          </p>
        </div>
        <div className='foto'>
            <img src={ foto } alt="fundo" />
        </div>
      </div>
    </div>
  );
}
export default Sobre;
