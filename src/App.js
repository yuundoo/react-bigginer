import Button from "./Button"
import styles from "./App.module.css"
import {useState, useEffect} from "react";
import { func } from "prop-types";


function App(){
  const [loading, setLoading] = useState(true);
  const [coins, setConins ] = useState([]);
  const [dollar, setDollar] = useState(0);
  const [myCoinPrice, setMyCoinPrice] = useState(0);

  useEffect(()=>{
    fetch("https://api.coinpaprika.com/v1/tickers?limit=10").then(response => response.json())
    .then(json => {
      setConins(json)
      setLoading(false);
    });
  }, [])
    const onDollarChange = (event) => {
      setDollar(event.target.value);
    };
    const onSelect = (event) => {
      setMyCoinPrice(event.target.value);
    };
  return(
    <div>
    <h1>coins {loading ? "" : `(${coins.length})`}</h1>
    {loading ? (
      <strong>Loading</strong>
    ) : (
      <div>
        <input
          valuse={dollar}
          onChange={onDollarChange}
          type="number"
          placeholder="price!"
        />
        <div>

        <select onChange={onSelect}>
          {/* <option value={0}>select coin</option> */}
          {coins.map((coin) => (
            <option value={coin.quotes.USD.price}>
              {coin.name} ({coin.symbol}): {coin.quotes.USD.price} USD
            </option>
          ))}
        </select>
        </div>
       
        <input value={dollar/myCoinPrice} type="number" disabled={true} />
      </div>
    )}
  </div>
);
}

export default App;