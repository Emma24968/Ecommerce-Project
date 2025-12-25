import { Card } from "./Card"
import { Title } from "./Title"

export const Product =()=>{
    return(
        <div className="flex">
          <Title />  
          <Card title={`Women's Tech Short Sleeve`}/>
          <Card title={'Cashmere Wool Blend Coat'}/>
          <Card />

        </div>
    )
}