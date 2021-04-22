import React from 'react';
import './App.css';
import Nav from './nav';
import Shop from './shop';
import About from './about';
import Home from "./home";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function App() {
  return (
    <Router> 
    <div className="App">
      <Nav/>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/shop" component={Shop}/>
      </Switch>
    </div>
    </Router>
  );
}



export default App;
