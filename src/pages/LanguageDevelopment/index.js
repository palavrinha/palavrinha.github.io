import { Tab, Row, Col, Nav } from 'react-bootstrap';
import React from 'react';
import { useState } from 'react';
import ChildCommunication from './ChildCommunication';
import HowToHelpTheChild from './HowToHelpTheChild';
import TheExpectedByAge from './TheExpectedByAge';
import AlertSigns from './AlertSigns';
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';

export default function LanguageDevelopment() {
    const { search } = useLocation();

    const tabs = [
        'child-communication',
        'how-to-help-the-child',
        'the-expected-by-age',
        'alert-signs'
    ];

    const initialTab = tabs.includes(new URLSearchParams(search).get('tab')) ? new URLSearchParams(search).get('tab') : tabs[0];
    const [tabKey, changeTab] = useState(initialTab);

    const setTabKey = (tab) => {
        window.scrollTo(0, 0);
        changeTab(tab);
    }

    return (
        <Tab.Container
            activeKey={tabKey}
            onSelect={(k) => setTabKey(k)}>
            <Row style={{ margin: 0 }}>
                <Col sm={3} style={{ margin: 0 }}>
                    <Nav className="left-tab-menu">
                        <h1>Desenvolvimento da Linguagem</h1>
                        <Nav.Item>
                            <Nav.Link eventKey="child-communication"   className="tab-button">Comunicação Infantil</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="how-to-help-the-child" className="tab-button">Como ajudar a criança?</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="the-expected-by-age"   className="tab-button">O esperado por idade</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="alert-signs"           className="tab-button">Sinais de alerta!</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Col>
                <Col sm={9} style={{ margin: 0 }}>
                    <Tab.Content>
                        <Tab.Pane eventKey="child-communication">
                            <ChildCommunication onTabChange={setTabKey} />
                        </Tab.Pane>
                        <Tab.Pane eventKey="how-to-help-the-child">
                            <HowToHelpTheChild  onTabChange={setTabKey} />
                        </Tab.Pane>
                        <Tab.Pane eventKey="the-expected-by-age">
                            <TheExpectedByAge   onTabChange={setTabKey} />
                        </Tab.Pane>
                        <Tab.Pane eventKey="alert-signs">
                            <AlertSigns         onTabChange={setTabKey} />
                        </Tab.Pane>
                    </Tab.Content>
                </Col>
            </Row>
        </Tab.Container>
    );
}