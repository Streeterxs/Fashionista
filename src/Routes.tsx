import React from 'react';
import {Switch, Route} from 'react-router-dom';
import { ShopPage, DetailsPage } from './Pages';

const Routes = () => (
    <Switch>
        <Route path="/" exact component={ShopPage}/>
        <Route path="/details/:identifier" component={DetailsPage}/>
    </Switch>
);

export default Routes;