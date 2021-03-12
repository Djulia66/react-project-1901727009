import React from 'react';
import './Money.css';

const Money = ({
  name,
  price,
  symbol,
  marketcap,
  volume,
  image,
  priceChange
}) => {
  return (
    <div className='money-container'>
      <div className='money-row'>
        <div className='money'>
          <img src={image} alt='crypto' />
          <h1>{name}</h1>
          <p className='money-symbol'>{symbol}</p>
        </div>
        <div className='money-data'>
          <p className='money-price'>${price}</p>
          <p className='money-volume'>${volume.toLocaleString()}</p>

          {priceChange < 0 ? (
            <p className='money-percent red'>{priceChange.toFixed(2)}%</p>
          ) : (
            <p className='money-percent green'>{priceChange.toFixed(2)}%</p>
          )}

          <p className='money-marketcap'>
            Mkt Cap: ${marketcap.toLocaleString()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Money