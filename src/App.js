// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Admin from './pages/Admin';
import EditDetails from './pages/EditDetails';
import AdminPanel from './pages/Adminpanel';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/editdetails" element={<EditDetails />} />
          <Route path="/adminpanel" element ={<AdminPanel/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
