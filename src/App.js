import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { GlobalStyle } from './components/style/GlobalStyle'

import { Header } from './components/common/Header';
import { Home } from './components/pages/Home';
import { About } from './components/pages/About';
import { AddPost } from './components/pages/AddPost';
import { Posts } from './components/pages/Posts';
import { PageNotFound } from './components/pages/PageNotFound';

export const App = () => 
  <>
    <GlobalStyle />
    <Header />
    <Switch>
      <Route path={["/", "/home"]} exact component={ Home }/>
      <Route path="/about" component={ About }/>
      <Route path="/addPost" component={ AddPost }/>
      <Route path="/posts" component={ Posts }/>
      <Route component={ PageNotFound }/>
    </Switch>
  </>;
