// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Admin from './pages/Admin';
import EditDetails from './pages/EditDetails';
import AdminPanel from './pages/Adminpanel';
import HTMLQuizUploadPage from './pages/HTMLQuizUploadPage';
import PlacementAssistant from './pages/PlacementAssistant';
import Hackathons from './pages/Hackathons';
import Content from './components/UserView/Content';
import HomePage from "./HomePage";
import SubSubCategoryPage from "./SubSubCategoryPage";


import AllContent from './components/Admin Panel/AllContent';
import SubcategoryPage from './components/Admin Panel/SubcategoryPage';
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<HomePage />} />
        <Route path="/subcategory/:subcategoryId" element={<SubSubCategoryPage />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/editdetails" element={<EditDetails />} />
          <Route path="/adminpanel" element ={<AdminPanel/>}/>
          <Route path='/content' element={<Content/>}/>
          <Route path="/upload-html-quiz" element={<HTMLQuizUploadPage/>}/>
          <Route path="/placement/assistant" element={<PlacementAssistant/> }/>

          <Route path="/Hackathon/assistant" element={<Hackathons/>}/>
           <Route  path="/allcontent" element ={<AllContent/>}/>
           <Route path="/subcategory/:subcategoryId" element={<SubcategoryPage/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
