import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Main from './main/Main';
import Clothes from './clothes/Clothes';

function App() {
  return (
      <div>
        <Route exact path="/">
          <Main />
        </Route>

        <Route path="/Clothes">
          <Clothes />
        </Route>
      </div>
  );
}

export default App;
