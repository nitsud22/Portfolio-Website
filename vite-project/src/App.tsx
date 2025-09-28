import {
  Route,
  Outlet,
  ScrollRestoration,
  createRoutesFromElements, // Import this helper
} from "react-router-dom";

import { NavigationBar } from "./components/NavBar";
import Projects from "./pages/Projects";
import AboutMe from "./pages/AboutMe";
import Resume from "./pages/Resume";
import CustomScrollManager from "./components/CustomScrollManager";
import CollegeOutcome from "./pages/CollegeOutcome";
import CrawlDashboard from "./pages/CrawlDashboard";
import ResearchCCSE from "./pages/ResearchCCSE";
import TestPage from "./pages/TestPage";
import "./App.css";

// This layout component remains the same. It wraps every page.
const AppLayout = () => (
  <div className="w-full">
    <NavigationBar />
    <main>
      <Outlet />
    </main>
    <ScrollRestoration />
    <CustomScrollManager />
  </div>
);

// We no longer need the App() function with <Router> and <Routes>.
// Instead, we define the route structure using this helper.
const routes = createRoutesFromElements(
  <Route element={<AppLayout />}>
    <Route index element={<Projects />} />
    <Route path="/test" element={<TestPage />} />
    <Route path="/aboutme" element={<AboutMe />} />
    <Route path="/resume" element={<Resume />} />
    <Route path="/college-outcomes" element={<CollegeOutcome />} />
    <Route path="/crawl-dashboard" element={<CrawlDashboard />} />
    <Route path="/tdm-ccse" element={<ResearchCCSE />} />
  </Route>
);

// The default export is now the route configuration.
export default routes;
