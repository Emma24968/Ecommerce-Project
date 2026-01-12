import { useState } from "react";
import "./App.css";
import { Header } from "./Components/Header/Header";
import { SideBar } from "./Components/Navigation/SideBar";
import { Filter } from "./Components/Filter/Filter";
import { Product } from "./Components/Hero-Section/Product_Page";
import { products as initialProducts } from "./data/products";

function App() {
  // hooks
  const [products, setProducts] = useState(initialProducts);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const [rating, setRating] = useState("");
  const [selection, setSelection] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [search, setSearch] = useState("");
  const [count, setCount] = useState(0)
  console.log(count)

  const onButtonAdd = ()=>{
setCount(count + 1)
  }

  const filterdproducts = initialProducts.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  const onFilterCategoryHandler = (category) => {
    setSelectedCategory(category);
    const filterdproducts = initialProducts.filter((product) =>
      product.category.includes(category)
    );
    setProducts(filterdproducts);
  };

  const checkStatus = (size) => {
    setSelection((initial) => (initial === size ? "" : size));
  };

  const onFilterSizeHandler = (size) => {
    setSelectedSize(size);
    const filterdproducts = initialProducts.filter((product) =>
      product.sizes.includes(size)
    );
    setProducts(filterdproducts);
  };
  const onRatingHandler = (rating) => {
    setRating(rating);
    const filterdproducts = initialProducts.filter(
      (product) => product.rating === rating
    );
    setProducts(filterdproducts);
  };
  const onselectedColorHandler = (selectedColor) => {
    setSelectedColor(selectedColor);
    const filterdproducts = initialProducts.filter((product) =>
      product.colors.includes(selectedColor)
    );
    setProducts(filterdproducts);
  };

  const onClearFilterHandler = () => {
    setProducts(initialProducts);
    setSelectedCategory(null);
    setSelectedColor(null);
    setSelectedSize(null);
    setRating(null);
  };

  return (
    <div className="flex h-screen ">
      <div className="w-[5%] ">
        <SideBar />
      </div>
      <div className="w-[95%] flex flex-col">
          <Header search={search} onSearch={setSearch} count={count}/>
        <div className="sticky top-0 z-50 bg-white ml-4">
          
        </div>
        <div className="flex flex-1 bg-gray-50 ">
          <div className="w-[19%] pl-[10px]">
            <div className="sticky top-20">
              <Filter
                products={products}
                selectedCategory={selectedCategory}
                selectedSize={selectedSize}
                selection={selection}
                onCheck={checkStatus}
                onFilterSize={onFilterSizeHandler}
                onFilterCategory={onFilterCategoryHandler}
                onClear={onClearFilterHandler}
                rating={rating}
                onRating={onRatingHandler}
                selectedColor={selectedColor}
                onSelectedColor={onselectedColorHandler}
              />
            </div>
          </div>
          <div className="flex-1  p-4">
            <Product products={products}  selectedCategory={selectedCategory} onButtonClick={onButtonAdd} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
