import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './styles.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import LoginForm from './components/Account/LoginForm';
import Home from './components/Home/Home';
import SignUpForm from './components/Account/SignUpForm';
import SignUpConfirmationPage from './components/Account/SignUpConfirmation';
import TrendingMovies from './components/Movies/TrendingMovies';
import AuthenticatedHomePage from './components/Home/AuthenticatedHome';
import ProtectedRoute from './components/ProtectedRoutes';
import MovieDetail from './components/Movies/trendingMovieDetail';
import MovieBlog from './components/Movies/MovieBlog';
import RecommendedMovie from './components/Movies/RecommendedMovieID'
import AllRecommendedMovies from './components/Movies/RecommendedMovies'
import RecommendedMovieDetail from './components/Movies/RecommendedMovieDetail';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="login" element={<LoginForm />} />
      <Route path="signup" element={<SignUpForm />} />
      <Route path="signup/confirm/:token" element={<SignUpConfirmationPage />} />


      {/* Protected Routes */}
      <Route element={<ProtectedRoute />}>
          <Route path="/quickChats" element={<AuthenticatedHomePage />} />
          <Route path="/trendingMovies" element={<TrendingMovies />} />
          <Route path="/trendingMovies/:id" element={<MovieDetail />} />
          <Route path="/movieBlog" element={<MovieBlog />} />
          <Route path="/recomendedMovies" element={<RecommendedMovie />} />
          <Route path="/GetAllRecommendedMovies" element={<AllRecommendedMovies />} />
          <Route path="/GetAllRecommendedMovies/:id" element={<RecommendedMovieDetail />} />
          {/* Add more protected routes here */}
        </Route>
    </Routes>
  </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
