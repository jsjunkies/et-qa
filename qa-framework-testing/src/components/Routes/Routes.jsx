import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import LandingPage from '../LandingPage/LandingPage';

class Routes extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={LandingPage} />
                    <Route exact path='/landing' component={LandingPage} />
                </Switch>
            </BrowserRouter>
        );
    }
}

export default Routes;
