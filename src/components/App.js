import React,{useState} from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {

const  [moneyRemaining, setMoneyRemaining]=useState(100)
  return (
    <div className="app">
      <SushiContainer moneyRemaining={moneyRemaining}/>
      <Table />
    </div>
  );
}

export default App;
