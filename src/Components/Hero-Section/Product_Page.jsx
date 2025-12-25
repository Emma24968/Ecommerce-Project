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
export const Product = () => {
  return (
    <div className="flex">
      <Title />
      <div>
        <Card title={`Women's Tech Short Sleeve`} image={techSleeve} />
        <Card title={"Cashmere Wool Blend Coat"} image={cashmere} />
        <Card title={"French Terry Fleece Jogger"} image={fleece} />
      </div>
      <div>
        <Card title={"Lightweight Waffle Full-Length"} image={waffle} />
        <Card title={`Champion Women's Shorts`} image={short} />
        <Card title={`Women's Slim-Fit`} image={slimFit} />
      </div>
      <div>
        <Card title={`Men's Slim-Fit`} image={men_slimFit} />
        <Card title={`Champion Men's Shorts`} image={men_champions} />
        <Card title={`Men's Tech Short Sleeve`} image={men_tech} />
      </div>
    </div>
  );
};
