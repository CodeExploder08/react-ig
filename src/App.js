// src/App.js
import React from 'react';
import { Route,Routes } from 'react-router-dom';
import Home from './pages/Home/Home';

const App = () => {
  return (
      <div>
        <Routes>
          <Route exact path="/" Component={Home} />
          {/* <Route path='*' Component={Error} /> */}
        </Routes>
      </div>
  );
};

export default App;
