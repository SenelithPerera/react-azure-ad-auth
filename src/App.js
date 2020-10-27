import React from 'react';
import { authContext } from './adalConfig';

import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <button onClick={() => authContext.logOut()}>logout</button>
      </header>
    </div>
  );
}

export default App;
