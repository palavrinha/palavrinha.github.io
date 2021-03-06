import React from 'react';
import { useHistory } from 'react-router-dom';
import { Navbar, Nav, Image, Container } from 'react-bootstrap';
import './index.css';
import logo from '../../assets/icon.png';

export default function Header() {
    const history = useHistory();
    
    return (
        <Navbar expand="lg" fixed="top">
            <Navbar.Brand onClick={() => history.push('/')}>
                <Image src={logo} width="140" height="40" style={{ marginLeft: 30, cursor: 'pointer' }} />
            </Navbar.Brand>
            <Container className="justify-content-end">
                <Nav style={{flexDirection: 'row'}}>
                    <Nav.Link
                        href="/#/language-development"
                        bsPrefix="header-item">
                        Desenvolvimento da linguagem
                    </Nav.Link>
                    <Nav.Link
                        href="/#/child-activities"
                        bsPrefix="header-item">
                        Brincadeiras
                    </Nav.Link>
                    <Nav.Link
                        href="/#/myths-or-truths"
                        bsPrefix="header-item">
                        Mitos e Verdades
                    </Nav.Link>
                    <Nav.Link
                        href="/#/systemic-page"
                        bsPrefix="header-item">
                        Cantinho sistêmico
                    </Nav.Link>
                    <Nav.Link
                        href="/#/about-us"
                        bsPrefix="header-item">
                        Quem somos
                    </Nav.Link>
                    <Nav.Link
                        href="/#/contact"
                        bsPrefix="header-item">
                        Contate-nos
                    </Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
}