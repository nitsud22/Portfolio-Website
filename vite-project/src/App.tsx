import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Button } from "@/components/ui/button";
import { NavigationBar } from "./components/NavBar";
import { Cards } from "./components/CardRow";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="width:100% ">
      <NavigationBar className="sticky top-0 z-50 bg-white dark:bg-black"></NavigationBar>
      <div className="py-2">
        {" "}
        <h2 className="jusimt-10 scroll-m-20 text-3xl font-semibold tracking-tight transition-colors first:mt-0 text-left py-5 px-5">
          Personal Projects
        </h2>
      </div>
      <Cards></Cards>
      <div className="py-10"></div>
      <div className="py-2">
        <h2 className="jusimt-10 scroll-m-20 text-3xl font-semibold tracking-tight transition-colors first:mt-0 text-left py-5 px-5 ">
          Team Projects
        </h2>
      </div>
      <Cards></Cards>
      <div className="py-10"></div>
      <div className="py-10 padding-10 w-full border-t border-gray-200 dark:border-gray-700 bg-background"></div>
    </div>
  );
}

export default App;
