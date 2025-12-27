import { useState } from "react";
import "./App.css";
import { Header } from "./Components/Header/Header";
import { SideBar } from "./Components/Navigation/SideBar";
import { Filter } from "./Components/Filter/Filter";
import { Product } from "./Components/Hero-Section/Product_Page";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex  ">
      <div className="w-[5%]">
        <SideBar />
      </div>
      <div className="w-[95%] overflow-hidden">
        <div className="w-full ml-4">
          {" "}
          <Header />
        </div>
        <div className="flex w-full  bg-gray-50">
          <div className=" w-[19%] pl-[10px]">
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
