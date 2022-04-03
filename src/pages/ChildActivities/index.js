import { Tab, Row, Col, Nav } from 'react-bootstrap';
import React from 'react';
import { useState } from 'react';
import AboutChildActivities from './AboutChildActivities';
import From0To9Years from './From0To2Years';
import From2To5Years from './From2To5Years';
import From6To9Years from './From6To9Years';
import MovieRecommendations from './MovieRecommendations';

export default function ChildActivities() {
    const [tabKey, setTabKey] = useState('about-child-activities');

    return (
        <Tab.Container
            activeKey={tabKey}
            onSelect={(k) => setTabKey(k)}>
            <Row>
                <Col sm={3}>
                    <Nav className="left-tab-menu">
                        <h1>Brincadeiras por idade</h1>
                        <Nav.Item>
                            <Nav.Link eventKey="about-child-activities" className="tab-button">
                                Sobre o brincar
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="age-0-2" className="tab-button">
                                0 a 2 anos
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="age-2-5" className="tab-button">
                                2 a 5 anos
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="age-6-9" className="tab-button">
                                6 a 9 anos
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="movie-recommendations" className="tab-button">
                                Indicações de filmes
                            </Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Col>
                <Col sm={9}>
                    <Tab.Content>
                        <Tab.Pane eventKey="about-child-activities">
                            <AboutChildActivities/>
                        </Tab.Pane>
                        <Tab.Pane eventKey="age-0-2">
                            <From0To9Years/>
                        </Tab.Pane>
                        <Tab.Pane eventKey="age-2-5">
                            <From2To5Years/>
                        </Tab.Pane>
                        <Tab.Pane eventKey="age-6-9">
                            <From6To9Years/>
                        </Tab.Pane>
                        <Tab.Pane eventKey="movie-recommendations">
                            <MovieRecommendations/>
                        </Tab.Pane>
                    </Tab.Content>
                </Col>
            </Row>
        </Tab.Container>
    );
}