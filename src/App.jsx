

import React, { useState, useEffect } from "react";
import axios from "axios";
import Login from "./Components/pages/login";
import Post from "./Components/pages/Post";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import AddPost from "./Components/pages/addpost";
function App() {
  
  return (
    <>
    <Router  basename="/Social_Feed2" >
      <Routes>
        <Route path="/" element={ <Login/>}></Route>
        <Route path="/post" element={<Post/>}></Route>
        <Route path="/add" element={<AddPost/>}></Route>
      </Routes>



    </Router>
    
      
     

    </>
  );
}

export default App;
