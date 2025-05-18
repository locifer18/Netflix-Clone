import React, { useEffect } from 'react';
import './App.css';
import Homescreen from './components/screens/Homescreen';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginScreen from './components/screens/LoginScreen';
import { auth } from './firebase';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';
import ProfileScreen from './components/screens/ProfileScreen';
import SubscriptionScreen from './components/screens/SubscriptionScreen';
import Footer from './components/Footer';
import SignUpScreen from './components/screens/SignUpScreen';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(login({
          uid: userAuth.uid,
          email: userAuth.email,
        }));
      } else {
        dispatch(logout());
      }
    });
    return unsubscribe;
  }, [dispatch]);

  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/login" element={<LoginScreen />} />
          <Route path="/signUp" element={<SignUpScreen />} />
          <Route path="/profile" element={user ? <ProfileScreen /> : <Navigate to="/login" />} />
          <Route path="/subscriptions" element={user ? <SubscriptionScreen /> : <Navigate to="/login" />} />
          <Route path="/" element={user ? <Homescreen /> : <Navigate to="/login" />} />
          <Route path="*" element={<div>404 - Page Not Found</div>} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;