import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import LandingPage from '../LandingPage/LandingPage';
import Header from '../Header/Header';
import {
    Guideline111,
    Guideline141,
    Guideline332,
    Guideline411,
    Guideline242,
} from '../Guidelines';
import {
    ResolvedGuideline111,
    ResolvedGuideline141,
    ResolvedGuideline332,
    ResolvedGuideline411,
    ResolvedGuideline242,
} from '../ResolvedGuidelines';

class Routes extends Component {
    render() {
        return (
            <BrowserRouter>
                <Header />
                <Switch>
                    <Route exact path='/' component={LandingPage} />
                    <Route exact path='/landing' component={LandingPage} />
                    <Route exact path='/guidelines-1.1.1' component={Guideline111} />
                    <Route exact path='/resolved-guidelines-1.1.1' component={ResolvedGuideline111} />
                    <Route exact path='/guidelines-1.4.1' component={Guideline141} />
                    <Route exact path='/resolved-guidelines-1.4.1' component={ResolvedGuideline141} />
                    <Route exact path='/guidelines-2.4.2' component={Guideline242} />
                    <Route exact path='/resolved-guidelines-2.4.2' component={ResolvedGuideline242} />
                    <Route exact path='/guidelines-3.3.2' component={Guideline332} />
                    <Route exact path='/resolved-guidelines-3.3.2' component={ResolvedGuideline332} />
                    <Route exact path='/guidelines-4.1.1' component={Guideline411} />
                    <Route exact path='/resolved-guidelines-4.1.1' component={ResolvedGuideline411} />
                </Switch>
            </BrowserRouter>
        );
    }
}

export default Routes;
