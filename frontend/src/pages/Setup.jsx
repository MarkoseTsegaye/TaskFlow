// CreateListPage.js
import React, { useState, useContext } from 'react';
import api from "../api";

import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';

function CreateListPage() {
  const [class_name, setClassName]= useState("")
  const [classList, setClassList] = useState([])
  

  
  const createClass = (e) => {
    e.preventDefault();
    api
        .post("/api/classes/", { class_name })
        
        .catch((err) => alert(err));
      setClassList(e);
};

  return (
    <>
    <Navbar />
    <div>
      <h2>Create Class List</h2>
      <form onSubmit={createClass}>
        <input
          type="text"
          value={class_name}
          onChange={(e) => setClassName(e.target.value)}
          placeholder="Enter class name"
        />
        <button type="submit">Add Class</button>
      </form>
    </div>
    </>
  );
}

export default CreateListPage;
