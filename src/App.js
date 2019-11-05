import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import './App.css';
import './components/components.css';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import LeftSider from './components/LeftSider.jsx';
import Home from './components/Home.jsx';
import About from './components/About.jsx';
import Teaching from './components/Teaching.jsx';
import Notes from './components/Notes.jsx';
import Papers from './components/Papers.jsx';
import Organizing from './components/Organizing.jsx';
import Scanned from './components/Scanned.jsx';

export default function App() {

  return (
    <div className="App-layout">
      <header className="App-header"><Header /></header>
      <main className="App-body">
        <LeftSider />
        <div className="App-route">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/teaching" component={Teaching} />
            <Route exact path="/notes" component={Notes} />
            <Route exact path="/papers" component={Papers} />
            <Route exact path="/organizing" component={Organizing} />
            <Route exact path="/scanned" component={Scanned} />
            <Redirect to="/" />
          </Switch>
        </div>
      </main >
      <footer className="App-footer"><Footer /></footer>
    </div>
  );
}
