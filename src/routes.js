import React from 'react'
import { Switch, Route, HashRouter } from "react-router-dom";
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import LanguageDevelopment from './pages/LanguageDevelopment';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import Header from './components/Header'

export default function Routes() {
    return (
        <HashRouter>
            <Header />
            <div style={{ marginTop: '12vh' }}>
                <Switch>
                    <Route exact path={'/language-development'} component={LanguageDevelopment} />
                    <Route exact path={'/'} component={Home} />
                    <Route exact path={'/home'} component={Home} />
                    <Route exact path={'/about-us'} component={AboutUs} />
                    <Route exact path={'/contact'} component={Contact} />
                    <Route component={NotFound} />
                </Switch>
            </div>
        </HashRouter>
    )
}