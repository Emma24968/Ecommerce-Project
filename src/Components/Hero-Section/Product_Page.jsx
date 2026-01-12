import { Card } from "./Card";
import { Title } from "./Title";

export const Product = ({products, selectedCategory,onButtonClick}) => {
  return (
    <div className="flex flex-col">
      <h2>Filtering by : {selectedCategory}</h2>
      <Title />
      <div className="grid grid-cols-3">
        {products.map((product) => (
          <Card key={product.id} title={product.name} image={product.image} rating={product.rating} stock={product.available} onButtonClick={onButtonClick}/>
        ))}
      </div>
    </div>
  );
};
