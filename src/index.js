import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom'

/**
 * In columbia deploy version I use HashRouter, since their static server does not
 * support "sub-rewrite" -- rewrite all non found url with a prefix /~shanbei to /~shanbei
 * 
 * But github pages support this feature. so it's better to use BrowserRouter
 * 
 * When PUBLIC_URL is set, webpack can correctly build path to files like chunck.js, chunck.css, etc.
 * 
 * For BrowserRouter, we also need to setup basename, so the inner Link can corectly jump
 * 
 * For HashRouter, there's no need, because every application is at "hash root"
 * 
 */

const { NODE_ENV, PUBLIC_URL } = process.env;

ReactDOM.render(
  <BrowserRouter basename={NODE_ENV === 'production' ? PUBLIC_URL : '/'}>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
