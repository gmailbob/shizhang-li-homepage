import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Home from './components/Home.jsx';

export default function App() {
  return (
    <div id="main-layout">
      <header id="main-header"><Header /></header>
      <main id="main-content">
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </main>
      <footer id="main-footer"><Footer /></footer>
    </div>
  );
}
