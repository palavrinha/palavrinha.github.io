import { Tab, Row, Col, Nav } from 'react-bootstrap';
import React from 'react';
import { useState } from 'react';
import ChildCommunication from './ChildCommunication';
import HowToHelpTheChild from './HowToHelpTheChild';
import TheExpectedByAge from './TheExpectedByAge';
import AlertSigns from './AlertSigns';

export default function LanguageDevelopment() {
    const [tabKey, setTabKey] = useState('child-communication');

    return (
        <Tab.Container 
            id="left-tabs-example" 
            activeKey={tabKey}
            onSelect={(k) => setTabKey(k)}>
            <Row>
                <Col sm={3}>
                    <Nav className="left-tab-menu">
                        <h1>Desenvolvimento da Linguagem</h1>
                        <Nav.Item>
                            <Nav.Link eventKey="child-communication" className="tab-button">Comunicação Infantil</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="how-to-help-the-child" className="tab-button">Como ajudar a criança?</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="the-expected-by-age" className="tab-button">O esperado por idade</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="alert-signs" className="tab-button">Sinais de alerta!</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Col>
                <Col sm={9}>
                    <Tab.Content>
                        <Tab.Pane eventKey="child-communication">
                            <ChildCommunication onTabChange={setTabKey}/>
                        </Tab.Pane>
                        <Tab.Pane eventKey="how-to-help-the-child">
                            <HowToHelpTheChild onTabChange={setTabKey}/>
                        </Tab.Pane>
                        <Tab.Pane eventKey="the-expected-by-age">
                            <TheExpectedByAge  onTabChange={setTabKey}/>
                        </Tab.Pane>
                        <Tab.Pane eventKey="alert-signs">
                            <AlertSigns        onTabChange={setTabKey}/>
                        </Tab.Pane>
                    </Tab.Content>
                </Col>
            </Row>
        </Tab.Container>
    );
}