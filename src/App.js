import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { Header } from './components/common/Header';
import { Home } from './components/pages/Home';
import { About } from './components/pages/About';
import { PageNotFound } from './components/pages/PageNotFound';

export const App = () => 
  <>
    <Header />
    <Switch>
      <Route path={["/", "/home"]} exact component={ Home }/>
      <Route path="/about" component={ About }/>
      <Route component={ PageNotFound }/>
    </Switch>
  </>;
