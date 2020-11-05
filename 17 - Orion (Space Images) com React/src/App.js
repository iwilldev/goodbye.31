import React, { useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import axios from 'axios';

import './App.css';

function App() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [image, setImage] = useState(null);
  const [menuVisibility, setMenuVisibility] = useState(false);

  useEffect(() => {

    if (currentDate) {

      let fullYear = currentDate.getFullYear();
      let month = currentDate.getMonth() + 1;
      let date = currentDate.getDate();

      if (month < 10) {
        month = "0" + month
      }
  
      if (date < 10) {
        date = "0" + date
      }

      const fullDate = fullYear + '-' + month + '-' + date;

      console.log(fullDate)

      axios
      .get(`https://api.nasa.gov/planetary/apod?date=${fullDate}&api_key=3fLCNKes1ezizsJ9u50p1yQnV4FnKTkdeGhf5Ndi`)
      .then(response => {
        setImage(response.data)
      })
      .catch((error) => {
        console.log(error.response.status);
      });
      setMenuVisibility(false);
    }

  }, [currentDate])

  return (
    <div className="App">
      <div className="header">
        <h1>ORION</h1>
        <button onClick={() => {setMenuVisibility(!menuVisibility)}}>Menu</button>
      </div>
      <div className={menuVisibility ? 'menu visible' : 'menu'}>
        <h3>Selecione uma data no calendário abaixo, para visualizar a 'Astronomy Picture of the Day' do repositório da NASA.</h3>
        <Calendar
          maxDate={new Date()}
          minDate={new Date(1995, 5, 16)}
          value={currentDate}
          onChange={(date) => {
            setCurrentDate(date)
          }}
        />
        <p>made with love to my star huntress :)</p>
      </div>
      <div className="container">
        { image 
          ? <>
              <div className="image-description">
                { image.title ? <h4>{ image.title }</h4> : null } 
                { image.hdurl ? <a href={image.url} target="_blank" rel="noopener noreferrer">Ver em HD</a> : null } 
              </div>
              <img src={image.url} alt={image.title}/>
            </>
          
          : null
        }
      </div>
      
      
    </div>
  );
}

export default App;
