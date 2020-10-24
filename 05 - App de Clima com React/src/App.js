import React, { useState } from 'react';

import searchIcon from './assets/ui/search.svg';

const api = {
  key: "a71ec159d030652ca119d52d4fef1675",
  base: "https://api.openweathermap.org/data/2.5/"
}

function App() {

  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});

  const search = evt => {
    if (evt.key === "Enter") {
      requestAPI();
    }
  }

  const requestAPI = () => {
    fetch(`${api.base}weather?q=${query}&lang=pt_br&units=metric&APPID=${api.key}`)
      .then(res => res.json())
      .then(result => {
        setQuery('');
        setWeather(result);
      });
  }

  const dateBuilder = (d) => {
    let months = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
    let days = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day}, ${date} de ${month} de ${year}`
  }

  return (
    <>
      <div className={`app 
        ${(typeof weather.main != "undefined") 
          ? ((weather.main.temp > 15) ? 'warm' : '') 
          : ''}
        ${(typeof weather.main != "undefined") 
          ? ((weather.weather[0].id >= 200 && weather.weather[0].id < 300) ? 'thunderstorm' : '') 
          : ''}
        ${(typeof weather.main != "undefined") 
          ? ((weather.weather[0].id >= 300 && weather.weather[0].id < 400) ? 'drizzle' : '') 
          : ''}  
        ${(typeof weather.main != "undefined") 
          ? ((weather.weather[0].id >= 500 && weather.weather[0].id < 600) ? 'rain' : '') 
          : ''}
        ${(typeof weather.main != "undefined") 
          ? ((weather.weather[0].id >= 600 && weather.weather[0].id < 700) ? 'snow' : '') 
          : ''}
        ${(typeof weather.main != "undefined") 
          ? ((weather.weather[0].id >= 700 && weather.weather[0].id < 800) ? 'atmosphere' : '') 
          : ''}
        ${(typeof weather.main != "undefined") 
          ? ((weather.weather[0].id === 800) ? 'clear' : '') 
          : ''}
        ${(typeof weather.main != "undefined") 
          ? ((weather.weather[0].id === 801) ? 'few-clouds' : '') 
          : ''}
        ${(typeof weather.main != "undefined") 
          ? ((weather.weather[0].id === 802) ? 'scattered-clouds' : '') 
          : ''}
        ${(typeof weather.main != "undefined") 
          ? ((weather.weather[0].id >= 803) ? 'broken-clouds' : '') 
          : ''}
      `}>
        <main>
          <div className="search-box">
            <input 
              type="text" 
              className="search-bar" 
              placeholder="Buscar..."
              onChange={e => setQuery(e.target.value)} 
              value={query}
              onKeyPress={search}
            />
            <button>
              <img 
                src={searchIcon} 
                onPointerDown={requestAPI}
                alt="Buscar"
              />
            </button>
          </div>
          {(typeof weather.main != "undefined") ? (
            <>
              <div className="location-box">
                <div className="location">{weather.name}, {weather.sys.country}</div>
                <div className="date">{dateBuilder(new Date())}</div>
              </div>
              <div className="weather-box">
                <div className="temp">
                  {Math.round(weather.main.temp)}°C
                </div>
                <div className="weather">
                  {weather.weather[0].description}
                </div>
              </div>
            </>
          ) : (<p className="info-message">Busque uma cidade na barra acima</p>)}
        </main>
      </div>
      <a href="https://omagotemum.site" target="_blank" rel="noreferrer noopener">Made by Mago</a>
    </>
  );
}

export default App;
