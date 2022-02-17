import React from "react";
function Coin({ name, icon, price, symbol,phr,day,website }) {
   const setPrice = () => {
        let ampm = phr >=0 ? 'Inc' : 'Dec'
        return `${phr}(${ampm})`
      }
      const setPrice1 = () => {
        let ampm = day >=0 ? 'Inc' : 'Dec'
        return `${day}(${ampm})`      
    }

  return (
    <div className="coin" >
      <h1> {name}</h1>
      <img src={icon} />
      <h3> Price: {price} Eur</h3>
      <h3> Symbol: {symbol}</h3>
      <h3> Price Change(last 1hr):  { setPrice() } Eur </h3>
      <h3> Price Change(last 1day):  { setPrice1() } Eur </h3>
      <h3> Website: <a id="web" href ={website}> {website} </a></h3>
    </div>
  );
}

export default Coin;