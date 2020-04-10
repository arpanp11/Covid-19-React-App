import React from 'react';

const CountryCard = ({ countryData }) => (
  <div className='w-64 shadow m-5 max-w-sm rounded overflow-hidden shadow-lg'>
    <div className='bg-white p-4 px-6'>
      <h3 className='text-xl font-bold mb-2'>{countryData.Country}</h3>
      <div className='text-gray-700 text-base'>
        <p>
          <strong>Confirmed:</strong>{' '}
          {countryData.TotalConfirmed.toLocaleString()}
        </p>
        <p>
          <strong>Deaths:</strong> {countryData.TotalDeaths.toLocaleString()}
        </p>
        <p>
          <strong>Recovered:</strong>{' '}
          {countryData.TotalRecovered.toLocaleString()}
        </p>
      </div>
    </div>
  </div>
);

// {countryData.Country}

export default CountryCard;
