import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
import "./index.css";
import "./App.css";

import Research from "./pages/Research";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Dashboard from "./components/Dashboard";
import Intro from "./pages/Intro";
import Affiliate from "./pages/Affiliate";
import { HelmetProvider } from "react-helmet-async";
import Content from "./components/Content";
import DashboardAffiliate from "./components/DashboardAffiliate";
import DashboardProfile from "./components/DashboardProfile";
import DashboardPlan from "./components/DashboardPlan";
import DashboardPayout from "./components/DashboardPayout";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ForgotPassword from "./pages/Forgotpw";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <>
      <HelmetProvider>
        <div>
          <Router>
            <ScrollToTop />
            <Routes>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route
                path="/dashboard-affiliate"
                element={<DashboardAffiliate />}
              />
              <Route path="/dashboard-profile" element={<DashboardProfile />} />
              <Route path="/dashboard-plan" element={<DashboardPlan />} />
              <Route path="/dashboard-payout" element={<DashboardPayout />} />
              <Route
                element={
                  <>
                    <Navbar />
                    <Outlet />
                    <Footer />
                  </>
                }
              >
                <Route path="/" element={<Intro />} />
                <Route path="/research" element={<Research />} />
                <Route path="/mastery" element={<Content />}>
                  <Route path=":moduleSlug" element={<Content />}>
                    <Route path=":subModuleSlug" element={<Content />} />
                  </Route>
                </Route>
                <Route path="/affiliate" element={<Affiliate />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/forgot-password" element={<ForgotPassword />} />
              </Route>
            </Routes>
          </Router>
        </div>
      </HelmetProvider>
    </>
  );
}

export default App;
