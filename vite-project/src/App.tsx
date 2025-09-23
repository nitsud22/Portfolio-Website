import { NavigationBar } from "./components/NavBar";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Projects from "./pages/Projects";
import AboutMe from "./pages/AboutMe";
import Resume from "./pages/Resume";
import CollegeOutcome from "./pages/CollegeOutcome";
import CrawlDashboard from "./pages/CrawlDashboard";
import ScrollToTop from "./components/scrolltotop";

function App() {
  return (
    <Router>
      <div className="w-full ">
        <NavigationBar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Projects />} />
          <Route path="/aboutme" element={<AboutMe />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/college-outcomes" element={<CollegeOutcome />} />
          <Route path="/crawl-dashboard" element={<CrawlDashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
