import foto from "../assets/foto-minha.jpg";
import "../styles/sobre.css";
function Sobre() {
  return (
    <div className="sobre-container">
      <div className="sobre" id="sobre">
        <div className="conteudo-sobre">
          <div className="conteudo-texto-sobre">
            <h1 className="titulo-sobre">Sobre Mim</h1>
            <div className="init-hidden">
              <p className="frase">
                Estudante de Engenharia de Software & Dev Full Stack
              </p>
              <div className="texto-sobre">
                <p>
                  Sou estudante de Engenharia de Software, focado em
                  desenvolvimento Full Stack. Atualmente estou me aprofundando
                  em tecnologias front-end para criar interfaces mais intuitivas
                  e performáticas.
                </p>
                <p>
                  Minha jornada combina a base teórica da faculdade com projetos
                  práticos, buscando sempre aplicar o que aprendo em soluções
                  reais. Acredito que um bom desenvolvedor precisa entender toda
                  a stack.
                </p>
                <p>
                  Quando não estou codando, você pode me encontrar estudando
                  novas tecnologias, contribuindo em projetos open source ou
                  explorando as últimas tendências do desenvolvimento web.
                </p>
              </div>
            </div>
          </div>
          <div className="init-hidden">
            <div className="sessao-foto">
              <img src={foto} alt="fundo" className="foto-sobre" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Sobre;
