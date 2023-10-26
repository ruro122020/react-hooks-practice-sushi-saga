/*
  -create a ateSushi state and set it to false
  -set ateSushi state to true when a plate is clicked on
  -use the ateSushi state to determine whether the image will be rendered or not
  -create a callback function to update the ateSushi state
*/

import React, {useState} from "react";

function Sushi({sushi, setPlates}) {
  const {id, img_url, name, price} =sushi
  const [ateSushi, setAteSushi] = useState(false)
  
  const handleAteSushiClick=()=>{
    setPlates(prevPlates => [...prevPlates, sushi])
    setAteSushi(prevAteSushi => !prevAteSushi)
  }
  return (
    <div className="sushi">
      <div className="plate" onClick={handleAteSushiClick}>
        {/* Tell me if this sushi has been eaten! */}
        {ateSushi ? null : (
          <img
            src={img_url}
            alt={"Sushi"}
            width="100%"
          />
        )}
      </div>
      <h4 className="sushi-details">
        {name} - ${price}
      </h4>
    </div>
  );
}

export default Sushi;
