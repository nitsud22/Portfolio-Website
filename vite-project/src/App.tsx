import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Button } from "@/components/ui/button";
import { NavigationBar } from "./components/NavBar";
import { Cards } from "./components/CardRow";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Projects from "./pages/Projects";
import AboutMe from "./pages/AboutMe";
import Resume from "./pages/Resume";
import CollegeOutcome from "./pages/collegeoutcomes";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <div className="w-full ">
        <NavigationBar />
        <Routes>
          <Route path="/" element={<Projects />} />
          <Route path="/aboutme" element={<AboutMe />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/collegeoutcomes" element={<CollegeOutcome />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
