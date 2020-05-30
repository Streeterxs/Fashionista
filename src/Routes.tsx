import React from 'react';
import {Switch, Route} from 'react-router-dom';

const Routes = () => (
    <Switch>
        <Route path="/" exact render={() => 'first page'}></Route>
    </Switch>
);

export default Routes;