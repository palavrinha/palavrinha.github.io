import React from 'react'
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import LanguageDevelopment from './pages/LanguageDevelopment';

function NotFound() {
    return (
        <div>
            <h1>Não encontrado</h1>
        </div>
    );
}

export default function Routes() {
    return (
        <>
            <BrowserRouter basename={process.env.PUBLIC_URL}>
                <Switch>
                    <Route exact path={'/language-development'} component={LanguageDevelopment} />
                    <Route exact path={'/'} component={Home} />
                    <Route exact path={'/home'} component={Home} />
                    <Route exact path={'/about-us'} component={AboutUs} />
                    <Route component={NotFound} />
                </Switch>
            </BrowserRouter>
        </>
    )
}