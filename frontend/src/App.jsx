import React, { createContext, useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ScrollToTop from "./components/ScrollToTop";

//layouts
import ProtectedLayout from "./components/layout/ProtectedLayout";
import PublicLayout from "./components/layout/PublicLayout";

//pages
import LandingPage from "./pages/LandPage";
import HomePage from "./pages/home/HomePage";
import ProfilePage from "./pages/auth/ProfilePage";
import SocialFeedPage from "./pages/social/SocialFeedPage";
import NotFoundPage from "./pages/NotFoundPage";
import UserAuthForm from "./pages/auth/UserAuthForm";
import Editor from "./pages/blog/Editor";

// tabs
import TimelineTab from "./pages/home/tabs/TimelineTab";
import { FunFactsTab } from "./pages/home/tabs/FunFactsTab";
import { HighlightsTab } from "./pages/home/tabs/HighlightsTab";

import { lookInSession, storeInSession } from "./common/session";
import BlogEditor from "./pages/blog/BlogEditor";
import PublishForm from "./pages/blog/PublishForm";

// eslint-disable-next-line react-refresh/only-export-components
export const UserContext = createContext({});

function App() {
  const [userAuth, setUserAuth] = useState({});

  useEffect(() => {
    // OAuth callback in the URL
    const params = new URLSearchParams(window.location.search);
    const token = params.get("access_token");
    const username = params.get("username");
    const profileImg = params.get("profile_img");

    if (token) {
      // store the user in session & context
      const userData = {
        access_token: token,
        username: username,
        profile_img: profileImg,
      };
      storeInSession("user", JSON.stringify(userData));
      setUserAuth(userData);

      window.history.replaceState({}, document.title, window.location.pathname);
    } else {
      const userInSession = lookInSession("user");
      if (userInSession) {
        setUserAuth(JSON.parse(userInSession));
      }
    }
  }, []);

  return (
    <QueryClientProvider client={new QueryClient()}>
      <Router>
        <ScrollToTop />
        <UserContext.Provider value={{ userAuth, setUserAuth }}>
          <Routes>
            {/* Public Routes */}
            <Route path='/' element={<PublicLayout />}>
              <Route index element={<LandingPage />} />
              <Route path='home' element={<HomePage />} />
              <Route path='timeline' element={<TimelineTab />} />
              <Route path='fun-facts' element={<FunFactsTab />} />
              <Route path='highlights' element={<HighlightsTab />} />
            </Route>

            <Route element={<ProtectedLayout />}>
              <Route path='/login' element={<UserAuthForm type={"Sign In"} />} />
              <Route path='/register' element={<UserAuthForm type={"Join the Club"} />} />
              <Route path='/social' element={<SocialFeedPage />} />
              <Route path='/editor' element={<Editor />} />
              <Route path='/profile' element={<ProfilePage />} />
            </Route>
            {/* New Header */}
            <Route path='/blog-editor' element={<BlogEditor />} />
            <Route path='/publish-form' element={<PublishForm />} />

            {/* 404 Route */}
            <Route path='*' element={<NotFoundPage />} />
          </Routes>
        </UserContext.Provider>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
