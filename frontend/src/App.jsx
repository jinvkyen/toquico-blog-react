// App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import LandingPage from "./pages/LandPage";
import HomePage from "./pages/HomePage";
import BlogListPage from "./pages/blog/BlogListPage";
import BlogDetailPage from "./pages/blog/BlogDetailPage";
import LoginPage from "./pages/auth/LoginPage";
import TimelineTab from "./pages/home/tabs/TimelineTab"

// Requires registration
import RegisterPage from "./pages/auth/RegisterPage";
import ProfilePage from "./pages/auth/ProfilePage";
import SocialFeedPage from "./pages/social/SocialFeedPage";
import NotFoundPage from "./pages/NotFoundPage";

// Protected Route Component
import ProtectedRoute from './components/auth/ProtectedRoute';

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import AuthProvider from "./context/AuthProvider";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      {/* <AuthProvider> */}
      <Router>
        <Header />
        <main className='min-h-screen pt-16 pb-8 bg-gradient-to-b from-toquiPrimary/70 to-yellow-50'>
          <Routes>
            {/* Public Routes */}
            <Route path='/' element={<LandingPage />} />
            <Route path='/home' element={<HomePage />} />
            <Route path='/timeline' element={<TimelineTab />} />
            <Route path='/blog' element={<BlogListPage />} />
            <Route path='/blog/:id' element={<BlogDetailPage />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/register' element={<RegisterPage />} />

            {/* Protected Routes */}
            <Route
              path='/profile'
              element={
                <ProtectedRoute>
                  <ProfilePage />
                </ProtectedRoute>
              }
            />
            <Route
              path='/social'
              element={
                <ProtectedRoute>
                  <SocialFeedPage />
                </ProtectedRoute>
              }
            />

            {/* 404 Route */}
            <Route path='*' element={<NotFoundPage />} />
          </Routes>
        </main>
        <Footer />
      </Router>
      {/* </AuthProvider> */}
    </QueryClientProvider>
  );
}

export default App;
