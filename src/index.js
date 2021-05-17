import React from 'react';
import {BrowserRouter, Route, Switch, Redirect} from "react-router-dom"
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Login from './login'

ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <Switch>
          <Route path="/login" component={Login}/>
          <Route path="/home" component={App}/>
          <Redirect path="/" to="/login" exact/>
        </Switch>
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);

