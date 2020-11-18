import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Catalog from './components/Catalog';
import Home from './components/Home';

const Routes = () => (
    <Switch>
        <Route exact path="/catalog" >
            <Catalog />
        </Route>
        <Route path="/">
            <Home />
        </Route>
    </Switch>
);


export { Routes as default };