import { Card } from "./Card"
import { Title } from "./Title"
import cashmere from "../../assets/Media_Folder/cashmere.png";
import techSleeve from "../../assets/Media_Folder/tech-short-sleeve.png"

export const Product =()=>{
    return(
        <div className="flex">
          <Title />  
          <Card title={`Women's Tech Short Sleeve`} image={techSleeve}/>
          <Card title={'Cashmere Wool Blend Coat'} image={cashmere}/>
          <Card />

        </div>
    )
}