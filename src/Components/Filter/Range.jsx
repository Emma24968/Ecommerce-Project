import { useState } from "react";
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";


export const PriceRange = () => {
  const [price, setPrice] = useState([0, 1000]);

  
  return (
    <div className="range">
      <h3>Price Range</h3>
      <div className="price-container">
        <span>${price[0]}</span>
        <span>${price[1]}</span>
      </div>
        <RangeSlider min={0}
        max={1000}
        step={10}
        value={price}
        onInput={setPrice}
/>
<div className="range-label">
    <span>0</span>
        <span>1000</span>



</div>
    </div>
  );
};
