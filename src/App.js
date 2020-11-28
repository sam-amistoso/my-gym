import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from './Components/Navbar';
import SideBar from './Components/SideBar';
import Home from './Pages';

import { GlobalStyles } from './Styles/GlobalStyles';
function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <>
      <GlobalStyles />
      <Router>
        <SideBar isOpen={isOpen} toggle={toggle} />
        <NavBar toggle={toggle} />
        <Home />
      </Router>
    </>
  );
}

export default App;
