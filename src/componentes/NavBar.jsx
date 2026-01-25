import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../styles/NavBar.css';

function NavBar(){
    return(
        <Navbar>
            <Container className='navbar'>
                
                <Navbar.Brand href="#home">Port. </Navbar.Brand>

                <Nav className="navegacao">
                    <Nav.Link href="#sobre">Sobre</Nav.Link>
                    <Nav.Link href="#projetos">Projetos</Nav.Link>
                    <Nav.Link href="#habilidades">Habilidades</Nav.Link>
                    <Nav.Link href="#contatos">Contatos</Nav.Link>
                </Nav>

            </Container>
        </Navbar>
    )
}; export default NavBar;

