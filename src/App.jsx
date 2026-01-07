import { useState } from "react";
import "./App.css";
import { Header } from "./Components/Header/Header";
import { SideBar } from "./Components/Navigation/SideBar";
import { Filter } from "./Components/Filter/Filter";
import { Product } from "./Components/Hero-Section/Product_Page";
import { products as initialProducts } from "./data/products";

function App() {
  // hooks
  const [products, setProducts] = useState(initialProducts)
  const [selectedCategory, setSelectedCategory] = useState("")
  const [selectedSize, setSelectedSize]=useState('')
  const [rating, setRating]=useState('')
  const [selection,setSelection]=useState('')
  const [selectedColor,setselectedColor]=useState('')


  const onFilterCategoryHandler = (category) => {
    setSelectedCategory(category)
    const filterdproducts = initialProducts.filter(product => product.category.includes(category))
    setProducts(filterdproducts)
  }

    const checkStatus =(size)=>{
      setSelection((initial)=>
      initial===size? '':size)
    }

  const onFilterSizeHandler=(size)=>{
    setSelectedSize(size)
    const filterdproducts = initialProducts.filter(product =>product.sizes.includes(size))
    setProducts(filterdproducts)
  }
  const onRatingHandler=(rating)=>{
    setRating(rating)
    const filterdproducts = initialProducts.filter(product =>product.rating===rating)
    setProducts(filterdproducts)
  }
  const onselectedColorHandler=(selectedColor)=>{
    setselectedColor(selectedColor)
    const filterdproducts = initialProducts.filter(product =>product.colors.includes(selectedColor))
    setProducts(filterdproducts)
  }

  const onClearFilterHandler =() => {
    setProducts(initialProducts)
    setSelectedCategory(null)
  }

  return (
    <div className="flex h-screen ">
      <div className="w-[5%] sticky top-10">
        <SideBar />
      </div>
      <div className="w-[95%] flex flex-col">
        <div className="sticky top-0 z-50 bg-white ml-4">
          <Header />
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
            <Product products={products} selectedCategory={selectedCategory} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
