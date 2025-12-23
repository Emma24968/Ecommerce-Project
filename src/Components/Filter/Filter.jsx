

import { Category } from "./Category";
import { Color } from "./Color";
import { Header } from "./Header";
import { PriceRange } from "./Range";
import { Rating } from "./Rating";
import { Size } from "./Size";

export const Filter = () => {
  return (
    <div className="w-[15%]">
      <Header />
      <Category />
      <hr />
      <Size />
      <hr />
      <Color />

      <hr />

      <PriceRange />
      <hr />
      <Rating />
    </div>

  );
};
