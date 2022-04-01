import { Tab, Row, Col, Nav } from 'react-bootstrap';
import React from 'react';
import './index.css';
import { useState } from 'react';
import ChildCommunication from './ChildCommunication';
import HowToHelpTheChild from './HowToHelpTheChild';
import TheExpectedByAge from './TheExpectedByAge';

export default function LanguageDevelopment() {
    const [tabKey, setTabKey] = useState('comunicacao-infantil');

    return (
        <Tab.Container 
            id="left-tabs-example" 
            activeKey={tabKey}
            onSelect={(k) => setTabKey(k)}>
            <Row>
                <Col sm={3}>
                    <Nav className="flex-column left-tab-menu">
                        <h1>Desenvolvimento da Linguagem</h1>
                        <Nav.Item>
                            <Nav.Link eventKey="comunicacao-infantil" className="tab-button">Comunicação Infantil</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="como-ajudar-a-crianca" className="tab-button">Como ajudar a criança?</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="esperado-por-idade" className="tab-button">O esperado por idade</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="sinais-de-alerta" className="tab-button">Sinais de alerta!</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Col>
                <Col sm={9}>
                    <Tab.Content className="text-area">
                        <Tab.Pane eventKey="comunicacao-infantil">
                            <ChildCommunication onTabChange={setTabKey}/>
                        </Tab.Pane>
                        <Tab.Pane eventKey="como-ajudar-a-crianca">
                            <HowToHelpTheChild  onTabChange={setTabKey}/>
                        </Tab.Pane>
                        <Tab.Pane eventKey="esperado-por-idade">
                            <TheExpectedByAge   onTabChange={setTabKey}/>
                        </Tab.Pane>
                    </Tab.Content>
                </Col>
            </Row>
        </Tab.Container>
    );
}