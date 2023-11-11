import React, { useState } from "react";

function Sushi({ sushi, setPlates, balance, setBalance }) {
  const { id, img_url, name, price } = sushi
  const [ateSushi, setAteSushi] = useState(false)

  const handleAteSushiClick = () => {
    if (sushi.price < balance) {
      const newBalance = balance - sushi.price
      setBalance(newBalance)
      setPlates(prevPlates => [...prevPlates, sushi])
      setAteSushi(prevAteSushi => !prevAteSushi)
    }
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
