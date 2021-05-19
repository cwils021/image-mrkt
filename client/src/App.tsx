import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import './App.css';
import HomePage from './components/pages/HomePage';
import  AccountPage  from './components/pages/AccountPage';
import MarketPage from './components/pages/MarketPage';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
   <>
    <Router>
      <div className="App">
        <NavBar/>
        <Switch>
          <Route path='/' exact  component={HomePage} />
          <Route path='/Account' component={AccountPage} />
          <Route path='/Market' component={MarketPage} />
        </Switch>
      </div>
     </Router>
  </>
  );
}

export default App;
