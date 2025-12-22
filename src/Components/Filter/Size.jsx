import "./Size.css";

import { Circle, CircleCheckBig } from "lucide-react";

export const Size = () => {
  return (
    <div>
      <h3>Size</h3>
      <div className="size-container">
        <div className="size">
          <input type="radio" id="testing"/><label for="testing">XS</label>
          <input type="radio" id="testing"/><label for="testing">X</label>
          <input type="radio" id="testing"/><label for="testing">M</label>
        </div>
        <div className="size">
                    <input type="radio" id="testing"/><label for="testing">XL</label>
                    <input type="radio" id="testing"/><label for="testing">L</label>
        </div>
      </div>
    </div>
  );
};
