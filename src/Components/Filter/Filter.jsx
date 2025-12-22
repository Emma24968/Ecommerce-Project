import { Category } from "./Category";
import { Color } from "./Color";
import "./Filter.css";
import { Header } from "./Header";
import Range, { PriceRange } from "./Range";
import { Rating } from "./Rating";
import { Size } from "./Size";

export const Filter = () => {
  return (
    <div className="filter">
      <Header />
      <Category />
      <hr />
      <Color />
      <hr />

      <Size />
      <hr />

      <PriceRange />
      <hr />
      <Rating />
    </div>

  );
};
