

import { useState } from "react";
import { Category } from "./Category";
import { Color } from "./Color";
import { Header } from "./Header";
import { PriceRange } from "./Range";
import { Rating } from "./Rating";
import { Size } from "./Size";
export const Filter = ({products, onFilterCategory,onFilterSize, onClear,onCheck, selectedCategory, selectedSize}) => {
  return (
    <div className="bg-white rounded shadow p-4 mt-4 mb-4">
  <Header onClear={onClear}/>
  <Category products={products} selectedCategory={selectedCategory} onFilter={onFilterCategory} />
  <hr className='mt-1.5 mb-1.5 border-gray-200' />
  <Size products={products} selectedSize={selectedSize} oncheckStatus={onCheck}
 onFilter={onFilterSize}/>
  <hr className='mt-1 mb-1 border-gray-200' />
  <Color />
  <hr className='mt-1 mb-1 border-gray-200' />
  <PriceRange />
  <hr className='mt-1 mb-1 border-gray-200' />
  <Rating />
</div>


  );
};
