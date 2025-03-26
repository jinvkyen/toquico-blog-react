import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ScrollToTop from "./components/ScrollToTop";

//layouts
import ProtectedLayout from "./components/layout/ProtectedLayout";
import PublicLayout from "./components/layout/PublicLayout";

//pages
import LandingPage from "./pages/LandPage";
import HomePage from "./pages/home/HomePage";
import BlogListPage from "./pages/blog/BlogListPage";
import BlogDetailPage from "./pages/blog/BlogDetailPage";
import LoginPage from "./pages/auth/LoginPage";
import RegisterPage from "./pages/auth/RegisterPage";
import ProfilePage from "./pages/auth/ProfilePage";
import SocialFeedPage from "./pages/social/SocialFeedPage";
import NotFoundPage from "./pages/NotFoundPage";
import UserAuthForm from "./pages/auth/UserAuthForm";

// tabs
import TimelineTab from "./pages/home/tabs/TimelineTab";
import { FunFactsTab } from "./pages/home/tabs/FunFactsTab";
import { HighlightsTab } from "./pages/home/tabs/HighlightsTab";

// import AuthProvider from "./context/AuthProvider";

// Protected Route Component
import ProtectedRoute from "./components/auth/ProtectedRoute";

function App() {
  return (
    <QueryClientProvider client={new QueryClient()}>
      <Router>
        <ScrollToTop />
        <Routes>
          {/* Public Routes */}
          <Route path='/' element={<PublicLayout />}>
            <Route index element={<LandingPage />} />
            <Route path='home' element={<HomePage />} />
            <Route path='timeline' element={<TimelineTab />} />
            <Route path='fun-facts' element={<FunFactsTab />} />
            <Route path='highlights' element={<HighlightsTab />} />
            {/* not sure */}
            <Route path='blog' element={<BlogListPage />} />
            <Route path='blog/:id' element={<BlogDetailPage />} />
          </Route>

          <Route path='/user' element={<ProtectedLayout />}>
            <Route path='login' element={<UserAuthForm type={"Sign In"} />} />
            <Route path='register' element={<UserAuthForm type={"Join the Club"} />} />
            <Route path='profile' element={<ProfilePage />} />
            <Route path='social' element={<SocialFeedPage />} />
          </Route>

          {/* 404 Route */}
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
