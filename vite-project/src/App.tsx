import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Button } from "@/components/ui/button";
import { NavigationBar } from "./components/NavBar";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="width:100%">
      <NavigationBar></NavigationBar>
    </div>
  );
}

export default App;
