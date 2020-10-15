import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import GlobalStyle from './globalStyles';
import { Footer, Navbar } from './components';
import Home from './pages/HomePage/Home';

function App() {
  return (
    <Router className="App">
      <GlobalStyle />
      <Navbar></Navbar>
      <Switch>
        <Route path="/" exact component={Home} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
