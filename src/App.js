
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useLocation } from 'react-router-dom';
import './styles.css';

function App() {

  const confirmationToken = localStorage.getItem("confirmationToken");
  const username = localStorage.getItem("username");
  const location = useLocation();
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/login">LoginForm</Link>
        <Link to="/signup">SignupForm</Link>
        <Link to="/confirmation">SignupForm</Link>
      </nav>
    </div>
  );
}

export default App;
