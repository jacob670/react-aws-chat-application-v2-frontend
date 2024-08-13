import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './styles.css';

function App() {
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
