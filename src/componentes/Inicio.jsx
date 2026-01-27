import '../styles/inicio.css';
import React from 'react';


function Inicio() {

    return (

        <div className="inicio" id = "home">
            <div className="texto-icicio">
                <h1 className="titulo">Portfólio</h1>
                <p className="texto">Construindo <span className="destacado">soluções</span> 
                do zero ao deploy</p>
            </div>
            <div className="botoes">
                <button className='botao1'>Ver Projetos</button>
                <button className='botao2'>Entre em contato</button>
            </div>
        </div>
    );

};export default Inicio;