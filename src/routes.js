import React from 'react'
import { Switch, Route, HashRouter } from "react-router-dom";
import Header from './components/Header'
import Home from './pages/Home';
import LanguageDevelopment from './pages/LanguageDevelopment';
import ChildActivities from './pages/ChildActivities';
import MythsOrTruths from './pages/MythsOrTruths';
import SystemicPage from './pages/SystemicPage';
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

export default function Routes() {
    return (
        <HashRouter>
            <Header />
            <div style={{ marginTop: '12vh' }}>
                <Switch>
                    <Route exact path={'/'} component={Home} />
                    <Route exact path={'/home'} component={Home} />
                    <Route exact path={'/language-development'} component={LanguageDevelopment} />
                    <Route exact path={'/child-activities'} component={ChildActivities} />
                    <Route exact path={'/myths-or-truths'} component={MythsOrTruths} />
                    <Route exact path={'/systemic-page'} component={SystemicPage} />
                    <Route exact path={'/about-us'} component={AboutUs} />
                    <Route exact path={'/contact'} component={Contact} />
                    <Route component={NotFound} />
                </Switch>
            </div>
        </HashRouter>
    )
}