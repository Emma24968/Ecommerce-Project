

import { Category } from "./Category";
import { Color } from "./Color";
import { Header } from "./Header";
import { PriceRange } from "./Range";
import { Rating } from "./Rating";
import { Size } from "./Size";

export const Filter = () => {
  return (
    <div className="w-[18%] bg-white rounded shadow p-4 sticky top-4 mt-4 mb-4">
      <Header />
      <Category />
      <hr className='mt-1.5 mb-1.5 border-gray-200' />
      <Size />
      <hr className='mt-1 mb-1  border-gray-200' />
      <Color />

      <hr className='mt-1 mb-1  border-gray-200' />

      <PriceRange />
      <hr className='mt-1 mb-1  border-gray-200' />
      <Rating />
    </div>

  );
};
