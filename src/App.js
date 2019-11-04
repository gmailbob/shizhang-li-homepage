import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';
import './components/components.css';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import LeftSider from './components/LeftSider.jsx';
import Home from './components/Home.jsx';

export default function App() {
  return (
    <div className="App-layout">
      <header className="App-header"><Header /></header>
      <main className="App-body">
        <LeftSider />
        <div className="App-route">
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
        </div>
      </main >
      <footer className="App-footer"><Footer /></footer>
    </div>
  );
}
