import React from "react";
import './App.css';
import logo from './logo.svg';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import {Home,Konversi, Hooks, TodoList, Reduxs,ConsumeAPI,Footer} from './Components'


export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <div className="logo">
            <Link to="/">
              <img src={logo} alt="logo" />
            </Link>
          </div>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/lifting-state-up">Lifting</Link></li>
            <li><Link to="/hooks-context">Hooks</Link></li>
            <li><Link to="/redux">Redux</Link></li>
            <li><Link to="/todolist">List</Link></li>
            <li><Link to="/consumeAPI">API</Link></li>
          </ul>
        </nav>      

        <Switch>
            <Route exact component = {Konversi} path="/lifting-state-up"/>
            <Route exact component = {Hooks} path="/hooks-context" />
            <Route exact component = {Reduxs} path="/redux" />
            <Route exact component = {TodoList} path="/todolist" />
            <Route exact component = {ConsumeAPI} path="/consumeAPI" />
            <Route exact component = {Home} path="/" />
        </Switch>
      </div>
      <Footer/>
    </Router>
    
  );
}
