import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Main from './main/Main';
import Clothes from './clothes/Clothes';
import Cle from './clothes/Cle';
import { Switch } from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Main}  />
          <Route path="/Clothes" component={Clothes}/>
          <Route path="/Cle" component={Cle}/>
        </Switch>
        
      </Router>
  </div>
  );
}

export default App;
