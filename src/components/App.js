
/*
Core Deliverables:
1. The sushi list is properly received from the server and displayed in our app. 
2. Only 4 sushi are rendered at a time.
3. Clicking the "More Sushi!" button shows the next set of 4 sushi in the list. For this assignment, you don't 
4. Clicking a sushi on a plate will eat the sushi, causing it to be removed from its plate and an empty plate to appear on the table.
5. We need to make money! Whenever a sushi is eaten, customers should be automatically charged! Based on a budget decided by you, the developer, the amount of money remaining should go down by the cost of the sushi that was eaten. There is a spot to display this number in the Table component.
6. No free meals! Customers cannot eat any sushi that exceeds the amount of money remaining in their balance.
Core Deliverable are done. 

Advanced Deliverables:
1.Sushi Wallet! Add a form for customers to add more money to their balance.
2. Full rotation! When the end of the line of sushi is reached, the conveyor belt should start from the beginning. Sushi that have already been eaten should remain eaten. It would be creepy if they reappeared!
*/
import React, { useState, useEffect } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {
  const [sushsList, setSushisList] = useState([])
  const [plates, setPlates] = useState([])
  const [balance, setBalance] = useState(100)
  useEffect(() => {
    fetch('http://localhost:3001/sushis')
      .then(res => res.json())
      .then(sushis => setSushisList(sushis))
  }, [])


  return (
    <div className="app">
      <SushiContainer sushisList={sushsList} setPlates={setPlates} balance={balance} setBalance={setBalance} />
      <Table plates={plates} balance={balance} />
    </div>
  );
}

export default App;
