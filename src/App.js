import React from 'react';
import './App.css';
import FirstPage from './Page1/FirstPage';
import SecondPage from './Page2/SecondPage';
import {Switch,Route} from 'react-router-dom' ;

export default function App() {
  return (
    <div className="App">

      <Switch>
        <Route exact path='/' component={FirstPage} />
        <Route exact path='/taskname' component={SecondPage} />
      </Switch>

    </div>
  );
}
