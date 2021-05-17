import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import './App.css';
import  AccountPage  from './components/pages/AccountPage';


function App() {
  return (
   <div>
    <Router>
      <div className="App">
        <Switch>
          <Route path='/Account' component={AccountPage} />
        </Switch>  
      </div>
     </Router> 
  </div> 
  );
}

export default App;
