import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Header } from "./Components/Header/Header";
import { SideBar } from "./Components/Navigation/SideBar";
import { Filter } from "./Components/Filter/Filter";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex">
      <div className="w-[5%]">
        
        <SideBar />
      </div>
      <div className="w-[95%]">
        <Header />
        <Filter />
      </div>
    </div>
  );
}

export default App;
