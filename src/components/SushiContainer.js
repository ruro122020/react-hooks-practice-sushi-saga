import React, { useState } from "react";
import MoreButton from "./MoreButton";
import Sushi from './Sushi'


function SushiContainer({ sushisList, setPlates, balance, setBalance, onUpdateSushi }) {
  const [count, setCount] = useState(0)
  const splitSushis = sushisList.slice(count, count + 4)

  const handleMoreSushi = () => {
    if (sushisList[sushisList.length - 1].id === splitSushis[splitSushis.length - 1].id) {
      setCount(0)
    } else {
      setCount(prevCount => prevCount + 4)
    }
  }
  console.log(count)

  const displaySushis = splitSushis.map(sushi => <Sushi
    key={sushi.id}
    sushi={sushi}
    setPlates={setPlates}
    balance={balance}
    setBalance={setBalance}
    onUpdateSushi={onUpdateSushi}
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
