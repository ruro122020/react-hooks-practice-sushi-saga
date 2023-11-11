import React, { useState } from "react";
import MoreButton from "./MoreButton";
import Sushi from './Sushi'

function SushiContainer({ sushisList, setPlates, balance, setBalance }) {
  const [count, setCount] = useState(0)

  const handleMoreSushi = () => {
    setCount(prevCount => prevCount + 4)
  }
  const splitSushis = sushisList.slice(count, count + 4)
  const displaySushis = splitSushis.map(sushi => <Sushi
    key={sushi.id}
    sushi={sushi}
    setPlates={setPlates}
    balance={balance}
    setBalance={setBalance}
  />)
  return (
    <div className="belt">
      {/* Render Sushi components here! */}
      {displaySushis}
      <MoreButton onMoreSushi={handleMoreSushi} />
    </div>
  );
}

export default SushiContainer;
