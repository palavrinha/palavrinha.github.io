import React from 'react'
import { Switch, Route, HashRouter } from "react-router-dom";
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import LanguageDevelopment from './pages/LanguageDevelopment';
import NotFound from './pages/NotFound';

export default function Routes() {
    return (
        <>
            <HashRouter>
                <Switch>
                    <Route exact path={'/language-development'} component={LanguageDevelopment} />
                    <Route exact path={'/'} component={Home} />
                    <Route exact path={'/home'} component={Home} />
                    <Route exact path={'/about-us'} component={AboutUs} />
                    <Route component={NotFound} />
                </Switch>
            </HashRouter>
        </>
    )
}