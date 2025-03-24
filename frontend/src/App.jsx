// App.jsx
import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import LandingPage from "./pages/LandPage";
import HomePage from "./pages/home/HomePage";
import BlogListPage from "./pages/blog/BlogListPage";
import BlogDetailPage from "./pages/blog/BlogDetailPage";
import LoginPage from "./pages/auth/LoginPage";
import TimelineTab from "./pages/home/tabs/TimelineTab";
import { FunFactsTab } from "./pages/home/tabs/FunFactsTab";
import { HighlightsTab } from "./pages/home/tabs/HighlightsTab";

// Requires registration
import RegisterPage from "./pages/auth/RegisterPage";
import ProfilePage from "./pages/auth/ProfilePage";
import SocialFeedPage from "./pages/social/SocialFeedPage";
import NotFoundPage from "./pages/NotFoundPage";

// Protected Route Component
import ProtectedRoute from "./components/auth/ProtectedRoute";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import AuthProvider from "./context/AuthProvider";
import ScrollToTop from "./components/ScrollToTop"

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      {/* <AuthProvider> */}
      <Router>
      <ScrollToTop/>
        <Header />
        <main className='min-h-screen pt-16 bg-gradient-to-r from-yellow-50 to-pink-600/80 scroll-smooth'>
          <Routes>
            {/* Public Routes */}
            <Route path='/' element={<LandingPage />} />
            <Route path='/home' element={<HomePage />} />
            <Route path='/timeline' element={<TimelineTab />} />
            <Route path='/fun-facts' element={<FunFactsTab />} />
            <Route path='/highlights' element={<HighlightsTab />} />
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
          <Footer />
        </main>
      </Router>
      {/* </AuthProvider> */}
    </QueryClientProvider>
  );
}

export default App;
