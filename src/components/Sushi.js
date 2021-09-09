import React,{useState} from "react";
import SushiContainer from "./SushiContainer";




function Sushi({moneyRemaining, sushi, eaten = false}) {
   

  const isEaten = () => {
    eaten = true;
    sushi.img_url =null;
  }

  return (
    <div className="sushi">
       <div className="plate" onClick={isEaten}>        
    
           <img
             src={sushi.img_url}
             alt={sushi.name}
             width="100%"
           />
         
       </div>
       <h4 className="sushi-details">
       ${moneyRemaining} - ${sushi.price}
      </h4>
    </div>
  );
}

export default Sushi;
