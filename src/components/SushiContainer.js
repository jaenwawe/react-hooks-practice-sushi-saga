import React, {useState, useEffect} from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";
import App from "./App"

function SushiContainer({moneyRemaining}) {
  const url=  "http://localhost:3001/sushis"
  const [sushis, setSuchis] = useState([])
  
  const fourSushis = sushis.slice(0,4);
  let more = true;


  //maybe at Sushi state?
  let click = 0;
  let isEaten= false

     
  const eatenClick = ()=> {
    ++click;
    if(click > 0) {
      isEaten = true;
    }
  }  

  useEffect(()=>
  {
    fetch(url)
    .then(r=>r.json())
    .then(sushiData => setSuchis(sushiData))
  },[]);
  
  const showMore = ()=> {
  (more = !more)
  console.log(more)
  console.log(noSushi)
  console.log(sushis)
  }
  

//even if else will only render the susi on the page.  The first input wins.  
let noSushi=  more ? (sushis.slice(0,4)) :  sushis 


  //don't eate State goes here too


//use to manage sushis indirectly without parenthesis e.g. eaten
const updateSushis=()=>{ console.log(sushis) }


  return (
    <div className="belt">
    {noSushi.map(sushi=> <Sushi moneyRemaining= {moneyRemaining} setSuchis={setSuchis} eaten = {sushi.eaten} key= {sushi.id} sushi ={sushi}  eaten= {eatenClick}/>)}
      <MoreButton showMore = {showMore}/>
    </div>
  );
}

export default SushiContainer;
