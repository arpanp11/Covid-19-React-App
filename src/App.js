import React, { useState, useEffect } from 'react';
import CountryCard from './components/CountryCard';
import GlobalCard from './components/GlobalCard';

function App() {
  const [countries, setCountries] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [sortByName, setSortByName] = useState(true);

  useEffect(() => {
    fetch('https://api.covid19api.com/summary')
      .then((res) => res.json())
      .then((data) => {
        // console.log(data.Countries)
        setCountries(data.Countries);
      })
      .catch((err) => console.log(err));
  }, []);

  const inputChangeHandler = (e) => {
    setInputValue(e.target.value);
  };

  const filteredCountries = countries.filter((country) => {
    return country.Country.toLowerCase().includes(inputValue.toLowerCase());
  });

  const compareByCase = (a, b) => {
    if (sortByName) {
      return b.TotalConfirmed - a.TotalConfirmed;
    }
    return 0;
  };

  const changeCheckboxHandler = (e) => {
    setSortByName(!sortByName);
  };

  return (
    <div>
      <h1 className='text-4xl bg-green-500 text-white p-4'>
        Covid-19 Live Tracker
      </h1>
      <div className='flex items-center justify-center pt-5'>
        <input
          className='border border-solid border-black rounded-md outline-none p-3 w-1/2'
          type='text'
          placeholder='Search for Country'
          value={inputValue}
          onChange={inputChangeHandler}
        />
      </div>
      <div className='text-center p-4'>
        <span className='m-2'>Sort by: </span>
        <input
          id='byCountryName'
          type='checkbox'
          value={sortByName}
          onChange={changeCheckboxHandler}
        />
        <label htmlFor='byCountryName' className='m-2'>
          Country Name
        </label>
      </div>
      <GlobalCard globalData={global} />
      <div className='flex flex-wrap justify-center'>
        {filteredCountries.length < 1 ? (
          <p className='p-3 text-xl'>
            {inputValue === '' ? 'Loading...' : 'No counties found! Try agian!'}
          </p>
        ) : (
          filteredCountries
            .sort(compareByCase)
            .map((country) => (
              <CountryCard countryData={country} key={country.countryCode} />
            ))
        )}
      </div>
    </div>
  );
}

export default App;
