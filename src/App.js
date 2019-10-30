import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Row, Col } from 'antd';

import './App.css';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import DesktopSider from './components/DesktopSider.jsx';
import MobileSider from './components/MobileSider.jsx';
import Home from './components/Home.jsx';

export default function App() {
  return (
    <div id="main-layout">
      <header id="main-header"><Header /></header>
      <main id="main-body">
        <Row >
          <Col xs={3} sm={0}><MobileSider /></Col>
          <Col
            xs={0}
            sm={{ span: 8, offset: 1 }}
            md={{ span: 7, offset: 1 }}
            lg={{ span: 6, offset: 2 }}
            xl={{ span: 5, offset: 2 }}
            xxl={{ span: 4, offset: 2 }}
            style={{ marginRight: 30 }}
          >
            <DesktopSider />
          </Col>
          <Col>
            <Switch>
              <Route exact path="/" component={Home} />
            </Switch>
          </Col>
        </Row>
      </main>
      <footer id="main-footer"><Footer /></footer>
    </div>
  );
}
