import React from 'react';
import './App.css';

import { BrowserRouter, Link, Route } from 'react-router-dom';

import Header from './components/header';
import Main from './pages/main';
import SSS from './pages/sss';
import OpenCase from './pages/opencase';
import Click from './pages/click';

const App = () => (
  <>
  <Header></Header>
  <BrowserRouter>
    <Route exact path="/" component={ Main } />
    <Route exact path="/Anasayfa" component={ Main } />
    <Route exact path="/SSS"  component={ SSS } />
    <Route exact path ="/Opencase" component= { OpenCase } />
    <Route exact path="/click" component= { Click } />
  </BrowserRouter>
  </>
)

export default App;