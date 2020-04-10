import React, { useState, useEffect } from 'react';

function GlobalCard() {
  const [global, setGlobal] = useState([]);

  useEffect(() => {
    fetch('https://api.covid19api.com/summary')
      .then((res) => res.json())
      .then((data) => {
        // console.log(data.Global);
        setGlobal(data.Global);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className='max-w-full shadow m-5 rounded overflow-hidden shadow-lg bg-red-400 p-4 text-white'>
      <h2 className='text-3xl text-center font-bold mb-2 pb-4 tracking-widest uppercase'>
        global
      </h2>
      <div className='sm:flex justify-between'>
        <div className='sm:border-0  border-b-2'>
          <p className='font-bold'>Total Confirmed</p>
          <p>{global.TotalConfirmed}</p>
        </div>
        <div className='sm:border-0 border-b-2'>
          <p className='font-bold'>New Confirmed</p>
          <p>{global.NewConfirmed}</p>
        </div>
        <div className='sm:border-0 border-b-2'>
          <p className='font-bold'> Total Deaths</p>
          <p>{global.TotalDeaths}</p>
        </div>
        <div className='sm:border-0 border-b-2'>
          <p className='font-bold'> New Deaths</p>
          <p>{global.NewDeaths}</p>
        </div>
        <div className='sm:border-0 border-b-2'>
          <p className='font-bold'>Total Recovered</p>
          <p>{global.TotalRecovered}</p>
        </div>
        <div>
          <p className='font-bold'>New Recovered</p>
          <p>{global.NewRecovered}</p>
        </div>
      </div>
    </div>
  );
}

export default GlobalCard;
