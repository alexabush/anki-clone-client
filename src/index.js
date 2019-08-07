import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import AppNav from './AppNav';
import * as serviceWorker from './serviceWorker';

// console.log('env:', process.env.NODE_ENV);
if (process.env.NODE_ENV !== 'production') {
  console.log('IN dotenv env:');
  require('dotenv').config();
}
// console.log('after dotenv env:', process.env.NODE_ENV);
// if (process.env.NODE_ENV === 'production') {
//   process.env.API_URL = 'https://alex-anki-clone.herokuapp.com';
// }
// process.env.API_URL = 'https://alex-anki-clone.herokuapp.com';
console.log('env:', process.env);

ReactDOM.render(
  <BrowserRouter>
    <AppNav />
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
