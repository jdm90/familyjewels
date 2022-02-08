import * as React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Nav from './components/Nav';
import About from './components/AboutComponent';
import Footer from './components/FooterComponent';
import './App.css';
import SignIn from './components/SignIn';
import CollapsibleTable from './components/Inventory';

function App() {
  return (
    <div className="App">
      <Nav />
      <div class="main-div">
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/about" element={<About />} />
          <Route path="/inventory" element={<CollapsibleTable />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
