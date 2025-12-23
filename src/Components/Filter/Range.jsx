import { useState } from "react";
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";


export const PriceRange = () => {
  const [price, setPrice] = useState([0, 1000]);

  
  return (
    <div >
      <h3 className="font-semibold">Price Range</h3>
      <div className="flex gap-30 mb-3">
        <span>${price[0]}</span>
        <span>${price[1]}</span>
      </div>
        <RangeSlider min={0}
        max={1000}
        step={10}
        value={price}
        onInput={setPrice}
/>
<div className="flex gap-35 mt-3">
    <span>0</span>
        <span>1000</span>



</div>
    </div>
  );
};
