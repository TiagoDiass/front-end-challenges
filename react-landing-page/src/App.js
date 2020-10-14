import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import GlobalStyle from './globalStyles';
import { Navbar } from './components';

function App() {
  return (
    <Router className="App">
      <GlobalStyle />
      <Navbar></Navbar>
    </Router>
  );
}

export default App;
