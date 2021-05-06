import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import About from './components/About';
import Gallery from './components/Gallery';
import Home from './components/Home';
import PhoneGuesser from './components/PhoneGuesser';
import { Portfolio } from './components/Portfolio';
import Stuff from './components/Stuff';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/portfolio">Portfolio</Link>
            </li>
           {/* <li>
              <Link to="/gallery">Gallery</Link>
           </li>*/}
            <li>
              <Link to="/stuff">Stuff</Link>
            </li>
          </ul>
        </nav>
 
        <Switch>
          <Route exact path= "/">
            <Home/>
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/portfolio">
            <Portfolio />
          </Route>
          <Route path ="/gallery">
            <Gallery/>
          </Route>
          <Route path="/stuff">
            <Stuff/>
          </Route>
          <Route path="/phoneNumber">
            <PhoneGuesser/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
