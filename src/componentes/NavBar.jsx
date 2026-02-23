import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "../styles/navbar.css"; // Verifique se o nome do arquivo está em minúsculo ou maiúsculo
import { FaBars, FaTimes } from 'react-icons/fa';

function NavBar() {
  const [menuAberto, setMenuAberto] = useState(false);

  const alterarMenu = () => {
    setMenuAberto(!menuAberto);
  };

  const fecharMenu = () => {
    setMenuAberto(false);
  };

  return (
    <Navbar fixed="top" className="navbar-completo">
      <Container className="navbar-container">
        <Navbar.Brand href="#home">Port.</Navbar.Brand>

        {/* Menu Desktop */}
        <Nav className="navegacao">
          <Nav.Link href="#sobre">Sobre</Nav.Link>
          <Nav.Link href="#projetos">Projetos</Nav.Link>
          <Nav.Link href="#habilidades">Habilidades</Nav.Link>
          <Nav.Link href="#contatos">Contatos</Nav.Link>
        </Nav>

        {/* Botão Hambúrguer */}
        <button className="mobile-menu-icon" onClick={alterarMenu}>
          {menuAberto ? <FaTimes /> : <FaBars />}
        </button>
      </Container>

      {/* Menu Mobile Dropdown */}
      <div className={`mobile-menu-dropdown ${menuAberto ? "show" : ""}`}>
        <a href="#sobre" className="nav-link-mobile" onClick={fecharMenu}>Sobre</a>
        <a href="#projetos" className="nav-link-mobile" onClick={fecharMenu}>Projetos</a>
        <a href="#habilidades" className="nav-link-mobile" onClick={fecharMenu}>Habilidades</a>
        <a href="#contatos" className="nav-link-mobile" onClick={fecharMenu}>Contatos</a>
      </div>
    </Navbar>
  );
}

export default NavBar;