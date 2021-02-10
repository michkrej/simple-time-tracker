import './App.css';
import React from 'react';
import { Overview } from '../../pages/index'
import { Route } from 'react-router-dom'
import { isMobileDevice } from '../../utils'

function App() {

  const isMobile = isMobileDevice()

  return (
    <div className="App">
      <Route exact path='/'>
        <Overview isMobile={isMobile}/>
      </Route>

    </div>
  );
}

export default App;
