import React from 'react';
import { useHistory } from 'react-router-dom';
import { Navbar, Nav, Image, Container } from 'react-bootstrap';
import './index.css';
import logo from '../../assets/icon.png';

export default function Header() {
    const history = useHistory();
    return (
        <Navbar expand="lg">
            <Navbar.Brand onClick={() => history.push('/')}>
                <Image src={logo} width="140" height="40" style={{ marginLeft: 30, cursor:'pointer' }} />
            </Navbar.Brand>
            <Navbar.Toggle style={{ marginRight: 10 }} />
            <Navbar.Collapse>
                <Container className="nav-container">
                    <Nav>
                        <Nav.Link onClick={() => history.push('/language-development')} className="text-white">Desenvolvimento da linguagem</Nav.Link>
                        <Nav.Link onClick={() => history.push('/')} className="text-white" disabled>Leitura e Escrita</Nav.Link>
                        <Nav.Link onClick={() => history.push('/')} className="text-white" disabled>Parentalidade</Nav.Link>
                        <Nav.Link onClick={() => history.push('/')} className="text-white" disabled>Brincadeiras</Nav.Link>
                        <Nav.Link onClick={() => history.push('/about-us')} className="text-white">Quem Somos</Nav.Link>
                        <Nav.Link onClick={() => history.push('/contact')} className="text-white">Contate-nos</Nav.Link>
                    </Nav>
                </Container>
            </Navbar.Collapse>
        </Navbar>
    );
}