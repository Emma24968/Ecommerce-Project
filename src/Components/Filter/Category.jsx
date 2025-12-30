import { products } from "../../data/products";

const categories = [
  "All Items",
  "Featured",
  "On Sale",
  "Best Seller",
  "New Items",
];

export const Category = ({onFilter, selectedCategory}) => {

  const handlefilter = (category) => {
   onFilter(category)
  }

  return (
    <div>
      <h3 className="font-semibold">Category</h3>
      <div className="grid grid-cols-2 gap-[3px]">
          {categories.map((category, index) => (
            <button
            key={index}
            onClick={() => handlefilter(category)}
              className={ `${(selectedCategory == category) ? 'bg-black text-white' : 'bg-gray-100 text-black'} p-1 border border-gray-300  rounded cursor-pointer
           `}
            >
              {category}
            </button>
          ))}
      </div>
    </div>
  );
};
