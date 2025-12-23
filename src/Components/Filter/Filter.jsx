

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
      <hr className='mt-3 mb-3' />
      <Size />
      <hr className='mt-3 mb-3' />
      <Color />

      <hr className='mt-3 mb-3' />

      <PriceRange />
      <hr className='mt-3 mb-3' />
      <Rating />
    </div>

  );
};
