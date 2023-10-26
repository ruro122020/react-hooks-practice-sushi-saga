import React, { useState } from "react";
import MoreButton from "./MoreButton";
import Sushi from './Sushi'

/*
To Render 4 sushi's at a time:
  -create a callback renderMore Function 
    --in this function, 
      --slice the shushisList 
  -pass the renderMore function to the MoreButton component
  In the MoreButton component:
  -call the renderMore function on the onClick event
 */
function SushiContainer({sushisList}) {
  const [count, setCount] = useState(0)

  const handleMoreSushi =()=>{
    setCount(prevCount => prevCount + 4)
  }
  const splitSushis = sushisList.slice(count, count + 4)
 
  const displaySushis = splitSushis.map(sushi => <Sushi key={sushi.id} sushi={sushi}/> )
  return (
    <div className="belt">
      {/* Render Sushi components here! */}
      {displaySushis}
      <MoreButton onMoreSushi={handleMoreSushi}/>
    </div>
  );
}

export default SushiContainer;
