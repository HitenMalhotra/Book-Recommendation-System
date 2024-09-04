import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Nav, Navbar, NavbarBrand } from 'react-bootstrap';
import Home from './Home';
import Recommend from './RecommendBooks';

function App() {
  return (
    <Router>
      <div style={{ backgroundColor: 'teal', margin: '0', padding: '0', overflowX: 'hidden', height: '100vh', width: '100vw' }}>
        <Navbar>
          <NavbarBrand style={{ color: 'white' }}>Book Recommendation System</NavbarBrand>
          <Nav>
            <Nav.Link as={Link} to="/" style={{ color: 'white' }}>Home</Nav.Link>
            <Nav.Link as={Link} to="/recommend" style={{ color: 'white' }}>Recommend</Nav.Link>
            <Nav.Link as={Link} to="/contact" style={{ color: 'white' }}>Contact</Nav.Link>
          </Nav>
        </Navbar>

        <br />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recommend" element={<Recommend />} />
          {/* Add additional routes as needed */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
