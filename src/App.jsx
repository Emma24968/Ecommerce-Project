import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Header } from "./Components/Header/Header";
import { SideBar } from "./Components/Navigation/SideBar";
import { Filter } from "./Components/Filter/Filter";
import { Product } from "./Components/Hero-Section/Product_Page";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex ">
      <div className="w-[5%]">
        <SideBar />
      </div>
      <div className="w-[95%]">
        <div className="w-full">
          {" "}
          <Header />
        </div>
        <div className="flex w-full ml-4  bg-gray-50">
          <div className=" w-[18%]">
            {" "}
            <Filter />
          </div>
          <div className="">
            {" "}
            <Product />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
