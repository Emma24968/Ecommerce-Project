import { Card } from "./Card";
import { Title } from "./Title";
import cashmere from "../../assets/Media_Folder/cashmere.png";
import techSleeve from "../../assets/Media_Folder/tech-short-sleeve.png";
import fleece from "../../assets/Media_Folder/fleece-jogger.png";
import waffle from "../../assets/Media_Folder/waffle.png";
import short from "../../assets/Media_Folder/champions-short.png";
import slimFit from "../../assets/Media_Folder/slimfit.png";
import men_slimFit from "../../assets/Media_Folder/men-slim-fit.png";
import men_champions from "../../assets/Media_Folder/men-champions.png";
import men_tech from "../../assets/Media_Folder/men-tech.png";
import { products } from "../../data/products";
export const Product = () => {
  return (
    <div className="flex">
      <Title />
      <div className="grid grid-cols-3">
        {products.map((product) => (
          <Card title={product.name} image={product.image} rating={product.rating} stock={product.available}/>
        ))}
      </div>
    </div>
  );
};
