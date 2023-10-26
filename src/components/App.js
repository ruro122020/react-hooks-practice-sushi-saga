
/*
1. The sushi list is properly received from the server and displayed in our app.
    -create a sushisList state
    -pass sushisList to the SushiContainer
  In the SushiComponent:
    2. Only 4 sushi are rendered at a time.

3. Clicking the "More Sushi!" button shows the next set of 4 sushi in the list. For this assignment, you don't have to be concerned about what happens when you reach the end of the sushi list.

4. Clicking a sushi on a plate will eat the sushi, causing it to be removed from its plate and an empty plate to appear on the table.

5. We need to make money! Whenever a sushi is eaten, customers should be automatically charged! Based on a budget decided by you, the developer, the amount of money remaining should go down by the cost of the sushi that was eaten. There is a spot to display this number in the Table component.

6. No free meals! Customers cannot eat any sushi that exceeds the amount of money remaining in their balance.
*/
import React,{useState, useEffect} from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {
  const [sushsList, setSushisList] = useState([])
  useEffect(()=>{
    fetch('http://localhost:3001/sushis')
    .then(res=> res.json())
    .then(sushis => setSushisList(sushis))
  }, [])
  return (
    <div className="app">
      <SushiContainer sushisList={sushsList}/>
      <Table />
    </div>
  );
}

export default App;
