import React, { useState } from "react";

function Sushi({ sushi, setPlates, balance, setBalance, onUpdateSushi = { onUpdateSushi } }) {
  const { id, img_url, name, price, ateSushi } = sushi

  const handleAteSushiClick = () => {
    if (sushi.price < balance) {
      const newBalance = balance - sushi.price
      setBalance(newBalance)
      setPlates(prevPlates => [...prevPlates, sushi])
      updateSushi()
    }
  }

  const updateSushi = () => {
    fetch(`http://localhost:3001/sushis/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ ateSushi: true })
    })
      .then(res => res.json())
      .then(updatedSushi => onUpdateSushi(updatedSushi))
  }
  return (
    <div className="sushi">
      <div className="plate" onClick={handleAteSushiClick}>
        {/* Tell me if this sushi has been eaten! */}
        {!ateSushi && <img
          src={img_url}
          alt={"Sushi"}
          width="100%"
        />}
      </div>
      <h4 className="sushi-details">
        {name} - ${price}
      </h4>
    </div>
  );
}

export default Sushi;
