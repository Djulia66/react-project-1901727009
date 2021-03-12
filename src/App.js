import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Money from './Money';

function App() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    axios
      .get(
        'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false'
      )
      .then(res => {
        setCoins(res.data);
        console.log(res.data);
      })
      .catch(error => console.log(error));
  }, []);

  const handleChange = e => {
    setSearch(e.target.value);
  };

  const filteredMoneys = moneys.filter(money =>
    money.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className='money-app'>
      <div className='money-search'>
        <h1 className='money-text'>Search a currency</h1>
        <form>
          <input
            className='money-input'
            type='text'
            onChange={handleChange}
            placeholder='Search'
          />
        </form>
      </div>
      {filteredMoneys.map(money => {
        return (
          <Coin
            key={money.id}
            name={money.name}
            price={money.current_price}
            symbol={money.symbol}
            marketcap={money.total_volume}
            volume={money.market_cap}
            image={money.image}
            priceChange={money.price_change_percentage_24h}
          />
        );
      })}
    </div>
  );
}

export default App;