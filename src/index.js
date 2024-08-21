import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './styles.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import LoginForm from './components/LoginForm';
import Home from './components/Home';
import SignUpForm from './components/SignUpForm';
import SignUpConfirmationPage from './components/SignUpConfirmation';
import ChatRoom from './components/ChatRoom';
import AuthenticatedHomePage from './components/AuthenticatedHome';
import ProtectedRoute from './components/ProtectedRoutes';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="login" element={<LoginForm />} />
      <Route path="signup" element={<SignUpForm />} />
      <Route path="signup/confirm/:token" element={<SignUpConfirmationPage />} />
      {/* <Route path="quickChats" element={<AuthenticatedHomePage />} /> */}
      {/* Protected Routes */}
      <Route element={<ProtectedRoute />}>
          <Route path="/quickChats" element={<AuthenticatedHomePage />} />
          {/* Add more protected routes here */}
        </Route>





      <Route path="/chat" element={<ChatRoom />} />
    </Routes>
  </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
