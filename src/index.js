import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom';

document.body.style.backgroundColor = "black";


ReactDOM.render(<Router><App /></Router>, document.getElementById('root'));

